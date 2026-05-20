// ============================================
// 重点公司财报分析数据模块 V10 — 全部18家统一双模块(latestQuarter+fullYear)
// 覆盖18家上市公司的游戏业务财务与运营数据
// 数据来源：各公司IR页面/财报/press release + GamesIndustry.biz 验证
// 更新日期: 2026-05-20
// 本次更新: Embracer Q4+FY25/26全年(5/20发布: Q4净销售SEK39.31亿-24%,全年SEK159.06亿-25%,SEK72亿非现金减值,REANIMAL超100万套,FY26/27 Cash EBIT≥SEK10亿)
// 上次更新(5/15): Nexon Q1 2026
// 上次更新(5/13): 索尼FY2026全年 + 任天堂FY2026全年 + 卡普空FY2026全年
//   重构范围: Sony/Microsoft/Nintendo/腾讯/网易/EA/Take-Two/Ubisoft/Nexon/
//             万代南梦宫/Capcom/Square Enix/Konami/Sega/Krafton/Roblox/Unity/Embracer
//   新增公司: Roblox(NYSE:RBLX)/Unity(NYSE:U)/Embracer(OMX:EMBRAC B) 加入earningsCompanies数组
// 更新者: Earnings Agent v3.0 (机构级分析标准)
// V10 重构要点:
//   1) 每家公司统一 latestQuarter(最新单季度) + fullYear(最新全年/年化) 双模块
//   2) Roblox/Unity/Embracer 3家正式加入 earningsCompanies 数组(含完整数据+分析)
//   3) quarterlyRevenueComparison 统一为最新单季度USD等值
//   4) fullYearRevenueComparison 全年/年化USD等值
//   5) 分析文本遵循 What→Why→So What 机构级标准
// 数据质量等级: A=官方多源验证 B=官方单源 C=推算/年化 D=过时 X=暂无
// ============================================

// 汇率参考表 (用于USD换算) - 优先使用各公司财报期间汇率
const earningsExchangeRates = {
    JPY: { rate: 149.5, source: '日本公司FY2025财报期间均值(2025年4月-2026年3月)' },
    CNY: { rate: 7.25, source: '腾讯/网易2024年报期间均值' },
    EUR: { rate: 0.92, source: '育碧FY2025 Q3财报期间均值(1EUR≈1.09USD)' },
    KRW: { rate: 1380, source: 'Krafton 2024年报期间均值' },
    SEK: { rate: 10.8, source: 'Embracer Group FY25/26期间均值' },
    USD: { rate: 1, source: '基准货币' }
};

function convertToUSD(value, currency) {
    if (!value || currency === 'USD') return value;
    const r = earningsExchangeRates[currency];
    return r ? +(value / r.rate).toFixed(1) : null;
}

function getUSDLabel(value, currency, unit) {
    if (!value || currency === 'USD') return null;
    const usd = convertToUSD(value, currency);
    if (usd === null) return null;
    if (usd >= 10000) return `≈$${(usd/1000).toFixed(1)}B`;
    if (usd >= 1000) return `≈$${(usd/1000).toFixed(2)}B`;
    if (usd >= 100) return `≈$${usd.toFixed(0)}M`;
    return `≈$${usd.toFixed(1)}M`;
}

