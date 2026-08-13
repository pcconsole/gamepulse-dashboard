// ============================================
// 待上线 Pipeline 数据模块 V3.18
// 数据源：腾讯文档 MCP（唯一基准，文档ID: LRcKfOTzgHrV）
//         + 网络搜索验证补充（标注来源，不覆盖MCP数据）
// 最后更新: 2026-08-13 (V3.18 周四自动化: web_search 8轮交叉验证。6款已发售移至released[光环CE 7/28+轮回之兽 8/4+漫威斗魂 8/6+Splatoon Raiders 7/23+异度神剑2 Switch2版 7/30+雾影猎人 7/30]。近2周(7/30-8/13)为新公布淡季[gamescom 2026在8/26-30,ONL在8/25],无重磅新公布)
// ============================================

// ====== 未上线产品数据（全部展示）======
const pipelineUnreleased = [
    // =============================================
    // ===== 一、MCP 腾讯文档基准数据（未上线 Sheet BB08J2）=====
    // =============================================

    // --- MCP 海外产品（有具体日期）---

    { region: "海外", name: "人间地狱：越南（Hell Let Loose: Vietnam）", publisher: "Team17", studio: "Black Matter", releaseDate: "2026/8/14", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "越南战争，核心二战射击玩家关注", gameplay: "硬核二战射击，大规模战场、真实弹道", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "共鸣：瘟疫传说传承", publisher: "Focus", studio: "/", releaseDate: "2026/8/27", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "系列销量400万+", gameplay: "叙事动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "队长小翼2 世界群星", publisher: "万代南梦宫", studio: "/", releaseDate: "2026/8/28", platforms: "PC+PS5+Xbox+Switch2", heat: "低", heatNote: "前作首周销量50万份", gameplay: "动漫足球游戏改编", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "月光光心慌慌（Halloween: The Game）", publisher: "IllFonic&Gun Interactive", studio: "/", releaseDate: "2026/9/8", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "约翰卡彭特万圣节电影改编潜行恐怖", gameplay: "非对称对抗+恐怖冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "漫威金刚狼", publisher: "索尼", studio: "Insomniac Games", releaseDate: "2026/9/15", platforms: "PS5", heat: "中高", heatNote: "独占漫威动作游戏，X战警金刚狼", gameplay: "线性第三人称近战动作游戏，主打暴力美学、有限自愈与狂暴反击机制", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "空之轨迹the 2nd", publisher: "卡普空", studio: "/", releaseDate: "2026/9/17", platforms: "PC+PS5+Switch2", heat: "低", heatNote: "空之轨迹IP", gameplay: "经典日式RPG玩法", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "战锤40K：战争黎明4", publisher: "Deep Silver", studio: "/", releaseDate: "2026/9/17", platforms: "PC", heat: "中低", heatNote: "星际战士2单作700万+，即时战略RTS回归经典", gameplay: "即时战略游戏（RTS），回归经典基地建造与大规模部队作战", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "沙丘：觉醒（Dune: Awakening）", publisher: "Funcom", studio: "/", releaseDate: "2026/9/22", platforms: "PS5+Xbox", heat: "中低", heatNote: "PC版25年6月已上线，沙丘IP+生存建造", gameplay: "开放世界生存建造，收集资源/建造基地", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "寂静岭：小镇陷落", publisher: "科乐美", studio: "Screen Burn", releaseDate: "2026/9/24", platforms: "PC+PS5", heat: "中高", heatNote: "寂静岭系列重启后首款第一人称商业新作", gameplay: "第一人称潜行生存恐怖，利用CRTV装置侦查/制造声响", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "控制：共振（CONTROL Resonant）", publisher: "Remedy Entertainment", studio: "/", releaseDate: "2026/9/24", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "初代《控制》获奖无数，销量500万+", gameplay: "动作RPG，操控迪伦法登，使用超自然能力+可变形武器", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "不朽遗志（Valor Mortis）", publisher: "Lyrical Games", studio: "/", releaseDate: "2026/9/24", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "开发商作品《幽灵行者》销量250万+", gameplay: "类魂动作游戏", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "鬼武者：剑之道", publisher: "卡普空", studio: "/", releaseDate: "2026/9/25", platforms: "PC+PS5+Xbox+Switch2", heat: "中", heatNote: "鬼武者系列时隔多年新作，试玩Demo反馈良好", gameplay: "和风刀剑动作，主打招架反击/一闪/吸魂机制", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "黎明行者之血", publisher: "万代南梦宫", studio: "Rebel Wolves", releaseDate: "2026/9/3", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "吸血鬼题材RPG，差异化明显，《天国：拯救》粉丝关注", gameplay: "吸血鬼题材RPG，招募冒险伙伴，开放世界探索", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "我的世界：地下城2", publisher: "微软", studio: "Mojang Studios", releaseDate: "2026/9/30", platforms: "PC+PS5+Xbox+Switch", heat: "中低", heatNote: "我的世界IP，前作全球玩家数超2500万", gameplay: "像素地下城冒险刷宝", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "真三国无双2 with 猛将传 Remastered", publisher: "光荣特库摩", studio: "/", releaseDate: "2026/10/1", platforms: "PS5+Xbox+Switch2", heat: "中低", heatNote: "真三系列经典作品重制，虚幻5升级画面", gameplay: "动作割草，一骑当千玩法，40+武将可选", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "雷曼传奇：重叙", publisher: "育碧", studio: "育碧蒙彼利埃+育碧米兰", releaseDate: "2026/10/1", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "2013年经典横版动作重制，售价40美元性价比高", gameplay: "横版动作平台，2.5D/3D关卡交叉，包含音乐关卡，支持4人联机", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "战争机器：E-Day", publisher: "微软", studio: "The Coalition", releaseDate: "2026/10/6", platforms: "PC+Xbox", heat: "中高", heatNote: "Xbox独占，系列销量4000万+，PS5版完成但临发售取消", gameplay: "第三人称掩体射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "星球大战：银河赛车手", publisher: "Fuse Games", studio: "/", releaseDate: "2026/10/6", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "星球大战IP，SGF确认10/6发售", gameplay: "赛车竞速", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "王国之心合辑", publisher: "Square Enix", studio: "/", releaseDate: "2026/10/8", platforms: "Switch2", heat: "低", heatNote: "系列销量3800万+，合辑包形式重新上架", gameplay: "动作RPG合辑", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "龙之信条2：黑暗觉者", publisher: "卡普空", studio: "/", releaseDate: "2026/10/9", platforms: "Switch2", heat: "低", heatNote: "拓展包，原作2024年3月已上线PC+PS+Xbox，销量400万+", gameplay: "ARPG拓展包", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "动物园之星2", publisher: "Frontier", studio: "/", releaseDate: "2026/10/13", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "前作销量500万", gameplay: "模拟经营动物园", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "恶魔城：贝尔蒙特的诅咒", publisher: "科乐美", studio: "/", releaseDate: "2026/10/15", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "系列销量500万", gameplay: "哥特风横版动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "皇牌空战8：希孚之翼", publisher: "万代南梦宫", studio: "Project Aces", releaseDate: "2026/10/2", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "皇牌空战30周年正统续作，支持跨平台联机", gameplay: "空战射击，动态天气影响战斗，中队士气系统", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "最终幻想：共鸣", publisher: "Square Enix", studio: "/", releaseDate: "2026/10/23", platforms: "PC+PS5+Xbox+Switch", heat: "中低", heatNote: "最终幻想系列全球累计销量2.07亿+", gameplay: "HD-2D回合制RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "使命召唤：现代战争4", publisher: "微软", studio: "Infinity Ward", releaseDate: "2026/10/23", platforms: "PC+PS5+Xbox+Switch2", heat: "中高", heatNote: "系列累计销量已突破5亿份", gameplay: "枪战射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "玩具总动员复古合集", publisher: "万代南梦宫", studio: "/", releaseDate: "2026/11/1", platforms: "PC+PS5+Switch2", heat: "低", heatNote: "收录90年代3款玩具总动员衍生游戏，面向IP粉丝", gameplay: "复古游戏合集", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "GTA6", publisher: "Take-Two/R星", studio: "Rockstar Games", releaseDate: "2026/11/19", platforms: "PS5+Xbox", heat: "高", heatNote: "系列销量4亿4000万", gameplay: "拟真开放世界，主打自由", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "特技演员：好莱坞", publisher: "索尼", studio: "/", releaseDate: "2026/12/1", platforms: "PC+PS5", heat: "低", heatNote: "模拟类新游，题材小众", gameplay: "模拟经营+动作，扮演好莱坞特技演员完成电影特技", licenseStatus: "", licenseNote: "", source: "MCP" },

    // --- MCP 海外产品（季度/年份/夏秋）---
    { region: "海外", name: "龙之剑：觉醒（DragonSword: Awakening）", publisher: "Hound13 Inc.", studio: "/", releaseDate: "2026年7月", platforms: "移动+PC", heat: "中低", heatNote: "龙之谷之父打造，从免费网游转型买断制，核心受众期待", gameplay: "动作RPG，推进剧情解锁英雄/装备，去除抽卡系统", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "异于天堂（Stranger Than Heaven）", publisher: "世嘉", studio: "RGG Studio", releaseDate: "2026年秋", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "如龙工作室新作", gameplay: "动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "地平线：钢铁边境", publisher: "索尼", studio: "Guerrilla Games&NCSOFT", releaseDate: "2026年末", platforms: "移动+PC", heat: "中低", heatNote: "系列销量4000万+", gameplay: "狩猎MMORPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "塞尔达传说：时之笛", publisher: "任天堂", studio: "/", releaseDate: "2026年", platforms: "Switch2", heat: "中", heatNote: "原作销量1400万，系列销量1.7亿", gameplay: "3D动作冒险RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "全面战争：战锤40000", publisher: "Creative Assembly", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "全战系列销量4200万+，战锤前作销量700万+", gameplay: "回合制+即时战术RTS", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "幻兽帕鲁集换式卡牌", publisher: "Pocketpair", studio: "/", releaseDate: "2026年", platforms: "待定", heat: "低", heatNote: "幻兽帕鲁IP", gameplay: "集换式卡牌", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "堕落之主2", publisher: "CI Games", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "类魂战斗+世界崩坏背景", gameplay: "类魂ARPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "原子之心2", publisher: "Mundfish", studio: "/", releaseDate: "2026年", platforms: "PC", heat: "中低", heatNote: "前作销量500万", gameplay: "第一人称射击+苏联科幻风", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "致命躯壳 II", publisher: "Playstack", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "前作销量破百万", gameplay: "魂系ARPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "The Duskbloods", publisher: "待定", studio: "/", releaseDate: "2026年", platforms: "Switch2", heat: "中低", heatNote: "", gameplay: "角色扮演冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "漫威1943：九头蛇崛起", publisher: "Skydance New Media", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "漫威IP", gameplay: "二战背景动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "战锤40K：机械神教2", publisher: "Kasedo Games", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "战锤IP，核心粉丝忠诚度高", gameplay: "策略战棋", licenseStatus: "", licenseNote: "", source: "MCP" },

    // --- MCP 海外产品（待定）---
    { region: "海外", name: "4:LOOP", publisher: "Bad Robot Games LLC", studio: "/", releaseDate: "待定", platforms: "PC+PS5", heat: "低", heatNote: "求生之路研发商", gameplay: "4人合作射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "森林3", publisher: "Endnight Games Ltd", studio: "/", releaseDate: "待定", platforms: "PC", heat: "低", heatNote: "续作首日200万套", gameplay: "开放世界恐怖生存建造", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "星球大战：旧共和国的命运", publisher: "Arcanaut Studios", studio: "/", releaseDate: "待定", platforms: "PC", heat: "低", heatNote: "前作可查销量219万", gameplay: "星战宇宙RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "幻兽帕鲁：帕鲁农场", publisher: "Pocketpair", studio: "/", releaseDate: "待定", platforms: "PC", heat: "中", heatNote: "幻兽帕鲁IP，首日销量200万", gameplay: "经营模拟+探索社交", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "神界", publisher: "Larian Studios", studio: "/", releaseDate: "待定", platforms: "PC", heat: "中高", heatNote: "博德之门3研发商", gameplay: "回合制/即时RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "上古卷轴6", publisher: "微软", studio: "Bethesda Games", releaseDate: "待定", platforms: "未知", heat: "高", heatNote: "前作销量6000万+", gameplay: "开放世界RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "黑神话：钟馗", publisher: "游戏科学", studio: "/", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "高", heatNote: "黑神话悟空IP续作，24年销量2800万", gameplay: "类魂ARPG，钟馗捉鬼背景", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "料理人班乔（Bancho the Chef）", publisher: "MINTROCKET", studio: "/", releaseDate: "待定", platforms: "PC+PS5", heat: "中低", heatNote: "《潜水员戴夫》餐饮玩法衍生，核心受众基础好", gameplay: "料理核心玩法，结合动作/经营要素", licenseStatus: "", licenseNote: "", source: "MCP" },

    // --- MCP 海外产品（2027年）---
    { region: "海外", name: "女神异闻词4 Revival", publisher: "世嘉", studio: "ATLUS", releaseDate: "2027/2/18", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "系列销量3000万+，Xbox Showcase确认2027/2/18+Game Pass首日", gameplay: "JRPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "古墓丽影：亚特兰蒂斯遗迹", publisher: "亚马逊", studio: "水晶动力+Flying Wild Hog", releaseDate: "2027/2/12", platforms: "PC+PS5+Xbox+Switch2", heat: "中", heatNote: "古墓丽影初代重制，虚幻5开发，原计划2026年延期至2027年", gameplay: "动作冒险，操控劳拉探索多文明遗迹，解谜与战斗结合，支持中文配音", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "地铁2039", publisher: "Deep Silver", studio: "/", releaseDate: "2027年2月", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "前作《地铁:逃离》销量1000万+", gameplay: "第一人称射击+生存", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "神鬼寓言4", publisher: "微软", studio: "Playground Games", releaseDate: "2027/2/23", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "系列销量1100万+，Xbox Showcase确认2027/2/23+Game Pass首日", gameplay: "开放世界动作RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "卧龙2：凤火连天", publisher: "光荣特库摩", studio: "/", releaseDate: "2027年初", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "系列销量500万+，三国IP国内加成", gameplay: "三国题材类魂动作RPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "Exodus", publisher: "Archetype Entertainment", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "BioWare前核心成员", gameplay: "科幻ARPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "古墓丽影：催化剂", publisher: "Crystal Dynamics", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "古墓丽影IP", gameplay: "第三人称动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "洛克人：双重超载", publisher: "卡普空", studio: "/", releaseDate: "2027年", platforms: "PC+Switch2+PS5+Xbox", heat: "低", heatNote: "洛克人IP", gameplay: "横版动作射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "马克思佩恩 1&2重制版", publisher: "R星", studio: "Rockstar Games", releaseDate: "2027年", platforms: "待定", heat: "中", heatNote: "系列销量1100万", gameplay: "子弹时间射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "小龙斯派罗：A Realm Beyond", publisher: "动视", studio: "/", releaseDate: "2027年春", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "系列销量1000万+", gameplay: "3D平台跳跃冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "疯狂出租车：极速环游", publisher: "世嘉", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox+Switch2", heat: "低", heatNote: "经典IP", gameplay: "赛车竞速", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "魔术师：恶魔契约", publisher: "Focus", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "", gameplay: "叙事驱动第一人称动作游戏", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "发条革命（Clockwork Revolution）", publisher: "微软", studio: "inXile", releaseDate: "2027年", platforms: "PC+Xbox", heat: "低", heatNote: "Xbox独占，《废土》IP", gameplay: "蒸汽朋克第一人称角色扮演游戏", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "女神异闻词6", publisher: "ATLUS", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "系列销量3000万+，Xbox Showcase公布", gameplay: "JRPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "腐烂国度3", publisher: "微软", studio: "Undead Labs", releaseDate: "2027年", platforms: "PC+Xbox", heat: "低", heatNote: "系列销量200万+，前作活跃玩家数300万+", gameplay: "开放世界僵尸生存", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "Senua", publisher: "微软", studio: "Ninja Theory", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "地狱之刃系列新作，系列销量100万+", gameplay: "动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "ILL", publisher: "Team Clout inc.", studio: "/", releaseDate: "2027年", platforms: "PC+PS5", heat: "低", heatNote: "独立恐怖游戏，虚幻5高精度画面", gameplay: "恐怖游戏，主打高精度场景/怪物建模", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "战神：劳菲", publisher: "索尼互动娱乐", studio: "Santa Monica Studio", releaseDate: "2027年", platforms: "PC+PS5", heat: "中高", heatNote: "战神系列首次女性主角，SoP 6/2压轴公布，IP影响力大", gameplay: "动作冒险，融合希腊高速动作与北欧叙事，主角黄金之手可抽离敌人灵魂连携攻击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "直到黎明2", publisher: "索尼互动娱乐", studio: "Firesprite", releaseDate: "2027年", platforms: "PS5", heat: "中", heatNote: "初代互动叙事恐怖标杆续作，SoP 6/2公布", gameplay: "互动叙事恐怖，蝴蝶效应系统回归，玩家选择直接影响角色生死与剧情走向", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "Kemuri", publisher: "Unseen Inc.", studio: "/", releaseDate: "2027年", platforms: "PS5", heat: "低", heatNote: "鬼泣前制作人打造，妖怪题材动作游戏", gameplay: "妖怪题材动作，扮演除妖师，可使用不同妖怪能力战斗", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "失落荒野（The Lost Wild）", publisher: "Annapurna Interactive", studio: "Great Ape Games", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "恐龙生存恐怖题材", gameplay: "恐龙生存恐怖，沉浸式恐怖体验", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "宝可梦：风 / 浪", publisher: "任天堂", studio: "宝可梦公司", releaseDate: "2027年", platforms: "Switch2", heat: "高", heatNote: "宝可梦第十世代新作", gameplay: "回合制战斗RPG，融合宝可梦传说阿尔宙斯战斗系统", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "异度神剑 起源（Xenoblade Genesis）", publisher: "任天堂", studio: "/", releaseDate: "2027年", platforms: "Switch2", heat: "中低", heatNote: "系列销量850万+，任天堂直面会公布", gameplay: "开放世界JRPG", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "海外", name: "王国之心4（Kingdom Hearts 4）", publisher: "Square Enix", studio: "/", releaseDate: "未公布", platforms: "Switch2", heat: "中低", heatNote: "系列销量3800万+", gameplay: "动作RPG", licenseStatus: "", licenseNote: "", source: "MCP" },

    // --- MCP 国内产品（有具体日期）---
    { region: "国内", name: "影之刃零（Phantom Blade Zero）", publisher: "灵游坊", studio: "/", releaseDate: "2026/10/29", platforms: "PC+PS5", heat: "中高", heatNote: "国产动作游戏标杆，虚幻5功夫朋克风格，夏日游戏节压轴公布", gameplay: "第三人称动作ARPG，黑暗武侠题材，弹刀/格挡/鬼步机制，30+主武器/20+副武器", licenseStatus: "已获版号", licenseNote: "移动", source: "MCP" },

    // --- MCP 国内产品（季度/年份）---
    { region: "国内", name: "头号禁区", publisher: "字节跳动", studio: "沐瞳", releaseDate: "2026年Q2", platforms: "移动", heat: "中低", heatNote: "更注重策略性，偏向MOBA", gameplay: "第三人称搜打撤+MOBA", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "无限大（Ananta）", publisher: "网易", studio: "雷火旗下Naked Rain", releaseDate: "2026年7月", platforms: "移动+PC+PS5", heat: "高", heatNote: "和我司王者世界为直接竞品，目前实机视频品质表现优异", gameplay: "开放世界二游+类GTA+多玩法缝合", licenseStatus: "已获版号", licenseNote: "移动+客户端+游戏机（PS5）", source: "MCP" },
    { region: "国内", name: "遗忘之海（Sea of Remnants）", publisher: "网易", studio: "/", releaseDate: "2026年Q3", platforms: "移动+PC+PS5", heat: "中", heatNote: "网易新品", gameplay: "开放世界海洋冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "伊莫", publisher: "Funplus", studio: "爪印工作室", releaseDate: "2026年", platforms: "待定", heat: "低", heatNote: "", gameplay: "待定", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "星绘友晴天", publisher: "网易", studio: "雷火UX旗下Thunderfire Universe X Studio", releaseDate: "2026年", platforms: "移动+PC", heat: "中低", heatNote: "《粒粒的小人国》竞品", gameplay: "模拟经营+社交", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "大侠立志传外传", publisher: "半瓶醋工作室", studio: "/", releaseDate: "2026年", platforms: "PC", heat: "低", heatNote: "前作销量100万，垂类精品", gameplay: "像素风+多自由度+武侠题材", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "星布谷地（Petit Planet）", publisher: "米哈游", studio: "/", releaseDate: "2026年", platforms: "PC+Switch2+PS5+Xbox", heat: "中低", heatNote: "米哈游牧场项目，《粒粒的小人国》竞品", gameplay: "模拟经营+社交", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "崩坏：因缘精灵", publisher: "米哈游", studio: "/", releaseDate: "2026年", platforms: "移动+PC", heat: "中低", heatNote: "崩坏IP衍生作", gameplay: "CRPG+自走棋，融合精灵养成", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "望月", publisher: "诗悦网络", studio: "/", releaseDate: "2026年", platforms: "移动+PC+PS5", heat: "中", heatNote: "二次元+开放世界", gameplay: "开放世界二游+类GTA+多玩法缝合", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "荒野起源（Light of Motiram）", publisher: "腾讯", studio: "北极光", releaseDate: "2026年", platforms: "移动+PC+PS5", heat: "中高", heatNote: "腾讯北极光工作室，SOC品类", gameplay: "SOC+帕鲁like", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "异人之下（The Hidden Ones）", publisher: "腾讯", studio: "魔方", releaseDate: "2026年", platforms: "移动+PC", heat: "中高", heatNote: "腾讯魔方+顶级国漫IP", gameplay: "硬核ARPG", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "镭明闪击（Warp Knights）", publisher: "字节跳动", studio: "/", releaseDate: "2026年", platforms: "移动+PC", heat: "低", heatNote: "无明显创新", gameplay: "复合卡牌+TPS射击+塔防", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },

    // --- MCP 国内产品（待定）---
    { region: "国内", name: "烽火十四", publisher: "烽火工作室", studio: "/", releaseDate: "待定", platforms: "PC", heat: "低", heatNote: "抗战敏感题材", gameplay: "国产抗战题材FPS，线性关卡", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "龙帮", publisher: "网易", studio: "名越工作室", releaseDate: "待定", platforms: "PC", heat: "低", heatNote: "网易+名越制作", gameplay: "动作冒险", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "剑心雕龙", publisher: "网易", studio: "雷火旗下临安24th", releaseDate: "待定", platforms: "移动+PC+Switch2", heat: "中低", heatNote: "《古剑奇谭》制作人新作，纯单机暗黑仙侠", gameplay: "ARPG", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "山海奇旅（Floatopia）", publisher: "网易", studio: "/", releaseDate: "待定", platforms: "PC+PS5+Xbox+Switch2", heat: "中低", heatNote: "《粒粒的小人国》竞品", gameplay: "模拟经营+社交", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "归唐（Blood Message）", publisher: "网易", studio: "雷火旗下临安24th", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "极高品质画面，写实武侠", gameplay: "ARPG，剧情导向", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "万民长歌：三国", publisher: "网易", studio: "第十事业部", releaseDate: "待定", platforms: "PC", heat: "低", heatNote: "率土团队研发", gameplay: "三国题材SLG", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "破碎之地", publisher: "网易", studio: "北落师门", releaseDate: "待定", platforms: "移动+PC", heat: "中低", heatNote: "网易北落师门", gameplay: "SOC", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "某写实开放世界", publisher: "米哈游", studio: "/", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "高", heatNote: "虚幻5引擎，3A级奇幻，生态AI模拟，智能NPC", gameplay: "ARPG", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "欧美卡通设计", publisher: "米哈游", studio: "/", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "米哈游在研项目", gameplay: "射击", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "CODE：PJSH", publisher: "米哈游", studio: "/", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "高", heatNote: "虚幻5引擎，类GTA", gameplay: "类GTA，载具为核心玩法", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "灰境行者", publisher: "腾讯", studio: "北极光", releaseDate: "待定", platforms: "PC", heat: "中", heatNote: "腾讯北极光", gameplay: "战术射击+搜打撤+职业构筑", licenseStatus: "已获版号", licenseNote: "客户端", source: "MCP" },
    { region: "国内", name: "穿越火线：虹", publisher: "腾讯", studio: "琳琅天上", releaseDate: "待定", platforms: "移动+PC", heat: "中高", heatNote: "CF头部IP新品", gameplay: "第一人称战术射击+恐怖主题", licenseStatus: "已获版号", licenseNote: "移动+客户端", source: "MCP" },
    { region: "国内", name: "百相千面（The Perceiver）", publisher: "叠纸", studio: "十七折", releaseDate: "待定", platforms: "移动+PC+PS5", heat: "中", heatNote: "高画质，类《燕云十六声》", gameplay: "开放世界武侠MMO", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "万物契约（Ballad of Antara）", publisher: "叠纸", studio: "/", releaseDate: "待定", platforms: "移动+PC+PS5", heat: "中", heatNote: "高画质，类《帕斯卡契约》", gameplay: "开放世界魂系ARPG", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },
    { region: "国内", name: "project prince", publisher: "字节跳动", studio: "/", releaseDate: "待定", platforms: "PC+Switch2", heat: "中", heatNote: "字节跳动游戏", gameplay: "待定", licenseStatus: "", licenseNote: "", source: "MCP" },
    { region: "国内", name: "《三体》IP游戏", publisher: "字节跳动", studio: "杭州江南", releaseDate: "待定", platforms: "待定", heat: "中低", heatNote: "三体超级IP", gameplay: "待定", licenseStatus: "未获版号", licenseNote: "", source: "MCP" },

    // --- MCP 国内产品（2027年）---
    { region: "国内", name: "逆神者", publisher: "帕斯亚科技", studio: "/", releaseDate: "2027年", platforms: "PC", heat: "中低", heatNote: "", gameplay: "动作RPG", licenseStatus: "", licenseNote: "", source: "MCP" },

    // =============================================
    // ===== 二、网络搜索验证补充（不在腾讯文档中，已验证真实性）=====
    // =============================================
    { region: "海外", name: "InZOI", publisher: "Krafton", studio: "Krafton", releaseDate: "2026年", platforms: "PS5", heat: "中", heatNote: "模拟人生竞品", gameplay: "生活模拟经营", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "Intergalactic: The Heretic Prophet", publisher: "索尼", studio: "Naughty Dog", releaseDate: "待定", platforms: "PS5", heat: "中高", heatNote: "顽皮狗全新科幻IP", gameplay: "科幻第三人称动作冒险", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "巫师4", publisher: "CD Projekt Red", studio: "CD Projekt Red", releaseDate: "2027年", platforms: "PC+PS5+Xbox", heat: "高", heatNote: "CDPR确认最早2027年发售", gameplay: "开放世界动作RPG", licenseStatus: "", licenseNote: "", source: "网络搜索" },

    { region: "海外", name: "合金装备：大师合集 Vol.2", publisher: "科乐美", studio: "/", releaseDate: "2026/8/27", platforms: "PC+PS5+Xbox+Switch2+Switch", heat: "中低", heatNote: "含MGS4+和平行者+Ghost Babel，据Konami官方+PlayStation Blog 8+源确认8/27", gameplay: "潜行动作合集", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "Vivarium", publisher: "Serenity Forge", studio: "Studio Meadowflower", releaseDate: "2027年", platforms: "PC+Xbox", heat: "低", heatNote: "手绘风生活模拟冒险，Xbox Showcase公布2027年，据Gematsu+NoisyPixel 6+源确认", gameplay: "手绘风生活模拟冒险", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "生化危机：维罗妮卡（RE Veronica）", publisher: "卡普空", studio: "/", releaseDate: "2027年", platforms: "PC+PS5+Xbox+Switch2", heat: "中高", heatNote: "《生化危机 Code: Veronica》重制版，SGF开场公布，据IGN+Polygon+Eurogamer 8+源确认", gameplay: "恐怖生存动作冒险", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "最终幻想7 启示录（FF7 Revelation）", publisher: "史克威尔艾尼克斯", studio: "/", releaseDate: "2027年春", platforms: "PC+PS5+Xbox+Switch2", heat: "中高", heatNote: "FF7重制三部曲最终章，SGF闭幕作，全平台同步首发，据IGN+Polygon 8+源确认", gameplay: "ARPG", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "GEN ATLAS", publisher: "/", studio: "上田文人genDESIGN", releaseDate: "待定", platforms: "PC+PS5", heat: "中高", heatNote: "《ICO》《旺达与巨像》创作者上田文人新作，SGF公布，据IGN+Eurogamer 6+源确认", gameplay: "科幻动作冒险", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "异形：隔离2（Alien: Isolation 2）", publisher: "世嘉", studio: "Creative Assembly", releaseDate: "待定", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "异形：隔离续作，SGF公布，据IGN+Eurogamer 6+源确认", gameplay: "第一人称恐怖生存", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "与狼同行2（The Wolf Among Us 2）", publisher: "Telltale", studio: "Telltale Games", releaseDate: "2027年", platforms: "PC+PS5+Xbox+Switch", heat: "中", heatNote: "Telltale经典叙事续作，SGF确认2027年，据IGN+Eurogamer 6+源确认", gameplay: "叙事互动冒险", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "星刃：血雨（Stellar Blade: Blood Rain）", publisher: "Shift Up", studio: "Shift Up", releaseDate: "待定", platforms: "PC+PS5", heat: "中", heatNote: "《剑星》续作，新主角，SGF公布，据IGN+Polygon 6+源确认", gameplay: "动作冒险ARPG", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "星球大战：零号连队（Zero Company）", publisher: "EA/Lucasfilm", studio: "Bit Reactor", releaseDate: "2026/8/27", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "X-COM式星战回合策略，SGF确认8/27发售$59.99，据IGN+GamesRadar 6+源确认", gameplay: "回合制战术策略", licenseStatus: "", licenseNote: "", source: "网络搜索" },
    { region: "海外", name: "火焰纹章：万缕千丝（Fortune's Weave）", publisher: "任天堂", studio: "/", releaseDate: "2026/9/17", platforms: "Switch2", heat: "中低", heatNote: "系列销量1800万+，任天堂直面会公布", gameplay: "战棋SRPG", licenseStatus: "", licenseNote: "", source: "MCP" },

    { region: "国内", name: "刺客信条：影（国行版）", publisher: "育碧/腾讯", studio: "/", releaseDate: "2026年", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "国行版审核中", gameplay: "潜行动作冒险", licenseStatus: "审核中", licenseNote: "腾讯代理国行版", source: "网络搜索" },
];

// ====== 已上线产品数据（仅展示2026年上线的）======
const pipelineReleased = [
    // ===== 2026-08-13 更新: 新增已发售 =====
    { region: "海外", name: "光环：战役进化", publisher: "微软", studio: "Halo Studios", releaseDate: "2026/7/28", platforms: "PC+PS5+Xbox", heat: "中高", heatNote: "光环IP续作，系列超800万，忠实重制+扩展，据Halo官方+PSU+9game 8+源确认7/28发售(7/23高级版抢先体验)+Game Pass首日", gameplay: "HD画面，4人联机合作，新武器敌人", source: "MCP" },
    { region: "海外", name: "轮回之兽（Beast of Reincarnation）", publisher: "Game Freak", studio: "/", releaseDate: "2026/8/4", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "宝可梦开发商Game Freak首款非宝可梦AAA转型之作，据Notebookcheck+NoisyPixel+Gadgets360 8+源确认8/4发售", gameplay: "后末日日本，一人一狗探索，技术要求高战斗", source: "MCP" },
    { region: "海外", name: "漫威斗魂（Marvel Tokon Fighting Souls）", publisher: "索尼", studio: "Arc System Works", releaseDate: "2026/8/6", platforms: "PS5+PC", heat: "低", heatNote: "漫威IP 4v4团队格斗，Arc System Works开发，据PlayStation Blog官方+Notebookcheck+allthings.how 8+源确认8/6全球发售", gameplay: "4v4团队格斗游戏，支持跨平台联机", source: "MCP" },
    { region: "海外", name: "Splatoon Raiders", publisher: "任天堂", studio: "任天堂", releaseDate: "2026/7/23", platforms: "Switch2", heat: "中", heatNote: "Splatoon系列首款衍生作，Switch2独占，单人为焦点的地牢探索，据Nintendo官方+NintendoLife+9game 8+源确认7/23发售", gameplay: "单人地牢探索+宝藏收集", source: "网络搜索" },
    { region: "海外", name: "异度神剑2 Switch2版（Xenoblade Chronicles 2: Switch 2 Edition）", publisher: "任天堂", studio: "Monolith Soft", releaseDate: "2026/7/30", platforms: "Switch2", heat: "中低", heatNote: "Switch 2增强版，4K/60fps+1080p掌机模式，黄金国DLC免费升级，据Nintendo官方+百家号 6+源确认7/30实体版发售", gameplay: "JRPG增强版，支持4K/60fps TV模式+DLC黄金国", source: "网络搜索" },
    { region: "国内", name: "雾影猎人（Mistfall Hunter）", publisher: "字节跳动", studio: "Bellring Games", releaseDate: "2026/7/30", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "字节Bellring Games黑暗奇幻PvPvE撤离动作RPG，发售4天全平台破50万玩家，Steam好评率59%褒贬不一，据游侠+ZOL+IT之家多源确认7/30发售", gameplay: "PvPvE+冷兵器类魂搜打撤", source: "MCP" },

    { region: "海外", name: "幻兽帕鲁 1.0（Palworld 1.0）", publisher: "Pocketpair", studio: "Pocketpair", releaseDate: "2026/7/10", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "SGF确认7/10退出EA正式发售，PS5首发+Xbox Game Pass，据Gematsu+GameSpot 8+源确认", gameplay: "开放世界生存制作+怪物收集，72只新帕鲁+世界树区域+PvP竞技场", source: "网络搜索" },
    { region: "海外", name: "EA Sports College Football 27", publisher: "EA", studio: "EA Orlando", releaseDate: "2026/7/9", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "EA年货体育系列首次登陆PC，据EA官方+Gematsu确认7/9发售", gameplay: "美式橄榄球模拟运动", source: "网络搜索" },
    { region: "海外", name: "艾恩葛朗特 回荡新声", publisher: "万代南梦宫", studio: "/", releaseDate: "2026/7/10", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "刀剑神域IP，据allthings.how+ScreenRant多源确认7/10发售", gameplay: "创建英雄，装备选择，伙伴协同战斗升级", source: "MCP" },
    { region: "海外", name: "碧蓝幻想Relink：无尽黄昏", publisher: "Cygames", studio: "Cygames", releaseDate: "2026/7/9", platforms: "PC+Switch2+PS5", heat: "中", heatNote: "前作全球300万+，据allthings.how+GamesRadar多源确认7/9发售", gameplay: "多人联机ARPG", source: "网络搜索" },
    { region: "海外", name: "刺客信条：黑旗 记忆重置", publisher: "育碧", studio: "育碧", releaseDate: "2026/7/9", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "AC4黑旗完整重制，$59.99，据Ubisoft官方+IGN+GameSpot 8+源确认7/9发售", gameplay: "开放世界海战动作冒险，新角色+Mary Read扩展故事线", source: "MCP" },
    { region: "海外", name: "数码宝贝物语：时空旅人", publisher: "万代南梦宫", studio: "Media.Vision", releaseDate: "2026/7/10", platforms: "Switch2+Switch", heat: "中低", heatNote: "数码宝贝IP RPG，据Bandai Namco官方+Gematsu确认7/10发售", gameplay: "怪物收集RPG，人兽羁绊+时空穿越题材", source: "网络搜索" },
    // ===== 2026-07-02 更新: 新增已发售 =====
    { region: "海外", name: "UFC 6", publisher: "EA", studio: "EA Vancouver", releaseDate: "2026/6/19", platforms: "PS5+Xbox", heat: "低", heatNote: "UFC授权格斗，寒霜引擎，EA官方确认6/19发售(6/12抢先体验)，据EA投资者页+IGN评测+Metacritic 8+源确认", gameplay: "格斗", source: "MCP" },
    { region: "海外", name: "冒险家艾略特的千年物语", publisher: "史克威尔艾尼克斯", studio: "浅野团队", releaseDate: "2026/6/19", platforms: "PC+PS5+Xbox+Switch2", heat: "低", heatNote: "HD-2D视觉动作冒险，浅野团队(歧路旅人/三角战略)首款动作RPG，IGN 8分，主机6/18/Steam 6/19发售", gameplay: "俯视角探索，仙女辅助战斗，时空穿梭冒险", source: "MCP" },
    { region: "海外", name: "星际火狐（Star Fox）", publisher: "任天堂", studio: "/", releaseDate: "2026/6/25", platforms: "Switch2", heat: "低", heatNote: "星际火狐64重制版，系列销量400万+，6月Switch2最大独占，据Gamermarkt+腾讯多源确认6/25发售", gameplay: "轨道式第三人称太空射击，支持单人/本地双人合作与4v4多人对战", source: "MCP" },
    { region: "海外", name: "死或生6：最后一战", publisher: "光荣特库摩", studio: "Team NINJA", releaseDate: "2026/6/25", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "DOA系列30周年强化版，整合原版5赛季DLC+29角色+KOF联动，据百度百科+3DM+腾讯多源确认6/25发售", gameplay: "3D对战格斗", source: "网络搜索" },
    // ===== 2026-06-18 更新: 新增已发售 =====
    { region: "海外", name: "Gothic 1 Remake", publisher: "THQ Nordic", studio: "Alkimia Interactive", releaseDate: "2026/6/6", platforms: "PC+Xbox+PS5", heat: "低", heatNote: "2001年经典RPG重制，核心怀旧玩家期待，据GamesRadar+IGN多源确认6/6发售（MCP修正为6/6）", gameplay: "开放世界RPG", source: "MCP" },
    // ===== 2026-06-04 更新: 新增已发售 =====
    { region: "海外", name: "最终幻想7 重生（Xbox/Switch版）", publisher: "史克威尔艾尼克斯", studio: "/", releaseDate: "2026/6/3", platforms: "Xbox+Switch2", heat: "中高", heatNote: "FF7重制三部曲第二作移植版，据GamesRadar+IGN+Gematsu 8+源确认6/3发售", gameplay: "ARPG", source: "网络搜索" },
    { region: "海外", name: "Mina the Hollower", publisher: "Yacht Club Games", studio: "Yacht Club Games", releaseDate: "2026/5/29", platforms: "PC+PS5+Xbox+Switch2+Switch", heat: "中低", heatNote: "《铲子骑士》开发商新作，据Gematsu+RPGSite+GameInformer 8+源确认5/29发售", gameplay: "8-bit复古哥特风动作冒险", source: "网络搜索" },
    // ===== 2026-05-28 更新: 新增已发售 =====
    { region: "海外", name: "乐高蝙蝠侠：黑暗骑士的遗产", publisher: "华纳兄弟", studio: "/", releaseDate: "2026/5/23", platforms: "PC+Switch2+PS5+Xbox", heat: "中低", heatNote: "乐高+蝙蝠侠双IP，据GameSpot+MSN+Gematsu多源确认5/22发售", gameplay: "潜行跑酷+开放世界探索，乐高积木风格", source: "MCP" },
    { region: "海外", name: "007：锋芒初露", publisher: "世嘉", studio: "IO Interactive", releaseDate: "2026/5/28", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "开发成本达1.8亿美元，据IGN+GameSpot+TechTimes+Beebom 10+源确认5/27发售", gameplay: "特工题材ACG，潜行及多武器枪战刺杀", source: "MCP" },
    { region: "海外", name: "Luna Abyss", publisher: "Kwalee", studio: "Kwalee Labs", releaseDate: "2026/5/21", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "弹幕地狱FPS，据Gematsu+IGN+Wccftech 8+源确认5/21发售，Game Pass首日入库", gameplay: "第一人称弹幕地狱射击+宇宙恐怖", source: "网络搜索" },
    // ===== 2026-05-21 更新: 新增已发售 =====
    { region: "海外", name: "极限竞速：地平线6", publisher: "微软", studio: "Playground Games", releaseDate: "2026/5/19", platforms: "PC+Xbox", heat: "中低", heatNote: "IP续作，垂类头部，日本设定MC高分，据IGN/TechRadar/PCGamer/GamesRadar多源确认5/19发售", gameplay: "赛车竞速游戏头部游戏", source: "MCP" },
    { region: "海外", name: "耀西与不可思议的图鉴", publisher: "任天堂", studio: "Good-Feel", releaseDate: "2026/5/21", platforms: "Switch2", heat: "中", heatNote: "任天堂官方确认5/21，超级马力欧40周年纪念作品，据Nintendo官方+NintendoLife+Gematsu多源确认", gameplay: "横版平台跳跃冒险", source: "网络搜索" },
    // ===== 2026-05-14 更新: 新增已发售 =====
    { region: "海外", name: "黑相集：指令8020", publisher: "Supermassive Games", studio: "/", releaseDate: "2026/5/12", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "直到黎明开发商，黑相集系列新作", gameplay: "科幻题材生存冒险恐怖游戏", source: "MCP" },
    { region: "海外", name: "古神之呼唤", publisher: "Raw Fury", studio: "Out of the Blue Games", releaseDate: "2026/5/13", platforms: "PC+PS5+Xbox+Switch2", heat: "低", heatNote: "《海之呼唤》续作，克苏鲁题材", gameplay: "克苏鲁题材冒险解谜", source: "MCP" },
    { region: "海外", name: "深海迷航2", publisher: "Krafton", studio: "Unknown Worlds", releaseDate: "2026/5/14", platforms: "PC+Xbox", heat: "中", heatNote: "前作销量超2000万，5/14 EA发售，$29.99，首次支持4人合作，Game Pass首日入库", gameplay: "海洋探索生存建造", source: "网络搜索" },
    // ===== 2026-04-30 更新: 新增已发售 =====
    { region: "海外", name: "暗黑破坏神4：憎恨之王", publisher: "暴雪", studio: "/", releaseDate: "2026/4/28", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "暗黑4大型资料片，据Polygon/IGN/Icy-Veins多源评测确认4/28已发售", gameplay: "ARPG刷装备", source: "MCP" },
    { region: "海外", name: "SAROS", publisher: "索尼", studio: "Housemarque", releaseDate: "2026/4/30", platforms: "PS5", heat: "中低", heatNote: "Returnal精神续作，据Tom's Guide/PSU/Games.gg多源评测确认4/30发售，PS5独占", gameplay: "第三人称科幻射击", source: "MCP" },
    { region: "海外", name: "魔法门之英雄无敌：上古纪元", publisher: "育碧/Unfrozen", studio: "Unfrozen", releaseDate: "2026/4/30", platforms: "PC", heat: "中低", heatNote: "Steam/MS Store Early Access 4/30发售确认，Steam愿望单100万+，Game Pass首日入库", gameplay: "回合制策略RPG", source: "MCP" },
    // ===== 2026-04-23 更新: 新增已发售 =====
    { region: "海外", name: "明日潮汐", publisher: "Digixart", studio: "/", releaseDate: "2026/4/22", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "《96号公路》团队新作，M站均分75分好评", gameplay: "类《无人深空》异步联机探索生存", source: "MCP" },
    { region: "国内", name: "异环（Neverness to Everness）", publisher: "完美世界", studio: "Hotta Studio", releaseDate: "2026/4/23", platforms: "移动+PC+PS", heat: "中", heatNote: "预约量破3000万，Hotta Studio超自然都市RPG，据IGN中国/完美世界官网多源确认4/23全平台公测", gameplay: "开放世界二游+类GTA+多玩法缝合", source: "MCP" },
    // ===== 2026-04-16 更新: 新增已发售 =====
    { region: "海外", name: "Replaced", publisher: "Thunderful Publishing", studio: "Sad Cat Studios", releaseDate: "2026/4/14", platforms: "PC+Xbox", heat: "低", heatNote: "80年代复古未来科幻平台动作，Metacritic多源评测确认发售", gameplay: "2.5D赛博朋克动作平台+自由流动战斗", source: "MCP" },
    { region: "海外", name: "识质存在（PRAGMATA）", publisher: "卡普空", studio: "/", releaseDate: "2026/4/17", platforms: "PC+Switch2+PS5+Xbox", heat: "中", heatNote: "据GameSpot/GamesRadar/VGC/Polygon等多源评测确认发售，Fami通最受期待榜第一", gameplay: "第三人称射击+黑客解谜", source: "MCP" },
    // ===== 腾讯文档 MCP 已上线基准数据 =====
    { region: "海外", name: "宝可梦：冠军", publisher: "任天堂", studio: "/", releaseDate: "2026/4/9", platforms: "Switch", heat: "中低", heatNote: "宝可梦IP，主打PVP，宝可梦官方对战平台", gameplay: "主打PVP，宝可梦官方对战平台", source: "MCP" },
    { region: "国内", name: "哀鸿：城破十日记", publisher: "零创游戏", studio: "/", releaseDate: "2026/4/4", platforms: "PC", heat: "低", heatNote: "前作销量破百万", gameplay: "AVG文字冒险游戏", source: "MCP" },
    { region: "海外", name: "Starfield（PS5版）", publisher: "微软/Bethesda", studio: "Bethesda Games", releaseDate: "2026/4/7", platforms: "PS5", heat: "中高", heatNote: "B社RPG大作登陆PS5", gameplay: "太空探索开放世界RPG", source: "网络搜索" },
    { region: "海外", name: "凯恩的遗产：崛起", publisher: "Crystal Dynamics", studio: "/", releaseDate: "2026/3/31", platforms: "PC+PS+Xbox+Switch", heat: "低", heatNote: "经典吸血鬼题材续作", gameplay: "垂直移动2D动作平台", source: "MCP" },
    { region: "海外", name: "奇异人生：重聚", publisher: "Square Enix", studio: "/", releaseDate: "2026/3/27", platforms: "PC+PS+Xbox", heat: "低", heatNote: "奇异人生系列新章，Max和Chloe最终章", gameplay: "时空操控叙事冒险，情感抉择影响结局", source: "MCP" },
    { region: "海外", name: "流星洛克人：完美合集", publisher: "卡普空", studio: "/", releaseDate: "2026/3/27", platforms: "PC+PS+Xbox+Switch", heat: "低", heatNote: "收录7部系列作品", gameplay: "卡牌战斗RPG合集", source: "MCP" },
    { region: "海外", name: "索尼克赛车：交叉世界", publisher: "世嘉", studio: "/", releaseDate: "2026/3/26", platforms: "Switch2", heat: "低", heatNote: "IGN 9分编辑选择奖，跨维度竞速创新", gameplay: "索尼克角色跨维度竞速，道具赛，多人在线对战", source: "MCP" },
    { region: "海外", name: "Screamer", publisher: "Milestone S.r.l.", studio: "/", releaseDate: "2026/3/26", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "赛车垂类头部公司", gameplay: "二次元赛车", source: "MCP" },
    { region: "国内", name: "洛克王国：世界", publisher: "腾讯", studio: "/", releaseDate: "2026/3/26", platforms: "移动+PC", heat: "中高", heatNote: "洛克王国正统续作，大世界精灵养成", gameplay: "开放世界回合制RPG，精灵收集养成战斗", source: "MCP" },
    { region: "海外", name: "检疫区：最后一站", publisher: "Brigada Games", studio: "Devolver Digital", releaseDate: "2026/1/12", platforms: "PC", heat: "低", heatNote: "Steam心愿单130万", gameplay: "丧尸识别+基地管理", source: "MCP" },
    { region: "海外", name: "2XKO", publisher: "腾讯/拳头", studio: "Riot Games", releaseDate: "2026/1/20", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "英雄联盟IP格斗游戏", gameplay: "双人格斗/单人双角色操控", source: "MCP" },
    { region: "海外", name: "英雄传说 界之轨迹 -告别塞姆利亚", publisher: "Falcom", studio: "/", releaseDate: "2026/1/22", platforms: "PC+Switch+PS5", heat: "低", heatNote: "系列销量850万", gameplay: "JRPG，剧情驱动", source: "MCP" },
    { region: "海外", name: "最终幻想7重制版：间奏", publisher: "史克威尔艾尼克斯", studio: "/", releaseDate: "2026/1/22", platforms: "Switch2+Xbox+PC", heat: "中低", heatNote: "IP系列销量超2亿", gameplay: "JRPG", source: "MCP" },
    { region: "国内", name: "明日方舟：终末地", publisher: "鹰角", studio: "/", releaseDate: "2026/1/22", platforms: "移动+PC+PS", heat: "中", heatNote: "明日方舟IP", gameplay: "基建+ARPG", source: "MCP" },
    { region: "海外", name: "巅峰守卫", publisher: "Wildlight Entertainment", studio: "/", releaseDate: "2026/1/26", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "TGA 2025压轴，Apex团队", gameplay: "PvP突袭射击+MOBA推塔攻防", source: "MCP" },
    { region: "海外", name: "七大罪：起源", publisher: "网石", studio: "/", releaseDate: "2026/1/28", platforms: "PC+PS5+移动", heat: "低", heatNote: "七大罪IP", gameplay: "开放世界动作冒险", source: "MCP" },
    { region: "海外", name: "噬血代码2", publisher: "万代南梦宫", studio: "/", releaseDate: "2026/1/30", platforms: "PC+PS5+Xbox", heat: "中低", heatNote: "前作销量400万", gameplay: "魂类ARPG", source: "MCP" },
    { region: "海外", name: "勇者斗恶龙7重制版", publisher: "史克威尔艾尼克斯", studio: "/", releaseDate: "2026/2/5", platforms: "PC+Switch+PS5+Xbox", heat: "低", heatNote: "系列销量8800万", gameplay: "JRPG，回合制", source: "MCP" },
    { region: "海外", name: "仁王3", publisher: "光荣特库摩", studio: "Team Ninja", releaseDate: "2026/2/6", platforms: "PC+PS5", heat: "中", heatNote: "魂类头部，销量800万+", gameplay: "高难度魂系动作RPG", source: "MCP" },
    { region: "海外", name: "如龙 极3 & 如龙3外传 Dark Ties", publisher: "世嘉", studio: "RGG Studio", releaseDate: "2026/2/12", platforms: "PC+Switch+PS5+Xbox", heat: "低", heatNote: "IP重制版，垂类头部", gameplay: "黑道动作冒险", source: "MCP" },
    { region: "海外", name: "马力欧网球：狂热", publisher: "任天堂", studio: "Camelot", releaseDate: "2026/2/12", platforms: "Switch2", heat: "低", heatNote: "马力欧网球系列第8作", gameplay: "体感网球", source: "MCP" },
    { region: "海外", name: "极速骑行6", publisher: "Milestone S.r.l.", studio: "/", releaseDate: "2026/2/12", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "摩托车竞速垂类", gameplay: "摩托车竞速", source: "MCP" },
    { region: "海外", name: "苍翼：混沌效应X", publisher: "91Act", studio: "/", releaseDate: "2026/2/12", platforms: "PC+Switch+PS5+Xbox", heat: "低", heatNote: "国游，PC版销量百万", gameplay: "横版ARPG+Roguelike", source: "MCP" },
    { region: "海外", name: "嗨嗨人生2", publisher: "Squanch Games", studio: "Squanch Games", releaseDate: "2026/2/13", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "Steam周销量榜第2", gameplay: "喜剧FPS", source: "MCP" },
    { region: "海外", name: "生灵重塑/REANIMAL", publisher: "Tarsier Studios", studio: "/", releaseDate: "2026/2/13", platforms: "PC+Switch+PS5+Xbox", heat: "中低", heatNote: "小小梦魇系列销量2000万，Steam愿望单100万+", gameplay: "双人合作恐怖探险", source: "MCP" },
    { region: "海外", name: "冥河:贪婪之刃", publisher: "Cyanide Studio", studio: "/", releaseDate: "2026/2/19", platforms: "PC+Switch+PS5+Xbox", heat: "低", heatNote: "前作销量近100万", gameplay: "史莱姆题材潜行刺杀", source: "MCP" },
    { region: "海外", name: "生化危机9：安魂曲", publisher: "卡普空", studio: "/", releaseDate: "2026/2/27", platforms: "PC+Switch2+PS5+Xbox", heat: "中高", heatNote: "首周销量500万，系列销量1.7亿+", gameplay: "恐怖生存动作冒险", source: "MCP" },
    { region: "海外", name: "宝可梦 Pokopia", publisher: "任天堂", studio: "宝可梦公司", releaseDate: "2026/3/5", platforms: "Switch2", heat: "中", heatNote: "宝可梦IP", gameplay: "宝可梦模拟经营", source: "MCP" },
    { region: "海外", name: "失落星船：马拉松", publisher: "索尼/Bungie", studio: "Bungie", releaseDate: "2026/3/6", platforms: "PC+PS5+Xbox", heat: "中", heatNote: "Bungie被索尼收购后首款新作", gameplay: "团队撤离射击PvPvE", source: "MCP" },
    { region: "海外", name: "贪婪之秋2", publisher: "Spiders", studio: "/", releaseDate: "2026/3/11", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "前作销量200万", gameplay: "沉浸叙事型RPG", source: "MCP" },
    { region: "海外", name: "零～红蝶～REMAKE～", publisher: "光荣特库摩", studio: "/", releaseDate: "2026/3/12", platforms: "PC+Switch2+PS5+Xbox", heat: "低", heatNote: "经典恐怖IP重制", gameplay: "和风恐怖冒险", source: "MCP" },
    { region: "海外", name: "怪物猎人物语3", publisher: "卡普空", studio: "/", releaseDate: "2026/3/13", platforms: "PC+Switch+PS5", heat: "中高", heatNote: "怪猎IP，系列销量1亿500万", gameplay: "ARPG+怪物收服", source: "MCP" },
    { region: "海外", name: "MLB The Show 26", publisher: "EA/San Diego Studios", studio: "/", releaseDate: "2026/3/17", platforms: "PC+Switch+PS5+Xbox", heat: "中低", heatNote: "美国职棒官方授权", gameplay: "棒球模拟运动", source: "MCP" },
    { region: "海外", name: "死亡搁浅2：冥滩之上（PC版）", publisher: "小岛工作室", studio: "/", releaseDate: "2026/3/19", platforms: "PC", heat: "中低", heatNote: "PS端首周140万", gameplay: "开放世界送货冒险", source: "MCP" },
    { region: "海外", name: "红色沙漠", publisher: "Pearl Abyss", studio: "/", releaseDate: "2026/3/20", platforms: "PC+PS+Mac", heat: "中低", heatNote: "开放世界动作冒险", gameplay: "开放世界动作冒险，中世纪背景", source: "MCP" },
    { region: "海外", name: "杀戮尖塔2", publisher: "Mega Crit Games", studio: "Mega Crit", releaseDate: "2026/3/5", platforms: "PC", heat: "中", heatNote: "前作Steam好评如潮，EA版大获成功", gameplay: "Roguelike卡牌构筑", source: "网络搜索" },
    { region: "海外", name: "SPLITGATE: Arena Reloaded", publisher: "1047 Games", studio: "/", releaseDate: "2026/1/5", platforms: "PC+Switch+PS5+Xbox", heat: "低", heatNote: "免费游戏《分裂之门2》重置", gameplay: "竞技场射击", source: "MCP" },
    { region: "海外", name: "迪士尼 蜜娜莉丝·健健好身姿", publisher: "迪士尼&Imagineer", studio: "/", releaseDate: "2026/1/9", platforms: "Switch2", heat: "低", heatNote: "米老鼠IP+健身题材", gameplay: "音乐体感健身打卡游戏", source: "MCP" },
    { region: "海外", name: "歧路旅人0", publisher: "世嘉", studio: "/", releaseDate: "2026/1/13", platforms: "PC+Switch+PS+Xbox", heat: "低", heatNote: "系列销量500万", gameplay: "3D像素复古RPG，战棋深度策略", source: "MCP" },
    { region: "海外", name: "银河战士 Prime 4：穿越未知", publisher: "任天堂", studio: "Retro Studios", releaseDate: "2026/1/12", platforms: "Switch2", heat: "低", heatNote: "独占游戏，前作首周销量109万", gameplay: "异世界星球探索，第一人称射击", source: "MCP" },
    { region: "国内", name: "我独自升级：起立·觉醒", publisher: "网石游戏", studio: "/", releaseDate: "2026/1/3", platforms: "PC+Xbox", heat: "中低", heatNote: "我独自升级IP", gameplay: "动作RPG", source: "MCP" },
    { region: "海外", name: "星之卡比：Air Riders", publisher: "任天堂", studio: "/", releaseDate: "2026/1/18", platforms: "Switch2", heat: "中", heatNote: "星之卡比IP版马里奥赛车", gameplay: "竞速游戏", source: "MCP" },
    { region: "海外", name: "逃离塔科夫（正式版）", publisher: "Battlestate Games", studio: "/", releaseDate: "2026/1/23", platforms: "PC", heat: "中低", heatNote: "逃离塔科夫玩法鼻祖", gameplay: "搜打撤射击", source: "MCP" },
    { region: "海外", name: "纪元117：罗马和平", publisher: "育碧", studio: "美因茨工作室", releaseDate: "2026/1/22", platforms: "PC+PS5+Xbox", heat: "低", heatNote: "纪元IP，垂类玩法", gameplay: "历史城市模拟经营", source: "MCP" },
    { region: "国内", name: "荒原曙光", publisher: "阿里", studio: "/", releaseDate: "2026/1/21", platforms: "移动+PC", heat: "中低", heatNote: "预约人数800万", gameplay: "SOC", source: "MCP" },
    { region: "海外", name: "使命召唤：黑色行动7", publisher: "微软", studio: "Treyarch", releaseDate: "2026/1/21", platforms: "PS5+Xbox+PC", heat: "中", heatNote: "使命召唤IP，系列销量5亿", gameplay: "FPS射击", source: "MCP" },
    { region: "海外", name: "塞尔达无双：封印战记", publisher: "任天堂&光荣特库摩", studio: "/", releaseDate: "2026/1/14", platforms: "Switch2", heat: "中", heatNote: "塞尔达IP，无双系列前作400万", gameplay: "割草动作", source: "MCP" },
    { region: "海外", name: "欧陆风云5", publisher: "Paradox", studio: "/", releaseDate: "2026/1/13", platforms: "PC", heat: "中低", heatNote: "IP续作，垂类头部", gameplay: "历史策略模拟", source: "MCP" },
    { region: "海外", name: "足球经理26", publisher: "世嘉", studio: "Sports Interactive", releaseDate: "2026/1/13", platforms: "PC+Xbox+PS", heat: "中低", heatNote: "年货IP，垂类头部", gameplay: "模拟经营球队", source: "MCP" },
];

// ====== 数据合并与处理 ======
const pipelineData = [
    ...pipelineUnreleased.map(g => ({ ...g, released: false })),
    ...pipelineReleased.map(g => ({ ...g, released: true }))
];

// Pipeline 数据处理函数
function getPipelineQuarter(dateStr) {
    if (!dateStr) return 'tbd';
    if (dateStr.includes('待定') || dateStr.includes('待') || dateStr.includes('未公布')) return 'tbd';
    if (dateStr.includes('2027')) return 'y2027';
    
    const match = dateStr.match(/(\d{4})\/(\d{1,2})/);
    if (match) {
        const month = parseInt(match[2]);
        if (month <= 3) return 'q1';
        if (month <= 6) return 'q2';
        if (month <= 9) return 'q3';
        return 'q4';
    }
    
    if (dateStr.includes('Q1')) return 'q1';
    if (dateStr.includes('Q2')) return 'q2';
    if (dateStr.includes('Q3')) return 'q3';
    if (dateStr.includes('Q4')) return 'q4';
    
    if (dateStr.includes('秋')) return 'q3';
    if (dateStr.includes('夏')) return 'q2';
    if (dateStr.includes('末')) return 'q4';
    
    if (dateStr.includes('2026年')) return '2026year';
    
    return 'tbd';
}

function getPipelineSortDate(dateStr) {
    if (!dateStr) return 99999999;
    const match = dateStr.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
    if (match) return parseInt(match[1]) * 10000 + parseInt(match[2]) * 100 + parseInt(match[3]);
    const match2 = dateStr.match(/(\d{4})\/(\d{1,2})/);
    if (match2) return parseInt(match2[1]) * 10000 + parseInt(match2[2]) * 100;
    if (dateStr.includes('2026')) return 20260000;
    if (dateStr.includes('2027')) return 20270000;
    return 99999999;
}

function hasPlatform(platforms, target) {
    if (!platforms) return false;
    return platforms.toLowerCase().includes(target.toLowerCase());
}

function getHeatClass(heat) {
    switch(heat) {
        case '高': return 'heat-high';
        case '中高': return 'heat-mid-high';
        case '中': return 'heat-mid';
        case '中低': return 'heat-mid-low';
        case '低': return 'heat-low';
        default: return 'heat-low';
    }
}

function getHeatIcon(heat) {
    switch(heat) {
        case '高': return '🔥';
        case '中高': return '⚡';
        case '中': return '📊';
        case '中低': return '📉';
        case '低': return '⬜';
        default: return '⬜';
    }
}

function getRegionFlag(region) {
    return region === '国内' ? '🇨🇳' : '🌍';
}

// ============ Pipeline Tab 渲染引擎 V2 ============

function renderPipelineV2() {
    const timeFilter = document.getElementById('pipelineTimeFilter')?.value || 'all';
    const heatFilter = document.getElementById('pipelineHeatFilter')?.value || 'all';
    const regionFilter = document.getElementById('pipelineRegionFilter')?.value || 'all';
    const searchFilter = document.getElementById('pipelineSearchInput')?.value?.toLowerCase() || '';

    // 筛选未上线产品
    let unreleased = pipelineUnreleased.filter(g => {
        if (timeFilter !== 'all' && getPipelineQuarter(g.releaseDate) !== timeFilter) return false;
        if (heatFilter !== 'all' && g.heat !== heatFilter) return false;
        if (regionFilter !== 'all' && g.region !== regionFilter) return false;
        if (searchFilter && !g.name.toLowerCase().includes(searchFilter) && !g.publisher.toLowerCase().includes(searchFilter)) return false;
        return true;
    });

    // 2026已上线产品
    let released = pipelineReleased.filter(g => {
        if (heatFilter !== 'all' && g.heat !== heatFilter) return false;
        if (regionFilter !== 'all' && g.region !== regionFilter) return false;
        if (searchFilter && !g.name.toLowerCase().includes(searchFilter) && !g.publisher.toLowerCase().includes(searchFilter)) return false;
        return true;
    });

    // 更新 KPI
    updatePipelineKPI(unreleased, released);

    // 渲染已上线折叠区（置顶显示）
    renderReleasedSection(released);

    // 渲染未上线时间轴
    renderPipelineTimeline(unreleased);
}

function updatePipelineKPI(unreleased, released) {
    const total = unreleased.length;
    const now = new Date();
    const threeMonthsLater = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
    
    const upcoming = unreleased.filter(g => {
        const match = g.releaseDate.match(/(\d{4})\/(\d{1,2})\/(\d{1,2})/);
        if (match) {
            const d = new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
            return d >= now && d <= threeMonthsLater;
        }
        return false;
    }).length;

    const highHeat = unreleased.filter(g => g.heat === '高' || g.heat === '中高').length;
    const xboxCount = unreleased.filter(g => hasPlatform(g.platforms, 'Xbox')).length;
    const domesticCount = unreleased.filter(g => g.region === '国内').length;

    const el = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    
    el('pipelineTotalCount', total);
    el('pipelineUpcomingCount', upcoming);
    el('pipelineHighHeatCount', highHeat);
    el('pipelineXboxCount', xboxCount);
    el('pipelineXboxPct', total > 0 ? Math.round(xboxCount / total * 100) + '%' : '0%');
    el('pipelineDomesticCount', domesticCount);
    el('pipelineReleasedCount', released.length);
}

function renderPipelineTimeline(games) {
    const container = document.getElementById('pipelineTimeline');
    if (!container) return;

    // 按季度分组（顺序：Q1→Q2→Q3→Q4→2026年→2027年→待定）
    const quarters = {
        'q1': { label: '2026 Q1 (1-3月)', icon: '🌱', games: [] },
        'q2': { label: '2026 Q2 (4-6月)', icon: '☀️', games: [] },
        'q3': { label: '2026 Q3 (7-9月)', icon: '🍂', games: [] },
        'q4': { label: '2026 Q4 (10-12月)', icon: '❄️', games: [] },
        '2026year': { label: '2026年（具体时间待定）', icon: '📆', games: [] },
        'y2027': { label: '2027年', icon: '🔮', games: [] },
        'tbd': { label: '待定/未知', icon: '❓', games: [] }
    };

    games.forEach(g => {
        const q = getPipelineQuarter(g.releaseDate);
        if (quarters[q]) quarters[q].games.push(g);
        else quarters['tbd'].games.push(g);
    });

    let html = '<div class="pipeline-timeline-grid">';
    
    Object.entries(quarters).forEach(([key, q]) => {
        if (q.games.length === 0) return;
        
        // 排序：高关注度优先，同关注度按日期
        const heatOrder = { '高': 0, '中高': 1, '中': 2, '中低': 3, '低': 4 };
        q.games.sort((a, b) => {
            const ha = heatOrder[a.heat] ?? 5;
            const hb = heatOrder[b.heat] ?? 5;
            if (ha !== hb) return ha - hb;
            return getPipelineSortDate(a.releaseDate) - getPipelineSortDate(b.releaseDate);
        });

        html += `
        <div class="timeline-quarter">
            <div class="timeline-quarter-header">
                <span class="timeline-quarter-label">${q.icon} ${q.label}</span>
                <span class="timeline-quarter-count">${q.games.length} 款</span>
            </div>
            <div class="timeline-quarter-games">
        `;

        q.games.forEach((g, idx) => {
            const heatCls = getHeatClass(g.heat);
            const platforms = g.platforms.split('+').map(p => 
                `<span class="platform-tag-sm">${p.trim()}</span>`
            ).join('');
            
            const regionFlag = getRegionFlag(g.region);
            const regionTag = g.region === '国内' 
                ? '<span class="region-tag region-domestic">🇨🇳 国内</span>' 
                : '<span class="region-tag region-overseas">🌍 海外</span>';
            const cardId = `card-${key}-${idx}`;
            
            // 版号信息（仅国内产品）
            let licenseHtml = '';
            if (g.region === '国内' && g.licenseStatus) {
                const lcCls = g.licenseStatus === '已获版号' ? 'license-approved' : 
                              g.licenseStatus === '审核中' ? 'license-pending' : 'license-none';
                licenseHtml = `<span class="license-tag ${lcCls}">${g.licenseStatus}</span>`;
            }

            html += `
            <div class="timeline-game-card ${heatCls}" id="${cardId}" onclick="toggleCardDetail('${cardId}')">
                <div class="timeline-game-header">
                    <div class="timeline-game-name">
                        ${regionFlag} ${g.name}
                        ${regionTag}
                        ${licenseHtml}
                    </div>
                    <span class="card-expand-icon" id="expand-${cardId}">▼</span>
                </div>
                <div class="timeline-game-meta">
                    <span>${g.publisher}${g.studio && g.studio !== '/' ? ' · ' + g.studio : ''}</span>
                    <span>${g.releaseDate}</span>
                </div>
                <div class="timeline-game-tags">
                    <span class="heat-tag ${heatCls}">${getHeatIcon(g.heat)} ${g.heat}</span>
                    ${platforms}
                </div>
                <div class="card-detail-panel" id="detail-${cardId}" style="display:none;">
                    <div class="detail-divider"></div>
                    <div class="detail-row">
                        <span class="detail-label">🎮 玩法简析</span>
                        <span class="detail-value">${g.gameplay || '暂无信息'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">📝 关注度说明</span>
                        <span class="detail-value">${g.heatNote || '暂无信息'}</span>
                    </div>
                    ${g.region === '国内' ? `
                    <div class="detail-row">
                        <span class="detail-label">📋 版号状态</span>
                        <span class="detail-value">${g.licenseStatus || '暂无信息'}${g.licenseNote ? ' · ' + g.licenseNote : ''}</span>
                    </div>
                    ` : ''}
                    <div class="detail-row">
                        <span class="detail-label">🏢 发行商</span>
                        <span class="detail-value">${g.publisher}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">🎬 工作室</span>
                        <span class="detail-value">${g.studio && g.studio !== '/' ? g.studio : '未知'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">🌐 平台</span>
                        <span class="detail-value">${g.platforms}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">🗺️ 地区</span>
                        <span class="detail-value">${g.region === '国内' ? '🇨🇳 国内产品' : '🌍 海外产品'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">📂 数据来源</span>
                        <span class="detail-value">${g.source || '腾讯文档MCP'}</span>
                    </div>
                </div>
            </div>
            `;
        });

        html += '</div></div>';
    });

    html += '</div>';
    container.innerHTML = html;
}

function renderReleasedSection(released) {
    const container = document.getElementById('pipelineReleasedSection');
    if (!container) return;

    if (released.length === 0) {
        container.innerHTML = '<div style="padding:20px;color:var(--text-muted);text-align:center;">暂无符合条件的已上线产品</div>';
        return;
    }

    // 按日期倒序
    released.sort((a, b) => getPipelineSortDate(b.releaseDate) - getPipelineSortDate(a.releaseDate));

    let html = `
    <div class="released-section-wrapper">
        <div class="released-section-header" onclick="toggleReleasedSection()">
            <div class="released-section-title">
                <span class="released-icon">✅</span>
                <span>2026年已上线产品</span>
                <span class="released-count">${released.length} 款</span>
            </div>
            <span class="released-chevron" id="releasedChevron">▶</span>
        </div>
        <div class="released-section-body" id="releasedSectionBody" style="display:none;">
            <div class="released-grid">
    `;

    released.forEach((g, idx) => {
        const heatCls = getHeatClass(g.heat);
        const platforms = g.platforms.split('+').map(p => 
            `<span class="platform-tag-sm">${p.trim()}</span>`
        ).join('');
        const regionFlag = getRegionFlag(g.region);
        const regionTag = g.region === '国内' 
            ? '<span class="region-tag region-domestic">🇨🇳 国内</span>' 
            : '<span class="region-tag region-overseas">🌍 海外</span>';
        const cardId = `released-${idx}`;

        html += `
        <div class="timeline-game-card timeline-card-released ${heatCls}" id="${cardId}" onclick="toggleCardDetail('${cardId}')">
            <div class="timeline-game-header">
                <div class="timeline-game-name">
                    ${regionFlag} ${g.name}
                    ${regionTag}
                    <span class="released-badge">已上线</span>
                </div>
                <span class="card-expand-icon" id="expand-${cardId}">▼</span>
            </div>
            <div class="timeline-game-meta">
                <span>${g.publisher}${g.studio && g.studio !== '/' ? ' · ' + g.studio : ''}</span>
                <span>${g.releaseDate}</span>
            </div>
            <div class="timeline-game-tags">
                <span class="heat-tag ${heatCls}">${getHeatIcon(g.heat)} ${g.heat}</span>
                ${platforms}
            </div>
            <div class="card-detail-panel" id="detail-${cardId}" style="display:none;">
                <div class="detail-divider"></div>
                <div class="detail-row">
                    <span class="detail-label">🎮 玩法简析</span>
                    <span class="detail-value">${g.gameplay || '暂无信息'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">📝 关注度说明</span>
                    <span class="detail-value">${g.heatNote || '暂无信息'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🏢 发行商</span>
                    <span class="detail-value">${g.publisher}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🎬 工作室</span>
                    <span class="detail-value">${g.studio && g.studio !== '/' ? g.studio : '未知'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🌐 平台</span>
                    <span class="detail-value">${g.platforms}</span>
                </div>
            </div>
        </div>
        `;
    });

    html += '</div></div></div>';
    container.innerHTML = html;
}

// ============ 交互函数 ============

function toggleCardDetail(cardId) {
    const detail = document.getElementById('detail-' + cardId);
    const expandIcon = document.getElementById('expand-' + cardId);
    if (!detail) return;
    
    const isVisible = detail.style.display !== 'none';
    detail.style.display = isVisible ? 'none' : 'block';
    if (expandIcon) {
        expandIcon.textContent = isVisible ? '▼' : '▲';
        expandIcon.classList.toggle('expanded', !isVisible);
    }
    
    // 添加动画
    if (!isVisible) {
        detail.style.animation = 'slideDown 0.3s ease-out';
    }
}

function toggleReleasedSection() {
    const body = document.getElementById('releasedSectionBody');
    const chevron = document.getElementById('releasedChevron');
    if (!body) return;
    
    const isVisible = body.style.display !== 'none';
    body.style.display = isVisible ? 'none' : 'block';
    if (chevron) {
        chevron.textContent = isVisible ? '▶' : '▼';
    }
}

// ============ 定期刷新扫描功能 ============

let pipelineRefreshTimer = null;
let pipelineLastRefresh = new Date();
const PIPELINE_REFRESH_INTERVAL = 30 * 60 * 1000;

function startPipelineAutoRefresh() {
    if (pipelineRefreshTimer) clearInterval(pipelineRefreshTimer);
    pipelineRefreshTimer = setInterval(() => {
        pipelineLastRefresh = new Date();
        renderPipelineV2();
        updatePipelineRefreshStatus();
        console.log(`[Pipeline] 定期刷新完成 @ ${pipelineLastRefresh.toLocaleTimeString()}`);
    }, PIPELINE_REFRESH_INTERVAL);
    console.log(`[Pipeline] 自动刷新已启动，间隔 ${PIPELINE_REFRESH_INTERVAL / 60000} 分钟`);
}

function stopPipelineAutoRefresh() {
    if (pipelineRefreshTimer) {
        clearInterval(pipelineRefreshTimer);
        pipelineRefreshTimer = null;
    }
}

function updatePipelineRefreshStatus() {
    const statusEl = document.getElementById('pipelineRefreshStatus');
    if (statusEl) {
        const timeStr = pipelineLastRefresh.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        statusEl.innerHTML = `<span class="status-dot pulse"></span> 上次刷新：${timeStr} · 自动扫描中`;
    }
}

function triggerPipelineManualRefresh() {
    pipelineLastRefresh = new Date();
    renderPipelineV2();
    updatePipelineRefreshStatus();
    
    const btn = document.getElementById('pipelineRefreshBtn');
    if (btn) {
        btn.classList.add('spinning');
        setTimeout(() => btn.classList.remove('spinning'), 1000);
    }
}

// 初始化
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        startPipelineAutoRefresh();
        
        // 绑定筛选器事件
        ['pipelineTimeFilter', 'pipelineHeatFilter', 'pipelineRegionFilter'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', renderPipelineV2);
        });
        
        const searchInput = document.getElementById('pipelineSearchInput');
        if (searchInput) {
            let debounce;
            searchInput.addEventListener('input', () => {
                clearTimeout(debounce);
                debounce = setTimeout(renderPipelineV2, 300);
            });
        }
    });
}
