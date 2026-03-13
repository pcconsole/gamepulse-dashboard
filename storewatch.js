// ============================================================
// StoreWatch — PS & Xbox 商店资源监控 Tab
// 数据来源：腾讯文档 LXXdrpHEWcSr (sheet BB08J2 + xsejuk)
// 更新频率：工作日每天中午 12:00
// ============================================================

// ============ 元数据 ============
const storewatchMeta = {
    lastUpdated: '2026-03-13',
    dataRange: '2025-12-19 ~ 2026-03-10',
    sheetId: 'LXXdrpHEWcSr',
    mainSheet: 'BB08J2',
    vendorSheet: 'xsejuk',
    platforms: ['PS5', 'Xbox'],
    regions: ['美国', '日本', '香港'],
    schedule: '工作日每天 12:00',
};

// ============ 资源位价值排序 ============
const storewatchSlotPriority = {
    PS5: [
        { name: 'Must See', tier: 1, label: '🏆 顶级推荐位' },
        { name: 'Top games in your country', tier: 2, label: '🔥 区域热门' },
        { name: "What's hot", tier: 3, label: '📈 热门趋势' },
    ],
    Xbox: [
        { name: 'Dash home-banner', tier: 1, label: '🏆 主界面首屏' },
        { name: 'Dash home-banner2', tier: 2, label: '⭐ 主界面次屏' },
        { name: 'Store Home-hero banner', tier: 3, label: '🛒 商店首焦' },
        { name: 'Store Home-banner', tier: 3, label: '🛒 商店横幅' },
        { name: 'Game Home-hero banner', tier: 4, label: '🎮 游戏首焦' },
        { name: 'Game Home-banner', tier: 4, label: '🎮 游戏横幅' },
    ],
};

// ============ 厂商对照表 ============
const storewatchVendorMap = {
    "使命召唤:黑色行动7": "微软",
    "堡垒之夜": "Epic",
    "Roblox": "Roblox",
    "FC 25": "EA",
    "Fortnite": "Epic",
    "GTA Online": "Rockstar",
    "NBA 2K25": "2K",
    "Minecraft": "微软",
    "Apex Legends": "EA",
    "Diablo IV": "暴雪",
    "生化危机:安魂曲": "CAPCOM",
    "失落星船:马拉松": "Bungie",
    "WWE 2K26": "2K",
    "战地风云6": "EA",
    "刺客信条:影": "育碧",
    "Monster Hunter Wilds": "CAPCOM",
    "DEATH STRANDING 2: ON THE BEACH": "索尼",
    "Split Fiction": "EA",
    "Gran Turismo 7": "索尼",
    "Yu-Gi-Oh! Early Access": "KONAMI",
    "Sid Meier's Civilization VII": "2K",
    "Assassin's Creed Shadows": "育碧",
    "Like a Dragon: Pirate Yakuza in Hawaii": "世嘉",
    "Dynasty Warriors: Origins": "光荣",
    "Kingdom Come: Deliverance II": "Deep Silver",
    "Sniper Elite: Resistance": "Rebellion",
    "Citizen Sleeper 2: Starward Vector": "Fellow Traveller",
    "Avowed": "微软",
    "The Sims 4": "EA",
    "Stellar Blade": "索尼",
    "Destiny 2": "Bungie",
    "Dead by Daylight": "Behaviour",
    "Overwatch 2": "暴雪",
    "Marvel Rivals": "网易",
    "Call of Duty: Black Ops 6": "微软",
    "Palworld": "Pocketpair",
    "Elden Ring": "万代南梦宫",
    "Hogwarts Legacy": "华纳",
    "Baldur's Gate 3": "拉瑞安",
    "Final Fantasy VII Rebirth": "SE",
    "Tekken 8": "万代南梦宫",
    "Street Fighter 6": "CAPCOM",
    "Dragon Ball: Sparking! Zero": "万代南梦宫",
    "God of War Ragnarök": "索尼",
    "Ghost of Tsushima": "索尼",
    "Helldivers 2": "索尼",
    "The Last of Us Part II Remastered": "索尼",
    "Horizon Forbidden West": "索尼",
    "Spider-Man 2": "索尼",
    "Astro Bot": "索尼",
    "Lies of P": "Neowiz",
    "Star Wars Outlaws": "育碧",
    "Black Myth: Wukong": "Game Science",
    "Warhammer 40,000: Space Marine 2": "Focus",
    "Silent Hill 2": "KONAMI",
    "Dragon Age: The Veilguard": "EA",
    "Indiana Jones and the Great Circle": "微软",
    "Path of Exile 2": "GGG",
    "Hades II": "Supergiant",
    "S.T.A.L.K.E.R. 2": "GSC",
    "Metaphor: ReFantazio": "Atlus",
    "原神": "米哈游",
    "崩坏:星穹铁道": "米哈游",
    "鸣潮": "库洛",
    "绝区零": "米哈游",
    "无限暖暖": "叠纸",
};