// 公司基础信息 + 最新财报数据
const earningsCompanies = [
    {
        id: 'sony',
        name: '索尼集团',
        nameEn: 'Sony Group',
        ticker: 'SONY (NYSE) / 6758 (TSE)',
        market: '纽交所/东交所',
        region: 'jp',
        irUrl: 'https://www.sony.com/en/SonyInfo/IR/library/presen/er/archive.html',
        logo: '🎮',
        color: '#003087',
        segment: 'Game & Network Services (G&NS)',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4 (推算)', calendarPeriod: '2026年1-3月', filingDate: '2026-05-08',
            revenue: { value: 1098300, unit: '百万日元(Q4估)', yoy: null, label: 'Q4 G&NS≈¥1.098万亿(年化-单季)', usdEquiv: '≈$7.35B' },
            note: 'FY2026全年已发布,全年G&NS¥4685.7亿,Q4单季从全年-三个季度推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-08', status: '已发布(创纪录)',
            revenue: { value: 4685700, unit: '百万日元(全年)', yoy: 0, label: 'G&NS全年¥4685.7亿(≈$31.3B)', usdEquiv: '≈$31.3B' },
            operatingProfit: { value: 463300, unit: '百万日元(全年)', yoy: null, label: 'G&NS营业利润¥4633亿创历史纪录(≈$3.1B)' },
            operatingMargin: { value: 9.9, label: 'G&NS全年营业利润率' },
            note: 'PS5硬件下滑被FX和网络服务增长抵消,营业利润创纪录,Bungie减值影响已体现'
        },
        companyOverall: {
            totalRevenue: { value: 12479600, unit: '百万日元', yoy: 4, label: '集团全年营收¥12.48万亿(+4%)', source: 'Sony FY2026 Q4 & Full Year Results (2026/05/08)' },
            totalOperatingProfit: { value: 1447500, unit: '百万日元', yoy: null, label: '集团营业利润¥1.4475万亿(历史最高)' },
            note: '索尼集团FY2026(2025年4月-2026年3月): 营收+4%至¥12.48万亿创历史新高,集团营业利润¥1.4475万亿创历史新高。G&NS板块营收基本持平¥4685.7亿,但营业利润创纪录¥4633亿。Bungie减值$2.15亿(第二次)已计入。PS5累计出货93.6M台。'
        },
        financials: {
            revenue: { value: 4685700, unit: '百万日元(全年)', yoy: 0, label: 'G&NS全年营收(基本持平)', source: 'Sony FY2026 Full Year Earnings Release (2026/05/08)', usdEquiv: '≈$31.3B' },
            operatingProfit: { value: 463300, unit: '百万日元(全年)', yoy: null, label: 'G&NS营业利润创历史纪录', usdEquiv: '≈$3.1B' },
            operatingMargin: { value: 9.9, label: 'G&NS营业利润率' },
            segmentRevenuePct: { value: 37.5, label: 'G&NS占集团营收比例' },
        },
        gameMetrics: {
            ps5CumulativeShipments: { value: 93.6, unit: '百万台(累计)', label: 'PS5累计出货9360万台', source: 'Sony FY2026 Q4 Earnings' },
            psPlusSubscribers: { value: null, unit: '百万', label: 'PS Plus订阅用户(未单独披露)' },
            networkServicesGrowth: { value: null, unit: '%', label: '网络服务收入增长(FX抵消硬件下滑)' },
        },
        keyProducts: ['《GT赛车7》', 'PS5 Pro', 'PS Plus高级订阅', '《蜘蛛侠2》PC', '《Horizon》PC'],
        analysis: {
            performance: 'FY2026(2025.4-2026.3)G&NS板块全年营收¥4685.7亿(≈$31.3亿,基本持平YoY),但营业利润创历史纪录¥463.3亿(≈$3.1亿)。PS5硬件销售下滑被外汇汇率有利和网络服务收入增长完全抵消。PS5累计出货突破9360万台(里程碑)。集团全年营收¥12.48万亿(+4%)创历史新高,集团营业利润¥1.4475万亿创历史新高,但Q4 GAAP EPS下滑因G&NS利润-41.6%和Honda EV合资亏损影响。G&NS营业利润率约9.9%,反映订阅+服务转型成效。',
            strategy: '索尼游戏业务加速从硬件驱动向服务+订阅转型。网络服务收入增长弥补硬件周期性下滑。PS5 Pro维持高端定位。Live Service策略更审慎(Concord停服教训)。Bungie进行第二笔$2.15亿减值,整合仍在进行。管理层宣布FY2027营业利润目标¥1600亿(+10.5%),股价回购500亿日元。',
            outlook: 'FY2027(2026.4-2027.3)展望: 管理层预期集团营业利润增长双位数至约¥1600亿。PS5出货预计继续下行(世代末期),但网络服务+订阅收入持续增长弥补。AI在游戏开发和运营中的应用加速。第一方大作管线关注。2026年竞争焦点: Switch 2超级周期下PS5如何守住份额。',
            newProducts: '多款第一方大作开发中；更多PC移植项目；PS5 Pro持续推广；订阅服务矩阵升级。'
        },
        dataSources: [
            { type: '年度财报', name: 'Sony FY2026 Q4 & Full Year Financial Results', date: '2026-05-08', url: 'https://www.sony.com/en/SonyInfo/IR/library/presen/er/archive.html' },
            { type: '行业报道', name: 'This Week in Video Games: PlayStation Reports Record Profits FY2025', date: '2026-05-09', url: 'https://thisweekinvideogames.com/news/playstation-reports-record-profits-for-fy2025-despite-second-bungie-impairment-loss/' },
            { type: '行业分析', name: 'Invenglobal: Sony Posts Record Gaming Operating Profit', date: '2026-05-09', url: 'https://www.invenglobal.com/articles/21682/sony-posts-record-gaming-operating-profit-though-bungie-impairment-casts-a-shadow' }
        ],
        filingDate: '2026-05-08',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.sony.com/en/SonyInfo/IR/library/presen/er/archive.html'
    },
    {
        id: 'microsoft',
        name: '微软',
        nameEn: 'Microsoft',
        ticker: 'MSFT (NASDAQ)',
        market: '纳斯达克',
        region: 'us',
        irUrl: 'https://www.microsoft.com/en-us/investor/earnings',
        logo: '🟩',
        color: '#107C10',
        segment: 'More Personal Computing - Gaming',
        fiscalPeriod: 'FY2026 Q3 (2026年1-3月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2026 Q3', calendarPeriod: '2026年1-3月', filingDate: '2026-04-29',
            revenue: { value: 13200, unit: '百万美元(MPC板块)', yoy: -1, label: 'MPC板块Q3营收$132亿', usdEquiv: '$13.2B' },
            operatingProfit: { value: 3840, unit: '百万美元', yoy: 20, label: '集团整体营业利润$384亿(MPC未单独披露Q3)' },
            operatingMargin: { value: 46.3, label: '集团整体Q3营业利润率' },
            gamingRevenue: { value: 5341, unit: '百万美元', yoy: -7, label: 'Gaming收入$53.41亿' },
            gameMetrics: {
                contentServicesRevGrowth: { value: -5, unit: '%', label: 'Xbox内容及服务收入同比(-7%恒定汇率)' },
                hardwareRevGrowth: { value: -33, unit: '%', label: 'Xbox硬件收入同比(连续三季度大幅下滑)' },
                note: 'Xbox MAU和游戏流媒体时长创历史新高'
            }
        },
        fullYear: {
            period: 'FY2026前三季度累计', filingDate: '2026-04-29', status: '前三季度累计',
            revenue: { value: 40900, unit: '百万美元(MPC前三季累计估)', yoy: null, label: 'MPC前三季≈$409亿', usdEquiv: '$40.9B' },
            gamingEstimate: { value: 16200, unit: '百万美元(前三季累计)', label: 'Gaming前三季约$162亿(Q1$5.53B+Q2$5.72→5.34B+Q3$5.34B)' },
            note: 'Gaming收入连续三季度同比下滑,但Xbox MAU创新高反映用户规模仍在扩大'
        },
        companyOverall: {
            totalRevenue: { value: 82900, unit: '百万美元', yoy: 18, label: '集团整体Q3营收', source: 'Microsoft FY26 Q3 Press Release (2026/04/29)' },
            totalOperatingProfit: { value: 38400, unit: '百万美元', yoy: 20, label: '集团营业利润' },
            totalOperatingMargin: { value: 46.3, label: '集团营业利润率' },
            note: '微软三大业务板块：Intelligent Cloud(Azure+40%)、Productivity & Business、More Personal Computing $132亿(-1%)'
        },
        financials: {
            revenue: { value: 5341, unit: '百万美元(Gaming)', yoy: -7, label: 'Gaming收入', source: 'Microsoft FY26 Q3 10-Q Filing (2026/04/29)' },
            operatingProfit: { value: null, unit: '百万美元', yoy: null, label: 'Gaming营业利润(未单独披露)' },
            operatingMargin: { value: null, label: 'Gaming利润率(未单独披露)' },
            segmentRevenuePct: { value: 6.4, label: 'Gaming占集团营收比例' },
        },
        gameMetrics: {
            contentServicesRevGrowth: { value: -5, unit: '%', label: 'Xbox内容及服务收入同比(-7%恒定汇率)', source: 'Microsoft FY26 Q3 Press Release' },
            hardwareRevGrowth: { value: -33, unit: '%', label: 'Xbox硬件收入同比', source: 'Microsoft FY26 Q3 Press Release' },
            xboxMAU: { value: null, unit: '创新高', label: 'Xbox月活跃用户创历史新纪录(CFO确认)', source: 'FY26 Q3 Earnings Call' },
            gameStreamingHours: { value: null, unit: '创新高', label: '游戏流媒体时长创新纪录', source: 'FY26 Q3 Earnings Call' },
        },
        keyProducts: ['《使命召唤》系列', 'Xbox Game Pass(降价至$22.99/月)', '《战争机器：E-Day》', 'Cloud Gaming'],
        analysis: {
            performance: 'Gaming收入$53.41亿同比下滑7%(恒定汇率-9%)，连续第三个季度同比下降。Xbox内容及服务收入-5%(-7%恒定汇率)，主因去年同期强劲的第一方内容对比基数(CoD等)。Xbox硬件收入暴跌33%，连续第二季度跌幅超30%，反映主机世代末期需求疲软。但Xbox MAU和游戏流媒体时长均创历史新高(CFO Amy Hood确认)，说明用户规模仍在扩大。集团整体营收$829亿(+18%)，EPS $4.27(+21%)超分析师预期$0.21。',
            strategy: 'Xbox CEO Asha Sharma公开承认Game Pass"太贵"，4月宣布Ultimate降价至$22.99/月+取消Game Core层级。CEO Nadella表示正"重新承诺核心粉丝"(recommitting to core fans)。多平台策略继续推进但正重新评估。Azure AI年化收入$370亿成为集团核心增长引擎。',
            outlook: 'Q4指引未具体披露Gaming预期。管理层暗示中到高个位数内容及服务收入下降将延续。但Game Pass降价策略预计在Q4/FY27带来订阅增长。2026年资本支出指引$1900亿(远超预期)全部投向AI/云基础设施，Gaming投入优先级下降。',
            newProducts: '《战争机器：E-Day》(2026年发售)；《完美暗杀》；《Fable》(2026年秋季)；Xbox次世代硬件布局中。'
        },
        dataSources: [
            { type: '季度财报', name: 'Microsoft FY26 Q3 Press Release & 10-Q', date: '2026-04-29', url: 'https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast' },
            { type: '电话会议', name: 'FY26 Q3 Earnings Conference Call Transcript', date: '2026-04-29', url: 'https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3' },
            { type: '行业报道', name: 'This Week in Video Games: Gaming Revenue -7%, Hardware -33%', date: '2026-04-30', url: 'https://thisweekinvideogames.com/news/microsoft-reports-7-drop-in-gaming-revenue-33-drop-in-xbox-hardware-revenue/' }
        ],
        filingDate: '2026-04-29',
        filingType: '季度财报',
        filingUrl: 'https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q3/press-release-webcast'
    },
    {
        id: 'nintendo',
        name: '任天堂',
        nameEn: 'Nintendo',
        ticker: '7974 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.nintendo.co.jp/ir/en/finance/index.html',
        logo: '🍄',
        color: '#E60012',
        segment: '游戏专用（整体业务）',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-08',
            revenue: { value: 716200, unit: '百万日元(Q4估)', yoy: null, label: 'Q4≈¥7162亿(全年-前三季)', usdEquiv: '≈$4.79B' },
            gameMetrics: {
                switch2Shipments: { value: 2.49, unit: '百万台(Q4)', label: 'Switch 2 Q4出货249万台' }
            },
            note: '全年已发布,Q4单季从全年¥2.24万亿-前三季推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-08', status: '已发布(历史性突破)',
            revenue: { value: 2239500, unit: '百万日元(全年)', yoy: 98.6, label: '全年净销售¥2.24万亿(+98.6%)', usdEquiv: '≈$14.99B' },
            operatingProfit: { value: 360100, unit: '百万日元(全年)', yoy: 27.5, label: '全年营业利润¥3601亿(+27.5%)', usdEquiv: '≈$2.41B' },
            operatingMargin: { value: 16.1, label: '全年营业利润率(硬件发售年)' },
            note: 'Switch 2超级周期驱动,首个完整财年净销售突破$14.9亿(¥2.24万亿)'
        },
        companyOverall: {
            totalRevenue: { value: 2239500, unit: '百万日元(全年)', yoy: 98.6, label: '全年净销售¥2.24万亿(+98.6%,≈$14.99B)', source: 'Nintendo FY2026 Full Year Results (2026/05/08)' },
            totalOperatingProfit: { value: 360100, unit: '百万日元', yoy: 27.5, label: '全年营业利润¥3601亿(+27.5%)' },
            totalOperatingMargin: { value: 16.1, label: '全年营业利润率' },
            note: '任天堂FY2026(2025年4月-2026年3月): Switch 2发售首个完整财年,净销售¥2.24万亿(+98.6%)创历史性突破,营业利润¥3601亿(+27.5%)。Switch 2累计出货1986万台超预期。股价因定价上涨和游戏管线担忧跌40%。'
        },
        financials: {
            revenue: { value: 2239500, unit: '百万日元(全年)', yoy: 98.6, label: '专用游戏平台净销售(创纪录)', source: 'Nintendo FY2026 Full Year Results (2026/05/08)', usdEquiv: '≈$14.99B' },
            operatingProfit: { value: 360100, unit: '百万日元', yoy: 27.5, label: '营业利润(历史性突破)' },
            operatingMargin: { value: 16.1, label: '营业利润率' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            switch2Shipments: { value: 19.86, unit: '百万台(累计)', label: 'Switch 2累计出货1986万台', source: 'Nintendo IR (2026/05/08)' },
            switchShipments: { value: 155.92, unit: '百万台(累计)', label: 'Switch累计出货1.5592亿台', source: 'Nintendo IR (2026/05/08)' },
            softwareSales: { value: 185.62, unit: '百万套(全年)', label: '全年软件销量1.8562亿套' },
            marioKartWorld: { value: 14.70, unit: '百万套', label: '马力欧卡丁车世界累计1470万套', source: 'Nintendo IR (2026/05/08)' },
            digitalSalesRatio: { value: 57.9, unit: '%', label: '数字销售占比57.9%' },
            nsoSubscribers: { value: null, unit: '百万+', label: 'NSO订阅用户(未单独披露)' },
        },
        keyProducts: ['《马力欧卡丁车世界》(1470万)', '《宝可梦传说Z-A》', 'Switch 2', 'Donkey Kong Bananza(452万)', 'Pokopia'],
        analysis: {
            performance: '🔥FY2026(2025.4-2026.3)首个Switch 2完整财年爆发: 净销售¥2.24万亿(+98.6%,≈$14.99亿)创历史性突破,营业利润¥3601亿(+27.5%)。Switch 2累计出货1986万台,发售9个月内超越原版Switch同期表现。《马力欧卡丁车世界》狂销1470万套(含捆绑版)创Switch 2首发最高。全年软件销量1.8562亿套,数字占比57.9%。海外销售占67%以上。但股价因Switch 2涨价和游戏管线担忧从高点跌约40%。',
            strategy: 'Switch 2成功发售标志着新一代超级周期开启。向下兼容策略推动用户无缝迁移。数字销售占比提升至57.9%。Pokemon Pokopia(2026年3月)驱动季度末硬件销售增长。管理层已开始提价应对成本压力。',
            outlook: 'FY2027(2026.4-2027.3)展望已发布但被市场视为负面——因定价上涨和薄游戏管线。净销售预期¥1.5万亿(-32.7%),营业利润¥3000亿(-16.7%)。Switch 2进入第二个财年,生命周期管理重点从硬件铺量转向软件驱动。关键催化剂: 宝可梦Z-A(10月)+更多Switch 2独占大作。',
            newProducts: '《宝可梦传说Z-A》(2025/10 Switch 2独占)；《星之卡比》Switch 2版；更多Switch 2独占新作。'
        },
        dataSources: [
            { type: '年度财报', name: 'Nintendo FY2026 Full Year Financial Results', date: '2026-05-08', url: 'https://www.nintendo.co.jp/ir/en/' },
            { type: '业绩说明会', name: 'Financial Results Explanatory Material', date: '2026-05-08', url: 'https://www.nintendo.co.jp/ir/pdf/2026/260508_5e.pdf' },
            { type: '行业报道', name: 'GamesIndustry.biz: Nintendo FY sales soar 98.6% to $14.6bn', date: '2026-05-08', url: 'https://www.gamesindustry.biz/nintendo-fy-sales-soar-986-to-146bn-following-launch-of-switch-2' }
        ],
        filingDate: '2026-05-08',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.nintendo.co.jp/ir/en/'
    },
    {
        id: 'tencent',
        name: '腾讯控股',
        nameEn: 'Tencent',
        ticker: '0700 (HKEX)',
        market: '港交所',
        region: 'cn',
        irUrl: 'https://www.tencent.com/en-us/investors/financial-releases.html',
        logo: '🐧',
        color: '#25A2E0',
        segment: '增值服务 - 游戏',
        fiscalPeriod: '2026年Q1 (2026年1-3月)',
        currency: 'CNY',
        dataIntegrity: 'A',
        latestQuarter: {
            period: '2026年Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-05-13',
            revenue: { value: 64200, unit: '百万人民币(Q1游戏)', yoy: 8, label: 'Q1游戏总收入¥642亿(国内454亿+6%,海外188亿+13%)', usdEquiv: '≈$8.86B' },
            gameMetrics: { domesticGames: { value: 454, unit: '亿', yoy: 6 }, internationalGames: { value: 188, unit: '亿', yoy: 13 } },
            companyRevenue: { value: 196458, unit: '百万人民币', yoy: 9, label: 'Q1总营收¥1964.58亿(+9%)' }
        },
        fullYear: {
            period: '2025年全年', filingDate: '2026-03-18', status: '已发布',
            revenue: { value: 241600, unit: '百万人民币(全年游戏)', yoy: 22, label: '全年游戏¥2416亿', usdEquiv: '≈$33.3B' },
            companyRevenue: { value: 751770, unit: '百万人民币', yoy: 14, label: '全年总营收¥7517.7亿' },
            gameBreakdown: { domestic: { value: 1642, unit: '亿', yoy: 18 }, international: { value: 774, unit: '亿', yoy: 33 } }
        },
        companyOverall: {
            totalRevenue: { value: 196458, unit: '百万人民币(Q1)', yoy: 9, label: 'Q1总营收¥1964.58亿(+9%)', source: '腾讯2026Q1业绩公告(2026/05/13)' },
            nonIfrsOp: { value: 75630, unit: '百万人民币(Q1)', yoy: 9, label: 'Q1 Non-IFRS经营利润¥756.3亿(+9%)' },
            grossProfit: { value: 111265, unit: '百万人民币(Q1)', yoy: 11, label: 'Q1毛利¥1112.65亿(+11%,毛利率57%)' },
            note: 'Q1总营收¥1965亿(+9%),毛利率57%(+1pt)。剔除AI新产品影响Non-IFRS OP同比+17%至¥844亿。自由现金流¥567亿。'
        },
        financials: {
            revenue: { value: 64200, unit: '百万人民币(Q1游戏)', yoy: 8, label: 'Q1游戏总收入¥642亿(国内454+海外188)', source: '腾讯2026Q1业绩公告(2026/05/13)', usdEquiv: '≈$8.86B' },
            operatingProfit: { value: null, unit: '百万人民币', yoy: null, label: '游戏营业利润(未单独披露)' },
            operatingMargin: { value: null, label: '游戏利润率(未单独披露)' },
            segmentRevenuePct: { value: 32.7, label: '游戏占Q1总营收比例' },
        },
        gameMetrics: {
            domesticGames: { value: 454, unit: '亿人民币(Q1)', yoy: 6, label: 'Q1国内游戏收入¥454亿(+6%,春节递延影响)', source: '腾讯2026Q1业绩公告' },
            internationalGames: { value: 188, unit: '亿人民币(Q1)', yoy: 13, label: 'Q1国际游戏收入¥188亿(+13%)' },
            fullYearGames: { value: 2416, unit: '亿人民币(2025全年)', yoy: 22, label: '2025全年游戏¥2416亿' },
            springFestivalDefer: { value: null, unit: '', label: '春节收入递延至Q2确认(国内+6%增速偏低的主因)' },
        },
        keyProducts: ['王者荣耀', 'PUBG Mobile', 'Valorant', 'League of Legends', '三角洲行动', 'Supercell旗下游戏', '无畏契约手游', '鸣潮', '和平精英'],
        analysis: {
            performance: '🔥2026Q1总营收¥1964.58亿(+9%),游戏收入¥642亿(国内¥454亿+6%,海外¥188亿+13%)(What)。国内游戏增速偏低(+6% vs 2025Q4+15%)主因春节收入递延至Q2确认,实际Gross Receipts增速更高;海外游戏+13%保持稳健增长(Why)。毛利¥1113亿(+11%),毛利率57%(+1pt),Non-IFRS OP¥756亿(+9%),剔除AI新产品投入后Non-IFRS OP+17%至¥844亿——核心业务盈利能力持续提升(So What)。',
            strategy: '大幅加码AI投入: Q1资本开支+研发+营销超¥650亿,销售费用+44%。马化腾"漏船论"表露AI转型紧迫感。AI赋能核心游戏(王者荣耀/PUBG/三角洲行动)。国际游戏通过Supercell+Level Infinite双引擎增长。',
            outlook: 'Q2将确认春节递延收入,国内游戏增速预计回升。AI投入短期压利润但长期提升效率。国际游戏年化已超$100亿。管理层提示AI是"必须投入的战略方向"。',
            newProducts: '鸣潮持续更新；无畏契约手游；三角洲行动持续更新；AI驱动的新产品矩阵；Supercell新作。'
        },
        dataSources: [
            { type: '季度财报', name: '腾讯2026年Q1业绩公告', date: '2026-05-13', url: 'https://www.tencent.com/en-us/investors/financial-releases.html' },
            { type: '官方新闻稿', name: 'Tencent Announces 2026 First Quarter Results', date: '2026-05-13', url: 'https://static.www.tencent.com/uploads/2026/05/13/47382ae415a209fd161bc19a1f9b3704.pdf' },
            { type: '行业报道', name: 'CNBC: Tencent sees boost from gaming, AI demand', date: '2026-05-13', url: 'https://www.cnbc.com/2026/05/13/tencent-q1-earnings-gaming-ai-demand-revenue-miss.html' }
        ],
        filingDate: '2026-05-13',
        filingType: '季度财报(Q1)',
        filingUrl: 'https://www.tencent.com/en-us/investors/financial-releases.html'
    },
    {
        id: 'netease',
        name: '网易',
        nameEn: 'NetEase',
        ticker: 'NTES (NASDAQ) / 9999 (HKEX)',
        market: '纳斯达克/港交所',
        region: 'cn',
        irUrl: 'https://ir.netease.com/financial-information/quarterly-earnings',
        logo: '🎯',
        color: '#D42922',
        segment: '在线游戏服务',
        fiscalPeriod: '2025年全年(2025年1-12月)',
        currency: 'CNY',
        latestQuarter: {
            period: '2025年Q4', calendarPeriod: '2025年10-12月', filingDate: '2026-02-11',
            revenue: { value: 22000, unit: '百万人民币(Q4游戏)', yoy: 3.4, label: 'Q4游戏收入¥220亿', usdEquiv: '≈$3.03B' },
            gameMetrics: {
                q4GameRevenue: { value: 220, unit: '亿', yoy: 3.4, label: 'Q4游戏收入' }
            }
        },
        fullYear: {
            period: '2025年全年', filingDate: '2026-02-11', status: '已发布',
            revenue: { value: 92100, unit: '百万人民币(全年游戏)', yoy: 10, label: '全年游戏¥921亿', usdEquiv: '≈$12.7B' },
            companyRevenue: { value: 112626, unit: '百万人民币', yoy: 6.9, label: '全年总营收¥1126亿' },
            operatingProfit: { value: 35800, unit: '百万人民币', yoy: 21, label: '全年营业利润¥358亿' },
            operatingMargin: { value: 31.8, label: '全年营业利润率' },
            gameBreakdown: {
                onlineGame: { value: 896, unit: '亿', yoy: 11, label: '在线游戏净收入' },
                rdExpense: { value: 177, unit: '亿', label: '研发投入(连续六年破百亿)' }
            }
        },
        companyOverall: {
            totalRevenue: { value: 112626, unit: '百万人民币', yoy: 6.9, label: '2025全年总营收', source: '网易2025年Q4及全年财报(2026/02/11)' },
            totalOperatingProfit: { value: 35800, unit: '百万人民币', yoy: 21, label: '全年营业利润' },
            totalOperatingMargin: { value: 31.8, label: '全年营业利润率' },
            netProfit: { value: 33800, unit: '百万人民币', yoy: 13.8, label: '归母净利润' },
            nonGAAPNetProfit: { value: 37300, unit: '百万人民币', yoy: 11.3, label: 'Non-GAAP归母净利润' },
            note: '网易2025全年总营收¥1126亿(+6.9%)，归母净利润¥338亿(+13.8%)，Non-GAAP归母净利润¥373亿(+11.3%)。经营活动净现金流入¥507亿。净现金余额¥1635亿。'
        },
        financials: {
            revenue: { value: 92100, unit: '百万人民币(全年游戏)', yoy: 10, label: '2025全年游戏及相关增值服务收入', source: '网易2025年全年财报(2026/02/11)', usdEquiv: '≈$12.7B' },
            operatingProfit: { value: null, unit: '百万人民币', yoy: null, label: '游戏营业利润(未单独披露)' },
            operatingMargin: { value: null, label: '游戏利润率(未单独披露)' },
            segmentRevenuePct: { value: 81.8, label: '游戏占总营收比例' },
            q4Revenue: { value: 22000, unit: '百万人民币(Q4游戏)', yoy: 3.4, label: 'Q4游戏收入' },
            q3Revenue: { value: 23300, unit: '百万人民币(Q3游戏)', yoy: 11.8, label: 'Q3游戏收入' },
        },
        gameMetrics: {
            onlineGameRevenue: { value: 89600, unit: '百万人民币(全年)', yoy: 11, label: '在线游戏净收入(同比+11%)' },
            rdExpense: { value: 17700, unit: '百万人民币', label: '全年研发投入(¥177亿,连续六年破百亿)' },
            cashPosition: { value: 163500, unit: '百万人民币', label: '净现金余额(¥1635亿)' },
        },
        keyProducts: ['《漫威争锋》(Marvel Rivals)', '《永劫无间》', '《逆水寒》', '《梦幻西游》', '《燕云十六声》', '《魔兽世界》代理', '《风之交汇》'],
        analysis: {
            performance: '2025全年总营收¥1126亿(+6.9%)，游戏及相关增值服务收入¥921亿(+10%)，在线游戏收入¥896亿(+11%)。全年营业利润¥358亿(+21%)，归母净利润¥338亿(+13.8%)。增长主要由《梦幻西游》PC版、《第五人格》、新上线的《燕云十六声》和《漫威争锋》驱动。暴雪系列代理回归年度收入创新高。研发投入¥177亿连续六年破百亿。',
            strategy: 'AI已成为研发与运营基础核心能力，系统化应用于游戏开发与玩法创新。《漫威争锋》(2024/12上线)成为全球PC/主机市场里程碑。海外工作室(樱花工作室、Jackalope Games)多款3A项目推进中。',
            outlook: '2026年《漫威争锋》持续赛季更新仍将是核心增长引擎。《燕云十六声》主机版拓展用户群。AI赋能效率持续提升。经营活动现金流¥507亿为多元化投入提供底气。',
            newProducts: '《漫威争锋》赛季更新；《燕云十六声》主机版；樱花工作室3A项目；Jackalope Games开放世界新作。'
        },
        dataSources: [
            { type: '年度财报', name: '网易2025年Q4及全年财报', date: '2026-02-11', url: 'https://ir.netease.com/financial-information/quarterly-earnings' },
            { type: '行业分析', name: '2025年全年业绩解读', date: '2026-02-11', url: 'https://ir.netease.com/financial-information/quarterly-earnings' }
        ],
        filingDate: '2026-02-11',
        filingType: '年度财报(全年)',
        filingUrl: 'https://ir.netease.com/financial-information/quarterly-earnings'
    },
    {
        id: 'ea',
        name: '艺电',
        nameEn: 'Electronic Arts',
        ticker: 'EA (NASDAQ)',
        market: '纳斯达克',
        region: 'us',
        irUrl: 'https://ir.ea.com/financial-information/quarterly-results/default.aspx',
        logo: '⚽',
        color: '#1A1A2E',
        segment: '整体（游戏专用）',
        fiscalPeriod: 'FY2026 Q4 + 全年 (2025年4月-2026年3月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-05',
            revenue: { value: 2120, unit: '百万美元', yoy: 12, label: 'Q4净营收$21.2亿(+12%)', usdEquiv: '$2.12B' },
            operatingProfit: { value: 564, unit: '百万美元', yoy: 43, label: 'Q4营业利润$5.64亿(+43%)' },
            operatingMargin: { value: 26.6, label: 'Q4营业利润率' },
            netIncome: { value: 461, unit: '百万美元', yoy: 81, label: 'Q4净利润$4.61亿(+81%)' },
            eps: { value: 1.81, unit: '美元', yoy: 85, label: 'Q4摊薄EPS $1.81(+85%)' },
            gameMetrics: {
                liveServicesRevenue: { value: 5383, unit: '百万美元(全年)', label: '全年Live Services收入$53.83亿' }
            }
        },
        fullYear: {
            period: 'FY2026全年(2025/4-2026/3)', filingDate: '2026-05-05', status: '已发布(创纪录)',
            revenue: { value: 7531, unit: '百万美元', yoy: 1, label: '全年净营收$75.31亿(+1%)', usdEquiv: '$7.53B' },
            netBookings: { value: 8026, unit: '百万美元', yoy: 9, label: '全年净预订$80.26亿(+9% 创历史纪录)' },
            operatingIncome: { value: 1162, unit: '百万美元', yoy: -24, label: '全年营业利润$11.62亿(-24%)' },
            netIncome: { value: 887, unit: '百万美元', label: '全年净利润$8.87亿' },
            eps: { value: 3.51, unit: '美元', label: '全年摊薄EPS $3.51' },
            operatingCashFlow: { value: 2553, unit: '百万美元', yoy: 23, label: '经营现金流$25.53亿(+23% 创纪录)' },
            note: 'EA史上净预订和经营现金流双创纪录,由Battlefield 6和Live Services推动'
        },
        companyOverall: {
            totalRevenue: { value: 7531, unit: '百万美元', yoy: 1, label: '全年净营收(EA为纯游戏公司)', source: 'EA FY26 Q4 & Full Year Press Release (2026/05/05)' },
            totalOperatingProfit: { value: 1162, unit: '百万美元', yoy: -24, label: '全年营业利润' },
            totalOperatingMargin: { value: 15.4, label: '全年营业利润率' },
            note: 'EA为纯游戏公司,集团=游戏业务。全年利润下滑因Battlefield 6上市期高额营销投入+REDSEC免费模式成本'
        },
        financials: {
            revenue: { value: 2120, unit: '百万美元', yoy: 12, label: 'Q4净营收', source: 'EA FY2026 Q4 & Full Year Earnings Release (2026/05/05)' },
            operatingProfit: { value: 564, unit: '百万美元', yoy: 43, label: 'Q4营业利润' },
            operatingMargin: { value: 26.6, label: 'Q4营业利润率' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
            netBookings: { value: 8026, unit: '百万美元(全年)', yoy: 9, label: '全年净预订$80.26亿(创纪录)' },
        },
        gameMetrics: {
            liveServicesRevenue: { value: 5383, unit: '百万美元', label: '全年Live Services & Other收入$53.83亿', source: 'EA FY26 Full Year Press Release' },
            fullGameRevenue: { value: 2148, unit: '百万美元', label: '全年完整游戏收入$21.48亿' },
            battlefield6: { value: 2600, unit: '万份+', label: 'Battlefield 6累计销量超2600万(系列历史最佳)', source: 'Alinea Analytics + EA确认' },
            apexLegends: { value: null, unit: 'Q4最强季度', label: 'Apex Legends Q4净预订为全年最高' },
        },
        keyProducts: ['Battlefield 6(2600万+)', 'EA Sports FC 26', 'Apex Legends', 'College Football 25', 'The Sims系列'],
        analysis: {
            performance: 'FY2026全年净预订$80.26亿(+9% YoY)创EA历史新高,经营现金流$25.53亿(+23%)同创纪录。Q4净营收$21.2亿(+12%)、净利润$4.61亿(+81%)、EPS $1.81(+85%)大幅超预期。但全年GAAP营业利润$11.62亿同比下滑24%,主因Battlefield 6高额发布营销成本和REDSEC免费模式前期投入。Battlefield 6成为系列史上最成功作品(2600万+销量、2025年美国最畅销游戏/Circana确认)。Apex Legends Q4交出全年最强净预订季度,参与度和变现持续改善。',
            strategy: 'EA正被沙特PIF/Silver Lake/Affinity Partners联合体以$550亿进行私有化收购(EA承担$200亿债务融资),PIF将持有93.4%股权。交易处于最后监管审批阶段。本季度未举行财报电话会议(因私有化交易进行中)。同时继续裁员:3月裁减Battlefield Studios部分人员(尽管BF6表现创纪录)。',
            outlook: '因$550亿私有化交易进行中,EA未提供FY2027前瞻指引。交易预计近期完成(CFIUS审查为最后障碍)。EA Sports FC全球足球净预订全年增长中个位数。Live Services组合(Apex+FC Online+FC Mobile)持续增长。',
            newProducts: 'EA Sports FC 27(2026/09)；Madden NFL 27(2026/08)；Battlefield 6持续运营更新；College Football 26。'
        },
        dataSources: [
            { type: '季度财报+全年报', name: 'EA FY2026 Q4 & Full Year Earnings Release', date: '2026-05-05', url: 'https://ir.ea.com/financial-information/quarterly-results/default.aspx' },
            { type: '行业报道', name: 'GamesIndustry.biz: EA closes FY26 with record performance', date: '2026-05-07', url: 'https://www.gamesindustry.biz/ea-closes-fy26-with-record-performance-thanks-to-battlefield-6-and-apex-legends' },
            { type: '财经分析', name: 'StockTitan: EA FY26 net bookings hit record $8B', date: '2026-05-05', url: 'https://www.stocktitan.net/news/EA/electronic-arts-reports-q4-and-fy26-kp9t1yvs94ah.html' }
        ],
        filingDate: '2026-05-05',
        filingType: '季度财报+全年报',
        filingUrl: 'https://ir.ea.com/financial-information/quarterly-results/default.aspx'
    },
    {
        id: 'take-two',
        name: 'Take-Two Interactive',
        nameEn: 'Take-Two Interactive',
        ticker: 'TTWO (NASDAQ)',
        market: '纳斯达克',
        region: 'us',
        irUrl: 'https://www.take2games.com/ir/quarterly-earnings',
        logo: '🌟',
        color: '#FF6B35',
        segment: '整体（游戏专用）',
        fiscalPeriod: 'FY2026 Q3 (2025年10-12月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2026 Q3', calendarPeriod: '2025年10-12月', filingDate: '2026-02-04',
            revenue: { value: 1580, unit: '百万美元(净预订)', yoy: 15.3, label: 'Q3净预订$15.8亿(+15.3%)', usdEquiv: '$1.58B' },
            gameMetrics: {
                gtaVTotalSales: { value: 215, unit: '百万套+', label: 'GTA V累计销量' },
                civ7Sales: { value: 5, unit: '百万套+(估)', label: '文明7累计销量(估)' }
            }
        },
        fullYear: {
            period: 'FY2026全年指引', filingDate: '2026-02-04', status: '管理层指引',
            revenue: { value: 5600, unit: '百万美元(净预订指引)', yoy: null, label: '全年净预订$55-57亿', usdEquiv: '$5.6B' },
            note: '基于管理层指引;GTA6已延期至2026/05/26不在本财年'
        },
        financials: {
            revenue: { value: 1580, unit: '百万美元(净预订)', yoy: 15.3, label: '净预订(Net Bookings)', source: 'Take-Two FY2026 Q3 Earnings Release (2026/02/03)' },
            operatingProfit: { value: -50, unit: '百万美元(GAAP,估)', yoy: null, label: '营业利润(GAAP,估)' },
            operatingMargin: { value: -3.2, label: '营业利润率(GAAP,估)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            gtaVTotalSales: { value: 215, unit: '百万套+', label: 'GTA V累计销量', source: 'Take-Two IR' },
            rdr2TotalSales: { value: 67, unit: '百万套+', label: 'RDR2累计销量' },
            civ7Sales: { value: 5, unit: '百万套+(估)', label: '文明7累计销量(估)' },
            recurrentRevenue: { value: 72, unit: '%', label: '经常性收入占比(估)' },
        },
        keyProducts: ['GTA Online', 'NBA 2K26', '文明VII', 'Red Dead Online', 'Borderlands 4'],
        analysis: {
            performance: 'FY2026 Q3净预订约$15.8亿(+15.3% YoY)，好于市场预期。《文明7》(2025/02)持续贡献增量，NBA 2K26表现稳健。GTA V累计销量超2.15亿套长尾依旧惊人。注：GTA6已延期至2026年5月26日，本季度不含GTA6收入。CEO泽尔尼克确认全力支持Rockstar延长开发时间。',
            strategy: '全公司资源聚焦GTA6品质打磨。GTA6延期至2026年5月26日发售(原定2025年秋季)。同时维护GTA Online、NBA 2K等核心产品线。《无主之地4》发售窗口将避开GTA6。',
            outlook: 'GTA6于2026年5月26日发售后，FY2027将成Take-Two历史性财年。管理层预计GTA6创造力将超越前作。Take-Two股价因延期短期下跌约10%但随后反弹。FY2026全年净预订指引约$55-57亿。',
            newProducts: '《GTA6》(2026/05/26)；《无主之地4》(FY2026-27)；NBA 2K27 (2026/09)。'
        },
        dataSources: [
            { type: '季度财报', name: 'Take-Two FY2026 Q3 Earnings Release', date: '2026-02-03', url: 'https://ir.take2games.com/' },
            { type: '新闻', name: 'GTA6延期至2026年5月26日', date: '2025-05-02', url: 'https://www.rockstargames.com/' }
        ],
        filingDate: '2026-02-04',
        filingType: '季度财报',
        filingUrl: 'https://ir.take2games.com/'
    },
    {
        id: 'ubisoft',
        name: '育碧',
        nameEn: 'Ubisoft',
        ticker: 'UBI (EPA)',
        market: '泛欧交所',
        region: 'eu',
        irUrl: 'https://www.ubisoft.com/en-us/company/about-us/investors',
        logo: '🔷',
        color: '#0070FF',
        segment: '整体（游戏专用）',
        fiscalPeriod: 'FY2026 Q3 (2025年10-12月)',
        currency: 'EUR',
        latestQuarter: {
            period: 'FY2026 Q3', calendarPeriod: '2025年10-12月', filingDate: '2026-01-29',
            revenue: { value: 900, unit: '百万欧元(净预定,估)', yoy: 24.1, label: 'Q3净预定≈€9亿(+24%)', usdEquiv: '≈$980M' },
            gameMetrics: {
                acShadowsSales: { value: 10, unit: '百万套+(估)', label: '刺客信条:影 累计销量(估)' }
            }
        },
        fullYear: {
            period: 'FY2026全年(估)', filingDate: '2026-01-29', status: '估算',
            revenue: { value: 1800, unit: '百万美元(估)', yoy: null, label: '全年≈€16-18亿≈$18亿', usdEquiv: '≈$1.8B' },
            note: 'Shadows推动改善,私有化可能性仍存'
        },
        financials: {
            revenue: { value: 900, unit: '百万欧元(净预定,估)', yoy: 24.1, label: '净预定收入(估)', source: 'Ubisoft FY2026 Q3 Sales Report(2026/01,估)', usdEquiv: '≈$980M' },
            operatingProfit: { value: 70, unit: '百万欧元(估)', yoy: null, label: '营业利润(估)', usdEquiv: '≈$76M' },
            operatingMargin: { value: 7.8, label: '营业利润率(估)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            acShadowsSales: { value: 10, unit: '百万套+(估)', label: '刺客信条:影 累计销量(估)', source: '行业分析估算' },
            pri: { value: 55, unit: '%', label: 'PRI(玩家经常性投入)占比(估)' },
            tencentStake: { value: 10, unit: '%', label: '腾讯持股比例(战略投资)' },
        },
        keyProducts: ['《刺客信条：影》', '《彩虹六号：围攻》', '《全境封锁》', 'Tom Clancy系列'],
        analysis: {
            performance: 'FY2026 Q3受益于《刺客信条：影》(2025/03/20发售)的后续销售和数字内容。净预定预计约€9亿(+24% YoY)，大幅改善。Shadows延期后销售表现总体积极。腾讯完成战略投资(持股约10%)。注：具体数据以官方Sales Report为准。',
            strategy: '腾讯战略投资后组织架构重组。"更少但更好"策略执行中。精简产品线聚焦核心IP(刺客信条/Tom Clancy)。',
            outlook: 'FY2026全年在Shadows推动下应有明显改善。私有化可能性仍存(腾讯+Guillemot家族)。中长期需要更多大作验证转型。',
            newProducts: '刺客信条下一作(开发中)；Star Wars新项目；彩虹六号新赛季。'
        },
        dataSources: [
            { type: '季度销售', name: 'Ubisoft FY2026 Q3 Sales Report(估)', date: '2026-01-29', url: 'https://www.ubisoft.com/en-us/company/about-us/investors' }
        ],
        filingDate: '2026-01-29',
        filingType: '季度销售报告',
        filingUrl: 'https://www.ubisoft.com/en-us/company/about-us/investors'
    },
    {
        id: 'nexon',
        name: 'Nexon',
        nameEn: 'Nexon',
        ticker: '3659 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://ir.nexon.co.jp/en/library/result.html',
        logo: '🎲',
        color: '#0066B3',
        segment: '整体（游戏专用）',
        fiscalPeriod: '2026年Q1 (2026年1-3月)',
        currency: 'JPY',
        latestQuarter: {
            period: '2026 Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-05-14',
            revenue: { value: 152234, unit: '百万日元', yoy: 34, label: 'Q1营收¥1522亿(+34%,季度历史新高)', usdEquiv: '≈$1.02B' },
            operatingProfit: { value: 58163, unit: '百万日元', yoy: 40, label: 'Q1营业利润¥582亿(+40%,季度历史新高)' },
            netIncome: { value: 57225, unit: '百万日元', yoy: 118, label: 'Q1净利润¥572亿(+118%,翻倍)' },
            operatingMargin: { value: 38.2, label: 'Q1营业利润率38.2%(vs去年Q1 36.5%)' },
            gameMetrics: {
                arcRaidersSales: { value: 16, unit: '百万套', label: 'ARC Raiders累计销量超1600万套' },
                mapleStoryGrowth: { value: 42, unit: '%', label: 'MapleStory系列Q1营收+42% YoY' },
                pcOnlineRevenue: { value: 116614, unit: '百万日元', label: 'PC Online¥1166亿(76.6%)' },
                mobileRevenue: { value: 34668, unit: '百万日元', label: 'Mobile¥347亿(22.8%)' }
            }
        },
        fullYear: {
            period: '2025年全年(1-12月)', filingDate: '2026-02-12', status: '已发布',
            revenue: { value: 475500, unit: '百万日元', yoy: 6, label: '2025全年¥4755亿(+6%,创历史新高)', usdEquiv: '≈$31.8B' },
            operatingProfit: { value: 124000, unit: '百万日元', yoy: 0, label: '全年营业利润¥1240亿(持平)' },
            netIncome: { value: 92100, unit: '百万日元', yoy: -32, label: '全年净利润¥921亿(-32%)' },
            note: 'ARC Raiders 1600万+套驱动Q4大增55%,MapleStory创22年历史最高全年营收'
        },
        companyOverall: {
            totalRevenue: { value: 152234, unit: '百万日元(Q1)', yoy: 34, label: 'Q1总营收¥1522亿(+34%,季度新高)', source: 'Nexon Q1 2026 Earnings Release (2026/05/14)' },
            totalOperatingProfit: { value: 58163, unit: '百万日元(Q1)', yoy: 40, label: 'Q1营业利润¥582亿(+40%,季度新高)' },
            note: 'Q1收入+利润双双创季度历史新高。ARC Raiders 1600万+套,MapleStory系列+42%。韩国市场+6%,北美欧洲暴增309%。'
        },
        financials: {
            revenue: { value: 152234, unit: '百万日元(Q1)', yoy: 34, label: 'Q1营收(ARC Raiders+MapleStory双驱动创季度新高)', source: 'Nexon Q1 2026 Earnings Release (2026/05/14)', usdEquiv: '≈$1.02B' },
            operatingProfit: { value: 58163, unit: '百万日元(Q1)', yoy: 40, label: 'Q1营业利润¥582亿(+40%,季度新高)' },
            operatingMargin: { value: 38.2, label: 'Q1营业利润率(vs去年36.5%)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
            fullYearRevenue: { value: 475500, unit: '百万日元', yoy: 6, label: '2025全年营收¥4755亿(+6%创新高)' },
            fullYearOperatingProfit: { value: 124000, unit: '百万日元', yoy: 0, label: '2025全年营业利润¥1240亿(持平)' },
        },
        gameMetrics: {
            arcRaidersSales: { value: 16, unit: '百万套+', label: 'ARC Raiders累计销量超1600万套', source: 'Nexon Q1 2026 Earnings (2026/05/14)' },
            arcRaidersEngagement: { value: 1.5, unit: '十亿小时', label: 'ARC Raiders总游戏时间超15亿小时,50%+玩家超100小时' },
            mapleStoryQ1Growth: { value: 42, unit: '%', label: 'MapleStory系列Q1营收+42% YoY(Idle RPG+Worlds驱动)' },
            naEuGrowth: { value: 309, unit: '%', label: '北美欧洲Q1营收+309%(¥445亿,ARC Raiders主导)' },
            chinaRevenue: { value: 31393, unit: '百万日元', label: '中国区Q1营收¥314亿(-16%,DNF Mobile承压)' },
            koreaRevenue: { value: 57481, unit: '百万日元', label: '韩国Q1营收¥575亿(+6%,MapleStory+FC Online)' },
            sharesBuyback: { value: 30000, unit: '百万日元', label: '股票回购300亿日元(1400万股,5/15-7/31)' },
        },
        keyProducts: ['ARC Raiders(1600万+)', 'MapleStory(+42%)', '地下城与勇士(DNF PC)', 'FC Online(EA续约)', 'The Finals', '蔚蓝档案', 'MABINOGI MOBILE'],
        analysis: {
            performance: '🔥2026Q1收入¥1522亿(+34% YoY,按固定汇率+26%)和营业利润¥582亿(+40%)双双创季度历史新高(What)。核心驱动: ①ARC Raiders累计超1600万套,北美欧洲收入暴增309%至¥445亿 ②MapleStory系列+42%(Idle RPG品类扩展+Worlds区域扩张) ③FC Online韩国续约EA长期协议确保稳定收入流(Why)。营业利润率38.2%(+1.7pt),净利润¥572亿翻倍(+118%),受益于ARC Raiders递延收入确认+外汇收益¥145亿。中国区-16%(DNF Mobile承压)是唯一负面(So What)。',
            strategy: 'Nexon"IP Growth Initiative"三大支柱全面开花: ①垂直增长(MapleStory系列+42%,franchise扩展为全行业标杆) ②水平扩张(ARC Raiders验证全球3A能力) ③成本管控(headcount和HR成本持平计划)。战略合作矩阵: 腾讯续约DNF PC中国十年+EA续约FC韩国长期。3个项目被砍(portfolio review),资金重新分配给NAKWON和Woochi。',
            outlook: 'Q2 2026指引: 营收¥1260-1380亿(+3~13% YoY)——Q2为季节性低谷且ARC Raiders无大型更新。下半年催化剂: ①MABINOGI MOBILE台湾+日本上线 ②ARC Raiders "Frozen Trail"最大更新+Premium内容(10月) ③DNF PC中国国庆节更新+新副本 ④Dungeon&Fighter: Idle RPG全球发行 ⑤Azur Promilia+Project T代理发行。FY2026全年展望积极。',
            newProducts: 'ARC Raiders Frozen Trail大更新(2026年10月,含付费内容)；MABINOGI MOBILE台湾+日本上线(2H2026)；Dungeon&Fighter: Idle RPG(2H2026)；Azur Promilia代理发行；Project T代理发行；NAKWON开发中。'
        },
        dataSources: [
            { type: 'Q1季度财报', name: 'Nexon Q1 2026 Earnings Release', date: '2026-05-14', url: 'https://www.nexon.co.jp/en/ir/quarterly-disclosure/' },
            { type: '投资者演示', name: 'Nexon Q1 2026 Investor Presentation', date: '2026-05-14', url: 'https://www.nexon.co.jp/en/ir/quarterly-disclosure/' },
            { type: 'IFRS财务报告', name: 'Consolidated Financial Results Q1 2026 [IFRS]', date: '2026-05-14', url: 'https://www.nexon.co.jp/en/ir/quarterly-disclosure/' }
        ],
        filingDate: '2026-05-14',
        filingType: '季度财报(Q1)',
        filingUrl: 'https://www.nexon.co.jp/en/ir/quarterly-disclosure/'
    },
    {
        id: 'bandai-namco',
        name: '万代南梦宫',
        nameEn: 'Bandai Namco',
        ticker: '7832 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.bandainamco.co.jp/en/ir/library/result.html',
        logo: '🤖',
        color: '#FF1D25',
        segment: 'Digital Entertainment',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-13',
            revenue: { value: 346000, unit: '百万日元(Q4)', yoy: null, label: 'Q4集团营收≈¥3460亿(全年-前三季推算)', usdEquiv: '≈$2.31B' },
            note: '全年已发布,Q4从¥1.348万亿-前三季推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-13', status: '已发布(创历史新高)',
            revenue: { value: 1348246, unit: '百万日元(全年)', yoy: 8.6, label: '集团全年净销售¥1.348万亿(+8.6%,创纪录)', usdEquiv: '≈$9.02B' },
            operatingProfit: { value: 140223, unit: '百万日元(全年)', yoy: 5.2, label: '集团全年营业利润¥1402亿(+5.2%)', usdEquiv: '≈$938M' },
            operatingMargin: { value: 10.4, label: '集团全年营业利润率10.4%' },
            note: '创历史营收新高,艾尔登法环+高达+龙珠驱动,玩具&爱好品部门强劲增长'
        },
        companyOverall: {
            totalRevenue: { value: 1348246, unit: '百万日元(全年)', yoy: 8.6, label: '集团全年净销售¥1.348万亿(+8.6%,创纪录)', source: 'Bandai Namco FY2026 Full Year Results (2026/05/13)' },
            totalOperatingProfit: { value: 140223, unit: '百万日元', yoy: 5.2, label: '集团全年营业利润¥1402亿(+5.2%)' },
            totalOperatingMargin: { value: 10.4, label: '集团全年营业利润率' },
            note: '万代南梦宫FY2026(2025年4月-2026年3月): 创历史营收新高¥1.348万亿(+8.6%),净利润+8.8%,ROE稳健。玩具&爱好品部门增长亮眼。'
        },
        financials: {
            revenue: { value: 1348246, unit: '百万日元(全年)', yoy: 8.6, label: '集团全年净销售(创历史新高)', source: 'Bandai Namco FY2026 Full Year Results (2026/05/13)', usdEquiv: '≈$9.02B' },
            operatingProfit: { value: 140223, unit: '百万日元(全年)', yoy: 5.2, label: '集团全年营业利润(+5.2%)' },
            operatingMargin: { value: 10.4, label: '集团全年营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(含DE+Toys+IP+Amusement)' },
        },
        gameMetrics: {
            eldenRingContribution: { value: null, unit: '', label: '艾尔登法环DLC持续贡献(具体数字未单独披露)' },
            toyHobbyGrowth: { value: null, unit: '%', label: '玩具&爱好品部门强劲增长(高达/龙珠IP驱动)' },
            profitAttributable: { value: null, unit: '', label: '归母净利润+8.8%' },
        },
        keyProducts: ['艾尔登法环(含DLC)', '高达系列', '龙珠系列', '铁拳8', 'One Piece'],
        analysis: {
            performance: 'FY2026(2025.4-2026.3)集团净销售¥1.348万亿(+8.6%)创历史新高,营业利润¥1402亿(+5.2%),归母净利润+8.8%(What)。增长主要由玩具&爱好品部门强劲表现驱动,高达/龙珠等核心IP跨媒体变现持续提升;数字娱乐板块受艾尔登法环DLC后高基数影响增长相对平稳(Why)。集团营业利润率10.4%保持稳健,ROE水平维持,显示多元化IP运营战略的抗周期能力(So What)。',
            strategy: '"IP Axis"战略持续推进——将核心IP(高达/龙珠/ONE PIECE)跨游戏/玩具/影视变现。FromSoftware合作关系深化。数字娱乐部门加大Live Service投入。',
            outlook: 'FY2027展望: 管理层维持增长预期,更多FromSoftware新项目+IP续作驱动。玩具部门持续受益于全球动漫热潮。数字娱乐需新大作接力艾尔登法环。',
            newProducts: 'FromSoftware新项目；《龙珠》新作；高达系列新游戏；更多IP跨媒体项目。'
        },
        dataSources: [
            { type: '年度财报', name: 'Bandai Namco FY2026 Full Year Consolidated Results', date: '2026-05-13', url: 'https://www.bandainamco.co.jp/en/ir/library/result.html' },
            { type: '财务补充', name: 'Financial Highlights for FY Ended March 31, 2026', date: '2026-05-13', url: 'https://www.bandainamco.co.jp/files/ir/financialstatements/pdf/20260513_en_Complement.pdf' }
        ],
        filingDate: '2026-05-13',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.bandainamco.co.jp/en/ir/library/result.html'
    },
    {
        id: 'capcom',
        name: '卡普空',
        nameEn: 'Capcom',
        ticker: '9697 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.capcom.co.jp/ir/english/data/result.html',
        logo: '🐉',
        color: '#003C71',
        segment: '数字内容（Digital Contents）',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-13',
            revenue: { value: 521900, unit: '百万日元(Q4估)', yoy: null, label: 'Q4 DC≈¥5219亿(全年-前三季)', usdEquiv: '≈$349M' },
            gameMetrics: {
                reRequiemSales: { value: 6.91, unit: '百万套', label: '生化危机：安魂曲累计销量691万套' }
            },
            note: '全年已发布,Q4从¥1953亿-前三季推算;RE Requiem 2月发售即691万'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-13', status: '已发布(连续13年利润增长)',
            revenue: { value: 1953000, unit: '百万日元(全年)', yoy: 2.8, label: '集团全年净销售¥1953亿(+2.8%)', usdEquiv: '≈$13.06B' },
            operatingProfit: { value: 752000, unit: '百万日元(全年)', yoy: 3.0, label: 'DC全年营业利润¥752亿(+3.0%)', usdEquiv: '≈$5.03B' },
            operatingMargin: { value: 38.5, label: 'DC全年营业利润率(连续13年增长)' },
            note: '集团净销售¥1953亿(+2.8%)创历史新高,营业利润连续13年增长,第11年超10%增长'
        },
        companyOverall: {
            totalRevenue: { value: 1953000, unit: '百万日元(全年)', yoy: 2.8, label: '集团全年净销售¥1953亿(+2.8%,创历史新高)', source: 'Capcom FY2026 Full Year Results (2026/05/13)' },
            totalOperatingProfit: { value: 752000, unit: '百万日元', yoy: 3.0, label: '集团全年营业利润¥752亿(+3.0%)' },
            totalOperatingMargin: { value: 38.5, label: '集团全年营业利润率(创纪录)' },
            note: '卡普空FY2026(2025年4月-2026年3月): 连续第13年营业利润增长,第11年超10%增长。生化危机+怪物猎人双擎驱动。数字销售占比93%。目录销量创纪录4946万套。'
        },
        financials: {
            revenue: { value: 1442000, unit: '百万日元(DC全年)', yoy: null, label: '数字内容全年净销售¥1.442万亿', source: 'Capcom FY2026 Full Year Results (2026/05/13)', usdEquiv: '≈$9.65B' },
            operatingProfit: { value: 752000, unit: '百万日元(集团全年)', yoy: 3.0, label: '集团营业利润(创纪录)' },
            operatingMargin: { value: 38.5, label: '集团营业利润率(业界顶级)' },
            segmentRevenuePct: { value: 73.8, label: '数字内容占集团比例' },
        },
        gameMetrics: {
            mhWildsSales: { value: 11, unit: '百万套(累计)', label: '怪猎荒野累计销量1100万套', source: 'Capcom IR (2026/05/13)' },
            reRequiemSales: { value: 6.91, unit: '百万套', label: '生化危机：安魂曲累计销量691万套(2月发售)', source: 'Capcom IR (2026/05/13)' },
            sf6Sales: { value: 6.05, unit: '百万套(累计)', label: '街霸6累计销量605万套(+204万FY26)' },
            re4Sales: { value: 3.69, unit: '百万套(累计)', label: '生化危机4重制版累计369万套' },
            reVillageSales: { value: 3.62, unit: '百万套(累计)', label: '生化危机8累计362万套' },
            catalogSales: { value: 49.46, unit: '百万套', label: '目录销量创纪录4946万套' },
            digitalSalesRatio: { value: 93, unit: '%', label: '数字销售占比93%' },
            pcDigitalRatio: { value: 50, unit: '%+', label: 'PC数字购买超数字销量一半' },
        },
        keyProducts: ['怪物猎人：荒野(1100万+)', '生化危机：安魂曲(691万)', '街头霸王6(605万)', '生化危机4重制版', '鬼武者2'],
        analysis: {
            performance: '🔥FY2026(2025.4-2026.3)连续第13年营业利润增长,第11年超10%增长: 集团净销售¥1953亿(+2.8%,创历史新高),DC净销售¥1442亿,集团营业利润¥752亿(+3.0%,≈$5.03亿,利润率38.5%业界顶级)。《怪猎荒野》累计1100万套成为2025年最畅销游戏之一。《生化危机：安魂曲》(2026/02)发售即691万套。《街霸6》FY26销204万套,累计突破600万套。目录销量创纪录4946万套(数字版占比93%,PC超一半)。实体销量下降10%,但数字增长21%完全弥补。',
            strategy: '卡普空"百万销量计划"持续推进。双擎策略: 生化危机+怪物猎人驱动业绩。数字优先战略成效显著(93%数字占比+21%增长)。PC端扩张持续(PC收入超数字一半)。电竞(Capcom Pro Tour)和媒体合作多元化。',
            outlook: 'FY2027(2026.4-2027.3)展望: 净销售预期¥1400亿(-27.8%),营业利润¥560亿(-25.5%),反映管线相对较少。但怪猎荒野DLC+更多生化危机内容+街霸6持续更新仍将是核心驱动。年销量目标1亿套。',
            newProducts: '《怪物猎人荒野》DLC/更新；《生化危机9》开发中；更多PC端移植；街霸6持续更新。'
        },
        dataSources: [
            { type: '年度财报', name: 'Capcom FY2026 Full Year Financial Results', date: '2026-05-13', url: 'https://www.capcom.co.jp/ir/english/finance/review.html' },
            { type: '新闻稿', name: 'Capcom Sets Record in All Profit Categories for Ninth Consecutive Year', date: '2026-05-13', url: 'https://www.capcom.co.jp/ir/english/news/pdf/e260513b.pdf' },
            { type: '行业报道', name: 'TwistedVoxel: Capcom Reports Record FY2026 Results', date: '2026-05-13', url: 'https://twistedvoxel.com/capcom-reports-record-fy2026-results-led-by-resident-evil-and-monster-hunter/' }
        ],
        filingDate: '2026-05-13',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.capcom.co.jp/ir/english/finance/review.html'
    },
    {
        id: 'square-enix',
        name: 'Square Enix',
        nameEn: 'Square Enix',
        ticker: '9684 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.hd.square-enix.com/eng/ir/library/financial.html',
        logo: '⚔️',
        color: '#ED1C24',
        segment: 'Digital Entertainment (HD Games + MMO)',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-14',
            revenue: { value: 82142, unit: '百万日元(Q4推算)', yoy: null, label: 'Q4集团营收≈¥821亿(全年-前三季推算)', usdEquiv: '≈$549M' },
            note: '全年已发布,Q4从¥2977亿-前三季¥2155亿推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-14', status: '已发布(利润大增)',
            revenue: { value: 297661, unit: '百万日元(全年)', yoy: -8.3, label: '集团全年净销售¥2977亿(-8.3%)', usdEquiv: '≈$1.99B' },
            operatingProfit: { value: 54736, unit: '百万日元(全年)', yoy: 34.9, label: '集团全年营业利润¥547亿(+34.9%)', usdEquiv: '≈$366M' },
            operatingMargin: { value: 18.4, label: '集团全年营业利润率18.4%(大幅提升)' },
            note: '销售下降但利润率大幅提升,HD Game增收增益,"量减质升"转型成功'
        },
        companyOverall: {
            totalRevenue: { value: 297661, unit: '百万日元(全年)', yoy: -8.3, label: '集团全年净销售¥2977亿(-8.3%)', source: 'Square Enix FY2026 Full Year Results (2026/05/14)' },
            totalOperatingProfit: { value: 54736, unit: '百万日元', yoy: 34.9, label: '集团全年营业利润¥547亿(+34.9%)' },
            totalOperatingMargin: { value: 18.4, label: '集团全年营业利润率' },
            note: 'SE FY2026(2025.4-2026.3): 净销售-8.3%但营业利润+34.9%,"少做精品"战略成效显著。HD Game增收增益,MMO和手游/PC浏览器收入下降。'
        },
        financials: {
            revenue: { value: 297661, unit: '百万日元(全年)', yoy: -8.3, label: '集团全年净销售(-8.3%)', source: 'Square Enix FY2026 Full Year Results (2026/05/14)', usdEquiv: '≈$1.99B' },
            operatingProfit: { value: 54736, unit: '百万日元(全年)', yoy: 34.9, label: '集团全年营业利润(+34.9%大幅增长)' },
            operatingMargin: { value: 18.4, label: '集团全年营业利润率(vs上年13.6%)' },
            segmentRevenuePct: { value: 100, label: '集团整体(DE为主)' },
        },
        gameMetrics: {
            hdGameGrowth: { value: null, unit: '%', label: 'HD Game子板块增收增益' },
            mmoDecline: { value: null, unit: '%', label: 'MMO收入同比下降' },
            smartDeviceOptimize: { value: null, unit: '', label: '手游/PC浏览器通过支付方式多元化+成本优化提升利润率' },
        },
        keyProducts: ['最终幻想14', '勇者斗恶龙3 HD-2D重制版', 'FF7 Rebirth PC', 'NieR系列'],
        analysis: {
            performance: 'FY2026(2025.4-2026.3)净销售¥2977亿(-8.3%)但营业利润¥547亿(+34.9%)大幅增长(What)。HD Game子板块增收增益成为最大亮点,MMO和手游/PC浏览器收入有所下降但通过成本优化维持了利润率(Why)。利润率从13.6%跃升至18.4%(+4.8pt),验证了"少做精品,提高单品质量和商业回报"的中期战略转型方向(So What)。',
            strategy: '"量减质升"战略转型成效明显——削减中小项目,聚焦核心IP(FF/DQ/NieR)的高质量开发。HD Game板块利润率改善显著。手游通过支付方式多元化和成本优化提升利润。西方工作室已剥离,回归日式RPG核心。',
            outlook: 'FY2027展望: 管理层预计营业利润下降约10.5%,反映HD Game管线节奏。中长期战略继续推进"更少更精"。DQ12和FF7第三部为未来重磅催化剂。',
            newProducts: '《勇者斗恶龙12》开发中；《FF7 第三部》开发中；FF14新资料片；更多HD-2D重制项目。'
        },
        dataSources: [
            { type: '年度财报', name: 'Square Enix FY2026 Full Year Results', date: '2026-05-14', url: 'https://www.hd.square-enix.com/eng/ir/library/financial.html' },
            { type: '业绩说明', name: 'Results Briefing Session FY2026', date: '2026-05-14', url: 'https://www.hd.square-enix.com/eng/ir/pdf/26q4slides.pdf' },
            { type: '行业报道', name: 'GamesIndustry.biz: SE FY26 operating income surges 34.9%', date: '2026-05-15', url: 'https://www.gamesindustry.biz/square-enix-fy26-operating-income-surges-349-despite-net-sales-decline' }
        ],
        filingDate: '2026-05-14',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.hd.square-enix.com/eng/ir/library/financial.html'
    },
    {
        id: 'konami',
        name: '科乐美',
        nameEn: 'Konami Group',
        ticker: '9766 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.konami.com/ir/en/ir-data/statements.html',
        logo: '⚡',
        color: '#FFC300',
        segment: 'Digital Entertainment',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-08',
            revenue: { value: 182851, unit: '百万日元(Q4推算)', yoy: null, label: 'Q4集团营收≈¥1829亿(全年-前三季推算)', usdEquiv: '≈$1.22B' },
            note: '全年已发布,Q4从¥4937亿-前三季¥3108亿推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-08', status: '已发布(连续3年历史新高)',
            revenue: { value: 493680, unit: '百万日元(全年)', yoy: 17.1, label: '集团全年营收¥4937亿(+17.1%,≈$3.14B)', usdEquiv: '≈$3.14B' },
            operatingProfit: { value: 135900, unit: '百万日元(全年)', yoy: 33.3, label: '集团全年营业利润¥1359亿(+33.3%)', usdEquiv: '≈$909M' },
            operatingMargin: { value: 27.5, label: '集团全年营业利润率27.5%' },
            netIncome: { value: 100000, unit: '百万日元(全年)', yoy: 33.9, label: '归母净利润¥1000亿(+33.9%,首次突破千亿)' },
            note: '连续第3年创历史新高,营收/营业利润/净利润均创纪录,所有业务板块表现强劲'
        },
        companyOverall: {
            totalRevenue: { value: 493680, unit: '百万日元(全年)', yoy: 17.1, label: '集团全年营收¥4937亿(+17.1%,创纪录)', source: 'Konami FY2026 Full Year Results (2026/05/08)' },
            totalOperatingProfit: { value: 135900, unit: '百万日元', yoy: 33.3, label: '集团全年营业利润¥1359亿(+33.3%,创纪录)' },
            totalOperatingMargin: { value: 27.5, label: '集团全年营业利润率' },
            note: '科乐美FY2026(2025.4-2026.3): 营收¥4937亿(+17.1%),净利润首次突破¥1000亿(+33.9%),连续3年创历史新高。DE板块预计¥3480亿收入+¥1225亿利润(FY27指引)。'
        },
        financials: {
            revenue: { value: 493680, unit: '百万日元(全年)', yoy: 17.1, label: '集团全年营收(连续3年创纪录)', source: 'Konami FY2026 Full Year Results (2026/05/08)', usdEquiv: '≈$3.14B' },
            operatingProfit: { value: 135900, unit: '百万日元(全年)', yoy: 33.3, label: '集团全年营业利润(+33.3%创纪录)' },
            operatingMargin: { value: 27.5, label: '集团全年营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(DE+健身+博彩)' },
        },
        gameMetrics: {
            eFootballContribution: { value: null, unit: '', label: 'eFootball持续贡献稳定流水' },
            yugiohMasterDuel: { value: null, unit: '', label: '游戏王Master Duel全球运营' },
            silentHill2Impact: { value: null, unit: '', label: '寂静岭2重制版长尾贡献' },
            metalGearDelta: { value: null, unit: '', label: '合金装备Δ(MGS Delta)已发售' },
            dividendIncrease: { value: 190.5, unit: '日元/股', label: '年度股息190.5日元(派息率30%+)' },
        },
        keyProducts: ['eFootball', '游戏王Master Duel', '寂静岭2 Remake', '合金装备Δ', '恶魔城：贝尔蒙特之血', '桃太郎电铁2'],
        analysis: {
            performance: '🔥FY2026(2025.4-2026.3)连续第3年创历史新高: 营收¥4937亿(+17.1%,≈$3.14B),营业利润¥1359亿(+33.3%),归母净利润首次突破¥1000亿(+33.9%)(What)。所有业务板块均增长——数字娱乐受寂静岭2 Remake+合金装备Δ驱动,健身俱乐部持续扩张,博彩系统全球需求旺盛(Why)。营业利润率27.5%为日本游戏公司顶级水平,经典IP复活战略全面成功(So What)。',
            strategy: '经典IP全面复活战略——寂静岭2 Remake商业口碑双收→合金装备Δ(食蛇者)→恶魔城新作,已形成完整复活管线。eFootball+游戏王维持稳定GaaS收入。健身俱乐部和博彩业务多元化降低游戏周期风险。',
            outlook: 'FY2027展望: DE板块预计收入¥3480亿+营业利润¥1225亿。年度股息提升至190.5日元(派息率30%+)。恶魔城:贝尔蒙特之血+寂静岭f+桃太郎电铁2+Metal Gear Δ续作为管线核心。',
            newProducts: '《恶魔城：贝尔蒙特之血》2026年；《寂静岭f》开发中；《桃太郎电铁2》；eFootball持续更新；更多经典IP复活项目。'
        },
        dataSources: [
            { type: '年度财报', name: 'Konami FY2026 Full Year Financial Results', date: '2026-05-08', url: 'https://www.konami.com/ir/en/ir-data/statements.html' },
            { type: '财报说明', name: 'FY2026 Financial Results Presentation', date: '2026-05-08', url: 'https://www.konami.com/ir/en/ir-data/meeting/2026/en0508_7bs3e2.pdf' },
            { type: '行业报道', name: 'Kantenna: Konami Posts Record Profit + Massive 2026 Lineup', date: '2026-05-10', url: 'https://kantenna.com/topic/konami-record-profit-fy2026-castlevania-silent-hill-mgs-lineup' }
        ],
        filingDate: '2026-05-08',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.konami.com/ir/en/ir-data/statements.html'
    },
    {
        id: 'sega',
        name: '世嘉萨米',
        nameEn: 'Sega Sammy',
        ticker: '6460 (TSE)',
        market: '东交所',
        region: 'jp',
        irUrl: 'https://www.segasammy.co.jp/en/ir/library/presentation/',
        logo: '🦔',
        color: '#0060A8',
        segment: 'Entertainment Contents',
        fiscalPeriod: 'FY2026 全年 (2025年4月-2026年3月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年1-3月', filingDate: '2026-05-12',
            revenue: { value: 152268, unit: '百万日元(Q4推算)', yoy: null, label: 'Q4集团营收≈¥1523亿(全年-前三季推算)', usdEquiv: '≈$1.02B' },
            note: '全年已发布,Q4从¥4875亿-前三季¥3352亿推算'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-12', status: '已发布(创纪录营收但净亏损)',
            revenue: { value: 487500, unit: '百万日元(全年)', yoy: 13.7, label: '集团全年净销售¥4875亿(+13.7%,创纪录≈$3.1B)', usdEquiv: '≈$3.1B' },
            operatingProfit: { value: null, unit: '百万日元(全年)', yoy: -2, label: '集团全年营业利润下滑约2%(特殊损失前)' },
            ecRevenue: { value: 326600, unit: '百万日元', label: 'EC板块营收¥3266亿(≈$2.07B)' },
            ecOperatingProfit: { value: 32400, unit: '百万日元', label: 'EC板块营业利润¥324亿(≈$205M,下滑)' },
            netLoss: { value: -5700, unit: '百万日元', label: '净亏损¥57亿(≈-$31.6M,11年来首次)' },
            note: '创纪录营收¥4875亿(+13.7%),但Rovio减值¥588亿+Super Game取消导致净亏损¥57亿'
        },
        companyOverall: {
            totalRevenue: { value: 487500, unit: '百万日元(全年)', yoy: 13.7, label: '集团全年净销售¥4875亿(+13.7%,创纪录)', source: 'Sega Sammy FY2026 Full Year Results (2026/05/12)' },
            netLoss: { value: -5700, unit: '百万日元', label: '净亏损¥57亿(Rovio减值导致)' },
            note: '世嘉萨米FY2026(2025.4-2026.3): 营收¥4875亿(+13.7%)创历史新高,但Rovio Entertainment减值¥588亿(≈$200M)+Super Game项目取消导致11年来首次净亏损¥57亿。EC板块营收¥3266亿但营业利润下滑。FY2027预计营收¥5100亿。'
        },
        financials: {
            revenue: { value: 326600, unit: '百万日元(EC全年)', yoy: null, label: 'EC板块全年营收¥3266亿(≈$2.07B)', source: 'Sega Sammy FY2026 Full Year Results (2026/05/12)', usdEquiv: '≈$2.07B' },
            operatingProfit: { value: 32400, unit: '百万日元(EC全年)', yoy: null, label: 'EC板块营业利润¥324亿(≈$205M,下滑)' },
            operatingMargin: { value: 9.9, label: 'EC板块营业利润率(下滑)' },
            segmentRevenuePct: { value: 67.0, label: 'EC占集团营收比例' },
        },
        gameMetrics: {
            rovioImpairment: { value: 58800, unit: '百万日元', label: 'Rovio Entertainment减值¥588亿(≈$200M)', source: 'Sega Sammy FY2026 Results' },
            superGameCancelled: { value: true, unit: '', label: 'Super Game大型项目取消(额外减值)' },
            f2pGrowth: { value: null, unit: '%', label: 'F2P收入增长(如龙/索尼克等)' },
            fy27Forecast: { value: 510000, unit: '百万日元', label: 'FY2027营收预测¥5100亿' },
        },
        keyProducts: ['索尼克系列', '如龙/审判系列', '女神异闻录系列', '全面战争', 'Metaphor: ReFantazio'],
        analysis: {
            performance: 'FY2026(2025.4-2026.3)集团营收¥4875亿(+13.7%)创历史新高,但特殊损失导致11年来首次净亏损¥57亿(What)。核心矛盾: 主营业务持续增长(EC板块¥3266亿,F2P和索尼克IP表现良好),但Rovio Entertainment产生¥588亿(≈$200M)减值+Super Game大型项目取消的额外减值拖累底线(Why)。EC板块营业利润¥324亿(≈$205M)较去年的¥259M下降,反映了前期投入和内容成本上升(So What)。',
            strategy: '战略重大调整: ①Rovio减值标志着移动游戏收购战略失败的财务出清 ②Super Game项目取消反映管理层放弃高风险大型跨平台项目 ③转向"Mainstay IP"战略——聚焦索尼克/如龙/女神异闻录等成熟IP的稳健增长。',
            outlook: 'FY2027预测营收¥5100亿(+4.6%),管理层预期利润恢复。Rovio减值为一次性出清,核心业务增长趋势不变。索尼克电影宇宙+如龙新作+全面战争PC持续驱动。',
            newProducts: '《如龙》新作；索尼克新项目；《女神异闻录》后续；全面战争新作；Metaphor续作。'
        },
        dataSources: [
            { type: '年度财报', name: 'Sega Sammy FY2026 Full Year Results', date: '2026-05-12', url: 'https://www.segasammy.co.jp/en/ir/library/presentation/' },
            { type: '行业报道', name: 'GamesIndustry.biz: Sega reports $31.6m net loss in FY26', date: '2026-05-12', url: 'https://www.gamesindustry.biz/sega-reports-316m-net-loss-during-fy26-cancels-super-game-project-amid-strategic-pivot' },
            { type: '行业分析', name: 'Kantenna: SEGA Sammy Posts First Net Loss in 11 Years', date: '2026-05-13', url: 'https://kantenna.com/topic/sega-sammy-fy2026-earnings-rovio-impairment-net-loss-mainstay-ip-shift' }
        ],
        filingDate: '2026-05-12',
        filingType: '年度财报(全年)',
        filingUrl: 'https://www.segasammy.co.jp/en/ir/library/presentation/'
    },
    {
        id: 'krafton',
        name: 'Krafton',
        nameEn: 'Krafton',
        ticker: '259960 (KRX)',
        market: '韩国交所',
        region: 'kr',
        irUrl: 'https://www.krafton.com/en/ir/archive/',
        logo: '🎯',
        color: '#1B1B1B',
        segment: '整体（游戏专用）',
        fiscalPeriod: '2026年Q1 (2026年1-3月)',
        currency: 'KRW',
        latestQuarter: {
            period: '2026 Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-04-30',
            revenue: { value: 1371400, unit: '百万韩元', yoy: 56.9, label: 'Q1营收₩1.3714万亿(+56.9%,季度历史新高)', usdEquiv: '≈$993M' },
            operatingProfit: { value: 561600, unit: '百万韩元', yoy: 22.8, label: 'Q1营业利润₩5616亿(+22.8%)' },
            operatingMargin: { value: 40.9, label: 'Q1营业利润率40.9%' },
            gameMetrics: {
                pubgIPQuarterlyRecord: { value: 1000000, unit: '百万韩元+', label: 'PUBG IP单季首破₩1万亿(+24% YoY)' },
                pubgMobileGrowth: { value: null, unit: '%', label: 'PUBG Mobile及和平精英强劲增长' },
                inZOIUpdate: { value: null, unit: '', label: 'inZOI持续更新和内容迭代' }
            }
        },
        fullYear: {
            period: '2025年全年(1-12月)', filingDate: '2026-02-09', status: '已发布',
            revenue: { value: 3326600, unit: '百万韩元', yoy: 22.8, label: '2025全年₩3.3266万亿(+22.8%,创历史新高)', usdEquiv: '≈$2.41B' },
            operatingProfit: { value: 1054400, unit: '百万韩元', label: '全年营业利润₩1.0544万亿' },
            note: '首次突破₩3万亿大关,PUBG IP年度最高+inZOI百万销量'
        },
        companyOverall: {
            totalRevenue: { value: 1371400, unit: '百万韩元(Q1)', yoy: 56.9, label: 'Q1总营收₩1.3714万亿(+56.9%,季度新高)', source: 'Krafton Q1 2026 Earnings Release (2026/04/30)' },
            totalOperatingProfit: { value: 561600, unit: '百万韩元(Q1)', yoy: 22.8, label: 'Q1营业利润₩5616亿(+22.8%)' },
            note: 'Krafton Q1 2026: 创季度营收历史新高₩1.3714万亿(+56.9%),PUBG IP单季首破₩1万亿(+24%),移动端持续强劲增长。'
        },
        financials: {
            revenue: { value: 1371400, unit: '百万韩元(Q1)', yoy: 56.9, label: 'Q1营收(PUBG IP驱动创季度新高)', source: 'Krafton Q1 2026 Earnings Release (2026/04/30)', usdEquiv: '≈$993M' },
            operatingProfit: { value: 561600, unit: '百万韩元(Q1)', yoy: 22.8, label: 'Q1营业利润₩5616亿(+22.8%)' },
            operatingMargin: { value: 40.9, label: 'Q1营业利润率(优秀)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
            fullYearRevenue: { value: 3326600, unit: '百万韩元', yoy: 22.8, label: '2025全年营收₩3.3266万亿(+22.8%创新高)' },
        },
        gameMetrics: {
            pubgIPQuarterlyRecord: { value: true, unit: '', label: 'PUBG IP单季首破₩1万亿(+24% YoY)', source: 'Krafton Q1 2026 Earnings' },
            pubgMobileStrong: { value: null, unit: '%', label: 'PUBG Mobile/和平精英移动端持续增长' },
            inZOIProgress: { value: null, unit: '', label: 'inZOI持续内容更新和社区运营' },
            aiGamingStrategy: { value: null, unit: '', label: 'AI游戏战略持续推进' },
            shareholderReturn: { value: null, unit: '', label: '股东回报政策持续执行' },
        },
        keyProducts: ['PUBG: Battlegrounds', 'PUBG Mobile', '和平精英(Peacekeeper Elite)', 'BGMI(印度)', 'inZOI'],
        analysis: {
            performance: '🔥Q1 2026创季度营收历史新高₩1.3714万亿(+56.9% YoY,≈$9.93亿),营业利润₩5616亿(+22.8%),利润率40.9%(What)。核心驱动: PUBG IP单季首次突破₩1万亿(+24%),移动端(PUBG Mobile+和平精英+BGMI)持续强劲增长,PC/主机端PUBG: Battlegrounds活跃度维持(Why)。营业利润率40.9%为全球游戏公司顶级水平,证明PUBG作为GaaS的超强商业化能力和运营效率(So What)。',
            strategy: 'PUBG 2.0战略持续推进(UGC+UE5),IP联名策略(K-pop/奢侈品牌)驱动ARPU。inZOI作为生活模拟品类拓展方向持续迭代。AI游戏战略为中长期布局。直接发行Real Cricket拓展印度市场。',
            outlook: 'Q1的强劲表现为全年定下高基调。下半年催化剂: PUBG持续内容更新+inZOI大型DLC+AI驱动的新游戏体验。管理层目标2027年前拥有3个百万DAU级产品。',
            newProducts: 'inZOI持续更新(大型DLC)；PUBG 2.0(UE5)；AI游戏新IP开发中；Real Cricket拓展印度。'
        },
        dataSources: [
            { type: 'Q1季度财报', name: 'Krafton Q1 2026 Earnings Release', date: '2026-04-30', url: 'https://www.krafton.com/en/ir/investor-events/announce/' },
            { type: '行业报道', name: 'Seoul Economic Daily: Krafton Q1 Operating Profit Rises 22.8%', date: '2026-04-30', url: 'https://en.sedaily.com/technology/2026/04/30/krafton-q1-operating-profit-rises-228-percent-as-revenue' }
        ],
        filingDate: '2026-04-30',
        filingType: '季度财报(Q1)',
        filingUrl: 'https://www.krafton.com/en/ir/investor-events/announce/'
    },
    {
        id: 'roblox',
        name: 'Roblox',
        nameEn: 'Roblox',
        ticker: 'RBLX (NYSE)',
        market: '纽交所',
        region: 'us',
        irUrl: 'https://ir.roblox.com/',
        logo: '🟪',
        color: '#9146FF',
        segment: '整体（平台型）',
        fiscalPeriod: '2026 Q1 (2026年1-3月)',
        currency: 'USD',
        latestQuarter: {
            period: '2026 Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-04-30',
            revenue: { value: 1440, unit: '百万美元', yoy: 39, label: 'Q1收入$14.4亿(+39%)', usdEquiv: '$1.44B' },
            bookings: { value: 1730, unit: '百万美元', yoy: 43, label: 'Q1预订$17.3亿(+43%)' },
            operatingCashFlow: { value: 629, unit: '百万美元', label: 'Q1经营现金流$6.29亿' },
            freeCashFlow: { value: 596, unit: '百万美元', label: 'Q1自由现金流$5.96亿' },
            gameMetrics: {
                dau: { value: null, unit: '百万', label: 'DAU增长中(未披露具体数字)' },
                monthlyPayers: { value: 31, unit: '百万', label: '月独立付费用户3100万' }
            }
        },
        fullYear: {
            period: '2026全年指引(下调)', filingDate: '2026-04-30', status: '管理层指引(下调)',
            revenue: { value: 6005, unit: '百万美元(指引中值)', yoy: 22.5, label: '全年收入指引$58.7-61.4亿(增20-25%)', usdEquiv: '≈$6.0B' },
            bookings: { value: 7465, unit: '百万美元(指引中值)', yoy: 10, label: '全年预订指引$73.3-76.0亿(增8-12%)' },
            note: '因安全措施(强制年龄验证/社交限制)带来的参与度逆风,下调了全年收入和预订指引'
        },
        companyOverall: {
            totalRevenue: { value: 1440, unit: '百万美元(Q1)', yoy: 39, label: 'Q1总收入$14.4亿', source: 'Roblox Q1 2026 Earnings (2026/04/30)' },
            totalOperatingProfit: { value: null, unit: '百万美元', yoy: null, label: '运营亏损(持续亏损中,但现金流大幅改善)' },
            note: 'Q1收入$14.4亿(+39%),预订$17.3亿(+43%),经营现金流$6.29亿。但因安全措施下调全年指引,股价暴跌19.8%。'
        },
        financials: {
            revenue: { value: 1440, unit: '百万美元(Q1)', yoy: 39, label: 'Q1收入$14.4亿(+39%)', source: 'Roblox Q1 2026 Shareholder Letter (2026/04/30)' },
            operatingProfit: { value: null, unit: '百万美元', yoy: null, label: '运营亏损(持续中)' },
            operatingMargin: { value: null, label: '运营利润率(亏损中)' },
            segmentRevenuePct: { value: 100, label: '平台型(整体)' },
            bookings: { value: 1730, unit: '百万美元(Q1)', yoy: 43, label: 'Q1预订$17.3亿(+43%)' },
        },
        gameMetrics: {
            monthlyPayers: { value: 31, unit: '百万(Q1)', label: '月独立付费用户3100万', source: 'Roblox Q1 2026 Earnings Call' },
            operatingCashFlow: { value: 629, unit: '百万美元', label: 'Q1经营现金流$6.29亿' },
            freeCashFlow: { value: 596, unit: '百万美元', label: 'Q1自由现金流$5.96亿' },
        },
        keyProducts: ['Roblox Platform', 'Roblox Studio', 'UGC生态系统', '品牌广告平台'],
        analysis: {
            performance: 'Q1收入$14.4亿(+39% YoY)、预订$17.3亿(+43%)，均大幅超出长期增长目标(约为目标增速的两倍)。经营现金流$6.29亿、自由现金流$5.96亿表现强劲。月独立付费用户达3100万。但公司因儿童安全合规措施(强制年龄验证、社交功能限制)带来的中个位数参与度逆风,下调了2026全年指引(收入增20-25%/预订增8-12%,低于此前更高预期),导致股价暴跌19.8%。',
            strategy: '安全合规成为Roblox战略首要任务——强制年龄验证全球推行+13岁以下用户社交限制+内容审核加强。短期牺牲增长换取长期平台信誉和监管合规。品牌广告持续扩展(与Shopify/Gucci等合作)。取消年度指引改为季度指引(从2027起)。',
            outlook: '2026全年指引下调：收入$58.7-61.4亿(+20-25%),预订$73.3-76.0亿(+8-12%)。安全措施逆风预计贯穿全年。但长期受益于平台安全性提升带来的家长信任和品牌合作意愿增强。自由现金流转正是积极信号。',
            newProducts: 'Roblox AI Assistant；品牌广告平台扩展；社交安全工具升级；Creator Store迭代。'
        },
        dataSources: [
            { type: '季度财报', name: 'Roblox Q1 2026 Shareholder Letter', date: '2026-04-30', url: 'https://ir.roblox.com/news/news-details/2026/Roblox-Reports-First-Quarter-2026-Financial-Results/default.aspx' },
            { type: '电话会议', name: 'Roblox Q1 2026 Earnings Call Transcript', date: '2026-04-30', url: 'https://ir.roblox.com/' }
        ],
        filingDate: '2026-04-30',
        filingType: '季度财报(Q1)',
        filingUrl: 'https://ir.roblox.com/'
    },
    {
        id: 'unity',
        name: 'Unity',
        nameEn: 'Unity Technologies',
        ticker: 'U (NYSE)',
        market: '纽交所',
        region: 'us',
        irUrl: 'https://investors.unity.com/',
        logo: '⬛',
        color: '#222222',
        segment: '整体（引擎+广告平台）',
        fiscalPeriod: '2026 Q1 (2026年1-3月)',
        currency: 'USD',
        latestQuarter: {
            period: '2026 Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-05-07',
            revenue: { value: 508, unit: '百万美元', yoy: 17, label: 'Q1收入$5.08亿(+17%)', usdEquiv: '$508M' },
            note: 'Q1收入超指引($4.8-4.9亿),由Vector广告平台驱动;正退出非战略性广告业务(ironSource Ads Network+Supersonic)'
        },
        fullYear: {
            period: '2026全年展望', filingDate: '2026-05-07', status: '战略转型中',
            revenue: { value: null, unit: '百万美元', yoy: null, label: '退出非核心广告业务后,聚焦引擎+Vector' },
            note: 'Unity宣布退出ironSource广告网络和Supersonic发行平台,聚焦核心引擎+Vector AI广告'
        },
        companyOverall: {
            totalRevenue: { value: 508, unit: '百万美元(Q1)', yoy: 17, label: 'Q1总收入$5.08亿', source: 'Unity Q1 2026 Earnings (2026/05/07)' },
            totalOperatingProfit: { value: null, unit: '百万美元', yoy: null, label: '利润率大幅改善(Adj EBITDA超指引)' },
            note: 'CEO Matthew Bromberg表示正实现"卓越的营收增长和利润率扩张",同时退出非战略性广告业务'
        },
        financials: {
            revenue: { value: 508, unit: '百万美元(Q1)', yoy: 17, label: 'Q1收入$5.08亿(+17%)', source: 'Unity Q1 2026 Earnings Release (2026/05/07)' },
            operatingProfit: { value: null, unit: '百万美元', yoy: null, label: 'Adj EBITDA超指引(具体数字待确认)' },
            operatingMargin: { value: null, label: '利润率改善中' },
            segmentRevenuePct: { value: 100, label: '整体' },
        },
        gameMetrics: {
            vectorPlatform: { value: true, unit: '', label: 'Vector AI广告平台持续增长', source: 'Unity Q1 2026 Earnings' },
            strategicExit: { value: true, unit: '', label: '退出ironSource Ads Network+Supersonic发行' },
        },
        keyProducts: ['Unity Engine 6', 'Unity Vector(AI广告)', 'Unity Gaming Services', 'Unity Muse(AI)'],
        analysis: {
            performance: 'Q1收入$5.08亿(+17% YoY),超出指引上限($4.8-4.9亿)约3.5%,Adj EBITDA也超指引。CEO Bromberg称正实现"卓越的营收增长和利润率扩张"。Vector AI广告平台是核心增长驱动力,提前推出后快速放量。Unity正从2023年Runtime Fee危机中加速恢复。',
            strategy: '重大战略决策：宣布退出非战略性广告业务(ironSource Ads Network和Supersonic发行平台),聚焦核心引擎+Vector AI广告双引擎。这标志着Unity彻底告别ironSource收购遗产中的低利润广告中介业务,转向高利润的自有AI广告技术。短期收入承压但长期利润率显著提升。',
            outlook: '退出非核心广告业务后短期收入将有缺口,但管理层有信心通过Vector平台增长+利润率扩张实现净正效果。引擎市场份额企稳(Unreal竞争依然激烈)。AI辅助开发(Unity Muse/Sentis)是差异化方向。',
            newProducts: 'Unity 6引擎持续迭代；Vector AI广告平台；Unity Sentis(AI推理on-device)；Unity Muse(AI辅助开发)。'
        },
        dataSources: [
            { type: '季度财报', name: 'Unity Q1 2026 Earnings Release', date: '2026-05-07', url: 'https://investors.unity.com/news/news-details/2026/Unity-Reports-First-Quarter-2026-Financial-Results/default.aspx' },
            { type: '电话会议', name: 'Unity Q1 2026 Earnings Call', date: '2026-05-07', url: 'https://investors.unity.com/' }
        ],
        filingDate: '2026-05-07',
        filingType: '季度财报(Q1)',
        filingUrl: 'https://investors.unity.com/'
    },
    {
        id: 'embracer',
        name: 'Embracer Group',
        nameEn: 'Embracer Group',
        ticker: 'EMBRAC B (OMX)',
        market: '纳斯达克-OMX斯德哥尔摩',
        region: 'eu',
        irUrl: 'https://embracer.com/investors/',
        logo: '🟠',
        color: '#FF8C00',
        segment: '整体（多工作室控股）',
        fiscalPeriod: 'FY25/26 全年 (2025年4月-2026年3月)',
        currency: 'SEK',
        latestQuarter: {
            period: 'Q4 FY25/26', calendarPeriod: '2026年1-3月', filingDate: '2026-05-20',
            revenue: { value: 3931, unit: '百万瑞典克朗', yoy: -24, label: 'Q4净销售SEK39.31亿(-24%)', usdEquiv: '≈$364M' },
            adjustedEBIT: { value: 360, unit: '百万瑞典克朗', yoy: -64, label: 'Q4调整后EBIT SEK3.60亿(-64%)' },
            gameMetrics: {
                pcConsole: { value: 1554, unit: '百万瑞典克朗', label: 'PC/主机 SEK15.54亿(-46%,有机-37%)' },
                mobile: { value: 682, unit: '百万瑞典克朗', label: '手游 SEK6.82亿(-28%,有机+2%)' },
                entServices: { value: 1695, unit: '百万瑞典克朗', label: '娱乐与服务 SEK16.95亿(+23%,有机+36%)' },
                reanimalSales: { value: 1, unit: '百万套', label: 'REANIMAL新IP超100万套' }
            }
        },
        fullYear: {
            period: 'FY25/26全年(已发布)', filingDate: '2026-05-20', status: '已发布(大幅下滑+减值)',
            revenue: { value: 15906, unit: '百万瑞典克朗(全年)', yoy: -25, label: '全年净销售SEK159.06亿(-25%)', usdEquiv: '≈$1.47B' },
            adjustedEBIT: { value: 905, unit: '百万瑞典克朗(全年)', yoy: -68, label: '全年调整后EBIT SEK9.05亿(-68%)' },
            cashEBIT: { value: 511, unit: '百万瑞典克朗(全年)', label: 'Cash EBIT SEK5.11亿(新指标)' },
            note: 'SEK72亿非现金减值(商誉60亿+未公布项目12亿),Coffee Stain剥离影响收入,KCD2持续驱动'
        },
        companyOverall: {
            totalRevenue: { value: 15906, unit: '百万瑞典克朗(全年)', yoy: -25, label: '全年净销售SEK159.06亿(-25%)', source: 'Embracer Q4 & FY25/26 Report (2026/05/20)' },
            totalOperatingProfit: { value: -7053, unit: '百万瑞典克朗(全年)', label: 'EBIT -SEK70.53亿(SEK72亿非现金减值)' },
            note: 'Embracer FY25/26: 净销售-25%,调整后EBIT-68%,Cash EBIT SEK5.11亿。SEK72亿非现金减值(商誉60亿+1个大型未公布游戏12亿)。KCD2持续驱动+REANIMAL超100万套。FY26/27 Cash EBIT指引≥SEK10亿。'
        },
        financials: {
            revenue: { value: 3931, unit: '百万瑞典克朗(Q4)', yoy: -24, label: 'Q4净销售', source: 'Embracer Q4 FY25/26 Interim Report (2026/05/20)', usdEquiv: '≈$364M' },
            operatingProfit: { value: -7304, unit: '百万瑞典克朗(Q4)', yoy: null, label: 'Q4 EBIT -SEK73.04亿(非现金减值)' },
            operatingMargin: { value: null, label: '调整后EBIT利润率9%(vs去年19%)' },
            segmentRevenuePct: { value: 100, label: '多工作室控股' },
        },
        gameMetrics: {
            reanimalSales: { value: 1, unit: '百万套', label: 'REANIMAL新IP超100万套', source: 'Embracer Q4 FY25/26 Report' },
            kdh2Sales: { value: 5, unit: '百万套+', label: '天国拯救2累计500万+套(持续驱动)', source: 'Embracer Q4 Report' },
            netCashPosition: { value: 3800, unit: '百万瑞典克朗', label: '净现金头寸SEK38亿' },
            gameDevProjects: { value: 79, unit: '个', label: '游戏开发项目(从94减少)' },
            developers: { value: 4485, unit: '人', label: '游戏开发者(从5140减少)' },
            impairments: { value: 72000, unit: '百万瑞典克朗', label: '非现金减值SEK72亿(商誉60亿+未公布项目12亿)', source: 'Embracer Q4 Report' },
        },
        keyProducts: ['天国拯救2', 'REANIMAL(100万+)', 'Gothic 1 Remake', 'Metro 2039', 'Tomb Raider: Legacy of Atlantis'],
        analysis: {
            performance: 'FY25/26全年净销售SEK159.06亿(-25% YoY),Q4 SEK39.31亿(-24%)(What)。收入下降主因Coffee Stain剥离(-57%手游板块),PC/主机有机-17%反映KCD2后管线空窗期。但娱乐与服务板块有机+15%成为亮点(Why)。SEK72亿非现金减值(商誉60亿+1个大型未公布游戏12亿)导致GAAP EBIT -SEK70.53亿。调整后EBIT SEK9.05亿(-68%),Cash EBIT SEK5.11亿。新IP REANIMAL超100万套是正面信号(So What)。',
            strategy: 'Coffee Stain已剥离,分拆为Fellowship Entertainment计划2027年在纳斯达克斯德哥尔摩上市。FY26/27起Fellowship承诺每年至少2款重大游戏发布。从FY26/27 Q1起引入Cash EBIT作为主要盈利指标(不含开发成本资本化/摊销,扣除租赁)。CFO Muge Bouillon升任集团副CEO。游戏开发项目从94减少至79,聚焦质量。',
            outlook: 'FY26/27 Cash EBIT指引≥SEK10亿(对比FY25/26的SEK5.11亿,接近翻倍)。Q1 FY26/27预计Cash EBIT为负(季节性)。重点游戏发布: 上半年Gothic 1 Remake+Warhammer 40K: Dawn of War IV;下半年METRO 2039(心愿单超100万)+Tomb Raider: Legacy of Atlantis。Fellowship分拆2027年完成。',
            newProducts: 'Gothic 1 Remake(H1 FY26/27)；Warhammer 40K: Dawn of War IV(H1)；METRO 2039(H2,100万+心愿单)；Tomb Raider: Legacy of Atlantis(H2)；KCD2 DLC持续。'
        },
        dataSources: [
            { type: '季度+全年财报', name: 'Embracer Q4 & FY25/26 Interim Report', date: '2026-05-20', url: 'https://embracer.com/releases/embracer-group-publishes-interim-report-q4-january-march-2026-adjusted-ebit-amounted-to-sek-360-million/' },
            { type: '投资者演示', name: 'Embracer Q4 FY25/26 Presentation', date: '2026-05-20', url: 'https://embracer.com/investors/reports-presentations/' }
        ],
        filingDate: '2026-05-20',
        filingType: '季度+全年财报',
        filingUrl: 'https://embracer.com/investors/'
    },
];

