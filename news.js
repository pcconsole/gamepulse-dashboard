// ============================================
// 行业热点新闻数据模块
// [AUTO-GENERATED] 由 News Agent v5.0 自动更新，请勿手动编辑
// 最后更新: 2026-04-06T18:00:00Z
// 更新者: news-agent (v5.1 自动化定时更新：MCP SpreadsheetApp成功(lastRow=1103无增量)+web_search 12轮)
// 数据来源: MCP 腾讯文档 LMLdoimBsILX (Tier 0) + web_search (Tier 1-3)
// 重要性方案: v5.0 — 统一重点新闻标记（featured），深度洞察分析+历史关联
// 新增字段: analysis(洞察分析), relatedNewsIds(关联新闻ID)
// ============================================

const newsSources = [
    {
        "name": "SteamDB",
        "platform": "PC",
        "type": "数据+榜单",
        "url": "https://steamdb.info/",
        "category": "data"
    },
    {
        "name": "Gamalytic",
        "platform": "PC",
        "type": "数据+榜单",
        "url": "https://gamalytic.com/",
        "category": "data"
    },
    {
        "name": "GamesIndustry",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.gamesindustry.biz/",
        "category": "media"
    },
    {
        "name": "NintendoNews",
        "platform": "NS",
        "type": "新闻资讯",
        "url": "https://mynintendonews.com/",
        "category": "media"
    },
    {
        "name": "EuroGamer",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.eurogamer.net/latest",
        "category": "media"
    },
    {
        "name": "VGC",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.videogameschronicle.com/category/news/",
        "category": "media"
    },
    {
        "name": "机核",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.gcores.com/news",
        "category": "media"
    },
    {
        "name": "3DM",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.3dmgame.com/",
        "category": "media"
    },
    {
        "name": "Fami通",
        "platform": "PC/Console",
        "type": "资讯+NS榜单",
        "url": "https://www.famitsu.com/",
        "category": "media"
    },
    {
        "name": "vgchartz",
        "platform": "PC/Console",
        "type": "数据+榜单",
        "url": "https://www.vgchartz.com/",
        "category": "data"
    },
    {
        "name": "GameDiscover",
        "platform": "PC/Console",
        "type": "数据+榜单+新闻",
        "url": "https://newsletter.gamediscover.co/",
        "category": "data"
    },
    {
        "name": "Steam官方热销榜",
        "platform": "PC",
        "type": "数据+榜单",
        "url": "https://store.steampowered.com/charts/",
        "category": "data"
    },
    {
        "name": "游戏之家",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://game.ithome.com/",
        "category": "media"
    },
    {
        "name": "IGN",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.ign.com/",
        "category": "media"
    },
    {
        "name": "Gamingbolt",
        "platform": "PC/Console",
        "type": "新闻资讯+新游评测",
        "url": "https://gamingbolt.com/",
        "category": "media"
    },
    {
        "name": "TwistedVoxel",
        "platform": "PC/Console",
        "type": "新闻资讯+版本更新",
        "url": "https://twistedvoxel.com/",
        "category": "media"
    },
    {
        "name": "GameDeveloper",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://www.gamedeveloper.com/",
        "category": "media"
    },
    {
        "name": "PlayStation Blog",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://blog.playstation.com/",
        "category": "official"
    },
    {
        "name": "Xbox Wire",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://news.xbox.com/en-us/",
        "category": "official"
    },
    {
        "name": "Xbox Developer",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://developer.microsoft.com/en-us/games/",
        "category": "official"
    },
    {
        "name": "Newzoo",
        "platform": "PC/Console",
        "type": "行研报告",
        "url": "https://newzoo.com/resources",
        "category": "data"
    },
    {
        "name": "Vginsight",
        "platform": "PC/Console",
        "type": "行研报告",
        "url": "https://app.sensortower.com/vgi/insights/articles",
        "category": "data"
    },
    {
        "name": "NIKO",
        "platform": "PC/Console",
        "type": "新闻资讯",
        "url": "https://nikopartners.com/niko-news/",
        "category": "data"
    }
];

