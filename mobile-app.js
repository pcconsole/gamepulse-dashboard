// ============================================
// GamePulse Mobile - 移动端交互逻辑
// 数据层100%复用 PC 端，渲染层完全重写
// ============================================

let mCurrentTab = 'strategy';
let mCurrentMonthlyChartType = 'bar';
let mValidationPage = 1;
const M_VALIDATION_PAGE_SIZE = 15;
let mValidationSortKey = 'dailyCalc';
let mValidationSortDir = 'desc';
let mChartInstances = {};

// ============ 初始化 ============

document.addEventListener('DOMContentLoaded', async () => {
    const games = await loadCSVData();
    if (games.length === 0) {
        console.error('No data loaded');
        return;
    }

    document.getElementById('mGameCount').textContent = games.length;

    // 填充筛选器选项
    mPopulateFilters();

    // 初始渲染
    mUpdateAll(filteredGames);

    // 绑定事件
    mBindEvents();

    // 初始化主题
    mInitTheme();
});

// ============ 主题 ============

function mInitTheme() {
    const saved = localStorage.getItem('gp-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    document.getElementById('mThemeToggle')?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('gp-theme', next);

        if (next === 'light') {
            Chart.defaults.color = '#64687a';
            Chart.defaults.borderColor = '#e2e4ea';
        } else {
            Chart.defaults.color = '#8b8fa3';
            Chart.defaults.borderColor = '#2a2d3e';
        }

        // 重绘当前 tab 的图表
        mRedrawCurrentTab();
    });
}

// ============ 填充筛选器 ============

function mPopulateFilters() {
    const genreSelect = document.getElementById('mFilterGenre');
    if (genreSelect) {
        getAllGenres().forEach(g => {
            const opt = document.createElement('option');
            opt.value = g;
            opt.textContent = g;
            genreSelect.appendChild(opt);
        });
    }

    const monthSelect = document.getElementById('mFilterMonth');
    if (monthSelect) {
        getAllMonths().forEach(m => {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = formatMonthLabel(m);
            monthSelect.appendChild(opt);
        });
    }
}

// ============ 全局更新 ============

function mUpdateAll(games) {
    mUpdateStrategyTab(games);

    if (typeof pipelineData !== 'undefined' && pipelineData.length > 0) {
        setTimeout(() => mUpdatePipelineTab(), 100);
    }
    if (typeof newsArticles !== 'undefined' && newsArticles.length > 0) {
        setTimeout(() => mUpdateNewsTab(), 150);
    } else if (typeof newsData !== 'undefined' && newsData.length > 0) {
        setTimeout(() => mUpdateNewsTab(), 150);
    }
    if (typeof earningsCompanies !== 'undefined' && earningsCompanies.length > 0) {
        setTimeout(() => mUpdateEarningsTab(), 200);
    }
    if (typeof storewatchData !== 'undefined') {
        setTimeout(() => mUpdateStorewatchTab(), 250);
    }
}

// ============ Tab: 已上线新游数据表现 ============

function mUpdateStrategyTab(games) {
    const flow = getFlowNodes(games);

    // Strategy KPI
    mSetText('mKpiTotal', flow.total);
    mSetText('mKpiConsole', flow.consoleY);
    mSetText('mKpiConsolePct', pct(flow.consoleY, flow.total) + '%');
    mSetText('mKpiXbox', flow.xboxY);
    mSetText('mKpiXboxPct', pct(flow.xboxY, flow.consoleY) + '%');
    const xgpTotal = flow.sim + flow.aft;
    mSetText('mKpiXGP', xgpTotal);
    mSetText('mKpiXGPPct', pct(xgpTotal, flow.xboxY) + '%');

    // Overview KPI
    const totalRevenue = games.reduce((sum, g) => sum + g.lifetimeRevenue, 0);
    const totalUnits = games.reduce((sum, g) => sum + g.lifetimeUnits, 0);
    const avgRevenue = games.length ? totalRevenue / games.length : 0;
    const revenues = games.map(g => g.lifetimeRevenue);
    const medianRevenue = getMedian(revenues);

    mSetText('mKpiTotalRevenue', formatRevenue(totalRevenue));
    mSetText('mKpiTotalGames', games.length);
    mSetText('mKpiTotalUnits', formatNumber(totalUnits));
    mSetText('mKpiAvgRevenue', formatRevenue(avgRevenue));
    mSetText('mKpiMedian', `中位数: ${formatRevenue(medianRevenue)}`);

    // Executive Summary
    mUpdateExecSummary(games, flow);

    // Flow Summary (精简版)
    mRenderFlowSummary(flow, games);

    // Charts
    mRenderMonthlyDailyRevChart(getMonthlyDailyRevenue(games), mCurrentMonthlyChartType);
    mRenderGenreDailyRevChart(getGenreDailyRevenue(games));
    mRenderPublisherDailyRevChart(getPublisherDailyRevenue(games));

    // XGP 分析摘要
    mRenderXgpSummary(games, flow);

    // 发行商摘要
    mRenderPubSummary(games);

    // 筛选匹配数
    mSetText('mMatchCount', games.length);
    mSetText('mGameCount', games.length);
}

function mUpdateExecSummary(games, flow) {
    const el = document.getElementById('mExecSummaryText');
    if (!el) return;

    const consolePct = pct(flow.consoleY, flow.total);
    const psPct = pct(flow.psY, flow.consoleY);
    const xboxPct = pct(flow.xboxY, flow.consoleY);
    const xgpTotal = flow.sim + flow.aft;
    const xgpPct = pct(xgpTotal, flow.xboxY);

    const totalRevenue = games.reduce((s, g) => s + g.lifetimeRevenue, 0);

    el.innerHTML = `端主新游 Top <strong>${flow.total}</strong> 中，<strong>${consolePct}%</strong> 上线主机；PS <strong>${flow.psY}</strong> 款(${psPct}%)，Xbox <strong>${flow.xboxY}</strong> 款(${xboxPct}%)，双平台 <strong>${flow.bothPlatform}</strong> 款；XGP <strong>${xgpPct}%</strong>（首发${flow.sim}+后发${flow.aft}）。收入 <strong>${formatRevenue(totalRevenue)}</strong>。`;
}

function mRenderFlowSummary(flow, games) {
    const el = document.getElementById('mFlowSummary');
    if (!el) return;

    const consolePct = pct(flow.consoleY, flow.total);
    const xboxPct = pct(flow.xboxY, flow.consoleY);
    const bothPct = pct(flow.bothPlatform, flow.consoleY);
    const xgpPct = pct(flow.sim + flow.aft, flow.xboxY);
    el.innerHTML = `
        <strong>${flow.total}</strong> 款端主新游 → <strong>${flow.consoleY}</strong> 上线主机 (${consolePct}%) → PS <strong>${flow.psY}</strong> · Xbox <strong>${flow.xboxY}</strong> (${xboxPct}%) · 双平台 <strong>${flow.bothPlatform}</strong> (${bothPct}%)
        <br>Xbox中: 首发XGP <strong>${flow.sim}</strong> + 后发XGP <strong>${flow.aft}</strong> | 未加入 <strong>${flow.noXgp}</strong>
    `;

    // 展开详情 bars
    const barsEl = document.getElementById('mFlowBars');
    if (!barsEl) return;

    const maxVal = flow.total;
    const items = [
        { label: '全部端主游戏', value: flow.total, color: '#6366f1' },
        { label: '已上线主机', value: flow.consoleY, color: '#a855f7' },
        { label: '未上线主机', value: flow.consoleN, color: '#64748b' },
        { label: '已登录PlayStation', value: flow.psY, color: '#0ea5e9' },
        { label: '登录Xbox、PlayStation', value: flow.bothPlatform, color: '#f59e0b' },
        { label: '已登录Xbox', value: flow.xboxY, color: '#22c55e' },
        { label: '首发入库XGP', value: flow.sim, color: '#14b8a6' },
        { label: '后发入库XGP', value: flow.aft, color: '#0ea5e9' },
        { label: '未加入订阅', value: flow.noXgp, color: '#64748b' },
    ];

    barsEl.innerHTML = items.map(item => `
        <div class="m-flow-bar-item">
            <div class="m-flow-bar-label">${item.label}</div>
            <div class="m-flow-bar-track">
                <div class="m-flow-bar-fill" style="width:${(item.value / maxVal * 100).toFixed(1)}%;background:${item.color};">
                    ${item.value > 0 ? item.value : ''}
                </div>
            </div>
            <div class="m-flow-bar-count">${item.value}</div>
        </div>
    `).join('');
}

// ============ 移动端 Chart.js 图表 ============

function mDestroyChart(id) {
    if (mChartInstances[id]) {
        mChartInstances[id].destroy();
        delete mChartInstances[id];
    }
}

function mRenderMonthlyDailyRevChart(data, type) {
    const canvas = document.getElementById('mMonthlyDailyRevChart');
    if (!canvas) return;
    mDestroyChart('mMonthlyDaily');

    const labels = data.map(d => d.month);
    const values = data.map(d => d.avgDailyRev || d.totalDailyRev || d.revenue || 0);

    const chartConfig = {
        type: type === 'line' ? 'line' : 'bar',
        data: {
            labels,
            datasets: [{
                label: '日均流水',
                data: values,
                backgroundColor: type === 'line' ? 'transparent' : 'rgba(99,102,241,0.7)',
                borderColor: '#6366f1',
                borderWidth: type === 'line' ? 2 : 0,
                borderRadius: type === 'line' ? 0 : 4,
                fill: type === 'line',
                tension: 0.3,
                pointRadius: type === 'line' ? 3 : 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: { display: false }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 }, maxRotation: 45 }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        font: { size: 10 },
                        callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v)
                    }
                }
            }
        }
    };

    mChartInstances['mMonthlyDaily'] = new Chart(canvas, chartConfig);
}

function mRenderGenreDailyRevChart(data) {
    const canvas = document.getElementById('mGenreDailyRevChart');
    if (!canvas) return;
    mDestroyChart('mGenreDaily');

    const sorted = [...data].sort((a, b) => (b.revenue || b.avgDailyRev || 0) - (a.revenue || a.avgDailyRev || 0)).slice(0, 10);
    const labels = sorted.map(d => d.name || d.genre);
    const values = sorted.map(d => d.revenue || d.avgDailyRev || 0);

    const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#3b82f6', '#0ea5e9', '#14b8a6', '#22c55e', '#f59e0b', '#ef4444', '#ec4899'];

    mChartInstances['mGenreDaily'] = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data: values,
                backgroundColor: colors,
                borderWidth: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 10 }, boxWidth: 12, padding: 8 }
                },
                datalabels: { display: false }
            }
        }
    });
}

function mRenderPublisherDailyRevChart(data) {
    const canvas = document.getElementById('mPublisherDailyRevChart');
    if (!canvas) return;
    mDestroyChart('mPublisherDaily');

    const sorted = [...data].sort((a, b) => (b.revenue || b.totalDailyRev || 0) - (a.revenue || a.totalDailyRev || 0)).slice(0, 15);
    const labels = sorted.map(d => {
        const name = d.name || d.publisher;
        return name.length > 12 ? name.substring(0, 12) + '...' : name;
    });
    const values = sorted.map(d => d.revenue || d.totalDailyRev || 0);

    mChartInstances['mPublisherDaily'] = new Chart(canvas, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: '日均流水',
                data: values,
                backgroundColor: 'rgba(139,92,246,0.7)',
                borderRadius: 4,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: { display: false }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: {
                        font: { size: 9 },
                        callback: v => '$' + (v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v)
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { font: { size: 9 } }
                }
            }
        }
    });
}

// ============ XGP / Publisher Summary ============

function mRenderXgpSummary(games, flow) {
    const el = document.getElementById('mXgpSummary');
    if (!el) return;

    const xboxGames = games.filter(g => g.isXbox === 'Y');
    const xgpTotal = flow.sim + flow.aft;
    const xgpPct = pct(xgpTotal, flow.xboxY);
    const simPct = pct(flow.sim, flow.xboxY);

    el.innerHTML = `
        Xbox 游戏 <strong>${flow.xboxY}</strong> 款中，<strong>${xgpPct}%</strong> 加入 XGP（首发 ${flow.sim} + 后发 ${flow.aft}）。
        首发入库率仅 <strong>${simPct}%</strong>，多数开发者仍以传统买断为主。
    `;

    // 展开详情中的表格和条形图
    mRenderXgpDetailTable(games);
    mRenderXgpTierBars(games);
    mRenderXgpStratBars(games);
}