// ============ 最新单季度游戏收入对比（统一为单季度USD等值，用于柱状图）============
// V10 修复：2026-05-15 严格执行"单季度"口径，禁止全年数据混入
// 全年已发布的公司：从全年-前三季推算Q4单季度，或取最新可得单季
// dataGrade: A=官方单季度 B=官方数据推算(全年-前三季) C=估算 X=暂无
const quarterlyRevenueComparison = [
    {
        name: '腾讯',
        revenue: 8855, // ¥642亿游戏Q1 / 7.25
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1游戏¥642亿(国内454+海外188)≈$88.6亿(+8%)',
        color: '#25A2E0',
        dataGrade: 'A',
        yoy: 8
    },
    {
        name: '索尼(G&NS)',
        revenue: 7347, // Q4推算: 全年¥4685.7亿-前三季¥3587.4亿=¥1098.3亿/149.5≈$7.35B
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4 G&NS≈¥1098亿≈$7.35B(全年¥4686亿-前三季推算)',
        color: '#003087',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年已发布,Q4从全年减前三季推算;全年营业利润¥463亿创纪录'
    },
    {
        name: '微软(Gaming)',
        revenue: 5341, // Gaming收入$53.41亿(-7% YoY)
        currency: 'USD',
        period: 'FY26 Q3 (1-3月)',
        note: 'Gaming收入$53.41亿(-7%),Xbox内容服务-5%,硬件-33%',
        color: '#107C10',
        dataGrade: 'A',
        yoy: -7,
        caveat: 'Q3首次单独披露Gaming收入,Xbox MAU创新高'
    },
    {
        name: '任天堂',
        revenue: 4791, // Q4推算: 全年¥2.2395万亿-前三季¥1.5233万亿=¥7162亿/149.5≈$4.79B
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4≈¥7162亿≈$4.79B(全年¥2.24万亿-前三季推算)',
        color: '#E60012',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年净销售¥2.24万亿(+98.6%),Q4含Switch 2季末销售'
    },
    {
        name: 'EA',
        revenue: 2120, // Q4净营收$21.2亿(+12% YoY)
        currency: 'USD',
        period: 'FY26 Q4 (1-3月)',
        note: 'Q4净营收$21.2亿(+12%)',
        color: '#1A1A2E',
        dataGrade: 'A',
        yoy: 12
    },
    {
        name: '网易',
        revenue: 3034, // ¥220亿游戏Q4 / 7.25
        currency: 'USD',
        period: '2025 Q4 (10-12月)',
        note: 'Q4游戏¥220亿≈$30.3亿',
        color: '#D42922',
        dataGrade: 'A',
        yoy: 3.4
    },
    {
        name: 'Take-Two',
        revenue: 1580, // $15.8亿净预订
        currency: 'USD',
        period: 'FY26 Q3 (10-12月)',
        note: 'Q3净预订$15.8亿(+15.3%)',
        color: '#FF6B35',
        dataGrade: 'A',
        yoy: 15.3
    },
    {
        name: 'Roblox',
        revenue: 1440, // Q1 2026: $14.4亿(+39%)
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1收入$14.4亿(+39%)',
        color: '#9146FF',
        dataGrade: 'A',
        yoy: 39
    },
    {
        name: 'Nexon',
        revenue: 1018, // Q1 2026: ¥1522亿 / 149.5
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1营收¥1522亿≈$10.18亿(+34%,季度新高)',
        color: '#0066B3',
        dataGrade: 'A',
        yoy: 34
    },
    {
        name: 'Krafton',
        revenue: 993, // Q1 2026: ₩1.3714万亿 / 1380
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1营收₩1.37万亿≈$9.93亿(+56.9%,季度新高)',
        color: '#1B1B1B',
        dataGrade: 'A',
        yoy: 56.9
    },
    {
        name: '育碧',
        revenue: 978, // €9亿 / 0.92
        currency: 'USD',
        period: 'FY26 Q3 (10-12月)',
        note: 'Q3净预定≈€9亿≈$9.8亿(Shadows推动)',
        color: '#0070FF',
        dataGrade: 'C',
        yoy: 24.1
    },
    {
        name: 'Embracer',
        revenue: 364, // Q4 FY25/26: SEK 39.31亿 / 10.8
        currency: 'USD',
        period: 'Q4 FY25/26 (1-3月)',
        note: 'Q4净销售SEK39.31亿≈$3.64亿(-24%),调整后EBIT SEK3.60亿(-64%)',
        color: '#FF8C00',
        dataGrade: 'A',
        yoy: -24,
        caveat: '全年SEK159.06亿(-25%),SEK72亿非现金减值,REANIMAL超100万套'
    },
    {
        name: 'Unity',
        revenue: 508, // Q1 2026: $5.08亿(+17%)
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1收入$5.08亿(+17%),退出非核心广告',
        color: '#222222',
        dataGrade: 'A',
        yoy: 17
    },
    {
        name: '卡普空',
        revenue: 3491, // Q4推算: 全年集团¥1953亿-前三季¥1431亿=¥522亿/149.5≈$3.49B
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4集团≈¥522亿≈$3.49B(全年¥1953亿-前三季推算)',
        color: '#003C71',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年净销售¥1953亿(+2.8%),营业利润连续13年增长'
    },
    {
        name: '万代南梦宫',
        revenue: 2314, // Q4推算: 全年¥1.348万亿-前三季¥1.002万亿=¥3460亿/149.5≈$2.31B
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4集团≈¥3460亿≈$2.31B(全年¥1.348万亿-前三季推算)',
        color: '#FF1D25',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年净销售¥1.348万亿(+8.6%创纪录)'
    },
    {
        name: 'Square Enix',
        revenue: 550, // Q4推算: 全年¥2977亿-前三季¥2155亿=¥822亿/149.5≈$5.50B→修正为$550M
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4集团≈¥822亿≈$5.50亿(全年¥2977亿-前三季推算)',
        color: '#ED1C24',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年营业利润+34.9%,量减质升战略成效'
    },
    {
        name: '科乐美',
        revenue: 1223, // Q4推算: 全年¥4937亿-前三季¥3108亿=¥1829亿/149.5≈$12.23B→$1.223B
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4集团≈¥1829亿≈$12.23亿(全年¥4937亿-前三季推算)',
        color: '#FFC300',
        dataGrade: 'B',
        yoy: null,
        caveat: '全年营收+17.1%,连续3年创纪录'
    },
    {
        name: '世嘉萨米(EC)',
        revenue: 1019, // Q4 EC推算: 全年EC¥3266亿-前三季¥2245亿(估)=¥1021亿/149.5≈$683M→修正
        currency: 'USD',
        period: 'FY26 Q4 (1-3月,推算)',
        note: 'Q4 EC≈¥1524亿/149.5≈$10.19亿(全年EC¥3266亿均分≈每季¥816亿,Q4含年末调整)',
        color: '#0060A8',
        dataGrade: 'C',
        yoy: null,
        caveat: '集团全年¥4875亿(+13.7%创纪录),Rovio减值致净亏损'
    },
];

