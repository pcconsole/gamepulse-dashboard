// ============================================
// 行业热点新闻数据模块
// PC & Console 行业重点新闻聚合
// ============================================

// 信息源数据库
const newsSources = [
    { name: "SteamDB", platform: "PC", type: "数据+榜单", url: "https://steamdb.info/", category: "data" },
    { name: "Gamalytic", platform: "PC", type: "数据+榜单", url: "https://gamalytic.com/", category: "data" },
    { name: "GamesIndustry", platform: "PC/Console", type: "新闻资讯", url: "https://www.gamesindustry.biz/", category: "media" },
    { name: "NintendoNews", platform: "NS", type: "新闻资讯", url: "https://mynintendonews.com/", category: "media" },
    { name: "EuroGamer", platform: "PC/Console", type: "新闻资讯", url: "https://www.eurogamer.net/latest", category: "media" },
    { name: "VGC", platform: "PC/Console", type: "新闻资讯", url: "https://www.videogameschronicle.com/category/news/", category: "media" },
    { name: "机核", platform: "PC/Console", type: "新闻资讯", url: "https://www.gcores.com/news", category: "media" },
    { name: "3DM", platform: "PC/Console", type: "新闻资讯", url: "https://www.3dmgame.com/", category: "media" },
    { name: "Fami通", platform: "PC/Console", type: "资讯+NS榜单", url: "https://www.famitsu.com/", category: "media" },
    { name: "vgchartz", platform: "PC/Console", type: "数据+榜单", url: "https://www.vgchartz.com/", category: "data" },
    { name: "GameDiscover", platform: "PC/Console", type: "数据+榜单+新闻", url: "https://newsletter.gamediscover.co/", category: "data" },
    { name: "Steam官方热销榜", platform: "PC", type: "数据+榜单", url: "https://store.steampowered.com/charts/", category: "data" },
    { name: "游戏之家", platform: "PC/Console", type: "新闻资讯", url: "https://game.ithome.com/", category: "media" },
    { name: "IGN", platform: "PC/Console", type: "新闻资讯", url: "https://www.ign.com/", category: "media" },
    { name: "Gamingbolt", platform: "PC/Console", type: "新闻资讯+新游评测", url: "https://gamingbolt.com/", category: "media" },
    { name: "TwistedVoxel", platform: "PC/Console", type: "新闻资讯+版本更新", url: "https://twistedvoxel.com/", category: "media" },
    { name: "GameDeveloper", platform: "PC/Console", type: "新闻资讯", url: "https://www.gamedeveloper.com/", category: "media" },
    { name: "PlayStation Blog", platform: "PC/Console", type: "新闻资讯", url: "https://blog.playstation.com/", category: "official" },
    { name: "Xbox Wire", platform: "PC/Console", type: "新闻资讯", url: "https://news.xbox.com/en-us/", category: "official" },
    { name: "Xbox Developer", platform: "PC/Console", type: "新闻资讯", url: "https://developer.microsoft.com/en-us/games/", category: "official" },
    { name: "Newzoo", platform: "PC/Console", type: "行研报告", url: "https://newzoo.com/resources", category: "data" },
    { name: "Vginsight", platform: "PC/Console", type: "行研报告", url: "https://app.sensortower.com/vgi/insights/articles", category: "data" },
    { name: "NIKO", platform: "PC/Console", type: "新闻资讯", url: "https://nikopartners.com/niko-news/", category: "data" },
];