// ============ 非游戏分类标签（灰色字体内容）============
const storewatchNonGameTags = [
    '优惠活动', '游戏专题', '榜单热门', '平台服务',
    '会员订阅', '新品预告', '赛事活动', '硬件推广',
    'DLC/更新', '免费游戏推荐'
];

// ============ 示例数据结构（Agent运行时会用完整腾讯文档数据替换）============
// 数据覆盖：2025-12-19 ~ 2026-03-10
const storewatchData = {
    PS5: generateSamplePlatformData('PS5'),
    Xbox: generateSamplePlatformData('Xbox'),
};

function generateSamplePlatformData(platform) {
    const slots = Object.keys(storewatchSlotPriority[platform] ? 
        storewatchSlotPriority[platform].reduce((a, s) => { a[s.name] = s; return a; }, {}) : {});
    const slotNames = storewatchSlotPriority[platform].map(s => s.name);
    
    // 生成最近7天的模拟数据
    const days = [];
    const baseDate = new Date('2026-03-10');
    
    const sampleGamesPS5 = [
        ['DEATH STRANDING 2: ON THE BEACH', 'Monster Hunter Wilds', 'Split Fiction', 'Gran Turismo 7', 'Stellar Blade', 'Helldivers 2'],
        ['生化危机:安魂曲', 'Assassin\'s Creed Shadows', 'NBA 2K25', 'FC 25', 'GTA Online', 'Fortnite'],
        ['Marvel Rivals', 'Overwatch 2', 'Apex Legends', 'Call of Duty: Black Ops 6', 'Diablo IV', 'Destiny 2'],
    ];
    const sampleGamesXbox = [
        ['战地风云6', 'Avowed', 'Indiana Jones and the Great Circle', 'Call of Duty: Black Ops 6', 'Minecraft', 'Fortnite'],
        ['WWE 2K26', 'Sid Meier\'s Civilization VII', 'Path of Exile 2', 'Hades II', 'Palworld', 'Elden Ring'],
        ['失落星船:马拉松', 'S.T.A.L.K.E.R. 2', 'Hogwarts Legacy', 'Baldur\'s Gate 3', 'Dragon Ball: Sparking! Zero', 'Tekken 8'],
        ['Marvel Rivals', 'Dead by Daylight', 'Roblox', 'Apex Legends', 'Overwatch 2', 'NBA 2K25'],
        ['GTA Online', 'The Sims 4', 'FC 25', 'Destiny 2', 'Diablo IV', 'Dragon Age: The Veilguard'],
        ['Black Myth: Wukong', 'Silent Hill 2', 'Star Wars Outlaws', 'Kingdom Come: Deliverance II', 'Sniper Elite: Resistance', 'Lies of P'],
    ];
    const sampleGames = platform === 'PS5' ? sampleGamesPS5 : sampleGamesXbox;
    
    for (let d = 0; d < 30; d++) {
        const date = new Date(baseDate);
        date.setDate(date.getDate() - d);
        // 跳过周末
        if (date.getDay() === 0 || date.getDay() === 6) continue;
        
        const dateStr = date.toISOString().split('T')[0];
        const dayData = { date: dateStr, slots: {} };
        
        slotNames.forEach((slotName, si) => {
            const games = sampleGames[si % sampleGames.length];
            dayData.slots[slotName] = {
                positions: games.map((game, idx) => {
                    // 随机决定各区域游戏（略有不同）
                    const shuffled = [...games].sort(() => Math.random() * 0.3 - 0.15);
                    const isNonGame = Math.random() < 0.08;
                    return {
                        rank: idx + 1,
                        us: isNonGame ? '🎮 春季促销' : game,
                        jp: isNonGame ? '🎮 春季促销' : (shuffled[idx] || game),
                        hk: isNonGame ? '🎮 春季促销' : (shuffled[(idx + 1) % shuffled.length] || game),
                        isNonGame: isNonGame,
                        vendor: isNonGame ? null : (storewatchVendorMap[game] || '其他'),
                    };
                }),
            };
        });
        
        days.push(dayData);
    }
    
    return days;
}

// ============ 统计计算 ============

