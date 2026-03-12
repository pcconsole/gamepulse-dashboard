// ============================================
// 图表渲染模块 - Chart.js 可视化
// 与 app.js 共享 chartInstances 对象
// ============================================

const CHART_COLORS = [
    '#6366f1', '#8b5cf6', '#a78bfa', '#3b82f6', '#06b6d4',
    '#22c55e', '#f59e0b', '#ef4444', '#ec4899', '#f97316',
    '#14b8a6', '#84cc16', '#e879f9', '#fb923c', '#38bdf8'
];

const chartInstances = {};

// Chart.js 全局配置
Chart.defaults.color = '#8b8fa3';
Chart.defaults.borderColor = '#2a2d3e';
Chart.defaults.font.family = "'DM Sans', 'Noto Sans SC', 'Inter', sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 10;
Chart.defaults.plugins.legend.labels.padding = 16;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(22, 24, 35, 0.95)';
Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 12 };
Chart.defaults.plugins.tooltip.bodyFont = { size: 11 };
Chart.defaults.plugins.tooltip.padding = { x: 12, y: 10 };
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.borderColor = '#2a2d3e';
Chart.defaults.plugins.tooltip.borderWidth = 1;

/**
 * 月度收入趋势图
 */
function renderMonthlyRevenueChart(data, type = 'bar') {
    const ctx = document.getElementById('monthlyRevenueChart');
    if (!ctx) return;

    if (chartInstances.monthlyRevenue) chartInstances.monthlyRevenue.destroy();

    const labels = data.map(d => d.label);
    const revenues = data.map(d => d.revenue);
    const counts = data.map(d => d.count);

    chartInstances.monthlyRevenue = new Chart(ctx, {
        type: type === 'line' ? 'line' : 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: '总收入 ($)',
                    data: revenues,
                    backgroundColor: type === 'line' ? 'rgba(99, 102, 241, 0.1)' : createGradient(ctx, '#6366f1', '#8b5cf6'),
                    borderColor: '#6366f1',
                    borderWidth: type === 'line' ? 2.5 : 0,
                    borderRadius: type === 'line' ? 0 : 6,
                    fill: type === 'line',
                    tension: 0.4,
                    pointRadius: type === 'line' ? 4 : 0,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#6366f1',
                    yAxisID: 'y'
                },
                {
                    label: '游戏数量',
                    data: counts,
                    backgroundColor: 'rgba(34, 197, 94, 0.7)',
                    borderColor: '#22c55e',
                    borderWidth: 2,
                    borderRadius: 4,
                    type: 'bar',
                    yAxisID: 'y1',
                    barPercentage: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const monthData = data[idx];
                    if (monthData.games) showDrilldown(`${monthData.label} 上线游戏`, monthData.games);
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { maxRotation: 45, font: { size: 10 } }
                },
                y: {
                    position: 'left',
                    grid: { color: 'rgba(42, 45, 62, 0.5)' },
                    ticks: { callback: v => formatRevenue(v), font: { size: 10 } },
                    title: { display: true, text: '收入 ($)', font: { size: 10 } }
                },
                y1: {
                    position: 'right',
                    grid: { display: false },
                    ticks: { font: { size: 10 } },
                    title: { display: true, text: '游戏数', font: { size: 10 } }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            if (ctx.datasetIndex === 0) return ` 收入: ${formatRevenue(ctx.raw)}`;
                            return ` 游戏数: ${ctx.raw} 款`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * 游戏类型分布 - 环形图
 */
function renderGenreChart(data) {
    const ctx = document.getElementById('genreDistChart');
    if (!ctx) return;

    if (chartInstances.genre) chartInstances.genre.destroy();

    const topGenres = data.slice(0, 8);
    const otherRevenue = data.slice(8).reduce((s, d) => s + d.revenue, 0);
    if (otherRevenue > 0) {
        topGenres.push({ name: '其他', revenue: otherRevenue, count: data.slice(8).reduce((s, d) => s + d.count, 0) });
    }

    chartInstances.genre = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: topGenres.map(d => d.name),
            datasets: [{
                data: topGenres.map(d => d.revenue),
                backgroundColor: CHART_COLORS.slice(0, topGenres.length),
                borderWidth: 2,
                borderColor: '#161823',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const genreName = topGenres[idx].name;
                    if (genreName !== '其他') {
                        const genreGames = filteredGames.filter(g => g.mainGenre === genreName);
                        showDrilldown(`${genreName} 类型游戏`, genreGames);
                    }
                }
            },
            plugins: {
                legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 12, padding: 10 } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const pctVal = ((ctx.raw / total) * 100).toFixed(1);
                            return ` ${ctx.label}: ${formatRevenue(ctx.raw)} (${pctVal}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * 平台覆盖分布 - 横向柱状
 */
function renderPlatformChart(data) {
    const ctx = document.getElementById('platformChart');
    if (!ctx) return;

    if (chartInstances.platform) chartInstances.platform.destroy();

    const labels = Object.keys(data);
    const counts = labels.map(l => data[l].count);
    const revenues = labels.map(l => data[l].revenue);
    const colors = ['#3b82f6', '#6366f1', '#22c55e', '#ef4444'];

    chartInstances.platform = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: '游戏数量',
                data: counts,
                backgroundColor: colors.map(c => c + 'cc'),
                borderRadius: 6,
                barPercentage: 0.6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const platName = labels[idx];
                    const platMap = { 'PC': 'PC', 'PlayStation': 'PS', 'Xbox': 'Xbox', 'Nintendo': 'Nintendo' };
                    const platGames = filteredGames.filter(g => g.platforms.includes(platMap[platName]));
                    showDrilldown(`${platName} 平台游戏`, platGames);
                }
            },
            scales: {
                x: { grid: { color: 'rgba(42, 45, 62, 0.5)' }, ticks: { font: { size: 10 } } },
                y: { grid: { display: false }, ticks: { font: { size: 11, weight: '600' } } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        afterLabel: ctx => `总收入: ${formatRevenue(revenues[ctx.dataIndex])}`
                    }
                }
            }
        }
    });
}

/**
 * 发行商Top15 - 水平柱状图
 */
function renderPublisherChart(data) {
    const ctx = document.getElementById('publisherChart');
    if (!ctx) return;

    if (chartInstances.publisher) chartInstances.publisher.destroy();

    chartInstances.publisher = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.name.length > 20 ? d.name.slice(0, 20) + '...' : d.name),
            datasets: [{
                label: '收入 ($)',
                data: data.map(d => d.revenue),
                backgroundColor: CHART_COLORS.slice(0, data.length),
                borderRadius: 6,
                barPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const pubName = data[idx].name;
                    const pubGames = filteredGames.filter(g =>
                        (g.parentCompanyExtra || g.publisherParent || g.publisher) === pubName ||
                        g.publisher === pubName
                    );
                    showDrilldown(`${pubName} 发行游戏`, pubGames);
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(42, 45, 62, 0.5)' },
                    ticks: { callback: v => formatRevenue(v), font: { size: 10 } }
                },
                y: { grid: { display: false }, ticks: { font: { size: 10 } } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => ` 收入: ${formatRevenue(ctx.raw)}`,
                        afterLabel: ctx => `游戏数: ${data[ctx.dataIndex].count} 款`
                    }
                }
            }
        }
    });
}

/**
 * 大厂 vs 独立 - 双环形
 */
function renderMajorVsIndieChart(data) {
    const ctx = document.getElementById('majorVsIndieChart');
    if (!ctx) return;

    if (chartInstances.majorVsIndie) chartInstances.majorVsIndie.destroy();

    chartInstances.majorVsIndie = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['一线大厂', '独立/中小'],
            datasets: [
                {
                    label: '收入',
                    data: [data.major.revenue, data.indie.revenue],
                    backgroundColor: ['#6366f1', '#22c55e'],
                    borderWidth: 3,
                    borderColor: '#161823',
                    weight: 2
                },
                {
                    label: '数量',
                    data: [data.major.count, data.indie.count],
                    backgroundColor: ['rgba(99,102,241,0.5)', 'rgba(34,197,94,0.5)'],
                    borderWidth: 3,
                    borderColor: '#161823',
                    weight: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '40%',
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 11 }, padding: 16 } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            if (ctx.datasetIndex === 0) return ` 收入: ${formatRevenue(ctx.raw)}`;
                            return ` 数量: ${ctx.raw} 款`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Steam vs 全平台 - 饼图
 */
function renderSteamVsTotalChart(data) {
    const ctx = document.getElementById('steamVsTotalChart');
    if (!ctx) return;

    if (chartInstances.steamVsTotal) chartInstances.steamVsTotal.destroy();

    chartInstances.steamVsTotal = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Steam (Gamalytic)', '其他平台/渠道'],
            datasets: [{
                data: [data.steamRevenue, Math.max(data.otherRevenue, 0)],
                backgroundColor: ['#3b82f6', '#8b5cf6'],
                borderWidth: 3,
                borderColor: '#161823',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 11 }, padding: 16 } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                            const pctVal = ((ctx.raw / total) * 100).toFixed(1);
                            return ` ${ctx.label}: ${formatRevenue(ctx.raw)} (${pctVal}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * 渲染所有总览图表
 */
function renderAllCharts(games) {
    const monthlyData = getMonthlyRevenue(games);
    const genreData = getGenreDistribution(games);
    const platformData = getPlatformDistribution(games);
    const publisherData = getTopPublishers(games);
    const majorIndieData = getMajorVsIndie(games);
    const steamData = getSteamVsTotal(games);

    renderMonthlyRevenueChart(monthlyData, typeof currentMonthlyChartType !== 'undefined' ? currentMonthlyChartType : 'bar');
    renderGenreChart(genreData);
    renderPlatformChart(platformData);
    renderPublisherChart(publisherData);
    renderMajorVsIndieChart(majorIndieData);
    renderSteamVsTotalChart(steamData);
}

/**
 * 创建渐变色
 */
function createGradient(ctx, color1, color2) {
    const canvas = ctx.getContext ? ctx : ctx.canvas;
    const gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color1 + 'cc');
    gradient.addColorStop(1, color2 + '66');
    return gradient;
}

// ============ 新增: 发行商日均流水排名 ============

function renderPublisherDailyRevChart(data) {
    const ctx = document.getElementById('publisherDailyRevChart');
    if (!ctx) return;

    if (chartInstances.publisherDailyRev) chartInstances.publisherDailyRev.destroy();

    chartInstances.publisherDailyRev = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.name.length > 22 ? d.name.slice(0, 22) + '...' : d.name),
            datasets: [{
                label: '总日均流水 ($)',
                data: data.map(d => d.totalDailyRev),
                backgroundColor: CHART_COLORS.slice(0, data.length).map(c => c + 'cc'),
                borderRadius: 6,
                barPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const pubData_item = data[idx];
                    showDrilldown(`${pubData_item.name} - 发行游戏 (日均流水排序)`, pubData_item.games);
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(42, 45, 62, 0.5)' },
                    ticks: { callback: v => formatRevenue(v), font: { size: 10 } }
                },
                y: { grid: { display: false }, ticks: { font: { size: 10 } } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx_t => ` 总日均流水: ${formatRevenue(ctx_t.raw)}`,
                        afterLabel: ctx_t => {
                            const item = data[ctx_t.dataIndex];
                            return `游戏数: ${item.count} 款\n平均日均: ${formatRevenue(item.avgDailyRev)}\n总Mscience收入: ${formatRevenue(item.totalLifetimeRev)}`;
                        }
                    }
                }
            }
        }
    });
}

