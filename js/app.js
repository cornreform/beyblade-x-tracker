(function(){
  // ===== EMBEDDED GLOBAL DATABASE (from global_beyblade_db.json) =====
  var GLOBAL_DB = {"version":"1.0","updated":"2026-04-26","source":"Takara Tomy, Beyblade Wiki, 巴哈姆特社群評分","description":"全球爆旋陀螺X 資料庫 - BX/UX/CX系列","tier_labels":{"T0":"🔥 必買/最強 - 競技meta核心","T1":"⭐ 優先考慮 - 高競爭力","T2":"📌 有閒錢可考慮 - 穩定可用","T3":"💤 收藏/普通 - 非主流"},"tops":[{"code":"BX-01","name_en":"DranSword","name_jp":"ドランソード","lock":"3-60","axis":"F","axis_type":"Flat","spin":"右","type":"攻擊型","tier":"T2","meta":"稳定入門攻擊型","release":"2023-07-15","price":1980,"name_hk":"翔龍神劍","image":"parts/top_BX-01.png"},{"code":"BX-02","name_en":"HellsScythe","name_jp":"ヘルズサイズ","lock":"4-60","axis":"T","axis_type":"Taper","spin":"右","type":"平衡型","tier":"T2","meta":"バランス型，泛用性高","release":"2023-07-15","price":1980,"name_hk":"煉獄赤鐮","image":"parts/top_BX-02.png"},{"code":"BX-03","name_en":"WizardArrow","name_jp":"ウィザードアロー","lock":"4-80","axis":"B","axis_type":"Ball","spin":"右","type":"持久型","tier":"T3","meta":"基本持久型，新手向","release":"2023-07-15","price":1980,"name_hk":"巫師弩箭","image":"parts/top_BX-03.png"},{"code":"BX-04","name_en":"KnightShield","name_jp":"ナイトシールド","name_hk":"騎士護盾","lock":"3-80","axis":"N","axis_type":"Needle","spin":"右","type":"防禦型","tier":"T2","meta":"衝撃吸收防禦，ダンパー反彈","release":"2023-07-15","price":1980,"image":"parts/top_BX-04.png"},{"code":"BX-13","name_en":"KnightLance","name_jp":"ナイトランス","lock":"4-80","axis":"HN","axis_type":"High Needle","spin":"右","type":"防禦型","tier":"T3","meta":"防禦型變化版","release":"2023-08-10","price":1400,"name_hk":"騎士長槍","image":"parts/top_BX-13.png"},{"code":"BX-14","name_en":"SharkEdge","name_jp":"シャークエッジ","lock":"3-60","axis":"LF","axis_type":"Low Flat","spin":"右","type":"攻擊型","tier":"T2","meta":"Random Booster Vol.1","release":"2023-09-09","price":1400,"name_hk":"鯊魚利刃","image":"parts/top_BX-14.png"},{"code":"BX-15","name_en":"LeonClaw","name_jp":"レオンクロー","lock":"5-60","axis":"P","axis_type":"Point","spin":"右","type":"攻擊型","tier":"T2","meta":"攻擊型，Point軸穩定","release":"2023-10-07","price":1980,"name_hk":"獅王銳爪","image":"parts/top_BX-15.png"},{"code":"BX-16","name_en":"ViperTail","name_jp":"ヴァイパーテイル","lock":"5-80","axis":"O","axis_type":"Orb","spin":"右","type":"持久型","tier":"T2","meta":"Random Booster Select","release":"2023-10-07","price":1400,"name_hk":"毒蛇靈尾","image":"parts/top_BX-16.png"},{"code":"BX-19","name_en":"RhinoHorn","name_jp":"ライノホーン","lock":"3-80","axis":"S","axis_type":"Spike","spin":"右","type":"攻擊型","tier":"T3","meta":"低階攻擊型","release":"2023-11-02","price":1400,"name_hk":"犀牛號角","image":"parts/top_BX-19.png"},{"code":"BX-20","name_en":"DranDagger","name_jp":"ドランダガー","lock":"4-60","axis":"R","axis_type":"Rush","spin":"右","type":"攻擊型","tier":"T2","meta":"Deck Set，Dran系攻擊","release":"2023-11-02","price":3960,"name_hk":"翔龍雙刃","image":"parts/top_BX-20.png"},{"code":"BX-21","name_en":"HellsChain","name_jp":"ヘルズチェイン","lock":"5-60","axis":"HT","axis_type":"High Taper","spin":"右","type":"防禦型","tier":"T2","meta":"Deck Set，防禦連鎖","release":"2023-11-02","price":3960,"name_hk":"煉獄鎖鏈","image":"parts/top_BX-21.png"},{"code":"BX-23","name_en":"PhoenixWing","name_jp":"フェニックスウイング","name_hk":"鳳凰飛翼","lock":"9-60","axis":"GF","axis_type":"Gear Flat","spin":"右","type":"攻擊型","tier":"T0","meta":"🔥 T0 meta核心！最強攻擊型之一","release":"2023-12-27","price":2420,"image":"parts/top_BX-23.png"},{"code":"BX-24","name_en":"Mammoth Tusk","name_jp":"ワイバーンゲイル","lock":"5-80","axis":"GB","axis_type":"Gear Ball","spin":"右","type":"持久型","tier":"T2","meta":"Random Booster Vol.2","release":"2023-12-27","price":1400,"name_hk":"猛獁長牙","image":"parts/top_BX-24.png"},{"code":"BX-26","name_en":"UnicornSting","name_jp":"ユニコーンスティング","lock":"5-60","axis":"GP","axis_type":"Gear Point","spin":"右","type":"持久型","tier":"T2","meta":"持久型，GP軸","release":"2024-01-27","price":1400,"name_hk":"獨角幻刺","image":"parts/top_BX-26.png"},{"code":"BX-27-01","name_en":"SphinxCowl","name_jp":"スフィンクスカウル","name_hk":"史芬克斯斗篷","lock":"9-80","axis":"GN","axis_type":"Gear Needle","spin":"右","type":"防禦型","tier":"T2","meta":"連打防御，9枚刃分散攻擊","release":"2024-02-22","price":1400,"image":"parts/top_BX-27-01.png"},{"code":"BX-27-03","name_en":"SphinxCowl","name_jp":"スフィンクスカウル","name_hk":"史芬克斯斗篷","lock":"5-60","axis":"O","axis_type":"Orb","spin":"右","type":"防禦型","tier":"T2","meta":"5-60低重心防禦+O持久軸","release":"2024-02-22","price":1400,"image":"parts/top_BX-27-03.png"},{"code":"BX-31","name_en":"TyrannoBeat","name_jp":"ティラノビート","lock":"4-70","axis":"Q","axis_type":"Quake","spin":"右","type":"攻擊型","tier":"T2","meta":"Random Booster Vol.3","release":"2024-04-27","price":1400,"name_hk":"暴龍節拍","image":"parts/top_BX-31.png"},{"code":"BX-33","name_en":"WeissTiger","name_jp":"ヴァイスタイガー","lock":"3-60","axis":"U","axis_type":"Unite","spin":"右","type":"防禦型","tier":"T2","meta":"防禦型，U軸穩定","release":"2024-06-15","price":1400,"name_hk":"純白猛虎","image":"parts/top_BX-33.png"},{"code":"BX-34","name_en":"CobaltDragoon","name_jp":"コバルトドラグーン","lock":"2-60","axis":"C","axis_type":"Cyclone","spin":"左","type":"攻擊型","tier":"T0","meta":"🔥 唯一左回転！meta稀有價值","release":"2024-07-13","price":2321,"name_hk":"鈷藍青龍","image":"parts/top_BX-34.png"},{"code":"BX-35","name_en":"Random Booster Vol.4","name_jp":"ブラックシェル","lock":"4-60","axis":"D","axis_type":"Dot","spin":"右","type":"防禦型","tier":"T2","meta":"Random Booster Vol.4，稀有色","release":"2024-07-13","price":1400,"name_hk":"隨機陀螺系列 Vol.4","image":"parts/top_BX-35.png"},{"code":"BX-36","name_en":"WhaleWave","name_jp":"ホエールウェーブ","name_hk":"戰鯨波浪","lock":"5-80","axis":"E","axis_type":"Elevate","spin":"右","type":"平衡型","tier":"T1","meta":"Random Booster Select，E軸強力","release":"2024-09-14","price":1400,"image":"parts/top_BX-36.png"},{"code":"BX-38","name_en":"CrimsonGaruda","name_jp":"クリムゾンガルーダ","lock":"4-70","axis":"TP","axis_type":"Trans Point","spin":"右","type":"攻擊型","tier":"T2","meta":"攻擊型，4-70中高度","release":"2024-11-02","price":1400,"name_hk":"緋紅迦樓羅","image":"parts/top_BX-38.png"},{"code":"BX-39","name_en":"ShelterDrake","name_jp":"シェルタードレイク","lock":"7-80","axis":"GP","axis_type":"Gear Point","spin":"右","type":"防禦型","tier":"T2","meta":"Random Booster Select，防禦","release":"2025-02-15","price":1400,"name_hk":"護城龍神","image":"parts/top_BX-39.png"},{"code":"BX-44","name_en":"TriceraPress","name_jp":"トリケラプレス","lock":"M-85","axis":"BS","axis_type":"Bound Spike","spin":"右","type":"防禦型","tier":"T3","meta":"85超高度，M重量盤","release":"2025-06-28","price":1500,"name_hk":"三角龍重壓","image":"parts/top_BX-44.png"},{"code":"BX-45","name_en":"SamuraiCalibur","name_jp":"サムライカリバー","lock":"6-70","axis":"M","axis_type":"Merge","spin":"右","type":"攻擊型","tier":"T2","meta":"攻擊型，6-70中度","release":"2025-08-09","price":1500,"name_hk":"武士聖劍","image":"parts/top_BX-45.png"},{"code":"BX-48","name_en":"Random Booster Vol.9","name_jp":"ランダムブースターVol.9","lock":"?","axis":"?","axis_type":"?","spin":"右","type":"混合","tier":"T2","meta":"2026年最新Random Booster","release":"2026-02-14","price":1600,"image":"parts/top_BX-48.png","name_hk":"隨機陀螺系列 Vol.9"},{"code":"BX-49","name_en":"DranStrike","name_jp":"ドランストライク","lock":"4-50","axis":"FF","axis_type":"Friction Flat","spin":"右","type":"攻擊型","tier":"T1","meta":"最新Dran系攻擊型，低重心4-50","release":"2026-05-16","price":2200,"name_hk":"翔龍突擊","image":"parts/top_BX-49.png"},{"code":"UX-01","name_en":"DranBuster","name_jp":"ドランバスター","lock":"1-60","axis":"A","axis_type":"Accel","spin":"右","type":"攻擊型","tier":"T0","meta":"🔥 T0 meta！1-60低重心+A軸超高攻","release":"2024-03-30","price":1980,"name_hk":"翔龍破壞劍","image":"parts/top_UX-01.png"},{"code":"UX-02","name_en":"HellsHammer","name_jp":"ヘルズハマー","lock":"3-70","axis":"H","axis_type":"Hexa","spin":"右","type":"攻擊型","tier":"T1","meta":"攻擊型，3-70中高度","release":"2024-03-30","price":1980,"name_hk":"煉獄惡鎚","image":"parts/top_UX-02.png"},{"code":"UX-03","name_en":"WizardRod","name_jp":"ウィザードロッド","name_hk":"巫師幻杖","lock":"5-70","axis":"DB","axis_type":"Disk Ball","spin":"右","type":"持久型","tier":"T0","meta":"🔥 最強持久型！5-70DB meta定義","release":"2024-03-30","price":1400,"image":"parts/top_UX-03.png"},{"code":"UX-05","name_en":"ShinobiShadow","name_jp":"シノビシャドウ","lock":"1-80","axis":"MN","axis_type":"Metal Needle","spin":"右","type":"平衡型","tier":"T2","meta":"Random Booster Select","release":"2024-05-18","price":1400,"name_hk":"忍者幻影","image":"parts/top_UX-05.png"},{"code":"UX-06","name_en":"LeonCrest","name_jp":"レオンクレスト","lock":"7-60","axis":"GN","axis_type":"Gear Needle","spin":"右","type":"防禦型","tier":"T1","meta":"防禦型，7-60GN穩定","release":"2024-08-10","price":1400,"name_hk":"獅王徽章","image":"parts/top_UX-06.png"},{"code":"UX-07","name_en":"PhoenixRudder","name_jp":"フェニックスラダー","lock":"9-70","axis":"G","axis_type":"Glide","spin":"右","type":"平衡型","tier":"T1","meta":"Deck Set，9-70高度","release":"2024-08-10","price":4100,"name_hk":"鳳凰炎舵","image":"parts/top_UX-07.png"},{"code":"UX-08","name_en":"SilverWolf","name_jp":"シルバーウルフ","name_hk":"白銀戰狼","lock":"3-80","axis":"FB","axis_type":"Flat Ball","spin":"右","type":"防禦型","tier":"T1","meta":"特殊抵消環+FB軸，防禦最強","release":"2024-10-12","price":2080,"image":"parts/top_UX-08.png"},{"code":"UX-09","name_en":"SamuraiSaber","name_jp":"サムライセイバー","name_hk":"武士之刃","lock":"2-70","axis":"L","axis_type":"Level","spin":"右","type":"攻擊型","tier":"T1","meta":"劍型發射器、雪印","release":"2024-11-02","price":3300,"image":"parts/top_UX-09.png"},{"code":"UX-10","name_en":"KnightMail","name_jp":"ナイトメイル","lock":"3-85","axis":"BS","axis_type":"Bound Spike","spin":"右","type":"防禦型","tier":"T2","meta":"Customize Set U","release":"2024-11-02","price":5700,"image":"parts/top_UX-10.png","name_hk":"改造套裝U"},{"code":"UX-11","name_en":"ImpactDrake","name_jp":"インパクトドレイク","name_hk":"衝擊龍神","lock":"9-60","axis":"LR","axis_type":"Low Rush","spin":"右","type":"攻擊型","tier":"T0","meta":"🔥 T0 meta！9-60LR高攻持久兼備","release":"2024-12-28","price":2420,"image":"parts/top_UX-11.png"},{"code":"UX-12","name_en":"GhostCircle","name_jp":"ゴーストサークル","lock":"0-80","axis":"GB","axis_type":"Gear Ball","spin":"右","type":"持久型","tier":"T2","meta":"Random Booster Vol.5","release":"2024-12-28","price":1400,"image":"parts/top_UX-12.png","name_hk":"幽靈圓環"},{"code":"UX-13","name_en":"GolemRock","name_jp":"ゴーレムロック","name_hk":"魔像巨石","lock":"1-60","axis":"UN","axis_type":"Unite","spin":"右","type":"防禦型","tier":"T1","meta":"1-60低重心防禦+UN軸穩定","release":"2025-01-25","price":1400,"image":"parts/top_UX-13.png"},{"code":"UX-14","name_en":"ScorpioSpear","name_jp":"スコーピオスピア","lock":"0-70","axis":"Z","axis_type":"Zap","spin":"右","type":"攻擊型","tier":"T1","meta":"攻擊型，0-70低重心+Z軸","release":"2025-04-26","price":2200,"name_hk":"天蠍長矛","image":"parts/top_UX-14.png"},{"code":"UX-15","name_en":"SharkScale","name_jp":"シャークスケイル","name_hk":"鯊魚狂鱗","lock":"4-50","axis":"UF","axis_type":"Under Flat","spin":"右","type":"攻擊型","tier":"T0","meta":"🔥 Deck Set！4-50超低重心+UF","release":"2025-08-09","price":4200,"image":"parts/top_UX-15.png"},{"code":"UX-16-01","name_en":"ClockMirage","name_jp":"クロックミラージュ","name_hk":"時鐘幽景","lock":"9-65","axis":"B","axis_type":"Ball","spin":"右","type":"持久型","tier":"T1","meta":"9-65B持久特化，T1級","release":"2025-10-11","price":1400,"image":"parts/top_UX-16-01.png"},{"code":"UX-17","name_en":"MeteoDragoon","name_jp":"メテオドラグーン","name_hk":"隕石青龍","lock":"3-70","axis":"J","axis_type":"Jolt","spin":"右","type":"平衡型","tier":"T0","meta":"🔥 龍系新世代，3-70J強力","release":"2025-12-27","price":2420,"image":"parts/top_UX-17.png"},{"code":"UX-18","name_en":"MummyCurse","name_jp":"マミーカーセ","name_hk":"木乃伊詛咒","lock":"7-55","axis":"W","axis_type":"Wedge","spin":"右","type":"防禦型","tier":"T2","meta":"Random Booster Vol.8，繃帶伸長","release":"2026-02-14","price":1400,"image":"parts/top_UX-18.png"},{"code":"UX-19","name_en":"BulletGriffon","name_jp":"バレットグリフォン","lock":"?","axis":"H","axis_type":"Hexa","spin":"右","type":"攻擊型","tier":"T1","meta":"最新攻擊型Starter","release":"2026-04-26","price":2200,"image":"parts/top_UX-19.png","name_hk":"子彈獅鷲"},{"code":"CX-01","name_en":"DranBrave","name_jp":"ドランブレイブ","lock":"S6-60","axis":"V","axis_type":"Vortex","spin":"右","type":"攻擊型","tier":"T0","meta":"🔥 CX旗艦！S6重量+Vortex軸","release":"2025-03-29","price":2200,"image":"parts/top_CX-01.png","name_hk":"蒼龍勇氣"},{"code":"CX-02","name_en":"WizardArc","name_jp":"ウィザードアーク","lock":"R4-55","axis":"LO","axis_type":"Low Orb","spin":"右","type":"持久型","tier":"T1","meta":"R4-55LO持久+低重心","release":"2025-03-29","price":2200,"image":"parts/top_CX-02.png","name_hk":"巫師弧光"},{"code":"CX-03","name_en":"PerseusDark","name_jp":"ペルセウスダーク","lock":"B6-80","axis":"W","axis_type":"Wedge","spin":"右","type":"防禦型","tier":"T2","meta":"B6-80W重防禦型","release":"2025-03-29","price":1400,"image":"parts/top_CX-03.png","name_hk":"英仙幽暗"},{"code":"CX-05","name_en":"HellsReaper","name_jp":"ヘルズリーパー","lock":"T4-70","axis":"K","axis_type":"Kick","spin":"右","type":"平衡型","tier":"T2","meta":"Random Booster Vol.6","release":"2025-06-28","price":1600,"image":"parts/top_CX-05.png","name_hk":"惡魔獵魂"},{"code":"CX-06","name_en":"FoxBrush","name_jp":"フォックスブラッシュ","lock":"J9-70","axis":"GR","axis_type":"Gear Rush","spin":"右","type":"平衡型","tier":"T2","meta":"Random Booster Select","release":"2025-08-09","price":1600,"image":"parts/top_CX-06.png","name_hk":"狐狸筆刷"},{"code":"CX-07","name_en":"PegasusBlast","name_jp":"ペガ萨斯ブラスト","lock":"AT","axis":"r","axis_type":"Turbo","spin":"右","type":"攻擊型","tier":"T1","meta":"天馬爆擊！二段加速軸","release":"2025-10-11","price":2420,"image":"parts/top_CX-07.png","name_hk":"天馬爆擊"},{"code":"CX-08","name_en":"CerberusFlame","name_jp":"ケルベロスフレイム","lock":"W5-80","axis":"WB","axis_type":"Wall Ball","spin":"右","type":"防禦型","tier":"T2","meta":"Random Booster Vol.7","release":"2025-12-27","price":1600,"image":"parts/top_CX-08.png","name_hk":"地獄犬烈焰"},{"code":"CX-09","name_en":"SolEclipse","name_jp":"ソルエクリプス","lock":"D5-70","axis":"TK","axis_type":"Trans Kick","spin":"右","type":"攻擊型","tier":"T1","meta":"太陽系攻擊型","release":"2026-01-10","price":2200,"image":"parts/top_CX-09.png","name_hk":"太陽日蝕"},{"code":"CX-10","name_en":"WolfHunt","name_jp":"ウルフハント","lock":"F0-60","axis":"DB","axis_type":"Disk Ball","spin":"右","type":"防禦型","tier":"T1","meta":"F0-60輕量+DB軸防禦","release":"2026-02-07","price":1400,"image":"parts/top_CX-10.png","name_hk":"銀狼狩獵"},{"code":"CX-11","name_en":"EmperorMite","name_jp":"エンペラーマイト","lock":"HOp","axis":"?","axis_type":"?","spin":"右","type":"攻擊型","tier":"T2","meta":"Deck Set","release":"2026-02-07","price":5800,"image":"parts/top_CX-11.png","name_hk":"帝王神蠍"},{"code":"CX-12","name_en":"PhoenixFlare","name_jp":"フェニックスフレア","lock":"Z9-80","axis":"WW","axis_type":"Wide Wedge","spin":"右","type":"攻擊型","tier":"T1","meta":"Z9-80重+WW軸攻擊","release":"2026-03-28","price":2200,"image":"parts/top_CX-12.png","name_hk":"鳳凰閃焰"},{"code":"CX-13","name_en":"BahamutBlitz","name_jp":"バハムートブリッツ","name_hk":"龍王閃擊","lock":"BK1-50","axis":"I","axis_type":"Impact","spin":"右","type":"攻擊型","tier":"T1","meta":"BK1-50超低重心+Impact軸","release":"2026-03-28","price":2420,"image":"parts/top_CX-13.png"},{"code":"CX-14","name_en":"KnightFortress","name_jp":"ナイトフォートレス","name_hk":"騎士堡壘","lock":"GV8-70","axis":"UN","axis_type":"Unite","spin":"右","type":"防禦型","tier":"T1","meta":"騎士上蓋+圓珠機構","release":"2026-03-28","price":1400,"image":"parts/top_CX-14.png"},{"code":"CX-16","name_en":"Ragnarage","name_jp":"ラグナレイジ","name_hk":"雷神咆哮","lock":"FE4-55","axis":"Y","axis_type":"Yell","spin":"右","type":"攻擊型","tier":"T2","meta":"Start Dash Set C","release":"2026-03-28","price":5650,"image":"parts/top_CX-16.png"},{"code":"CX-17","name_en":"UnicornDelta","name_jp":"ユニコーンデルタ","name_hk":"獨角獸三角洲","lock":"PO3-60","axis":"GU","axis_type":"Gear Unite","spin":"右","type":"持久型","tier":"T2","meta":"Random Booster Vol.10","release":"2026-06-28","price":1600,"image":"parts/top_CX-17.png"},{"id":"BX-24","name_en":"Mammoth Tusk","name_hk":"猛獁長牙","blade":"Mammoth Tusk","type":"防禦型","ratchet":"7-60","bit":"S","tier":"T1","release":"Random Booster Vol. 9","spin":"右","image":"parts/top_BX-24.png"}],"champion_combos":{"world_championship_2025":{"gold":{"player":"Leobardo (Mexico)","deck":[{"blade":"Aero Pegasus","ratchet":"7-60","bit":"Level","role":"全能型"},{"blade":"Wizard Rod","ratchet":"1-60","bit":"Hexa","role":"持久型"},{"blade":"Shark Scale","ratchet":"3-60","bit":"Low Rush","role":"攻擊型"}]},"silver":{"player":"Balya (Indonesia)","deck":[{"blade":"Cobalt Dragoon","ratchet":"5-60","bit":"Elevate","role":"左迴旋王牌"},{"blade":"Wizard Rod","ratchet":"1-60","bit":"Hexa","role":"持久型"},{"blade":"Shark Scale","ratchet":"1-70","bit":"Low Rush","role":"攻擊型"}]},"bronze":{"player":"Berguiny (France)","deck":[{"blade":"Hover Wyvern","ratchet":"7-60","bit":"Low Rush","role":"持久型"},{"blade":"Wizard Rod","ratchet":"9-70","bit":"Ball","role":"持久型"},{"blade":"Valkyrie Blast Wheel","ratchet":"9-60","bit":"Free Ball","role":"平衡型"}]}},"meta_combos_2025":[{"name":"持久王牌","blade":"Wizard Rod","ratchet":"9-60 / 3-60","bit":"Ball / Level","tier":"S+","note":"2025 Meta最強持久型，Level Bit為革命性配件"},{"name":"攻擊王牌","blade":"Phoenix Wing","ratchet":"3-60 / 1-60","bit":"Rush / Low Rush","tier":"S+","note":" smash attack + endurance 最佳平衡"},{"name":"左迴旋王牌","blade":"Cobalt Dragoon","ratchet":"7-60 / 5-60","bit":"Elevate / Level","tier":"S+","note":"唯一左迴旋，Elevate讓它成為頂級"},{"name":"獵殺攻擊","blade":"Shark Scale","ratchet":"3-60 / 1-60","bit":"L / LR / Low Rush","tier":"S","note":"對付Attack型的剋星"},{"name":"全能飛馬","blade":"Aero Pegasus","ratchet":"7-60 / 1-60","bit":"Level / Low Rush","tier":"S","note":"World Champion金牌主將"},{"name":"暴龍獵人","blade":"Tyranno Beat","ratchet":"7-60 / 9-70","bit":"Point / Taper","tier":"A","note":"專打Rush/Low Rush dominated場"},{"name":"銀狼防禦","blade":"Silver Wolf","ratchet":"5-60 / 9-60","bit":"Free Ball / Hexa","tier":"A","note":"抵消環特殊防禦機制"},{"name":"蒼龍爆擊","blade":"Dran Buster","ratchet":"1-60 / 9-60","bit":"Low Rush / Low Flat","tier":"A","note":"低重心攻擊型"}],"key_parts":{"bits":{"Level":"2025革命性配件，持久+動態移動，取代Hexa","Elevate":"寬底座低重心，讓CobaltDragoon成為頂級","Low Rush":"低重心Rush，攻擊型首選，速度與控制兼備","Free Ball":"Ball升級版，持久型更穩定","Ball":"經典持久型配件"}},"update_note":"新增冠軍組合資料 + 香港中文譯名"}};// ===== PARTS DATA (ratchets + bits) =====
  var PARTS_DATA = {"gears":[{"id":"GF","name":"9-60 GF","spin":"右","type":"Stamina","note":"原裝配鳳凰飛翼，T0首選"},{"id":"L","name":"2-70 L","spin":"左","type":"Stamina","note":"原裝配巫師，T0.5"},{"id":"WF","name":"4-80 WF","spin":"右","type":"Stamina","note":"配奇蹟鳳凰"},{"id":"O","name":"5-60 O","spin":"右","type":"Balance","note":"原裝配雅典娜"},{"id":"WD","name":"1-80 WD","spin":"右","type":"Stamina","note":"配奇蹟龍"},{"id":"A","name":"1-60 A","spin":"右","type":"Defense","note":"原裝配海軍上將"},{"id":"TH","name":"4-70 TH","spin":"左","type":"Stamina","note":"配泰坦冥王"},{"id":"D","name":"6-50 D","spin":"右","type":"Attack","note":"配烈焰魔龍"}],"axes":[{"id":"F","name":"F (Fly)","type":"Stamina","note":"飛行形，重心偏外"},{"id":"L","name":"L (Left)","type":"Stamina","note":"左手專用，固鎖左旋"},{"id":"O","name":"O (Orbit)","type":"Balance","note":"軌道形，旋轉半徑大"},{"id":"D","name":"D (Defense)","type":"Defense","note":"防禦形，重量集中"},{"id":"A","name":"A (Admiral)","type":"Defense","note":"海軍形，平衡穩定"},{"id":"H","name":"H (Hold)","type":"Stamina","note":"握力形，抓地力強"},{"id":"S","name":"S (Strike)","type":"Attack","note":"攻擊形，撞擊力強"}]};

  // ===== APP STATE =====
  var personalData = {tops: []};
  var globalData = {tops: []};
  var combosData = {meta_combos: [], world_champion: null};
  var partsData = {ratchets: [], bits: []};
  var currentTab = 'personal';
  var currentFilter = 'all';

  var LS_KEY = 'beyblade_x_collection_v1';

  // ===== LOCALSTORAGE HELPERS =====
  function loadPersonalFromLS() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : {tops: []};
    } catch(e) { return {tops: []}; }
  }

  function savePersonalToLS(data) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch(e) { console.error('LS save failed', e); }
  }

  // ===== LOAD DATA - NO NETWORK REQUIRED =====
  function loadData() {
    globalData = {tops: GLOBAL_DB.tops};
    combosData = {
      meta_combos: GLOBAL_DB.champion_combos ? GLOBAL_DB.champion_combos.meta_combos_2025 : [],
      world_champion: GLOBAL_DB.champion_combos ? GLOBAL_DB.champion_combos.world_championship_2025 : null
    };
    partsData = {
      ratchets: PARTS_DATA.gears.map(function(g) { return {code: g.id, name: g.name, type: g.type, best_for: g.note, source: g.note, image: '/parts/ratchet_' + g.id.replace('-','_') + '.png'}; }),
      bits: PARTS_DATA.axes.map(function(a) { return {code: a.id, name: a.name, type: a.type, best_for: a.note, source: a.note, image: '/parts/bit_' + a.id + '.png'}; }),
      recommended_combos: []
    };
    personalData = loadPersonalFromLS();
    updateStats();
    render();
  }

  function updateStats() {
    var g = globalData.tops || [];
    var p = personalData.tops || [];
    document.getElementById('statTotal').textContent = g.length;
    document.getElementById('statOwned').textContent = p.length;
    document.getElementById('statT0').textContent = g.filter(function(t) { return t.tier === 'T0'; }).length;
    document.getElementById('statT1').textContent = g.filter(function(t) { return t.tier === 'T1'; }).length;
  }

  function getOwnedCodes() {
    return new Set((personalData.tops || []).map(function(t) { return t.id || t.code; }));
  }

  function getBuyScore(tier) {
    var map = {'T0': 5, 'T1': 4, 'T2': 3, 'T3': 2};
    return map[tier] || 2;
  }

  function renderBuyScore(tier) {
    var score = getBuyScore(tier);
    var tierLabels = {'T0': '必買', 'T0.5': '推薦', 'T1': '建議', 'T2': '可考慮', 'T3': '非必要'};
    var dots = '';
    for (var i = 0; i < 5; i++) {
      dots += '<div class="dot ' + (i < score ? 'on' : 'off') + '" style="display:flex;width:16px;height:16px;border-radius:50%;flex-shrink:0"></div>';
    }
    var label = tierLabels[tier] || '普通';
    return '<div style="display:flex;flex-direction:row;align-items:center;gap:4px">' + dots + '<span style="font-size:0.75rem;color:#888;margin-left:4px">' + label + ' ' + tier + '</span></div>';
  }

  function renderCard(t, isPersonal) {
    var owned = getOwnedCodes();
    var code = t.code || t.id;
    var isOwned = owned.has(code);
    var tier = t.tier || 'T3';
    var name = t.name_hk || t.name_en || 'Unknown';
    var nameJp = t.name_jp || '';
    var lock = t.lock || '—';
    var axis = t.axis || '?';
    var axisType = t.axis_type || '';
    var spin = t.spin || '右';
    var type = t.type || '?';
    var img = '';
    if (t.image) {
      img = '<img src="' + t.image + '" alt="' + name + '" style="width:100%;max-height:120px;object-fit:contain;margin-bottom:12px;border-radius:8px;" onerror="this.style.display=\'none\'">';
    }
    var tierClass = tier.replace('.', '_');
    var footer = isOwned
      ? '<div class="owned-footer"><span class="owned-tag">✓ 已擁有</span><span class="tier-inline tier-' + tierClass + '">📊 ' + tier + '</span></div>'
      : '<div class="buy-score">' + renderBuyScore(tier) + '</div>';
    return '<div class="card ' + tierClass + (isOwned ? ' owned' : '') + '" onclick="showDetail(\'' + code + '\', ' + isPersonal + ')">' +
      '<div class="card-header"><span class="card-id">' + code + '</span><span class="card-tier tier-' + tierClass + '">' + tier + '</span></div>' +
      img +
      '<div class="card-name">' + name + '</div>' +
      (nameJp ? '<div class="card-name-jp">' + nameJp + '</div>' : '') +
      '<div class="specs">' +
      '<div class="spec"><span class="spec-label">🔒 固鎖</span><span class="spec-value">' + lock + '</span></div>' +
      '<div class="spec"><span class="spec-label">⚙️ 中軸</span><span class="spec-value">' + axis + (axisType ? ' (' + axisType + ')' : '') + '</span></div>' +
      '<div class="spec"><span class="spec-label">🔄 迴旋</span><span class="spec-value">' + spin + '</span></div>' +
      '<div class="spec"><span class="spec-label">📂 類型</span><span class="spec-value">' + type + '</span></div>' +
      '</div>' +
      footer +
      '</div>';
  }

  function render() {
    var el = document.getElementById('content');
    var search = document.getElementById('searchBox').value.toLowerCase();
    var items = [];
    if (currentTab === 'personal') {
      items = (personalData.tops || []).filter(function(t) {
        if (!search) return true;
        return JSON.stringify(t).toLowerCase().indexOf(search) !== -1;
      });
      if (items.length === 0) {
        el.innerHTML = '<div class="empty-state"><div class="icon">📭</div><p>暫無收藏</p><p style="font-size:0.85rem;color:#666;margin-top:8px">去「全球圖鑑」添加陀螺吧！</p><div style="margin-top:20px;padding:16px;background:rgba(29,209,161,0.08);border:1px solid rgba(29,209,161,0.2);border-radius:12px;text-align:center"><div style="font-size:0.8rem;color:#7de8cc;font-weight:600;margin-bottom:10px">📦 備份與恢復</div><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button onclick="exportCollection()" style="padding:10px 20px;background:#1dd1a1;color:#0a0a1a;border:none;border-radius:10px;font-size:0.85rem;font-weight:700;cursor:pointer">📤 導出收藏</button><button onclick="triggerImport()" style="padding:10px 20px;background:#2a2a4a;color:#e8e8f0;border:1px solid #3a3a6a;border-radius:10px;font-size:0.85rem;font-weight:600;cursor:pointer">📥 恢復收藏</button></div><div style="margin-top:10px;font-size:0.72rem;color:#606080">導出後存到安全的地方，隨時可恢復</div></div></div>';
        return;
      }
      el.innerHTML = '<div class="section-title">📦 我的收藏 (' + items.length + '款)</div><div class="grid">' + items.map(function(t) { return renderCard(t, true); }).join('') + '</div>';
    } else if (currentTab === 'global') {
      items = (globalData.tops || []).filter(function(t) {
        if (currentFilter !== 'all' && t.type !== currentFilter) return false;
        if (!search) return true;
        return JSON.stringify(t).toLowerCase().indexOf(search) !== -1;
      }).sort(function(a, b) {
        // Sort by box number ascending (BX-01 → BX-02 → ...)
        var numA = parseInt(a.code.replace('BX-', ''), 10) || 0;
        var numB = parseInt(b.code.replace('BX-', ''), 10) || 0;
        return numA - numB;
      });
      if (items.length === 0) {
        el.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>無匹配結果</p></div>';
        return;
      }
      el.innerHTML = '<div class="section-title">🌍 全球圖鑑 (' + items.length + '/' + (globalData.tops ? globalData.tops.length : 0) + '款)</div><div class="grid">' + items.map(function(t) { return renderCard(t, false); }).join('') + '</div>';
    } else if (currentTab === 'combos') {
      renderCombos();
    } else if (currentTab === 'parts') {
      renderParts();
    } else if (currentTab === 'tier') {
      items = (globalData.tops || []).filter(function(t) {
        if (currentFilter !== 'all' && t.tier !== currentFilter) return false;
        if (!search) return true;
        return JSON.stringify(t).toLowerCase().indexOf(search) !== -1;
      }).sort(function(a, b) {
        var tierOrder = {'T0': 0, 'T1': 1, 'T2': 2, 'T3': 3};
        return (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4);
      });
      if (items.length === 0) {
        el.innerHTML = '<div class="empty-state"><div class="icon">🏆</div><p>無此評級陀螺</p></div>';
        return;
      }
      el.innerHTML = '<div class="section-title">🏆 評級榜 (' + items.length + '款)</div><div class="grid">' + items.map(function(t) { return renderCard(t, false); }).join('') + '</div>';
    }
  }

  function switchTab(tab) {
    currentTab = tab;
    currentFilter = 'all';
    var tabs = document.querySelectorAll('.tab');
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
    event.target.classList.add('active');
    document.getElementById('tierFilters').style.display = tab === 'tier' ? 'flex' : 'none';
    document.getElementById('typeFilters').style.display = tab === 'global' ? 'flex' : 'none';
    var chips = document.querySelectorAll('.filter-chip');
    for (var j = 0; j < chips.length; j++) chips[j].classList.remove('active');
    var allChips = document.querySelectorAll('.filter-chip');
    for (var k = 0; k < allChips.length; k++) {
      if (allChips[k].textContent.indexOf('全部') !== -1) allChips[k].classList.add('active');
    }
    render();
  }

  function renderParts() {
    var el = document.getElementById('content');
    var html = '<div style="margin-bottom:24px">';
    html += '<div class="section-title" style="margin-top:24px">⚙️ 固鎖 (Ratchet)</div>';
    html += '<div class="grid">';
    for (var i = 0; i < PARTS_DATA.gears.length; i++) {
      var r = PARTS_DATA.gears[i];
      html += '<div class="card" style="cursor:default"><div class="card-header"><span class="card-name">' + r.name + '</span><span class="card-tier">固鎖</span></div>';
      html += '<div class="specs" style="margin-top:8px"><div class="spec"><span class="spec-label">類型</span><span class="spec-value">' + r.type + '</span></div></div>';
      html += '<div style="font-size:0.8rem;color:#888;margin-top:8px">📌 ' + r.note + '</div></div>';
    }
    html += '</div></div>';
    html += '<div style="margin-bottom:24px">';
    html += '<div class="section-title" style="margin-top:24px">🎯 Bit</div><div class="grid">';
    for (var m = 0; m < PARTS_DATA.axes.length; m++) {
      var a = PARTS_DATA.axes[m];
      html += '<div class="card" style="cursor:default"><div class="card-header"><span class="card-name">' + a.name + '</span><span class="card-tier">Bit</span></div>';
      html += '<div class="specs" style="margin-top:8px"><div class="spec"><span class="spec-label">類型</span><span class="spec-value">' + a.type + '</span></div></div>';
      html += '<div style="font-size:0.8rem;color:#888;margin-top:8px">📌 ' + a.note + '</div></div>';
    }
    html += '</div></div>';
    html += '<div style="background:#1a1a2e;border-radius:12px;padding:20px;border:1px solid #2a2a4a">';
    html += '<div style="color:#6c5ce7;font-weight:bold;font-size:1rem;margin-bottom:16px">💡 基礎配搭建議</div>';
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px">';
    var combos = [
      {type: '🔥 攻擊型', combo: '3-80固鎖 + S Bit', best: '翔龍破壞劍 / 鯊魚狂鱗'},
      {type: '🛡️ 防禦型', combo: '5-60固鎖 + O Bit', best: '白銀戰狼 / 騎士堡壘'},
      {type: '⏱️ 持久型', combo: '9-60固鎖 + B Bit', best: '巫師幻杖 / 翔龍勇者'},
      {type: '⚖️ 平衡型', combo: '7-60固鎖 + B Bit', best: '時鐘幽景 / 隕石青龍'}
    ];
    for (var n = 0; n < combos.length; n++) {
      var c = combos[n];
      html += '<div style="background:#0f0f23;border-radius:8px;padding:12px">';
      html += '<div style="color:#feca57;font-weight:bold;margin-bottom:4px">' + c.type + '</div>';
      html += '<div style="color:#fff;font-size:0.9rem">' + c.combo + '</div>';
      html += '<div style="color:#888;font-size:0.8rem;margin-top:4px">適用: ' + c.best + '</div></div>';
    }
    html += '</div></div>';
    el.innerHTML = html;
  }

  function renderCombos() {
    var el = document.getElementById('content');
    var search = document.getElementById('searchBox').value.toLowerCase();
    var html = '';
    html += '<div style="background:#1a1a2e;border-radius:12px;padding:20px;border:1px solid #6c5ce7;margin-bottom:24px">';
    html += '<div style="color:#6c5ce7;font-weight:bold;font-size:1rem;margin-bottom:16px">🔧 配搭選擇器</div>';
    html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">';
    html += '<div><div style="color:#888;font-size:0.8rem;margin-bottom:6px">刃片 (Blade)</div>';
    html += '<select id="comboBlade" onchange="updateCombo()" style="width:100%;padding:10px;border-radius:8px;border:1px solid #2a2a4a;background:#0f0f23;color:#e0e0e0;font-size:0.9rem">';
    html += '<option value="">選擇刃片...</option>';
    var bladeOptions = [];
    for (var i = 0; i < Math.min((globalData.tops||[]).length, 30); i++) {
      var t = globalData.tops[i];
      bladeOptions.push('<option value="' + (t.code||t.id) + '">' + (t.code||t.id) + ' ' + (t.name_hk||t.name_en||'') + '</option>');
    }
    html += bladeOptions.join('') + '</select></div>';
    html += '<div><div style="color:#888;font-size:0.8rem;margin-bottom:6px">固鎖 (Ratchet)</div>';
    html += '<select id="comboRatchet" onchange="updateCombo()" style="width:100%;padding:10px;border-radius:8px;border:1px solid #2a2a4a;background:#0f0f23;color:#e0e0e0;font-size:0.9rem">';
    html += '<option value="">選擇固鎖...</option>';
    for (var g = 0; g < PARTS_DATA.gears.length; g++) {
      var rg = PARTS_DATA.gears[g];
      html += '<option value="' + rg.id + '">' + rg.id + ' ' + rg.name + '</option>';
    }
    html += '</select></div>';
    html += '<div><div style="color:#888;font-size:0.8rem;margin-bottom:6px">Bit</div>';
    html += '<select id="comboBit" onchange="updateCombo()" style="width:100%;padding:10px;border-radius:8px;border:1px solid #2a2a4a;background:#0f0f23;color:#e0e0e0;font-size:0.9rem">';
    html += '<option value="">選擇Bit...</option>';
    for (var a = 0; a < PARTS_DATA.axes.length; a++) {
      var ax = PARTS_DATA.axes[a];
      html += '<option value="' + ax.id + '">' + ax.id + ' ' + ax.name + '</option>';
    }
    html += '</select></div></div>';
    html += '<div id="comboPreview" style="text-align:center;padding:16px;background:#0f0f23;border-radius:8px;min-height:60px"><div style="color:#666;font-size:0.9rem">選擇零件組合成你的陀螺</div></div></div>';

    var wc = combosData.world_champion;
    if (wc && wc.gold) {
      html += '<div style="margin-bottom:24px"><div class="section-title">🏆 2025 世界冠軍組合</div>';
      html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">';
      var medals = [['gold', '🥇'], ['silver', '🥈'], ['bronze', '🥉']];
      for (var mi = 0; mi < medals.length; mi++) {
        var mkey = medals[mi][0];
        var mmedal = medals[mi][1];
        var mp = wc[mkey];
        if (!mp) continue;
        html += '<div style="background:#1a1a2e;border-radius:12px;padding:16px;text-align:center;border:1px solid #2a2a4a">';
        html += '<div style="font-size:1.5rem;margin-bottom:4px">' + mmedal + '</div>';
        html += '<div style="color:#fff;font-weight:bold;font-size:0.9rem">' + mp.player + '</div>';
        html += '<div style="color:#666;font-size:0.75rem">';
        for (var di = 0; di < (mp.deck||[]).length; di++) {
          var d = mp.deck[di];
          html += '<div style="margin-top:4px">' + d.blade + ' ' + d.ratchet + d.bit + '</div>';
        }
        html += '</div></div>';
      }
      html += '</div></div>';
    }

    var filtered = (combosData.meta_combos || []).filter(function(c) {
      if (!search) return true;
      return JSON.stringify(c).toLowerCase().indexOf(search) !== -1;
    });
    if (filtered.length > 0) {
      html += '<div style="margin-bottom:24px"><div class="section-title">⚡ 2025 Meta 強勢組合</div><div class="grid">';
      for (var ci = 0; ci < filtered.length; ci++) {
        var c = filtered[ci];
        var tierColor = c.tier === 'S+' ? '#ff6b6b' : c.tier === 'S' ? '#feca57' : '#48dbfb';
        html += '<div class="card" style="cursor:default"><div class="card-header"><span class="card-name">' + c.name + '</span>';
        html += '<span class="card-tier" style="background:rgba(255,107,107,0.2);color:' + tierColor + '">' + c.tier + '</span></div>';
        html += '<div class="specs" style="margin-top:8px">';
        html += '<div class="spec"><span class="spec-label">刃片</span><span class="spec-value">' + c.blade + '</span></div>';
        html += '<div class="spec"><span class="spec-label">固鎖</span><span class="spec-value">' + c.ratchet + '</span></div>';
        html += '<div class="spec"><span class="spec-label">Bit</span><span class="spec-value">' + c.bit + '</span></div>';
        html += '</div><div style="font-size:0.8rem;color:#888;margin-top:8px">' + c.note + '</div></div>';
      }
      html += '</div></div>';
    }

    var bitsData = GLOBAL_DB.champion_combos && GLOBAL_DB.champion_combos.key_parts ? GLOBAL_DB.champion_combos.key_parts.bits : {};
    var bitKeys = Object.keys(bitsData);
    if (bitKeys.length > 0) {
      html += '<div style="margin-bottom:24px"><div class="section-title">🔧 關鍵配件攻略</div>';
      for (var bk = 0; bk < bitKeys.length; bk++) {
        var bitKey = bitKeys[bk];
        html += '<div style="background:#1a1a2e;border-radius:12px;padding:12px;margin-bottom:8px;border:1px solid #2a2a4a">';
        html += '<span style="color:#6c5ce7;font-weight:bold">' + bitKey + '</span>';
        html += '<span style="color:#888;margin-left:8px">' + bitsData[bitKey] + '</span></div>';
      }
      html += '</div>';
    }

    if (!html) {
      el.innerHTML = '<div class="empty-state"><div class="icon">🏅</div><p>暫無冠軍組合資料</p></div>';
      return;
    }
    el.innerHTML = html;
  }

  function updateCombo() {
    var blade = document.getElementById('comboBlade') ? document.getElementById('comboBlade').value : '';
    var ratchet = document.getElementById('comboRatchet') ? document.getElementById('comboRatchet').value : '';
    var bit = document.getElementById('comboBit') ? document.getElementById('comboBit').value : '';
    var preview = document.getElementById('comboPreview');
    if (!preview) return;
    if (!blade && !ratchet && !bit) {
      preview.innerHTML = '<div style="color:#666;font-size:0.9rem">選擇零件組合成你的陀螺</div>';
      return;
    }
    var bladeData = blade ? globalData.tops.find(function(t) { return (t.code||t.id)===blade; }) : null;
    var ratchetData = ratchet ? PARTS_DATA.gears.find(function(g) { return g.id===ratchet; }) : null;
    var bitData = bit ? PARTS_DATA.axes.find(function(a) { return a.id===bit; }) : null;
    var html = '<div style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">';
    if (bladeData) {
      var bimg = bladeData.image ? '<img src="' + bladeData.image + '" style="width:60px;height:60px;object-fit:contain">' : '';
      html += '<div style="text-align:center">' + bimg + '<div style="color:#6c5ce7;font-size:0.75rem">' + (bladeData.code||blade) + '</div><div style="color:#fff;font-size:0.8rem">' + (bladeData.name_hk||bladeData.name_en||'') + '</div></div>';
      html += '<div style="color:#666;font-size:1.5rem">+</div>';
    }
    if (ratchetData) {
      html += '<div style="text-align:center"><div style="width:60px;height:60px;background:#0f0f23;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#feca57;font-weight:bold;font-size:0.8rem">' + ratchetData.name + '</div><div style="color:#feca57;font-size:0.75rem">' + ratchetData.id + '</div></div>';
      html += '<div style="color:#666;font-size:1.5rem">+</div>';
    }
    if (bitData) {
      html += '<div style="text-align:center"><div style="width:60px;height:60px;background:#0f0f23;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#48dbfb;font-weight:bold;font-size:0.8rem">' + bitData.name + '</div><div style="color:#48dbfb;font-size:0.75rem">' + bitData.id + '</div></div>';
    }
    html += '</div>';
    if (blade && ratchet && bit) {
      html += '<div style="margin-top:12px;text-align:center"><button onclick="saveCombo()" style="padding:8px 20px;background:#1dd1a1;color:#0f0f23;border:none;border-radius:8px;cursor:pointer;font-weight:bold">💾 保存組合</button></div>';
    }
    preview.innerHTML = html;
  }

  function saveCombo() {
    var blade = document.getElementById('comboBlade') ? document.getElementById('comboBlade').value : '';
    var ratchet = document.getElementById('comboRatchet') ? document.getElementById('comboRatchet').value : '';
    var bit = document.getElementById('comboBit') ? document.getElementById('comboBit').value : '';
    alert('組合已保存！\n刃片: ' + blade + '\n固鎖: ' + ratchet + '\nBit: ' + bit);
  }

  function filterTier(tier) {
    currentFilter = tier;
    var chips = document.querySelectorAll('#tierFilters .filter-chip');
    for (var i = 0; i < chips.length; i++) chips[i].classList.remove('active');
    event.target.classList.add('active');
    render();
  }

  function filterType(type) {
    currentFilter = type;
    var chips = document.querySelectorAll('#typeFilters .filter-chip');
    for (var i = 0; i < chips.length; i++) chips[i].classList.remove('active');
    event.target.classList.add('active');
    render();
  }

  function doSearch() { render(); }

  function showDetail(code, isPersonal) {
    var data = isPersonal ? personalData : globalData;
    var t = (data.tops || []).find(function(x) { return (x.code || x.id) === code; });
    if (!t) return;
    var owned = getOwnedCodes();
    var isOwned = owned.has(code);
    var tier = t.tier || 'T3';
    var score = getBuyScore(tier);
    var tierClass = tier.replace('.', '_');
    var scoreLabels = {5: '🔥 必買', 4: '⭐ 推薦', 3: '📌 可考慮', 2: '💤 謹慎'};
    var reasons = '';
    if (tier === 'T0') reasons = '✅ meta最強級，競技場必備<br>✅ 保值/升值潛力高<br>✅ 市場需求極大';
    else if (tier === 'T1') reasons = '✅ 高競爭力，可與T0抗衡<br>✅ 實戰性能優秀<br>✅ CP值高';
    else if (tier === 'T2') reasons = '✅ 穩定可用<br>⚠️ 非meta主流，收藏為主<br>💡 如果你係fans或者收集系列可以買';
    else reasons = '⚠️ 非競技向<br>💡 收藏用為主';
    var imgTag = '';
    if (t.image) {
      imgTag = '<img src="' + t.image + '" alt="" style="width:150px;max-height:150px;object-fit:contain;margin-bottom:12px;border-radius:12px;" onerror="this.style.display=\'none\'">';
    }
    var modalBody = document.getElementById('modalBody');
    modalBody.innerHTML =
      '<div style="text-align:center;margin-bottom:20px">' +
      imgTag +
      '<div style="font-size:0.9rem;color:#6c5ce7;font-weight:bold">' + code + '</div>' +
      '<h2 style="color:#fff;margin:8px 0">' + (t.name_hk || t.name_en || 'Unknown') + '</h2>' +
      (t.name_jp ? '<div style="color:#666;font-size:0.9rem">' + t.name_jp + '</div>' : '') +
      (isOwned ? '<span style="display:inline-block;margin-top:8px;padding:4px 12px;background:#1dd1a1;color:#0f0f23;border-radius:12px;font-size:0.8rem;font-weight:bold">✓ 已擁有</span>' : '') +
      '</div>' +
      '<div style="background:#0f0f23;border-radius:12px;padding:16px;margin-bottom:16px">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">' +
      '<span style="color:#888">推薦指數</span>' +
      '<span style="font-weight:bold;color:' + (score >= 4 ? '#1dd1a1' : score >= 3 ? '#feca57' : '#8395a7') + '">' + (scoreLabels[score]||'') + ' ' + score + '/5</span></div>' +
      renderBuyScore(tier) + '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:16px">' +
      '<div style="background:#0f0f23;border-radius:12px;padding:12px"><div style="color:#666;font-size:0.8rem">🔒 固鎖</div><div style="color:#fff;font-weight:bold;font-size:1.1rem">' + (t.lock||'—') + '</div></div>' +
      '<div style="background:#0f0f23;border-radius:12px;padding:12px"><div style="color:#666;font-size:0.8rem">⚙️ 中軸</div><div style="color:#fff;font-weight:bold;font-size:1.1rem">' + (t.axis||'?') + (t.axis_type ? ' <span style="font-size:0.8rem;color:#888">(' + t.axis_type + ')</span>' : '') + '</div></div>' +
      '<div style="background:#0f0f23;border-radius:12px;padding:12px"><div style="color:#666;font-size:0.8rem">🔄 迴旋</div><div style="color:#fff;font-weight:bold;font-size:1.1rem">' + (t.spin === 'L' ? '左' : t.spin === 'R' ? '右' : t.spin||'右') + '</div></div>' +
      '<div style="background:#0f0f23;border-radius:12px;padding:12px"><div style="color:#666;font-size:0.8rem">📂 類型</div><div style="color:#fff;font-weight:bold;font-size:1.1rem">' + (t.type||'?') + '</div></div>' +
      '</div>' +
      (t.meta ? '<div style="background:#0f0f23;border-radius:12px;padding:16px;margin-bottom:16px"><div style="color:#666;font-size:0.8rem;margin-bottom:8px">📝 評價</div><div style="color:#ccc;font-size:0.9rem;line-height:1.6">' + t.meta + '</div></div>' : '') +
      '<div style="background:#0f0f23;border-radius:12px;padding:16px"><div style="color:#666;font-size:0.8rem;margin-bottom:8px">💰 購買分析</div><div style="color:#ccc;font-size:0.9rem;line-height:1.6">' + reasons + '</div></div>' +
      (t.release ? '<div style="margin-top:16px;text-align:center;color:#666;font-size:0.8rem">📅 發售: ' + t.release + (t.price ? ' | ¥' + t.price : '') + '</div>' : '') +
      '<div style="margin-top:20px;text-align:center">' +
      (isOwned
        ? '<button onclick="removeFromCollection(\'' + code + '\')" style="padding:12px 24px;background:#ff6b6b;color:#fff;border:none;border-radius:12px;font-size:1rem;cursor:pointer;font-weight:bold">✕ 移除收藏</button>'
        : '<button onclick="addToCollection(\'' + code + '\')" style="padding:12px 24px;background:#1dd1a1;color:#0f0f23;border:none;border-radius:12px;font-size:1rem;cursor:pointer;font-weight:bold">✓ 加入收藏</button>'
      ) + '</div>';
    document.getElementById('detailModal').classList.add('show');
  }

  // ===== COLLECTION MANAGEMENT VIA LOCALSTORAGE =====
  function addToCollection(code) {
    var t = globalData.tops.find(function(x) { return (x.code||x.id) === code; });
    if (!t) return;
    var personal = loadPersonalFromLS();
    if (!personal.tops) personal.tops = [];
    var already = personal.tops.find(function(x) { return (x.code||x.id) === code; });
    if (!already) {
      personal.tops.push(t);
      savePersonalToLS(personal);
      personalData = personal;
      updateStats();
      showDetail(code, false);
    }
  }

  function removeFromCollection(code) {
    var personal = loadPersonalFromLS();
    if (!personal.tops) personal.tops = [];
    personal.tops = personal.tops.filter(function(x) { return (x.code||x.id) !== code; });
    savePersonalToLS(personal);
    personalData = personal;
    updateStats();
    showDetail(code, false);
  }

  function closeModal(e) {
    if (!e || e.target.id === 'detailModal' || e.target.className === 'modal-close') {
      document.getElementById('detailModal').classList.remove('show');
    }
  }

  function refreshData() {
    var btn = document.getElementById('refreshBtn');
    if (btn) btn.classList.add('spin');
    loadData();
    setTimeout(function() { if (btn) btn.classList.remove('spin'); }, 500);
  }

  // Service Worker for offline caching
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js')
        .then(function(reg) { console.log('SW registered:', reg.scope); })
        .catch(function(err) { console.log('SW registration failed:', err); });
    });
  }

  // ===== EXPORT / IMPORT (Backup to JSON file) =====
  function exportCollection() {
    var data = loadPersonalFromLS();
    var blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var date = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = 'beyblade_collection_' + date + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function triggerImport() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        try {
          var data = JSON.parse(ev.target.result);
          if (data && Array.isArray(data.tops)) {
            savePersonalToLS(data);
            loadData();
            alert('✅ 成功導入 ' + data.tops.length + ' 款收藏！');
          } else {
            alert('❌ 檔案格式無效');
          }
        } catch(err) {
          alert('❌ 讀取失敗: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // ===== BANNER DISMISSAL =====
  function dismissBanner(type) {
    document.getElementById(type + 'Banner').style.display = 'none';
    try { localStorage.setItem('banner_' + type + '_dismissed', '1'); } catch(e) {}
  }

  function initBanners() {
    ['pwa', 'backup'].forEach(function(type) {
      try {
        if (localStorage.getItem('banner_' + type + '_dismissed') === '1') {
          var el = document.getElementById(type + 'Banner');
          if (el) el.style.display = 'none';
        }
      } catch(e) {}
    });
  }

  // Expose functions globally for onclick handlers
  window.switchTab = switchTab;
  window.filterTier = filterTier;
  window.filterType = filterType;
  window.doSearch = doSearch;
  window.showDetail = showDetail;
  window.addToCollection = addToCollection;
  window.removeFromCollection = removeFromCollection;
  window.closeModal = closeModal;
  window.refreshData = refreshData;
  window.updateCombo = updateCombo;
  window.saveCombo = saveCombo;
  window.exportCollection = exportCollection;
  window.triggerImport = triggerImport;
  window.dismissBanner = dismissBanner;

  // Init banners
  initBanners();

  // Initial load
  loadData();
})();