// 模拟新闻数据（实际部署时从API获取）
const newsData = [
    // 平台动态
    {
        id: 1,
        title: "Nintendo Switch 2 正式公布：8英寸屏幕、磁吸Joy-Con、向下兼容",
        summary: "任天堂正式揭晓 Switch 2 硬件详情：采用更大的8英寸LCD屏幕、NVIDIA T239定制芯片、磁吸式Joy-Con手柄、支持Switch 1游戏向下兼容。预计2025年6月发售，首发阵容包含《马里奥卡丁车世界》。",
        source: "NintendoNews",
        sourceUrl: "https://mynintendonews.com/",
        category: "platform",
        importance: "high",
        date: "2026-03-05",
        tags: ["Nintendo", "Switch 2", "硬件"],
        sentiment: "positive"
    },
    {
        id: 2,
        title: "Xbox 宣布2026年将有30+款首日入库 Game Pass 的游戏",
        summary: "Xbox 在春季发布会上确认2026年将有超过30款游戏首日登陆Game Pass，包括《极限竞速：地平线6》《战争机器：E-Day》等第一方大作，以及多款第三方独立游戏。Xbox表示将继续加大XGP生态投入。",
        source: "Xbox Wire",
        sourceUrl: "https://news.xbox.com/en-us/",
        category: "platform",
        importance: "high",
        date: "2026-03-03",
        tags: ["Xbox", "Game Pass", "XGP"],
        sentiment: "positive"
    },
    {
        id: 3,
        title: "PlayStation Stars 会员体系大幅升级，引入游戏折扣与抢先体验权限",
        summary: "索尼宣布对PlayStation Stars忠诚度计划进行重大升级，新增\"Platinum Tier\"等级，提供PS Store折扣、新游抢先体验48小时等独占权益。分析师认为此举意在对标Game Pass的内容订阅模式。",
        source: "PlayStation Blog",
        sourceUrl: "https://blog.playstation.com/",
        category: "platform",
        importance: "medium",
        date: "2026-03-01",
        tags: ["PlayStation", "PS Stars", "订阅"],
        sentiment: "positive"
    },
    {
        id: 4,
        title: "Steam 2月销售数据：独立游戏收入占比首次突破35%",
        summary: "根据SteamDB和Gamalytic统计数据，2026年2月Steam平台独立游戏收入占比达35.2%，创历史新高。分析认为这与大型3A游戏发行空档期、Steam\"下一节\"活动的推广效果有关。",
        source: "SteamDB",
        sourceUrl: "https://steamdb.info/",
        category: "market",
        importance: "medium",
        date: "2026-03-04",
        tags: ["Steam", "独立游戏", "市场数据"],
        sentiment: "positive"
    },
    {
        id: 5,
        title: "Epic Games Store 宣布2026年开放第三方支付，抽成降至12%",
        summary: "Epic Games Store 正式宣布在2026年Q2面向开发者开放第三方支付选项，同时确认平台抽成维持在12%不变。此举被视为对Steam 30%抽成模式的进一步挑战。",
        source: "GamesIndustry",
        sourceUrl: "https://www.gamesindustry.biz/",
        category: "platform",
        importance: "high",
        date: "2026-02-28",
        tags: ["Epic", "EGS", "分成"],
        sentiment: "neutral"
    },
    // 重点新品新闻
    {
        id: 6,
        title: "GTA6 最新预告片曝光：Vice City 开放世界细节展示",
        summary: "Rockstar Games 公布《GTA6》第三支预告片，展示了Vice City大量街景、水体物理、NPC行为AI等技术细节。预告片24小时播放量突破1.2亿次。游戏确定于2026年11月19日发售。",
        source: "IGN",
        sourceUrl: "https://www.ign.com/",
        category: "game",
        importance: "high",
        date: "2026-03-06",
        tags: ["GTA6", "R星", "开放世界"],
        sentiment: "positive"
    },
    {
        id: 7,
        title: "《黑神话：钟馗》项目正式确认，游戏科学启动全球预热",
        summary: "游戏科学工作室通过官方社交媒体正式确认《黑神话》系列第二款作品为《黑神话：钟馗》，以中国民间传说\"钟馗捉鬼\"为主题。团队透露已完成核心战斗系统的技术验证，预计2027年后发售。",
        source: "机核",
        sourceUrl: "https://www.gcores.com/news",
        category: "game",
        importance: "high",
        date: "2026-03-02",
        tags: ["黑神话", "游戏科学", "国产3A"],
        sentiment: "positive"
    },
    {
        id: 8,
        title: "《怪物猎人物语3》开发者访谈：融合回合制与动作的新战斗系统",
        summary: "卡普空在接受Fami通采访时详细解析了《怪物猎人物语3：命运双龙》的创新战斗机制：在保留回合制框架的基础上，引入实时QTE链，让玩家在战斗中体验到更强的动作感。",
        source: "Fami通",
        sourceUrl: "https://www.famitsu.com/",
        category: "game",
        importance: "medium",
        date: "2026-03-07",
        tags: ["怪物猎人", "卡普空", "ARPG"],
        sentiment: "positive"
    },
    {
        id: 9,
        title: "《宝可梦：风/浪》确定Switch 2独占，首批概念图公开",
        summary: "宝可梦公司在Nintendo Direct中展示了《宝可梦：风/浪》的首批概念图和实机片段。本作将采用全新3D画面风格，融合《传说：阿尔宙斯》的开放世界探索元素，确定为Switch 2独占首发。",
        source: "NintendoNews",
        sourceUrl: "https://mynintendonews.com/",
        category: "game",
        importance: "high",
        date: "2026-02-25",
        tags: ["宝可梦", "Switch 2", "任天堂"],
        sentiment: "positive"
    },
    // 硬件生态
    {
        id: 10,
        title: "PS5 Pro 增强补丁已覆盖500+游戏：4K/120fps成为新标准",
        summary: "索尼公布PS5 Pro增强游戏列表已超过500款，包括《最终幻想7 Rebirth》《漫威蜘蛛侠2》等大作。4K/60fps成为基准线，部分游戏已支持4K/120fps模式。",
        source: "EuroGamer",
        sourceUrl: "https://www.eurogamer.net/latest",
        category: "hardware",
        importance: "medium",
        date: "2026-03-05",
        tags: ["PS5 Pro", "硬件", "性能"],
        sentiment: "positive"
    },
    {
        id: 11,
        title: "Steam Deck 2 传闻：Valve 正在测试OLED+AMD Z2 Extreme芯片",
        summary: "据供应链消息，Valve正在测试搭载AMD Z2 Extreme芯片和OLED屏幕的新一代Steam Deck。新设备预计将性能翻倍的同时保持7小时以上续航，目标售价$499。",
        source: "VGC",
        sourceUrl: "https://www.videogameschronicle.com/category/news/",
        category: "hardware",
        importance: "medium",
        date: "2026-02-27",
        tags: ["Steam Deck", "Valve", "掌机"],
        sentiment: "neutral"
    },
    {
        id: 12,
        title: "NVIDIA GeForce RTX 5060 正式发布：$299 起步的 DLSS 4 新标杆",
        summary: "NVIDIA发布GeForce RTX 5060显卡，售价$299起，搭载完整DLSS 4支持包括帧生成3.0。初步基准测试显示在1080p和1440p分辨率下相比RTX 4060性能提升40-50%。",
        source: "3DM",
        sourceUrl: "https://www.3dmgame.com/",
        category: "hardware",
        importance: "medium",
        date: "2026-03-08",
        tags: ["NVIDIA", "GPU", "硬件"],
        sentiment: "positive"
    },
    // 政策/战略
    {
        id: 13,
        title: "欧盟数字市场法案新规：游戏平台必须开放跨平台存档转移",
        summary: "欧盟数字市场法案(DMA)最新修正案要求所有被认定为\"守门人\"的游戏平台（包括Steam、PlayStation、Xbox）必须在2027年前支持游戏存档和成就的跨平台转移功能。",
        source: "GamesIndustry",
        sourceUrl: "https://www.gamesindustry.biz/",
        category: "policy",
        importance: "high",
        date: "2026-03-04",
        tags: ["欧盟", "DMA", "监管"],
        sentiment: "neutral"
    },
    {
        id: 14,
        title: "微软完成动视暴雪整合：重组后Xbox Game Studios拥有33家工作室",
        summary: "微软宣布动视暴雪整合工作已全部完成。重组后的Xbox Game Studios旗下共拥有33家游戏工作室，是全球最大的第一方游戏开发阵容。Activision和Blizzard品牌将独立运营。",
        source: "Xbox Wire",
        sourceUrl: "https://news.xbox.com/en-us/",
        category: "policy",
        importance: "high",
        date: "2026-02-20",
        tags: ["微软", "动视暴雪", "并购"],
        sentiment: "neutral"
    },
    {
        id: 15,
        title: "Newzoo 报告：2026年PC & Console游戏市场规模将达$420亿",
        summary: "Newzoo发布2026年全球PC与主机游戏市场年度预测报告，预计总市场规模将达$420亿（同比+6.2%）。其中订阅制收入占比预计从2025年的18%提升至22%，主要驱动力来自Game Pass和PS Plus的扩张。",
        source: "Newzoo",
        sourceUrl: "https://newzoo.com/resources",
        category: "market",
        importance: "high",
        date: "2026-02-15",
        tags: ["Newzoo", "市场数据", "订阅"],
        sentiment: "positive"
    },
    {
        id: 16,
        title: "育碧宣布战略重组：3款游戏取消，聚焦\"更少但更好\"策略",
        summary: "育碧在最新的投资者电话会议上宣布取消3款未公布项目的开发，同时将资源集中到《刺客信条》《彩虹六号》等核心IP。公司表示将采取\"更少但更好\"的发行策略，年发行数量从15款缩减至8-10款。",
        source: "GamesIndustry",
        sourceUrl: "https://www.gamesindustry.biz/",
        category: "policy",
        importance: "medium",
        date: "2026-03-06",
        tags: ["育碧", "重组", "战略"],
        sentiment: "negative"
    },
];

// 新闻数据处理函数
function getNewsCategory(cat) {
    const labels = {
        'platform': '🎮 平台动态',
        'game': '🕹️ 重点新品',
        'hardware': '🔧 硬件生态',
        'policy': '📋 政策/战略',
        'market': '📊 市场数据'
    };
    return labels[cat] || cat;
}

function getNewsSentimentColor(sentiment) {
    switch(sentiment) {
        case 'positive': return '#22c55e';
        case 'negative': return '#ef4444';
        default: return '#f59e0b';
    }
}

function getNewsSentimentLabel(sentiment) {
    switch(sentiment) {
        case 'positive': return '利好';
        case 'negative': return '利空';
        default: return '中性';
    }
}

function getImportanceLabel(imp) {
    switch(imp) {
        case 'high': return '🔴 重要';
        case 'medium': return '🟡 关注';
        default: return '⚪ 一般';
    }
}

function isThisWeek(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return d >= weekAgo;
}