// ============ 新增: 游戏类型日均流水分布 ============

function renderGenreDailyRevChart(data) {
    const ctx = document.getElementById('genreDailyRevChart');
    if (!ctx) return;

    if (chartInstances.genreDailyRev) chartInstances.genreDailyRev.destroy();

    const topGenres = data.slice(0, 8);
    const otherDailyRev = data.slice(8).reduce((s, d) => s + d.totalDailyRev, 0);
    if (otherDailyRev > 0) {
        topGenres.push({ name: '其他', totalDailyRev: otherDailyRev, count: data.slice(8).reduce((s, d) => s + d.count, 0) });
    }

    chartInstances.genreDailyRev = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: topGenres.map(d => d.name),
            datasets: [{
                data: topGenres.map(d => d.totalDailyRev),
                backgroundColor: CHART_COLORS.slice(0, topGenres.length),
                borderWidth: 2,
                borderColor: '#161823',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const genreName = topGenres[idx].name;
                    if (genreName !== '其他') {
                        const genreGames = filteredGames.filter(g => g.mainGenre === genreName);
                        showDrilldown(`${genreName} 类型游戏 (日均流水)`, genreGames);
                    }
                }
            },
            plugins: {
                legend: { position: 'right', labels: { font: { size: 10 }, boxWidth: 12, padding: 10 } },
                tooltip: {
                    callbacks: {
                        label: ctx_t => {
                            const total = ctx_t.dataset.data.reduce((a, b) => a + b, 0);
                            const pctVal = ((ctx_t.raw / total) * 100).toFixed(1);
                            return ` ${ctx_t.label}: ${formatRevenue(ctx_t.raw)}/日 (${pctVal}%)`;
                        }
                    }
                }
            }
        }
    });
}

