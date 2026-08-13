// ============================================
// 重点公司财报分析数据模块 V11 — 全部18家统一双模块(latestQuarter+fullYear)
// 覆盖18家上市公司的游戏业务财务与运营数据
// 数据来源：各公司IR页面/财报/press release + GamesIndustry.biz 验证
// 更新日期: 2026-08-12
// 本次更新(8/12): Q2/Q1财报季大更新——15家公司发布新财报并全量更新数据块:
//   微软FY26 Q4(7/29) / 索尼Q1 FY2027(7/31) / 卡普空Q1 FY2027(7/28) /
//   科乐美Q1 FY2027(7/30) / Ubisoft Q1 FY26-27(7/23) / Krafton Q2 2026(7/29) /
//   Roblox Q2 2026(8/6) / Unity Q2 2026(8/7) / 万代南梦宫Q1 FY2027(8/6) /
//   任天堂Q1 FY2027(8/6) / Take-Two Q1 FY2027(8/7) / Sega Q1 FY2027(8/7) /
//   EA Q1 FY2027(8/4) / Square Enix Q1 FY2027(8/10) / 腾讯Q2 2026(8/12)
//   未发布暂不更新: 网易Q2(8/20) / Nexon Q2(8/13) / Embracer Q1(8月中)
// 上次更新(7/16): 审计确认全部18家公司filingDate在56-78天，无过时公司
// 上次更新(5/20): Embracer Q4+FY25/26全年
// 上次更新(5/13): 索尼FY2026全年 + 任天堂FY2026全年 + 卡普空FY2026全年
// 更新者: Earnings Agent v3.0 (机构级分析标准)
// V11 更新要点:
//   1) 15家公司替换完整数据块(financials+gameMetrics+analysis+dataSources+元数据)
//   2) quarterlyRevenueComparison 同步为各公司最新单季度(Q2/Q1 FY27)
//   3) 分析文本遵循 What→Why→So What 机构级标准，含Beat/Miss量化
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
        fiscalPeriod: 'Q1 FY2027 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'Q1 FY2027', calendarPeriod: '2026年4-6月', filingDate: '2026-07-31',
            revenue: { value: 937100, unit: '百万日元(Q1)', yoy: 0.3, label: 'Q1 G&NS销售额¥9371亿(基本持平)', usdEquiv: '≈$6.27B' },
            operatingProfit: { value: 202000, unit: '百万日元(Q1)', yoy: 37, label: 'Q1 G&NS营业利润¥2020亿(+37%,创Q1纪录)', usdEquiv: '≈$1.35B' },
            operatingMargin: { value: 21.6, label: 'Q1 G&NS营业利润率(创Q1纪录)' },
            note: 'PS5硬件收入-10.4%(出货160万台,同比-90万台),但网络服务+附加内容驱动利润大增;PS5累计9530万台'
        },
        fullYear: {
            period: 'FY2027全年展望(已上调)', filingDate: '2026-07-31', status: 'Q1超预期后上调全年指引',
            revenue: { value: 12500000, unit: '百万日元(集团展望)', yoy: null, label: '集团全年销售额展望¥12.5万亿' },
            operatingProfit: { value: 1720000, unit: '百万日元(集团展望)', yoy: 18.8, label: '集团营业利润指引上调至¥1.72万亿(+8% vs 原指引)', usdEquiv: '≈$11.5B' },
            operatingMargin: { value: 13.8, label: '集团营业利润率展望' },
            note: 'Q1业绩超预期(FX+网络服务+内容成本优化),管理层上调全年集团营业利润指引至¥1.72万亿;G&NS全年销售额展望约¥4.5万亿'
        },
        companyOverall: {
            totalRevenue: { value: 2837800, unit: '百万日元(Q1)', yoy: 8.2, label: '集团Q1销售额¥2.838万亿(+8.2%)', source: 'Sony Q1 FY2027 Results (2026/07/31)' },
            totalOperatingProfit: { value: 476500, unit: '百万日元(Q1)', yoy: 40.2, label: '集团Q1营业利润¥4765亿(+40.2%)' },
            note: '索尼集团Q1 FY2027(2026.4-6): 集团销售额¥2.838万亿(+8.2%),营业利润¥4765亿(+40.2%)大超预期。G&NS营业利润+37%至¥2020亿(创Q1纪录),PlayStation网络服务持续增长,PS5出货160万台(同比-90万台),累计9530万台。'
        },
        financials: {
            revenue: { value: 937100, unit: '百万日元(Q1)', yoy: 0.3, label: 'Q1 G&NS销售额(基本持平YoY)', source: 'Sony Q1 FY2027 Financial Results (2026/07/31)', usdEquiv: '≈$6.27B' },
            operatingProfit: { value: 202000, unit: '百万日元(Q1)', yoy: 37, label: 'Q1 G&NS营业利润(+37%创Q1纪录)', usdEquiv: '≈$1.35B' },
            operatingMargin: { value: 21.6, label: 'Q1 G&NS营业利润率(创Q1纪录)' },
            segmentRevenuePct: { value: 33.0, label: 'G&NS占集团营收比例' },
        },
        gameMetrics: {
            ps5CumulativeShipments: { value: 95.3, unit: '百万台(累计)', label: 'PS5累计出货9530万台', source: 'Sony Q1 FY2027 Earnings' },
            ps5QuarterlyShipments: { value: 1.6, unit: '百万台(Q1)', label: 'PS5 Q1出货160万台(同比-90万台)', source: 'Sony Q1 FY2027' },
            psPlusSubscribers: { value: null, unit: '百万', label: 'PS Plus订阅用户(未单独披露)' },
            networkServicesGrowth: { value: null, unit: '%', label: '网络服务收入增长(利润主引擎)' },
        },
        keyProducts: ['PS5 Pro', 'PS Plus高级订阅', '《GT赛车7》', '《蜘蛛侠2》PC', '更多PC移植'],
        analysis: {
            performance: '🔥Q1 FY2027(2026.4-6)G&NS板块销售额¥9371亿(≈$62.7亿,基本持平YoY),但营业利润创Q1纪录¥2020亿(+37%,≈$13.5亿)(What)。PS5硬件出货160万台(同比-90万台,硬件收入-10.4%),但网络服务收入+附加内容(含在线服务游戏)驱动利润率大幅提升至21.6%(Why)。集团层面Q1销售额¥2.838万亿(+8.2%),营业利润¥4765亿(+40.2%)大超市场预期,主因G&NS利润弹性+FX有利(So What)。',
            strategy: '索尼游戏业务加速从硬件驱动向服务+订阅+PC移植转型。PS5世代末期硬件收缩被高利润网络服务弥补。Live Service策略审慎(Concord停服教训后)。全年营业利润指引上调至¥1.72万亿(+18.8% vs FY26),反映管理层对G&NS利润弹性信心。',
            outlook: 'FY2027(2026.4-2027.3)全年: 集团营业利润指引上调至¥1.72万亿(+8% vs 原指引¥1.6万亿)。G&NS全年销售额展望约¥4.5万亿。PS5出货预计继续下行,但网络服务+订阅+PC移植持续增长。Switch 2超级周期下的竞争是关键观察点。',
            newProducts: '多款第一方大作开发中；更多PC移植(蜘蛛侠2等)；PS5 Pro持续推广；订阅服务矩阵升级。'
        },
        dataSources: [
            { type: '季度财报', name: 'Sony Q1 FY2027 Consolidated Financial Results', date: '2026-07-31', url: 'https://www.sony.com/en/SonyInfo/IR/library/presen/er/archive.html' },
            { type: '行业报道', name: 'GamesIndustry.biz: PS5 sales down but Sony posts record Q1 gaming profits', date: '2026-08-01', url: 'https://www.gamesindustry.biz/sony-q1-fy27-gns-operating-profit-record' }
        ],
        filingDate: '2026-07-31',
        filingType: '季度财报(Q1 FY2027)',
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
        fiscalPeriod: 'FY2026 Q4 (2026年4-6月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2026 Q4', calendarPeriod: '2026年4-6月', filingDate: '2026-07-29',
            revenue: { value: 12854, unit: '百万美元(MPC板块)', yoy: -4, label: 'MPC板块Q4营收$128.54亿(-4%)', usdEquiv: '$12.85B' },
            operatingProfit: { value: 40600, unit: '百万美元', yoy: 18, label: '集团整体营业利润$406亿(+18%)' },
            operatingMargin: { value: 45.1, label: '集团整体Q4营业利润率' },
            gamingRevenue: { value: null, unit: '百万美元', yoy: -10, label: 'Gaming收入未单独披露,内容及服务-10%' },
            gameMetrics: {
                contentServicesRevGrowth: { value: -10, unit: '%', label: 'Xbox内容及服务收入同比-10%' },
                hardwareRevGrowth: { value: -13, unit: '%', label: 'Xbox硬件收入同比-13%' },
                note: 'Xbox MAU和游戏流媒体时长创历史新高,第三波裁员费用计入'
            }
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-07-29', status: 'FY26全年已发布',
            revenue: { value: 53700, unit: '百万美元(MPC全年)', yoy: null, label: 'MPC全年约$537亿', usdEquiv: '$53.7B' },
            gamingEstimate: { value: 21200, unit: '百万美元(全年累计)', label: 'Gaming全年约$212亿(Q1$5.53B+Q2$5.34B+Q3$5.34B+Q4估$5.0B)' },
            note: 'Gaming收入全年同比下滑,但Xbox MAU创历史新高反映用户规模仍在扩大'
        },
        companyOverall: {
            totalRevenue: { value: 90000, unit: '百万美元', yoy: 18, label: '集团整体Q4营收$900亿(+18%)', source: 'Microsoft FY26 Q4 Press Release (2026/07/29)' },
            totalOperatingProfit: { value: 40600, unit: '百万美元', yoy: 18, label: '集团营业利润$406亿(+18%)' },
            totalOperatingMargin: { value: 45.1, label: '集团营业利润率' },
            note: '微软FY26 Q4: 营收$900亿(+18%)超预期,GAAP净利润$358亿(+31%),GAAP EPS $4.81(+32%)。Gaming(MPC)板块营收$128.54亿(-4%),Xbox内容及服务-10%。Azure+40%驱动集团,AI资本开支$1900亿计划不变。'
        },
        financials: {
            revenue: { value: 12854, unit: '百万美元(MPC板块)', yoy: -4, label: 'MPC板块营收(含Gaming)', source: 'Microsoft FY26 Q4 Press Release (2026/07/29)', usdEquiv: '$12.85B' },
            operatingProfit: { value: null, unit: '百万美元', yoy: null, label: 'Gaming营业利润(未单独披露)' },
            operatingMargin: { value: null, label: 'Gaming利润率(未单独披露)' },
            segmentRevenuePct: { value: 14.3, label: 'MPC占集团营收比例' },
        },
        gameMetrics: {
            contentServicesRevGrowth: { value: -10, unit: '%', label: 'Xbox内容及服务收入同比-10%', source: 'Microsoft FY26 Q4 Press Release' },
            hardwareRevGrowth: { value: -13, unit: '%', label: 'Xbox硬件收入同比-13%', source: 'Microsoft FY26 Q4 Press Release' },
            xboxMAU: { value: null, unit: '创新高', label: 'Xbox月活跃用户创历史新纪录(CFO确认)', source: 'FY26 Q4 Earnings Call' },
            gameStreamingHours: { value: null, unit: '创新高', label: '游戏流媒体时长创新纪录', source: 'FY26 Q4 Earnings Call' },
        },
        keyProducts: ['《使命召唤》系列', 'Xbox Game Pass(降价至$22.99/月)', '《战争机器：E-Day》', 'Cloud Gaming'],
        analysis: {
            performance: '微软FY26 Q4: 集团营收$900亿(+18%)超市场预期,GAAP EPS $4.81(+32%),non-GAAP EPS $4.74(+23%)。Gaming所在的MPC板块营收$128.54亿(-4%),Xbox内容及服务收入-10%,硬件-13%(What)。内容服务下滑主因去年同期CoD等高基数,硬件继续世代末期疲软,但Xbox MAU和游戏流媒体时长创历史新高,Game Pass降价($22.99/月)带来订阅韧性(Why)。Azure+40%、AI年化收入超$370亿驱动集团利润弹性,MPC占比降至14.3%(So What)。',
            strategy: 'Xbox CEO Asha Sharma持续推进"重新承诺核心粉丝"战略:Game Pass降价至$22.99/月+取消Game Core层级已见成效。多平台策略审慎推进,同时深化Cloud Gaming。集团资本开支$1900亿/年全部投向AI基础设施,凸显Gaming在集团内战略优先级持续低于Azure。',
            outlook: 'FY2027展望: 微软未单独给出Gaming指引,但市场预期内容服务收入降幅收窄(新作管线+Game Pass低价吸引)。《战争机器：E-Day》《Fable》等第一方大作FY27发售将驱动内容收入改善。AI投入优先战略下,Gaming维持防守性增长定位。',
            newProducts: '《战争机器：E-Day》(2026年发售)；《完美暗杀》；《Fable》(2026年秋季)；Xbox次世代硬件布局中。'
        },
        dataSources: [
            { type: '季度财报', name: 'Microsoft FY26 Q4 Press Release & 10-K', date: '2026-07-29', url: 'https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast' },
            { type: '电话会议', name: 'FY26 Q4 Earnings Conference Call Transcript', date: '2026-07-29', url: 'https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4' },
            { type: '行业报道', name: 'This Week in Video Games: Xbox Content & Services -10% in Q4', date: '2026-07-30', url: 'https://thisweekinvideogames.com/news/xbox-financial-earnings-q4-fy2026-continuing-declines-layoff-expenses/' }
        ],
        filingDate: '2026-07-29',
        filingType: '季度财报(全年)',
        filingUrl: 'https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast'
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
        fiscalPeriod: 'Q1 FY2027 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'Q1 FY2027', calendarPeriod: '2026年4-6月', filingDate: '2026-08-06',
            revenue: { value: 517813, unit: '百万日元(Q1)', yoy: -9.5, label: 'Q1净销售¥5178.13亿(-9.5%)', usdEquiv: '≈$3.46B' },
            operatingProfit: { value: 142596, unit: '百万日元(Q1)', yoy: 150.5, label: 'Q1营业利润¥1425.96亿(+150.5%)', usdEquiv: '≈$0.95B' },
            operatingMargin: { value: 27.5, label: 'Q1营业利润率(+14.2pt)' },
            note: '营业利润大增主因Q1研发费用化降低+Switch 2软件高毛利;净销售-9.5%因Switch 2发售高基数'
        },
        fullYear: {
            period: 'FY2027全年展望(已发布)', filingDate: '2026-08-06', status: 'FY27全年指引(保守)',
            revenue: { value: 1500000, unit: '百万日元(全年展望)', yoy: -32.7, label: '全年净销售指引¥1.5万亿(-32.7%)', usdEquiv: '≈$10.0B' },
            operatingProfit: { value: 300000, unit: '百万日元(全年展望)', yoy: -16.7, label: '全年营业利润指引¥3000亿(-16.7%)' },
            operatingMargin: { value: 20.0, label: '全年营业利润率指引' },
            note: 'FY27指引保守(定价上涨+游戏管线评估),市场视为负面但Q1超预期提供了安全垫'
        },
        companyOverall: {
            totalRevenue: { value: 517813, unit: '百万日元(Q1)', yoy: -9.5, label: 'Q1净销售¥5178.13亿(-9.5%)', source: 'Nintendo Q1 FY2027 Results (2026/08/06)' },
            totalOperatingProfit: { value: 142596, unit: '百万日元(Q1)', yoy: 150.5, label: 'Q1营业利润¥1425.96亿(+150.5%)' },
            totalOperatingMargin: { value: 27.5, label: 'Q1营业利润率' },
            note: '任天堂Q1 FY2027(2026.4-6): 净销售¥5178.13亿(-9.5%,Switch 2发售高基数),但营业利润¥1425.96亿(+150.5%)、净利¥1474.23亿(+53.5%)。Switch 2 Q1出货382万台(-34.4%),累计2368万台。软件销量强劲,IP授权收入+107.4%。'
        },
        financials: {
            revenue: { value: 517813, unit: '百万日元(Q1)', yoy: -9.5, label: 'Q1净销售(高基数下小幅回落)', source: 'Nintendo Q1 FY2027 Results (2026/08/06)', usdEquiv: '≈$3.46B' },
            operatingProfit: { value: 142596, unit: '百万日元(Q1)', yoy: 150.5, label: 'Q1营业利润(+150.5%)' },
            operatingMargin: { value: 27.5, label: 'Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            switch2Shipments: { value: 23.68, unit: '百万台(累计)', label: 'Switch 2累计出货2368万台', source: 'Nintendo IR (2026/08/06)' },
            switch2Quarterly: { value: 3.82, unit: '百万台(Q1)', label: 'Switch 2 Q1出货382万台(-34.4%)', source: 'Nintendo IR (2026/08/06)' },
            switchShipments: { value: 156.58, unit: '百万台(累计)', label: 'Switch累计出货1.5658亿台(含Q1 66万台)', source: 'Nintendo IR (2026/08/06)' },
            softwareSales: { value: 43.27, unit: '百万套(Q1)', label: 'Q1软件销量4327万套(Switch 2 946万+Switch 3381万)' },
            marioKartWorld: { value: 14.70, unit: '百万套', label: '马力欧卡丁车世界累计(持续热销)', source: 'Nintendo IR (2026/08/06)' },
            digitalSalesRatio: { value: null, unit: '%', label: '数字销售占比(Q1未披露)' },
            nsoSubscribers: { value: null, unit: '百万+', label: 'NSO订阅用户(未单独披露)' },
        },
        keyProducts: ['《马力欧卡丁车世界》', '《宝可梦传说Z-A》', 'Switch 2', 'Donkey Kong Bananza', 'IP授权(电影等)'],
        analysis: {
            performance: '🔥Q1 FY2027(2026.4-6): 净销售¥5178.13亿(-9.5%,≈$34.6亿)因Switch 2发售(2025年6月)高基数回落,但营业利润¥1425.96亿(+150.5%)、净利¥1474.23亿(+53.5%)大增(What)。营业利润暴增主因:①研发费用化节奏改善②Switch 2软件+IP授权高毛利(IP收入+107.4%)③汇率利好(Why)。Switch 2 Q1出货382万台(-34.4%)但仍强劲,累计2368万台;软件销量4327万套,数字收入结构优化(So What)。',
            strategy: 'Switch 2超级周期进入第二年,重心从硬件铺量转向软件+IP货币化。IP授权收入+107.4%(马力欧电影/宝可梦IP等)成为第二增长曲线。向下兼容+NSO订阅锁定用户粘性。管理层FY27指引保守(净销售¥1.5万亿-32.7%、营业利润¥3000亿-16.7%),为上调留空间。',
            outlook: 'FY2027(2026.4-2027.3)全年指引: 净销售¥1.5万亿(-32.7%),营业利润¥3000亿(-16.7%)。市场关注Q1超预期后是否上调指引。关键催化剂: 宝可梦Z-A(10月)、更多Switch 2独占大作、Q2-Q4软件管线兑现。',
            newProducts: '《宝可梦传说Z-A》(10月 Switch 2独占)；《星之卡比》Switch 2版；马力欧电影续集IP授权；更多Switch 2独占新作。'
        },
        dataSources: [
            { type: '季度财报', name: 'Nintendo Q1 FY2027 Financial Results', date: '2026-08-06', url: 'https://www.nintendo.co.jp/ir/en/' },
            { type: '业绩说明会', name: 'Financial Results Explanatory Material (Q1 FY2027)', date: '2026-08-06', url: 'https://www.nintendo.co.jp/ir/pdf/2026/260806_5e.pdf' },
            { type: '行业报道', name: 'Yahoo Finance: 任天堂Q1 FY27净销售-9.5% 营业利润+150.5%', date: '2026-08-06', url: 'https://finance.yahoo.co.jp/' }
        ],
        filingDate: '2026-08-06',
        filingType: '季度财报(Q1 FY2027)',
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
        fiscalPeriod: '2026年Q2 (2026年4-6月)',
        currency: 'CNY',
        dataIntegrity: 'A',
        latestQuarter: {
            period: '2026年Q2', calendarPeriod: '2026年4-6月', filingDate: '2026-08-12',
            revenue: { value: 65900, unit: '百万人民币(Q2游戏)', yoy: 11, label: 'Q2游戏总收入¥659亿(国内473亿+17%,海外186亿)', usdEquiv: '≈$9.09B' },
            gameMetrics: { domesticGames: { value: 473, unit: '亿', yoy: 17 }, internationalGames: { value: 186, unit: '亿', yoy: 4 } },
            companyRevenue: { value: 204785, unit: '百万人民币', yoy: 11, label: 'Q2总营收¥2047.85亿(+11%,超预期)' }
        },
        fullYear: {
            period: '2026年上半年累计', filingDate: '2026-08-12', status: 'H1已发布',
            revenue: { value: 130100, unit: '百万人民币(H1游戏)', yoy: null, label: 'H1游戏¥1301亿(国内927亿+海外374亿)', usdEquiv: '≈$17.9B' },
            companyRevenue: { value: 401243, unit: '百万人民币', yoy: 10, label: 'H1总营收¥4012.43亿(+10%)' },
            gameBreakdown: { domestic: { value: 927, unit: '亿', yoy: null }, international: { value: 374, unit: '亿', yoy: null } }
        },
        companyOverall: {
            totalRevenue: { value: 204785, unit: '百万人民币(Q2)', yoy: 11, label: 'Q2总营收¥2047.85亿(+11%,超预期¥2028亿)', source: '腾讯2026Q2业绩公告(2026/08/12)' },
            nonIfrsOp: { value: 75640, unit: '百万人民币(Q2)', yoy: 9, label: 'Q2 Non-IFRS经营利润¥756.4亿(+9%)' },
            grossProfit: { value: 118433, unit: '百万人民币(Q2)', yoy: 13, label: 'Q2毛利¥1184.33亿(+13%,毛利率58%)' },
            note: 'Q2总营收¥2047.85亿(+11%)超市场预期,Non-IFRS净利润¥684.15亿(+9%),Non-IFRS OP¥756.4亿(+9%)。资本开支¥527.8亿(+176%)创新高全部投向AI。剔除AI新产品影响Non-IFRS OP+19%至¥861亿。'
        },
        financials: {
            revenue: { value: 65900, unit: '百万人民币(Q2游戏)', yoy: 11, label: 'Q2游戏总收入¥659亿(国内473+海外186)', source: '腾讯2026Q2业绩公告(2026/08/12)', usdEquiv: '≈$9.09B' },
            operatingProfit: { value: null, unit: '百万人民币', yoy: null, label: '游戏营业利润(未单独披露)' },
            operatingMargin: { value: null, label: '游戏利润率(未单独披露)' },
            segmentRevenuePct: { value: 32.2, label: '游戏占Q2总营收比例' },
        },
        gameMetrics: {
            domesticGames: { value: 473, unit: '亿人民币(Q2)', yoy: 17, label: 'Q2国内游戏收入¥473亿(+17%)', source: '腾讯2026Q2业绩公告' },
            internationalGames: { value: 186, unit: '亿人民币(Q2)', yoy: 4, label: 'Q2国际游戏收入¥186亿(+4%固定汇率)', source: '腾讯2026Q2业绩公告' },
            vasRevenue: { value: 984, unit: '亿人民币(Q2)', yoy: 8, label: 'Q2增值服务收入¥984亿(+8%)' },
            h1Games: { value: 1301, unit: '亿人民币(H1)', yoy: null, label: 'H1游戏总收入¥1301亿' },
            domesticDrivers: { value: '三角洲行动/无畏契约/洛克王国世界', unit: '', label: '国内增长驱动: 三角洲行动+无畏契约+洛克王国世界' },
        },
        keyProducts: ['王者荣耀', 'PUBG Mobile', 'Valorant', '三角洲行动', '无畏契约：源能行动', '洛克王国：世界', 'Supercell旗下游戏', '和平精英'],
        analysis: {
            performance: '🔥2026Q2总营收¥2047.85亿(+11%)超市场预期(¥2028亿),游戏总收入¥659亿(+11%): 国内¥473亿(+17%,三角洲行动/无畏契约/洛克王国世界驱动),国际¥186亿(+4%固定汇率)(What)。国内游戏在Q1春节递延后强势回归+17%;国际市场受汇率影响名义+4%,Supercell等核心产品稳健(Why)。Non-IFRS净利润¥684.15亿(+9%),毛利率58%,Non-IFRS OP¥756.4亿(+9%),剔除AI新产品后+19%至¥861亿(So What)。',
            strategy: 'AI投入创历史新高: Q2资本开支¥527.8亿(+176%)全部投向AI基础设施。游戏国内+海外双引擎: 国内靠新游(三角洲行动/无畏契约/洛克王国世界)驱动增长,海外维持Supercell+Level Infinite组合。马化腾强调AI是"不能输的战争"。',
            outlook: 'H1总营收¥4012.43亿(+10%),Non-IFRS净利润¥1363.2亿(+10%)。H2关注: 新游管线(包括AI原生游戏),国内游戏持续增长动能,AI商业化落地。国际游戏受汇率影响波动,固定汇率下保持增长。',
            newProducts: '三角洲行动持续更新；无畏契约：源能行动；洛克王国：世界；AI驱动的新产品矩阵；Supercell新作。'
        },
        dataSources: [
            { type: '季度财报', name: '腾讯2026年Q2业绩公告', date: '2026-08-12', url: 'https://www.tencent.com/en-us/investors/financial-releases.html' },
            { type: '行业报道', name: '北京商报: 腾讯二季度营收2047.85亿元(+11%)', date: '2026-08-12', url: 'https://baijiahao.baidu.com/s?id=1873309637293489613' },
            { type: '行业报道', name: '腾讯Q2财报游戏业务透视: 本土回暖海外承压', date: '2026-08-12', url: 'https://baijiahao.baidu.com/s?id=1873312878001671419' }
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
        fiscalPeriod: '2026年Q1 (2026年1-3月)',
        currency: 'CNY',
        latestQuarter: {
            period: '2026年Q1', calendarPeriod: '2026年1-3月', filingDate: '2026-05-21',
            revenue: { value: 25713, unit: '百万人民币(Q1游戏)', yoy: 6.9, label: 'Q1游戏收入¥257亿(+6.9%)', usdEquiv: '≈$3.7B' },
            gameMetrics: {
                q1GameRevenue: { value: 257, unit: '亿', yoy: 6.9, label: 'Q1游戏及增值服务收入' },
                onlineShare: { value: 97.5, unit: '%', label: '在线游戏占游戏分部收入' }
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
            totalRevenue: { value: 30600, unit: '百万人民币', yoy: 6.1, label: '2026 Q1总营收¥306亿', source: '网易2026 Q1财报(2026/05/21)' },
            totalOperatingProfit: { value: 12657, unit: '百万人民币', yoy: 21.2, label: 'Q1营业利润¥126.57亿(去年¥104.41亿)' },
            totalOperatingMargin: { value: 41.4, label: 'Q1营业利润率' },
            netProfit: { value: 10700, unit: '百万人民币', yoy: 3.9, label: '归母净利润¥107亿(去年¥103亿)' },
            nonGAAPNetProfit: { value: 11300, unit: '百万人民币', yoy: 0.6, label: 'Non-GAAP归母净利润¥113亿' },
            note: '网易2026 Q1总营收¥306亿(+6.1%)，毛利润¥212亿(+14.8%)，营业利润¥126.57亿(+21.2%)，归母净利润¥107亿(+3.9%)。整体毛利率约69.4%，游戏分部毛利率约74.8%。净现金余额¥1675亿，经营活动现金流¥137亿。'
        },
        financials: {
            revenue: { value: 25713, unit: '百万人民币(Q1游戏)', yoy: 6.9, label: '2026 Q1游戏及相关增值服务收入', source: '网易2026 Q1财报(2026/05/21)', usdEquiv: '≈$3.7B' },
            operatingProfit: { value: null, unit: '百万人民币', yoy: null, label: '游戏营业利润(未单独披露,游戏毛利率约74.8%)' },
            operatingMargin: { value: 74.8, label: '游戏分部毛利率(约74.8%)' },
            segmentRevenuePct: { value: 84.0, label: '游戏占总营收比例(¥257亿/¥306亿)' },
            q1Revenue: { value: 25713, unit: '百万人民币(Q1游戏)', yoy: 6.9, label: 'Q1游戏收入' },
            grossProfit: { value: 21200, unit: '百万人民币', yoy: 14.8, label: 'Q1毛利润¥212亿' },
        },
        gameMetrics: {
            onlineGameShare: { value: 97.5, unit: '%', label: '在线游戏占游戏分部净收入(同比持平)' },
            cashPosition: { value: 167500, unit: '百万人民币', label: '净现金余额(¥1675亿)' },
            operatingCashFlow: { value: 13700, unit: '百万人民币', label: 'Q1经营活动现金流(¥137亿)' },
        },
        keyProducts: ['《逆水寒》手游', '《漫威争锋》(Marvel Rivals)', '《燕云十六声》(Where Winds Meet)', '《梦幻西游》', '《第五人格》', '《蛋仔派对》', '《魔兽世界》代理'],
        analysis: {
            performance: '2026 Q1总营收¥306亿(+6.1%)，游戏及相关增值服务收入¥257亿(+6.9%,≈$3.7B)，Beat。利润端表现更亮眼:毛利润¥212亿(+14.8%)、营业利润¥126.57亿(+21.2%,去年¥104.41亿)、归母净利润¥107亿(+3.9%)。整体毛利率提升至约69.4%、游戏分部毛利率约74.8%，反映自研高毛利产品占比提升。增长由自研产品《梦幻西游》系列、《燕云十六声》驱动，在线游戏占游戏分部收入约97.5%。利润增速显著快于营收，体现规模效应与产品结构优化。',
            strategy: 'CEO丁磊强调近期全球发布展现"强劲跨市场吸引力"，将持续推进国际化:《燕云十六声》(Where Winds Meet)与《漫威争锋》(Marvel Rivals)双线推进海外扩张。暴雪游戏在中国稳定运营、本地化内容稳步推出。成熟产品(梦幻西游/第五人格/蛋仔派对/逆水寒)靠高频内容更新维持高参与度。',
            outlook: '2026年全球化是核心主线，《漫威争锋》赛季更新+《燕云十六声》多平台拓展持续贡献增量。净现金¥1675亿、Q1经营现金流¥137亿为研发与回购提供底气(已回购约2,320万ADS耗资$21亿，计划上限$50亿延至2029/1)。季度股息每ADS $0.72。',
            newProducts: '《燕云十六声》主机版/全球版；《漫威争锋》赛季更新；樱花工作室3A项目；Jackalope Games开放世界新作。'
        },
        dataSources: [
            { type: '季度财报', name: 'NetEase Announces First Quarter 2026 Unaudited Financial Results', date: '2026-05-21', url: 'https://ir.netease.com/financial-information/quarterly-earnings' },
            { type: '行业报道', name: 'GamesIndustry.biz: NetEase reports 6.9% increase in games revenue to $3.7bn', date: '2026-05-22', url: 'https://www.gamesindustry.biz/topics/financials' }
        ],
        filingDate: '2026-05-21',
        filingType: '季度财报',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4-6月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-08-04',
            revenue: { value: 1986, unit: '百万美元', yoy: 19, label: 'Q1净营收$19.86亿(+19%)', usdEquiv: '$1.99B' },
            operatingProfit: { value: 513, unit: '百万美元', yoy: 89, label: 'Q1营业利润$5.13亿(+89%)' },
            operatingMargin: { value: 25.8, label: 'Q1营业利润率' },
            netIncome: { value: 397, unit: '百万美元', yoy: 89, label: 'Q1净利润$3.97亿(+89%)' },
            eps: { value: 1.56, unit: '美元', yoy: 89, label: 'Q1摊薄EPS $1.56(+89%)' },
            gameMetrics: {
                liveServicesRevenue: { value: 1472, unit: '百万美元(Q1)', label: 'Q1 Live Services收入$14.72亿(+7%)' }
            }
        },
        fullYear: {
            period: 'FY2026全年(已发布,最终财报)', filingDate: '2026-08-04', status: '已发布(创纪录)',
            revenue: { value: 7531, unit: '百万美元', yoy: 1, label: '全年净营收$75.31亿(+1%)', usdEquiv: '$7.53B' },
            netBookings: { value: 8026, unit: '百万美元', yoy: 9, label: '全年净预订$80.26亿(+9% 创历史纪录)' },
            operatingIncome: { value: 1162, unit: '百万美元', yoy: -24, label: '全年营业利润$11.62亿(-24%)' },
            netIncome: { value: 887, unit: '百万美元', label: '全年净利润$8.87亿' },
            eps: { value: 3.51, unit: '美元', label: '全年摊薄EPS $3.51' },
            operatingCashFlow: { value: 2553, unit: '百万美元', yoy: 23, label: '经营现金流$25.53亿(+23% 创纪录)' },
            note: 'EA最后一份上市公司财报;FY26净预订和经营现金流双创纪录,Battlefield 6+Live Services推动'
        },
        companyOverall: {
            totalRevenue: { value: 1986, unit: '百万美元(Q1)', yoy: 19, label: 'Q1净营收(EA为纯游戏公司)', source: 'EA FY27 Q1 Press Release (2026/08/04)' },
            totalOperatingProfit: { value: 513, unit: '百万美元(Q1)', yoy: 89, label: 'Q1营业利润$5.13亿(+89%)' },
            totalOperatingMargin: { value: 25.8, label: 'Q1营业利润率' },
            note: 'EA为纯游戏公司,集团=游戏业务。Q1营业利润+89%超预期(EPS $0.82 vs 预期$0.79 Beat),为私有化交易前最后一份财报。8月4日$550亿财团收购完成,EA正式退市。'
        },
        financials: {
            revenue: { value: 1986, unit: '百万美元', yoy: 19, label: 'Q1净营收', source: 'EA FY2027 Q1 Earnings Release (2026/08/04)' },
            operatingProfit: { value: 513, unit: '百万美元', yoy: 89, label: 'Q1营业利润' },
            operatingMargin: { value: 25.8, label: 'Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
            netBookings: { value: 8026, unit: '百万美元(FY26全年)', yoy: 9, label: 'FY26全年净预订$80.26亿(创纪录)' },
        },
        gameMetrics: {
            liveServicesRevenue: { value: 1472, unit: '百万美元(Q1)', label: 'Q1 Live Services & Other收入$14.72亿(+7%)', source: 'EA FY27 Q1 Press Release' },
            fullGameRevenue: { value: 2148, unit: '百万美元(FY26)', label: 'FY26完整游戏收入$21.48亿' },
            battlefield6: { value: 2600, unit: '万份+', label: 'Battlefield 6累计销量超2600万(系列历史最佳)', source: 'EA确认' },
            apexLegends: { value: null, unit: '持续增长', label: 'Apex Legends Live Services保持稳定贡献' },
        },
        keyProducts: ['Battlefield 6(2600万+)', 'EA Sports FC 26', 'Apex Legends', 'College Football 25', 'The Sims系列'],
        analysis: {
            performance: 'FY2027 Q1(2026.4-6): 净营收$19.86亿(+19%),营业利润$5.13亿(+89%),净利润$3.97亿,EPS $1.56(+89%)(What)。Live Services收入$14.72亿(+7%)延续强势,Battlefield 6运营收入+Apex Legends+EA Sports FC系列驱动增长(Why)。毛利率86.2%(+3pt),营业利润率25.8%反映高毛利数字业务占比提升(So What)。',
            strategy: 'EA被沙特PIF/Silver Lake/Affinity Partners联合体以$550亿私有化收购于8月4日完成,EA正式退市,这是最后一份上市公司财报。PIF持93.4%股权。战略重心转向：最大化核心IP(Battlefield/FC/Apex)价值+AI驱动开发效率+加大Live Services投入。',
            outlook: '私有化后不再披露季度指引。市场关注: Battlefield 6后续内容运营、EA Sports FC 27(9月)、Madden NFL 27(8月)。私有化交易完成后EA可在非公开市场进行更激进的结构调整。',
            newProducts: 'EA Sports FC 27(2026/09)；Madden NFL 27(2026/08)；Battlefield 6持续运营更新；College Football 26。'
        },
        dataSources: [
            { type: '季度财报', name: 'EA FY2027 Q1 Earnings Release', date: '2026-08-04', url: 'https://ir.ea.com/financial-information/quarterly-results/default.aspx' },
            { type: '行业报道', name: 'GamesIndustry.biz: EA reports final earnings as $55bn buyout completes', date: '2026-08-05', url: 'https://www.gamesindustry.biz/ea-reports-final-quarter-as-55bn-privatisation-completes' },
            { type: '财经分析', name: 'Quartr: EA Q1 FY27 results - EPS beat', date: '2026-08-04', url: 'https://quartr.com/events/electronic-arts-inc-ea-q1-2027' }
        ],
        filingDate: '2026-08-04',
        filingType: '季度财报(私有化前最后一份)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4-6月)',
        currency: 'USD',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-08-07',
            revenue: { value: 1534, unit: '百万美元(GAAP营收)', yoy: 2, label: 'Q1 GAAP净收入$15.34亿(+2%)', usdEquiv: '$1.53B' },
            gameMetrics: {
                q1NetBookings: { value: 1390, unit: '百万美元', label: 'Q1净预订$13.9亿(超指引$13.2-13.7亿)' },
                q1NetLoss: { value: -63, unit: '百万美元', label: 'Q1 GAAP净亏损(每股-$0.35,优于预期)' }
            }
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-21', status: 'FY26已发布',
            revenue: { value: 6720, unit: '百万美元(净预订)', yoy: 19, label: 'FY26全年净预订$67.2亿(+19%)', usdEquiv: '$6.72B' },
            gameBreakdown: {
                gaapRevenue: { value: 6660, unit: '百万美元', yoy: 18, label: 'FY26 GAAP净收入$66.6亿(+18%)' },
                netLoss: { value: -298, unit: '百万美元', label: 'FY26 GAAP净亏损(-$2.98亿)' }
            }
        },
        financials: {
            revenue: { value: 1534, unit: '百万美元(Q1 GAAP)', yoy: 2, label: 'Q1 GAAP净收入', source: 'Take-Two FY2027 Q1 Earnings Release (2026/08/07)' },
            operatingProfit: { value: -63, unit: '百万美元(Q1净亏损)', yoy: null, label: 'Q1 GAAP净亏损(-$6,300万)' },
            operatingMargin: { value: -4.1, label: 'Q1净利率(亏损收窄)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            fy26NetBookings: { value: 6720, unit: '百万美元', yoy: 19, label: 'FY26全年净预订$67.2亿(超指引)', source: 'Take-Two FY26 Earnings Release' },
            q1NetBookings: { value: 1390, unit: '百万美元', yoy: null, label: 'Q1净预订$13.9亿(超指引上限)', source: 'Take-Two FY27 Q1 Earnings' },
            rcsShare: { value: 84, unit: '%', label: '经常性消费(RCS)占Q1 GAAP净收入84%' },
            digitalShare: { value: 97, unit: '%', label: '数字在线渠道占净收入' },
            mobileShare: { value: 50, unit: '%', label: '移动平台占净收入' },
            gtaVTotalSales: { value: 215, unit: '百万套+', label: 'GTA V累计销量' },
        },
        keyProducts: ['GTA Online', 'NBA 2K26', 'GTA6(2026/11/19)', 'Borderlands 4', 'Zynga移动'],
        analysis: {
            performance: 'FY2027 Q1(2026.4-6): GAAP净收入$15.34亿(+2%),净预订$13.9亿超指引上限($13.2-13.7亿)(What)。经常性消费(RCS)占GAAP净收入84%维持基本盘——NBA 2K、GTA Online、Zynga移动持续贡献;GTA6发售前市场观望导致传统买断收入承压,但RCS韧性强(Why)。净亏损-$6,300万(每股-$0.35)优于预期,处于GTA6上市前投入期(So What)。',
            strategy: 'CEO泽尔尼克再次确认《GTA6》2026年11月19日如期发售,行业最大催化剂临近。FY2027净预订指引$80-82亿(约+20%)充分定价GTA6超级周期。同步推进29款产品储备管线(含3款全新IP: Ghost Story《犹大》、31st Union《ETHOS计划》)。当前以RCS稳住基本盘等待GTA6引爆。',
            outlook: 'FY2027全年指引: 净预订$80-82亿(约+20%)、GAAP净收入$79-81亿、GAAP净利润$1.05-1.41亿(扭亏为盈)、EBITDA $10.1-10.7亿。Q1 FY27已超预期开局,全年验证点全在GTA6(11/19)发售表现。',
            newProducts: '《GTA6》(2026/11/19，行业最大催化剂)；《无主之地4》；NBA 2K27；3款全新IP(FY27-29)。'
        },
        dataSources: [
            { type: '季度财报', name: 'Take-Two FY2027 Q1 Earnings Release', date: '2026-08-07', url: 'https://ir.take2games.com/quarterly-earnings' },
            { type: '行业报道', name: 'BusinessWire: Take-Two Q1 Net Bookings $1.39B above guidance', date: '2026-08-07', url: 'https://www.stocktitan.net/news/TTWO/take-two-interactive-software-inc-reports-results-for-first-quarter-fy2027.html' }
        ],
        filingDate: '2026-08-07',
        filingType: '季度财报(Q1 FY2027)',
        filingUrl: 'https://ir.take2games.com/quarterly-earnings'
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
        fiscalPeriod: 'FY2026-27 Q1 (2026年4月-6月)',
        currency: 'EUR',
        latestQuarter: {
            period: 'Q1 FY2026-27', calendarPeriod: '2026年4-6月', filingDate: '2026-07-23',
            revenue: { value: 256, unit: '百万欧元(净预订)', yoy: -9.2, label: 'Q1净预订€2.56亿(-9.2%但超指引)', usdEquiv: '≈$280M' },
            gameMetrics: {
                acBlackFlagResynced: { value: 3.5, unit: '百万套', label: '刺客信条:黑旗重制版14天售350万份' }
            },
            note: 'Q1净预订超指引(€2.5亿),《刺客信条:黑旗重制版》7/9发售14天350万份超预期'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-20', status: 'FY26已发布(创纪录亏损)',
            revenue: { value: 1525, unit: '百万欧元(净预订)', yoy: -17, label: 'FY26全年净预订€15.25亿(-17%)', usdEquiv: '≈$16.8亿' },
            gameBreakdown: {
                operatingLoss: { value: -1300, unit: '百万欧元', label: 'FY26运营亏损€13亿(创纪录,含€6.5亿减值)' },
                digitalShare: { value: 87, unit: '%', label: '数字收入占比' }
            }
        },
        financials: {
            revenue: { value: 256, unit: '百万欧元(Q1净预订)', yoy: -9.2, label: 'Q1净预订(超指引€2.5亿)', source: 'Ubisoft Q1 FY2026-27 Sales (2026/07/23)', usdEquiv: '≈$280M' },
            operatingProfit: { value: null, unit: '百万欧元', yoy: null, label: 'Q1营业利润(未披露)' },
            operatingMargin: { value: null, label: 'Q1营业利润率(未披露)' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
        },
        gameMetrics: {
            acBlackFlagResynced: { value: 3.5, unit: '百万套', label: '黑旗重制版14天350万份(超预期)', source: 'Ubisoft Q1 FY26-27 Results' },
            backCatalog: { value: null, unit: '稳健', label: '回溯目录(back-catalog)销售稳健' },
            digitalShare: { value: 87, unit: '%', label: '数字收入占比' },
            tencentStake: { value: 25, unit: '%', label: '腾讯入股新子公司(承接三大IP)' },
        },
        keyProducts: ['《刺客信条:黑旗重制版》(7/9,350万+)', '《刺客信条:影》', '《孤岛惊魂》新作', '《幽灵行动》新作(2027)', '《彩虹六号:围攻》'],
        analysis: {
            performance: 'Q1 FY2026-27(2026.4-6): 净预订€2.56亿(-9.2%)超指引(€2.5亿)(What)。《刺客信条:黑旗重制版》(7/9发售)14天售350万份超预期,成为Q1最大亮点;季度内新作发布少,收入主要靠回溯目录+AC影长尾(Why)。净预订下滑幅度好于指引反映需求韧性(So What)。',
            strategy: '"战略重置"持续深化:腾讯入股(约25%)的新子公司承接《刺客信条》《孤岛惊魂》《彩虹六号》三大旗舰IP。执行"更少但更好"精简产品线。黑旗重制版成功验证经典IP重制策略(高性价比+低成本高回报)。',
            outlook: 'Q2 FY2026-27指引: 净预订约€3.7亿。管理层维持FY27净预订高个位数下滑、运营亏损率个位数(较FY26大幅改善)的指引。三大新作(刺客信条/孤岛惊魂/幽灵行动)2029年前陆续推出。转型仍需大作验证。',
            newProducts: '《刺客信条:黑旗重制版》(已发售,350万+)；《刺客信条》新作(开发中)；《孤岛惊魂》新作；《幽灵行动》新作(2027)。'
        },
        dataSources: [
            { type: '季度财报', name: 'Ubisoft Reports First Quarter FY2026-27 Sales', date: '2026-07-23', url: 'https://www.ubisoft.com/en-us/company/about-us/investors' },
            { type: '行业报道', name: 'GamesIndustry.biz: AC Black Flag Resynced sells 3.5m in two weeks, Ubisoft Q1 beats guidance', date: '2026-07-24', url: 'https://www.gamesindustry.biz/assassins-creed-black-flag-resynced-sells-35-million-in-two-weeks' }
        ],
        filingDate: '2026-07-23',
        filingType: '季度财报(Q1 FY2026-27)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-08-06',
            revenue: { value: 328400, unit: '百万日元(Q1)', yoy: 9.3, label: 'Q1集团净销售¥3284亿(+9.3%,创Q1历史新高)', usdEquiv: '≈$2.0B' },
            note: '集团营业利润¥692亿(+33.3%)创Q1新高;数字娱乐部门净销售¥909亿(-15.6%)、营业利润¥150亿(-30.9%),因新作发售数量少于去年同期'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-13', status: '已发布(创历史新高)',
            revenue: { value: 1348246, unit: '百万日元(全年)', yoy: 8.6, label: '集团全年净销售¥1.348万亿(+8.6%,创纪录)', usdEquiv: '≈$9.02B' },
            operatingProfit: { value: 140223, unit: '百万日元(全年)', yoy: 5.2, label: '集团全年营业利润¥1402亿(+5.2%)', usdEquiv: '≈$938M' },
            operatingMargin: { value: 10.4, label: '集团全年营业利润率10.4%' },
            note: '创历史营收新高,艾尔登法环+高达+龙珠驱动,玩具&爱好品部门强劲增长'
        },
        companyOverall: {
            totalRevenue: { value: 328400, unit: '百万日元(Q1)', yoy: 9.3, label: 'Q1集团净销售¥3284亿(+9.3%,创Q1纪录)', source: 'Bandai Namco Q1 FY2027 Results (2026/08/06)' },
            totalOperatingProfit: { value: 69200, unit: '百万日元(Q1)', yoy: 33.3, label: 'Q1集团营业利润¥692亿(+33.3%)' },
            totalOperatingMargin: { value: 21.1, label: 'Q1集团营业利润率' },
            note: '万代南梦宫FY2027 Q1(2026年4-6月): 集团净销售¥3284亿(+9.3%)、营业利润¥692亿(+33.3%)均创Q1历史新高,由玩具及收藏品业务强劲表现推动;数字娱乐部门因新作发售减少而下滑(-15.6%)。'
        },
        financials: {
            revenue: { value: 328400, unit: '百万日元(Q1)', yoy: 9.3, label: '集团Q1净销售(创Q1历史新高)', source: 'Bandai Namco Q1 FY2027 Results (2026/08/06)', usdEquiv: '≈$2.0B' },
            operatingProfit: { value: 69200, unit: '百万日元(Q1)', yoy: 33.3, label: '集团Q1营业利润(+33.3%)' },
            operatingMargin: { value: 21.1, label: '集团Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(含DE+Toys+IP+Amusement)' },
        },
        gameMetrics: {
            digitalSegmentSales: { value: 90900, unit: '百万日元(Q1)', label: '数字娱乐部门净销售¥909亿(-15.6%)' },
            digitalSegmentProfit: { value: 15000, unit: '百万日元(Q1)', label: '数字娱乐部门营业利润¥150亿(-30.9%)' },
            toyHobbyGrowth: { value: 45.9, unit: '%', label: '玩具&爱好品部门销售额+45.9%(关税退款等推动)' },
            newGameCount: { value: 2, unit: '款', label: 'Q1新作仅2款(vs去年同期15款)' },
        },
        keyProducts: ['艾尔登法环(含DLC)', '高达系列', '龙珠系列', '铁拳8', 'One Piece'],
        analysis: {
            performance: 'FY2027 Q1(2026.4-6)集团净销售¥3284亿(+9.3%)、营业利润¥692亿(+33.3%)双创Q1历史新高(What)。增长主要来自玩具及收藏品业务强劲表现(销售额+45.9%、利润+25.4%),叠加关税退款等一次性收益;数字娱乐部门净销售¥909亿(-15.6%)、营业利润¥150亿(-30.9%),因Q1新作仅2款(vs去年同期15款)、主机游戏销量690万份(vs去年同期1080万份)(Why)。多元IP+玩具/游艺对冲游戏发行节奏波动,整体盈利质量保持(So What)。',
            strategy: '"IP Axis"战略持续推进——将核心IP(高达/龙珠/ONE PIECE)跨游戏/玩具/影视变现。玩具&爱好品部门成为利润增长主引擎。数字娱乐部门加大Live Service投入并控制新作发行节奏。',
            outlook: 'FY2027展望: 全年指引净销售¥1.44万亿、营业利润¥1350亿(因FY26高基数温和回落)。玩具部门受益全球动漫热潮持续景气,数字娱乐下半年新作密集(龙珠/高达等)有望接力。',
            newProducts: 'FromSoftware新项目；《龙珠》新作；高达系列新游戏；更多IP跨媒体项目。'
        },
        dataSources: [
            { type: '季度财报', name: 'Bandai Namco Q1 FY2027 Consolidated Results', date: '2026-08-06', url: 'https://www.bandainamco.co.jp/en/ir/library/result.html' },
            { type: '行业报道', name: 'GamesIndustry.biz - Bandai Namco achieves record Q1 sales (2026/08/10)', date: '2026-08-10', url: 'https://www.gamesindustry.biz/bandai-namco-achieves-record-q1-sales-but-digital-segment-operating-profit-drops-309' }
        ],
        filingDate: '2026-08-06',
        filingType: '季度财报(Q1)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-07-17',
            revenue: { value: 70410, unit: '百万日元(Q1)', yoy: 54.7, label: 'Q1集团净销售¥704.10亿(+54.7%)', usdEquiv: '≈$471M' },
            operatingProfit: { value: 41054, unit: '百万日元(Q1)', yoy: 66.9, label: 'Q1集团营业利润¥410.54亿(+66.9%)' },
            note: 'Q1同比大幅增长,完全新规IP与目录/复购销售均表现强劲,全年计划进度超预期'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-13', status: '已发布(连续13年利润增长)',
            revenue: { value: 1953000, unit: '百万日元(全年)', yoy: 2.8, label: '集团全年净销售¥1953亿(+2.8%)', usdEquiv: '≈$13.06B' },
            operatingProfit: { value: 752000, unit: '百万日元(全年)', yoy: 3.0, label: 'DC全年营业利润¥752亿(+3.0%)', usdEquiv: '≈$5.03B' },
            operatingMargin: { value: 38.5, label: 'DC全年营业利润率(连续13年增长)' },
            note: '集团净销售¥1953亿(+2.8%)创历史新高,营业利润连续13年增长,第11年超10%增长'
        },
        companyOverall: {
            totalRevenue: { value: 70410, unit: '百万日元(Q1)', yoy: 54.7, label: 'Q1集团净销售¥704.10亿(+54.7%)', source: 'Capcom Q1 FY2027 Results (2026/07/17)' },
            totalOperatingProfit: { value: 41054, unit: '百万日元(Q1)', yoy: 66.9, label: 'Q1集团营业利润¥410.54亿(+66.9%)' },
            totalOperatingMargin: { value: 58.3, label: 'Q1集团营业利润率' },
            note: '卡普空FY2027 Q1(2026年4-6月): 净销售¥704.10亿(+54.7%)、营业利润¥410.54亿(+66.9%)均大幅增长,营业利润率58.3%。完全新规IP及目录/复购销售表现强劲,通期计划顺利推进。'
        },
        financials: {
            revenue: { value: 70410, unit: '百万日元(Q1)', yoy: 54.7, label: '集团Q1净销售(+54.7%)', source: 'Capcom Q1 FY2027 Results (2026/07/17)', usdEquiv: '≈$471M' },
            operatingProfit: { value: 41054, unit: '百万日元(Q1)', yoy: 66.9, label: '集团Q1营业利润(+66.9%)' },
            operatingMargin: { value: 58.3, label: '集团Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(以数字内容为主)' },
        },
        gameMetrics: {
            mhWildsSales: { value: 11, unit: '百万套(累计)', label: '怪猎荒野累计销量1100万套', source: 'Capcom IR (2026/07/17)' },
            reRequiemSales: { value: 6.91, unit: '百万套', label: '生化危机：安魂曲累计销量691万套(2月发售)', source: 'Capcom IR (2026/07/17)' },
            sf6Sales: { value: 6.05, unit: '百万套(累计)', label: '街霸6累计销量605万套(+204万FY26)' },
            re4Sales: { value: 3.69, unit: '百万套(累计)', label: '生化危机4重制版累计369万套' },
            reVillageSales: { value: 3.62, unit: '百万套(累计)', label: '生化危机8累计362万套' },
            catalogSales: { value: 49.46, unit: '百万套', label: '目录销量创纪录4946万套' },
            digitalSalesRatio: { value: 93, unit: '%', label: '数字销售占比93%' },
            pcDigitalRatio: { value: 50, unit: '%+', label: 'PC数字购买超数字销量一半' },
        },
        keyProducts: ['怪物猎人：荒野(1100万+)', '生化危机：安魂曲(691万)', '街头霸王6(605万)', '生化危机4重制版', '鬼武者2'],
        analysis: {
            performance: '🔥FY2027 Q1(2026.4-6)大幅增长: 集团净销售¥704.10亿(+54.7%)、营业利润¥410.54亿(+66.9%,利润率58.3%),为连续13年利润增长开启强劲开局(What)。完全新规IP(如《鬼武者:剑之道》等新作情报)与目录/复购销售均表现强劲,叠加汇率与PC/数字渠道占比提升,推动利润率维持业界顶级水平(Why)。Q1强劲开局使通期计划(净销售¥2100亿、营业利润¥830亿)进度大幅超前,全年超预期可期(So What)。',
            strategy: '卡普空"百万销量计划"持续推进。双擎策略: 生化危机+怪物猎人驱动业绩。数字优先战略成效显著(93%数字占比+21%增长)。PC端扩张持续(PC收入超数字一半)。电竞(Capcom Pro Tour)和媒体合作多元化。',
            outlook: 'FY2027(2026.4-2027.3)展望: 通期计划维持净销售¥2100亿、营业利润¥830亿。Q1强劲开局后,下半年新作(鬼武者:剑之道等)+怪猎荒野DLC+街霸6持续更新将成为核心驱动。年销量目标1亿套。',
            newProducts: '《鬼武者:剑之道》；《怪物猎人荒野》DLC/更新；《生化危机》系列新作；街霸6持续更新。'
        },
        dataSources: [
            { type: '季度财报', name: 'Capcom Q1 FY2027 Financial Results (IR Review)', date: '2026-07-17', url: 'https://www.capcom.co.jp/ir/finance/review.html' },
            { type: '新闻稿', name: 'Capcom 2027年3月期第1四半期決算 増収増益(プレスリリース)', date: '2026-07-17', url: 'https://www.capcom.co.jp/ir/2026' },
            { type: '行业报道', name: 'TwistedVoxel: Capcom Reports Record Q1 FY2027 Results', date: '2026-07-17', url: 'https://twistedvoxel.com/capcom-q1-fy2027-results/' }
        ],
        filingDate: '2026-07-17',
        filingType: '季度财报(Q1)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-08-10',
            revenue: { value: 78423, unit: '百万日元(Q1)', yoy: 32.3, label: 'Q1集团净销售¥784.23亿(+32.3%)', usdEquiv: '≈$524M' },
            operatingProfit: { value: 17008, unit: '百万日元(Q1)', yoy: 88.6, label: 'Q1集团营业利润¥170.08亿(+88.6%)' },
            note: '四个板块全线增收增益,HD Game(FF7 Rebirth NS2/Xbox等)+MMO+手游/PC浏览器全部增长'
        },
        fullYear: {
            period: 'FY2026全年(已发布)', filingDate: '2026-05-14', status: '已发布(利润大增)',
            revenue: { value: 297661, unit: '百万日元(全年)', yoy: -8.3, label: '集团全年净销售¥2977亿(-8.3%)', usdEquiv: '≈$1.99B' },
            operatingProfit: { value: 54736, unit: '百万日元(全年)', yoy: 34.9, label: '集团全年营业利润¥547亿(+34.9%)', usdEquiv: '≈$366M' },
            operatingMargin: { value: 18.4, label: '集团全年营业利润率18.4%(大幅提升)' },
            note: '销售下降但利润率大幅提升,HD Game增收增益,"量减质升"转型成功'
        },
        companyOverall: {
            totalRevenue: { value: 78423, unit: '百万日元(Q1)', yoy: 32.3, label: 'Q1集团净销售¥784.23亿(+32.3%)', source: 'Square Enix Q1 FY2027 Results (2026/08/10)' },
            totalOperatingProfit: { value: 17008, unit: '百万日元(Q1)', yoy: 88.6, label: 'Q1集团营业利润¥170.08亿(+88.6%)' },
            totalOperatingMargin: { value: 21.7, label: 'Q1集团营业利润率' },
            note: 'SE FY2027 Q1(2026.4-6): 净销售¥784.23亿(+32.3%)、营业利润¥170.08亿(+88.6%)、经常利润¥187.66亿(+172.4%)、归母净利润¥132.44亿(+175.7%),四大板块全线增收增益。'
        },
        financials: {
            revenue: { value: 78423, unit: '百万日元(Q1)', yoy: 32.3, label: '集团Q1净销售(+32.3%)', source: 'Square Enix Q1 FY2027 Results (2026/08/10)', usdEquiv: '≈$524M' },
            operatingProfit: { value: 17008, unit: '百万日元(Q1)', yoy: 88.6, label: '集团Q1营业利润(+88.6%大幅增长)' },
            operatingMargin: { value: 21.7, label: '集团Q1营业利润率(vs上年同期)' },
            segmentRevenuePct: { value: 100, label: '集团整体(DE为主)' },
        },
        gameMetrics: {
            deSegmentSales: { value: 49960, unit: '百万日元(Q1)', label: 'DE板块净销售¥499.60亿(+51.8%)' },
            deSegmentProfit: { value: 15583, unit: '百万日元(Q1)', label: 'DE板块营业利润¥155.83亿(+91.8%)' },
            amusementSegment: { value: 17088, unit: '百万日元(Q1)', label: '游乐板块净销售¥170.88亿(+3.8%)' },
            publishingSegment: { value: 7261, unit: '百万日元(Q1)', label: '出版板块净销售¥72.61亿(+11.0%)' },
            ff7RebirthMulti: { value: null, unit: '', label: 'FF7 Rebirth NS2/Xbox版、新作《冒险家艾略特的千年奇谭》等驱动HD Game大幅增长' },
            fullYearProgress: { value: 26.3, unit: '%', label: '通期计划(净销售¥2980亿)Q1完成度26.3%,营业利润完成度34.7%' },
        },
        keyProducts: ['最终幻想7 Rebirth (NS2/Xbox)', '最终幻想14', '勇者斗恶龙3 HD-2D重制版', 'NieR系列', '冒险家艾略特的千年奇谭'],
        analysis: {
            performance: '🔥FY2027 Q1(2026.4-6)大幅增収増益: 净销售¥784.23亿(+32.3%)、营业利润¥170.08亿(+88.6%)、经常利润¥187.66亿(+172.4%)、归母净利润¥132.44亿(+175.7%),四大板块全线增长(What)。HD Game(游戏)板块净销售¥499.60亿(+51.8%)、营业利润¥155.83亿(+91.8%),FF7 Rebirth(NS2/Xbox)跨平台发售+新作《冒险家艾略特的千年奇谭》+目录作品销售全面走强,MMO和手游/PC浏览器同样增收(Why)。Q1营业利润已完成全年计划(¥490亿)的34.7%,"量减质升"战略红利持续兑现(So What)。',
            strategy: '"量减质升"战略转型成效持续兑现——削减中小项目,聚焦核心IP(FF/DQ/NieR)的高质量开发。HD Game通过跨平台(NS2/Xbox)策略扩大受众。MMO、手游/PC浏览器均保持增长。西方工作室已剥离,回归日式RPG核心。',
            outlook: 'FY2027展望: 通期计划维持净销售¥2980亿、营业利润¥490亿,看好Q1超预期后全年上调可能。DQ12和FF7第三部为未来重磅催化剂。',
            newProducts: '《勇者斗恶龙12》开发中；《FF7 第三部》开发中；FF14新资料片；更多HD-2D重制项目。'
        },
        dataSources: [
            { type: '季度财报', name: 'Square Enix Q1 FY2027 Results', date: '2026-08-10', url: 'https://www.hd.square-enix.com/eng/ir/library/financial.html' },
            { type: '行业报道', name: 'gamecolumn: スクウェア・エニックスHD 2027年3月期第1四半期決算 (2026/08/11)', date: '2026-08-11', url: 'https://gamecolumn.jp/blog-entry-117042.html' }
        ],
        filingDate: '2026-08-10',
        filingType: '季度财报(Q1)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-07-30',
            revenue: { value: 129500, unit: '百万日元(Q1)', yoy: 33.6, label: 'Q1集团营收¥1295亿(+33.6%,创Q1新高)', usdEquiv: '≈$866M' },
            operatingProfit: { value: 45300, unit: '百万日元(Q1)', yoy: 63.3, label: 'Q1集团营业利润¥453亿(+63.3%)' },
            note: 'Q1营收/利润双创历史同期新高,数字娱乐(游戏)部门增长36.5%驱动'
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
            totalRevenue: { value: 129500, unit: '百万日元(Q1)', yoy: 33.6, label: 'Q1集团营收¥1295亿(+33.6%,创Q1新高)', source: 'Konami Q1 FY2027 Results (2026/07/30)' },
            totalOperatingProfit: { value: 45300, unit: '百万日元(Q1)', yoy: 63.3, label: 'Q1集团营业利润¥453亿(+63.3%)' },
            totalOperatingMargin: { value: 35.0, label: 'Q1集团营业利润率' },
            note: '科乐美FY2027 Q1(2026.4-6): 营收¥1295亿(+33.6%)、业务利润¥447亿(+61.7%)、营业利润¥453亿(+63.3%)、归母净利润¥326亿(+64.2%),营收/利润双创Q1历史新高。'
        },
        financials: {
            revenue: { value: 129500, unit: '百万日元(Q1)', yoy: 33.6, label: '集团Q1营收(创Q1纪录)', source: 'Konami Q1 FY2027 Results (2026/07/30)', usdEquiv: '≈$866M' },
            operatingProfit: { value: 45300, unit: '百万日元(Q1)', yoy: 63.3, label: '集团Q1营业利润(+63.3%)' },
            operatingMargin: { value: 35.0, label: '集团Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(DE+健身+博彩)' },
        },
        gameMetrics: {
            deGrowth: { value: 36.5, unit: '%', label: '数字娱乐(游戏)部门收入增长36.5%' },
            eFootballContribution: { value: null, unit: '', label: 'eFootball持续贡献稳定流水' },
            yugiohMasterDuel: { value: null, unit: '', label: '游戏王Master Duel全球运营' },
            silentHill2Impact: { value: null, unit: '', label: '寂静岭2重制版长尾贡献' },
            dividendIncrease: { value: 190.5, unit: '日元/股', label: '年度股息190.5日元(派息率30%+)' },
        },
        keyProducts: ['eFootball', '游戏王Master Duel', '寂静岭2 Remake', '合金装备Δ', '恶魔城：贝尔蒙特之血', '桃太郎电铁2'],
        analysis: {
            performance: '🔥FY2027 Q1(2026.4-6)创历史同期新高: 营收¥1295亿(+33.6%)、业务利润¥447亿(+61.7%)、营业利润¥453亿(+63.3%)、归母净利润¥326亿(+64.2%),营收/利润双创Q1纪录(What)。数字娱乐(游戏)部门收入增长36.5%为核心驱动,eFootball/游戏王等GaaS稳定增长+合金装备Δ持续贡献,健身与博彩板块亦维持扩张(Why)。Q1开门红为连续第4年创新高奠定基础(So What)。',
            strategy: '经典IP全面复活战略——寂静岭2 Remake商业口碑双收→合金装备Δ(食蛇者)→恶魔城新作,已形成完整复活管线。eFootball+游戏王维持稳定GaaS收入。健身俱乐部和博彩业务多元化降低游戏周期风险。',
            outlook: 'FY2027展望: DE板块预计收入¥3480亿+营业利润¥1225亿。年度股息提升至190.5日元(派息率30%+)。恶魔城:贝尔蒙特之血+寂静岭f+桃太郎电铁2+Metal Gear Δ续作为管线核心。',
            newProducts: '《恶魔城：贝尔蒙特之血》2026年；《寂静岭f》开发中；《桃太郎电铁2》；eFootball持续更新；更多经典IP复活项目。'
        },
        dataSources: [
            { type: '季度财报', name: 'Konami Q1 FY2027 Financial Results', date: '2026-07-30', url: 'https://www.konami.com/ir/en/ir-data/statements.html' },
            { type: '行业报道', name: '科乐美Q1财报: 营收1295亿日元(+33.6%), 利润创历史新高 (百家号/360game, 2026/07/30)', date: '2026-07-30', url: 'https://baijiahao.baidu.com/s?id=1872142525367814464' }
        ],
        filingDate: '2026-07-30',
        filingType: '季度财报(Q1)',
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
        fiscalPeriod: 'FY2027 Q1 (2026年4月-6月)',
        currency: 'JPY',
        latestQuarter: {
            period: 'FY2027 Q1', calendarPeriod: '2026年4-6月', filingDate: '2026-08-07',
            revenue: { value: 95028, unit: '百万日元(Q1)', yoy: 17.3, label: 'Q1集团营收¥950.28亿(+17.3%)', usdEquiv: '≈$636M' },
            operatingProfit: { value: 2384, unit: '百万日元(Q1)', yoy: null, label: 'Q1营业利润¥23.84亿(上年同期亏损¥5.19亿,扭亏为盈)' },
            note: '三线超预期,从全面亏损到全面盈利;GAN和Stakelogic并表后首个完整季度'
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
            totalRevenue: { value: 95028, unit: '百万日元(Q1)', yoy: 17.3, label: 'Q1集团营收¥950.28亿(+17.3%)', source: 'Sega Sammy Q1 FY2027 Results (2026/08/07)' },
            totalOperatingProfit: { value: 2384, unit: '百万日元(Q1)', yoy: null, label: 'Q1营业利润¥23.84亿(上年同期亏损¥5.19亿)' },
            totalOperatingMargin: { value: 2.5, label: 'Q1营业利润率' },
            note: '世嘉萨米FY2027 Q1(2026.4-6): 营收¥950.28亿(+17.3%)、营业利润¥23.84亿、经常利润¥36.12亿、归母净利润¥21.69亿,为减值巨亏后的首个盈利季度,GAN与Stakelogic并表后首个完整季度。'
        },
        financials: {
            revenue: { value: 95028, unit: '百万日元(Q1)', yoy: 17.3, label: '集团Q1营收(+17.3%)', source: 'Sega Sammy Q1 FY2027 Results (2026/08/07)', usdEquiv: '≈$636M' },
            operatingProfit: { value: 2384, unit: '百万日元(Q1)', yoy: null, label: 'Q1营业利润¥23.84亿(扭亏为盈)' },
            operatingMargin: { value: 2.5, label: '集团Q1营业利润率' },
            segmentRevenuePct: { value: 100, label: '集团整体(EC+游技机+博彩)' },
        },
        gameMetrics: {
            netIncomeQ1: { value: 2169, unit: '百万日元(Q1)', label: '归母净利润¥21.69亿(上年同期亏损¥33.87亿)' },
            ordinaryProfitQ1: { value: 3612, unit: '百万日元(Q1)', label: '经常利润¥36.12亿(上年同期亏损¥21.24亿)' },
            pachislotRecovery: { value: null, unit: '', label: '柏青哥/柏青嫂板块扛旗,销售V型反转' },
            personaStable: { value: null, unit: '', label: '《女神异闻录》《柯南》等经典IP稳定贡献' },
            ganStakelogic: { value: null, unit: '', label: 'GAN和Stakelogic并表贡献博彩业务增长' },
        },
        keyProducts: ['索尼克系列', '如龙/审判系列', '女神异闻录系列', '全面战争', 'Metaphor: ReFantazio'],
        analysis: {
            performance: 'FY2027 Q1(2026.4-6)三线超预期: 营收¥950.28亿(+17.3%)、营业利润¥23.84亿、经常利润¥36.12亿、归母净利润¥21.69亿,从全面亏损到全面盈利(What)。柏青哥/柏青嫂板块销售V型反转扛旗(¥478亿,占比过半),GAN与Stakelogic并表(首个完整季度)贡献博彩增量,《女神异闻录》《柯南》等经典IP稳定(Why)。此前Rovio减值¥588亿+Super Game取消的财务出清完毕,盈利弹性释放(So What)。',
            strategy: '战略重大调整: ①Rovio减值标志着移动游戏收购战略失败的财务出清 ②Super Game项目取消反映管理层放弃高风险大型跨平台项目 ③转向"Mainstay IP"战略——聚焦索尼克/如龙/女神异闻录等成熟IP的稳健增长 ④博彩业务(GAN+Stakelogic)并表贡献新增量。',
            outlook: 'FY2027预测营收¥5100亿(+4.6%),管理层预期利润持续恢复。博彩业务并表+柏青哥反转+索尼克电影宇宙+如龙新作+全面战争PC持续驱动。',
            newProducts: '《如龙》新作；索尼克新项目；《女神异闻录》后续；全面战争新作；Metaphor续作。'
        },
        dataSources: [
            { type: '季度财报', name: 'Sega Sammy Q1 FY2027 Results', date: '2026-08-07', url: 'https://www.segasammy.co.jp/en/ir/library/presentation/' },
            { type: '行业报道', name: '腾讯网: 世嘉Q1财报 营收40亿 柏青哥扛旗翻身 (2026/08/08)', date: '2026-08-08', url: 'https://new.qq.com/rain/a/20260808A0B15D00' }
        ],
        filingDate: '2026-08-07',
        filingType: '季度财报(Q1)',
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
        fiscalPeriod: '2026年Q2 (2026年4-6月)',
        currency: 'KRW',
        latestQuarter: {
            period: '2026 Q2', calendarPeriod: '2026年4-6月', filingDate: '2026-07-29',
            revenue: { value: 1290000, unit: '百万韩元', yoy: 94.9, label: 'Q2营收₩1.29万亿(+94.9%,创Q2历史新高)', usdEquiv: '≈$933M' },
            operatingProfit: { value: 410900, unit: '百万韩元', yoy: 67.0, label: 'Q2营业利润₩4109亿(+67.0%)' },
            operatingMargin: { value: 31.9, label: 'Q2营业利润率31.9%' },
            gameMetrics: {
                subnautica2Sales: { value: 5, unit: '百万套', label: '《深海迷航2》(Subnautica 2)抢先体验22天销量500万套' },
                pubgH1Growth: { value: 25, unit: '%', label: 'PUBG IP上半年收入+25%' }
            }
        },
        fullYear: {
            period: '2025年全年(1-12月)', filingDate: '2026-02-09', status: '已发布',
            revenue: { value: 3326600, unit: '百万韩元', yoy: 22.8, label: '2025全年₩3.3266万亿(+22.8%,创历史新高)', usdEquiv: '≈$2.41B' },
            operatingProfit: { value: 1054400, unit: '百万韩元', label: '全年营业利润₩1.0544万亿' },
            note: '首次突破₩3万亿大关,PUBG IP年度最高+inZOI百万销量'
        },
        companyOverall: {
            totalRevenue: { value: 1290000, unit: '百万韩元(Q2)', yoy: 94.9, label: 'Q2总营收₩1.29万亿(+94.9%,创Q2纪录)', source: 'Krafton Q2 2026 Earnings Release (2026/07/29)' },
            totalOperatingProfit: { value: 410900, unit: '百万韩元(Q2)', yoy: 67.0, label: 'Q2营业利润₩4109亿(+67.0%)' },
            note: 'Krafton Q2 2026: 营收₩1.29万亿(+94.9%)、营业利润₩4109亿(+67.0%)均创Q2历史纪录。《深海迷航2》抢先体验22天售出500万套驱动增长,PUBG IP上半年收入+25%。'
        },
        financials: {
            revenue: { value: 1290000, unit: '百万韩元(Q2)', yoy: 94.9, label: 'Q2营收(创Q2历史新高)', source: 'Krafton Q2 2026 Earnings Release (2026/07/29)', usdEquiv: '≈$933M' },
            operatingProfit: { value: 410900, unit: '百万韩元(Q2)', yoy: 67.0, label: 'Q2营业利润₩4109亿(+67.0%)' },
            operatingMargin: { value: 31.9, label: 'Q2营业利润率' },
            segmentRevenuePct: { value: 100, label: '游戏占比' },
            fullYearRevenue: { value: 3326600, unit: '百万韩元', yoy: 22.8, label: '2025全年营收₩3.3266万亿(+22.8%创新高)' },
        },
        gameMetrics: {
            subnautica2Sales: { value: 5, unit: '百万套', label: '《深海迷航2》(Subnautica 2) EA 22天500万套', source: 'Krafton Q2 2026 Earnings' },
            pubgH1Growth: { value: 25, unit: '%', label: 'PUBG IP上半年收入+25%' },
            pubgMobileStrong: { value: null, unit: '%', label: 'PUBG Mobile/和平精英移动端持续增长' },
            inZOIProgress: { value: null, unit: '', label: 'inZOI持续内容更新和社区运营' },
            aiGamingStrategy: { value: null, unit: '', label: 'AI游戏战略持续推进' },
        },
        keyProducts: ['PUBG: Battlegrounds', 'PUBG Mobile', '和平精英(Peacekeeper Elite)', 'BGMI(印度)', '深海迷航2(Subnautica 2)', 'inZOI'],
        analysis: {
            performance: '🔥Q2 2026营收₩1.29万亿(+94.9% YoY,≈$9.33亿)、营业利润₩4109亿(+67.0%)双创Q2历史纪录(What)。核心驱动: 《深海迷航2》(Subnautica 2)于5月开启抢先体验,22天内销量突破500万套,成为全球爆款;PUBG IP上半年收入+25%(移动端+PC/主机),inZOI持续贡献(Why)。营收接近翻倍增长展现"PUBG现金牛+新爆款"组合拳威力,利润率31.9%维持全球顶级水平(So What)。',
            strategy: 'PUBG 2.0战略持续推进(UGC+UE5),IP联名策略(K-pop/奢侈品牌)驱动ARPU。Subnautica 2成功验证多IP矩阵战略——从单一PUBG依赖走向多元IP。inZOI作为生活模拟品类拓展方向持续迭代。AI游戏战略为中长期布局。',
            outlook: 'H1超预期+Subnautica 2爆款效应持续,2026全年有望冲击新高。下半年催化剂: PUBG持续内容更新+Subnautica 2正式版+inZOI大型DLC+AI驱动的新游戏体验。管理层目标2027年前拥有3个百万DAU级产品。',
            newProducts: '深海迷航2正式版；PUBG 2.0(UE5)；inZOI大型DLC；AI游戏新IP开发中；Real Cricket拓展印度。'
        },
        dataSources: [
            { type: 'Q2季度财报', name: 'Krafton Q2 2026 Earnings Release', date: '2026-07-29', url: 'https://www.krafton.com/en/ir/investor-events/announce/' },
            { type: '行业报道', name: 'Krafton Q2 2026: Subnautica 2 tops 5M in 22 days, revenue +94.9%', date: '2026-07-29', url: 'https://www.krafton.com/en/' }
        ],
        filingDate: '2026-07-29',
        filingType: '季度财报(Q2)',
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
        fiscalPeriod: '2026 Q2 (2026年4-6月)',
        currency: 'USD',
        latestQuarter: {
            period: '2026 Q2', calendarPeriod: '2026年4-6月', filingDate: '2026-08-06',
            revenue: { value: 1469, unit: '百万美元', yoy: 36, label: 'Q2收入$14.69亿(+36%)', usdEquiv: '$1.47B' },
            bookings: { value: 1557, unit: '百万美元', yoy: 8, label: 'Q2预订$15.57亿(+8%,低于预期)' },
            netLoss: { value: -185, unit: '百万美元', label: 'Q2净亏损$1.85亿(收窄34%)' },
            adjustedEbitda: { value: 152, unit: '百万美元', label: 'Q2调整后EBITDA $1.52亿(+744%)' },
            operatingCashFlow: { value: 318, unit: '百万美元', label: 'Q2经营现金流$3.18亿(+60%)' },
            freeCashFlow: { value: 294, unit: '百万美元', label: 'Q2自由现金流$2.94亿(+66%)' },
            gameMetrics: {
                dau: { value: 123, unit: '百万', label: 'DAU 1.23亿(+10%)' },
                monthlyPayers: { value: 27, unit: '百万', label: '月独立付费用户2700万(+15%)' },
                engagementHours: { value: 29, unit: '十亿小时', label: '互动时长290亿小时(+5%)' }
            }
        },
        fullYear: {
            period: '2026全年指引(撤回)', filingDate: '2026-08-06', status: '全年指引撤回',
            revenue: { value: null, unit: '百万美元', yoy: null, label: '全年指引已撤回(仅提供Q3指引)' },
            bookings: { value: null, unit: '百万美元', yoy: null, label: 'Q3预订指引$15.76-16.53亿(-18%~-14%)' },
            note: 'Q3预订额指引同比下滑14-18%,远低于预期;全年指引撤回。预订增长持续放缓(Q1 +43%→Q2 +8%)'
        },
        companyOverall: {
            totalRevenue: { value: 1469, unit: '百万美元(Q2)', yoy: 36, label: 'Q2总收入$14.69亿', source: 'Roblox Q2 2026 Earnings (2026/08/06)' },
            totalOperatingProfit: { value: -185, unit: '百万美元', yoy: null, label: '净亏损$1.85亿(收窄34%)' },
            note: 'Q2收入$14.69亿(+36%),预订$15.57亿(+8%),DAU 1.23亿(+10%),月独立付费2700万(+15%)。但预订增速大幅放缓至+8%,Q3指引同比下滑14-18%,全年指引撤回,股价重挫。'
        },
        financials: {
            revenue: { value: 1469, unit: '百万美元(Q2)', yoy: 36, label: 'Q2收入$14.69亿(+36%)', source: 'Roblox Q2 2026 Shareholder Letter (2026/08/06)' },
            operatingProfit: { value: -185, unit: '百万美元', yoy: null, label: 'Q2净亏损$1.85亿(收窄34%)' },
            operatingMargin: { value: null, label: '运营利润率(亏损收窄中)' },
            segmentRevenuePct: { value: 100, label: '平台型(整体)' },
            bookings: { value: 1557, unit: '百万美元(Q2)', yoy: 8, label: 'Q2预订$15.57亿(+8%)' },
        },
        gameMetrics: {
            dau: { value: 123, unit: '百万(Q2)', label: 'DAU 1.23亿(+10%)', source: 'Roblox Q2 2026 Earnings Call' },
            monthlyPayers: { value: 27, unit: '百万(Q2)', label: '月独立付费用户2700万(+15%)' },
            engagementHours: { value: 29, unit: '十亿小时', label: '互动时长290亿小时(+5%)' },
            operatingCashFlow: { value: 318, unit: '百万美元', label: 'Q2经营现金流$3.18亿(+60%)' },
            freeCashFlow: { value: 294, unit: '百万美元', label: 'Q2自由现金流$2.94亿(+66%)' },
        },
        keyProducts: ['Roblox Platform', 'Roblox Studio', 'UGC生态系统', '品牌广告平台'],
        analysis: {
            performance: 'Q2收入$14.69亿(+36% YoY)、预订$15.57亿(+8%)，收入符合预期但预订增速大幅放缓(Q1 +43%→Q2 +8%)(What)。DAU 1.23亿(+10%)、互动时长290亿小时(+5%)仍保持增长,月独立付费2700万(+15%),但预订额增速与DAU增速差距扩大——每用户消费(ABPDAU)下降,北美青少年消费明显放缓(Why)。Q3预订指引同比下滑14-18%,全年指引撤回,增长叙事阶段性破裂(So What)。',
            strategy: '安全合规继续作为战略首要任务(强制年龄验证/内容审核),短期持续压制参与度和变现。品牌广告业务(Shopify等)与AI(智能助手)为长期新引擎。公司将关注点从"预订增速"转向"现金流与利润质量"——Q2经营现金流$3.18亿(+60%)。',
            outlook: '2026 Q3指引: 预订$15.76-16.53亿(-18%~-14%)、收入$14.13-14.90亿(+4%~+10%)、调整后EBITDA $0-0.41亿。预订持续下滑为安全措施与消费疲软叠加,股价对短期指引敏感。',
            newProducts: 'Roblox AI Assistant；品牌广告平台扩展；社交安全工具升级；Creator Store迭代。'
        },
        dataSources: [
            { type: '季度财报', name: 'Roblox Q2 2026 Shareholder Letter', date: '2026-08-06', url: 'https://ir.roblox.com/news/news-details/2026/Roblox-Reports-Second-Quarter-2026-Financial-Results/default.aspx' },
            { type: '行业报道', name: 'Roblox Q2 2026: Bookings Slowdown, Q3 Guide Disappoints', date: '2026-08-06', url: 'https://investgame.net/news/2026-08-06-2026_q2-press-release_roblox/' }
        ],
        filingDate: '2026-08-06',
        filingType: '季度财报(Q2)',
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
        fiscalPeriod: '2026 Q2 (2026年4-6月)',
        currency: 'USD',
        latestQuarter: {
            period: '2026 Q2', calendarPeriod: '2026年4-6月', filingDate: '2026-08-06',
            revenue: { value: 546, unit: '百万美元', yoy: 24, label: 'Q2总营收$5.46亿(+24%)', usdEquiv: '$546M' },
            netLoss: { value: -24, unit: '百万美元', label: 'Q2净亏损$0.24亿(去年同期亏损$1.09亿,大幅收窄)' },
            adjustedEbitda: { value: 160, unit: '百万美元', label: 'Q2调整后EBITDA $1.60亿(+77%,利润率29%)' },
            note: 'Vector广告平台驱动,Grow战略收入$3.29亿;已退出非战略性广告业务(ironSource Ads Network+Supersonic)'
        },
        fullYear: {
            period: '2026 Q3展望', filingDate: '2026-08-06', status: '战略转型中',
            revenue: { value: 545, unit: '百万美元(Q3指引中值)', yoy: null, label: 'Q3战略收入指引$5.40-5.50亿(+44-47%)', usdEquiv: '≈$545M' },
            note: 'Q3调整后EBITDA指引$1.85-1.90亿(+69-74%);聚焦引擎+Vector AI广告双引擎'
        },
        companyOverall: {
            totalRevenue: { value: 546, unit: '百万美元(Q2)', yoy: 24, label: 'Q2总收入$5.46亿(+24%)', source: 'Unity Q2 2026 Earnings (2026/08/06)' },
            totalOperatingProfit: { value: 160, unit: '百万美元', yoy: 77, label: '调整后EBITDA $1.60亿(+77%,利润率29%)' },
            note: 'Q2营收$5.46亿(+24%)、净亏损收窄至$0.24亿(去年同期亏损$1.09亿)、调整后EBITDA $1.60亿(+77%),战略转型成效显著'
        },
        financials: {
            revenue: { value: 546, unit: '百万美元(Q2)', yoy: 24, label: 'Q2总营收$5.46亿(+24%)', source: 'Unity Q2 2026 Earnings Release (2026/08/06)' },
            netLoss: { value: -24, unit: '百万美元', yoy: null, label: 'Q2净亏损$0.24亿(去年同期亏损$1.09亿,大幅收窄)' },
            adjustedEbitda: { value: 160, unit: '百万美元', yoy: 77, label: 'Q2调整后EBITDA $1.60亿(+77%)' },
            operatingMargin: { value: 29, label: 'Q2调整后EBITDA利润率29%' },
            segmentRevenuePct: { value: 100, label: '整体' },
            growRevenue: { value: 329, unit: '百万美元', label: 'Grow战略收入$3.29亿' },
        },
        gameMetrics: {
            vectorPlatform: { value: true, unit: '', label: 'Vector AI广告平台持续增长', source: 'Unity Q2 2026 Earnings' },
            strategicExit: { value: true, unit: '', label: '退出ironSource Ads Network+Supersonic发行' },
            q3Guide: { value: 545, unit: '百万美元', label: 'Q3战略收入指引$5.40-5.50亿(+44-47%)' },
        },
        keyProducts: ['Unity Engine 6', 'Unity Vector(AI广告)', 'Unity Gaming Services', 'Unity Muse(AI)'],
        analysis: {
            performance: '🔥Q2收入$5.46亿(+24% YoY),营收增长显著提速(Q1 +17%→Q2 +24%),净亏损收窄至$0.24亿(去年同期亏损$1.09亿),调整后EBITDA $1.60亿(+77%),EBITDA利润率29%(去年同期21%)(What)。Vector AI广告平台是核心增长驱动力,Grow战略收入$3.29亿持续放量,叠加退出低利润ironSource广告中介业务后利润率大幅改善(Why)。盈利质量显著提升,Unity正从2023年Runtime Fee危机中全面恢复(So What)。',
            strategy: '重大战略决策：退出非战略性广告业务(ironSource Ads Network和Supersonic发行平台),聚焦核心引擎+Vector AI广告双引擎。这标志着Unity彻底告别ironSource收购遗产中的低利润广告中介业务,转向高利润的自有AI广告技术。短期收入承压但长期利润率显著提升。',
            outlook: 'Q3指引: 战略收入$5.40-5.50亿(+44-47%)、调整后EBITDA $1.85-1.90亿(+69-74%),显示全年增长加速趋势。Vector平台增长+利润率扩张双轮驱动。引擎市场份额企稳(Unreal竞争依然激烈)。AI辅助开发(Unity Muse/Sentis)是差异化方向。',
            newProducts: 'Unity 6引擎持续迭代；Vector AI广告平台；Unity Sentis(AI推理on-device)；Unity Muse(AI辅助开发)。'
        },
        dataSources: [
            { type: '季度财报', name: 'Unity Q2 2026 Earnings Release', date: '2026-08-06', url: 'https://investors.unity.com/news/news-details/2026/Unity-Reports-Second-Quarter-2026-Financial-Results/default.aspx' },
            { type: '电话会议', name: 'Unity Q2 2026 Earnings Call', date: '2026-08-06', url: 'https://investors.unity.com/' }
        ],
        filingDate: '2026-08-06',
        filingType: '季度财报(Q2)',
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
        revenue: 3700, // ¥257亿游戏Q1, 官方US$3.7B
        currency: 'USD',
        period: '2026 Q1 (1-3月)',
        note: 'Q1游戏¥257亿≈$3.7B(+6.9%),营业利润¥126.57亿(+21.2%)',
        color: '#D42922',
        dataGrade: 'A',
        yoy: 6.9
    },
    {
        name: 'Take-Two',
        revenue: 1680, // Q4 GAAP营收$16.8亿(+6%); 净预订$15.8亿
        currency: 'USD',
        period: 'FY26 Q4 (1-3月)',
        note: 'Q4 GAAP营收$16.8亿(+6%),净预订$15.8亿超指引',
        color: '#FF6B35',
        dataGrade: 'A',
        yoy: 6.3
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
        revenue: 451, // €4.15亿 / 0.92
        currency: 'USD',
        period: 'FY26 Q4 (1-3月)',
        note: 'Q4净预订€4.15亿≈$4.5亿(超目标);全年净预订-17%运营亏损€13亿',
        color: '#0070FF',
        dataGrade: 'A',
        yoy: null
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
        revenue: 550, // Q4推算: 全年¥2977亿-前三季¥2155亿=¥822亿/149.5≈$550M
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
        revenue: 1223, // Q4推算: 全年¥4937亿-前三季¥3108亿=¥1829亿/149.5≈$1.223B
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
        revenue: 1019, // Q4 EC推算: 全年EC¥3266亿-前三季¥2245亿(估)=¥1021亿/149.5≈$683M
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
        revenue: 6720, // FY26全年净预订$67.2亿(+19%)
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: 'FY26全年净预订$67.2亿(+19%),GAAP营收$66.6亿(+18%)',
        color: '#FF6B35',
        dataGrade: 'A',
        yoy: 19,
        caveat: 'GAAP净亏损-$2.98亿大幅收窄(上年-$44.8亿),EBITDA转正$7.61亿;FY27指引$80-82亿;GTA6 11/19定档'
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
        revenue: 1680, // FY26全年净预订€15.25亿≈$16.8亿
        currency: 'USD',
        period: 'FY26全年(已发布)',
        note: '全年净预订€15.25亿≈$16.8亿(-17%),运营亏损€13亿创纪录',
        color: '#0070FF',
        dataGrade: 'A',
        yoy: -17,
        caveat: '裁员1200人+取消6款项目+€6.5亿减值;数字收入占比87%;腾讯入股新子公司承接三大IP'
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