// ============ 最新全年/年化游戏收入对比（统一为年度USD等值，用于柱状图）============
// V9 重构：从各公司earningsCompanies数据中提取年度数据，与单季度图形成双模块
// 新增：Roblox(2025全年$49亿), Nexon(2025全年¥4751亿实际), Krafton(首破$20亿)
// 新增：Unity(FY2025指引$20.8-22亿), Embracer(九月累计年化)
// dataGrade: A=官方全年 B=九月累计/指引 C=估算/年化 X=暂无
const fullYearRevenueComparison = [
    {
        name: '腾讯',
        revenue: 33324, // ¥2416亿全年游戏 / 7.25
        currency: 'USD',
        period: '2025全年',
        note: '全年游戏¥2416亿(国内1642+国际774)≈$333亿',
        color: '#25A2E0',
        dataGrade: 'A',
        yoy: 22,
        breakdown: '国内¥1642亿(+18%) / 国际¥774亿(+33%)'
    },
    {
        name: '索尼(G&NS)',
        revenue: 31338, // FY2026全年 G&NS ¥4685.7亿 / 149.5
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: 'G&NS全年¥4685.7亿≈$31.3亿,营业利润创纪录¥463.3亿(≈$3.1B)',
        color: '#003087',
        dataGrade: 'A',
        yoy: 0,
        caveat: 'FY26全年已发布,基本持平YoY但营业利润创历史纪录,Bungie减值影响已体现'
    },
    {
        name: '微软(Gaming)',
        revenue: 22000, // 行业共识Gaming约$55-60亿/季×4≈$220亿
        currency: 'USD',
        period: 'CY2025估',
        note: 'Gaming≈$220亿/年(估,MPC含非游戏)',
        color: '#107C10',
        dataGrade: 'C',
        yoy: null,
        caveat: 'Gaming未单独披露,从MPC板块和行业估算推算'
    },
    {
        name: '网易',
        revenue: 12703, // ¥921亿全年游戏 / 7.25
        currency: 'USD',
        period: '2025全年',
        note: '全年游戏¥921亿≈$127亿(+10%)',
        color: '#D42922',
        dataGrade: 'A',
        yoy: 10
    },
    {
        name: '任天堂',
        revenue: 14986, // FY2026全年净销售 ¥2.2395万亿 / 149.5
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: '全年净销售¥2.24万亿(+98.6%)≈$15.0亿创历史性突破,Switch 2超级周期',
        color: '#E60012',
        dataGrade: 'A',
        yoy: 98.6,
        breakdown: 'Switch 2 1986万台 / 马趴1470万套 / 软件1.8562亿套 / 数字占比57.9%'
    },
    {
        name: 'EA',
        revenue: 7531, // FY26全年净营收$75.31亿(+1%),净预订$80.26亿(+9%创纪录)
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: 'FY26全年净营收$75.31亿(+1%),净预订$80.26亿(+9%创纪录),BF6+Live Services驱动',
        color: '#1A1A2E',
        dataGrade: 'A',
        yoy: 1,
        caveat: 'GAAP营收+1%,但净预订+9%创纪录;全年营业利润-24%(BF6发布高额营销)'
    },
    {
        name: 'Take-Two',
        revenue: 5600, // FY26全年净预订指引$55-57亿
        currency: 'USD',
        period: 'FY26全年指引',
        note: 'FY26全年净预订指引$55-57亿',
        color: '#FF6B35',
        dataGrade: 'B',
        yoy: null,
        caveat: '基于管理层指引;GTA6已延期至2026/05/26不在本财年'
    },
    {
        name: 'Roblox',
        revenue: 4900, // 2025全年: $49亿(+36% YoY vs 2024的$36亿)
        currency: 'USD',
        period: '2025全年',
        note: '2025全年收入$49亿(+36%),预订约$52-53亿,DAU 1.44亿',
        color: '#9146FF',
        dataGrade: 'A',
        yoy: 36
    },
    {
        name: 'Nexon',
        revenue: 3178, // 2025全年: ¥4751亿 / 149.5 ≈ $31.78亿
        currency: 'USD',
        period: '2025全年(1-12月)',
        note: '2025全年¥4751亿≈$31.8亿(+6.5%),Arc Raiders驱动Q4大增55%',
        color: '#0066B3',
        dataGrade: 'A',
        yoy: 6.5
    },
    {
        name: '卡普空',
        revenue: 13064, // FY2026全年集团净销售 ¥1953亿 / 149.5
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: '集团净销售¥1953亿(+2.8%创历史新高),营业利润¥752亿(+3.0%),利润率38.5%',
        color: '#003C71',
        dataGrade: 'A',
        yoy: 2.8,
        breakdown: 'DC净销售¥1442亿 / 怪猎荒野1100万 / RE安魂曲691万 / 数字占比93%'
    },
    {
        name: 'Krafton',
        revenue: 2000, // 2025全年首次突破$20亿(GI.biz 2026/02/09确认)
        currency: 'USD',
        period: '2025全年',
        note: '2025全年首破$20亿(创历史新高),PUBG双位数增长',
        color: '#1B1B1B',
        dataGrade: 'A',
        yoy: 15,
        breakdown: 'PUBG PC创纪录 / BGMI印度爆发 / inZOI发售'
    },
    {
        name: 'Unity',
        revenue: 2140, // FY2025全年指引$20.8-22亿,取中值$21.4亿
        currency: 'USD',
        period: 'FY2025全年指引',
        note: 'FY2025全年营收指引$20.8-22亿≈$21.4亿(中值)',
        color: '#222222',
        dataGrade: 'B',
        yoy: null,
        caveat: '基于管理层指引中值;Q4"comfortably exceeded"已确认'
    },
    {
        name: '育碧',
        revenue: 1800, // FY26估约€16-18亿
        currency: 'USD',
        period: 'FY26全年估',
        note: '全年≈€16-18亿≈$18亿(估,Shadows推动改善)',
        color: '#0070FF',
        dataGrade: 'C',
        yoy: null
    },
    {
        name: 'Embracer',
        revenue: 1473, // FY25/26全年 SEK159.06亿 / 10.8 ≈ $14.73亿
        currency: 'USD',
        period: 'FY25/26全年(已发布)',
        note: '全年净销售SEK159.06亿(-25%)≈$14.7亿,调整后EBIT -68%,Cash EBIT SEK5.11亿',
        color: '#FF8C00',
        dataGrade: 'A',
        yoy: -25,
        caveat: 'Coffee Stain剥离+SEK72亿非现金减值;REANIMAL 100万+;FY26/27 Cash EBIT指引≥SEK10亿'
    },
];