// ============ 新增: 月度上线游戏日均流水趋势 ============

function renderMonthlyDailyRevChart(data, type = 'bar') {
    const ctx = document.getElementById('monthlyDailyRevChart');
    if (!ctx) return;

    if (chartInstances.monthlyDailyRev) chartInstances.monthlyDailyRev.destroy();

    const labels = data.map(d => d.label);
    const avgDailyRevs = data.map(d => d.avgDailyRev);
    const counts = data.map(d => d.count);

    chartInstances.monthlyDailyRev = new Chart(ctx, {
        type: type === 'line' ? 'line' : 'bar',
        data: {
            labels,
            datasets: [
                {
                    label: '平均日均流水 ($)',
                    data: avgDailyRevs,
                    backgroundColor: type === 'line' ? 'rgba(99, 102, 241, 0.1)' : createGradient(ctx, '#6366f1', '#8b5cf6'),
                    borderColor: '#6366f1',
                    borderWidth: type === 'line' ? 2.5 : 0,
                    borderRadius: type === 'line' ? 0 : 6,
                    fill: type === 'line',
                    tension: 0.4,
                    pointRadius: type === 'line' ? 4 : 0,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#6366f1',
                    yAxisID: 'y'
                },
                {
                    label: '游戏数量',
                    data: counts,
                    backgroundColor: 'rgba(34, 197, 94, 0.7)',
                    borderColor: '#22c55e',
                    borderWidth: 2,
                    borderRadius: 4,
                    type: 'bar',
                    yAxisID: 'y1',
                    barPercentage: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            onClick: (e, elements) => {
                if (elements.length > 0) {
                    const idx = elements[0].index;
                    const monthData = data[idx];
                    if (monthData.games) showDrilldown(`${monthData.label} 上线游戏 (日均流水)`, monthData.games);
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { maxRotation: 45, font: { size: 10 } }
                },
                y: {
                    position: 'left',
                    grid: { color: 'rgba(42, 45, 62, 0.5)' },
                    ticks: { callback: v => formatRevenue(v), font: { size: 10 } },
                    title: { display: true, text: '平均日均流水 ($)', font: { size: 10 } }
                },
                y1: {
                    position: 'right',
                    grid: { display: false },
                    ticks: { font: { size: 10 } },
                    title: { display: true, text: '游戏数', font: { size: 10 } }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: ctx_t => {
                            if (ctx_t.datasetIndex === 0) return ` 平均日均: ${formatRevenue(ctx_t.raw)}`;
                            return ` 游戏数: ${ctx_t.raw} 款`;
                        }
                    }
                }
            }
        }
    });
}

// ============ 新增: 近期新游监控图表 ============

function renderRecentPlatformPie(data) {
    const ctx = document.getElementById('recentPlatformPie');
    if (!ctx) return;

    if (chartInstances.recentPlatform2) chartInstances.recentPlatform2.destroy();

    chartInstances.recentPlatform2 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['仅 PC', '跨端不含Xbox', '跨全端(含Xbox)'],
            datasets: [{
                data: [data.pcOnly, data.pcPs, data.pcXbox],
                backgroundColor: ['#64748b', '#8b5cf6', '#14b8a6'],
                borderWidth: 2,
                borderColor: '#161823',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 11 }, padding: 16 } },
                tooltip: {
                    callbacks: {
                        label: ctx_t => {
                            const total = ctx_t.dataset.data.reduce((a, b) => a + b, 0);
                            const pctVal = total > 0 ? ((ctx_t.raw / total) * 100).toFixed(1) : 0;
                            return ` ${ctx_t.label}: ${ctx_t.raw} 款 (${pctVal}%)`;
                        }
                    }
                }
            }
        }
    });
}

function renderRecentXgpPie(data) {
    const ctx = document.getElementById('recentXgpPie');
    if (!ctx) return;

    if (chartInstances.recentXgp) chartInstances.recentXgp.destroy();

    chartInstances.recentXgp = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['首发入库XGP', '后发入库XGP', '上Xbox未入库'],
            datasets: [{
                data: [data.sim, data.aft, data.none],
                backgroundColor: ['#14b8a6', '#3b82f6', '#64748b'],
                borderWidth: 2,
                borderColor: '#161823',
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: { position: 'bottom', labels: { font: { size: 11 }, padding: 16 } },
                tooltip: {
                    callbacks: {
                        label: ctx_t => {
                            const total = ctx_t.dataset.data.reduce((a, b) => a + b, 0);
                            const pctVal = total > 0 ? ((ctx_t.raw / total) * 100).toFixed(1) : 0;
                            return ` ${ctx_t.label}: ${ctx_t.raw} 款 (${pctVal}%)`;
                        }
                    }
                }
            }
        }
    });
}
