// 行业周报元数据索引
// 每周生成新周报时，在数组顶部追加一条
window.WEEKLY_REPORTS = [
  {
    week: 'W31',
    date: '2026-08-14',
    periodStart: '2026-08-10',
    periodEnd: '2026-08-16',
    title: '端主行业周报 W31：第二波财报"增收不增利"·全数字化越过临界点',
    summary: '第二波日美财报（均为4-6月季度）坐实结构性分化：多平台+数字化是共同增长引擎，但"营收创新高≠游戏利润增长"——Take-Two净预订13.9亿美元(-3%)录得亏损季但GTA6定档11/19、终极版占预购89%；Sega Sammy净销售+17.3%扭亏却靠Pachinko博彩撑盘、游戏子板块利润骤降；Square Enix营业利润+88.6%、数字销量占比破90%；Bandai Namco营收创新高但游戏分部利润-30.9%。全数字化越过临界点：厂商拿到经济账（光盘成本仅占售价15%）加速弃盘，玩家与监管开始反噬——异形火力小队Switch云版停服致玩家无法游玩且无退款，索尼再遭荷兰4.57亿美元数字垄断诉讼(五国围剿)。微软内容分化：暴雪成Xbox最佳工作室之一，光环CE重制约120万仍偏软，靠收购资产扛旗、第一方原生乏力。',
    file: 'weekly/W31_20260814.html',
    tags: ['增收不增利', '多平台+数字化', '去实体化反噬', 'GTA6预购89%', '微软内容分化'],
    highlight: true
  },
  {
    week: 'W30',
    date: '2026-08-07',
    periodStart: '2026-08-03',
    periodEnd: '2026-08-09',
    title: '端主行业周报 W30：索尼微软陷内容荒+涨价潮·双双转向服务化',
    summary: '索尼与微软本周动向指向同一处困境——第一方新作断档、硬件成本高企：IGN梳理PS17家工作室上半年仅《Saros》一款约30万份，微软FY27计划裁员约3200人、退守Halo/Gears/Forza，Xbox 8/1全系涨价生效(1TB版+150美元)、美国主机均价半年涨16%、存储2027产能售罄。两家被迫转向"服务化+存量变现"：索尼筹建全球广告团队+推进2028弃盘，微软下一代Project Helix兼容五代25年游戏+可跑Steam。经典移植《黑色行动》PS版累计1120万、约为《光环》重制的32倍，印证需求在、差距在执行。任天堂FY27 Q1营业利润+150.5%成唯一反例，但硬件当季下滑(-34.4%)，靠软件/数字(+90%)/IP驱动。',
    file: 'weekly/Weekly_Briefing_20260807.html',
    tags: ['内容荒', '硬件涨价', 'Project Helix', '服务化', '黑色行动vs光环', '任天堂'],
    highlight: true
  },
  {
    week: 'M07',
    date: '2026-08-01',
    periodStart: '2026-07-01',
    periodEnd: '2026-07-31',
    title: '端主行业月报 · 2026年7月',
    summary: '财报超级周：平台方分化——微软Xbox Q4收入约49.8亿美元、连续第4季下滑(内容服务-10%、硬件全年-29%)，索尼G&NS利润2020亿日元、同比+37%但主要靠美国关税退款与汇率等非经营因素；日系全面爆发——卡普空数字内容+83%、科乐美数字娱乐+36.5%(股价单日+12.7%)、光荣特库摩+17.3%，共同引擎是目录游戏+数字化+日元贬值；资本格局重塑——沙特PIF 550亿美元收购EA完成监管审批、8/4交割退市，主权资本首次全资控盘3A发行商。6家公司财报统计周期均为2026年4-6月。',
    file: 'weekly/Monthly_Briefing_202607.html',
    tags: ['月报', '财报超级周', '平台方分化', '日系爆发', '沙特收购EA', '货币单位'],
    highlight: true
  },
  {
    week: 'W28',
    date: '2026-07-24',
    periodStart: '2026-07-20',
    periodEnd: '2026-07-26',
    title: '端主行业周报 W28：沙特550亿收购EA落地在即·Xbox战略摇摆',
    summary: '沙特PIF以约550亿美元、93.4%股权收购EA获欧盟初步批准，成史上最大杠杆收购，PIF首次全资控盘3A发行商——从财务持股走向控盘运营；结合Scopely/沐瞳/任天堂/卡普空/ESL FACEIT，沙特游戏版图成全谱系。Xbox战略"既要又要"：工作室高层被曝"深恶痛绝"Game Pass、认为订阅贬损游戏价值，同时把初代游戏向后兼容登PC、测试云游戏广告，Bethesda公布TES6/辐射5路线图稳军心。产品面：帕鲁1.0累计3050万份收入约7亿美元、黑旗破300万。',
    file: 'weekly/Weekly_Briefing_20260724.html',
    tags: ['PIF收购EA', '沙特游戏帝国', 'Xbox战略', 'Game Pass', 'Bethesda', '幻兽帕鲁'],
    highlight: true
  },
  {
    week: 'W27',
    date: '2026-07-17',
    periodStart: '2026-07-13',
    periodEnd: '2026-07-19',
    title: '端主行业周报 W27：PC增长主机收缩·育碧黑旗回血·索尼弃盘监管反击',
    summary: 'Alinea估Steam 2026 H1流水约111亿美元同比+14.5%创半年新高，Kagan预测全年主机出货约3390万台同比-19.5%，主机末期"降价换量"机制失效、增长向PC倾斜；育碧重组迎首个正反馈，《刺客信条：黑旗记忆重置》首日200万、系列累计2.5亿，验证经典IP现金化；索尼弃盘引欧盟"难阻止"表态与墨西哥反垄断投诉，弃盘本质是收紧交易入口。',
    file: 'weekly/Weekly_Briefing_20260717.html',
    tags: ['PC增长', '主机收缩', '育碧黑旗', '索尼弃盘', '监管'],
    highlight: true
  },
  {
    week: 'W26',
    date: '2026-07-10',
    periodStart: '2026-07-06',
    periodEnd: '2026-07-12',
    title: '端主行业周报 W26：Xbox史上最大重组·止损布局·Project Latitude',
    summary: 'Xbox启动史上最大规模重组：7/6千人级裁员、关停多家工作室，以"问题→止损→布局"逻辑推进——经营全面恶化(责任利润率约3%)倒逼组织扁平化与COO调整；Project Latitude明确为微软"把自家游戏卖到PS5等竞对平台"的多平台发行战略代号，处置动作用红/橙/绿状态标签区分(出售剥离/协商中/未受影响)。同期索尼弃盘按动因→落地→连锁反应推进。',
    file: 'weekly/Weekly_Briefing_20260710.html',
    tags: ['Xbox重组', '裁员关厂', 'Project Latitude', '责任利润率', '组织扁平化'],
    highlight: true
  },
  {
    week: 'M06',
    date: '2026-07-01',
    periodStart: '2026-06-01',
    periodEnd: '2026-06-30',
    title: '端主行业月报 · 2026年6月',
    summary: '利润摊牌月：微软Asha"扩收入+控成本"双轨改革为3%责任利润率买单（6月起关厂+7月近2000人裁员）、索尼强势收割（回归独占+2028弃盘+PS Plus或涨价）形成攻守对峙；硬件涨价潮Xbox最狠（一年三轮+2TB停产）、Steam Machine高价首发$1049；去实体化引发消费者反噬但资本点赞；GTA6预购屠榜60+国。',
    file: 'weekly/Monthly_Briefing_202606.html',
    tags: ['月报', 'Xbox双轨改革', '索尼收割', '硬件涨价', '去实体化', 'GTA6'],
    highlight: true
  },
  {
    week: 'W25',
    date: '2026-06-26',
    periodStart: '2026-06-20',
    periodEnd: '2026-06-26',
    title: '端主行业周报 W25：Steam Machine登场·GTA6预购开启·索尼独占坐实',
    summary: 'Steam Machine $1049起售、口碑不差但价格劝退，Valve承认内存采购无议价权且反作弊游戏存在兼容硬伤；GTA6标准版$79.99/终极版$99.99开启预购，分析师预估首年3000-3800万份；索尼删除PC多平台战略表述，Bungie裁员坐实GaaS反噬。',
    file: 'weekly/Weekly_Briefing_20260626.html',
    tags: ['Steam Machine', 'GTA6', '索尼独占', '硬件涨价', 'Bungie'],
    highlight: true
  },
  {
    week: 'W24',
    date: '2026-06-19',
    periodStart: '2026-06-13',
    periodEnd: '2026-06-19',
    title: '端主行业周报 W24：Xbox关厂潮·Bungie裁员·存储涨价冲击主机',
    summary: 'Xbox关厂传闻部分坐实，Ninja Theory确认关闭并寻买家，Double Fine/Compulsion谈判求独立；Bungie或裁半数，索尼GaaS豪赌反噬；DRAM/NAND合约价大涨，Steam Machine因内存涨价推迟，次世代主机成本承压。',
    file: 'weekly/Weekly_Briefing_20260619.html',
    tags: ['Xbox关厂', 'Ninja Theory', 'Bungie', '存储涨价', 'Steam Machine'],
    highlight: true
  },
  {
    week: 'W23',
    date: '2026-06-12',
    periodStart: '2026-06-06',
    periodEnd: '2026-06-12',
    title: '端主行业周报 W23：Xbox重置风暴·任天堂Direct·GP涨价反噬',
    summary: 'Xbox Showcase 6/7公布10款第一方仅2款永久独占，6/11内部备忘录披露5年投$200亿收入反降$5亿利润率仅3%、7月或大规模裁员；任天堂Direct阵容华丽但股价跌7.5%；Q1全球游戏收入7季连增达$541亿。',
    file: 'weekly/Weekly_Briefing_20260612.html',
    tags: ['Xbox重置', 'GP反噬', '内部备忘录', '任天堂Direct', 'Helix'],
    highlight: true
  },
  {
    week: 'W22',
    date: '2026-06-05',
    periodStart: '2026-06-01',
    periodEnd: '2026-06-05',
    title: '端主行业周报 W22：GTA6前的9月大逃杀 · Valve反垄断风暴',
    summary: 'State of Play 60分钟20+款游戏，9月11天5款大作扎堆抢GTA6前窗口；Valve解封文件首次实锤定价控制，英美双线诉讼进入决战；Xbox CEO Sharma首次表态"必须有独占"。',
    file: 'weekly/Weekly_Briefing_20260605.html',
    tags: ['State of Play', '9月大逃杀', 'Valve反垄断', 'Xbox独占', 'GTA6'],
    highlight: true
  },
  {
    week: 'M05',
    date: '2026-06-01',
    periodStart: '2026-05-01',
    periodEnd: '2026-05-31',
    title: '端主行业月报 · 2026年5月',
    summary: '索尼封闭回归利润创纪录·Xbox承认错误开始纠偏·GaaS主机端系统性出清·硬件成本全线传导·GTA6定档11.19·10家厂商财报横向对比。',
    file: 'weekly/Monthly_Briefing_202605.html',
    tags: ['月报', '索尼vs微软', 'GaaS出清', '硬件涨价', 'GTA6', '财报季'],
    highlight: true
  },
  {
    week: 'W21',
    date: '2026-05-23',
    periodStart: '2026-05-18',
    periodEnd: '2026-05-24',
    title: '端主行业周报 W21：索尼独占回归·Take-Two确认GTA6定档·FH6首周600万',
    summary: '索尼第一方叙事单人游戏停止登PC回归PS独占，PS Plus涨价10%，动态定价被指违欧盟法；Take-Two确认GTA6于11月19日如期发售；FH6首周600万玩家创Xbox Steam历史。',
    file: 'weekly/Weekly_Briefing_20260523.html',
    tags: ['索尼独占', 'GTA6', 'Take-Two', 'FH6', '育碧', 'Square Enix'],
    highlight: true
  },
  {
    week: 'W20',
    date: '2026-05-16',
    periodStart: '2026-05-09',
    periodEnd: '2026-05-16',
    title: '端主行业周报 W20：极限竞速6泄露·Capcom & Nexon财报创纪录',
    summary: 'FH6 Steam 155GB未加密泄露引发盗版危机，PS5版延后发售——Sharma独占策略首次落地；Capcom营业利润9连纪录、Nexon营收+34%创新高（ARC Raiders 1600万份）。',
    file: 'weekly/Weekly_Briefing_20260516.html',
    tags: ['极限竞速6', 'Capcom', 'Nexon', 'ARC Raiders', '财报季'],
    highlight: false
  },
  {
    week: 'W19',
    date: '2026-05-08',
    periodStart: '2026-05-02',
    periodEnd: '2026-05-08',
    title: '端主行业周报 W19：深海迷航2定档·财报季密集发布',
    summary: '深海迷航2正式定档5/14；微软FY26Q3 Xbox硬件-33%但MAU创新高；EA全年净预订$80亿创纪录；Roblox Q1收入+39%但下调指引。',
    file: 'weekly/W19_20260508.html',
    tags: ['财报季', '深海迷航2', '微软', 'EA', 'Roblox'],
    highlight: false
  },
  {
    week: 'M04',
    date: '2026-04-30',
    periodStart: '2026-04-01',
    periodEnd: '2026-04-30',
    title: '端主行业月报 · 2026年4月',
    summary: '4月行业全景回顾：Xbox战略大转型（Game Pass降价+拆COD）、PS5全球涨价$100-150、Switch 2产能削减、GTA6定档11/19、多家巨头财报发布。',
    file: 'weekly/Monthly_Briefing_202604.html',
    tags: ['月报', 'Xbox', 'PS5涨价', 'GTA6', 'Switch 2'],
    highlight: true
  },
  {
    week: 'W17',
    date: '2026-04-24',
    periodStart: '2026-04-18',
    periodEnd: '2026-04-24',
    title: 'Xbox 战略拐点周：XGP 降价 + 拆《使命召唤》',
    summary: 'Xbox Game Pass 九年来最大反转——Ultimate 降至 $22.99、COD 不再首日入库；同期 Helix 主机、品牌整顿、裁员传闻密集落地。',
    file: 'weekly/W17_20260424.html',
    tags: ['Xbox', 'Game Pass', '深度专题'],
    highlight: true
  }
];