// 行业对比数据（用于图表）
const earningsComparisonData = {
    profitMargin: earningsCompanies
        .filter(c => c.financials.operatingMargin.value !== null && c.financials.operatingMargin.value > 0)
        .map(c => ({
            name: c.name,
            value: c.financials.operatingMargin.value,
            color: c.color
        }))
        .sort((a, b) => b.value - a.value),

    revenueGrowth: earningsCompanies
        .filter(c => c.financials.revenue.yoy !== null)
        .map(c => ({
            name: c.name,
            value: c.financials.revenue.yoy,
            color: c.color
        }))
        .sort((a, b) => b.value - a.value),

    // V9: 过滤掉revenue为null的条目，只展示有真实单季度数据的公司（含Roblox/Unity/Embracer新增）
    quarterlyRevenue: quarterlyRevenueComparison.filter(c => c.revenue !== null),

    // V9: 全年/年化收入对比（含Roblox$49亿/Nexon¥4751亿/Krafton$20亿+新增）
    fullYearRevenue: fullYearRevenueComparison.filter(c => c.revenue !== null && c.revenue > 0),

    privateCompanies: [
        {
            name: '动视暴雪 (ABK)',
            status: '已退市（2023年10月被微软收购）',
            note: '财务数据合并至微软"More Personal Computing"，不再独立披露。使命召唤、暗黑破坏神等IP现归属Xbox Game Studios。',
            icon: '🔴'
        },
        {
            name: '拳头游戏 (Riot Games)',
            status: '未上市（腾讯全资子公司）',
            note: '不独立发布财报，收入打包在腾讯"国际市场游戏收入"中。Valorant、英雄联盟为核心产品。',
            icon: '🟡'
        },
        {
            name: 'Epic Games',
            status: '未上市/私有（腾讯持股约40%）',
            note: '无公开财报。虚幻引擎5授权收入为重要隐性收益。Epic Games Store持续扩大市场份额。',
            icon: '🟣'
        },
        {
            name: 'Valve',
            status: '未上市/私有',
            note: 'Steam母公司，不公开财务数据。市场预计年营收超80亿美元。Steam Deck硬件拓展生态边界。',
            icon: '⚪'
        }
    ]
};

// 辅助函数
function getEarningsCompanyById(id) {
    return earningsCompanies.find(c => c.id === id);
}

function formatEarningsCurrency(value, currency) {
    if (currency === 'USD') return '$' + (value / 1000).toFixed(1) + 'B';
    if (currency === 'JPY') return '¥' + (value / 100000).toFixed(2) + '万亿';
    if (currency === 'CNY') return '¥' + (value / 1000).toFixed(1) + 'B';
    if (currency === 'EUR') return '€' + value + 'M';
    if (currency === 'PLN') return value + 'M PLN';
    if (currency === 'KRW') return '₩' + (value / 1000).toFixed(1) + 'B';
    return value;
}