function mRenderXgpDetailTable(games) {
    const el = document.getElementById('mXgpTable');
    if (!el) return;

    const crossData = getTierXGPCross(games);
    let html = `<table class="m-table"><thead><tr>
        <th class="text-left">流水梯队</th><th>加入XGP</th><th>首发</th><th>后发</th><th>未加入</th>
    </tr></thead><tbody>`;

    crossData.forEach(row => {
        const xgpTotal = row.cAft + row.cSim;
        html += `<tr>
            <td class="text-left" style="font-weight:700;">${row.range}</td>
            <td style="color:var(--accent-primary);font-weight:700;">${xgpTotal}</td>
            <td>${row.cSim}</td>
            <td>${row.cAft}</td>
            <td style="color:var(--text-muted);">${row.cNone}</td>
        </tr>`;
    });

    html += '</tbody></table>';
    el.innerHTML = html;
}

function mRenderXgpTierBars(games) {
    const el = document.getElementById('mTierBars');
    if (!el) return;

    const crossData = getTierXGPCross(games);
    let html = `<div class="m-bar-legend">
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#3b82f6;"></div>后发</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#14b8a6;"></div>首发</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#64748b;"></div>未加入</div>
    </div>`;

    crossData.forEach(row => {
        html += `<div class="m-stacked-row">
            <div class="m-stacked-label">${row.range} (${row.rowTotal}款)</div>
            <div class="m-stacked-track">`;
        if (row.pAft > 0) html += `<div class="m-stacked-seg blue" style="width:${row.pAft}%;">${row.pAft >= 8 ? row.pAft + '%' : ''}</div>`;
        if (row.pSim > 0) html += `<div class="m-stacked-seg teal" style="width:${row.pSim}%;">${row.pSim >= 8 ? row.pSim + '%' : ''}</div>`;
        if (row.pNone > 0) html += `<div class="m-stacked-seg slate" style="width:${row.pNone}%;">${row.pNone >= 8 ? row.pNone + '%' : ''}</div>`;
        html += `</div></div>`;
    });

    el.innerHTML = html;
}

function mRenderXgpStratBars(games) {
    const el = document.getElementById('mStratBars');
    if (!el) return;

    const stratData = getStrategyBreakdown(games);
    const tierColorMap = {
        '> $250k': 'tier-1', '$200k - $250k': 'tier-2', '$150k - $200k': 'tier-3',
        '$100k - $150k': 'tier-4', '$50k - $100k': 'tier-5', '< $50k': 'tier-6'
    };

    let html = `<div class="m-bar-legend">
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#6366f1;"></div>>$250k</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#3b82f6;"></div>$200-250k</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#0ea5e9;"></div>$150-200k</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#14b8a6;"></div>$100-150k</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#10b981;"></div>$50-100k</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#64748b;"></div><$50k</div>
    </div>`;

    stratData.forEach(strat => {
        html += `<div class="m-stacked-row">
            <div class="m-stacked-label">${strat.label} (${strat.total}款)</div>
            <div class="m-stacked-track">`;
        strat.segments.forEach(seg => {
            if (seg.pct > 0) {
                html += `<div class="m-stacked-seg ${tierColorMap[seg.tier] || ''}" style="width:${seg.pct}%;">${seg.pct >= 10 ? seg.pct + '%' : ''}</div>`;
            }
        });
        html += `</div></div>`;
    });

    el.innerHTML = html;
}

function mRenderPubSummary(games) {
    const el = document.getElementById('mPubSummary');
    if (!el) return;

    const pubData = getPublisherBgData(games);
    let text = '';
    if (pubData[0]) text += `微软第一方 ${pubData[0].total}款(首发${pubData[0].pSim}%)`;
    if (pubData[1]) text += ` | 第三方大厂 ${pubData[1].total}款(仅${pubData[1].pSim}%首发)`;
    if (pubData[2]) text += ` | 中小独立 ${pubData[2].total}款(${pubData[2].pSim}%首发)`;
    el.innerHTML = text;

    // 展开详情
    const barsEl = document.getElementById('mPublisherBars');
    if (!barsEl) return;

    let html = `<div class="m-bar-legend">
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#3b82f6;"></div>后发</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#14b8a6;"></div>首发</div>
        <div class="m-bar-legend-item"><div class="m-bar-legend-dot" style="background:#64748b;"></div>未加入</div>
    </div>`;

    pubData.forEach(row => {
        html += `<div class="m-stacked-row">
            <div class="m-stacked-label">${row.label} (${row.total}款)</div>
            <div class="m-stacked-track">`;
        if (row.pAft > 0) html += `<div class="m-stacked-seg blue" style="width:${row.pAft}%;">${row.pAft >= 8 ? row.pAft + '%' : ''}</div>`;
        if (row.pSim > 0) html += `<div class="m-stacked-seg teal" style="width:${row.pSim}%;">${row.pSim >= 8 ? row.pSim + '%' : ''}</div>`;
        if (row.pNone > 0) html += `<div class="m-stacked-seg slate" style="width:${row.pNone}%;">${row.pNone >= 8 ? row.pNone + '%' : ''}</div>`;
        html += `</div></div>`;
    });

    barsEl.innerHTML = html;

    // 表格
    const tableEl = document.getElementById('mPublisherTable');
    if (!tableEl) return;

    let thtml = `<table class="m-table"><thead><tr>
        <th class="text-left">厂商背景</th><th>后发</th><th>首发</th><th>未加入</th>
    </tr></thead><tbody>`;
    pubData.forEach(row => {
        thtml += `<tr>
            <td class="text-left" style="font-weight:700;">${row.label}</td>
            <td>${row.cAft} (${row.pAft}%)</td>
            <td>${row.cSim} (${row.pSim}%)</td>
            <td>${row.cNone} (${row.pNone}%)</td>
        </tr>`;
    });
    thtml += '</tbody></table>';
    tableEl.innerHTML = thtml;
}

// ============ AI 洞察 ============

function mRenderAIInsight(games) {
    const el = document.getElementById('mAiInsightContent');
    if (!el) return;

    const flow = getFlowNodes(games);
    const genreData = getGenreDistribution(games);
    const pubBg = getPublisherBgData(games);
    const xgpTotal = flow.sim + flow.aft;

    const insights = [
        `📊 <strong>全景：</strong>${flow.total}款游戏，${pct(flow.consoleY, flow.total)}%上主机，${pct(flow.xboxY, flow.consoleY)}%登陆Xbox，仅${pct(xgpTotal, flow.xboxY)}%加入XGP。`,
        `🎯 <strong>XGP：</strong>首发${pct(flow.sim, flow.xboxY)}%，后发${pct(flow.aft, flow.xboxY)}%，${pct(flow.noXgp, flow.xboxY)}%未加入。`,
        `🏢 <strong>厂商：</strong>${pubBg[0] ? `微软首发率${pubBg[0].pSim}%` : ''}${pubBg[1] ? `，大厂仅${pubBg[1].pSim}%` : ''}${pubBg[2] ? `，独立${pubBg[2].pSim}%` : ''}。`,
        `🎮 <strong>品类：</strong>${genreData[0] ? `${genreData[0].name}领跑(${genreData[0].count}款)` : ''}${genreData[1] ? `，其次${genreData[1].name}` : ''}。`
    ];

    el.innerHTML = insights.map(i => `<p style="margin-bottom:8px;font-size:0.78rem;line-height:1.5;color:var(--text-secondary);">${i}</p>`).join('');
}

// ============ 数据校验 ============

function mRenderValidation(games) {
    const listEl = document.getElementById('mValidationList');
    const paginationEl = document.getElementById('mValidationPagination');
    if (!listEl) return;

    const searchVal = (document.getElementById('mValidationSearch')?.value || '').toLowerCase();
    const filtered = searchVal
        ? games.filter(g => g.name.toLowerCase().includes(searchVal) || g.publisher.toLowerCase().includes(searchVal))
        : games;

    const sorted = [...filtered].sort((a, b) => {
        const va = a.mscienceDailyRev || 0;
        const vb = b.mscienceDailyRev || 0;
        return mValidationSortDir === 'asc' ? va - vb : vb - va;
    });

    const totalPages = Math.ceil(sorted.length / M_VALIDATION_PAGE_SIZE);
    if (mValidationPage > totalPages) mValidationPage = Math.max(totalPages, 1);
    const start = (mValidationPage - 1) * M_VALIDATION_PAGE_SIZE;
    const pageData = sorted.slice(start, start + M_VALIDATION_PAGE_SIZE);

    let html = '';
    pageData.forEach(g => {
        let xgpCls = 'none';
        if (g.xgpType === '首发入库XGP') xgpCls = 'sim';
        else if (g.xgpType === '后发入库XGP') xgpCls = 'aft';

        html += `
        <div class="m-game-list-item" data-game-name="${encodeURIComponent(g.name)}">
            <div class="m-gl-name">${g.name}</div>
            <div class="m-gl-meta">
                <span>${g.publisher}</span>
                <span>${g.mainGenre || '-'}</span>
                <span class="m-gl-rev">${formatRevenue(g.mscienceDailyRev || 0)}/日</span>
                <span class="m-xgp-tag ${xgpCls}">${g.xgpType}</span>
            </div>
            <div class="m-gl-detail">
                <div>📅 上线日期: ${g.releaseDate || '-'}</div>
                <div>💰 总收入: ${formatRevenue(g.lifetimeRevenue)}</div>
                <div>📊 上线天数: ${g.daysOnline || '-'}天</div>
                <div>🖥 PC: ${g.isPC === 'Y' ? '✓' : '-'} | PS: ${g.isPS === 'Y' ? '✓' : '-'} | Xbox: ${g.isXbox === 'Y' ? '✓' : '-'}</div>
                <div>💎 Steam价格: $${(g.steamPrice || 0).toFixed(2)} | Steam收入: ${formatRevenue(g.steamRevenue)}</div>
            </div>
        </div>`;
    });
    listEl.innerHTML = html;

    // 分页
    if (paginationEl) {
        paginationEl.innerHTML = `
            <button class="m-page-btn" id="mValPrev" ${mValidationPage <= 1 ? 'disabled' : ''}>上一页</button>
            <span class="m-page-info">${mValidationPage} / ${Math.max(totalPages, 1)}</span>
            <button class="m-page-btn" id="mValNext" ${mValidationPage >= totalPages ? 'disabled' : ''}>下一页</button>
        `;
        document.getElementById('mValPrev')?.addEventListener('click', () => {
            if (mValidationPage > 1) { mValidationPage--; mRenderValidation(filteredGames); }
        });
        document.getElementById('mValNext')?.addEventListener('click', () => {
            mValidationPage++; mRenderValidation(filteredGames);
        });
    }

    // 点击展开
    listEl.querySelectorAll('.m-game-list-item').forEach(item => {
        item.addEventListener('click', () => item.classList.toggle('expanded'));
    });
}

// ============ Tab: Pipeline ============