const newsData = [
    {
        "id": 142,
        "title": "索尼互娱收购英国AI公司Cinemersive Labs：强化PlayStation视觉计算与3D技术布局",
        "summary": "索尼互动娱乐(SIE)于4月2日正式宣布收购英国机器学习和计算机视觉公司Cinemersive Labs。该公司专注于将2D照片和视频转换为3D立体图像的技术。收购完成后，Cinemersive团队将加入索尼视觉计算集团(Visual Computing Group, VCG)，该部门专注于图形技术和AI在游戏中的应用。此次收购是索尼在关闭多家内部工作室(如Dark Outlaw Games)后持续加码AI技术投资的最新信号。",
        "source": "SIE Official",
        "sourceUrl": "https://sonyinteractive.com/en/news/blog/sony-interactive-entertainment-acquires-cinemersive-labs/",
        "sourceUrls": [
            {"name": "SIE Official", "url": "https://sonyinteractive.com/en/news/blog/sony-interactive-entertainment-acquires-cinemersive-labs/"},
            {"name": "IT之家", "url": "https://www.ithome.com/0/935/737.htm"},
            {"name": "Engadget", "url": "https://www.engadget.com/gaming/playstation/sonys-gaming-division-just-bought-an-ai-startup-that-turns-photos-into-3d-volumes-220648699.html"},
            {"name": "This Week In Video Games", "url": "https://thisweekinvideogames.com/news/sony-acquires-ai-computer-vision-company-cinemersive-labs/"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": true,
        "date": "2026-04-02",
        "tags": ["索尼", "SIE", "收购", "AI", "Cinemersive Labs", "视觉计算", "机器学习", "3D技术"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "索尼在关闭部分工作室的同时持续收购AI技术公司，说明PlayStation战略正从'内容创作型工作室'向'技术平台化'转型。Cinemersive的2D转3D技术可能应用于PS VR2内容生产或下一代PS6的渲染管线。结合此前确认的AI帧生成技术(Project Amethyst)，索尼正在构建完整的AI视觉技术栈，为PS6时代的差异化体验做技术储备。",
        "relatedNewsIds": [114, 87, 128]
    },
    {
        "id": 141,
        "title": "Xbox Game Pass 4月阵容公布：Hades 2、Replaced首日入库，Starfield同步上线",
        "summary": "微软公布Xbox Game Pass 2026年4月完整阵容，共8款以上新作加入。亮点包括：4月2日Barbie Horse Trails，4月7日Final Fantasy IV+Starfield(含Free Lanes更新和Terran Armada DLC)，4月14日Hades 2正式版和Replaced同时首日入库Game Pass，后续还有更多作品陆续加入。Hades 2是Supergiant Games备受期待的正式版(此前PC EA一年多)首次登陆主机，Replaced则是历经多年开发的像素风赛博朋克动作游戏。",
        "source": "Game Rant",
        "sourceUrl": "https://gamerant.com/xbox-game-pass-new-games-coming-soon-list-april-2026/",
        "sourceUrls": [
            {"name": "Game Rant", "url": "https://gamerant.com/xbox-game-pass-new-games-coming-soon-list-april-2026/"},
            {"name": "VICE", "url": "https://www.vice.com/en/article/every-game-coming-to-xbox-game-pass-in-april/"},
            {"name": "Pure Xbox", "url": "https://www.purexbox.com/features/all-new-games-coming-to-xbox-in-april-2026"},
            {"name": "Eurogamer", "url": "https://www.eurogamer.net/xbox-game-pass-games-list-this-month-price-6400"}
        ],
        "category": "platform",
        "importance": "medium",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["Xbox", "Game Pass", "Hades 2", "Replaced", "Starfield", "首日入库", "4月阵容"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "relatedNewsIds": [135, 120, 137, 416]
    },
    {
        "id": 140,
        "title": "Ubisoft停止Red Storm Entertainment游戏开发并裁员105人：Tom Clancy系列摇篮工作室转型技术支援",
        "summary": "Ubisoft宣布旗下传奇工作室Red Storm Entertainment将停止游戏开发业务，105名员工被裁。Red Storm由Tom Clancy于1990年代联合创立，是《彩虹六号》和《幽灵行动》系列的诞生地。此次重组后工作室将转型为全球IT和Snowdrop引擎技术支援角色。此举是Ubisoft持续成本削减计划的一部分，反映了公司在多年销售不佳后正从内容创作向技术基础设施收缩的战略调整。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/ubisoft-announces-layoffs-and-the-cease-of-game-development-at-red-storm-entertainment",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/ubisoft-announces-layoffs-and-the-cease-of-game-development-at-red-storm-entertainment"},
            {"name": "IGN", "url": "https://www.ign.com/articles/ubisoft-laying-off-100-staff-and-ending-game-development-at-ghost-recon-studio-red-storm-entertainment"},
            {"name": "PC Gamer", "url": "https://www.pcgamer.com/gaming-industry/ubisoft-lays-off-105-people-at-red-storm-the-studio-founded-30-years-ago-by-tom-clancy-converts-it-to-a-support-role/"},
            {"name": "Kotaku", "url": "https://kotaku.com/tom-clancy-studio-no-longer-making-games-as-it-lays-off-105-developers-2000680319"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com/news/ubisoft-ends-game-development-at-tom-clancy-studio-red-storm-resulting-in-105-job-losses/"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-19",
        "tags": ["Ubisoft", "Red Storm", "裁员", "Tom Clancy", "彩虹六号", "幽灵行动", "工作室关闭", "成本削减"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "Red Storm停止游戏开发是Ubisoft战略收缩的标志性事件——这家创造了《彩虹六号》和《幽灵行动》两大军事射击IP的工作室，在近30年后沦为技术支援角色。结合Ubisoft此前的Prince of Persia团队缩编和XDefiant关闭，公司正在系统性地退出非核心项目以削减超€2亿年度成本。行业层面，这延续了2024-2026年持续的裁员潮(Epic 1000人、索尼Dark Outlaw等)。",
        "relatedNewsIds": [110, 114]
    },
    {
        "id": 139,
        "title": "Krafton关闭免费PUBG衍生作Blindspot：仅运营2个月，验证'快速试错'策略",
        "summary": "Krafton宣布关闭仅运营两个月的免费PC游戏《PUBG Blindspot》。尽管PUBG系列为公司带来创纪录营收，但该衍生作初期玩家峰值仅3251人，近期降至几百人。Krafton表示此决定符合其通过抢先体验'快速验证游戏潜力'的策略，团队认为无法持续提供预期体验。公司将继续开发其他项目并扩展PUBG IP生态。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/krafton-shutters-free-to-play-pubg-spin-off-after-two-months",
        "sourceUrls": [
            {"name": "腾讯文档", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/krafton-shutters-free-to-play-pubg-spin-off-after-two-months"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-30",
        "tags": ["Krafton", "PUBG", "Blindspot", "F2P", "关闭", "快速试错"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "relatedNewsIds": []
    },
    {
        "id": 138,
        "title": "Saros(Returnal精神续作)完成压盘：Housemarque新作4月30日PS5独占发售",
        "summary": "Housemarque开发的《Saros》宣布已完成开发压盘(Gone Gold)，将于4月30日独占PS5发售，此前曾经历短暂延期。PlayStation Blog同期发布上手试玩预览给予高度评价。作为Returnal团队的新作，Saros被视为2026年PS5平台最重要的独占作品之一。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "sourceUrls": [
            {"name": "腾讯文档", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "PlayStation Blog", "url": "https://blog.playstation.com"},
            {"name": "GamingBolt", "url": "https://gamingbolt.com"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["Saros", "Housemarque", "PS5", "独占", "Returnal", "索尼第一方"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "relatedNewsIds": [121]
    },
    {
        "id": 137,
        "title": "Xbox品牌重塑：新CEO叫停争议'This is an Xbox'广告，透露下一代主机Project Helix",
        "summary": "微软确认新任Xbox游戏业务负责人Asha Sharma主导了一次品牌'重塑'(reset)——叫停此前因淡化Xbox硬件引发争议的'This is an Xbox'广告宣传活动。Sharma表示该广告'感觉不像Xbox'，承诺回归游戏主机传统。同时微软透露了下一代Xbox主机'Project Helix'的初步信息，定位为高性能、以玩家为先的PC+主机融合体验。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/microsoft-confirms-new-xbox-boss-scrapped-controversial-ad-campaign",
        "sourceUrls": [
            {"name": "腾讯文档", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "EuroGamer", "url": "https://www.eurogamer.net/microsoft-confirms-new-xbox-boss-scrapped-controversial-ad-campaign"},
            {"name": "IGN", "url": "https://www.ign.com/articles/this-is-an-xbox-announcement-looks-to-have-been-pulled-offline-after-new-gaming-boss-asha-sharma-takes-charge"},
            {"name": "Pure Xbox", "url": "https://www.purexbox.com/news/2026/03/it-was-asha-sharmas-direction-to-scrub-this-is-an-xbox-marketing-suggests-report"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-30",
        "tags": ["Xbox", "微软", "Asha Sharma", "品牌重塑", "Project Helix", "下一代主机"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Xbox品牌重塑是Asha Sharma上任后最明确的战略信号——从'万物皆Xbox'回归硬件主机传统。叫停争议广告说明微软内部已认识到过度多平台策略伤害了Xbox品牌认知。Project Helix定位PC+主机融合，暗示下一代Xbox可能模糊主机与PC的边界。对比索尼PS6走高成本路线，微软可能以差异化定位抢占中端市场。",
        "relatedNewsIds": [109, 99, 120]
    },
    {
        "id": 136,
        "title": "Switch 2助推第三方游戏销量增长76%：年度收入达$23亿，Warner Bros.领跑",
        "summary": "Ampere Analysis最新报告显示，Nintendo Switch与Switch 2平台第三方游戏2025年销量同比增长76%，年度收入达$23亿。Switch 2发售后第三方软件销售增长$10亿（Q2-Q4 2025），推动发行商大幅加码Switch生态支持。Warner Bros.成为最大第三方发行商，Bandai Namco和EA收入均超$1亿。尽管单位销量下降2.5%，平均售价提升81%推动了收入增长。",
        "source": "Ampere Analysis",
        "sourceUrl": "https://cdn.www.ampereanalysis.com/media/press_releases/2026/03/31/Ampere_Analysis_Nintendo_Switch_2_Third_Party.pdf",
        "sourceUrls": [
            {"name": "腾讯文档", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "Ampere Analysis", "url": "https://cdn.www.ampereanalysis.com/media/press_releases/2026/03/31/Ampere_Analysis_Nintendo_Switch_2_Third_Party.pdf"},
            {"name": "My Nintendo News", "url": "https://mynintendonews.com/2026/04/01/analytics-firm-says-nintendo-switch-and-nintendo-switch-2-third-party-ecosystem-sales-up-76-in-2025/"},
            {"name": "TweakTown", "url": "https://www.tweaktown.com/news/110810/switch-2-boosts-third-party-sales-by-dollars1-billion-analyst-firm-estimates-wb-games-bandai-and-ea-earned-dollars100-million-plus/index.html"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["Switch 2", "任天堂", "第三方", "销量增长", "76%", "Ampere Analysis", "Warner Bros"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Switch 2第三方销量+76%是任天堂生态史上最强的第三方拉动信号。$23亿年收入中增量$10亿直接来自Switch 2发售效应，证明Switch 2成功打破了'任天堂平台第三方卖不动'的历史魔咒。单位销量降2.5%但ASP涨81%，说明Switch 2玩家愿意为高定价3A付费。Warner Bros.领跑暗示霍格沃茨遗产等IP在Switch 2上的表现远超预期。",
        "relatedNewsIds": [107, 108, 123]
    },
    {
        "id": 135,
        "title": "Starfield 4月7日正式登陆PS5：Bethesda最大规模免费更新'Free Lanes'同步上线",
        "summary": "Bethesda确认《星空》(Starfield)将于4月7日登陆PlayStation 5，结束Xbox/PC独占2年半。PS5版将同步上线'Free Lanes'大更新——号称发售以来最大规模的免费内容更新，全面革新太空旅行系统。此举标志着微软首方大作多平台战略的进一步推进，也意味着Bethesda最具争议的独占期正式结束。",
        "source": "PlayStation Blog",
        "sourceUrl": "https://blog.playstation.com/2026/03/17/starfield-is-coming-to-playstation-5-on-april-7/",
        "sourceUrls": [
            {"name": "PlayStation Blog", "url": "https://blog.playstation.com/2026/03/17/starfield-is-coming-to-playstation-5-on-april-7/"},
            {"name": "Bethesda", "url": "https://bethesda.net/en/game/starfield/article/5EB9OYuO9DdP4lna0jkyMz/starfield-launches-on-playstation-5-on-april-7"},
            {"name": "GameSpot", "url": "https://www.gamespot.com/articles/starfield-hits-ps5-on-april-7-extensive-new-dlc-coming-to-all-platforms/1100-6538823/"},
            {"name": "Push Square", "url": "https://www.pushsquare.com/news/2026/03/starfield-finally-lands-on-ps5-in-april-with-new-dlc-and-huge-updates"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-04-03",
        "tags": ["Starfield", "PS5", "Bethesda", "微软", "多平台", "Free Lanes", "独占结束"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Starfield登陆PS5是微软多平台战略的标志性事件——曾经被视为Xbox最大独占的Bethesda RPG终于全平台化。Free Lanes大更新随PS5版同步发布是聪明的策略，让PS5玩家获得'最佳版本'体验。结合Xbox品牌重塑和Project Helix，微软正在从'独占内容'转向'最佳体验平台'的竞争策略。对索尼来说，获得Starfield也证明了PS5庞大装机量的谈判筹码。",
        "relatedNewsIds": [137, 109, 99]
    },
    {
        "id": 134,
        "title": "Shift Up收购生化危机之父三上真司新工作室UNBOUND：强化全球PC/Console布局",
        "summary": "韩国开发商Shift Up（《星刃Stellar Blade》开发商）宣布全资收购日本工作室UNBOUND，该工作室由《生化危机》系列缔造者三上真司于2022年创立。Shift Up将负责发行UNBOUND所有未来游戏。三上真司表示'从未遇到过在创作方向上如此高度契合的合作方'。收购旨在强化Shift Up的全球PC和Console游戏开发与发行能力。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/stellar-blade-developer-shift-up-acquires-shinji-mikamis-new-studio",
        "sourceUrls": [
            {"name": "腾讯文档", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/stellar-blade-developer-shift-up-acquires-shinji-mikamis-new-studio"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com"},
            {"name": "Push Square", "url": "https://www.pushsquare.com/news/2026/04/stellar-blade-dev-acquires-shinji-mikamis-new-studio-will-publish-its-games"},
            {"name": "Gematsu", "url": "https://www.gematsu.com/2026/03/shift-up-acquires-shinji-mikami-led-studio-unbound"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["Shift Up", "UNBOUND", "三上真司", "收购", "星刃", "生化危机", "韩国"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Shift Up收购UNBOUND是韩国游戏公司向全球3A市场进军的又一里程碑。Shift Up凭借《星刃》证明了3A动作游戏开发能力，获得三上真司加盟等于获得了日本顶级游戏设计血脉。这笔交易的战略含义：①韩国→日本的逆向人才收购趋势 ②Shift Up从开发商向发行商转型 ③与Pearl Abyss(红色沙漠)形成韩国3A双雄格局。",
        "relatedNewsIds": [124]
    },
    {
        "id": 133,
        "title": "DDR5内存价格数月来首次下降：谷歌压缩算法发布缓解供需压力",
        "summary": "DDR5内存价格在持续上涨数月后首次出现下降，主要受益于谷歌发布的新型压缩算法降低了AI数据中心对内存带宽的需求压力。此前DRAM价格因AI基建热潮被大幅推高，直接导致PS5等主机涨价。此次价格转折对游戏硬件行业是重大利好信号。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-31",
        "tags": ["DDR5", "内存降价", "谷歌", "DRAM", "供应链", "AI基建"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "DDR5价格首次下降是2026年上游硬件供应链的拐点信号。谷歌压缩算法降低AI对内存带宽需求是关键催化剂，如果趋势持续，可能逆转此前PS5涨价/Switch 2成本压力的逻辑。对比华强北DDR5暴跌的信号，内存价格周期可能正在见顶。但需观察是否是暂时性下滑还是趋势性转折。",
        "relatedNewsIds": [121, 87]
    },
    {
        "id": 132,
        "title": "华强北DDR5内存价格暴跌：商户低价抛售套现，市场恐慌情绪蔓延",
        "summary": "华强北市场DDR5内存价格出现暴跌，多家商户开始低价抛售套现。此前因AI数据中心建设热潮和游戏主机涨价预期，DDR5价格持续走高，商户大量囤货。价格暴跌引发市场恐慌情绪，分析认为与谷歌压缩算法缓解需求压力以及部分厂商产能释放有关。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "hardware",
        "importance": "medium",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["DDR5", "华强北", "内存暴跌", "供应链", "DRAM"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "relatedNewsIds": [133, 121]
    },
    {
        "id": 131,
        "title": "英伟达豪掷20亿美元投资半导体供应链，股价大涨11%",
        "summary": "英伟达宣布投资20亿美元用于强化半导体供应链，重点布局先进封装和测试产能。此举旨在缓解GPU和AI芯片的长期供应瓶颈。消息公布后英伟达股价大涨11%。对游戏行业而言，供应链扩产有望在中长期降低GPU成本，利好PC游戏市场。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["英伟达", "NVIDIA", "半导体", "供应链", "GPU", "投资"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "英伟达20亿美元供应链投资是GPU巨头首次大规模介入上游制造环节，信号意义重大。短期股价大涨11%反映市场认可其战略前瞻性。对游戏行业的影响路径：供应链扩产→GPU产能提升→中长期价格下降→PC游戏市场扩容。但实际产能释放至少需要18-24个月。",
        "relatedNewsIds": [133]
    },
    {
        "id": 130,
        "title": "PS6物料成本约760美元：分析师预计售价或维持699美元依靠补贴策略",
        "summary": "据分析师报告，索尼下一代主机PS6的物料成本(BOM)预计约为760美元，远高于PS5初代的450美元。若索尼延续硬件补贴策略，PS6售价可能维持在699美元（补贴约60美元/台），但PS5涨价趋势可能导致PS6起售价更高。内存和芯片成本上涨是主要推手。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-30",
        "tags": ["PS6", "索尼", "物料成本", "BOM", "硬件补贴", "定价"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "PS6 BOM 760美元意味着次世代主机成本较PS5增长约70%，直接反映了芯片+内存通胀对整个行业的冲击。699美元定价需要索尼每台补贴60美元，考虑到PS5已三次涨价，PS6可能打破$499传统定价锚点。这将进一步推动PC vs 主机的竞争态势向PC倾斜。",
        "relatedNewsIds": [121, 133]
    },
    {
        "id": 129,
        "title": "分析师：Xbox Series X/S与Switch 2或将跟进PS5涨价",
        "summary": "多位行业分析师预测，在索尼宣布PS5全系涨价后，微软Xbox Series X/S和任天堂Switch 2可能在未来数月内跟进涨价。核心原因是内存芯片（DRAM/NAND）成本上涨影响整个行业，而非索尼独有问题。分析师指出，如果三大主机平台集体涨价，将推高整个主机游戏的入门门槛。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-31",
        "tags": ["Xbox", "Switch 2", "PS5", "涨价", "内存成本", "主机定价"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "三大主机集体涨价将是主机行业30年来首次，标志着硬件成本压力已成为系统性风险。对比PC市场GPU持续降价的趋势，主机的价格优势正在被侵蚀。如果Switch 2从$449涨至$499+，将直接冲击其'性价比掌机'的定位。",
        "relatedNewsIds": [121, 130, 107]
    },
    {
        "id": 128,
        "title": "微软XGP新层级'Triton'曝光：仅含第一方游戏，订阅模式或迎重大调整",
        "summary": "据泄露信息，微软正在测试Xbox Game Pass新层级'Triton'，该层级仅包含微软第一方工作室游戏，价格可能低于当前标准版。此举暗示微软可能重新调整订阅服务的分层策略——当前Game Pass因包含大量第三方游戏而成本高企。Triton层级若推出，将为预算有限但青睐微软独占游戏的玩家提供更低价入口。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-30",
        "tags": ["Xbox", "Game Pass", "Triton", "微软", "订阅服务"],
        "sentiment": "neutral",
        "tdocMarking": "none",
        "analysis": "XGP新层级Triton暗示微软对Game Pass成本结构的反思：第三方游戏授权费过高导致服务整体亏损。仅含第一方的低价层级是对Netflix式'全包模式'的修正。对比索尼PS Plus三层结构，微软也在向更灵活的订阅分层靠拢。",
        "relatedNewsIds": [120, 109]
    },
    {
        "id": 127,
        "title": "CDPR 2025年报：创纪录利润率，但《巫师3》《赛博朋克2077》销量下滑",
        "summary": "CD Projekt RED公布2025年财务报告，实现历史最高利润率；但旗下两大头部IP《巫师3》《赛博朋克2077》销量均出现下滑，公司正将资源转向新项目《巫师4》与《赛博朋克》续作研发。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "market",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-29",
        "tags": ["CDPR", "财报", "巫师3", "赛博朋克2077", "利润率"],
        "sentiment": "neutral",
        "tdocMarking": "none",
        "relatedNewsIds": [98]
    },
    {
        "id": 126,
        "title": "Hades 2正式脱离抢先体验：4月登陆PS5与Xbox，内容量大幅超越前作",
        "summary": "Supergiant Games宣布《Hades 2》于4月正式推出完整版，同步登陆PlayStation 5和Xbox系列主机（含Game Pass首日入库），结束Early Access阶段。据悉完整内容量大幅超越前作。游戏在EA阶段已获得极高评价，正式版被视为2026年独立游戏的重量级作品之一。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "game",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-29",
        "tags": ["Hades 2", "Supergiant", "PS5", "Xbox", "Game Pass", "独立游戏"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "relatedNewsIds": [120]
    },
    {
        "id": 125,
        "title": "《红色沙漠》口碑大逆转：Steam升至'特别好评'，M站玩家评分8.7，销量冲击500万",
        "summary": "Pearl Abyss《红色沙漠》发售后媒体评分较低，但经大型1.01.00补丁修复键位、游戏性痛点后，Steam评价逆转至'特别好评'，M站玩家评分从7.7升至8.7，Steam峰值同时在线超26.2万人。CEO在股东会上透露销量接近500万，目标年底前宣布里程碑数据。此前AI素材争议引发的负面情绪已大幅消退。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["红色沙漠", "Crimson Desert", "口碑逆转", "500万", "Steam", "Pearl Abyss"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "红色沙漠从首发争议到口碑逆转的速度令人瞩目——大型补丁+社区互动是关键。CEO透露500万销量意味着收入约$1.5亿，对Pearl Abyss这个体量的韩国公司是里程碑级别。Steam同时在线26.2万证明产品有持续生命力。AI素材争议的快速消退也说明玩家最终以游戏品质论成败。",
        "relatedNewsIds": [118, 68]
    },
    {
        "id": 124,
        "title": "迪士尼或有意收购Epic Games：传闻阶段，潜在交易规模巨大",
        "summary": "据行业传闻，迪士尼可能有意收购Epic Games（堡垒之夜/虚幻引擎开发商）。若交易达成将是游戏行业历史上最大的收购案之一。迪士尼此前已通过15亿美元投资获得Epic少数股权，双方在Fortnite中已有深度IP合作。此消息尚处传闻阶段，双方均未正式回应。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["迪士尼", "Epic Games", "收购", "传闻", "堡垒之夜", "虚幻引擎"],
        "sentiment": "neutral",
        "tdocMarking": "none",
        "analysis": "迪士尼收购Epic的传闻如果成真，将改变整个游戏行业格局——迪士尼将一举获得虚幻引擎（游戏开发基础设施）+Epic Games Store（分发平台）+Fortnite（超级IP）。结合迪士尼此前15亿美元投资和Fortnite内的漫威/星战合作，战略逻辑完全成立。但Epic当前估值可能超$300亿，加上Tim Sweeney的控制权意愿，交易难度极大。",
        "relatedNewsIds": [110]
    },
    {
        "id": 123,
        "title": "宝可梦Pokopia助力Switch 2英国销量翻倍：缺货仍挡不住",
        "summary": "任天堂《宝可梦Pokopia》发售后大幅拉动Switch 2在英国的硬件销量，即使面临持续缺货，Switch 2英国周销量仍实现翻倍增长。这证明了宝可梦IP作为'系统卖方'（system seller）的强大号召力，也说明Switch 2当前的需求远超供给。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "platform",
        "importance": "medium",
        "featured": true,
        "date": "2026-04-01",
        "tags": ["宝可梦", "Pokopia", "Switch 2", "英国销量", "任天堂", "缺货"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "relatedNewsIds": [107, 108]
    },
    {
        "id": 122,
        "title": "腾讯国行Switch今起逐步停运，用户专属回馈计划结束",
        "summary": "腾讯代理的国行Nintendo Switch今日起逐步停运相关服务，用户专属'回馈计划'正式结束。此前腾讯于2019年12月引进Switch国行版，历时6年多。停运标志着腾讯与任天堂在国行Switch上的合作正式画上句号，未来合作重心可能转向Switch 2。",
        "source": "腾讯文档",
        "sourceUrl": "https://docs.qq.com/sheet/LMLdoimBsILX",
        "category": "platform",
        "importance": "medium",
        "featured": false,
        "date": "2026-04-01",
        "tags": ["腾讯", "国行Switch", "停运", "任天堂", "回馈计划"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 121,
        "title": "索尼宣布PS5全系全球涨价：4月2日起生效，美区标准版涨$100至$649.99",
        "summary": "索尼互动娱乐于3月27日正式宣布，从2026年4月2日起对PS5全系产品实施全球涨价。美区：PS5标准版从$549.99涨至$649.99（+$100），数字版从$499.99涨至$599.99（+$100），PS5 Pro从$749.99涨至$899.99（+$150），PS Portal从$199.99涨至$249.99（+$50）；英区：标准版涨至£569.99（+£90），Pro涨至£789.99（+£90）；欧区：标准版涨至€649.99（+€100），Pro涨至€899.99（+€100）；日区：标准版涨至¥97,980（+¥18,000），Pro涨至¥137,980（+¥18,000）。SIE副总裁Isabelle Tomatis将涨价归因于'全球经济环境的持续压力'，行业分析指向AI数据中心建设热潮引发的RAM芯片短缺推高了硬件成本。这是PS5生命周期内第三次涨价。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/sony-announces-global-price-rises-for-ps5-consoles-from-april-2-2026",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/sony-announces-global-price-rises-for-ps5-consoles-from-april-2-2026"},
            {"name": "SyncToBest", "url": "https://synctobest.com/ps5-price-hike-2026-memory-chip-ai-demand-ps6-delay-2028-2029/"},
            {"name": "GamesRadar", "url": "https://www.gamesradar.com/hardware/ps5-will-hopefully-avoid-a-price-hike-this-year-as-sony-cfo-says-we-intend-to-minimize-the-impact-of-ongoing-ram-shortage-company-positioned-to-secure-memory-through-2026/"}
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-27",
        "tags": ["PS5", "索尼", "涨价", "RAM短缺", "AI", "硬件成本", "PS5 Pro"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "PS5生命周期内第三次涨价是史无前例的，直接原因是AI数据中心对HBM/DDR5内存的疯狂需求推高了DRAM价格。PS5 Pro美区售价逼近$900意味着主机正在失去相对PC的价格优势——$900已可以组装一台不错的游戏PC。索尼CFO此前暗示'至少到2026年底内存供应有保障'，但最终仍涨价，说明成本压力已超出预期。任天堂Switch 2若跟进涨价将重塑整个主机市场定价格局。这可能加速玩家向PC和云游戏迁移的长期趋势。",
        "relatedNewsIds": [108, 99, 104]
    },
    {
        "id": 120,
        "title": "Xbox Partner Preview 3月26日发布会：近20款游戏公布，Hades 2/鸣潮登陆Xbox",
        "summary": "微软于3月26日举办了30分钟的Xbox Partner Preview发布会，公布了近20款第三方游戏消息。重点公布包括：①Hades 2将于4月14日登陆Xbox/Game Pass；②如龙工作室Ryu Ga Gotoku的全新IP《Stranger Than Heaven》横跨五个时代和城市，5月6日有专场展示；③STALKER 2首个DLC'Cost of Hope'夏季推出；④鸣潮（Wuthering Waves）7月登陆Xbox/Game Pass；⑤Super Meat Boy 3D于3月31日发售；⑥The Expanse: Osiris Reborn（Owlcat）4月22日开启公测；⑦全新IP Artificial Detective（机器侦探）2027年发售。发布会还公布了Grave Seasons、Alien Deathstorm、Hunter: The Reckoning等多款新作。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/xbox-partner-preview-showcase-march-2026-heres-everything-announced",
        "sourceUrls": [
            {"name": "IGN", "url": "https://www.ign.com/articles/xbox-partner-preview-march-2026-everything-announced-updating-live"},
            {"name": "EuroGamer", "url": "https://www.eurogamer.net/xbox-partner-preview-showcase-march-2026-heres-everything-announced"},
            {"name": "GameInformer", "url": "https://www.gameinformer.com/xbox-partner-preview/2026/03/26/everything-announced-at-the-march-2026-xbox-partner-preview"},
            {"name": "Windows Central", "url": "https://www.windowscentral.com/gaming/xbox/everything-announced-at-the-xbox-partner-preview-march-2026-sega-xbox-game-pass-xbox-play-anywhere-and-more"}
        ],
        "category": "platform",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["Xbox", "微软", "Hades 2", "鸣潮", "Stranger Than Heaven", "Game Pass", "如龙工作室"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Xbox Partner Preview展示了微软'平台即服务'战略的持续深化：Hades 2和鸣潮首日进Game Pass进一步强化了订阅服务的吸引力。如龙工作室全新IP Stranger Than Heaven横跨五个时代的设计野心值得关注，这是RGG在如龙系列外的首次独立尝试。鸣潮7月登陆Xbox说明中国F2P动作RPG正加速进入主机生态。",
        "relatedNewsIds": [109]
    },
    {
        "id": 119,
        "title": "Newzoo报告：PC游戏收入将在2028年超越主机，全球PC+主机市场规模达$1037亿",
        "summary": "Newzoo于3月12日发布的《2026年PC与主机游戏报告》揭示多项关键趋势：①全球PC和主机游戏市场预计到2028年达到1037亿美元，标志着后疫情平台期正式结束；②2025年PC+主机combined收入883亿美元（同比+7%），2026年预计达943亿美元；③PC市场2025-2028年CAGR为6.6%，主机为4.4%，PC将在2028年超越主机收入；④$30-$50定价区间成为增长最快的溢价细分市场；⑤PC平台低于$30的游戏更受欢迎，2025年有26款此价位游戏收入超$500万（2024年仅17款）；⑥预计到2028年PC+主机玩家总数将超过10亿，东亚地区（中日韩）驱动区域扩张；⑦买断制游戏占PC总收入29%，AAA/AA/独立游戏收入增长11.8%。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/pc-will-overtake-console-revenue-by-2028-says-newzoo",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/pc-will-overtake-console-revenue-by-2028-says-newzoo"},
            {"name": "Newzoo官方", "url": "https://newzoo.com/resources/trend-reports/the-pc-console-gaming-report-2026"},
            {"name": "GameLook", "url": "http://www.gamelook.com.cn/2026/03/589635/"},
            {"name": "AWN China", "url": "https://awnchina.cn/newzoo-2026%e5%b9%b4pc%e5%8f%8a%e4%b8%bb%e6%9c%ba%e6%b8%b8%e6%88%8f%e6%8a%a5%e5%91%8a%e6%ad%a3%e5%bc%8f%e5%8f%91%e5%b8%83-%e5%b8%82%e5%9c%ba%e9%87%8d%e5%9b%9e%e5%a2%9e%e9%95%bf/"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-28",
        "tags": ["Newzoo", "市场数据", "PC vs 主机", "1037亿美元", "行业报告", "F2P", "买断制"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Newzoo这份报告的核心结论'PC将在2028年超越主机收入'是一个历史性拐点信号。PC增长CAGR 6.6% vs 主机4.4%的差距将随时间加速扩大。驱动因素包括：1)独立游戏爆款频出（杀戮尖塔2等）抬高了$30以下区间贡献；2)Game Pass等订阅服务蚕食主机买断收入；3)东亚市场（中日韩）天然倾向PC。$30-$50成为甜蜜点意味着AA级产品的商业空间正在扩大，这对中等规模开发商是重大利好。",
        "relatedNewsIds": [66, 108]
    },
    {
        "id": 118,
        "title": "《红色沙漠》AI生成素材争议：Pearl Abyss道歉并启动全面资产审计",
        "summary": "Pearl Abyss开发的高期待开放世界动作游戏《红色沙漠》（Crimson Desert）发售后被玩家发现游戏中包含AI生成的2D视觉素材，引发广泛争议。3月22日Pearl Abyss在X平台发布声明承认使用了'实验性AI生成技术'创建部分2D视觉道具，原本计划在最终版本中替换但未执行。开发商表示'我们应该明确披露我们对AI的使用'，并宣布启动对所有游戏内资产的'全面审计'，承诺移除所有AI生成的占位内容。值得注意的是，Pearl Abyss发售时未在Steam商店页面使用Valve的生成式AI披露标签。此事件再次引发游戏行业关于AI辅助开发透明度的讨论。",
        "source": "GameDeveloper",
        "sourceUrl": "http://www.gamedeveloper.com/production/whoops-pearl-abyss-forgot-to-mention-it-used-generative-ai-to-create-crimson-desert",
        "sourceUrls": [
            {"name": "GameDeveloper", "url": "http://www.gamedeveloper.com/production/whoops-pearl-abyss-forgot-to-mention-it-used-generative-ai-to-create-crimson-desert"},
            {"name": "Yahoo Tech", "url": "https://tech.yahoo.com/gaming/articles/pearl-abyss-apologizes-unintentional-ai-161916137.html"},
            {"name": "Shacknews", "url": "https://www.shacknews.com/article/148425/crimson-desert-generative-ai-content"},
            {"name": "GamerBolt", "url": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-23",
        "tags": ["红色沙漠", "Crimson Desert", "Pearl Abyss", "AI", "争议", "资产审计"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "红色沙漠的AI素材争议是继育碧《纪元117》和COD BO7之后，又一款3A大作因AI生成内容引发信任危机的案例。关键问题不在于是否使用AI，而在于缺乏透明披露——未使用Steam的AI披露标签直接违反了行业正在形成的规范共识。Pearl Abyss启动'全面资产审计'的代价远高于事先披露，这为所有开发商敲响警钟：AI辅助开发的透明度将成为未来玩家信任的关键维度。"
    },
    {
        "id": 117,
        "title": "分析师估算Bungie《Marathon》销量约120万份，以索尼第一方大作标准看表现不及预期",
        "summary": "据Alinea Analytics估算数据，Bungie开发的提取射击游戏《Marathon》自3月初发售以来累计销量约120万份，其中约70%（约84万份）来自Steam平台，PS5和Xbox占比相对较低。以索尼第一方大作的投入标准来看，这一表现可能未达预期——业内估算索尼和Bungie在该项目上的累计投入约2亿美元。Bungie随后回应外界关于项目前景的质疑，声明'我们做好了长期运营的准备'，暗示不会轻易放弃该项目。Marathon是Bungie在索尼收购后首个从零开始的全新项目，其表现将直接影响外界对索尼750亿美元Bungie收购案ROI的评估。",
        "source": "GamesIndustry",
        "sourceUrl": "https://thisweekinvideogames.com/news/marathon-has-sold-1-2-million-copies-per-alinea-estimates/",
        "sourceUrls": [
            {"name": "ThisWeekInVideoGames", "url": "https://thisweekinvideogames.com/news/marathon-has-sold-1-2-million-copies-per-alinea-estimates/"},
            {"name": "Push Square", "url": "https://www.pushsquare.com/news/2026/03/were-in-it-for-the-long-haul-bungie-rejects-rumours-it-could-move-on-from-marathon-after-unremarkable-ps5-sales"},
            {"name": "GamerBolt", "url": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/"}
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-25",
        "tags": ["Marathon", "Bungie", "索尼", "销量", "提取射击", "第一方"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "Marathon的120万份销量对比索尼+Bungie约2亿美元的投入来看ROI堪忧。70%销量来自Steam而非PS5更值得关注——作为索尼第一方大作，主平台占比不到30%说明PS5独占引流效果有限。对比同类型《Arc Raiders》（400万+）和《The Finals》（数百万DAU），Marathon的市场表现确实处于下风。Bungie声称'长期运营'但参与度持续下滑的趋势需要重大内容更新来扭转。这对索尼750亿美元Bungie收购案的叙事构成压力。",
        "relatedNewsIds": [99, 106]
    },
    {
        "id": 116,
        "title": "德国游戏市场2025年增长4%至94亿欧元：Switch 2推动硬件销售增长26%，软件销售下滑",
        "summary": "据德国游戏产业协会Game发布的年度报告（基于YouGov和Sensor Tower数据），2025年德国游戏市场总收入增长4%至94亿欧元。硬件是增长主引擎：硬件总收入增长12%至34亿欧元，其中游戏主机收入增长26%至10亿欧元（主要受Switch 2发售推动），游戏PC销售增长7%至6.51亿欧元（ROG Xbox Ally推动），PC配件增长13%至14亿欧元。但软件端呈下滑趋势：整体游戏销售微跌1%至50亿欧元，电脑和视频游戏子市场跌幅显著达13%至8.07亿欧元。在线游戏服务收入增长7%首次突破10亿欧元（较2019年翻倍），反映玩家消费习惯从'购买新游戏'向'服务型消费'转变。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/german-games-market-rose-4-in-2025-to-94bn-driven-by-hardware-sales",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/german-games-market-rose-4-in-2025-to-94bn-driven-by-hardware-sales"},
            {"name": "Game协会官方", "url": "https://www.game.de/en/german-games-market-grows-by-4-per-cent-in-2025/"},
            {"name": "DigiTrendz", "url": "https://digitrendz.blog/newswire/technology/155637/german-gaming-market-hits-e9-4bn-in-2025-fueled-by-hardware/"}
        ],
        "category": "market",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-27",
        "tags": ["德国", "游戏市场", "94亿欧元", "Switch 2", "硬件增长", "软件下滑"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 115,
        "title": "Behaviour Interactive收购《七日杀》开发商The Fun Pimps，游戏累计销量超2000万份",
        "summary": "《黎明杀机》（Dead by Daylight）开发发行商Behaviour Interactive本周宣布收购僵尸生存游戏《七日杀》（7 Days to Die）的开发商The Fun Pimps。The Fun Pimps将作为独立工作室在Behaviour旗下运营，游戏开发方向不会改变，但团队将扩大以交付更多内容。《七日杀》自2013年Early Access上线以来累计销量已突破2000万份，是Steam平台长青生存游戏的代表作之一。此次收购标志着Behaviour在生存恐怖品类的布局从自研扩展至并购，进一步巩固其在该赛道的市场地位。",
        "source": "GamesIndustry",
        "sourceUrl": "https://thisweekinvideogames.com/news/7-days-to-die-developer-acquired-by-behaviour-interactive/",
        "sourceUrls": [
            {"name": "ThisWeekInVideoGames", "url": "https://thisweekinvideogames.com/news/7-days-to-die-developer-acquired-by-behaviour-interactive/"},
            {"name": "GamerBolt", "url": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-25",
        "tags": ["Behaviour Interactive", "The Fun Pimps", "七日杀", "收购", "生存游戏"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 114,
        "title": "索尼关闭Dark Outlaw Games工作室：COD系列前制作人Jason Blundell的团队未发布作品即解散",
        "summary": "索尼互动娱乐本周确认关闭了Jason Blundell领导的Dark Outlaw Games工作室。Blundell曾是《使命召唤》系列僵尸模式的核心制作人和导演，于索尼收购后负责组建新工作室。该工作室在关闭前未发布或正式公布任何游戏项目。此次关闭是索尼近期工作室调整的一部分，此前已传出索尼重新评估第一方工作室投资回报的消息。考虑到索尼刚宣布PS5全球涨价和Marathon销量不及预期，关闭未产出工作室可能是更广泛成本控制策略的信号。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/",
        "sourceUrls": [
            {"name": "GamerBolt", "url": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-26",
        "tags": ["索尼", "Dark Outlaw Games", "Jason Blundell", "工作室关闭", "COD"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 113,
        "title": "GameStop公布FY2025 Q4及全年财报：收入持续下滑，继续押注比特币和数字资产战略",
        "summary": "GameStop于3月24日发布截至2026年1月31日的2025财年第四季度及全年财务业绩。虽然具体数字因SEC页面限制未获完整抓取，但综合多方报道，GameStop线下零售业务收入继续同比下滑，实体游戏销售持续萎缩。公司继续执行CEO Ryan Cohen主导的'比特币储备'战略，将部分公司现金投入加密货币资产。这一非传统策略在华尔街引发分歧，看多者认为是对冲法币贬值的远见之举，看空者质疑一家游戏零售商大举投资比特币的合理性。GameStop的转型方向从'电商化游戏零售'转向'数字资产+收藏品平台'。",
        "source": "GameStop IR",
        "sourceUrl": "https://investor.gamestop.com/news-releases/news-details/2026/GameStop-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx",
        "sourceUrls": [
            {"name": "GameStop IR", "url": "https://investor.gamestop.com/news-releases/news-details/2026/GameStop-Reports-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx"}
        ],
        "category": "market",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-24",
        "tags": ["GameStop", "财报", "比特币", "零售", "Ryan Cohen"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 112,
        "title": "《宝可梦冠军》（Pokemon Champions）宣布4月8日登陆Switch/Switch 2，免费对战竞技场新作",
        "summary": "宝可梦公司本周宣布全新免费对战竞技场游戏《宝可梦冠军》（Pokemon Champions）将于4月8日登陆Nintendo Switch和Switch 2平台。游戏类似《宝可梦竞技场》系列，支持跨Switch和Switch 2平台对战，移动版将在稍后推出。作为免费游玩（F2P）模式，该作将通过战斗通行证和装饰性微交易实现商业化。这是宝可梦IP在Switch 2平台的又一款重要作品，继《宝可梦：风/浪》之后进一步丰富了任天堂新主机的宝可梦内容生态。",
        "source": "GamerBolt",
        "sourceUrl": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/",
        "sourceUrls": [
            {"name": "GamerBolt", "url": "https://www.gamerbolt.com/this-week-in-gaming-news-march-23rd-march-29th-2026/"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-27",
        "tags": ["宝可梦冠军", "Pokemon Champions", "Switch 2", "F2P", "任天堂"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 111,
        "title": "中国3月版号发放：130款国产+3款进口游戏获批，腾讯《粒粒的小人国》在列",
        "summary": "3月25日，国家新闻出版署正式发布2026年3月网络游戏审批信息，共133款游戏过审：130款国产网络游戏获得版号，3款进口网络游戏获批，另有4款游戏完成审批信息变更。本次获批的重点产品包括腾讯的《粒粒的小人国》（动森类游戏）等。版号发放保持常态化节奏，月均130款左右的审批数量延续了2025年下半年以来的稳定态势。进口游戏获批数量依然较少（仅3款），反映出监管部门对海外游戏引进仍持审慎态度。版号发放常态化为国内游戏厂商的产品上线和商业化提供了可预期的政策环境。",
        "source": "3DM",
        "sourceUrl": "https://news.qq.com/rain/a/20260325A06PCW00",
        "sourceUrls": [
            {"name": "腾讯新闻", "url": "https://news.qq.com/rain/a/20260325A06PCW00"},
            {"name": "国家新闻出版署", "url": "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/"},
            {"name": "17173", "url": "https://news.17173.com/content/03252026/200237227.shtml"},
            {"name": "TapTap", "url": "https://www.taptap.cn/hashtag/2026%E5%B9%B43%E6%9C%88%E7%89%88%E5%8F%B7%E5%8F%91%E6%94%BE"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-25",
        "tags": ["版号", "国家新闻出版署", "腾讯", "审批", "监管"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 110,
        "title": "Epic Games裁员超1000人削减5亿美元成本：Fortnite参与度2025年起持续下滑",
        "summary": "Epic Games CEO Tim Sweeney于2026年3月24日在公司官方博客发布备忘录，宣布裁员超过1000名员工，并计划通过缩减合同工、营销支出和冻结招聘等措施实现超5亿美元成本削减。Sweeney指出裁员的核心原因是Fortnite用户参与度自2025年起持续下滑，导致公司'支出显著高于收入'。此前Epic刚于上周宣布提高V-Bucks虚拟货币价格以应对运营成本上升。被裁员工将获得4个月遣散费（工龄长者更多），美国员工还将获得6个月医疗保健续保。Sweeney强调此次裁员并非因AI取代了开发人员，而是收入端的结构性下滑。这是Epic继2023年裁员830人后的第二次大规模裁员，也是2026年游戏行业迄今最大规模的单次裁员事件。",
        "source": "GamesIndustry",
        "sourceUrl": "https://techcrunch.com/2026/03/24/epic-games-cuts-1000-jobs-says-fortnite-engagement-is-down/",
        "sourceUrls": [
            {"name": "Epic Games官方", "url": "https://www.epicgames.com/site/en-US/news/todays-layoffs"},
            {"name": "TechCrunch", "url": "https://techcrunch.com/2026/03/24/epic-games-cuts-1000-jobs-says-fortnite-engagement-is-down/"},
            {"name": "AP News", "url": "https://apnews.com/article/epic-games-layoffs-fortnite-video-games-6a15e7c3f7916ecba10150a767295549"},
            {"name": "Variety", "url": "https://variety.com/2026/gaming/news/epic-games-layoff-1000-fortnite-downturn-500-million-1236697837/"},
            {"name": "Fox Business", "url": "https://www.foxbusiness.com/economy/epic-games-cuts-1000-jobs-fortnite-magic-fades-extreme-market-conditions"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-24",
        "tags": ["Epic Games", "裁员", "Fortnite", "V-Bucks", "Tim Sweeney", "成本削减"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "Epic此次裁员1000人+削减5亿美元成本是2026年游戏行业最大的单次裁员事件，核心原因是Fortnite收入端的结构性下滑而非AI替代。这揭示了一个深层问题：Live Service游戏（直播服务类）的生命周期风险——即使是Fortnite这样的现象级产品也无法永远维持巅峰参与度。对比2023年裁员830人，两年内累计裁员近2000人说明问题是结构性的而非周期性的。V-Bucks涨价+裁员的组合可能加速玩家流失形成恶性循环。行业启示：过度依赖单一Live Service产品的商业模式存在巨大的脆弱性。",
        "relatedNewsIds": [75, 37]
    },
    {
        "id": 109,
        "title": "微软Xbox Gaming Copilot AI助手将于2026年登陆Xbox Series X|S主机",
        "summary": "微软在GDC 2026 Festival of Gaming活动上确认，Xbox Gaming Copilot AI助手将于2026年晚些时候正式登陆Xbox Series X|S主机。该AI助手此前已在PC、移动端及ROG Xbox Ally上进行了Beta测试，支持语音激活，可实时为玩家提供游戏内帮助、策略建议和操作指引。Xbox产品经理表示，Gaming Copilot的目标是让游戏更加便捷和包容，帮助新手玩家更快上手、让资深玩家发现隐藏内容。此举标志着微软将AI深度整合到主机游戏体验中的战略方向。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/gaming-copilot-coming-to-current-gen-xbox-consoles-in-2026",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/gaming-copilot-coming-to-current-gen-xbox-consoles-in-2026"},
            {"name": "GameSpot", "url": "https://www.gamespot.com/articles/gaming-copilot-ai-assistant-is-coming-to-current-gen-xbox-consoles-this-year/1100-6538770/"},
            {"name": "Windows Central", "url": "https://www.windowscentral.com/gaming/xbox/microsofts-xbox-ai-assistant-gaming-copilot-is-coming-to-consoles-this-year-and-not-stopping-there"},
            {"name": "GamesRadar", "url": "https://www.gamesradar.com/games/xbox-just-revealed-gaming-copilot-is-coming-to-current-generation-consoles-later-this-year/"}
        ],
        "category": "platform",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-19",
        "tags": ["Xbox", "微软", "Gaming Copilot", "AI", "GDC", "主机"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "微软将Gaming Copilot从PC/移动端扩展到主机，标志着AI助手正式进入客厅游戏场景。结合微软在Azure AI和Copilot生态的持续投入，这一举措可能引发索尼和任天堂的跟进响应。对开发者而言，AI辅助功能可能成为下一代主机的标配竞争维度。",
        "relatedNewsIds": []
    },
    {
        "id": 108,
        "title": "Circana数据：PS5连续第二个月在美国销量超越Switch 2，《生化危机：安魂曲》登顶软件榜",
        "summary": "据Circana（原NPD Group）发布的2026年2月美国游戏市场数据，PlayStation 5在单位销量和销售额两个维度均超过Nintendo Switch 2，这是PS5连续第二个月力压任天堂新主机。《生化危机：安魂曲》（Resident Evil Requiem）作为当月新发售游戏登顶软件销售榜首。值得注意的是Switch 2的发售初期动量依然强劲——累计至2025年12月底已售出1737万台。但PS5凭借成熟的游戏库和持续降价策略，在美国市场展现出五年老机型对新主机的竞争韧性。不过3月数据显示Switch 2已反超PS5重夺美国销量冠军。",
        "source": "VGChartz",
        "sourceUrl": "https://www.vgchartz.com/article/467329/ps5-outsells-switch-2-in-the-us-in-february-2026-resident-evil-requiem-debuts-in-1st/",
        "sourceUrls": [
            {"name": "VGChartz", "url": "https://www.vgchartz.com/article/467329/ps5-outsells-switch-2-in-the-us-in-february-2026-resident-evil-requiem-debuts-in-1st/"},
            {"name": "Push Square", "url": "https://www.pushsquare.com/news/2026/03/feb-2026-usa-sales-ps5-outsells-nintendos-new-switch-2-for-a-second-consecutive-month"},
            {"name": "Metro", "url": "https://metro.co.uk/2026/03/20/ps5-outsells-switch-2-second-month-resident-evil-requiem-tops-charts-27559086/"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-20",
        "tags": ["PS5", "Switch 2", "Circana", "美国销量", "生化危机安魂曲", "主机销量"],
        "sentiment": "neutral",
        "tdocMarking": "none",
        "analysis": "PS5连续两个月力压Switch 2是一个关键信号：五年老机型凭借成熟游戏库和降价策略仍具竞争韧性。但Switch 2在日本市场供不应求的表现说明任天堂的核心受众忠诚度依然极高。这种'老机型 vs 新主机'的格局竞争将在2026年上半年持续，3月Switch 2已反超说明初期波动属于正常周期。生化危机安魂曲登顶软件榜进一步验证了3A恐怖IP的跨平台号召力。",
        "relatedNewsIds": [107, 87]
    },
    {
        "id": 107,
        "title": "任天堂削减Switch 2本季度产量33%：从600万台降至400万台，因美国假期销量未达预期",
        "summary": "据GodisaGeek等多家媒体报道，任天堂计划将2026年第一季度Switch 2产量从原定600万台削减至400万台，降幅达33%，较低产出水平预计持续至4月。主要原因是美国等多个地区假期销售未达预期——Switch 2在美国首个假期季度售出约230万台，较初代Switch同期的282万台下降约18%。日本则是唯一出现严重缺货的市场（售出243万台 vs 初代177万台）。任天堂内部正讨论6月份大量铺货的策略是否'透支了后期需求'。尽管如此，Switch 2截至2025年12月底已累计售出1737万台，远超初代同期，仍保持财年1900万台预期目标。任天堂社长表示目前没有因全球内存危机涨价的计划。",
        "source": "GodisaGeek",
        "sourceUrl": "https://godisageek.com/2026/03/nintendo-cuts-switch-2-production-holiday-sales/",
        "sourceUrls": [
            {"name": "GodisaGeek", "url": "https://godisageek.com/2026/03/nintendo-cuts-switch-2-production-holiday-sales/"},
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/archive/2026/03"}
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-25",
        "tags": ["Switch 2", "任天堂", "产量削减", "假期销量", "美国市场"],
        "sentiment": "negative",
        "tdocMarking": "none",
        "analysis": "产量削减33%是一个值得警惕的信号，说明Switch 2在美国市场的首个假期表现不及预期。与初代Switch同期相比下降18%，可能反映出：1)定价策略偏高（美区$449.99 vs 初代$299.99）；2)首发阵容吸引力不足；3)内存涨价导致的供应链压力。但任天堂讨论'6月铺货透支后期需求'的说法暗示这可能是主动库存管理而非需求崩塌。累计1737万台的成绩仍远超初代同期，财年目标仍在轨道上。",
        "relatedNewsIds": [108, 87, 85]
    },
    {
        "id": 106,
        "title": "《杀戮尖塔2》销量飙至460万份+$9200万收入，Steam同时在线峰值57.4万创品类纪录",
        "summary": "据Alinea Analytics估算，Mega Crit开发的《杀戮尖塔2》（Slay the Spire 2）截至3月19日累计销量已达到460万份，总收入约9200万美元。游戏于3月5日以Early Access形式登陆Steam，上线后Steam同时在线峰值达到574,638人，是前作峰值的10倍以上，创下卡牌Roguelike品类历史最高纪录。游戏连续两周蝉联Steam全球周销量榜冠军（第11-12周），直至3月17-24日被新发售的《红色沙漠》超越降至第二。好评率维持在95%以上。该作已成为2026年迄今Steam最大的发售事件之一。",
        "source": "VGChartz",
        "sourceUrl": "https://www.vgchartz.com/article/467253/slay-the-spire-2-beats-marathon-on-the-steam-charts/",
        "sourceUrls": [
            {"name": "Wccftech", "url": "https://wccftech.com/slay-the-spire-2-estimated-4-6-million-copies-sold-92-million-revenue-generated/"},
            {"name": "AllKeyShop", "url": "https://www.allkeyshop.com/blog/slay-the-spire-2-sales-records-news-d/"},
            {"name": "VGChartz", "url": "https://www.vgchartz.com/article/467253/slay-the-spire-2-beats-marathon-on-the-steam-charts/"},
            {"name": "VGTimes", "url": "https://vgtimes.com/gaming-news/151203-bigger-than-silksong-slay-the-spire-2-sales-figures-revealed.html"}
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-25",
        "tags": ["杀戮尖塔2", "460万销量", "Steam", "独立游戏", "Roguelike", "里程碑"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "杀戮尖塔2以Early Access形式两周售出460万份，创下品类纪录，标志着Roguelike品类从小众走向主流的里程碑。57.4万同时在线峰值是前作的10倍以上，说明Steam平台的长尾效应和社区口碑对续作的放大效应极为显著。$9200万收入验证了'小团队+优质IP续作'的商业模式可复制性，对独立开发者生态是极大鼓舞。被红色沙漠超越降至第二说明3A新IP同样具有强大首周爆发力。"
    },
    {
        "id": 105,
        "title": "Steam春季特卖2026正式开启：3月19-26日全品类打折，年度首场大促",
        "summary": "Valve旗下Steam平台2026年春季特卖于3月19日太平洋时间上午10点正式开启，持续至3月26日。这是Steam 2026年首场大型季节性促销活动，覆盖全品类游戏折扣。热门折扣包括《无人深空》《领主庄园》等作品的深度降价。春促期间Steam同时在线用户数创下新高。此次春促也是Valve在公布Steam Machine和Steam Frame后首次大型促销，对于推动平台生态活跃度具有重要意义。",
        "source": "SteamDB",
        "sourceUrl": "https://store.steampowered.com/",
        "sourceUrls": [
            {"name": "Steam官方", "url": "https://partner.steamgames.com/doc/marketing/upcoming_events/2026_spring_sale"},
            {"name": "4ScarrsGaming", "url": "https://www.4scarrsgaming.com/2026/03/steam-spring-sale-2026.html"},
            {"name": "IT之家", "url": "https://www.ithome.com/0/872/473.htm"}
        ],
        "category": "platform",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-19",
        "tags": ["Steam", "春季特卖", "Valve", "促销", "2026"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 104,
        "title": "PSN全球大规模宕机：超1.3万用户受影响，索尼约2小时后恢复服务",
        "summary": "PlayStation Network于2026年3月21日美东时间下午4:59左右发生全球大规模宕机，影响PS5和PS4平台所有联网服务，包括在线游戏、社交功能、云串流、奖杯系统和锦标赛功能。Downdetector记录超过13,000起用户报告。索尼于当晚10:40左右恢复主要服务，但部分用户仍持续遇到好友列表显示错误等问题，日本地区在官方宣称恢复后仍出现新的投诉高峰。值得注意的是，索尼已宣布计划在2026年9月前停用\"PlayStation Network\"和\"PSN\"品牌名称。此次宕机是PSN近期最严重的服务中断事件之一。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "GamerUrge", "url": "https://gamerurge.com/psn-down-playstation-network-outage-march-2026"},
            {"name": "TechRadar", "url": "https://www.techradar.com/news/live/psn-down-21-march-2026"},
            {"name": "Planet News", "url": "https://planet.news/article/playstation-network-global-outage-march-2026"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-21",
        "tags": ["PSN", "宕机", "PlayStation", "索尼", "在线服务"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 103,
        "title": "春秋电子（CQXA）获中国三部委批准收购丹麦游戏硬件公司Asetek，跨境并购迎里程碑",
        "summary": "据Parsers.vc报道，中国苏州春秋电子科技旗下新加坡子公司CQXA Holdings已获得中国商务部(MOFCOM)、发改委(NDRC)和外汇管理局(SAFE)三大监管部门的批准，收购在纳斯达克上市的丹麦游戏硬件公司Asetek A/S。Asetek是全球领先的液体冷却技术开发商和SimSports产品制造商，其液冷方案广泛应用于高性能游戏PC。Asetek董事会已一致建议股东接受全现金收购要约，要约截止日期为2026年4月8日。此交易反映了中国企业通过收购西方先进游戏硬件技术提升全球竞争力的趋势，液冷技术在下一代游戏主机和高性能计算中的重要性持续提升。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "sourceUrls": [
            {"name": "Parsers.vc", "url": "https://parsers.vc/news/260323-china-clears-major-tech-takeover--cqxa/"},
            {"name": "东方财富", "url": "https://caifuhao.eastmoney.com/news/20260319233617433250980"},
            {"name": "Asetek IR", "url": "https://ir.asetek.com/news/stock-exchange-releases/default.aspx"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-23",
        "tags": ["春秋电子", "CQXA", "Asetek", "液冷", "并购", "游戏硬件"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 102,
        "title": "字节跳动出售沐瞳科技予沙特Savvy Games Group，交易金额或超60亿美元",
        "summary": "据TechNode、Engadget、CNTechPost等多家媒体报道，字节跳动正与沙特阿拉伯Savvy Games Group就出售旗下游戏工作室沐瞳科技（Moonton Technology）进行深入谈判，交易金额预计超过60亿美元。沐瞳科技是《无尽对决》（Mobile Legends: Bang Bang）的开发商，该游戏在东南亚市场拥有巨大用户基础。此次出售标志着字节跳动进一步收缩游戏业务版图，继2023年朝夕光年大裁员后再度释放退出游戏赛道的强烈信号。买方Savvy Games Group是沙特公共投资基金（PIF）旗下的游戏投资平台。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "sourceUrls": [
            {"name": "TechNode", "url": "https://technode.com/"},
            {"name": "Engadget", "url": "https://www.engadget.com/"},
            {"name": "CNTechPost", "url": "https://cntechpost.com/"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-23",
        "tags": ["字节跳动", "沐瞳科技", "Moonton", "Savvy Games Group", "沙特", "并购", "60亿美元"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 99,
        "title": "索尼战略深化：放弃PC端启动器计划，全力回归主机优先战略",
        "summary": "据Bloomberg Jason Schreier、PushSquare、NotebookCheck等媒体报道，索尼互动娱乐已正式放弃此前传闻中的PC端独立启动器开发计划，决定全力回归主机优先战略。这一决定与此前彭博社曝出的'PS5单机大作不再移植PC'路线形成战略闭环——索尼不仅不打算把独占大作搬上PC，连PC端的平台基础设施投资也一并撤回。分析认为此举将进一步强化PS5/PS6的平台黏性，但也可能引发PC玩家社区的不满。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "sourceUrls": [
            {"name": "IT之家", "url": "https://www.ithome.com/"},
            {"name": "PushSquare", "url": "https://www.pushsquare.com/"},
            {"name": "NotebookCheck", "url": "https://www.notebookcheck.net/"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-21",
        "tags": ["索尼", "PC启动器", "主机优先", "战略转向", "PlayStation"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 98,
        "title": "CDPR披露全新IP\"Hadar\"项目进展，巫师4开发团队规模达499人",
        "summary": "据游民星空、Insider Gaming、Rock Paper Shotgun等媒体报道，CD Projekt RED在最新投资者更新中披露了多项重要开发进展。其一，全新原创科幻IP项目\"Hadar\"（代号）正在积极推进中，这是CDPR继巫师和赛博朋克之后的第三大IP。其二，《巫师4》（The Witcher IV）开发团队已扩充至499人，较2024年团队403人增长24%，显示项目已进入全面生产阶段。CDPR目前在华沙和波兹南两大工作室同步推进多个项目，显示出强劲的多IP并行研发能力。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "游民星空", "url": "https://www.gamersky.com/"},
            {"name": "Insider Gaming", "url": "https://insider-gaming.com/"},
            {"name": "Rock Paper Shotgun", "url": "https://www.rockpapershotgun.com/"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-20",
        "tags": ["CDPR", "Hadar", "巫师4", "新IP", "团队规模"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 97,
        "title": "Switch 2欧盟版本将因新法规要求支持用户自行更换电池",
        "summary": "据TechSpot、PC Gamer、Hypebeast等多家媒体报道，Nintendo Switch 2的欧盟销售版本将因欧盟新修订的《电池与废电池法规》（EU 2023/1542）要求，必须支持用户自行更换电池。该法规要求从2027年起所有便携式消费电子产品需设计为用户可更换电池。任天堂选择提前在Switch 2中遵循这一规定，欧盟版Switch 2将配备可拆卸电池仓设计。这一法规合规要求可能影响Switch 2的工业设计、防水性和生产成本，同时也为第三方配件市场带来新机会。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {"name": "TechSpot", "url": "https://www.techspot.com/"},
            {"name": "PC Gamer", "url": "https://www.pcgamer.com/"},
            {"name": "Hypebeast", "url": "https://hypebeast.com/"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-22",
        "tags": ["Switch 2", "欧盟", "电池法规", "任天堂", "监管合规"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 96,
        "title": "《我的世界：地下城2》确认2026年内发售，Mojang扩展Minecraft宇宙",
        "summary": "据MCP腾讯文档Tier 0数据，Mojang Studios正式确认《我的世界：地下城2》（Minecraft Dungeons 2）将于2026年内发售。作为2020年推出的《我的世界：地下城》续作，本作将在保持dungeon crawler核心玩法的基础上带来大幅升级。此举表明微软正加速扩展Minecraft游戏宇宙的品类覆盖，从沙盒建造向动作RPG品类进一步延伸。《我的世界：地下城》初代累计下载量已超3900万。",
        "source": "Xbox Wire",
        "sourceUrl": "https://news.xbox.com/en-us/",
        "sourceUrls": [
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "Xbox Wire", "url": "https://news.xbox.com/en-us/"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-26",
        "tags": ["Minecraft", "地下城2", "Mojang", "微软", "动作RPG"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 95,
        "title": "Capcom明确反对AI美术用于游戏制作，与CDPR形成行业反AI联盟",
        "summary": "据MCP腾讯文档Tier 0数据，Capcom高层在近期采访中明确表态反对使用AI生成美术资产用于游戏制作，强调Capcom将坚持人工创作的品质标准。这一立场与CD Projekt RED此前公开的反AI美术声明形成呼应，两家以高品质3A游戏著称的开发商正形成行业性的\"反AI美术联盟\"。此声明发布时恰逢《红色沙漠》AI美术争议引发行业震动，Capcom的表态被视为对玩家关切的积极回应，也为行业在AI使用边界问题上树立了标杆。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com/"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["Capcom", "AI美术", "反AI", "CDPR", "行业立场"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 94,
        "title": "Xbox Partner Preview春季展示会：19款新作公布，Hades 2正式登陆Xbox/Game Pass",
        "summary": "微软于3月26日举办Xbox Partner Preview春季展示会，30分钟内集中公布了19款第三方合作伙伴新作和更新，其中14款确认加入Game Pass。重磅亮点包括：Supergiant Games《Hades 2》正式宣布登陆Xbox和Game Pass并公布发售日期；GSC Game World《S.T.A.L.K.E.R. 2》首个大型DLC；SEGA多款Xbox Play Anywhere新作；Team Meat《Super Meat Boy 3D》；以及世嘉旗下多款作品加入Game Pass等。展示会还首次公布了全新IP《Stranger Than Heaven》《Hunter: The Reckoning》等。这是2026年微软第二次Partner Preview活动，展现了Xbox平台在吸引第三方开发者方面的持续投入和Game Pass内容生态的加速扩张。",
        "source": "Xbox Wire",
        "sourceUrl": "https://news.xbox.com/en-us/2026/03/26/xbox-partner-preview-march-2026-recap/",
        "sourceUrls": [
            {"name": "Xbox Wire", "url": "https://news.xbox.com/en-us/2026/03/26/xbox-partner-preview-march-2026-recap/"},
            {"name": "IGN", "url": "https://www.ign.com/articles/xbox-partner-preview-march-2026-everything-announced-updating-live"},
            {"name": "Windows Central", "url": "https://www.windowscentral.com/gaming/xbox/everything-announced-at-the-xbox-partner-preview-march-2026-sega-xbox-game-pass-xbox-play-anywhere-and-more"},
            {"name": "EuroGamer", "url": "https://www.eurogamer.net/xbox-partner-preview-showcase-march-2026-heres-everything-announced"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["Xbox", "Partner Preview", "Hades 2", "Game Pass", "SEGA", "STALKER 2", "微软"],
        "sentiment": "positive",
        "tdocMarking": "none",
        "analysis": "Xbox Partner Preview的核心看点是Hades 2加入Game Pass生态——这是继《无主之地4》《巫师3》之后又一款顶级独立游戏选择Day One入库Game Pass，验证了微软Game Pass对第三方开发者的吸引力在不断增强。19款新作中14款入库的高比例说明Game Pass已成为Xbox平台策略的绝对核心。SEGA深度合作Xbox Play Anywhere则进一步印证了微软跨平台战略的推进速度。",
        "relatedNewsIds": [1, 56]
    },
    {
        "id": 93,
        "title": "《生化危机：安魂曲》登顶美国二月销量榜，Circana确认系列新纪录",
        "summary": "据MCP腾讯文档Tier 0数据及Circana（原NPD）统计，卡普空《生化危机：安魂曲》成功登顶2026年2月美国游戏销量榜首位，成为该月最畅销的游戏产品。这一成绩延续了该作发售以来的强劲销售势头（此前已宣布全球销量突破600万份）。《生化危机：安魂曲》在Switch 2首发取得的商业成功，不仅证明了生化危机IP的持久号召力，也从侧面验证了Switch 2平台对3A级游戏的市场承载能力。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com/"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["生化危机", "安魂曲", "Circana", "美国销量榜", "Switch 2"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 92,
        "title": "GTA6 Switch 2版本传闻引发热议，Rockstar及任天堂尚未回应",
        "summary": "据MCP腾讯文档Tier 0数据，近期有传闻称Rockstar Games正在评估将《GTA6》移植至Nintendo Switch 2平台的可能性。鉴于Switch 2采用NVIDIA T239定制芯片，其性能相比初代Switch有数量级提升，理论上具备运行GTA6缩减版本的硬件基础。然而Rockstar和任天堂均未对此传闻做出回应。业内分析人士对此持谨慎态度，指出GTA6的技术规格对主机硬件要求极高，Switch 2移植面临巨大技术挑战。此传闻需持续跟踪官方确认。",
        "source": "IGN",
        "sourceUrl": "https://www.ign.com/",
        "sourceUrls": [
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "IGN", "url": "https://www.ign.com/"}
        ],
        "category": "game",
        "importance": "medium",
        "featured": false,
        "date": "2026-03-26",
        "tags": ["GTA6", "Switch 2", "传闻", "Rockstar", "任天堂"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 91,
        "title": "Xbox多名高管离职潮持续，管理层重组进入深水区",
        "summary": "据MCP腾讯文档Tier 0数据，继Phil Spencer退休和Sarah Bond辞职之后，Xbox部门又有多名高管相继离职。这波管理层变动被视为新任CEO Asha Sharma上任后推行组织架构重组的连锁反应。分析认为，Xbox正经历自2001年品牌成立以来最大规模的管理层换血，这将深刻影响Xbox未来的战略方向、工作室管理模式和Game Pass生态走向。Sharma的AI背景暗示Xbox可能进一步强化AI驱动的用户体验和内容推荐策略。",
        "source": "IGN",
        "sourceUrl": "https://www.ign.com/",
        "sourceUrls": [
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"},
            {"name": "IGN", "url": "https://www.ign.com/"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["Xbox", "高管离职", "管理层变动", "Asha Sharma", "微软"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 87,
        "title": "索尼确认AI帧生成技术最快2027年登陆PlayStation主机",
        "summary": "据3DTested等媒体报道，索尼互动娱乐正在内部研发基于机器学习的帧生成技术，并确认最快将于2027年引入PlayStation主机平台。该技术类似NVIDIA DLSS的帧生成功能，但针对PlayStation硬件进行了深度定制优化。索尼此举表明正加速将AI/ML技术整合到主机图形管线中，以提升PS5和未来PS6平台的游戏画面表现。这是继NVIDIA DLSS 5和AMD FSR之后，主机平台方首次被报道自主研发帧生成方案，标志着AI图形技术已成为主机厂商的核心竞争赛道。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "3DTested", "url": "https://3dtested.com/"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com/"},
            {"name": "腾讯文档MCP", "url": "https://docs.qq.com/sheet/LMLdoimBsILX"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["索尼", "PlayStation", "AI帧生成", "ML", "2027", "PSSR"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 88,
        "title": "《宝可梦Pokopia》Switch 2首发4天全球销量突破220万份",
        "summary": "任天堂在投资者关系页面公布，Switch 2首发游戏《宝可梦Pokopia》在发售仅4天内全球销量即突破220万份，成为Switch 2平台销售速度最快的游戏之一。这一成绩远超市场预期，证明宝可梦IP在新平台上的强大号召力，同时也从侧面反映了Switch 2首发期的硬件装机量已达到可观规模。该作是宝可梦系列首款Switch 2独占作品。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {"name": "任天堂IR", "url": "https://www.nintendo.co.jp/ir/"},
            {"name": "NintendoNews", "url": "https://mynintendonews.com/"}
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-12",
        "tags": ["宝可梦", "Pokopia", "Switch 2", "销量", "任天堂"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 89,
        "title": "FromSoftware公布Switch 2独占新作《The Duskbloods》：吸血鬼题材动作RPG",
        "summary": "FromSoftware在任天堂合作伙伴展示会上正式公布Switch 2独占新作《The Duskbloods》，游戏以吸血鬼为题材的暗黑动作RPG。这是FromSoftware继《黑暗之魂》《艾尔登法环》之后的全新IP，也是该工作室首次为任天堂平台开发独占作品。消息公布后引发玩家社区强烈反响，被视为Switch 2吸引核心玩家群体的重要举措。任天堂此举进一步证明了Switch 2在争取硬核3A开发者支持方面的战略决心。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {"name": "IT之家", "url": "https://www.ithome.com/"},
            {"name": "NintendoNews", "url": "https://mynintendonews.com/"},
            {"name": "Nintendo", "url": "https://www.nintendo.com/"}
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-22",
        "tags": ["FromSoftware", "Duskbloods", "Switch 2", "独占", "动作RPG"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 90,
        "title": "DRAM内存涨价潮加剧：DDR5价格翻倍，游戏PC与显卡成本面临上涨压力",
        "summary": "据Tom's Hardware和IEEE Spectrum报道，全球DRAM内存价格持续飙升，DDR5内存模组价格已较年初翻倍。AI数据中心对HBM（高带宽内存）的巨大需求挤压了消费级DRAM产能，导致PC游戏硬件面临成本上涨压力。分析师预计NVIDIA和AMD可能在2026年下半年上调游戏显卡价格，游戏PC整机价格预计涨幅10-20%。这一趋势与此前报道的Switch 2涨价压力、Steam Machine供应链困难形成共振，全球游戏硬件生态正面临罕见的系统性成本冲击。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "Tom's Hardware", "url": "https://www.tomshardware.com/"},
            {"name": "IEEE Spectrum", "url": "https://spectrum.ieee.org/"}
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-22",
        "tags": ["DRAM", "内存涨价", "DDR5", "显卡", "游戏PC", "供应链"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 81,
        "title": "Capcom宣布新Spotlight展示会：将公布《生化危机：安魂曲》《Pragmata》《怪物猎人荒野》新内容",
        "summary": "Capcom正式宣布将举办新一期Capcom Spotlight展示会，预计持续约40分钟，将带来《生化危机：安魂曲》开发团队访谈、科幻新作《Pragmata》最新进展、《怪物猎人：荒野》更新计划以及《街头霸王6》Year 3赛季内容。这是Capcom继《生化危机：安魂曲》全球销量突破600万后的首场大型展示活动。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/resident-evil-requiem-pragmata-and-more-to-appear-in-capcom-showcase-next-week/",
        "sourceUrls": [
            {"name": "VGC", "url": "https://www.videogameschronicle.com/news/resident-evil-requiem-pragmata-and-more-to-appear-in-capcom-showcase-next-week/"},
            {"name": "CapcomAsia微博", "url": "https://weibo.com/capcomasia"}
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-20",
        "tags": ["Capcom", "Pragmata", "生化危机", "怪物猎人", "展示会"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 82,
        "title": "SEGA计划2027年3月前发布4款\"主力IP\"新游，意欲重回3A主流",
        "summary": "SEGA透露计划在2027年3月底前（FY2026内）发布4款来自旗下\"主力IP\"的大型新游。结合SEGA现有IP矩阵，候选作品可能包括《如龙》《索尼克》《女神异闻录》《全面战争》等系列的全新作品。此举表明SEGA正在积极扩大其PC/Console游戏产品线，加速从传统街机/手游公司向3A多平台发行商转型。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "VGC", "url": "https://www.videogameschronicle.com/"},
            {"name": "PlayStation Universe", "url": "https://www.psu.com/"}
        ],
        "category": "policy",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-20",
        "tags": ["SEGA", "主力IP", "战略", "3A"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 83,
        "title": "GamesIndustry.biz发起\"AI周\"专题：深度剖析AI对游戏行业的商业冲击",
        "summary": "全球最大游戏行业媒体GamesIndustry.biz本周推出\"AI Week\"专题，以一系列深度报道、访谈和分析文章全面探讨AI技术对游戏产业的商业影响。专题涵盖AI在开发流程中的实际应用案例、对就业市场的冲击、版权与法律争议，以及开发者对AI工具的态度调查。这是GDC 2026\"AI热\"之后行业首次系统性的商业视角分析。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-20",
        "tags": ["AI", "游戏行业", "GamesIndustry", "专题报道"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 84,
        "title": "Newzoo深度报告：腾讯网易米哈游库洛登顶全球PC游戏时长Top20",
        "summary": "据Newzoo发布的《2026 PC与主机游戏市场报告》详细数据，中国游戏公司在全球PC平台表现突出：腾讯旗下拳头游戏的《英雄联盟》《无畏契约》、网易《漫威争锋》、库洛《鸣潮》、米哈游《原神》成功跻身全球用户时长Top 20 PC游戏。其中网易《漫威争锋》表现尤为亮眼，同时入选PS平台和Xbox平台时长Top 20主机游戏。报告指出PC游戏市场结构性增长仍有支撑，稳定的玩家扩张推动收入增长。",
        "source": "Newzoo",
        "sourceUrl": "https://news.qq.com/rain/a/20260318A0004N00",
        "sourceUrls": [
            {"name": "腾讯新闻/GameLook", "url": "https://news.qq.com/rain/a/20260318A0004N00"},
            {"name": "GameLook", "url": "http://gamelook.com.cn/"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-18",
        "tags": ["Newzoo", "腾讯", "网易", "米哈游", "市场数据", "PC游戏"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 85,
        "title": "《巫师4》披露大量开发情报：战斗更流畅、引入前沿技术",
        "summary": "CD Projekt RED在官方播客\"AnsweRED\"中罕见披露《巫师4》（The Witcher IV）大量开发信息。团队透露战斗系统将比前作更加流畅丝滑，并引入多项前沿技术。此外CDPR确认《赛博朋克2077》不再开发新DLC，Switch 2版《赛博朋克2077》移植已进行\"远超7周\"的开发。《巫师4》预计将成为CDPR继《赛博朋克2077》之后最重要的项目。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/",
        "sourceUrls": [
            {"name": "Gamingbolt", "url": "https://gamingbolt.com/"},
            {"name": "快科技", "url": "https://news.mydrivers.com/"}
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-17",
        "tags": ["巫师4", "CDPR", "赛博朋克2077", "Switch 2"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 86,
        "title": "索尼PS6或因AI芯片短缺推迟至2028-2029年，\"25年行业最严重供需失衡\"",
        "summary": "GamesIndustry.biz报道，业内人士警告AI驱动的芯片需求激增正导致消费电子行业严重的内存芯片短缺。知情人士称索尼可能因此将PS6发布时间从原计划的2027年推迟至2028甚至2029年。报道援引行业专家称'这是我25年从业经历中最严重的供需失衡'。此消息与此前PS6按计划2027年假日季发售的传闻形成冲突，需持续关注后续官方确认。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/resources/directory/company/sony",
        "sourceUrls": [
            {"name": "GamesIndustry(Vikki Blake)", "url": "https://www.gamesindustry.biz/resources/directory/company/sony"},
            {"name": "新浪财经", "url": "https://finance.sina.com.cn/tech/roll/2025-05-11/doc-ineweiwc2494692.shtml"}
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-16",
        "tags": ["PS6", "索尼", "芯片短缺", "AI", "内存"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 67,
        "title": "《死亡搁浅2：冥滩之上》PC版3月19日正式发售，Steam首日表现火爆",
        "summary": "小岛秀夫新作《死亡搁浅2：冥滩之上》PC版于2026年3月19日全球解锁，由Nixxes Software负责移植，登陆Steam和Epic Games Store。PC版标准版售价¥298，新增\"走向荒野\"难度、真人过场动画、Boss战重复游玩功能，支持超宽屏、DLSS 5和DualSense。游戏安装包约98.2GB。发售前113GB未加密文件遭BT泄露，但未影响首日销售热度。PS5版同步推送免费内容更新。Steam评价为'特别好评'。",
        "source": "PlayStation Blog",
        "sourceUrl": "https://blog.playstation.com/2026/03/17/death-stranding-2-new-pc-ps5-features-detailed-live-march-19/",
        "sourceUrls": [
            {"name": "PlayStation Blog", "url": "https://blog.playstation.com/2026/03/17/death-stranding-2-new-pc-ps5-features-detailed-live-march-19/"},
            {"name": "3DM", "url": "https://www.3dmgame.com/games/deathstranding2/"},
            {"name": "17173", "url": "https://news.17173.com/content/03182026/054614140.shtml"}
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-19",
        "tags": ["死亡搁浅2", "小岛秀夫", "PC", "Nixxes", "Steam"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 68,
        "title": "《红色沙漠》5天销量破300万登顶Steam周榜，Pearl Abyss股价反弹23%",
        "summary": "Pearl Abyss开放世界动作RPG《红色沙漠》于2026年3月19日全球正式发售，首日即突破200万份，5天后累计销量突破300万份。游戏首周末Steam同时在线峰值超24.8万人，并在3月17-24日Steam全球销量周榜（含免费游戏）中登顶第一，力压《杀戮尖塔2》和《死亡搁浅2》。此前因AI美术争议（部分2D道具资产以AI生成）、发售初期66%好评率（韩国区仅33%）等问题，Pearl Abyss股价一度暴跌29%至₩46,000。但随着300万销量里程碑确认，股价大幅反弹23.34%至₩30,830亿韩元市值。Pearl Abyss已就AI美术问题公开致歉并承诺替换。该作研发投入估计约1.335亿美元，是韩国首款首日破200万的买断制游戏。",
        "source": "IGN",
        "sourceUrl": "https://www.ign.com/articles/crimson-desert-sells-3-million-in-just-5-days",
        "sourceUrls": [
            {"name": "IGN", "url": "https://www.ign.com/articles/crimson-desert-sells-3-million-in-just-5-days"},
            {"name": "VGChartz", "url": "https://www.vgchartz.com/article/467374/crimson-desert-debuts-in-1st-on-the-steam-charts/"},
            {"name": "腾讯新闻", "url": "https://news.qq.com/rain/a/20260326A0003P00"},
            {"name": "Korea JoongAng Daily", "url": "https://koreajoongangdaily.joins.com/news/2026-03-22/business/industry/Pearl-Abysss-Crimson-Desert-sells-2-million-copies-on-day-of-release/2550732"},
            {"name": "SteamDB", "url": "https://steamdb.info/app/2020070/charts/"}
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-26",
        "tags": ["红色沙漠", "Pearl Abyss", "300万销量", "Steam周榜登顶", "AI美术争议", "股价反弹"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 69,
        "title": "索尼战略转向：彭博社曝PS5单机大作不再移植PC，回归主机独占",
        "summary": "彭博社记者Jason Schreier报道，索尼互动娱乐未来将停止把旗下重磅单机PS5作品移植至PC平台。报道指出，在线类游戏如《马拉松》《漫威斗魂》仍会登陆PC，但《羊蹄山之魂》《沙罗周期》等单机作品将保持PS5独占。索尼内部认为PC版销量不佳且可能损害主机品牌价值。此举与微软、任天堂的跨平台开放策略形成鲜明对比，引发全球游戏社区激烈讨论。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "sourceUrls": [
            {"name": "彭博社(Jason Schreier)", "url": "https://www.bloomberg.com/"},
            {"name": "IT之家", "url": "https://www.ithome.com/tags/%e7%b4%a2%e5%b0%bc/"},
            {"name": "GameRes", "url": "https://www.gameres.com/916991.html"}
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-19",
        "tags": ["索尼", "PS5", "PC移植", "独占", "彭博社"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 70,
        "title": "Valve重申Steam Machine和Steam Frame将于2026年发售，此前博客引发延期疑虑",
        "summary": "Valve在\"Steam Year in Review 2025\"博客中使用了\"hope to ship in 2026\"措辞，引发Steam Machine和Steam Frame可能延期的担忧。此前Valve提及全球内存短缺和供应链问题可能影响硬件出货。Valve随后编辑博客移除不确定性表述，重申两款硬件将在2026年按计划发售。Steam Machine此前在GDC 2026已公布1080p/30fps认证标准。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/valve-insists-it-will-release-steam-machine-and-steam-frame-in-2026-after-blog-said-it-hoped-to/",
        "sourceUrls": [
            {"name": "VGC", "url": "https://www.videogameschronicle.com/news/valve-insists-it-will-release-steam-machine-and-steam-frame-in-2026-after-blog-said-it-hoped-to/"},
            {"name": "GameRes", "url": "https://www.gameres.com/916991.html"}
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-19",
        "tags": ["Valve", "Steam Machine", "Steam Frame", "内存短缺"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 71,
        "title": "Nexon全年收入达31亿美元（+6.5%），Arc Raiders累计销量1400万",
        "summary": "Nexon公布2025全年财报，总收入达31亿美元，同比增长6.5%，主要受《Arc Raiders》持续成功驱动。《Arc Raiders》累计销量已达1400万份，贡献约277亿韩元收入，月活跃用户约600万。该作还创下PC平台近100万同时在线玩家的纪录。Nexon Q4收入同比增长55%，超出市场预期。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/nexon-revenue-rises-65-to-31bn-in-2025-driven-by-ongoing-success-of-arc-raiders",
        "sourceUrls": [
            {"name": "GamesIndustry", "url": "https://www.gamesindustry.biz/nexon-revenue-rises-65-to-31bn-in-2025-driven-by-ongoing-success-of-arc-raiders"},
            {"name": "EuroGamer", "url": "https://www.eurogamer.net/arc-raiders-had-nearly-1000000-concurrent-players-last-month-and-thats-on-pc-alone"}
        ],
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-18",
        "tags": ["Nexon", "Arc Raiders", "财报", "销量"],
        "sentiment": "positive",
        "tdocMarking": "blue"
    },
    {
        "id": 72,
        "title": "纽约州消费者起诉Valve：指控CS2开箱构成非法赌博",
        "summary": "美国纽约州消费者通过Hagens Berman律师事务所对Valve Corporation发起集体诉讼，指控其在《反恐精英2》等游戏中的付费开箱/战利品箱（loot box）机制构成非法赌博企业。原告认为Valve通过随机付费道具系统诱导玩家反复消费，违反纽约州赌博法。此案呼应了欧洲PEGI开箱评级新规趋势。",
        "source": "VGC",
        "sourceUrl": "https://hbsslaw.com/",
        "sourceUrls": [
            {"name": "Hagens Berman", "url": "https://hbsslaw.com/"},
            {"name": "VGC", "url": "https://www.videogameschronicle.com/"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-18",
        "tags": ["Valve", "开箱", "赌博", "诉讼", "监管"],
        "sentiment": "negative",
        "tdocMarking": "orange"
    },
    {
        "id": 73,
        "title": "Asha Sharma正式上任Xbox新CEO，发布三大核心承诺应对玩家质疑",
        "summary": "微软CoreAI产品总裁Asha Sharma正式接替退休的Phil Spencer成为Xbox部门新CEO。面对玩家对其缺乏游戏行业背景的质疑，Sharma在上任首日发布三大核心承诺：优先保障游戏质量并赋能工作室、投资核心IP、支持Game Pass生态。Phil Spencer将继续担任顾问至2026年夏季。此次管理层交接标志着Xbox正式进入AI驱动的新时代。",
        "source": "IGN",
        "sourceUrl": "https://zerocounts.net/",
        "sourceUrls": [
            {"name": "IGN/Zero Counts", "url": "https://zerocounts.net/"},
            {"name": "微博(二柄APP)", "url": "https://weibo.com/erbingapp"}
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-18",
        "tags": ["Xbox", "Asha Sharma", "微软", "管理层变动"],
        "sentiment": "neutral",
        "tdocMarking": "bold"
    },
    {
        "id": 74,
        "title": "本周新游发售：《红色沙漠》《死亡搁浅2 PC》《MLB The Show 26》等齐聚",
        "summary": "2026年3月16-22日成为Q1最密集的新游发售周。重点作品包括：3月19日《死亡搁浅2》PC版、3月20日《红色沙漠》（PC/PS5）、《MLB The Show 26》等。多款3A级新作同周发售形成罕见竞争态势。",
        "source": "IGN",
        "sourceUrl": "https://www.fragster.com/",
        "sourceUrls": [
            {"name": "Fragster", "url": "https://www.fragster.com/"},
            {"name": "游民星空", "url": "https://ku.gamersky.com/release/pc_202603/"}
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-18",
        "tags": ["新游发售", "红色沙漠", "死亡搁浅2", "发售日历"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 75,
        "title": "Fortnite玩家抗议V-Bucks定价调整，威胁跳过下赛季Battle Pass",
        "summary": "Epic Games宣布调整Fortnite虚拟货币V-Bucks的定价方案后，大量玩家在社交媒体上表达不满，部分玩家声称将跳过下赛季Battle Pass并取消订阅。此前Fortnite已宣布4月16日免费开放\"Save the World\"模式以提振玩家活跃度。IGN报道称这一定价争议可能进一步影响Fortnite的玩家留存率。",
        "source": "IGN",
        "sourceUrl": "https://pc.ign.com/",
        "sourceUrls": [
            {"name": "IGN", "url": "https://pc.ign.com/"},
            {"name": "Fortnite官方", "url": "https://www.fortnite.com/battle-pass"}
        ],
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-17",
        "tags": ["Fortnite", "V-Bucks", "Epic", "玩家抗议"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 76,
        "title": "PS Plus三月二三档阵容公布：《战锤40K：星际战士2》《女神异闻录5R》等",
        "summary": "索尼互动娱乐公布3月PS Plus Extra和Premium档位新增游戏阵容，3月17日起正式上线。亮点作品包括《战锤40K：星际战士2》和《女神异闻录5：皇家版》等热门大作。PS Plus持续丰富游戏库以保持订阅服务吸引力。",
        "source": "PlayStation Blog",
        "sourceUrl": "https://blog.playstation.com/",
        "sourceUrls": [
            {"name": "搜狐转载", "url": "https://www.sohu.com/a/995499452_122598898"},
            {"name": "PlayStation Blog", "url": "https://blog.playstation.com/"}
        ],
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-17",
        "tags": ["PlayStation", "PS Plus", "战锤40K", "订阅服务"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 77,
        "title": "日本主机游戏市场2025年暴涨138.8%，Switch 2功不可没",
        "summary": "日本主机游戏市场2025年总收入达4181.3亿日元，同比暴涨138.8%。其中硬件销售同比增长149.3%，实体软件销售也大幅增长。任天堂Switch 2的发售是市场增长的核心驱动力。需注意该数据不含数字销售和DLC收入，实际市场规模可能更大。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/2026/01/20/japan-console-market-grew-by-138-8-in-2025-thanks-to-nintendo-switch-2/",
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-17",
        "tags": ["日本", "主机市场", "Switch 2", "任天堂"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 78,
        "title": "Minecraft Live定档3月21日，Mojang预告重大游戏更新及电影新内容",
        "summary": "Mojang Studios宣布Minecraft Live 2026将于3月21日美东时间下午1点举行，将公布全新游戏内容更新。此次直播还将首次展示即将上映的《我的世界》真人电影的独家片段。Xbox Wire同步预告暗示重大更新。这是继2025年9月以来的首场Minecraft Live活动。",
        "source": "Xbox Wire",
        "sourceUrl": "https://www.minecraft.net/en-us",
        "sourceUrls": [
            {"name": "Minecraft官方", "url": "https://www.minecraft.net/en-us"},
            {"name": "Gamedod", "url": "https://gamedod.com/"}
        ],
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-16",
        "tags": ["Minecraft", "Mojang", "Xbox", "游戏活动"],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 79,
        "title": "2026春季游戏平台新变局：微软Project Helix、索尼回归独占、Valve硬件认证三线并进",
        "summary": "GameRes深度分析指出，2026年春季PC与主机游戏市场迎来三大变局：微软在GDC 2026公布Project Helix下一代Xbox，定位\"客厅PC\"可同时运行Xbox与PC游戏；索尼通过彭博社释放\"PS5单机大作不再移植PC\"信号回归独占；Valve在GDC官宣Steam Machine和Steam Frame的内容认证计划。三方策略分化前所未有，将深刻重塑未来的平台竞争格局。",
        "source": "GameRes",
        "sourceUrl": "https://www.gameres.com/916991.html",
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-15",
        "tags": ["微软", "索尼", "Valve", "平台竞争", "战略分析"],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 80,
        "title": "Switch 2研究机构预测面临涨价压力：关税、内存成本上升",
        "summary": "VGC报道，研究机构预测Nintendo Switch 2在2026年面临涨价压力，主要原因包括关税政策变化、全球内存成本上涨以及其他经济环境因素。任天堂此前确认将专注于Switch 2的开发。Switch 2售价策略将直接影响其市场渗透率和与PS5 Pro的竞争态势。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/nintendo-switch-2-faces-a-price-increase-in-2026-research-firm-predicts/",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": ["Switch 2", "任天堂", "涨价", "内存成本"],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 1,
        "title": "Xbox Game Pass 3月下半月新增12款游戏：含《如龙》《极乐迪斯科》等",
        "summary": "微软公布3月下旬第二波Game Pass新增游戏共12款，亮点包括《Like a Dragon: Infinite Wealth》《Disco Elysium》《Resident Evil 7》《Final Fantasy 4》等重磅作品，跨越PC、主机及云游戏平台。阵容覆盖RPG、冒险、恐怖等多品类。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/xbox-reveals-the-rest-of-marchs-game-pass-titles-including-disco-elysium-resi-7-absolum-and-final-fantasy-4/",
        "sourceUrls": [
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/news/xbox-reveals-the-rest-of-marchs-game-pass-titles-including-disco-elysium-resi-7-absolum-and-final-fantasy-4/"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            }
        ],
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-18",
        "tags": [
            "Xbox",
            "Game Pass",
            "如龙",
            "极乐迪斯科"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 2,
        "title": "Take-Two CEO明确反对AI主导游戏创作：\"想靠AI做出GTA6级爆款简直可笑\"",
        "summary": "Take-Two/Rockstar母公司CEO Strauss Zelnick在多场采访中强调，生成式AI（包括Google Project Genie等）无法替代人类创意制作顶级IP，AI无法做到\"按键生成爆款并推向全球市场\"。他同时指出AI可提升办公室效率，但无法取代创意团队。这一表态在GDC 2026 AI讨论热潮中具有标志性意义。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/take-two-ceo-says-its-laughable-to-say-ai-like-google-project-genie-can-create-hit-games-at-the-press-of-a-button/",
        "sourceUrls": [
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/news/take-two-ceo-says-its-laughable-to-say-ai-like-google-project-genie-can-create-hit-games-at-the-press-of-a-button/"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            },
            {
                "name": "3DM",
                "url": "https://www.3dmgame.com/"
            }
        ],
        "category": "market",
        "importance": "medium",
        "date": "2026-03-18",
        "tags": [
            "Take-Two",
            "AI",
            "GTA6",
            "GDC"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 3,
        "title": "《上古卷轴6》引擎升级至Creation Engine 3，Todd Howard：\"距发售仍很遥远\"",
        "summary": "Bethesda游戏总监Todd Howard接受采访披露《上古卷轴6》已采用最新Creation Engine 3，开发稳定性大幅提升。他坦言后悔2018年过早公布，再次确认游戏距发售\"非常遥远\"，建议玩家\"假装我们没有宣布过\"。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.ithome.com/0/930/053.htm",
        "sourceUrls": [
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/930/053.htm"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            },
            {
                "name": "Gamingbolt",
                "url": "https://gamingbolt.com/"
            }
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-18",
        "tags": [
            "上古卷轴6",
            "Bethesda",
            "Todd Howard"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 4,
        "title": "NVIDIA在GTC 2026展示DLSS 5，黄仁勋称\"图形领域GPT时刻\"引发巨大争议",
        "summary": "NVIDIA CEO黄仁勋在GTC 2026主题演讲中展示DLSS 5，该技术利用AI对游戏画面进行\"光照与材质的照片级真实感重建\"，宣布秋季推出。Digital Foundry盛赞\"见过最震撼的演示\"，但技术演示引发大规模争议——玩家和开发者普遍批评DLSS 5将角色脸部\"网红化/滤镜化\"。3月21日黄仁勋再度回应批评者称\"你们完全错了\"，表示玩家误解了技术目标。同日NVIDIA公布首批DLSS 5支持游戏名单，包括《刺客信条：影》《生化危机：安魂曲》等多款大作。争议持续发酵中。",
        "source": "VGC",
        "sourceUrl": "https://www.ithome.com/0/929/681.htm",
        "sourceUrls": [
            {
                "name": "IT之家(发布)",
                "url": "https://www.ithome.com/0/929/681.htm"
            },
            {
                "name": "VGC(批评)",
                "url": "https://www.videogameschronicle.com/"
            },
            {
                "name": "新浪财经",
                "url": "https://finance.sina.com.cn/tech/roll/2026-03-18/doc-inhrknav7593836.shtml"
            }
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-17",
        "tags": [
            "NVIDIA",
            "DLSS 5",
            "GTC",
            "AI",
            "争议"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 5,
        "title": "《星空》确认4月7日登陆PS5，同步推出免费更新和DLC；Steam国区永降至209元",
        "summary": "Bethesda正式官宣《星空》4月7日登陆PS5，支持DualSense并为PS5 Pro提供4K/30帧画质模式和60帧性能模式。同步推出免费大更新\"自由航线\"与售价10美元的\"Terran Armada\" DLC。Todd Howard表示游戏有\"长期计划\"。Steam国区价格同步永降至209元。",
        "source": "VGC",
        "sourceUrl": "https://www.ithome.com/0/930/051.htm",
        "sourceUrls": [
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/930/051.htm"
            },
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            },
            {
                "name": "3DM",
                "url": "https://www.3dmgame.com/"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-17",
        "tags": [
            "星空",
            "PS5",
            "Bethesda",
            "微软"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 7,
        "title": "沙特主权基金再购5% Capcom股份，合计持股超10%",
        "summary": "沙特阿拉伯主权财富基金（PIF）旗下EGDC投资机构再度收购约5% Capcom股份，结合2022年PIF已持有的5%，沙特在Capcom的合计持股已超过10%。沙特资本近年持续在全球游戏行业大规模布局，此次进一步强化对《生化危机》《街头霸王》等IP母公司的影响力。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/saudi-arabia-capcom-resident-evil-street-fighter-shares",
        "sourceUrls": [
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/saudi-arabia-capcom-resident-evil-street-fighter-shares"
            },
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/"
            }
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-17",
        "tags": [
            "沙特",
            "Capcom",
            "投资",
            "并购"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 8,
        "title": "Switch 2系统更新：掌机模式可以1080p Docked画质运行Switch 1游戏",
        "summary": "任天堂推送Switch 2系统更新，实现掌机模式下运行部分Switch 1向下兼容游戏时以Docked模式渲染（1080p画质），而非原生掌机720p，显著增强向下兼容游戏的画质表现。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/switch-2-finally-lets-you-play-switch-1-games-in-docked-mode-while-playing-on-handheld/",
        "sourceUrls": [
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/news/switch-2-finally-lets-you-play-switch-1-games-in-docked-mode-while-playing-on-handheld/"
            },
            {
                "name": "IGN中国",
                "url": "https://www.ign.com/"
            }
        ],
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-17",
        "tags": [
            "Switch 2",
            "任天堂",
            "向下兼容"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 9,
        "title": "PlayStation Portal新增1080p高画质串流模式",
        "summary": "索尼PS Remote Play串流设备PlayStation Portal本周推送系统更新，新增1080p高码率串流的\"High Quality\"模式，提升远程游玩画质体验。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/playstation-portal-is-getting-a-new-1080p-high-quality-mode-this-week/",
        "category": "platform",
        "importance": "low",
        "date": "2026-03-17",
        "tags": [
            "PlayStation",
            "Portal",
            "串流"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 10,
        "title": "《乐高蝙蝠侠：黑暗骑士之遗》反向跳票，提前至5月22日发售",
        "summary": "原定5月30日发售的《乐高蝙蝠侠：黑暗骑士之遗》官宣提前1周至5月23日发售（豪华版可5月22日提前游玩），登陆PS5、XSX|S、Switch 2及PC平台。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/967.htm",
        "category": "game",
        "importance": "low",
        "date": "2026-03-17",
        "tags": [
            "乐高",
            "蝙蝠侠",
            "反向跳票"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 11,
        "title": "Xbox主机将于年内迎来Copilot AI助手",
        "summary": "微软宣布Xbox游戏AI助手Copilot将于年内登陆主机平台，旨在通过实时画面分析和个性化推荐提升玩家体验，覆盖新手与资深玩家的不同需求。这是微软将AI深度整合到游戏生态的最新举措。",
        "source": "机核",
        "sourceUrl": "https://www.gcores.com/articles/211928",
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-16",
        "tags": [
            "Xbox",
            "Copilot",
            "AI",
            "微软"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 12,
        "title": "《生化危机：安魂曲》全球销量突破600万，系列历史最快",
        "summary": "卡普空宣布《生化危机：安魂曲》全球销量突破600万份，成为系列历史上最快达成这一销量的作品。游戏发售5天内销量达500万份，不到一个月突破600万大关。卡普空计划推出额外游戏内容，并将在系列30周年之际举办多项庆祝活动。",
        "source": "3DM",
        "sourceUrl": "https://www.3dmgame.com/news/202603/3939829.html",
        "sourceUrls": [
            {
                "name": "3DM",
                "url": "https://www.3dmgame.com/news/202603/3939829.html"
            },
            {
                "name": "Cyberockk",
                "url": "https://www.cyberockk.com/"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-16",
        "tags": [
            "生化危机",
            "卡普空",
            "销量",
            "Switch 2"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 13,
        "title": "Warner Bros. Montréal遭裁员，多个部门员工证实失业",
        "summary": "数名华纳蒙特利尔开发者在社交媒体宣布被裁员，涉及多个部门，但公司尚未正式确认。该工作室以《蝙蝠侠：阿卡姆起源》《哥谭骑士》等作品著称，正在进行的项目情况尚不明朗。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/warner-bros-montreal-devs-report-layoffs",
        "sourceUrls": [
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/warner-bros-montreal-devs-report-layoffs"
            },
            {
                "name": "GamesIndustry",
                "url": "https://www.gamesindustry.biz/"
            }
        ],
        "category": "policy",
        "importance": "medium",
        "date": "2026-03-16",
        "tags": [
            "Warner Bros",
            "裁员",
            "工作室"
        ],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 14,
        "title": "多款Steam上架游戏暗藏恶意软件，FBI介入调查",
        "summary": "FBI正在调查一名涉嫌在Steam平台发布多款含恶意软件游戏的黑客，呼吁受影响玩家协助调查。涉事游戏包括《BlockBlasters》等7款，均被怀疑嵌入恶意程序，此前类似事件已导致不明数量玩家设备感染。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/439.htm",
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-16",
        "tags": [
            "Steam",
            "恶意软件",
            "FBI",
            "安全"
        ],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 15,
        "title": "Newzoo报告：PC与主机市场定价策略分化，PC青睐低价爆款、主机依赖3A大作",
        "summary": "市场研究机构Newzoo报告显示，PC与主机游戏市场呈现不同增长趋势：PC平台玩家偏好低价游戏（约30美元），销量显著增长且社交媒体助推独立游戏爆红；主机平台仍以50美元以上3A游戏为主，收入占比达80%，依赖大IP和年度体育类作品。",
        "source": "Newzoo",
        "sourceUrl": "https://www.ithome.com/0/929/354.htm",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-16",
        "tags": [
            "Newzoo",
            "市场数据",
            "PC",
            "主机"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 16,
        "title": "《失落星船：马拉松》成Bungie评分最低作品，Metacritic仅72分",
        "summary": "Bungie新作《失落星船：马拉松》评测解禁，Metacritic综合评分72分，成为该工作室历史评分最低作品。游戏因射击手感和艺术风格获赞，但UI设计、商业化元素和玩法缺乏新意受到批评，媒体和玩家评价呈现两极分化。此前该作Steam在线人数已跌出前50。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/276.htm",
        "sourceUrls": [
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/929/276.htm"
            },
            {
                "name": "机核",
                "url": "https://www.gcores.com/articles/211813"
            }
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-15",
        "tags": [
            "马拉松",
            "Bungie",
            "索尼",
            "评分"
        ],
        "sentiment": "negative",
        "tdocMarking": "none"
    },
    {
        "id": 17,
        "title": "《极限竞速：地平线6》IGN First独家曝光：东京城市规模史无前例",
        "summary": "IGN First独家报道了《极限竞速：地平线6》的东京城市地图详情。Playground Games设计总监透露，东京城市规模之大甚至需要独立开发团队。游戏将于2026年5月19日登陆Xbox/PC，首日加入Game Pass Ultimate，稍后登陆PS5，支持Xbox Play Anywhere。",
        "source": "Xbox Wire",
        "sourceUrl": "https://news.xbox.com/en-us/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-15",
        "tags": [
            "极限竞速",
            "Xbox",
            "Game Pass",
            "赛车"
        ],
        "sentiment": "positive"
    },
    {
        "id": 18,
        "title": "《八方旅人》系列全球销量突破700万份",
        "summary": "Square Enix宣布《八方旅人》系列全球销量突破700万份（含数字版与实体版），并发布新纪念插画。系列最新作《八方旅人0》已登陆Switch和Switch 2平台。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/2026/03/15/octopath-traveler-series-has-shifted-over-7-million-copies-worldwide/",
        "category": "game",
        "importance": "low",
        "date": "2026-03-15",
        "tags": [
            "八方旅人",
            "Square Enix",
            "Switch 2"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 19,
        "title": "索尼PS6与微软Xbox Helix规格曝光对比：均采用台积电3nm + AMD定制芯片",
        "summary": "索尼PlayStation 6和微软下一代Xbox（代号Project Helix）核心硬件规格对比显示，两者均采用台积电3nm制程工艺和AMD定制芯片。PS6传闻规格：AMD Orion芯片、54个RDNA 5计算单元、30GB GDDR7内存；Helix传闻比XSX多30%计算单元且速度快65%，预计售价$999-$1200。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/007.htm",
        "sourceUrls": [
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/929/007.htm"
            },
            {
                "name": "Gamingbolt",
                "url": "https://gamingbolt.com/ps6-ps6-handheld-and-project-helix-still-on-track-for-holiday-2027-launch-rumor"
            }
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-14",
        "tags": [
            "PS6",
            "Xbox",
            "Project Helix",
            "次世代"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 20,
        "title": "NVIDIA高管：AI可使未来GPU游戏画质较GTX 10系列提升100万倍",
        "summary": "英伟达开发者与性能技术副总裁John Spitzer在GDC 2026上表示，未来游戏GPU的路径追踪性能将比Pascal架构提升100万倍，主要依靠AI与神经渲染技术。英伟达将研发重心转向硬件加速神经渲染，预计在2027-2028年间发布Rubin架构GPU实现这一目标。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/029.htm",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": [
            "NVIDIA",
            "GPU",
            "AI",
            "GDC"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 22,
        "title": "《杀戮尖塔2》首周销量破300万份，好评率95%",
        "summary": "《杀戮尖塔2》自3月6日Steam抢先体验以来销量突破300万份，玩家爬塔次数超2500万次。游戏新增大量内容并引入\"替代章节\"机制，支持最多4人在线合作，Steam国区定价88元，好评率达95%。这一成绩刷新了独立卡牌Roguelike品类的销售纪录。",
        "source": "SteamDB",
        "sourceUrl": "https://www.ithome.com/0/929/058.htm",
        "sourceUrls": [
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/929/058.htm"
            },
            {
                "name": "SteamDB",
                "url": "https://store.steampowered.com/app/2868840/Slay_the_Spire_2/"
            }
        ],
        "category": "game",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": [
            "杀戮尖塔2",
            "独立游戏",
            "Steam",
            "Roguelike"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 23,
        "title": "Unity引擎将原生适配SteamOS和Linux系统",
        "summary": "Unity官方在GDC 2026宣布原生适配Steam平台及SteamOS、Linux系统，为开发者提供更便捷的游戏发布环境。此举减少了对Wine、Proton等兼容层的依赖，被视为Linux游戏生态发展的重要信号，有利于Steam Machine和Steam Deck生态。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/929/108.htm",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": [
            "Unity",
            "SteamOS",
            "Linux",
            "GDC"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 24,
        "title": "任天堂关税诉讼暂停，最高法院已裁定关税非法",
        "summary": "任天堂针对美国政府的关税诉讼案已自动暂停，等待国际贸易法院提交至最高法院的关税案件结果。最高法院已于2月裁定关税非法，受影响公司可能从4月开始获得退款，但任天堂尚未明确表示是否将退款转给消费者。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/2026/03/13/us-nintendos-lawsuit-against-government-automatically-paused/",
        "category": "policy",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": [
            "任天堂",
            "关税",
            "美国",
            "政策"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 25,
        "title": "《和平精英》亮相GDC 2026展示AI+游戏前沿成果",
        "summary": "腾讯光子工作室群携《和平精英》在GDC 2026大会上展示了\"大模型+AI Bot\"架构，分享了AI在游戏中的前沿应用成果。策划副总监薛冰的演讲获得全球科技和游戏行业的高度肯定，展示了中国游戏厂商在AI应用领域的领先地位。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-14",
        "tags": [
            "腾讯",
            "AI",
            "GDC",
            "和平精英"
        ],
        "sentiment": "positive"
    },
    {
        "id": 26,
        "title": "CD Projekt Red确认不再为《赛博朋克2077》开发新DLC",
        "summary": "CD Projekt Red确认不再为《赛博朋克2077》开发新的DLC或扩展内容，未来工作重心将转向该系列新作（代号Project Orion）。《赛博朋克2077》截至目前累计销量已超3000万份。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/2026/03/13/cd-projekt-red-rules-out-new-dlc-for-cyberpunk-2077/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-13",
        "tags": [
            "CDPR",
            "赛博朋克2077",
            "DLC"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 27,
        "title": "微软公布下一代Xbox主机Project Helix，alpha版预计2027年",
        "summary": "微软在GDC 2026期间首次公开下一代Xbox主机代号\"Project Helix\"的详细信息。Xbox次世代副总裁Jason Ronald透露该主机将采用AMD下一代超分辨率、帧生成、光线追踪技术，alpha版本预计2027年提供给游戏开发者。Ronald还指出\"玩家以主机/PC/手游定义自己的时代已不复存在\"，支撑了Helix跨平台兼容的战略逻辑。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/microsoft-reveals-next-gen-console-details-and-promises-an-order-of-magnitude-increase-in-power/",
        "sourceUrls": [
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/news/microsoft-reveals-next-gen-console-details-and-promises-an-order-of-magnitude-increase-in-power/"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            },
            {
                "name": "Gamingbolt",
                "url": "https://gamingbolt.com/"
            },
            {
                "name": "3DM",
                "url": "https://www.3dmgame.com/news/202603/3939538.html"
            }
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-13",
        "tags": [
            "Xbox",
            "Project Helix",
            "次世代",
            "微软"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 28,
        "title": "Newzoo报告：Roblox/Minecraft玩家与传统AAA游戏玩家几乎无重叠",
        "summary": "GDC期间Newzoo咨询总监Ben Porter分享研究发现：Roblox与Minecraft玩家大量玩头部直播服务游戏（与Fortnite重合率55%/46%），但购买《怪物猎人：荒野》《刺客信条》等传统AAA游戏的可能性仅为平均玩家的0.4倍。这一低龄/免费玩家群体的增长，引发行业对AAA市场长期受众的深层焦虑。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/roblox-and-minecraft-players-are-less-likely-to-play-traditional-aaa-video-games",
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-13",
        "tags": [
            "Newzoo",
            "Roblox",
            "Minecraft",
            "AAA",
            "市场分析"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 29,
        "title": "GDC 2026 GDCA颁奖：《折言》获玩家选择奖，日本独立游戏创历史",
        "summary": "在3月13日于旧金山举办的GDC 2026 GDCA颁奖典礼上，日本互动视觉小说《折言》荣获\"玩家选择奖\"，成为首个在GDCA获奖的日本独立游戏作品，创造历史。游戏累计销量已突破10万份，同时获得英国BAFTA提名。",
        "source": "GameDeveloper",
        "sourceUrl": "https://gdconf.com/news",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-13",
        "tags": [
            "GDC",
            "GDCA",
            "独立游戏",
            "游戏奖项"
        ],
        "sentiment": "positive"
    },
    {
        "id": 30,
        "title": "《无主之地4》首个故事DLC\"Mad Ellie\"3月26日上线",
        "summary": "2K和Gearbox Software宣布《无主之地4》首个故事包DLC\"Mad Ellie and the Vault of the Damned\"将于3月26日发售，登陆PS5和Xbox Series X/S。无主之地4自发售以来获广泛好评，本次DLC是后续内容计划的首弹。",
        "source": "3DM",
        "sourceUrl": "https://www.3dmgame.com/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-13",
        "tags": [
            "无主之地4",
            "DLC",
            "2K",
            "射击游戏"
        ],
        "sentiment": "positive"
    },
    {
        "id": 31,
        "title": "《CALX》定档6月4日登陆PC，稍后登陆PS5/Xbox/Switch",
        "summary": "在Future Games Show春季展示会上，意大利工作室True Colors与法国发行商Dear Villagers宣布氛围感3D动作冒险游戏《CALX》将于2026年6月4日在PC平台发售，并计划稍后登陆PS5、Xbox和Switch主机平台。游戏试玩版现已上线Steam。",
        "source": "3DM",
        "sourceUrl": "https://www.3dmgame.com/news/202603/3939683.html",
        "category": "game",
        "importance": "low",
        "date": "2026-03-13",
        "tags": [
            "CALX",
            "独立游戏",
            "Future Games Show"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 32,
        "title": "PS6、PS6掌机与Project Helix均传仍按计划瞄准2027年假日季发售",
        "summary": "据业内知情人士KeplerL2发帖，索尼PS6（含PS6掌机版本）与微软Project Helix目前均未受全球内存短缺影响，仍计划于2027年假日季发售。PS6传闻规格：AMD Orion芯片（280mm²，台积电3nm）、54个RDNA 5计算单元、8核Zen 6c + 2核Zen 6低功耗核心、30GB GDDR7内存。",
        "source": "Gamingbolt",
        "sourceUrl": "https://gamingbolt.com/ps6-ps6-handheld-and-project-helix-still-on-track-for-holiday-2027-launch-rumor",
        "sourceUrls": [
            {
                "name": "Gamingbolt",
                "url": "https://gamingbolt.com/ps6-ps6-handheld-and-project-helix-still-on-track-for-holiday-2027-launch-rumor"
            },
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/929/007.htm"
            }
        ],
        "category": "hardware",
        "importance": "high",
        "featured": true,
        "date": "2026-03-12",
        "tags": [
            "PS6",
            "Project Helix",
            "次世代",
            "2027"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 33,
        "title": "Newzoo预测：PC游戏收入将于2028年超越主机，市场开启疫情后首次实质扩张",
        "summary": "Newzoo最新报告预测，PC游戏收入CAGR为6.6%（主机4.4%），将于2028年超越主机，届时PC+主机市场总规模将达$1037亿。2025年两者合计收入同比增长7%至$883亿。PC侧增长驱动力为中高端买断制新游，$30-$50价位段增长最快；主机侧微交易收入略降。东亚Steam玩家群体快速扩张是PC增长的重要引擎。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/pc-will-overtake-console-revenue-by-2028-says-newzoo",
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-03-12",
        "tags": [
            "Newzoo",
            "PC",
            "主机",
            "市场预测"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 34,
        "title": "PEGI宣布含开箱游戏今夏起强制评级PEGI 16，NFT游戏直接PEGI 18",
        "summary": "欧洲游戏评级机构PEGI宣布自2026年6月起实施新评级规则：\"付费随机物品（开箱/loot box）\"将使游戏获评最低PEGI 16，不得向15岁以下未成年人销售；NFT/区块链类游戏直接获评PEGI 18；含不受限制联机聊天的游戏自动获评PEGI 18。新规仅适用于6月后新提交游戏。此举预计将对EA Sports FC等系列的未来作品评级产生直接冲击。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/all-games-with-loot-boxes-in-them-will-be-rated-minimum-pegi-16-starting-this-summer/",
        "sourceUrls": [
            {
                "name": "VGC",
                "url": "https://www.videogameschronicle.com/news/all-games-with-loot-boxes-in-them-will-be-rated-minimum-pegi-16-starting-this-summer/"
            },
            {
                "name": "EuroGamer",
                "url": "https://www.eurogamer.net/"
            }
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-12",
        "tags": [
            "PEGI",
            "开箱",
            "NFT",
            "评级",
            "监管"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 35,
        "title": "2026年BAFTA游戏奖提名揭晓：《光与影：33号远征队》12项领跑",
        "summary": "2026年BAFTA游戏大奖提名出炉：《光与影：33号远征队》以12项提名领跑，囊括\"最佳游戏\"；其次为《Dispatch》（9项）、《Ghost of Yōtei》（8项）、《Death Stranding 2》（7项，但未进入最佳游戏决选）。最终候选六强还包括Arc Raiders和Blue Prince。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/bafta-games-awards-2026-nominations-clair-obscur-leads-with-12-death-stranding-2-misses-out-on-best-game-nom/",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-12",
        "tags": [
            "BAFTA",
            "游戏奖项",
            "33号远征队"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 36,
        "title": "《寂静岭2重制版》全球销量突破500万份，Konami启动半价促销",
        "summary": "Konami宣布《寂静岭2》重制版截至2026年1月31日累计销量突破500万份（含PC、PS5、XSX数字购买、实体销售及订阅服务下载）。为庆祝里程碑，PlayStation Store开启春季特卖，《寂静岭2》豪华版半价至$39.99，促销截止至3月25日。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/news/konami-marks-5-million-sales-of-silent-hill-2-remake-by-selling-it-and-silent-hill-f-for-half-price-on-ps5/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-12",
        "tags": [
            "寂静岭2",
            "Konami",
            "销量",
            "促销"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 37,
        "title": "《堡垒之夜》原创模式\"拯救世界\"将于4月16日免费开放",
        "summary": "Epic Games宣布《Fortnite》早年付费合作模式\"Save the World\"将于2026年4月16日向全平台（包括Switch 2）免费开放，此举被解读为Fortnite玩家参与度下滑背景下Epic的应急举措，同期还调整了V-Bucks虚拟货币定价。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/fortnite-save-the-world-mode-goes-free-to-play-april-2026",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-12",
        "tags": [
            "Fortnite",
            "Epic",
            "免费",
            "直播服务"
        ],
        "sentiment": "neutral",
        "tdocMarking": "none"
    },
    {
        "id": 38,
        "title": "谷歌升级PC版Play Games：一次购买，PC/安卓双端畅玩",
        "summary": "谷歌在GDC 2026上宣布升级Win10/Win11版本Google Play Games，引入更多付费游戏并推出\"跨端购买\"功能，旨在解决当前游戏库以免费游戏为主、难以吸引核心玩家的问题。",
        "source": "游戏之家",
        "sourceUrl": "https://www.ithome.com/0/928/299.htm",
        "category": "platform",
        "importance": "low",
        "date": "2026-03-12",
        "tags": [
            "谷歌",
            "Play Games",
            "GDC",
            "跨平台"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 39,
        "title": "Valve公布Steam Machine验证程序：1080p/30fps基准线",
        "summary": "Valve在GDC 2026大会上公布了Steam Machine的验证程序细节，要求游戏在1080p分辨率下以30fps运行才能获得认证。已通过Steam Deck验证的游戏将自动获得认证。Valve还在改进SteamOS反作弊支持，Steam Machines性能为便携前作6倍，行业分析师预测售价可能高达$1000。",
        "source": "IGN",
        "sourceUrl": "https://www.ign.com/articles/1080p-at-30fps-valve-steam-machines-verified-program",
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-11",
        "tags": [
            "Valve",
            "Steam Machine",
            "SteamOS",
            "GDC"
        ],
        "sentiment": "positive",
        "tdocMarking": "none"
    },
    {
        "id": 41,
        "title": "Phil Spencer退休结束38年微软生涯，Asha Sharma接任游戏CEO",
        "summary": "微软CEO纳德拉在全员信中正式宣布微软游戏CEO Phil Spencer决定退休，结束38年微软职业生涯。Spencer于2025年秋季向纳德拉表达退休意愿，将继续担任顾问直至2026年夏季。Xbox总裁Sarah Bond意外同步辞职。微软CoreAI产品总裁Asha Sharma将接任游戏新CEO。这一管理层巨变标志着Xbox进入AI驱动的新时代。",
        "source": "IGN",
        "sourceUrl": "https://zerocounts.net/",
        "sourceUrls": [
            {
                "name": "IGN",
                "url": "https://zerocounts.net/"
            },
            {
                "name": "IT之家",
                "url": "https://so.html5.qq.com/page/real/search_news?docid=70000021_2736998e6f148352"
            },
            {
                "name": "Xbox Wire",
                "url": "https://news.xbox.com/"
            }
        ],
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-11",
        "tags": [
            "Phil Spencer",
            "Xbox",
            "微软",
            "管理层变动"
        ],
        "sentiment": "neutral",
        "tdocMarking": "orange"
    },
    {
        "id": 42,
        "title": "GDC 2026行业报告：裁员影响持续，生成式AI成最重要技术趋势",
        "summary": "GDC官方发布《2026年游戏行业现状报告》，调查显示裁员浪潮对行业的深远影响仍在持续，生成式AI已成为年度最重要的技术趋势，开发者工会化趋势持续升温。报告还分析了当前及未来的游戏平台走向。",
        "source": "GameDeveloper",
        "sourceUrl": "https://gdconf.com/news/article-tags/gdc",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-10",
        "tags": [
            "GDC",
            "裁员",
            "生成式AI",
            "行业报告"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 43,
        "title": "三星在GDC 2026展示裸眼3D游戏显示器Odyssey 3D",
        "summary": "三星在GDC 2026上展示了Odyssey 3D裸眼3D游戏显示器，配备4K QLED面板、165Hz刷新率、1ms响应时间，支持AMD FreeSync Premium。通过双摄像头眼球追踪实现无需眼镜的3D游戏体验，提供27英寸和37英寸两种尺寸，预计年内上市。",
        "source": "3DM",
        "sourceUrl": "https://news.samsung.com/us/samsung-showcases-glasses-free-3d-hdr10-gaming-acclaimed-game-titles-gdc-2026/",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-03-10",
        "tags": [
            "三星",
            "裸眼3D",
            "游戏显示器",
            "GDC"
        ],
        "sentiment": "positive"
    },
    {
        "id": 44,
        "title": "任天堂Indie World展示会公布18款独立游戏登陆Switch/Switch 2",
        "summary": "任天堂3月3日举办线上Indie World展示会，共宣布18款新登陆和即将登陆Switch平台的独立游戏，包括多款Switch 2独占作品。展示会展现了任天堂持续扶持独立开发者的平台策略。",
        "source": "NintendoNews",
        "sourceUrl": "https://www.nintendo.com/indie-world/",
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-10",
        "tags": [
            "任天堂",
            "Indie World",
            "独立游戏",
            "Switch 2"
        ],
        "sentiment": "positive"
    },
    {
        "id": 45,
        "title": "马里奥40周年庆典：超级马里奥Galaxy电影定档",
        "summary": "任天堂隆重庆祝超级马里奥兄弟40周年。MAR10 Day 2026活动公布多项庆祝计划，包括超级马里奥Galaxy电影定档2026年4月1日上映、多款Switch 2新作展示以及系列纪念活动和周边商品。马里奥IP持续展现强大的跨媒体变现能力。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {
                "name": "NintendoNews",
                "url": "https://mynintendonews.com/"
            },
            {
                "name": "IGN",
                "url": "https://www.ign.com/"
            }
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-10",
        "tags": [
            "任天堂",
            "马里奥",
            "MAR10",
            "电影",
            "Switch 2"
        ],
        "sentiment": "positive"
    },
    {
        "id": 46,
        "title": "《碧蓝幻想Relink：无尽黄昏》定档7月9日，登陆Switch 2/PS5/Steam",
        "summary": "Cygames在任天堂合作伙伴直面会上公布ARPG《碧蓝幻想Relink：无尽黄昏》将于2026年7月9日全球同步发售，登陆Switch 2、PS5、PS4和Steam。新作追加召唤系统、专精技能、单人模式等新内容，支持最多四人跨平台联机。",
        "source": "Fami通",
        "sourceUrl": "https://www.3dmgame.com/news/28299/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-10",
        "tags": [
            "碧蓝幻想",
            "Cygames",
            "Switch 2",
            "ARPG"
        ],
        "sentiment": "positive"
    },
    {
        "id": 48,
        "title": "NVIDIA GeForce RTX 5060 正式发布：$299 起步的 DLSS 4 新标杆",
        "summary": "NVIDIA发布GeForce RTX 5060显卡，售价$299起，搭载完整DLSS 4支持。这是面向主流玩家的重要产品节点。",
        "source": "3DM",
        "sourceUrl": "https://www.3dmgame.com/",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-03-08",
        "tags": [
            "NVIDIA",
            "GPU",
            "硬件"
        ],
        "sentiment": "positive"
    },
    {
        "id": 49,
        "title": "《怪物猎人物语3》开发者访谈：融合回合制与动作的新战斗系统",
        "summary": "卡普空在接受Fami通采访时详细解析了《怪物猎人物语3：命运双龙》的创新战斗机制。",
        "source": "Fami通",
        "sourceUrl": "https://www.famitsu.com/",
        "category": "game",
        "importance": "medium",
        "date": "2026-03-07",
        "tags": [
            "怪物猎人",
            "卡普空",
            "ARPG"
        ],
        "sentiment": "positive"
    },
    {
        "id": 50,
        "title": "《GTA6》正式定档2026年5月26日，Rockstar确认延期一年",
        "summary": "Rockstar Games正式宣布《GTA6》将于2026年5月26日发售，较原计划延期约一年。官方表示需要额外时间打磨质量以达到玩家期待的水准。发行商Take-Two Interactive表示全力支持这一决定。",
        "source": "Rockstar Games",
        "sourceUrl": "https://www.rockstargames.com/newswire",
        "sourceUrls": [
            {
                "name": "Rockstar官方",
                "url": "https://www.rockstargames.com/newswire"
            },
            {
                "name": "新浪财经",
                "url": "https://finance.sina.com.cn/tech/roll/2025-05-03/doc-inevhatx1078454.shtml"
            },
            {
                "name": "IGN",
                "url": "https://www.ign.com/"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-06",
        "tags": [
            "GTA6",
            "R星",
            "延期",
            "Take-Two"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 51,
        "title": "育碧宣布战略重组：3款游戏取消，聚焦\"更少但更好\"策略",
        "summary": "育碧在最新的投资者电话会议上宣布取消3款未公布项目的开发，年发行数量从15款缩减至8-10款。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "category": "policy",
        "importance": "medium",
        "featured": true,
        "date": "2026-03-06",
        "tags": [
            "育碧",
            "重组",
            "战略"
        ],
        "sentiment": "negative"
    },
    {
        "id": 52,
        "title": "Nintendo Switch 2 正式公布：8英寸屏幕、磁吸Joy-Con、向下兼容",
        "summary": "任天堂正式揭晓Switch 2硬件详情：采用更大的8英寸LCD屏幕、NVIDIA T239定制芯片、磁吸式Joy-Con手柄、支持Switch 1游戏向下兼容。预计2025年6月发售，首发阵容包含《马里奥卡丁车世界》。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {
                "name": "NintendoNews",
                "url": "https://mynintendonews.com/"
            },
            {
                "name": "IT之家",
                "url": "https://www.ithome.com/0/818/489.htm"
            },
            {
                "name": "新浪财经",
                "url": "https://finance.sina.com.cn/tech/digi/2024-11-04/doc-incuwwvv9872209.shtml"
            }
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-05",
        "tags": [
            "Nintendo",
            "Switch 2",
            "硬件"
        ],
        "sentiment": "positive"
    },
    {
        "id": 53,
        "title": "PS5 Pro 增强补丁已覆盖500+游戏：4K/120fps成为新标准",
        "summary": "索尼公布PS5 Pro增强游戏列表已超过500款，4K/60fps成为基准线，部分游戏已支持4K/120fps模式。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/latest",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-03-05",
        "tags": [
            "PS5 Pro",
            "硬件",
            "性能"
        ],
        "sentiment": "positive"
    },
    {
        "id": 54,
        "title": "Steam 2月销售数据：独立游戏收入占比首次突破35%",
        "summary": "根据SteamDB和Gamalytic统计数据，2026年2月Steam平台独立游戏收入占比达35.2%，创历史新高。",
        "source": "SteamDB",
        "sourceUrl": "https://steamdb.info/",
        "category": "market",
        "importance": "medium",
        "date": "2026-03-04",
        "tags": [
            "Steam",
            "独立游戏",
            "市场数据"
        ],
        "sentiment": "positive"
    },
    {
        "id": 55,
        "title": "欧盟数字市场法案新规：游戏平台必须开放跨平台存档转移",
        "summary": "欧盟数字市场法案(DMA)最新修正案要求所有\"守门人\"游戏平台必须在2027年前支持游戏存档和成就的跨平台转移功能。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-03-04",
        "tags": [
            "欧盟",
            "DMA",
            "监管"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 56,
        "title": "Xbox 宣布2026年将有30+款首日入库 Game Pass 的游戏",
        "summary": "Xbox在春季发布会上确认2026年将有超过30款游戏首日登陆Game Pass，包括《极限竞速：地平线6》《战争机器：E-Day》等第一方大作，以及多款第三方独立游戏。",
        "source": "Xbox Wire",
        "sourceUrl": "https://news.xbox.com/en-us/",
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-03-03",
        "tags": [
            "Xbox",
            "Game Pass",
            "XGP"
        ],
        "sentiment": "positive"
    },
    {
        "id": 57,
        "title": "《黑神话：钟馗》项目正式确认，游戏科学启动全球预热",
        "summary": "游戏科学工作室通过官方社交媒体正式确认《黑神话》系列第二款作品为《黑神话：钟馗》，以中国民间传说\"钟馗捉鬼\"为主题。",
        "source": "机核",
        "sourceUrl": "https://www.gcores.com/news",
        "sourceUrls": [
            {
                "name": "机核",
                "url": "https://www.gcores.com/news"
            },
            {
                "name": "Total-Gamer",
                "url": "http://www.total-gamer.com/"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-03-02",
        "tags": [
            "黑神话",
            "游戏科学",
            "国产3A"
        ],
        "sentiment": "positive"
    },
    {
        "id": 58,
        "title": "PlayStation Stars 会员体系大幅升级，引入游戏折扣与抢先体验权限",
        "summary": "索尼宣布对PlayStation Stars忠诚度计划进行重大升级，新增\"Platinum Tier\"等级，提供PS Store折扣、新游抢先体验48小时等独占权益。",
        "source": "PlayStation Blog",
        "sourceUrl": "https://blog.playstation.com/",
        "category": "platform",
        "importance": "medium",
        "date": "2026-03-01",
        "tags": [
            "PlayStation",
            "PS Stars",
            "订阅"
        ],
        "sentiment": "positive"
    },
    {
        "id": 59,
        "title": "Epic Games Store 宣布2026年开放第三方支付，抽成维持12%",
        "summary": "Epic Games Store正式宣布在2026年Q2面向开发者开放第三方支付选项，同时确认平台抽成维持在12%不变。",
        "source": "GamesIndustry",
        "sourceUrl": "https://www.gamesindustry.biz/",
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-02-28",
        "tags": [
            "Epic",
            "EGS",
            "分成"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 60,
        "title": "Steam Deck 2 传闻：Valve 正在测试OLED+AMD Z2 Extreme芯片",
        "summary": "据供应链消息，Valve正在测试搭载AMD Z2 Extreme芯片和OLED屏幕的新一代Steam Deck。",
        "source": "VGC",
        "sourceUrl": "https://www.videogameschronicle.com/category/news/",
        "category": "hardware",
        "importance": "medium",
        "date": "2026-02-27",
        "tags": [
            "Steam Deck",
            "Valve",
            "掌机"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 61,
        "title": "《生化危机：安魂曲》Switch 2首发，卡普空State of Play公布",
        "summary": "卡普空在PlayStation State of Play上首次公布《生化危机：安魂曲》，游戏于2026年2月27日在Nintendo Switch 2平台首发。这是生化危机系列的全新作品。",
        "source": "Fami通",
        "sourceUrl": "https://biohaze.com/",
        "sourceUrls": [
            {
                "name": "Biohaze",
                "url": "https://biohaze.com/"
            },
            {
                "name": "3DM",
                "url": "https://www.3dmgame.com/news/202603/3939829.html"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-02-27",
        "tags": [
            "生化危机",
            "卡普空",
            "Switch 2",
            "新作"
        ],
        "sentiment": "positive"
    },
    {
        "id": 62,
        "title": "《宝可梦：风/浪》确定Switch 2独占，首批概念图公开",
        "summary": "宝可梦公司在Nintendo Direct中展示了《宝可梦：风/浪》的首批概念图和实机片段。本作确定为Switch 2独占首发。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/",
        "sourceUrls": [
            {
                "name": "NintendoNews",
                "url": "https://mynintendonews.com/"
            },
            {
                "name": "IGN",
                "url": "https://www.ign.com/"
            }
        ],
        "category": "game",
        "importance": "high",
        "featured": true,
        "date": "2026-02-25",
        "tags": [
            "宝可梦",
            "Switch 2",
            "任天堂"
        ],
        "sentiment": "positive"
    },
    {
        "id": 63,
        "title": "Bethesda三款大作登陆Switch 2：辐射4、上古卷轴4重制版、夺宝奇兵",
        "summary": "Bethesda确认《辐射4周年版》《上古卷轴IV：湮没重制版》《夺宝奇兵：大圆环》三款游戏登陆Switch 2。《辐射4》已于2月24日正式发售并支持60fps模式，标志着微软第一方内容加速拥抱任天堂平台。",
        "source": "NintendoNews",
        "sourceUrl": "https://mynintendonews.com/2026/02/24/fallout-4-anniversary-edition-now-available-on-nintendo-switch-2-features-60fps-mode/",
        "sourceUrls": [
            {
                "name": "NintendoNews",
                "url": "https://mynintendonews.com/2026/02/24/fallout-4-anniversary-edition-now-available-on-nintendo-switch-2-features-60fps-mode/"
            },
            {
                "name": "Xbox Wire",
                "url": "https://news.xbox.com/"
            }
        ],
        "category": "platform",
        "importance": "high",
        "featured": true,
        "date": "2026-02-24",
        "tags": [
            "Bethesda",
            "Switch 2",
            "辐射4",
            "上古卷轴",
            "微软"
        ],
        "sentiment": "positive"
    },
    {
        "id": 64,
        "title": "《仁王3》发售两周销量破百万，创系列最快销售纪录",
        "summary": "光荣特库摩与Team Ninja宣布，《仁王3》在发售两周内全球销量突破100万份，成为仁王系列销售速度最快的作品。仁王系列累计总销量已超过1000万份。",
        "source": "EuroGamer",
        "sourceUrl": "https://www.eurogamer.net/nioh-3-million-sales-fastest-selling",
        "category": "game",
        "importance": "medium",
        "date": "2026-02-20",
        "tags": [
            "仁王3",
            "Team Ninja",
            "光荣特库摩",
            "销量"
        ],
        "sentiment": "positive"
    },
    {
        "id": 65,
        "title": "微软完成动视暴雪整合：重组后Xbox Game Studios拥有33家工作室",
        "summary": "微软宣布动视暴雪整合工作已全部完成。重组后的Xbox Game Studios旗下共拥有33家游戏工作室。",
        "source": "Xbox Wire",
        "sourceUrl": "https://news.xbox.com/en-us/",
        "category": "policy",
        "importance": "high",
        "featured": true,
        "date": "2026-02-20",
        "tags": [
            "微软",
            "动视暴雪",
            "并购"
        ],
        "sentiment": "neutral"
    },
    {
        "id": 66,
        "title": "Newzoo 报告：2026年PC & Console游戏市场规模将达$420亿",
        "summary": "Newzoo发布2026年全球PC与主机游戏市场年度预测报告，预计总市场规模将达$420亿（同比+6.2%）。",
        "source": "Newzoo",
        "sourceUrl": "https://newzoo.com/resources",
        "category": "market",
        "importance": "high",
        "featured": true,
        "date": "2026-02-15",
        "tags": [
            "Newzoo",
            "市场数据",
            "订阅"
        ],
        "sentiment": "positive"
    }
];

// 新闻数据处理函数
function getNewsCategory(cat) {
    const labels = { 'platform': '🎮 平台动态', 'game': '🕹️ 重点新品', 'hardware': '🔧 硬件生态', 'policy': '📋 政策/战略', 'market': '📊 市场数据' };
    return labels[cat] || cat;
}
function getNewsSentimentColor(sentiment) {
    switch(sentiment) { case 'positive': return '#22c55e'; case 'negative': return '#ef4444'; default: return '#f59e0b'; }
}
function getNewsSentimentLabel(sentiment) {
    switch(sentiment) { case 'positive': return '利好'; case 'negative': return '利空'; default: return '中性'; }
}
function getImportanceLabel(imp) {
    switch(imp) { case 'high': return '🔴 重要'; case 'medium': return '🟡 关注'; default: return '⚪ 一般'; }
}
function isThisWeek(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return d >= weekAgo;
}

// ═══════════════ 主题聚类引擎 v6.0（共享：PC端+移动端） ═══════════════
// 将新闻按平台/主题自动归组，相关新闻聚合在一起展示

const NEWS_TOPIC_CLUSTERS = [
    { id: 'sony-ps', label: '🎮 索尼 PlayStation', icon: '🔵',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/索尼|sony|playstation|ps5|ps6|psn|ps plus|pssr|push\s?square|ps\s?pro|dualsense|ps\s?portal|ps\s?stars|dark\s?outlaw|bungie/); }},
    { id: 'xbox-ms', label: '🟢 微软 Xbox', icon: '🟢',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/xbox|微软.*游戏|game\s?pass|xgp|phil\s?spencer|asha\s?sharma|helix|xbox\s?wire|bethesda.*xbox|动视暴雪|activision|copilot.*xbox|xbox.*copilot|partner\s?preview|微软.*订阅/); }},
    { id: 'hot-product', label: '🔥 热门产品', icon: '🔥',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/红色沙漠|crimson\s?desert|杀戮尖塔|slay.*spire|生化危机.*安魂|resident\s?evil.*requiem|marathon|gta\s?6|gta\s?vi/) ||
                 (c.match(/销量.*突破|万份|百万|million|创纪录|里程碑|登顶/) && c.match(/游戏|game/)); }},
    { id: 'upstream-hw', label: '🔧 上游硬件 & 供应链', icon: '🔧',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/内存.*涨|内存.*降|内存.*短缺|dram|ddr5|hbm|ram.*短缺|ram.*shortage|芯片.*短缺|液冷|asetek/) ||
                 (c.match(/涨价|price.*hike|price.*increase/) && c.match(/硬件|成本|ram|内存|芯片|组件|component/)) ||
                 c.match(/nvidia|dlss|gpu|显卡|amd|rtx\s?50|裸眼3d|geforce|cuda/) ||
                 (n.category === 'hardware'); }},
    { id: 'steam-valve', label: '🔷 Steam & Valve', icon: '🔷',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/steam|valve|steam\s?machine|steam\s?deck|steam\s?frame|steamos|steam.*特卖|steam.*spring|cs2/); }},
    { id: 'epic', label: '🟣 Epic Games', icon: '🟣',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/epic\s?games|fortnite|堡垒之夜|epic.*store|egs|虚幻引擎|unreal/); }},
    { id: 'market-info', label: '📊 市场信息', icon: '📊',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/newzoo|circana|npd|市场.*报告|市场.*预测|行业.*报告|bafta|gdca|gdc.*报告/) ||
                 c.match(/pegi|欧盟.*法|dma|监管|并购|收购|投资|沙特|savvy|重组|裁员|layoff/) ||
                 c.match(/退休|辞职|ceo.*新|新.*ceo|pif|gamestop.*财报|ea.*财报|财报|版号|整合/) ||
                 c.match(/德国.*市场|market.*grew|迪士尼|disney|ea.*裁|育碧|ubisoft.*裁/) ||
                 c.match(/诉讼|反垄断|关税|tariff/); }},
    { id: 'nintendo', label: '🔴 任天堂 Switch', icon: '🔴',
      match: function(n) { var c = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
          return c.match(/任天堂|nintendo|switch\s?2|switch2|宝可梦|pokemon|马里奥|mario|zelda|塞尔达|indie\s?world/); }}
];

function clusterNewsByTopic(newsList) {
    var clusters = {};
    var assigned = new Set();
    NEWS_TOPIC_CLUSTERS.forEach(function(cluster) {
        var matched = newsList.filter(function(n) { return !assigned.has(n.id) && cluster.match(n); });
        if (matched.length > 0) {
            clusters[cluster.id] = { id: cluster.id, label: cluster.label, icon: cluster.icon, match: cluster.match, news: matched };
            matched.forEach(function(n) { assigned.add(n.id); });
        }
    });
    var unclustered = newsList.filter(function(n) { return !assigned.has(n.id); });
    if (unclustered.length > 0) {
        clusters['other'] = { id: 'other', label: '📌 其他动态', icon: '📌', news: unclustered };
    }
    return clusters;
}

function mergeClusterNews(clusterNews, clusterId) {
    var MERGE_CLUSTERS = ['hot-product', 'upstream-hw', 'market-info'];
    if (MERGE_CLUSTERS.indexOf(clusterId) === -1 || clusterNews.length <= 3) return clusterNews;
    var MERGE_GROUPS = {
        'hot-product': [
            { key: 'crimson-desert', match: /红色沙漠|crimson\s?desert/i, label: '红色沙漠' },
            { key: 'slay-spire', match: /杀戮尖塔|slay.*spire/i, label: '杀戮尖塔2' },
            { key: 're-requiem', match: /生化危机.*安魂|resident\s?evil.*requiem/i, label: '生化危机9' },
            { key: 'marathon', match: /marathon/i, label: 'Marathon' },
            { key: 'gta6', match: /gta\s?6|gta\s?vi/i, label: 'GTA6' }
        ],
        'upstream-hw': [
            { key: 'memory-price', match: /内存.*涨|内存.*降|dram|ddr5|hbm|ram.*价/i, label: '内存价格' },
            { key: 'chip-shortage', match: /芯片.*短缺|chip.*shortage|gpu.*短缺/i, label: '芯片供应' },
            { key: 'nvidia-gpu', match: /nvidia|dlss|rtx\s?50|gpu|显卡/i, label: 'GPU/显卡' },
            { key: 'hw-cost', match: /涨价.*硬件|硬件.*成本|主机.*涨价|液冷|asetek/i, label: '硬件成本' }
        ],
        'market-info': [
            { key: 'ma', match: /并购|收购|投资|整合|沙特|pif/i, label: '投资并购' },
            { key: 'personnel', match: /退休|辞职|接任|ceo|裁员|重组|layoff/i, label: '人事变动' },
            { key: 'report', match: /newzoo|circana|市场.*报告|行业.*报告|市场.*预测/i, label: '市场报告' },
            { key: 'regulation', match: /pegi|欧盟|dma|监管|法案|诉讼|版号/i, label: '政策监管' }
        ]
    };
    var groups = MERGE_GROUPS[clusterId];
    if (!groups) return clusterNews;
    var merged = [];
    var used = new Set();
    groups.forEach(function(group) {
        var matching = clusterNews.filter(function(n) {
            if (used.has(n.id)) return false;
            var text = ((n.title||'')+' '+(n.tags||[]).join(' ')+' '+(n.summary||'')).toLowerCase();
            return group.match.test(text);
        });
        if (matching.length === 0) return;
        if (matching.length === 1) {
            merged.push(matching[0]);
            used.add(matching[0].id);
        } else {
            var sorted = matching.slice().sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
            var primary = sorted[0];
            var subordinates = sorted.slice(1);
            var existingRelated = primary.relatedNewsIds || [];
            var mergedRelatedIds = Array.from(new Set(existingRelated.concat(subordinates.map(function(s) { return s.id; }))));
            merged.push(Object.assign({}, primary, {
                _mergedCount: matching.length,
                _mergedLabel: group.label,
                _mergedSubNews: subordinates,
                relatedNewsIds: mergedRelatedIds
            }));
            matching.forEach(function(n) { used.add(n.id); });
        }
    });
    clusterNews.forEach(function(n) {
        if (!used.has(n.id)) merged.push(n);
    });
    return merged.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
}

function getFeaturedReason(n) {
    var title = (n.title || '').toLowerCase();
    var tags = (n.tags || []).join(' ').toLowerCase();
    var combined = title + ' ' + tags;
    if (combined.match(/并购|收购|投资|股份|持股|pif|egdc|合并|整合/)) return '💰 格局变动';
    if (combined.match(/退休|辞职|接任|ceo|管理层|人事|重组|裁员/)) return '👤 高管变动';
    if (combined.match(/销量|突破.*万|里程碑|历史|最快|创纪录|百万/)) return '📊 里程碑';
    if (combined.match(/ps6|helix|次世代|switch 2|新主机|掌机/)) return '🎮 硬件格局';
    if (combined.match(/涨价|降价|分成|定价|关税|供应链/)) return '💵 价格冲击';
    if (combined.match(/gta|发售|定档|首发|上线|确认/)) return '🚀 重要发售';
    if (combined.match(/欧盟|dma|pegi|评级|监管|法案|诉讼|反垄断/)) return '⚖️ 政策监管';
    if (combined.match(/newzoo|市场.*超|预测|趋势|报告|\$\d+.*亿/)) return '📈 市场洞察';
    if (combined.match(/steam machine|验证|平台.*战略|开放|第三方/)) return '🌐 平台战略';
    if (combined.match(/dlss|nvidia|amd|gpu|芯片|显卡/)) return '🔧 技术突破';
    return '⭐ 重点';
}

function generateAutoInsight(n) {
    var title = (n.title || '').toLowerCase();
    var tags = (n.tags || []).join(' ').toLowerCase();
    var combined = title + ' ' + tags + ' ' + (n.summary || '').toLowerCase();
    if (combined.match(/并购|收购|投资|merger|acquisition/)) return '此并购/投资动态可能重塑相关细分市场的竞争格局，需关注后续整合进展和对竞品的连锁反应。';
    if (combined.match(/销量.*突破|里程碑|创纪录|百万|record/)) return '里程碑数据表明该产品/平台的市场动能强劲，可作为品类趋势和用户偏好的重要参考指标。';
    if (combined.match(/涨价|降价|关税|供应链|内存|tariff/)) return '价格/成本变动将沿产业链传导，需关注对终端定价策略和消费者购买决策的影响。';
    if (combined.match(/switch 2|ps6|新主机|次世代|helix/)) return '硬件换代节点是行业格局变动的关键窗口，将影响开发商资源分配和平台竞争力排序。';
    if (combined.match(/裁员|重组|restructur|layoff/)) return '组织重组反映企业战略调整方向，需关注对在研项目和行业人才流动的影响。';
    if (combined.match(/gta|荒野大镖客|red dead|rockstar/)) return 'Rockstar旗舰IP的任何动向都是行业风向标，对平台方独占策略和竞品档期规划有直接影响。';
    if (combined.match(/steam|valve|epic|平台.*策略|game pass|订阅/)) return '平台策略调整直接影响开发者收益模型和玩家消费习惯，是行业生态演化的关键驱动因素。';
    return '';
}