function getStorewatchStats(platform) {
    const data = storewatchData[platform] || [];
    if (data.length === 0) return { totalDays: 0, totalSlots: 0, topVendors: [], latestDate: '-' };
    
    const vendorCount = {};
    let totalSlots = 0;
    
    data.forEach(day => {
        Object.values(day.slots).forEach(slot => {
            slot.positions.forEach(pos => {
                if (!pos.isNonGame && pos.vendor) {
                    vendorCount[pos.vendor] = (vendorCount[pos.vendor] || 0) + 1;
                }
                totalSlots++;
            });
        });
    });
    
    const topVendors = Object.entries(vendorCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([name, count]) => ({ name, count, pct: ((count / totalSlots) * 100).toFixed(1) }));
    
    return {
        totalDays: data.length,
        totalSlots,
        topVendors,
        latestDate: data[0]?.date || '-',
        totalGames: Object.keys(vendorCount).length,
    };
}

function getStorewatchTrend(platform, days = 7) {
    const data = (storewatchData[platform] || []).slice(0, days);
    // 厂商出现频次变化
    const vendorByDay = data.map(day => {
        const counts = {};
        Object.values(day.slots).forEach(slot => {
            slot.positions.forEach(pos => {
                if (!pos.isNonGame && pos.vendor) {
                    counts[pos.vendor] = (counts[pos.vendor] || 0) + 1;
                }
            });
        });
        return { date: day.date, vendors: counts };
    });
    return vendorByDay;
}

// ============ 渲染主函数 ============