function mUpdatePipelineTab() {
    const timeFilter = document.getElementById('mPipelineTimeFilter')?.value || 'all';
    const heatFilter = document.getElementById('mPipelineHeatFilter')?.value || 'all';

    let data = typeof pipelineData !== 'undefined' ? [...pipelineData] : [];

    if (timeFilter !== 'all') {
        data = data.filter(g => getPipelineQuarter(g.releaseDate) === timeFilter);
    }
    if (heatFilter !== 'all') {
        data = data.filter(g => g.heat === heatFilter);
    }

    data.sort((a, b) => getPipelineSortDate(a.releaseDate) - getPipelineSortDate(b.releaseDate));

    // KPI
    mSetText('mPipelineTotalCount', data.length);

    const now = new Date();
    const threeMonths = new Date(now.getTime() + 90 * 24 * 60 * 60 * 1000);
    const upcoming = data.filter(g => {
        const match = g.releaseDate.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
        if (match) {
            const d = new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
            return d >= now && d <= threeMonths;
        }
        return false;
    });
    mSetText('mPipelineUpcomingCount', upcoming.length);

    const highHeat = data.filter(g => g.heat === '高' || g.heat === '中高');
    mSetText('mPipelineHighHeatCount', highHeat.length);

    const xboxCount = data.filter(g => {
        const platforms = (g.platforms || '').toLowerCase();
        return platforms.includes('xbox') || platforms.includes('xsx');
    }).length;
    mSetText('mPipelineXboxCount', xboxCount);
    mSetText('mPipelineXboxPct', data.length > 0 ? Math.round(xboxCount / data.length * 100) + '%' : '0%');

    // 渲染卡片列表（按季度分组）
    const container = document.getElementById('mPipelineCards');
    if (!container) return;

    const grouped = {};
    const qOrder = ['q1', 'q2', 'q3', 'q4', '2026year', 'y2027', 'tbd'];
    const qLabelMap = {
        'q1': '2026 Q1 (1-3月)', 'q2': '2026 Q2 (4-6月)',
        'q3': '2026 Q3 (7-9月)', 'q4': '2026 Q4 (10-12月)',
        '2026year': '2026年（时间待定）', 'y2027': '2027年',
        'tbd': '待定/未知'
    };
    // 先按已上线/未上线分组
    const releasedGames = data.filter(g => g.released);
    const unreleasedGames = data.filter(g => !g.released);
    
    // 已上线优先展示
    if (releasedGames.length > 0) {
        grouped['✅ 2026年已上线'] = releasedGames;
    }
    
    unreleasedGames.forEach(g => {
        const q = getPipelineQuarter(g.releaseDate);
        const qLabel = qLabelMap[q] || q;
        if (!grouped[qLabel]) grouped[qLabel] = [];
        grouped[qLabel].push(g);
    });

    let html = '';
    // 固定渲染顺序：已上线 → Q1 → Q2 → Q3 → Q4 → 2026年 → 2027年 → 待定
    const renderOrder = ['✅ 2026年已上线', ...qOrder.map(k => qLabelMap[k])];
    renderOrder.forEach(quarter => {
        const games = grouped[quarter];
        if (!games || games.length === 0) return;
        
        const isReleasedSection = quarter === '✅ 2026年已上线';
        if (isReleasedSection) {
            // 已上线区域：默认折叠
            html += `<div class="m-quarter-header m-released-header" onclick="this.classList.toggle('expanded');var body=this.nextElementSibling;body.style.display=body.style.display==='none'?'block':'none';this.querySelector('.m-chevron').textContent=body.style.display==='none'?'▶':'▼'">
                ${quarter} <span class="m-quarter-count">${games.length}款</span> <span class="m-chevron">▶</span>
            </div>`;
            html += `<div class="m-released-body" style="display:none;">`;
        } else {
            html += `<div class="m-quarter-header">${quarter} <span class="m-quarter-count">${games.length}款</span></div>`;
        }
        
        games.forEach(g => {
            const heatMap = { '高': 'heat-high', '中高': 'heat-mid-high', '中': 'heat-mid', '中低': 'heat-mid-low', '低': 'heat-low' };
            const heatEmoji = { '高': '🔥', '中高': '⚡', '中': '📊', '中低': '📉', '低': '⬜' };
            const isReleased = g.released === true;

            html += `
            <div class="m-pipeline-card ${isReleased ? 'released' : ''}">
                <div class="m-game-title">
                    ${g.name}
                    ${isReleased ? '<span class="m-released-badge">已发售</span>' : ''}
                </div>
                <div class="m-game-meta">
                    <span>📅 ${g.releaseDate}</span>
                    <span>🏢 ${g.publisher || g.developer || '-'}</span>
                </div>
                <div class="m-game-tags">
                    <span class="m-heat-tag ${heatMap[g.heat] || ''}">${heatEmoji[g.heat] || ''} ${g.heat}</span>
                    ${(g.platforms || '').split(/[,/、]/).slice(0, 4).map(p => `<span class="m-platform-tag">${p.trim()}</span>`).join('')}
                </div>
                <div class="m-game-detail">
                    ${g.studio ? `<div>🎮 工作室: ${g.studio}</div>` : ''}
                    ${g.gameplay ? `<div>🕹️ 玩法: ${g.gameplay}</div>` : ''}
                    ${g.heatComment ? `<div>💬 评语: ${g.heatComment}</div>` : ''}
                </div>
            </div>`;
        });
        
        if (isReleasedSection) {
            html += `</div>`; // close m-released-body
        }
    });

    container.innerHTML = html;

    // 点击展开详情
    container.querySelectorAll('.m-pipeline-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('expanded'));
    });
}

// ============ Tab: 新闻 ============

function mUpdateNewsTab() {
    const articles = typeof newsArticles !== 'undefined' ? newsArticles :
                     (typeof newsData !== 'undefined' ? newsData : []);

    const categoryFilter = document.getElementById('mNewsCategoryFilter')?.value || 'all';
    const sourceFilter = document.getElementById('mNewsSourceFilter')?.value || 'all';
    const featuredFilter = document.getElementById('mNewsFeaturedFilter')?.value || 'all';

    let filtered = [...articles];
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(a => a.category === categoryFilter);
    }
    if (sourceFilter !== 'all') {
        const srcNames = (typeof newsSources !== 'undefined' ? newsSources : []).filter(s => s.category === sourceFilter).map(s => s.name);
        filtered = filtered.filter(a => srcNames.includes(a.source));
    }
    if (featuredFilter === 'featured') {
        filtered = filtered.filter(a => a.featured === true);
    } else if (featuredFilter === 'normal') {
        filtered = filtered.filter(a => !a.featured);
    }

    // 按日期排序（最新在前）— 与PC端对齐
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    // KPI — 与PC端同步
    mSetText('mNewsTotalCount', articles.length);
    const featuredCount = articles.filter(a => a.featured === true).length;
    mSetText('mNewsImportantCount', featuredCount);
    const featuredPct = articles.length > 0 ? Math.round(featuredCount / articles.length * 100) : 0;
    mSetText('mNewsFeaturedRatio', `占比 ${featuredPct}%`);

    // 信息源数量：使用 newsSources 预定义列表（与PC端一致）
    const sourceCount = (typeof newsSources !== 'undefined' && newsSources.length) ? newsSources.length : new Set(articles.map(a => a.source).filter(Boolean)).size;
    mSetText('mNewsSourceCount', sourceCount);

    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const weeklyCount = articles.filter(a => new Date(a.date) >= oneWeekAgo).length;
    mSetText('mNewsWeeklyCount', weeklyCount);

    if (articles.length > 0) {
        const latestDate = articles[0]?.date || '--';
        mSetText('mNewsUpdateTime', `最近更新：${latestDate}`);
    }

    // 重点新闻 (Spotlight) — 近2周核心新闻（v6.0 主题聚类升级）
    const spotlight = document.getElementById('mNewsSpotlight');
    if (spotlight) {
        const now2 = new Date();
        const fourteenDaysAgo2 = new Date(now2.getTime() - 14 * 24 * 60 * 60 * 1000);
        const fmtD = d => `${d.getMonth()+1}/${d.getDate()}`;
        const dateRange2 = `${fmtD(fourteenDaysAgo2)}~${fmtD(now2)}`;

        // v7.0: 所有近2周 featured 新闻全部纳入核心区（取消二次过滤）
        const coreNews = filtered.filter(a => a.featured === true && new Date(a.date) >= fourteenDaysAgo2);

        // 暴露核心ID集合供去重
        window._mCoreSpotlightIds = new Set(coreNews.map(a => a.id));

        if (coreNews.length === 0) {
            spotlight.innerHTML = `<div class="m-news-section-label">🔥 近2周核心新闻 <span style="color:var(--text-muted);font-weight:400;">(${dateRange2})</span></div>
                <div class="m-news-empty-hint">暂无核心新闻</div>`;
        } else {
            // 主题聚类
            const mClusters = typeof clusterNewsByTopic === 'function' ? clusterNewsByTopic(coreNews) : { all: { label: '核心新闻', icon: '🔥', news: coreNews }};
            const mClusterOrder = ['sony-ps','xbox-ms','hot-product','upstream-hw','steam-valve','epic','market-info','nintendo','other','all'];
            const mSortedKeys = mClusterOrder.filter(k => mClusters[k]);

            let spotlightHTML = `<div class="m-news-section-label">🔥 近2周核心新闻 <span style="color:var(--text-muted);font-weight:400;">${coreNews.length}条 · ${mSortedKeys.length}主题 (${dateRange2})</span></div>`;

            mSortedKeys.forEach(key => {
                const cluster = mClusters[key];
                // v7.0: 对信息密集聚类进行智能合并
                const clusterNews = typeof mergeClusterNews === 'function'
                    ? mergeClusterNews(cluster.news.sort((a, b) => new Date(b.date) - new Date(a.date)), key)
                    : cluster.news.sort((a, b) => new Date(b.date) - new Date(a.date));

                spotlightHTML += `<div class="m-spotlight-cluster" data-cluster="${key}">`;
                spotlightHTML += `<div class="m-cluster-header">${cluster.icon || '📌'} ${cluster.label} <span style="color:var(--text-muted);font-size:0.7rem;">${cluster.news.length}条${clusterNews.length < cluster.news.length ? `（精炼${clusterNews.length}组）` : ''}</span></div>`;
                spotlightHTML += clusterNews.map(a => {
                    const featuredReason = typeof getFeaturedReason === 'function' ? getFeaturedReason(a) : '⭐ 重点';
                    const insightText = a.analysis || (typeof generateAutoInsight === 'function' ? generateAutoInsight(a) : '');
                    // 合并后的子新闻 + 聚类内关联事件
                    const mergedSubs = a._mergedSubNews || [];
                    const explicitRelated = (a.relatedNewsIds || []).map(rid => articles.find(x => x.id === rid)).filter(Boolean);
                    const clusterRelated = clusterNews.filter(x => x.id !== a.id && !explicitRelated.find(r => r.id === x.id) && !mergedSubs.find(s => s.id === x.id)).slice(0, 2);
                    const allRelated = [...mergedSubs, ...explicitRelated, ...clusterRelated].slice(0, 5);

                    let cardHTML = `<div class="m-spotlight-card" data-news-id="${a.id || ''}">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                            <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;">
                                <span class="m-news-category m-news-cat-${a.category || 'market'}">${getCategoryLabel(a.category)}</span>
                                ${a._mergedCount ? `<span style="font-size:0.58rem;font-weight:700;padding:2px 5px;border-radius:4px;background:rgba(20,184,166,0.12);color:#14b8a6;">${a._mergedLabel} · ${a._mergedCount}条</span>` : ''}
                                <span style="font-size:0.62rem;font-weight:700;padding:2px 6px;border-radius:4px;background:rgba(245,158,11,0.12);color:#f59e0b;">${featuredReason}</span>
                            </div>
                            ${a.sourceUrl ? `<a href="${a.sourceUrl}" target="_blank" class="m-spotlight-link" title="查看原文" onclick="event.stopPropagation()" style="color:var(--text-muted);flex-shrink:0;padding:2px;">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2h8v8M14 2L6 10"/></svg>
                            </a>` : ''}
                        </div>
                        <div class="m-news-title"><span style="color:#f97316;">🔥</span> ${a.title}</div>
                        <div class="m-news-summary">${a.summary || a.content || ''}</div>`;

                    if (insightText) {
                        cardHTML += `<div class="m-spotlight-insight"><span style="color:var(--accent-primary);font-weight:700;font-size:0.7rem;">💡 洞察分析</span> <span style="font-size:0.72rem;color:var(--text-secondary);">${insightText}</span></div>`;
                    }

                    if (allRelated.length > 0) {
                        cardHTML += `<div class="m-spotlight-related" style="margin-top:6px;padding:6px 8px;background:rgba(20,184,166,0.04);border:1px solid rgba(20,184,166,0.12);border-radius:6px;">
                            <div style="font-size:0.65rem;font-weight:700;color:#14b8a6;margin-bottom:4px;">🔗 ${mergedSubs.length > 0 ? '同话题动态' : '关联事件'}（${allRelated.length}）</div>`;
                        allRelated.slice(0, 4).forEach(r => {
                            cardHTML += `<div class="m-spotlight-related-item" onclick="event.stopPropagation();openNewsDetail(${r.id})" style="display:flex;gap:6px;padding:3px 0;cursor:pointer;font-size:0.68rem;">
                                <span style="color:#14b8a6;font-weight:600;white-space:nowrap;">${(r.date||'').substring(5)}</span>
                                <span style="color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${r.title.length > 35 ? r.title.substring(0,35)+'...' : r.title}</span>
                            </div>`;
                        });
                        cardHTML += `</div>`;
                    }

                    cardHTML += `<div class="m-news-meta" style="margin-top:6px;">
                            <span>${a.source || ''}</span>
                            <span>${a.date || ''}</span>
                            ${(a.tags||[]).slice(0,5).map(t => `<span class="m-news-tag-sm">${t}</span>`).join('')}
                        </div>
                    </div>`;
                    return cardHTML;
                }).join('');
                spotlightHTML += `</div>`; // close m-spotlight-cluster
            });
            spotlight.innerHTML = spotlightHTML;
        }

        spotlight.querySelectorAll('.m-spotlight-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.dataset.newsId;
                if (typeof openNewsDetail === 'function') {
                    openNewsDetail(parseInt(id));
                } else {
                    const article = articles.find(a => String(a.id) === id);
                    if (article) mShowNewsSheet(article);
                }
            });
        });
    }

    // 新闻列表 — 一般动态折叠 + 历史归档（v7.0: featured 全部已入核心区）
    const feed = document.getElementById('mNewsFeed');
    if (feed) {
        const now = new Date();
        const fourteenDaysAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
        const fmtDate = d => `${d.getMonth()+1}/${d.getDate()}`;
        const dateRangeLabel = `${fmtDate(fourteenDaysAgo)}~${fmtDate(now)}`;

        // 排除核心区已展示的新闻
        const coreIds = window._mCoreSpotlightIds || new Set();

        const recentAll = filtered.filter(a => new Date(a.date) >= fourteenDaysAgo);
        const recentNonFeatured = recentAll.filter(a => !a.featured && !coreIds.has(a.id));
        const historyNews = filtered.filter(a => new Date(a.date) < fourteenDaysAgo);

        let feedHTML = '';

        // 近2周一般动态（折叠）
        if (recentNonFeatured.length > 0) {
            feedHTML += `<div class="m-news-history-toggle" id="mNewsNonFeaturedToggle">
                <span>📑 近2周一般动态</span>
                <span class="m-news-history-badge">${recentNonFeatured.length}条</span>
                <svg class="m-news-history-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5l2.5 2.5L10 5.5"/></svg>
            </div>
            <div class="m-news-nonfeatured-body" id="mNewsNonFeaturedBody" style="display:none;">`;
            feedHTML += recentNonFeatured.map(a => mRenderNewsItemHTML(a, false)).join('');
            feedHTML += `</div>`;
        }

        // 历史归档折叠
        if (historyNews.length > 0) {
            // 按月分组
            const monthGroups = {};
            historyNews.forEach(a => {
                const mk = a.date.substring(0, 7);
                if (!monthGroups[mk]) monthGroups[mk] = [];
                monthGroups[mk].push(a);
            });
            const sortedMonths = Object.keys(monthGroups).sort((a, b) => b.localeCompare(a));

            feedHTML += `<div class="m-news-history-toggle" id="mNewsHistoryToggle">
                <span>📁 历史新闻归档</span>
                <span class="m-news-history-badge">${historyNews.length}条</span>
                <svg class="m-news-history-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5l2.5 2.5L10 5.5"/></svg>
            </div>
            <div class="m-news-history-body" id="mNewsHistoryBody" style="display:none;">`;

            sortedMonths.forEach(month => {
                const items = monthGroups[month];
                const [y, m] = month.split('-');
                const label = `${y}年${parseInt(m)}月`;
                feedHTML += `<div class="m-news-month-header" data-month="${month}">
                    <svg class="m-news-month-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4.5l2 2 2-2"/></svg>
                    <span>${label}</span>
                    <span class="m-news-month-count">${items.length}条</span>
                </div>
                <div class="m-news-month-body" style="display:none;">`;
                feedHTML += items.map(a => mRenderNewsItemHTML(a, true)).join('');
                feedHTML += `</div>`;
            });

            feedHTML += `</div>`;
        }

        feed.innerHTML = feedHTML;

        // 绑定交互
        feed.querySelectorAll('.m-news-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = item.dataset.newsId;
                if (typeof openNewsDetail === 'function' && id) {
                    openNewsDetail(parseInt(id));
                } else {
                    item.classList.toggle('expanded');
                }
            });
        });

        // 非重点新闻折叠
        const nfToggle = document.getElementById('mNewsNonFeaturedToggle');
        const nfBody = document.getElementById('mNewsNonFeaturedBody');
        if (nfToggle && nfBody) {
            nfToggle.addEventListener('click', () => {
                const isOpen = nfBody.style.display !== 'none';
                nfBody.style.display = isOpen ? 'none' : 'block';
                nfToggle.classList.toggle('expanded', !isOpen);
            });
        }

        const historyToggle = document.getElementById('mNewsHistoryToggle');
        const historyBody = document.getElementById('mNewsHistoryBody');
        if (historyToggle && historyBody) {
            historyToggle.addEventListener('click', () => {
                const isOpen = historyBody.style.display !== 'none';
                historyBody.style.display = isOpen ? 'none' : 'block';
                historyToggle.classList.toggle('expanded', !isOpen);
            });
        }
        feed.querySelectorAll('.m-news-month-header').forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const isOpen = body.style.display !== 'none';
                body.style.display = isOpen ? 'none' : 'block';
                header.classList.toggle('expanded', !isOpen);
            });
        });
    }

    // 信息源参考（与PC端同步）
    mRenderNewsSources();
}

