/* =========================================================
   BOPOMOFO 網站內容資料檔 content.js
   ---------------------------------------------------------
   ・新增 / 修改詞彙：只要改這個檔案，不用動 index.html。
   ・featured: true  = 已收錄於讀本（實心顯示，可跳到讀本頁）
     featured: false = 詞彙表上有、但還沒有正式內容（虛線顯示）
   ・page: 讀本頁碼（從 0 開始，0 = 封面、1 = 封面內頁；對應 assets/book/NN.jpg）
   ・illustration: 之後放正式插畫路徑，例如 "assets/illus/douhua.png"
   ・zhuyin 讀音為初稿，請團隊校對。
   ========================================================= */
window.BPMF_CONTENT = {

  /* 九組官方圖騰：檔案 assets/motifs/m1.png ~ m9.png，letters = 組成的注音 */
  motifs: [
    { id: 1, letters: ["ㄊ", "ㄙ"] },
    { id: 2, letters: ["ㄞ", "ㄢ"] },
    { id: 3, letters: ["ㄤ", "ㄦ"] },
    { id: 4, letters: ["ㄎ", "ㄋ"] },
    { id: 5, letters: ["ㄕ", "ㄏ"] },
    { id: 6, letters: ["ㄛ", "ㄜ"] },
    { id: 7, letters: ["ㄅ", "ㄉ", "ㄌ"] },
    { id: 8, letters: ["ㄍ", "ㄑ"] },
    { id: 9, letters: ["ㄆ", "ㄨ", "ㄡ"] }
  ],


  /* 堆疊牆額外插畫（不在 食・景・物 詞彙表裡，只出現在「挑一樣臺灣味」）
     cat：歸類到哪一章（food / scene / object），會用那一章的顏色 */
  extras: [
    { cat: "food",   z: "ㄈ", word: "鳳梨酥",     en: "Pineapple Cake",        zhuyin: "ㄈㄥˋ ㄌㄧˊ ㄙㄨ",        illustration: "assets/illus/pineapple-cake.webp" },
    { cat: "object", z: "ㄊ", word: "陀螺",       en: "Spinning Top",          zhuyin: "ㄊㄨㄛˊ ㄌㄨㄛˊ",          illustration: "assets/illus/tuoluo.webp" },
    { cat: "object", z: "ㄐ", word: "劍玉",       en: "Kendama",               zhuyin: "ㄐㄧㄢˋ ㄩˋ",            illustration: "assets/illus/kendama.webp" },
    { cat: "object", z: "ㄓ", word: "竹蟬",       en: "Bamboo Cicada Toy",     zhuyin: "ㄓㄨˊ ㄔㄢˊ",            illustration: "assets/illus/zhuchan.webp" },
    { cat: "object", z: "ㄉ", word: "豆花杓",     en: "Tofu Pudding Scoop",    zhuyin: "ㄉㄡˋ ㄏㄨㄚ ㄕㄠˊ",       illustration: "assets/illus/scoop-a.webp", variants: [{ name: "側面", en: "Side view", img: "assets/illus/scoop-a.webp", c: "#A9AEB3" }, { name: "立面", en: "Upright view", img: "assets/illus/scoop-b.webp", c: "#6E7378" }] },
    { cat: "object", z: "ㄊ", word: "湯杓",       en: "Soup Ladle",            zhuyin: "ㄊㄤ ㄕㄠˊ",              illustration: "assets/illus/ladle.webp" },
    { cat: "object", z: "ㄍ", word: "鍋蓋",       en: "Pot Lid",               zhuyin: "ㄍㄨㄛ ㄍㄞˋ",            illustration: "assets/illus/potlid.webp" },
    { cat: "scene",  z: "ㄈ", word: "飛魚",       en: "Flying Fish",           zhuyin: "ㄈㄟ ㄩˊ",                illustration: "assets/illus/flyingfish.webp" },
    { cat: "scene",  z: "ㄉ", word: "達悟族勇士", en: "Tao Warrior",           zhuyin: "ㄉㄚˊ ㄨˋ ㄗㄨˊ ㄩㄥˇ ㄕˋ", illustration: "assets/illus/tao.webp" }
  ],
  /* 讀本章節（頁碼從 0 開始） */
  bookChapters: [
    { label: "開頭", en: "Intro", page: 0 },
    { label: "關於", en: "About", page: 5 },
    { label: "食", en: "Food", page: 17 },
    { label: "景", en: "Scenery", page: 45 },
    { label: "物", en: "Objects", page: 65 },
    { label: "封底", en: "Back", page: 89 }
  ],

  categories: [
    {
      key: "food", glyph: "食", en: "Food", color: "pink",
      line: "食，記錄味蕾的鄉愁。", lineEn: "Flavors of home.",
      items: [
        { z: "ㄅ", word: "刈包", en: "Gua Bao", illustration: "assets/illus/guabao.webp", zhuyin: "ㄍㄨㄚˋ ㄅㄠ", featured: false },
        { z: "ㄉ", word: "豆花", illustration: "assets/illus/douhua.webp", variants: [{ name: "紅豆粉圓綠豆款", en: "Red bean, pearl & mung bean", img: "assets/illus/douhua.webp", c: "#7A2E3A" }, { name: "花生仙草芋圓款", en: "Peanut, grass jelly & taro ball", img: "assets/illus/douhua2.webp", c: "#C98A3C" }], en: "Tofu Pudding", zhuyin: "ㄉㄡˋ ㄏㄨㄚ", featured: true, no: "01", page: 19,
          zh: "一種臺灣常見的傳統甜品，以滑嫩豆花為主，常搭配糖水、花生、紅豆、粉圓或仙草一起享用。",
          enDesc: "A traditional Taiwanese dessert featuring silky tofu pudding, often served with syrup, peanuts, red beans, tapioca pearls, or grass jelly." },
        { z: "ㄌ", word: "麻荖", en: "Puffed Rice Cracker", illustration: "assets/illus/malao.webp", zhuyin: "ㄇㄚˊ ㄌㄠˇ", featured: false },
        { z: "ㄆ", word: "排骨酥", en: "Braised Pork Rib Soup", illustration: "assets/illus/paigusu.webp", zhuyin: "ㄆㄞˊ ㄍㄨˇ ㄙㄨ", featured: false },
        { z: "ㄡ", word: "肉圓", en: "Ba-wan", illustration: "assets/illus/rouyuan.webp", zhuyin: "ㄖㄡˋ ㄩㄢˊ", featured: false },
        { z: "ㄨ", word: "滷肉飯", en: "Braised Pork Rice", illustration: "assets/illus/luroufan.webp", zhuyin: "ㄌㄨˇ ㄖㄡˋ ㄈㄢˋ", featured: false },
        { z: "ㄍ", word: "地瓜球", illustration: "assets/illus/dgq-girl.webp", variants: [{ name: "謝謝光臨・女孩紙袋", en: "“Thank you” bag · girl", img: "assets/illus/dgq-girl.webp", c: "#E2453C" }, { name: "謝謝光臨・廚師紙袋", en: "“Thank you” bag · chef", img: "assets/illus/dgq-chef.webp", c: "#C0562F" }], en: "Sweet Potato Balls", zhuyin: "ㄉㄧˋ ㄍㄨㄚ ㄑㄧㄡˊ", featured: true, no: "02", page: 21,
          zh: "一種臺灣常見的街頭小吃，以地瓜製成麵糰，油炸成外酥內 Q、圓潤蓬鬆的小球。",
          enDesc: "A popular Taiwanese street snack made from sweet potato dough, deep-fried into light, puffy balls with a crispy outside and pleasantly chewy inside." },
        { z: "ㄑ", word: "青蛙下蛋", en: "Tapioca Pearl Drink", illustration: "assets/illus/qingwa.webp", zhuyin: "ㄑㄧㄥ ㄨㄚ ㄒㄧㄚˋ ㄉㄢˋ", featured: false },
        { z: "ㄊ", word: "土托魚羹", en: "Spanish Mackerel Thick Soup", illustration: "assets/illus/tutuo.webp", zhuyin: "ㄊㄨˇ ㄊㄨㄛ ㄩˊ ㄍㄥ", featured: false, featured: true, page: 41 },
        { z: "ㄙ", word: "鹽酥雞", en: "Popcorn Chicken", illustration: "assets/illus/yansuji.webp", zhuyin: "ㄧㄢˊ ㄙㄨ ㄐㄧ", featured: false },
        { z: "ㄛ", word: "破布子", en: "Pickled Cordia Seeds", illustration: "assets/illus/pobuzi.webp", zhuyin: "ㄆㄛˋ ㄅㄨˋ ㄗˇ", featured: false, featured: true, page: 23 },
        { z: "ㄜ", word: "蚵仔煎", illustration: "assets/illus/ohazen.webp", en: "Oyster Omelet", zhuyin: "ㄜˊ ㄗㄞˇ ㄐㄧㄢ", featured: true, no: "03", page: 25,
          zh: "以新鮮蚵仔、雞蛋、蔬菜與粉漿煎成，再淋上鹹甜醬汁的臺灣經典小吃。（中文說明待確認）",
          enDesc: "A popular Taiwanese snack made with fresh oysters, eggs, vegetables, and a starchy batter, then topped with a savory sauce." },
        { z: "ㄏ", word: "火雞肉飯", en: "Turkey Rice", illustration: "assets/illus/huoji.webp", zhuyin: "ㄏㄨㄛˇ ㄐㄧ ㄖㄡˋ ㄈㄢˋ", featured: false, featured: true, page: 27 },
        { z: "ㄕ", word: "燒餅夾蛋", en: "Sesame Flatbread with Egg", illustration: "assets/illus/shaobing.webp", zhuyin: "ㄕㄠ ㄅㄧㄥˇ ㄐㄧㄚˊ ㄉㄢˋ", featured: false, featured: true, page: 29 },
        { z: "ㄤ", word: "芒果冰", illustration: "assets/illus/mango-cup.webp", variants: [{ name: "聖代杯", en: "Sundae glass", img: "assets/illus/mango-cup.webp", c: "#F2B21B" }, { name: "玻璃碗", en: "Glass bowl", img: "assets/illus/mango-bowl.webp", c: "#E8C400" }], en: "Mango Shaved Ice", zhuyin: "ㄇㄤˊ ㄍㄨㄛˇ ㄅㄧㄥ", featured: true, no: "04", page: 31,
          zh: "一種臺灣常見的冰品，在刨冰上鋪滿新鮮芒果，常搭配煉乳、芒果醬或冰淇淋一起享用。",
          enDesc: "A popular Taiwanese dessert featuring shaved ice topped with fresh mango, often served with condensed milk, mango sauce, or ice cream." },
        { z: "ㄦ", word: "貓耳朵", en: "Cat Ear Crisps", zhuyin: "ㄇㄠ ㄦˇ ㄉㄨㄛˇ", featured: false, featured: true, page: 33 },
        { z: "ㄋ", word: "牛肉麵", en: "Beef Noodle Soup", illustration: "assets/illus/beefnoodle.webp", zhuyin: "ㄋㄧㄡˊ ㄖㄡˋ ㄇㄧㄢˋ", featured: false, featured: true, page: 35 },
        { z: "ㄎ", word: "烤香腸", en: "Grilled Taiwanese Sausage", zhuyin: "ㄎㄠˇ ㄒㄧㄤ ㄔㄤˊ", featured: true, no: "05", page: 37,
          zh: "臺灣夜市與路邊攤很常見的經典小吃，香腸帶有微甜風味，烤過後外皮焦香，常搭配生蒜一起吃。",
          enDesc: "A classic Taiwanese night-market snack with a slightly sweet flavor and smoky, charred skin, often enjoyed with raw garlic." },
        { z: "ㄞ", word: "愛玉", en: "Aiyu Jelly", zhuyin: "ㄞˋ ㄩˋ", featured: false, featured: true, page: 43 },
        { z: "ㄢ", word: "蛋餅", en: "Egg Crepe", illustration: "assets/illus/danbing.webp", zhuyin: "ㄉㄢˋ ㄅㄧㄥˇ", featured: false, featured: true, page: 39 }
      ]
    },
    {
      key: "scene", glyph: "景", en: "Scenery", color: "teal",
      line: "景，收藏土地的故事。", lineEn: "Stories of the land.",
      items: [
        { z: "ㄅ", word: "布袋戲", en: "Glove Puppetry", zhuyin: "ㄅㄨˋ ㄉㄞˋ ㄒㄧˋ", featured: false },
        { z: "ㄉ", word: "大甲媽祖遶境", en: "Dajia Mazu Pilgrimage", zhuyin: "ㄉㄚˋ ㄐㄧㄚˇ ㄇㄚ ㄗㄨˇ ㄖㄠˋ ㄐㄧㄥˋ", featured: false },
        { z: "ㄌ", word: "蘭嶼", en: "Orchid Island", zhuyin: "ㄌㄢˊ ㄩˇ", featured: true, no: "25", page: 57,
          zh: "一座位於臺灣東南方的島嶼，以壯麗的海岸景觀、豐富的自然生態與達悟族文化聞名。",
          enDesc: "An island located southeast of Taiwan, known for its dramatic coastal scenery, rich natural environment, and Tao Indigenous culture." },
        { z: "ㄆ", word: "澎湖雙心石滬", en: "Penghu Twin Hearts Stone Weir", zhuyin: "ㄆㄥˊ ㄏㄨˊ ㄕㄨㄤ ㄒㄧㄣ ㄕˊ ㄏㄨˋ", featured: true, no: "23", page: 53,
          zh: "一座位於臺灣澎湖的傳統捕魚石滬，由兩個心形石滬相連而成，是當地著名的浪漫地標。",
          enDesc: "A traditional fishing weir in Penghu, Taiwan, featuring two connected heart-shaped stone structures and known as a romantic local landmark." },
        { z: "ㄡ", word: "猴硐貓村", en: "Houtong Cat Village", zhuyin: "ㄏㄡˊ ㄉㄨㄥˋ ㄇㄠ ㄘㄨㄣ", featured: false },
        { z: "ㄨ", word: "曬烏魚子", illustration: "assets/illus/wuyuzi.webp", en: "Mullet Roe", zhuyin: "ㄕㄞˋ ㄨ ㄩˊ ㄗˇ", featured: true, no: "26", page: 59,
          zh: "烏魚子以烏魚卵鹽漬、壓製和日曬製成，鹹香濃郁，是臺灣年節與宴席中常見的珍味。",
          enDesc: "Mullet roe is made by salting, pressing, and sun-drying mullet eggs. Its rich, savory flavor makes it a popular delicacy during Taiwanese festivals and banquets." },
        { z: "ㄍ", word: "歌仔戲", en: "Taiwanese Opera", illustration: "assets/illus/opera.webp", zhuyin: "ㄍㄜ ㄗㄞˇ ㄒㄧˋ", featured: false },
        { z: "ㄑ", word: "旗幟", en: "Temple Flags", zhuyin: "ㄑㄧˊ ㄓˋ", featured: false },
        { z: "ㄊ", word: "放天燈", illustration: "assets/illus/tiandeng-red.webp", variants: [{ name: "紅", en: "Red", img: "assets/illus/tiandeng-red.webp", c: "#E2453C" }, { name: "橘", en: "Orange", img: "assets/illus/tiandeng-orange.webp", c: "#E8873A" }, { name: "黃", en: "Yellow", img: "assets/illus/tiandeng-yellow.webp", c: "#D9A520" }, { name: "綠", en: "Green", img: "assets/illus/tiandeng-green.webp", c: "#3FA34D" }, { name: "藍", en: "Blue", img: "assets/illus/tiandeng-blue.webp", c: "#4A7FC0" }, { name: "紫", en: "Purple", img: "assets/illus/tiandeng-purple.webp", c: "#8E6BB5" }, { name: "粉", en: "Pink", img: "assets/illus/tiandeng-pink.webp", c: "#E0457B" }, { name: "白", en: "White", img: "assets/illus/tiandeng-white.webp", c: "#BDBDBD" }], en: "Sky Lantern Release", zhuyin: "ㄈㄤˋ ㄊㄧㄢ ㄉㄥ", featured: true, no: "22", page: 51,
          zh: "一種臺灣傳統祈福活動，將願望寫在天燈上，再點火讓天燈升空，象徵平安與願望成真。",
          enDesc: "A traditional Taiwanese blessing activity where wishes are written on a sky lantern before it is lit and released into the sky, symbolizing hopes for safety and dreams coming true." },
        { z: "ㄙ", word: "賽夏族矮靈祭", en: "Saisiyat Pas-ta'ai Ritual", zhuyin: "ㄙㄞˋ ㄒㄧㄚˋ ㄗㄨˊ ㄞˇ ㄌㄧㄥˊ ㄐㄧˋ", featured: false },
        { z: "ㄛ", word: "辦桌", en: "Bando", zhuyin: "ㄅㄢˋ ㄓㄨㄛ", featured: true, no: "21", page: 49,
          zh: "一種臺灣傳統的宴席文化，在戶外或大型場地擺設圓桌，由總舖師現場料理多道菜餚，常見於婚宴、廟會或節慶場合。",
          enDesc: "A traditional Taiwanese banquet culture featuring round tables and multiple dishes freshly prepared by a banquet chef, often held for weddings, temple celebrations, and festive gatherings." },
        { z: "ㄜ", word: "鵝鑾鼻燈塔", en: "Eluanbi Lighthouse", zhuyin: "ㄜˊ ㄌㄨㄢˊ ㄅㄧˊ ㄉㄥ ㄊㄚˇ", featured: true, no: "28", page: 63,
          zh: "鵝鑾鼻燈塔位於臺灣最南端，以純白色塔身與開闊海景聞名，是墾丁具有代表性的歷史地標。",
          enDesc: "Eluanbi Lighthouse is located at the southern tip of Taiwan, known for its striking white tower and expansive ocean views, and is an iconic historic landmark of Kenting." },
        { z: "ㄏ", word: "合歡山", illustration: "assets/illus/azalea.webp", en: "Hehuanshan", zhuyin: "ㄏㄜˊ ㄏㄨㄢ ㄕㄢ", featured: true, no: "24", page: 55,
          zh: "一座位於臺灣中央山脈的高山，以壯麗的日出、雲海、雪景和高山步道聞名。",
          enDesc: "A high mountain in Taiwan's Central Mountain Range, famous for its spectacular sunrises, seas of clouds, snowy scenery, and alpine trails." },
        { z: "ㄕ", word: "弄獅", en: "Lion Dance", zhuyin: "ㄋㄨㄥˋ ㄕ", featured: false },
        { z: "ㄤ", word: "王船", en: "Royal Boat Ceremony", zhuyin: "ㄨㄤˊ ㄔㄨㄢˊ", featured: false },
        { z: "ㄦ", word: "無耳茶壺山", en: "Teapot Mountain", zhuyin: "ㄨˊ ㄦˇ ㄔㄚˊ ㄏㄨˊ ㄕㄢ", featured: false },
        { z: "ㄋ", word: "野柳女王頭", en: "Queen's Head, Yehliu", zhuyin: "ㄧㄝˇ ㄌㄧㄡˇ ㄋㄩˇ ㄨㄤˊ ㄊㄡˊ", featured: true, no: "27", page: 61,
          zh: "野柳女王頭是臺灣著名的海蝕岩景觀，因岩石輪廓像戴著皇冠的女王側臉而得名，是野柳地質公園的代表性地標。",
          enDesc: "The Queen's Head is a famous sea-eroded rock formation in Taiwan, named for its profile resembling a crowned queen and recognized as an iconic landmark of Yehliu Geopark." },
        { z: "ㄎ", word: "深坑老街", en: "Shenkeng Old Street", zhuyin: "ㄕㄣ ㄎㄥ ㄌㄠˇ ㄐㄧㄝ", featured: false },
        { z: "ㄞ", word: "清水斷崖", en: "Qingshui Cliff", zhuyin: "ㄑㄧㄥ ㄕㄨㄟˇ ㄉㄨㄢˋ ㄧㄞˊ", featured: false },
        { z: "ㄢ", word: "安平古堡", en: "Anping Old Fort", zhuyin: "ㄢ ㄆㄧㄥˊ ㄍㄨˇ ㄅㄠˇ", featured: false }
      ]
    },
    {
      key: "object", glyph: "物", en: "Objects", color: "gold",
      line: "物，承載生活的記憶。", lineEn: "Memories of daily life.",
      items: [
        { z: "ㄅ", word: "叭噗", en: "Ba-pu Ice Cream", zhuyin: "ㄅㄚ ㄆㄨ", featured: false },
        { z: "ㄉ", word: "燈籠", illustration: "assets/illus/lantern.webp", en: "Lantern", zhuyin: "ㄉㄥ ㄌㄨㄥˊ", featured: true, no: "36", page: 79,
          zh: "一種臺灣常見的傳統照明與裝飾物，常以紙或布製成，內部放置光源，常見於廟宇、節慶與傳統活動中。",
          enDesc: "A traditional Taiwanese lighting and decorative object, often made of paper or fabric with a light source inside, commonly seen at temples, festivals, and traditional events." },
        { z: "ㄌ", word: "藍白拖", illustration: "assets/illus/slip-red.webp", variants: [{ name: "紅白・辦桌喜氣款", en: "Red & white · banquet", img: "assets/illus/slip-red.webp", c: "#D62828" }, { name: "綠白・市場清新款", en: "Green & white · market", img: "assets/illus/slip-green.webp", c: "#2E9E3E" }, { name: "黃白・柑仔店陽光款", en: "Yellow & white · corner shop", img: "assets/illus/slip-yellow.webp", c: "#F2C200" }, { name: "粉白・古早甜心款", en: "Pink & white · retro sweet", img: "assets/illus/slip-pink.webp", c: "#F05A9A" }, { name: "黑白・經典款", en: "Black & white · classic", img: "assets/illus/slip-black.webp", c: "#2B2B2B" }], en: "Blue-and-White Slippers", zhuyin: "ㄌㄢˊ ㄅㄞˊ ㄊㄨㄛ", featured: true, no: "35", page: 77,
          zh: "一種臺灣常見的塑膠拖鞋，以藍白配色和簡單耐穿的設計聞名，常見於家庭、市場與日常生活中。",
          enDesc: "A common Taiwanese plastic slipper known for its blue-and-white color scheme and simple, durable design, often seen in homes, markets, and everyday life." },
        { z: "ㄆ", word: "皮影戲", en: "Shadow Puppetry", zhuyin: "ㄆㄧˊ ㄧㄥˇ ㄒㄧˋ", featured: false },
        { z: "ㄡ", word: "斗笠", en: "Bamboo Hat", zhuyin: "ㄉㄡˇ ㄌㄧˋ", featured: false },
        { z: "ㄨ", word: "童玩", en: "Traditional Toys", zhuyin: "ㄊㄨㄥˊ ㄨㄢˊ", featured: false },
        { z: "ㄍ", word: "乖乖", en: "Kuai Kuai Snack", zhuyin: "ㄍㄨㄞ ㄍㄨㄞ", featured: false },
        { z: "ㄑ", word: "彈珠汽水", en: "Marble Soda", zhuyin: "ㄉㄢˋ ㄓㄨ ㄑㄧˋ ㄕㄨㄟˇ", featured: false },
        { z: "ㄊ", word: "大同電鍋", illustration: "assets/illus/tatung.webp", en: "Tatung Electric Rice Cooker", zhuyin: "ㄉㄚˋ ㄊㄨㄥˊ ㄉㄧㄢˋ ㄍㄨㄛ", featured: true, no: "37", page: 81,
          zh: "大同電鍋是臺灣經典的家用電器，以簡單耐用、多功能，以及鮮明的復古配色聞名，陪伴許多家庭數十年。",
          enDesc: "The Tatung rice cooker is an iconic Taiwanese household appliance, known for its simple, durable design, versatile functions, and distinctive retro colors." },
        { z: "ㄙ", word: "紅白塑膠袋", en: "Plastic Bag", zhuyin: "ㄏㄨㄥˊ ㄅㄞˊ ㄙㄨˋ ㄐㄧㄠ ㄉㄞˋ", featured: true, no: "31", page: 69,
          zh: "一種臺灣常見的傳統塑膠提袋，以紅白相間的條紋為特色，耐用又醒目，常用於市場、攤販或日常購物。",
          enDesc: "A traditional Taiwanese plastic shopping bag known for its distinctive red-and-white stripes, commonly used in markets, street stalls, and everyday shopping." },
        { z: "ㄛ", word: "摩托車", en: "Scooter", zhuyin: "ㄇㄛˊ ㄊㄨㄛ ㄔㄜ", featured: false },
        { z: "ㄜ", word: "鴿笭", en: "Pigeon Whistle", zhuyin: "ㄍㄜ ㄌㄧㄥˊ", featured: false },
        { z: "ㄏ", word: "紅龜粿模", en: "Red Tortoise Cake Mold", zhuyin: "ㄏㄨㄥˊ ㄍㄨㄟ ㄍㄨㄛˇ ㄇㄛˊ", featured: false },
        { z: "ㄕ", word: "明星花露水", en: "Ming Sing Floral Water", zhuyin: "ㄇㄧㄥˊ ㄒㄧㄥ ㄏㄨㄚ ㄌㄨˋ ㄕㄨㄟˇ", featured: true, no: "33", page: 73,
          zh: "百年經典的臺灣花露水，以酒精與玫瑰、茉莉等香精調配而成。除散發阿嬤年代的復古香氣外，還常被庶民用來防蚊、止癢與消毒。",
          enDesc: "A century-old classic Taiwanese cologne and multi-purpose remedy, famously used for mosquito repellent, itch relief, and sanitization." },
        { z: "ㄤ", word: "香火袋", en: "Temple Amulet Pouch", zhuyin: "ㄒㄧㄤ ㄏㄨㄛˇ ㄉㄞˋ", featured: true, no: "32", page: 71,
          zh: "香火袋帶在身上，有祈求平安與保佑的寓意。",
          enDesc: "Carrying a temple amulet pouch symbolizes a wish for safety and protection." },
        { z: "ㄦ", word: "千里眼順風耳", illustration: "assets/illus/qianliyan.webp", variants: [{ name: "千里眼", en: "Qianliyan", img: "assets/illus/qianliyan.webp", c: "#1E9A73" }, { name: "順風耳", en: "Shunfenger", img: "assets/illus/shunfenger.webp", c: "#B5302A" }], en: "Qianliyan & Shunfenger", zhuyin: "ㄑㄧㄢ ㄌㄧˇ ㄧㄢˇ ㄕㄨㄣˋ ㄈㄥ ㄦˇ", featured: true, no: "34", page: 75,
          zh: "千里眼與順風耳是媽祖的護法神，一個能看見千里之外，一個能聽見順風傳來的聲音，象徵平安護佑。",
          enDesc: "Guardian deities of Mazu: one sees things thousands of miles away, the other hears sounds carried on the wind. Together they symbolize safety and protection." },
        { z: "ㄋ", word: "農民曆", en: "Farmer's Almanac", zhuyin: "ㄋㄨㄥˊ ㄇㄧㄣˊ ㄌㄧˋ", featured: false },
        { z: "ㄎ", word: "客家花布", en: "Hakka Floral Fabric", zhuyin: "ㄎㄜˋ ㄐㄧㄚ ㄏㄨㄚ ㄅㄨˋ", featured: false },
        { z: "ㄞ", word: "茄芷袋", en: "Nylon Market Bag", zhuyin: "ㄑㄧㄝˊ ㄓˇ ㄉㄞˋ", featured: false },
        { z: "ㄢ", word: "客家藍衫", en: "Hakka Blue Shirt", zhuyin: "ㄎㄜˋ ㄐㄧㄚ ㄌㄢˊ ㄕㄢ", featured: false }
      ]
    }
  ],

  /* 周邊商品：images 先留空 = 顯示佔位框。之後填入 ["assets/merch/xxx-a.jpg","assets/merch/xxx-b.jpg"] */
  merch: [
    { key: "book", name: "特色讀本", en: "Culture Reader", note: "A5・食景物 20 篇・中英日三語", noteEn: "A5 · 20 stories of food, scenery & objects · Chinese / English / Japanese", images: ["assets/merch/book-cover.webp", "assets/merch/book-tatung.webp", "assets/merch/book-penghu.webp", "assets/merch/book-bando.webp"] },
    { key: "charm", name: "注音吊飾", en: "Zhuyin Charm", note: "規格待補", noteEn: "Specs TBC", images: [] },
    { key: "diy", name: "自組飾品", en: "Mix & Match Accessories", note: "規格待補", noteEn: "Specs TBC", images: ["assets/merch/diy-1.webp"] },
    { key: "nfc", name: "NFC 明信片", en: "NFC Postcard", note: "感應後連到對應詞彙頁", noteEn: "Tap to open the matching word page", images: ["assets/merch/nfc-1.webp"] },
    { key: "keycap", name: "紓壓鍵盤吊飾", en: "Keycap Fidget Charm", note: "注音鍵帽・按壓紓壓・規格待補", noteEn: "Zhuyin keycap · press to unwind · specs TBC", images: [] }
  ]
};