function updateStorewatchTab() {
    const container = document.getElementById('tab-storewatch');
    if (!container) return;
    
    const currentPlatform = container.dataset.platform || 'PS5';
    const statsPS5 = getStorewatchStats('PS5');
    const statsXbox = getStorewatchStats('Xbox');
    const stats = currentPlatform === 'PS5' ? statsPS5 : statsXbox;
    const data = storewatchData[currentPlatform] || [];
    const slotPriority = storewatchSlotPriority[currentPlatform] || [];
    
    container.innerHTML = `
        <!-- Agent Badge -->
        <div class="agent-badge-bar">
            <span class="agent-badge" id="storewatchAgentBadge">🤖 StoreWatch Agent</span>
            <span class="agent-meta">数据范围: ${storewatchMeta.dataRange} · 更新频率: ${storewatchMeta.schedule}</span>
        </div>
        
        <!-- 平台切换 -->
        <div class="storewatch-platform-switch">
            <button class="sw-platform-btn ${currentPlatform === 'PS5' ? 'active' : ''}" data-platform="PS5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14l7-10v6h7l-7 10V14H3z"/></svg>
                PlayStation
            </button>
            <button class="sw-platform-btn ${currentPlatform === 'Xbox' ? 'active' : ''}" data-platform="Xbox">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="14" height="14" rx="3"/><path d="M7 7l6 6M13 7l-6 6"/></svg>
                Xbox
            </button>
        </div>
        
        <!-- KPI 卡片 -->
        <div class="sw-kpi-row">
            <div class="sw-kpi-card">
                <div class="sw-kpi-value">${stats.totalDays}</div>
                <div class="sw-kpi-label">监控天数</div>
            </div>
            <div class="sw-kpi-card accent">
                <div class="sw-kpi-value">${stats.topVendors[0]?.name || '-'}</div>
                <div class="sw-kpi-label">占位最多厂商</div>
            </div>
            <div class="sw-kpi-card">
                <div class="sw-kpi-value">${stats.topVendors[0]?.pct || 0}%</div>
                <div class="sw-kpi-label">头部占比</div>
            </div>
            <div class="sw-kpi-card">
                <div class="sw-kpi-value">${stats.latestDate}</div>
                <div class="sw-kpi-label">最新数据日期</div>
            </div>
        </div>
        
        <!-- 资源位价值说明 -->
        <div class="sw-slot-legend">
            <h4>📌 资源位价值排序（${currentPlatform}）</h4>
            <div class="sw-slot-tiers">
                ${slotPriority.map((s, i) => `
                    <div class="sw-slot-tier tier-${s.tier}">
                        <span class="sw-tier-rank">#${i + 1}</span>
                        <span class="sw-tier-label">${s.label}</span>
                        <span class="sw-tier-name">${s.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- 30天厂商曝光分析 -->
        <div class="sw-section">
            <h3 class="sw-section-title">📊 30天厂商商店资源占位分析</h3>
            <div class="sw-vendor-chart-area">
                ${renderVendorBarChart(stats.topVendors)}
            </div>
        </div>
        
        <!-- 7天资源位文字展示 -->
        <div class="sw-section">
            <h3 class="sw-section-title">📋 近7天资源位详情</h3>
            <div class="sw-7day-grid">
                ${renderSevenDayDetail(data.slice(0, 7), slotPriority, currentPlatform)}
            </div>
        </div>
        
        <!-- 最新1天详细展示 -->
        <div class="sw-section">
            <h3 class="sw-section-title">🔍 最新数据详细（${data[0]?.date || '-'}）</h3>
            <div class="sw-latest-detail">
                ${renderLatestDayDetail(data[0], slotPriority, currentPlatform)}
            </div>
        </div>
    `;
    
    // 绑定平台切换事件
    container.querySelectorAll('.sw-platform-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.dataset.platform = btn.dataset.platform;
            updateStorewatchTab();
        });
    });
}

// ============ 厂商柱状图渲染 ============

function renderVendorBarChart(topVendors) {
    if (!topVendors || topVendors.length === 0) return '<div class="sw-empty">暂无数据</div>';
    
    const maxCount = topVendors[0]?.count || 1;
    const colors = [
        'var(--accent)', '#22d3ee', '#a78bfa', '#fb923c', '#34d399',
        '#f472b6', '#facc15', '#818cf8', '#f87171', '#94a3b8'
    ];
    
    return `
        <div class="sw-bar-chart">
            ${topVendors.map((v, i) => `
                <div class="sw-bar-row">
                    <div class="sw-bar-label">${v.name}</div>
                    <div class="sw-bar-track">
                        <div class="sw-bar-fill" style="width: ${(v.count / maxCount * 100).toFixed(1)}%; background: ${colors[i % colors.length]}">
                            <span class="sw-bar-value">${v.count}次 (${v.pct}%)</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ============ 7天详情渲染 ============

function renderSevenDayDetail(days, slotPriority, platform) {
    if (!days || days.length === 0) return '<div class="sw-empty">暂无近7天数据</div>';
    
    return days.map(day => `
        <div class="sw-day-card">
            <div class="sw-day-header">
                <span class="sw-day-date">${day.date}</span>
                <span class="sw-day-weekday">${getWeekday(day.date)}</span>
            </div>
            <div class="sw-day-slots">
                ${slotPriority.map(slotDef => {
                    const slotData = day.slots[slotDef.name];
                    if (!slotData) return '';
                    return `
                        <div class="sw-slot-block tier-${slotDef.tier}">
                            <div class="sw-slot-header">${slotDef.label} <small>${slotDef.name}</small></div>
                            <div class="sw-slot-positions">
                                ${slotData.positions.map(pos => `
                                    <div class="sw-position ${pos.isNonGame ? 'non-game' : ''}">
                                        <span class="sw-pos-rank">${pos.rank}</span>
                                        <div class="sw-pos-regions">
                                            <span class="sw-region" title="美国">🇺🇸 ${pos.us}</span>
                                            <span class="sw-region" title="日本">🇯🇵 ${pos.jp}</span>
                                            <span class="sw-region" title="香港">🇭🇰 ${pos.hk}</span>
                                        </div>
                                        ${pos.vendor ? `<span class="sw-vendor-tag">${pos.vendor}</span>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
}

// ============ 最新1天详细渲染 ============

function renderLatestDayDetail(dayData, slotPriority, platform) {
    if (!dayData) return '<div class="sw-empty">暂无最新数据</div>';
    
    return `
        <div class="sw-latest-grid">
            ${slotPriority.map(slotDef => {
                const slotData = dayData.slots[slotDef.name];
                if (!slotData) return '';
                return `
                    <div class="sw-latest-slot tier-${slotDef.tier}">
                        <div class="sw-latest-slot-header">
                            <span class="sw-tier-badge tier-${slotDef.tier}">${slotDef.label}</span>
                            <span class="sw-slot-name">${slotDef.name}</span>
                        </div>
                        <table class="sw-latest-table">
                            <thead>
                                <tr>
                                    <th>排位</th>
                                    <th>🇺🇸 美国</th>
                                    <th>🇯🇵 日本</th>
                                    <th>🇭🇰 香港</th>
                                    <th>厂商</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${slotData.positions.map(pos => `
                                    <tr class="${pos.isNonGame ? 'non-game-row' : ''}">
                                        <td><strong>#${pos.rank}</strong></td>
                                        <td>${pos.us}</td>
                                        <td>${pos.jp}</td>
                                        <td>${pos.hk}</td>
                                        <td>${pos.vendor ? `<span class="sw-vendor-chip">${pos.vendor}</span>` : '<span class="sw-tag-chip">非游戏</span>'}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// ============ 工具函数 ============

function getWeekday(dateStr) {
    const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return days[new Date(dateStr).getDay()];
}