function mRenderNewsItemHTML(a, isHistory = false) {
    const impLabel = a.featured ? '⭐ 重点' : (typeof getImportanceLabel === 'function' ? getImportanceLabel(a.importance) : (a.importance === 'high' ? '🔴 重要' : (a.importance === 'medium' ? '🟡 关注' : '⚪ 一般')));
    const historyCls = isHistory ? ' m-news-item-history' : '';
    const featuredCls = a.featured ? ' m-news-featured' : '';
    const importantCls = a.importance === 'high' ? ' important' : '';
    const impBadgeCls = a.featured ? 'm-imp-featured' : (a.importance === 'high' ? 'm-imp-high' : (a.importance === 'medium' ? 'm-imp-medium' : 'm-imp-low'));
    return `
    <div class="m-news-item${importantCls}${a.featured ? ' featured' : ''}${historyCls}${featuredCls}" data-news-id="${a.id || ''}">
        <div class="m-news-head">
            <span class="m-imp-badge ${impBadgeCls}">${impLabel}</span>
            <span class="m-news-category m-news-cat-${a.category || 'market'}" style="flex-shrink:0;">${getCategoryLabel(a.category)}</span>
            <span class="m-news-title" style="flex:1;">${a.featured ? '<span style="color:#f59e0b;">⭐</span> ' : ''}${a.title}</span>
            ${a.sourceUrl ? `<a href="${a.sourceUrl}" target="_blank" class="m-news-item-link" title="查看原文" onclick="event.stopPropagation()" style="color:var(--text-muted);flex-shrink:0;padding:2px;">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2h8v8M14 2L6 10"/></svg>
            </a>` : ''}
        </div>
        <div class="m-news-summary">${a.summary || a.content || ''}</div>
        <div class="m-news-tags">
            ${(a.tags || []).map(t => `<span class="m-news-tag-sm">${t}</span>`).join('')}
        </div>
        <div class="m-news-meta">
            <span>${a.source || ''}</span>
            <span>${a.date || ''}</span>
        </div>
    </div>`;
}

function getCategoryLabel(cat) {
    const map = { platform: '🎮 平台', game: '🕹️ 新品', hardware: '🔧 硬件', policy: '📋 政策', market: '📊 市场' };
    return map[cat] || cat || '其他';
}

// 信息源参考渲染（与PC端 renderNewsSources 同步）
function mRenderNewsSources() {
    const container = document.getElementById('mNewsSources');
    if (!container) return;
    if (typeof newsSources === 'undefined' || !newsSources.length) {
        container.innerHTML = '';
        return;
    }

    const categories = {
        'official': { label: '🏛️ 官方渠道', sources: [] },
        'media': { label: '📰 游戏媒体', sources: [] },
        'data': { label: '📊 数据平台', sources: [] }
    };

    newsSources.forEach(s => {
        if (categories[s.category]) {
            categories[s.category].sources.push(s);
        }
    });

    let html = `<div style="padding:12px 14px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <div style="font-size:0.82rem;font-weight:700;color:var(--text-primary);">🔗 信息源参考</div>
            <span style="font-size:0.65rem;color:var(--text-muted);">以下媒体/平台为主要监测对象</span>
        </div>`;

    Object.values(categories).forEach(cat => {
        if (cat.sources.length === 0) return;
        html += `<div style="margin-bottom:10px;">
            <div style="font-size:0.7rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;">${cat.label}</div>
            <div style="display:flex;flex-wrap:wrap;gap:4px;">`;
        cat.sources.forEach(s => {
            html += `<a href="${s.url}" target="_blank" style="display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:6px;background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.1);color:var(--accent-primary);font-size:0.65rem;font-weight:600;text-decoration:none;">
                ${s.name}
                <span style="font-size:0.55rem;color:var(--text-muted);">${s.platform}</span>
            </a>`;
        });
        html += `</div></div>`;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function mShowNewsSheet(article) {
    openNewsDetail(article.id);
}

// 移动端新闻详情弹窗（与PC端openNewsDetail完全对齐）
function openNewsDetail(newsId) {
    const articles = typeof newsData !== 'undefined' ? newsData : (typeof newsArticles !== 'undefined' ? newsArticles : []);
    const n = articles.find(x => x.id === newsId);
    if (!n) return;

    const insightText = n.analysis || (typeof generateAutoInsight === 'function' ? generateAutoInsight(n) : '');
    const featuredReason = n.featured ? (typeof getFeaturedReason === 'function' ? getFeaturedReason(n) : '⭐ 重点') : '';
    const sentimentMap = { positive: '利好', negative: '利空', neutral: '中性' };
    const sentimentColorMap = { positive: '#22c55e', negative: '#ef4444', neutral: '#f59e0b' };
    const sentimentLabel = sentimentMap[n.sentiment] || '中性';
    const sentimentColor = sentimentColorMap[n.sentiment] || '#f59e0b';
    const impLabel = typeof getImportanceLabel === 'function' ? getImportanceLabel(n.importance) : (n.importance === 'high' ? '🔴 重要' : (n.importance === 'medium' ? '🟡 关注' : '⚪ 一般'));

    // 全量关联事件
    const explicitRelated = (n.relatedNewsIds || []).map(rid => articles.find(x => x.id === rid)).filter(Boolean);
    const tagSet = new Set((n.tags || []).map(t => t.toLowerCase()));
    const autoRelated = articles.filter(x => {
        if (x.id === n.id) return false;
        if (explicitRelated.find(r => r.id === x.id)) return false;
        const xTags = (x.tags || []).map(t => t.toLowerCase());
        const overlap = xTags.filter(t => tagSet.has(t)).length;
        return overlap >= 2 || (overlap >= 1 && x.category === n.category);
    }).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 8);
    const allRelated = [...explicitRelated, ...autoRelated].slice(0, 10);

    const sourceLinks = n.sourceUrls || [{ name: n.source, url: n.sourceUrl }];

    let overlay = document.getElementById('newsDetailOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'newsDetailOverlay';
        overlay.className = 'news-detail-overlay';
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
    <div class="news-detail-modal" style="max-width:95vw;padding:20px;margin-top:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                <span style="font-size:0.72rem;font-weight:700;padding:3px 8px;border-radius:4px;background:rgba(99,102,241,0.12);color:#6366f1;">${getCategoryLabel(n.category)}</span>
                ${n.featured ? `<span style="font-size:0.72rem;font-weight:700;padding:3px 8px;border-radius:4px;background:rgba(245,158,11,0.15);color:#f59e0b;">${featuredReason || '⭐ 重点'}</span>` : ''}
                <span style="font-size:0.72rem;font-weight:600;padding:3px 8px;border-radius:4px;background:rgba(100,116,139,0.1);color:var(--text-secondary);">${impLabel}</span>
                <span style="font-size:0.72rem;color:${sentimentColor};font-weight:700;">${sentimentLabel}</span>
            </div>
            <button onclick="closeNewsDetail()" style="background:none;border:1px solid var(--border-color,#333);color:var(--text-secondary,#999);font-size:1.3rem;width:32px;height:32px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;">&times;</button>
        </div>
        <h3 style="font-size:1.05rem;font-weight:800;line-height:1.4;margin:0 0 8px 0;color:var(--text-primary,#fff);">${n.title}</h3>
        <div style="font-size:0.75rem;color:var(--text-secondary,#888);margin-bottom:8px;">
            <span style="font-weight:700;color:#6366f1;">${n.source}</span> · ${n.date} · <span style="font-family:monospace;">#${n.id}</span>
        </div>
        ${(n.tags||[]).length ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:14px;">${(n.tags||[]).map(t => `<span class="m-news-tag-sm">${t}</span>`).join('')}</div>` : ''}
        <div style="background:var(--bg-secondary,#1a1a2e);border:1px solid var(--border-color,#333);border-radius:10px;padding:14px;margin-bottom:10px;">
            <div style="font-size:0.82rem;font-weight:700;margin-bottom:6px;">📄 新闻摘要</div>
            <p style="font-size:0.82rem;line-height:1.7;color:var(--text-secondary,#aaa);margin:0;">${n.summary}</p>
        </div>
        ${insightText ? `<div style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.15);border-radius:10px;padding:14px;margin-bottom:10px;">
            <div style="font-size:0.82rem;font-weight:700;margin-bottom:6px;">💡 洞察分析</div>
            <p style="font-size:0.8rem;line-height:1.65;color:var(--text-secondary,#aaa);margin:0;">${insightText}</p>
        </div>` : ''}
        <div style="background:var(--bg-secondary,#1a1a2e);border:1px solid var(--border-color,#333);border-radius:10px;padding:14px;margin-bottom:10px;">
            <div style="font-size:0.82rem;font-weight:700;margin-bottom:8px;">🔗 信息来源（${sourceLinks.length}）</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
                ${sourceLinks.map(s => `<a href="${s.url}" target="_blank" style="display:flex;align-items:center;gap:3px;padding:4px 10px;border-radius:6px;background:rgba(59,130,246,0.08);color:#3b82f6;font-size:0.75rem;font-weight:600;text-decoration:none;border:1px solid rgba(59,130,246,0.15);">${s.name} ↗</a>`).join('')}
            </div>
        </div>
        ${allRelated.length > 0 ? `<div style="background:rgba(20,184,166,0.04);border:1px solid rgba(20,184,166,0.15);border-radius:10px;padding:14px;">
            <div style="font-size:0.82rem;font-weight:700;margin-bottom:8px;">🔗 关联事件（${allRelated.length}）</div>
            ${allRelated.map(r => `<div onclick="openNewsDetail(${r.id})" style="display:flex;align-items:flex-start;gap:8px;padding:7px 8px;border-radius:6px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='rgba(20,184,166,0.08)'" onmouseout="this.style.background='transparent'">
                <span style="font-size:0.7rem;font-weight:700;color:#14b8a6;min-width:60px;white-space:nowrap;">${r.date}</span>
                <div style="min-width:0;"><div style="font-size:0.78rem;font-weight:600;color:var(--text-primary,#fff);line-height:1.3;">${r.title}</div>
                <div style="font-size:0.68rem;color:var(--text-muted,#666);line-height:1.3;margin-top:2px;">${(r.summary||'').substring(0,60)}${(r.summary||'').length>60?'...':''}</div></div>
            </div>`).join('')}
        </div>` : ''}
    </div>`;

    overlay.style.display = 'flex';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    overlay.addEventListener('click', function handler(e) {
        if (e.target === overlay) {
            closeNewsDetail();
            overlay.removeEventListener('click', handler);
        }
    });
}

function closeNewsDetail() {
    const overlay = document.getElementById('newsDetailOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ============ Tab: 财报 ============

// ── 财报数据提取辅助（适配嵌套结构） ──
function _eVal(obj) {
    // 从 {value:xxx} 或纯数字中取值
    if (obj == null) return null;
    if (typeof obj === 'number') return obj;
    if (typeof obj === 'object' && 'value' in obj) return obj.value;
    return null;
}

function _eMargin(c) {
    return _eVal(c.financials?.operatingMargin) ?? 0;
}

function _eGrowth(c) {
    return _eVal(c.financials?.revenue?.yoy) ?? 0;
}

function _eRevenueLabel(c) {
    const f = c.financials;
    if (!f || !f.revenue) return 'N/A';
    const val = _eVal(f.revenue);
    const unit = f.revenue.unit || '';
    const usdEquiv = f.revenue.usdEquiv || '';
    if (val == null) return 'N/A';
    // 格式化：显示本币 + USD 等价
    let display = '';
    if (c.currency === 'USD') {
        display = '$' + (val >= 10000 ? (val / 1000).toFixed(1) + 'B' : (val >= 1000 ? (val / 1000).toFixed(2) + 'B' : val + 'M'));
    } else if (c.currency === 'JPY') {
        display = '¥' + (val >= 100000 ? (val / 100000).toFixed(2) + '万亿' : (val / 10000).toFixed(1) + '万亿');
    } else if (c.currency === 'CNY') {
        display = '¥' + (val / 100).toFixed(0) + '亿';
    } else if (c.currency === 'EUR') {
        display = '€' + val + 'M';
    } else if (c.currency === 'KRW') {
        display = '₩' + (val / 10000).toFixed(1) + '万亿';
    } else {
        display = val + (unit ? ' ' + unit : '');
    }
    if (usdEquiv) display += ` (${usdEquiv})`;
    return display;
}

function _eProfitLabel(c) {
    const f = c.financials;
    if (!f || !f.operatingProfit) return null;
    const val = _eVal(f.operatingProfit);
    const usdEquiv = f.operatingProfit.usdEquiv || '';
    if (val == null) return null;
    let display = '';
    if (c.currency === 'USD') {
        display = '$' + (Math.abs(val) >= 1000 ? (val / 1000).toFixed(2) + 'B' : val + 'M');
    } else if (c.currency === 'JPY') {
        display = '¥' + (val / 10000).toFixed(1) + '万亿';
    } else if (c.currency === 'CNY') {
        display = '¥' + (val / 100).toFixed(0) + '亿';
    } else {
        display = val + 'M';
    }
    if (usdEquiv) display += ` (${usdEquiv})`;
    return display;
}

// V7: 移动端双模块（单季度+全年）HTML — 仅当公司有latestQuarter和fullYear时显示
function mBuildDualModuleHtml(c) {
    if (!c.latestQuarter || !c.fullYear) return '';

    const lq = c.latestQuarter;
    const fy = c.fullYear;

    // 单季度数据
    const qRev = lq.revenue?.value;
    const qRevYoy = lq.revenue?.yoy;
    const qRevUsd = lq.revenue?.usdEquiv || '';
    const qPeriod = lq.period || '';

    // 全年数据
    const fyRev = fy.revenue?.value;
    const fyRevYoy = fy.revenue?.yoy;
    const fyRevUsd = fy.revenue?.usdEquiv || '';
    const fyPeriod = fy.period || '';

    // 国内/国际拆分（单季度）
    let qBreakdown = '';
    if (lq.gameMetrics?.domesticGames && lq.gameMetrics?.internationalGames) {
        const dg = lq.gameMetrics.domesticGames;
        const ig = lq.gameMetrics.internationalGames;
        qBreakdown = `<div style="font-size:0.65rem;color:var(--text-muted);margin-top:3px;">
            国内¥${dg.value}${dg.unit || '亿'}${dg.yoy != null ? `<span style="color:${dg.yoy >= 0 ? '#10b981' : '#ef4444'};margin-left:2px;">${dg.yoy >= 0 ? '+' : ''}${dg.yoy}%</span>` : ''}
            | 国际¥${ig.value}${ig.unit || '亿'}${ig.yoy != null ? `<span style="color:${ig.yoy >= 0 ? '#10b981' : '#ef4444'};margin-left:2px;">${ig.yoy >= 0 ? '+' : ''}${ig.yoy}%</span>` : ''}
        </div>`;
    }

    // 国内/国际拆分（全年）
    let fyBreakdown = '';
    if (fy.gameBreakdown?.domestic && fy.gameBreakdown?.international) {
        const dg = fy.gameBreakdown.domestic;
        const ig = fy.gameBreakdown.international;
        fyBreakdown = `<div style="font-size:0.65rem;color:var(--text-muted);margin-top:3px;">
            国内¥${dg.value}${dg.unit || '亿'}${dg.yoy != null ? `<span style="color:${dg.yoy >= 0 ? '#10b981' : '#ef4444'};margin-left:2px;">${dg.yoy >= 0 ? '+' : ''}${dg.yoy}%</span>` : ''}
            | 国际¥${ig.value}${ig.unit || '亿'}${ig.yoy != null ? `<span style="color:${ig.yoy >= 0 ? '#10b981' : '#ef4444'};margin-left:2px;">${ig.yoy >= 0 ? '+' : ''}${ig.yoy}%</span>` : ''}
        </div>`;
    }

    const mYoyBadge = (yoy) => {
        if (yoy === null || yoy === undefined) return '';
        return `<span style="display:inline-block;font-size:0.62rem;padding:1px 5px;border-radius:8px;background:${yoy >= 0 ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)'};color:${yoy >= 0 ? '#10b981' : '#ef4444'};margin-left:4px;font-weight:600;">${yoy >= 0 ? '+' : ''}${yoy}%</span>`;
    };

    const unitLabel = c.financials?.revenue?.unit?.split('(')[0] || '';

    return `
            <div style="margin:8px 0;padding:8px 10px;background:var(--bg-secondary);border-radius:10px;border:1px solid var(--border-color);">
                <div style="display:flex;align-items:center;gap:4px;margin-bottom:6px;">
                    <span style="font-size:0.7rem;font-weight:700;color:var(--text-primary);">📊 双模块</span>
                    <span style="font-size:0.55rem;padding:1px 4px;border-radius:3px;background:rgba(99,102,241,0.1);color:#6366f1;">V7</span>
                </div>
                <!-- 单季度 -->
                <div style="padding:6px 8px;background:var(--bg-primary);border-radius:8px;border-left:3px solid #10b981;margin-bottom:6px;">
                    <div style="font-size:0.62rem;color:var(--text-muted);margin-bottom:2px;">
                        📅 ${qPeriod} <span style="background:rgba(16,185,129,0.12);color:#10b981;padding:0 3px;border-radius:3px;font-size:0.55rem;font-weight:600;">单季度</span>
                    </div>
                    <div style="font-size:0.76rem;font-weight:700;color:var(--text-primary);">
                        ${qRev !== null ? (qRev >= 10000 ? (qRev / 10000).toFixed(1) + '万' : qRev.toLocaleString()) : 'N/A'} ${unitLabel}
                        ${qRevUsd ? `<span style="color:#10b981;font-size:0.66rem;font-weight:500;">${qRevUsd}</span>` : ''}
                        ${mYoyBadge(qRevYoy)}
                    </div>
                    ${qBreakdown}
                </div>
                <!-- 全年 -->
                <div style="padding:6px 8px;background:var(--bg-primary);border-radius:8px;border-left:3px solid #8b5cf6;">
                    <div style="font-size:0.62rem;color:var(--text-muted);margin-bottom:2px;">
                        📅 ${fyPeriod} <span style="background:rgba(139,92,246,0.12);color:#8b5cf6;padding:0 3px;border-radius:3px;font-size:0.55rem;font-weight:600;">全年</span>
                    </div>
                    <div style="font-size:0.76rem;font-weight:700;color:var(--text-primary);">
                        ${fyRev !== null ? (fyRev >= 10000 ? (fyRev / 10000).toFixed(1) + '万' : fyRev.toLocaleString()) : 'N/A'} ${unitLabel}
                        ${fyRevUsd ? `<span style="color:#8b5cf6;font-size:0.66rem;font-weight:500;">${fyRevUsd}</span>` : ''}
                        ${mYoyBadge(fyRevYoy)}
                    </div>
                    ${fyBreakdown}
                </div>
            </div>`;
}

// 图表公司名称 → earningsCompanies.name 映射（用于移动端滚动跳转）
function mFindCompanyNameByChartName(chartName) {
    if (!chartName || typeof earningsCompanies === 'undefined') return null;
    const nameMap = {
        '腾讯': '腾讯控股', '索尼(G&NS)': '索尼集团', '索尼': '索尼集团',
        '微软(MPC)': '微软', '微软(Gaming)': '微软',
        '任天堂': '任天堂', 'EA': '艺电', '网易': '网易',
        'Take-Two': 'Take-Two Interactive', 'Roblox': 'Roblox', '育碧': '育碧',
        'Nexon': 'Nexon', 'Krafton': 'Krafton', 'Embracer': 'Embracer Group',
        'Unity': 'Unity', '卡普空': '卡普空', '卡普空(DC)': '卡普空',
        '万代南梦宫': '万代南梦宫', '万代南梦宫(DE)': '万代南梦宫',
        'Square Enix': 'Square Enix', 'Square Enix(DE)': 'Square Enix',
        '科乐美': '科乐美', '科乐美(DE)': '科乐美',
        '世嘉萨米': '世嘉萨米', '世嘉萨米(EC)': '世嘉萨米'
    };
    if (nameMap[chartName]) return nameMap[chartName];
    const match = earningsCompanies.find(c =>
        chartName.includes(c.name) || chartName.includes(c.nameEn) ||
        c.name.includes(chartName) || c.nameEn.includes(chartName)
    );
    return match ? match.name : null;
}

// 移动端滚动到对应公司卡片
function mScrollToCompanyCard(encodedName) {
    const card = document.querySelector(`.m-company-card[data-company="${encodedName}"]`);
    if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // 高亮闪烁
        card.style.boxShadow = '0 0 0 2px rgba(99,102,241,0.6)';
        card.style.borderColor = 'var(--accent-primary)';
        // 自动展开
        if (!card.classList.contains('expanded')) {
            card.classList.add('expanded');
        }
        setTimeout(() => {
            card.style.boxShadow = '';
            card.style.borderColor = '';
        }, 2000);
    }
}

function mUpdateEarningsTab() {
    const companies = typeof earningsCompanies !== 'undefined' ? earningsCompanies : [];
    const searchVal = (document.getElementById('mEarningsSearch')?.value || '').toLowerCase();
    const regionFilter = document.getElementById('mEarningsRegionFilter')?.value || 'all';
    const sortFilter = document.getElementById('mEarningsSortFilter')?.value || 'margin';

    let filtered = [...companies];

    if (searchVal) {
        filtered = filtered.filter(c =>
            c.name.toLowerCase().includes(searchVal) ||
            (c.ticker || '').toLowerCase().includes(searchVal) ||
            (c.nameEn || '').toLowerCase().includes(searchVal)
        );
    }

    if (regionFilter !== 'all') {
        filtered = filtered.filter(c => c.region === regionFilter);
    }

    // 排序（使用正确的嵌套字段访问）
    filtered.sort((a, b) => {
        if (sortFilter === 'margin') return _eMargin(b) - _eMargin(a);
        if (sortFilter === 'growth') return _eGrowth(b) - _eGrowth(a);
        return a.name.localeCompare(b.name);
    });

    // ── KPI ──
    mSetText('mEarningsCompanyCount', companies.length);

    if (companies.length > 0) {
        // 最高利润率
        const marginSorted = [...companies]
            .filter(c => _eMargin(c) > 0)
            .sort((a, b) => _eMargin(b) - _eMargin(a));
        if (marginSorted[0]) {
            mSetText('mEarningsTopMargin', _eMargin(marginSorted[0]).toFixed(1) + '%');
            mSetText('mEarningsTopMarginName', marginSorted[0].name);
        }

        // 最高增速
        const growthSorted = [...companies]
            .filter(c => _eGrowth(c) !== 0)
            .sort((a, b) => _eGrowth(b) - _eGrowth(a));
        if (growthSorted[0]) {
            const g = _eGrowth(growthSorted[0]);
            mSetText('mEarningsTopGrowth', (g >= 0 ? '+' : '') + g.toFixed(1) + '%');
            mSetText('mEarningsTopGrowthName', growthSorted[0].name);
        }

        // 最新财报日期
        const dateSorted = [...companies].sort((a, b) => new Date(b.filingDate || 0) - new Date(a.filingDate || 0));
        if (dateSorted[0]) {
            mSetText('mEarningsLatestDate', dateSorted[0].filingDate || '--');
            mSetText('mEarningsLatestCompany', dateSorted[0].name);
        }
    }

    // ── 图表 ──
    mRenderEarningsCharts(filtered);

    // ── 公司卡片 ──
    const grid = document.getElementById('mEarningsCompanyGrid');
    if (!grid) return;

    grid.innerHTML = filtered.map(c => {
        const margin = _eMargin(c);
        const growth = _eGrowth(c);
        const revenueLabel = _eRevenueLabel(c);
        const profitLabel = _eProfitLabel(c);
        const segPct = _eVal(c.financials?.segmentRevenuePct);

        let marginCls = 'ok';
        if (margin >= 25) marginCls = 'excellent';
        else if (margin >= 15) marginCls = 'good';
        else if (margin === 0 || margin === null) marginCls = 'na';
        else if (margin < 0) marginCls = 'loss';

        const regionFlag = { us: '🇺🇸', jp: '🇯🇵', cn: '🇨🇳', eu: '🇪🇺', kr: '🇰🇷' }[c.region] || '🌐';

        // 重点产品标签
        const keyProds = (c.keyProducts || []).slice(0, 4);

        // 关键游戏指标
        let metricsHtml = '';
        if (c.gameMetrics) {
            const entries = Object.entries(c.gameMetrics).slice(0, 4);
            metricsHtml = entries.map(([k, v]) => {
                const val = typeof v === 'object' ? v.value : v;
                const label = typeof v === 'object' ? (v.label || k) : k;
                const unit = typeof v === 'object' ? (v.unit || '') : '';
                if (val == null || val === '' || val === true || val === false) return '';
                return `<div class="m-metric-row"><span class="m-metric-label">${label}</span><span class="m-metric-val">${val}${unit && !String(val).includes(unit) ? ' ' + unit : ''}</span></div>`;
            }).filter(Boolean).join('');
        }

        return `
        <div class="m-company-card" data-company="${encodeURIComponent(c.name)}">
            <div class="m-company-header">
                <div class="m-company-identity">
                    <div class="m-company-logo">${c.logo || '🏢'}</div>
                    <div>
                        <div class="m-company-name">${c.name}</div>
                        <div class="m-company-ticker">${c.ticker || ''} · ${c.segment || ''}</div>
                    </div>
                </div>
                <span class="m-company-region">${regionFlag}</span>
            </div>
            <div class="m-company-period">${c.fiscalPeriod || ''}</div>
            <div class="m-hero-strip">
                <div class="m-hero-cell">
                    <div class="m-hero-label">💰 营收</div>
                    <div class="m-hero-value">${revenueLabel}</div>
                    <div class="m-hero-yoy"><span class="m-fin-yoy ${growth >= 0 ? 'positive' : 'negative'}">${growth >= 0 ? '+' : ''}${growth.toFixed(1)}%</span></div>
                </div>
                ${profitLabel ? `<div class="m-hero-cell">
                    <div class="m-hero-label">💎 利润</div>
                    <div class="m-hero-value">${profitLabel}</div>
                </div>` : ''}
                <div class="m-hero-cell m-hero-margin">
                    <div class="m-hero-label">利润率</div>
                    <div class="m-margin-ring m-margin-${marginCls}">${margin !== 0 ? margin.toFixed(1) + '%' : 'N/A'}</div>
                </div>
            </div>
            ${segPct ? `<div class="m-seg-pct">📊 游戏占比 ${segPct}% · ${c.filingDate || '--'} · ${c.filingType || ''}</div>` : `<div class="m-seg-pct">📅 ${c.filingDate || '--'} · ${c.filingType || ''}</div>`}
            ${mBuildDualModuleHtml(c)}
            ${keyProds.length ? `<div class="m-company-products"><span class="m-products-label">🎮</span>${keyProds.map(p => `<span class="m-product-tag">${p}</span>`).join('')}</div>` : ''}
            <div class="m-company-detail">
                ${metricsHtml ? `<div class="m-detail-section"><h5>🎮 关键运营指标</h5><div class="m-metrics-grid">${metricsHtml}</div></div>` : ''}
                ${c.analysis?.performance ? `<div class="m-detail-section m-detail-perf"><h5>📊 业绩分析</h5><p>${c.analysis.performance}</p></div>` : ''}
                ${c.analysis?.strategy ? `<div class="m-detail-section m-detail-strat"><h5>🎯 战略方向</h5><p>${c.analysis.strategy}</p></div>` : ''}
                ${c.analysis?.outlook ? `<div class="m-detail-section m-detail-outlook"><h5>🔮 前瞻展望</h5><p>${c.analysis.outlook}</p></div>` : ''}
                ${c.analysis?.newProducts ? `<div class="m-detail-section m-detail-new"><h5>🆕 新品管线</h5><p>${c.analysis.newProducts}</p></div>` : ''}
                ${c.dataSources?.length ? `<div class="m-detail-section"><h5>📋 数据来源</h5>${c.dataSources.map(s => `<a href="${s.url}" target="_blank" class="m-source-link">${s.name} (${s.date})</a>`).join('')}</div>` : ''}
            </div>
        </div>`;
    }).join('');

    // 点击展开
    grid.querySelectorAll('.m-company-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // 不拦截链接点击
            if (e.target.tagName === 'A') return;
            card.classList.toggle('expanded');
        });
    });
}

function mRenderEarningsCharts(companies) {
    // 利润率
    const marginEl = document.getElementById('mEarningsMarginChart');
    if (marginEl) {
        const withMargin = companies.filter(c => _eMargin(c) > 0);
        const sorted = [...withMargin].sort((a, b) => _eMargin(b) - _eMargin(a));
        const maxW = sorted.length > 0 ? _eMargin(sorted[0]) : 1;

        marginEl.innerHTML = sorted.map(c => {
            const margin = _eMargin(c);
            const w = maxW > 0 ? margin / maxW * 100 : 0;
            const color = margin >= 25 ? '#22c55e' : margin >= 15 ? '#3b82f6' : margin >= 0 ? '#f59e0b' : '#ef4444';
            return `<div class="m-earnings-bar-row">
                <div class="m-earnings-bar-name">${c.name}</div>
                <div class="m-earnings-bar-track"><div class="m-earnings-bar-fill" style="width:${w}%;background:${color};"></div></div>
                <div class="m-earnings-bar-value" style="color:${color};">${margin.toFixed(1)}%</div>
            </div>`;
        }).join('');
    }

    // 增速
    const growthEl = document.getElementById('mEarningsGrowthChart');
    if (growthEl) {
        const withGrowth = companies.filter(c => _eGrowth(c) !== 0 && _eGrowth(c) !== null);
        const sorted = [...withGrowth].sort((a, b) => _eGrowth(b) - _eGrowth(a));
        const maxW = sorted.length > 0 ? Math.max(...sorted.map(c => Math.abs(_eGrowth(c)))) : 1;

        growthEl.innerHTML = sorted.map(c => {
            const growth = _eGrowth(c);
            const w = maxW > 0 ? Math.abs(growth) / maxW * 100 : 0;
            const color = growth >= 20 ? '#22c55e' : growth >= 0 ? '#3b82f6' : '#ef4444';
            return `<div class="m-earnings-bar-row">
                <div class="m-earnings-bar-name">${c.name}</div>
                <div class="m-earnings-bar-track"><div class="m-earnings-bar-fill" style="width:${w}%;background:${color};"></div></div>
                <div class="m-earnings-bar-value" style="color:${color};">${growth >= 0 ? '+' : ''}${growth.toFixed(1)}%</div>
            </div>`;
        }).join('');
    }

    // 单季度收入对比 (V7: 统一单季度口径)
    const revEl = document.getElementById('mEarningsRevenueCompare');
    if (revEl && typeof quarterlyRevenueComparison !== 'undefined') {
        const qData = quarterlyRevenueComparison.filter(d => d.revenue !== null && d.revenue > 0);
        const nullCount = quarterlyRevenueComparison.length - qData.length;
        const sorted = [...qData].sort((a, b) => (b.revenue || 0) - (a.revenue || 0));
        const maxRev = sorted[0]?.revenue || 1;
        const gradeColors = { A: '#10b981', B: '#f59e0b', C: '#ef4444', X: '#6b7280' };
        const gradeLabels = { A: '官方', B: '推算', C: '估', X: '无' };

        let html = sorted.map(d => {
            const w = (d.revenue / maxRev * 100).toFixed(1);
            const revLabel = d.revenue >= 1000 ? '$' + (d.revenue / 1000).toFixed(1) + 'B' : '$' + d.revenue + 'M';
            const grade = d.dataGrade || 'A';
            const gc = gradeColors[grade] || '#6b7280';
            const gradeTag = `<span style="font-size:0.55rem;padding:0 3px;border-radius:2px;background:${gc}22;color:${gc};margin-left:2px;">${gradeLabels[grade]}</span>`;
            const yoyStr = d.yoy !== null && d.yoy !== undefined ? ` <span style="color:${d.yoy >= 0 ? '#10b981' : '#ef4444'};font-size:0.65rem;">${d.yoy >= 0 ? '+' : ''}${d.yoy}%</span>` : '';
            const companyName = mFindCompanyNameByChartName(d.name);
            return `<div class="m-earnings-bar-row" title="${d.period || ''}" data-target-company="${companyName ? encodeURIComponent(companyName) : ''}" style="cursor:${companyName ? 'pointer' : 'default'};">
                <div class="m-earnings-bar-name">${d.name || d.company}${gradeTag}</div>
                <div class="m-earnings-bar-track"><div class="m-earnings-bar-fill" style="width:${w}%;background:${d.color || '#6366f1'};"></div></div>
                <div class="m-earnings-bar-value" style="color:var(--text-primary);">${revLabel}${yoyStr}</div>
            </div>`;
        }).join('');
        if (nullCount > 0) {
            html += `<div style="font-size:0.65rem;color:var(--text-muted);padding:6px 0;border-top:1px dashed var(--border-color);margin-top:6px;">⚠ ${nullCount}家公司数据暂缺已排除</div>`;
        }
        revEl.innerHTML = html;

        // 绑定点击跳转
        revEl.querySelectorAll('.m-earnings-bar-row[data-target-company]').forEach(row => {
            const targetCompany = row.dataset.targetCompany;
            if (targetCompany) {
                row.addEventListener('click', () => mScrollToCompanyCard(targetCompany));
            }
        });
    }

    // V7: 全年/年化收入对比
    const fyEl = document.getElementById('mEarningsFullYear');
    if (fyEl && typeof fullYearRevenueComparison !== 'undefined') {
        const fyData = fullYearRevenueComparison.filter(d => d.revenue !== null && d.revenue > 0);
        const fySorted = [...fyData].sort((a, b) => (b.revenue || 0) - (a.revenue || 0));
        const fyMaxRev = fySorted[0]?.revenue || 1;
        const gradeColors2 = { A: '#10b981', B: '#f59e0b', C: '#ef4444', X: '#6b7280' };
        const gradeLabels2 = { A: '官方', B: '指引', C: '估', X: '无' };

        let fyHtml = fySorted.map(d => {
            const w = (d.revenue / fyMaxRev * 100).toFixed(1);
            const revLabel = d.revenue >= 10000 ? '$' + (d.revenue / 1000).toFixed(1) + 'B' : '$' + (d.revenue / 1000).toFixed(2) + 'B';
            const grade = d.dataGrade || 'A';
            const gc = gradeColors2[grade] || '#6b7280';
            const gradeTag = `<span style="font-size:0.55rem;padding:0 3px;border-radius:2px;background:${gc}22;color:${gc};margin-left:2px;">${gradeLabels2[grade]}</span>`;
            const yoyStr = d.yoy !== null && d.yoy !== undefined ? ` <span style="color:${d.yoy >= 0 ? '#10b981' : '#ef4444'};font-size:0.65rem;">${d.yoy >= 0 ? '+' : ''}${d.yoy}%</span>` : '';
            const companyName = mFindCompanyNameByChartName(d.name);
            return `<div class="m-earnings-bar-row" title="${d.period || ''}" data-target-company="${companyName ? encodeURIComponent(companyName) : ''}" style="cursor:${companyName ? 'pointer' : 'default'};">
                <div class="m-earnings-bar-name">${d.name || d.company}${gradeTag}</div>
                <div class="m-earnings-bar-track"><div class="m-earnings-bar-fill" style="width:${w}%;background:${d.color || '#6366f1'};"></div></div>
                <div class="m-earnings-bar-value" style="color:var(--text-primary);">${revLabel}${yoyStr}</div>
            </div>`;
        }).join('');
        fyEl.innerHTML = fyHtml;

        // 绑定点击跳转
        fyEl.querySelectorAll('.m-earnings-bar-row[data-target-company]').forEach(row => {
            const targetCompany = row.dataset.targetCompany;
            if (targetCompany) {
                row.addEventListener('click', () => mScrollToCompanyCard(targetCompany));
            }
        });
    }
}

// ============ Tab: StoreWatch ============

function mUpdateStorewatchTab() {
    const loading = document.getElementById('mStorewatchLoading');
    const content = document.getElementById('mStorewatchContent');

    if (typeof storewatchData === 'undefined' || !storewatchData) {
        if (loading) loading.style.display = 'flex';
        if (content) content.style.display = 'none';
        return;
    }

    if (loading) loading.style.display = 'none';
    if (content) content.style.display = 'block';

    // 平台切换已在 HTML 中定义，绑定事件在 mBindEvents
    mRenderStorewatchPlatform('summary');
}

function mRenderStorewatchPlatform(platform) {
    const body = document.getElementById('mStorewatchBody');
    if (!body) return;

    if (platform === 'summary') {
        mRenderStorewatchSummary(body);
    } else {
        const platformData = storewatchData[platform === 'ps5' ? 'PS5' : 'Xbox'] || [];
        mRenderStorewatchDays(body, platformData, platform);
    }
}

function mRenderStorewatchSummary(container) {
    // 使用 PC 版同源函数计算统计数据
    const weeklyStats = getCombinedWeeklyStats(7);
    const ps5Days = (storewatchData.PS5 || []).length;
    const xboxDays = (storewatchData.Xbox || []).length;
    const dr = weeklyStats.dateRange;
    const fmtShort = (d) => d ? `${parseInt(d.slice(5,7))}/${parseInt(d.slice(8,10))}` : '-';
    const dateRangeLabel = `${fmtShort(dr.actualFrom)}~${fmtShort(dr.actualTo)}`;

    let html = '';

    // ===== KPI 卡片 =====
    html += `<div class="m-sw-kpi-strip">
        <div class="m-sw-kpi-item m-sw-kpi-ps">
            <div class="m-sw-kpi-num">${ps5Days}</div>
            <div class="m-sw-kpi-label">PS 天数</div>
        </div>
        <div class="m-sw-kpi-item m-sw-kpi-xbox">
            <div class="m-sw-kpi-num">${xboxDays}</div>
            <div class="m-sw-kpi-label">Xbox 天数</div>
        </div>
        <div class="m-sw-kpi-item">
            <div class="m-sw-kpi-num">${weeklyStats.totalPositions}</div>
            <div class="m-sw-kpi-label">近7天资源位</div>
        </div>
        <div class="m-sw-kpi-item m-sw-kpi-accent">
            <div class="m-sw-kpi-num">${dateRangeLabel}</div>
            <div class="m-sw-kpi-label">${dr.actualDayCount}天数据</div>
        </div>
    </div>`;

    // ===== 数据来源说明 =====
    html += `<div class="m-sw-source-bar">ℹ️ 数据来源：人工监控美国🇺🇸、日本🇯🇵、香港🇭🇰三区域商店推荐位</div>`;

    // ===== Top 10 曝光游戏 =====
    if (weeklyStats.topGames && weeklyStats.topGames.length > 0) {
        html += `<div class="m-sw-panel">
            <div class="m-sw-panel-header">🔥 近7天 Top 10 曝光游戏</div>
            <div class="m-sw-panel-sub">${dr.actualFrom} ~ ${dr.actualTo}（${dr.actualDayCount}天） · 双平台合计</div>`;

        weeklyStats.topGames.forEach((g, i) => {
            const pct = Math.min((g.count / weeklyStats.topGames[0].count * 100), 100).toFixed(0);
            const rankCls = i < 3 ? 'm-sw-rank-gold' : '';
            const display = (typeof getGameDisplayName === 'function') ? getGameDisplayName(g.name, false) : { primary: g.name, secondary: '' };
            html += `<div class="m-sw-top-game">
                <div class="m-sw-top-rank ${rankCls}">${g.rank}</div>
                <div class="m-sw-top-info">
                    <div class="m-sw-top-name">${display.primary}</div>
                    ${display.secondary ? `<div class="m-sw-top-name-sub">${display.secondary}</div>` : ''}
                    <div class="m-sw-top-vendor">${g.vendor}</div>
                </div>
                <div class="m-sw-top-bar-wrap">
                    <div class="m-sw-top-bar" style="width:${pct}%"></div>
                    <span class="m-sw-top-count">${g.count}</span>
                </div>
            </div>`;
        });

        html += `</div>`;
    }

    // ===== 发行商资源位覆盖 =====
    if (weeklyStats.vendorCoverage && weeklyStats.vendorCoverage.length > 0) {
        html += `<div class="m-sw-panel">
            <div class="m-sw-panel-header">🏢 发行商资源位覆盖</div>
            <div class="m-sw-panel-sub">跨平台统计 · Top ${Math.min(weeklyStats.vendorCoverage.length, 8)}</div>`;

        weeklyStats.vendorCoverage.slice(0, 8).forEach(v => {
            const platforms = v.platforms.split(' / ').map(p =>
                `<span class="m-sw-platform-pill ${p === 'PS5' ? 'm-sw-pill-ps' : 'm-sw-pill-xbox'}">${p}</span>`
            ).join('');
            const slots = v.slots.map(s => `<span class="m-sw-slot-chip">${s}</span>`).join('');
            html += `<div class="m-sw-vendor-row">
                <div class="m-sw-vendor-left">
                    <div class="m-sw-vendor-name">${v.name}</div>
                    <div class="m-sw-vendor-meta">${platforms} · ${v.slotCount}个资源位</div>
                </div>
                <div class="m-sw-vendor-count">${v.total}次</div>
            </div>
            <div class="m-sw-slot-chips">${slots}</div>`;
        });

        html += `</div>`;
    }

    container.innerHTML = html;
}

function mRenderStorewatchDays(container, data, platform) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">暂无数据</div>';
        return;
    }

    const platformKey = platform === 'ps5' ? 'PS5' : 'Xbox';
    const cls = platform === 'ps5' ? 'ps' : 'xbox';
    const stats = getStorewatchStats(platformKey);
    const slotPriority = storewatchSlotPriority[platformKey] || [];

    let html = '';

    // ===== 平台 KPI =====
    html += `<div class="m-sw-kpi-strip m-sw-kpi-strip-${cls}">
        <div class="m-sw-kpi-item">
            <div class="m-sw-kpi-num">${stats.totalDays}</div>
            <div class="m-sw-kpi-label">监控天数</div>
        </div>
        <div class="m-sw-kpi-item">
            <div class="m-sw-kpi-num" style="font-size:0.72rem;">${stats.topVendors[0]?.name || '-'}</div>
            <div class="m-sw-kpi-label">占位最多</div>
        </div>
        <div class="m-sw-kpi-item">
            <div class="m-sw-kpi-num">${stats.topVendors[0]?.pct || 0}%</div>
            <div class="m-sw-kpi-label">头部占比</div>
        </div>
        <div class="m-sw-kpi-item">
            <div class="m-sw-kpi-num" style="font-size:0.68rem;">${stats.latestDate}</div>
            <div class="m-sw-kpi-label">最新数据</div>
        </div>
    </div>`;

    // ===== 资源位价值排序说明 =====
    if (slotPriority.length > 0) {
        html += `<div class="m-sw-tier-legend m-sw-legend-${cls}">
            <div class="m-sw-legend-title">📌 资源位价值排序</div>
            ${slotPriority.map((s, i) => `
                <div class="m-sw-legend-item">
                    <span class="m-sw-legend-rank m-sw-tier-${s.tier}-${cls}">#${i + 1}</span>
                    <span class="m-sw-legend-label">${s.label}</span>
                    <span class="m-sw-legend-name">${s.name}</span>
                    ${s.subSlots ? `<div class="m-sw-legend-sub">${s.subSlots.join(' + ')}</div>` : ''}
                </div>
            `).join('')}
        </div>`;
    }

    // ===== 厂商占位柱状图（Top 8） =====
    if (stats.topVendors && stats.topVendors.length > 0) {
        const maxCount = stats.topVendors[0].count || 1;
        html += `<div class="m-sw-panel">
            <div class="m-sw-panel-header">📊 厂商商店资源占位</div>
            <div class="m-sw-panel-sub">全部 ${stats.totalDays} 天数据统计</div>`;

        stats.topVendors.slice(0, 8).forEach((v, i) => {
            const pct = (v.count / maxCount * 100).toFixed(1);
            html += `<div class="m-sw-bar-row">
                <div class="m-sw-bar-label">${v.name}</div>
                <div class="m-sw-bar-track">
                    <div class="m-sw-bar-fill m-sw-fill-${cls}" style="width:${pct}%;animation-delay:${i * 50}ms"></div>
                </div>
                <div class="m-sw-bar-val">${v.count}次 (${v.pct}%)</div>
            </div>`;
        });

        html += `</div>`;
    }

    // ===== 近7天资源位详情（按 Tier 优先级 + 三区域并列） =====
    html += `<div class="m-sw-panel">
        <div class="m-sw-panel-header">📋 近7天资源位详情</div>`;

    data.slice(0, 7).forEach((day, dayIdx) => {
        const processedSlots = platformKey === 'Xbox' ? mergeXboxSlots(day.slots) : day.slots;
        const weekday = (typeof getWeekday === 'function') ? getWeekday(day.date) : '';

        html += `<div class="m-sw-day ${dayIdx === 0 ? 'expanded' : ''}">
            <div class="m-sw-day-header m-sw-day-${cls}">
                📅 ${day.date || `Day ${dayIdx + 1}`} ${weekday}
                <span style="font-size:0.65rem;color:var(--text-muted);margin-left:auto;">${dayIdx === 0 ? '🟢 最新' : ''}</span>
            </div>
            <div class="m-sw-day-body" style="${dayIdx === 0 ? 'display:block;' : ''}">`;

        // 按 Tier 优先级排序
        slotPriority.forEach(slotDef => {
            const slotData = processedSlots[slotDef.name];
            if (!slotData || !slotData.positions || slotData.positions.length === 0) return;

            html += `<div class="m-sw-slot-section m-sw-tier-${slotDef.tier}-${cls}">
                <div class="m-sw-slot-title">
                    <span class="m-sw-tier-dot m-sw-dot-${cls}-${slotDef.tier}"></span>
                    <span class="m-sw-slot-tier-label">${slotDef.label}</span>
                    <span class="m-sw-slot-tier-name">${slotDef.name}</span>
                </div>`;

            // 三区域并列表格
            html += `<div class="m-sw-region-table-wrap">
                <table class="m-sw-region-table">
                    <thead>
                        <tr>
                            <th style="width:28px">#</th>
                            <th>🇺🇸 美国</th>
                            <th>🇯🇵 日本</th>
                            <th>🇭🇰 香港</th>
                        </tr>
                    </thead>
                    <tbody>`;

            slotData.positions.forEach(pos => {
                const isNg = pos.isNonGame;
                const rowCls = isNg ? 'm-sw-non-game' : '';
                const srcTag = pos.sourceSlot && pos.sourceSlot !== slotDef.name
                    ? `<span class="m-sw-src-tag">${pos.sourceSlot.replace(/\s*banner\d?$/i,'').trim()}</span>` : '';

                html += `<tr class="${rowCls}">
                    <td class="m-sw-rank-cell">${pos.rank}${srcTag}</td>
                    <td>${mRenderGameCell(pos.us, isNg || pos.usNonGame, pos)}</td>
                    <td>${mRenderGameCell(pos.jp, isNg || pos.jpNonGame, pos)}</td>
                    <td>${mRenderGameCell(pos.hk, isNg || pos.hkNonGame, pos)}</td>
                </tr>`;
            });

            html += `</tbody></table></div></div>`;
        });

        html += `</div></div>`;
    });

    html += `</div>`;

    container.innerHTML = html;

    // 日期折叠展开
    container.querySelectorAll('.m-sw-day-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('expanded');
            const body = header.nextElementSibling;
            if (body) body.style.display = header.parentElement.classList.contains('expanded') ? 'block' : 'none';
        });
    });
}

// 移动版游戏单元格渲染（复用 PC 版 getGameDisplayName + vendorMap）
function mRenderGameCell(gameName, isNonGame, posData) {
    if (!gameName) return '<span class="m-sw-cell-empty">—</span>';
    if (isNonGame) return `<span class="m-sw-promo">${gameName}</span>`;

    const display = (typeof getGameDisplayName === 'function') ? getGameDisplayName(gameName, false) : { primary: gameName, secondary: '' };
    const vendor = (posData && posData.vendor) || (typeof storewatchVendorMap !== 'undefined' ? storewatchVendorMap[gameName] : null);
    const vendorHtml = vendor ? `<span class="m-sw-micro-vendor">${vendor}</span>` : '';

    return `<div class="m-sw-game-cell">
        <div class="m-sw-cell-primary">${display.primary}</div>
        ${display.secondary ? `<div class="m-sw-cell-secondary">${display.secondary}</div>` : ''}
        ${vendorHtml}
    </div>`;
}

// ============ Bottom Sheet ============

function mShowSheet(title, contentHtml) {
    const overlay = document.getElementById('mSheetOverlay');
    document.getElementById('mSheetTitle').textContent = title;
    document.getElementById('mSheetContent').innerHTML = contentHtml;
    overlay.classList.add('active');
}

function mCloseSheet() {
    document.getElementById('mSheetOverlay')?.classList.remove('active');
}

// ============ 事件绑定 ============

function mBindEvents() {
    // Tab Bar
    document.querySelectorAll('.m-tabbar-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = item.dataset.tab;
            mSwitchTab(tab);
        });
    });

    // 筛选器 toggle
    document.getElementById('mFilterToggle')?.addEventListener('click', () => {
        const body = document.getElementById('mFilterBody');
        const toggle = document.getElementById('mFilterToggle');
        body.classList.toggle('open');
        toggle.classList.toggle('open');
    });

    // 筛选器 change
    ['mFilterBigCorp', 'mFilterConsole', 'mFilterXGP', 'mFilterGenre', 'mFilterMonth', 'mFilterRevTier'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', mOnFilterChange);
    });

    // 筛选器 reset
    document.getElementById('mFilterReset')?.addEventListener('click', () => {
        ['mFilterBigCorp', 'mFilterConsole', 'mFilterXGP', 'mFilterGenre', 'mFilterMonth', 'mFilterRevTier'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = 'all';
        });
        mOnFilterChange();
    });

    // 展开/收起按钮
    document.querySelectorAll('.m-expand-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.dataset.target;
            const target = document.getElementById(targetId);
            if (target) {
                const isHidden = target.style.display === 'none';
                target.style.display = isHidden ? 'block' : 'none';
                btn.textContent = isHidden ? '收起' : '展开';
                btn.classList.toggle('active', isHidden);

                // 首次展开时渲染 AI 洞察和校验
                if (isHidden) {
                    if (targetId === 'mAiDetail') mRenderAIInsight(filteredGames);
                    if (targetId === 'mValidationDetail') mRenderValidation(filteredGames);
                }
            }
        });
    });

    // 图表切换
    document.querySelectorAll('.m-chart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chartId = btn.dataset.chart;
            btn.parentElement.querySelectorAll('.m-chart-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            mCurrentMonthlyChartType = btn.dataset.view;
            mRenderMonthlyDailyRevChart(getMonthlyDailyRevenue(filteredGames), mCurrentMonthlyChartType);
        });
    });

    // Bottom sheet close
    document.getElementById('mSheetClose')?.addEventListener('click', mCloseSheet);
    document.getElementById('mSheetOverlay')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) mCloseSheet();
    });

    // Pipeline 筛选器
    document.getElementById('mPipelineTimeFilter')?.addEventListener('change', () => mUpdatePipelineTab());
    document.getElementById('mPipelineHeatFilter')?.addEventListener('change', () => mUpdatePipelineTab());

    // News 筛选器
    document.getElementById('mNewsFeaturedFilter')?.addEventListener('change', () => mUpdateNewsTab());
    document.getElementById('mNewsCategoryFilter')?.addEventListener('change', () => mUpdateNewsTab());
    document.getElementById('mNewsSourceFilter')?.addEventListener('change', () => mUpdateNewsTab());
    document.getElementById('mNewsRefreshBtn')?.addEventListener('click', () => mUpdateNewsTab());

    // Earnings 筛选器
    document.getElementById('mEarningsSearch')?.addEventListener('input', () => mUpdateEarningsTab());
    document.getElementById('mEarningsRegionFilter')?.addEventListener('change', () => mUpdateEarningsTab());
    document.getElementById('mEarningsSortFilter')?.addEventListener('change', () => mUpdateEarningsTab());

    // Validation 搜索
    document.getElementById('mValidationSearch')?.addEventListener('input', () => {
        mValidationPage = 1;
        mRenderValidation(filteredGames);
    });

    // StoreWatch 平台切换
    document.querySelectorAll('.m-platform-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.m-platform-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            mRenderStorewatchPlatform(tab.dataset.platform);
        });
    });
}

// ============ Tab 切换 ============

function mSwitchTab(tab) {
    mCurrentTab = tab;

    // 更新 tab bar 高亮
    document.querySelectorAll('.m-tabbar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tab);
    });

    // 切换内容
    document.querySelectorAll('.m-tab-content').forEach(tc => tc.classList.remove('active'));
    const target = document.getElementById(`m-tab-${tab}`);
    if (target) target.classList.add('active');

    // 更新标题
    const titles = {
        strategy: '已上线新游数据表现',
        pipeline: '待上线 Pipeline',
        news: '行业热点新闻',
        earnings: '重点公司财报分析',
        storewatch: 'PS&Xbox 商店监控'
    };
    mSetText('mTabTitle', titles[tab] || tab);

    // 筛选器显示控制
    const filterSection = document.getElementById('mFilterSection');
    if (filterSection) {
        filterSection.style.display = tab === 'strategy' ? 'block' : 'none';
    }

    // 切换后重绘
    mRedrawCurrentTab();

    // 滚动到顶部
    window.scrollTo(0, 0);
}

function mRedrawCurrentTab() {
    if (mCurrentTab === 'strategy') {
        setTimeout(() => mUpdateStrategyTab(filteredGames), 50);
    } else if (mCurrentTab === 'pipeline') {
        setTimeout(() => mUpdatePipelineTab(), 50);
    } else if (mCurrentTab === 'news') {
        setTimeout(() => mUpdateNewsTab(), 50);
    } else if (mCurrentTab === 'earnings') {
        setTimeout(() => mUpdateEarningsTab(), 50);
    } else if (mCurrentTab === 'storewatch') {
        setTimeout(() => mUpdateStorewatchTab(), 50);
    }
}

// ============ 移动端筛选器 ============

function mGetFilterValues() {
    return {
        bigCorp: document.getElementById('mFilterBigCorp')?.value || 'all',
        console: document.getElementById('mFilterConsole')?.value || 'all',
        xgpType: document.getElementById('mFilterXGP')?.value || 'all',
        genre: document.getElementById('mFilterGenre')?.value || 'all',
        month: document.getElementById('mFilterMonth')?.value || 'all',
        revTier: document.getElementById('mFilterRevTier')?.value || 'all',
        search: ''
    };
}

function mOnFilterChange() {
    const filters = mGetFilterValues();
    const games = applyFilters(filters);

    // 更新 filter count badge
    let activeCount = 0;
    Object.values(filters).forEach(v => { if (v !== 'all' && v !== '') activeCount++; });
    const countEl = document.getElementById('mFilterCount');
    if (countEl) {
        countEl.textContent = activeCount > 0 ? activeCount : '';
        countEl.style.display = activeCount > 0 ? 'inline' : 'none';
    }

    mUpdateAll(games);
}

// ============ 工具函数 ============

function mSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// ============ 兼容检查 ============

// 确保 PC 端依赖的函数存在 (有些数据处理函数在 data.js / charts.js 中)
if (typeof getFlowNodes === 'undefined') {
    console.warn('data.js 未正确加载 - 部分数据功能不可用');
}
if (typeof getMonthlyDailyRevenue === 'undefined') {
    console.warn('charts.js 未正确加载 - 图表功能不可用');
}
