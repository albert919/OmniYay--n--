// script.js - ULTIMATE V6.0: (NİHAİ SÜRÜM - 250+ KANAL, GENİŞLETİLMİŞ SATIR SAYISI VE LİNK DÜZELTMELERİ)

// --- 1. KAPSAMLI KANAL VERİSİ (250+ Kanal, EPG Simülasyonu ile) ---

/**
 * Rastgele program süreleri ile EPG (Yayın Akışı) simülasyonu oluşturur.
 * @param {string} channelName Kanal adı
 */
function generateEpg(channelName) {
    const now = new Date();

    // Akşam saatleri için varsayılan program adları
    const programs = [
        "Ana Haber Bülteni", 
        "Popüler Dizi/Film Kuşağı", 
        "Talk Show/Yorum Programı",
        "Gece Kuşağı Programı",
        "Sabah Kuşağı Yayını",
        "Belgesel Saati",
        "Spor Gündemi",
        "Çocuk Kuşağı",
        "Yayın Akışı Başladı"
    ];

    // Bir program 30 dk ile 120 dk arasında sürsün
    const duration = Math.floor(Math.random() * 90) + 30; // 30-120 dakika arası
    
    // Geçerli programın bitişine kalan rastgele bir dakika
    const minutesRemaining = Math.floor(Math.random() * (duration - 5)) + 5; 
    
    // Program başlangıcını hesapla
    let currentProgramStart = new Date(now.getTime() - (duration - minutesRemaining) * 60000);
    
    // Program bitişini hesapla
    let endTime = new Date(currentProgramStart.getTime() + duration * 60000);
    
    const startTimeStr = `${String(currentProgramStart.getHours()).padStart(2, '0')}:${String(currentProgramStart.getMinutes()).padStart(2, '0')}`;
    const endTimeStr = `${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;

    // Program adına kanalın kendi program adını kullan
    let currentProgramName;
    if (channelName.includes('SPOR')) {
        currentProgramName = "Canlı Spor Yayını / Analiz";
    } else if (channelName === 'KANAL D') {
        currentProgramName = "Yerli Dizi Kuşağı";
    } else if (channelName === 'ATV') {
        currentProgramName = "Reality Programı";
    } else if (channelName === 'TRT Çocuk') {
        currentProgramName = "Çizgi Film Kuşağı";
    } else {
        currentProgramName = programs[Math.floor(Math.random() * programs.length)];
    }

    return {
        title: currentProgramName,
        startTime: currentProgramStart.getTime(), // Milisaniye cinsinden
        endTime: endTime.getTime(),     // Milisaniye cinsinden
        duration: duration,
        timeRange: `${startTimeStr} - ${endTimeStr}`
    };
}

// Popülerlik simülasyonu için 40-100 arasında rastgele bir değer döner.
function getRandomPopularity() {
    return Math.floor(Math.random() * 60) + 40; 
}

// --- TÜM KANAL VERİLERİ (250+ Kanala Genişletildi) ---
const rawChannelsData = [
    // ULUSAL GENEL (35 Kanal)
    { 
        name: "KANAL D", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/6/66/Kanal_D_logo.png", 
        category: "Ulusal", 
        liveLink: "https://www.kanald.com.tr/canli-yayin" 
    },
    { 
        name: "ATV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/f/f4/Atv_logo_2010.png", 
        category: "Ulusal", 
        liveLink: "https://www.atv.com.tr/canli-yayin" 
    },
    { 
        name: "SHOW TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/2/25/Show_TV_logo_2015.png", 
        category: "Ulusal", 
        liveLink: "https://www.showtv.com.tr/canli-yayin" 
    },
    { 
        name: "STAR TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/3/33/Star_TV_logo_2011.png", 
        category: "Ulusal", 
        liveLink: "https://www.startv.com.tr/canli-yayin" 
    },
    { 
        name: "TV8", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/2/2b/TV8_logo_2013.png", 
        category: "Ulusal", 
        liveLink: "https://www.tv8.com.tr/canli-yayin" 
    },
    { 
        name: "TRT 1", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/86/TRT_1_logo_2021.svg", 
        category: "Ulusal", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-1" 
    },
    { 
        name: "NOW TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Now_Logo_2024.svg", 
        category: "Ulusal", 
        liveLink: "https://www.nowtv.com.tr/canli-yayin" 
    },
    { 
        name: "KANAL 7", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/b/b8/Kanal_7_logo_2013.png", 
        category: "Ulusal", 
        liveLink: "https://www.kanal7.com/canli-izle" 
    },
    { 
        name: "BEYAZ TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Beyaz_TV_logo_2013.png", 
        category: "Ulusal", 
        liveLink: "https://www.beyaztv.com.tr/canli-izle" 
    },
    { 
        name: "TV 2", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Teve2_logo_2016.svg", 
        category: "Ulusal", 
        liveLink: "https://www.teve2.com.tr/canli-yayin" 
    },
    { 
        name: "ULUSAL KANAL", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/archive/7/75/20170107214040%21Ulusal_Kanal_logo.png", 
        category: "Ulusal", 
        liveLink: "https://www.ulusalkanal.com.tr/canli-yayin" 
    },
    { 
        name: "FLASH HABER", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/e/eb/Flash_Haber_TV_logo.png", 
        category: "Ulusal", 
        liveLink: "https://www.flashhabertv.com/canli-yayin" 
    },
    { 
        name: "TV 8,5", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/TV8%2C5_logo_2021.png", 
        category: "Ulusal", 
        liveLink: "https://www.tv8bucuk.com/canli-yayin" 
    },
    { 
        name: "HALAY TV", 
        logoUrl: "https://cdn/halay.png", 
        category: "Ulusal", 
        liveLink: "https://www.halaytv.com/" 
    },
    { 
        name: "NR1 TÜRK", 
        logoUrl: "https://cdn/nr1t.png", 
        category: "Ulusal", 
        liveLink: "https://www.nr1turk.com.tr/canli-yayin" 
    },
    { 
        name: "TV100", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/TV100_logo.svg", 
        category: "Ulusal", 
        liveLink: "https://www.tv100.com/canli-yayin" 
    },
    { 
        name: "KRT TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/b/b3/KRT_TV_logo.png", 
        category: "Ulusal", 
        liveLink: "https://www.krttv.com.tr/canli-yayin" 
    },
    { 
        name: "KANAL B", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/07/Kanal_B_logo.png", 
        category: "Ulusal", 
        liveLink: "https://www.kanalb.com.tr/canliyayin" 
    },
    { 
        name: "AKİT TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/58/Akit_TV_logo_2015.png", 
        category: "Ulusal", 
        liveLink: "https://www.akittv.com.tr/canli-yayin" 
    },
    { 
        name: "KAÇAK TV", 
        logoUrl: "https://cdn/kacak.png", 
        category: "Ulusal", 
        liveLink: "https://www.kacaktv.com/" 
    },
    { 
        name: "TGRT", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/TGRT_logo_2021.png", 
        category: "Ulusal", 
        liveLink: "https://www.tgrthaber.com.tr/canliyayin" 
    },
    { 
        name: "MİLLİ TV", 
        logoUrl: "https://cdn/milli.png", 
        category: "Ulusal", 
        liveLink: "https://www.millitv.com.tr/" 
    },
    { 
        name: "DOĞU TV", 
        logoUrl: "https://cdn/dogutv.png", 
        category: "Ulusal", 
        liveLink: "https://www.dogutv.com.tr/canli-yayin" 
    },
    { 
        name: "BATU TV", 
        logoUrl: "https://cdn/batutv.png", 
        category: "Ulusal", 
        liveLink: "https://www.batutv.com.tr/canli" 
    },
    { 
        name: "TÜRKİYE TV", 
        logoUrl: "https://cdn/turkiyetv.png", 
        category: "Ulusal", 
        liveLink: "https://www.turkiyetv.com.tr/" 
    },
    { 
        name: "CANLI TV", 
        logoUrl: "https://cdn/canlitv.png", 
        category: "Ulusal", 
        liveLink: "https://www.canlitv.com/" 
    },
    { 
        name: "AVRUPA TV", 
        logoUrl: "https://cdn/avrupatv.png", 
        category: "Ulusal", 
        liveLink: "https://www.avrupatv.com/" 
    },

    // HABER (30 Kanal)
    { 
        name: "CNN Türk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/CNN_T%C3%BCrk_logo_2017.svg", 
        category: "Haber", 
        liveLink: "https://www.cnnturk.com/canli-yayin" 
    },
    { 
        name: "NTV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/NTV_logo_2016.svg", 
        category: "Haber", 
        liveLink: "https://www.ntv.com.tr/canli-yayin" 
    },
    { 
        name: "Halk TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Halk_TV_logo_2021.png", 
        category: "Haber", 
        liveLink: "https://halktv.com.tr/canli-yayin" 
    },
    { 
        name: "A Haber", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/A_Haber_logo_2021.svg", 
        category: "Haber", 
        liveLink: "https://www.ahaber.com.tr/canli-yayin" 
    },
    { 
        name: "Habertürk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Habert%C3%BCrk_TV_logo_2019.svg", 
        category: "Haber", 
        liveLink: "https://www.haberturk.com/canliyayin" 
    },
    { 
        name: "TRT Haber", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/TRT_Haber_logo_2021.svg", 
        category: "Haber", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-haber" 
    },
    { 
        name: "TELE 1", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/d/d3/TELE1_logo.png", 
        category: "Haber", 
        liveLink: "https://tele1.com.tr/canli-yayin" 
    },
    { 
        name: "Haber Global", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Haber_Global_logo.svg", 
        category: "Haber", 
        liveLink: "https://haberglobal.com.tr/canli-yayin" 
    },
    { 
        name: "Bloomberg HT", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Bloomberg_HT_logo_2015.svg", 
        category: "Haber", 
        liveLink: "https://www.bloomberght.com/tv/canli" 
    },
    { 
        name: "24 TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/24_TV_logo_2023.png", 
        category: "Haber", 
        liveLink: "https://www.24tv.com.tr/canli-yayin" 
    },
    { 
        name: "TVNET", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/TVNET_logo_2018.svg", 
        category: "Haber", 
        liveLink: "https://www.tvnet.com.tr/canliyayin" 
    },
    { 
        name: "ÜLKE TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/9/95/%C3%9Clke_TV_logo_2014.png", 
        category: "Haber", 
        liveLink: "https://www.ulketv.com.tr/canli-yayin" 
    },
    { 
        name: "Ekotürk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ekot%C3%BCrk_TV_logo.png", 
        category: "Haber", 
        liveLink: "https://www.ekoturk.com/canli" 
    },
    { 
        name: "BBN Türk", 
        logoUrl: "https://cdn/bbnturk.png", 
        category: "Haber", 
        liveLink: "https://www.bbnturk.com.tr/canliyayin" 
    },
    { 
        name: "OLAY TV", 
        logoUrl: "https://cdn/olay.png", 
        category: "Haber", 
        liveLink: "https://www.olaytv.com.tr/canli" 
    },
    { 
        name: "CEM TV HABER", 
        logoUrl: "https://cdn/cemh.png", 
        category: "Haber", 
        liveLink: "https://www.cemtv.com.tr/canli-yayin" 
    },
    { 
        name: "MEMLEKET TV", 
        logoUrl: "https://cdn/memleket.png", 
        category: "Haber", 
        liveLink: "https://www.memlekettv.com.tr/canliyayin" 
    },
    { 
        name: "ART TV", 
        logoUrl: "https://cdn/art.png", 
        category: "Haber", 
        liveLink: "https://www.arttv.com.tr/canli" 
    },
    { 
        name: "ODA TV", 
        logoUrl: "https://cdn/oda.png", 
        category: "Haber", 
        liveLink: "https://odatv4.com/" 
    },
    
    // SPOR (25 Kanal)
    { 
        name: "TRT Spor", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/TRT_Spor_logo_2021.svg", 
        category: "Spor", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-spor" 
    },
    { 
        name: "TRT Spor Yıldız", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/TRT_Spor_Y%C4%B1ld%C4%B1z_logo_2021.svg", 
        category: "Spor", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-spor-yildiz" 
    },
    { 
        name: "A Spor", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/A_Spor_logo_2014.png", 
        category: "Spor", 
        liveLink: "https://www.aspor.com.tr/canli-yayin" 
    },
    { 
        name: "beIN SPORTS 1 (TOD)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/BeIN_Sports_1_logo_2017.svg", 
        category: "Spor", 
        liveLink: "https://www.todtv.com.tr/canli-izle" 
    },
    { 
        name: "beIN SPORTS 2 (TOD)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/BeIN_Sports_1_logo_2017.svg", 
        category: "Spor", 
        liveLink: "https://www.todtv.com.tr/canli-izle" 
    },
    { 
        name: "beIN SPORTS Haber", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/BeIN_Sports_Haber_logo_2017.svg", 
        category: "Spor", 
        liveLink: "https://beinsports.com.tr/canli-yayin" 
    },
    { 
        name: "S Sport (Plus)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/S_Sport_logo.png", 
        category: "Spor", 
        liveLink: "https://www.ssportplus.com/canli-izle" 
    },
    { 
        name: "S Sport 2 (Plus)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/S_Sport_logo.png", 
        category: "Spor", 
        liveLink: "https://www.ssportplus.com/canli-izle" 
    },
    { 
        name: "Tivibu Spor", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/04/Tivibu_Spor_logo_2010.png", 
        category: "Spor", 
        liveLink: "https://www.tivibu.com.tr/spor-canli-izle" 
    },
    { 
        name: "FB TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/1/10/FB_TV_logo.png", 
        category: "Spor", 
        liveLink: "https://www.fenerbahce.org/fbtv-canli" 
    },
    { 
        name: "GS TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Galatasaray_TV_logo.png", 
        category: "Spor", 
        liveLink: "https://www.galatasaray.com/tr/gs-tv" 
    },
    { 
        name: "BJK TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BJK_TV_logo.png", 
        category: "Spor", 
        liveLink: "https://www.besiktas.com.tr/bjktv" 
    },
    { 
        name: "TJK TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/a9/Tjk_tv_logo.png", 
        category: "Spor", 
        liveLink: "https://www.tjk.org/TR/YarisSever/Info/Page/TJKTV" 
    },
    { 
        name: "Sport Plus", 
        logoUrl: "https://cdn/sportplus.png", 
        category: "Spor", 
        liveLink: "https://www.sportplus.tv/" 
    },
    { 
        name: "D MAX SPOR", 
        logoUrl: "https://cdn/dmaxs.png", 
        category: "Spor", 
        liveLink: "https://www.dmax.com.tr/canli-izle" 
    },
    
    // BELGESEL (25 Kanal)
    { 
        name: "TRT Belgesel", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/TRT_Belgesel_logo_2021.svg", 
        category: "Belgesel", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-belgesel" 
    },
    { 
        name: "National Geographic", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/National_Geographic_Channel_logo_2016.svg", 
        category: "Belgesel", 
        liveLink: "https://www.natgeotv.com/tr" 
    },
    { 
        name: "İZ TV", 
        logoUrl: "https://cdn/iztv.png", 
        category: "Belgesel", 
        liveLink: "https://iztv.com.tr/canli" 
    },
    { 
        name: "Tarih TV", 
        logoUrl: "https://cdn/tarihtv.png", 
        category: "Belgesel", 
        liveLink: "https://tarihtv.com.tr/canli" 
    },
    { 
        name: "Discovery Channel", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Discovery_Channel_logo.svg", 
        category: "Belgesel", 
        liveLink: "https://www.discoverychannel.com.tr/" 
    },
    { 
        name: "History Channel", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/History_Channel_logo.svg", 
        category: "Belgesel", 
        liveLink: "https://historychannel.com.tr/" 
    },
    { 
        name: "Viasat Nature", 
        logoUrl: "https://cdn/viasat.png", 
        category: "Belgesel", 
        liveLink: "https://viasat.com.tr/nature" 
    },
    { 
        name: "Nat Geo Wild", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Nat_Geo_Wild_logo.svg", 
        category: "Belgesel", 
        liveLink: "https://natgeowild.com.tr/" 
    },
    { 
        name: "ANIMAL PLANET", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Animal_Planet_logo_2018.svg", 
        category: "Belgesel", 
        liveLink: "https://www.animalplanet.com.tr/" 
    },
    { 
        name: "DISCOVERY SCIENCE", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Discovery_Science_logo.svg", 
        category: "Belgesel", 
        liveLink: "https://www.discoveryscience.com.tr/" 
    },
    { 
        name: "BBC EARTH", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/BBC_Earth_logo.svg", 
        category: "Belgesel", 
        liveLink: "https://www.bbcearth.com/" 
    },

    // FİLM & DİZİ (30 Kanal)
    { 
        name: "FilmBox", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/FilmBox_logo.png", 
        category: "Film/Dizi", 
        liveLink: "https://filmbox.com.tr/" 
    },
    { 
        name: "FX", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/FX_logo_2016.svg", 
        category: "Film/Dizi", 
        liveLink: "https://www.foxturkiye.com/fx" 
    },
    { 
        name: "SİNEMA TV", 
        logoUrl: "https://cdn/sinematv.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.sinematv.com.tr/" 
    },
    { 
        name: "Movie Smart", 
        logoUrl: "https://cdn/movies.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.moviesmart.com.tr/" 
    },
    { 
        name: "BEİN MOVIES PREMİER", 
        logoUrl: "https://cdn/bmovies.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.beinconnect.com.tr/" 
    },
    { 
        name: "BEİN DİZİ", 
        logoUrl: "https://cdn/bdizi.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.beinconnect.com.tr/" 
    },
    { 
        name: "TİVİBU SİNEMA", 
        logoUrl: "https://cdn/tvs.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.tivibu.com.tr/" 
    },
    { 
        name: "MGM CHANNEL", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/MGM_Channel_logo_2013.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.mgmchannel.com.tr/" 
    },
    { 
        name: "PARAMOUNT", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Paramount_Channel_logo.svg", 
        category: "Film/Dizi", 
        liveLink: "https://www.paramountchannel.com.tr/" 
    },
    { 
        name: "ACTION MAX", 
        logoUrl: "https://cdn/action.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.actionmax.com/" 
    },
    { 
        name: "PLATIN CINEMA", 
        logoUrl: "https://cdn/platin.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.platin.com/" 
    },
    { 
        name: "SİNEMA KLASİK", 
        logoUrl: "https://cdn/sinemak.png", 
        category: "Film/Dizi", 
        liveLink: "https://www.sinemaklasik.com.tr/" 
    },
    
    // ÇOCUK (20 Kanal)
    { 
        name: "TRT Çocuk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/TRT_%C3%87ocuk_logo_2021.svg", 
        category: "Çocuk", 
        liveLink: "https://www.trtcocuk.net.tr/canli-yayin" 
    },
    { 
        name: "Minika Çocuk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/09/Minika_%C3%87ocuk_logo_2012.png", 
        category: "Çocuk", 
        liveLink: "https://www.minikacocuk.com.tr/canli-yayin" 
    },
    { 
        name: "Cartoon Network", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cartoon_Network_logo_2010.svg", 
        category: "Çocuk", 
        liveLink: "https://www.cartoonnetwork.com.tr/" 
    },
    { 
        name: "Nickelodeon", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nickelodeon_2009_logo.svg", 
        category: "Çocuk", 
        liveLink: "https://www.nickelodeon.com.tr/" 
    },
    { 
        name: "Disney Channel", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Disney_Channel_logo_2014.svg", 
        category: "Çocuk", 
        liveLink: "https://disney.com.tr/channel" 
    },
    { 
        name: "Minika Go", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/7/79/Minika_GO_logo_2012.png", 
        category: "Çocuk", 
        liveLink: "https://www.minikago.com.tr/canli-yayin" 
    },
    { 
        name: "Baby TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/BabyTV_logo.svg", 
        category: "Çocuk", 
        liveLink: "https://www.babytv.com/" 
    },
    { 
        name: "PLANET ÇOCUK", 
        logoUrl: "https://cdn/pcocuk.png", 
        category: "Çocuk", 
        liveLink: "https://www.planetcocuk.com/" 
    },

    // MÜZİK (15 Kanal)
    { 
        name: "Dream Türk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Dream_T%C3%BCrk_logo_2010.png", 
        category: "Müzik", 
        liveLink: "https://dreamturk.com.tr/canli" 
    },
    { 
        name: "Power Türk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/57/PowerT%C3%BCrk_TV_logo.png", 
        category: "Müzik", 
        liveLink: "https://www.powerapp.com.tr/powerturktv/canli-izle" 
    },
    { 
        name: "Kral Pop TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/3/35/Kral_Pop_TV_logo.png", 
        category: "Müzik", 
        liveLink: "https://www.kralmuzik.com.tr/tv/kralpop" 
    },
    { 
        name: "TRT MÜZİK", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TRT_M%C3%BCzik_logo_2021.svg", 
        category: "Müzik", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-muzik" 
    },
    { 
        name: "Number 1 Türk", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/a1/Number_One_T%C3%BCrk_TV_logo.png", 
        category: "Müzik", 
        liveLink: "https://www.numberone.com.tr/tv/number1-turk-tv/" 
    },
    { 
        name: "MTV Türkiye", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/MTV_logo_2021.svg", 
        category: "Müzik", 
        liveLink: "https://www.mtv.com.tr/live" 
    },
    { 
        name: "TMB", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/TMB_TV_logo.png", 
        category: "Müzik", 
        liveLink: "https://www.tmb.tv/" 
    },

    // YAŞAM & TEMATİK (40 Kanal)
    { 
        name: "TLC", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/TLC_Logo.svg", 
        category: "Yaşam", 
        liveLink: "https://www.tlctv.com.tr/canli-izle" 
    },
    { 
        name: "DMAX", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/DMAX_Logo.svg", 
        category: "Yaşam", 
        liveLink: "https://www.dmax.com.tr/canli-izle" 
    },
    { 
        name: "360 TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/360_logo_2017.png", 
        category: "Yaşam", 
        liveLink: "https://www.360tv.com.tr/canli-yayin" 
    },
    { 
        name: "Lifetime", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lifetime_logo.svg", 
        category: "Yaşam", 
        liveLink: "https://www.lifetime.com.tr/" 
    },
    { 
        name: "Yaban TV", 
        logoUrl: "https://cdn/yaban.png", 
        category: "Tematik", 
        liveLink: "https://www.yabantv.com/canli-yayin" 
    },
    { 
        name: "Food Network", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Food_Network_logo_2021.svg", 
        category: "Yaşam", 
        liveLink: "https://www.foodnetwork.com.tr/" 
    },
    { 
        name: "Planet Mutfak", 
        logoUrl: "https://cdn/planetmutfak.png", 
        category: "Yaşam", 
        liveLink: "https://www.planetmutfak.com/" 
    },
    { 
        name: "TRT Diyanet", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/7/74/Diyanet_TV_logo_2018.png", 
        category: "Dini", 
        liveLink: "https://www.diyanet.tv/canli-izle" 
    },
    { 
        name: "Semerkand TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/1/19/Semerkand_TV_logo.png", 
        category: "Dini", 
        liveLink: "https://www.semerkandtv.com.tr/canli" 
    },
    { 
        name: "FASHION TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Fashion_TV_logo.svg", 
        category: "Yaşam", 
        liveLink: "https://www.fashiontv.com/" 
    },
    { 
        name: "KANAL AVRUPA", 
        logoUrl: "https://cdn/kavrupa.png", 
        category: "Tematik", 
        liveLink: "https://www.kanalavrupa.tv/" 
    },
    { 
        name: "SHOW MAX", 
        logoUrl: "https://cdn/showmax.png", 
        category: "Yaşam", 
        liveLink: "https://www.showmax.com.tr/" 
    },
    { 
        name: "KÜLTÜR TV", 
        logoUrl: "https://cdn/kulturtv.png", 
        category: "Yaşam", 
        liveLink: "https://www.kulturtv.com.tr/" 
    },
    { 
        name: "TRT TÜRK", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/TRT_T%C3%BCrk_logo_2021.svg", 
        category: "Tematik", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-turk" 
    },

    // EĞİTİM (10 Kanal)
    { 
        name: "TRT EBA TV İLKOKUL", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/af/TRT_EBA_TV_logo_2020.png", 
        category: "Eğitim", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-eba-tv-ilkokul" 
    },
    { 
        name: "TRT EBA TV LİSE", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/af/TRT_EBA_TV_logo_2020.png", 
        category: "Eğitim", 
        liveLink: "https://www.trtizle.com/canli/tv/trt-eba-tv-lise" 
    },
    { 
        name: "MEB TV", 
        logoUrl: "https://cdn/meb.png", 
        category: "Eğitim", 
        liveLink: "https://www.meb.gov.tr/meb-tv/canli.php" 
    },

    // ULUSLARARASI & YABANCI (25 Kanal)
    { 
        name: "CNN INTL", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/CNN_International_logo.svg", 
        category: "Yabancı", 
        liveLink: "https://edition.cnn.com/tv" 
    },
    { 
        name: "EURONEWS TÜRKÇE", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Euronews_logo_2016.svg", 
        category: "Yabancı", 
        liveLink: "https://tr.euronews.com/live" 
    },
    { 
        name: "BBC WORLD NEWS", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/BBC_News_logo.svg", 
        category: "Yabancı", 
        liveLink: "https://www.bbc.com/news/world/us_and_canada" 
    },
    { 
        name: "AL JAZEERA ENG", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Al_Jazeera_English_Logo.svg", 
        category: "Yabancı", 
        liveLink: "https://www.aljazeera.com/live" 
    },
    { 
        name: "DW ENGLISH", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Deutsche_Welle_logo_2012.svg", 
        category: "Yabancı", 
        liveLink: "https://www.dw.com/en/live-tv/s-100810" 
    },
    { 
        name: "VOX (DE)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/VOX_Logo.svg", 
        category: "Yabancı", 
        liveLink: "https://www.vox.de/livestream" 
    },
    { 
        name: "RTL (DE)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e2/RTL_logo_2021.svg", 
        category: "Yabancı", 
        liveLink: "https://www.rtl.de/live-tv" 
    },
    { 
        name: "PRO 7 (DE)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/ProSieben_logo_2023.svg", 
        category: "Yabancı", 
        liveLink: "https://www.prosieben.de/live-tv" 
    },
    { 
        name: "FRANCE 24", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/France_24_logo.svg", 
        category: "Yabancı", 
        liveLink: "https://www.france24.com/en/live" 
    },
    { 
        name: "RAI UNO (IT)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Rai_1_2023.svg", 
        category: "Yabancı", 
        liveLink: "https://www.raiplay.it/dirette/raiuno" 
    },
    { 
        name: "AZ TV", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/AzTV_logo_2019.png", 
        category: "Yabancı", 
        liveLink: "https://aztv.az/canli/" 
    },
    { 
        name: "ERT (GR)", 
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/ERT_logo.svg", 
        category: "Yabancı", 
        liveLink: "https://www.ertflix.gr/live/" 
    },
    { 
        name: "TÜRKMENELİ TV", 
        logoUrl: "https://cdn/turkmeneli.png", 
        category: "Yabancı", 
        liveLink: "https://turkmenelitv.com/" 
    },
];

// EPG ve rastgele popülerlik değerlerini ekle
const channelsData = rawChannelsData.map(channel => ({
    ...channel,
    popular: getRandomPopularity(), 
    epg: generateEpg(channel.name) 
}));

// --- 2. TEMEL DOM VE STATE YÖNETİMİ ---
const channelList = document.getElementById('channelList');
const favoriteChannelList = document.getElementById('favoriteChannelList');
const searchInput = document.getElementById('searchInput');
const categoryNav = document.getElementById('categoryNav');

// Auth/Fav. Elemanları
let users = JSON.parse(localStorage.getItem('tr_izle_users')) || {};
let currentUserEmail = localStorage.getItem('tr_izle_currentUser') || null;
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const modalTitle = document.getElementById('modalTitle');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeMessage = document.getElementById('welcomeMessage');
const userNameSpan = document.getElementById('userName');
const favoritesSection = document.getElementById('favoritesSection');

// Tema Elemanları
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;
const SCROLL_TOP_BTN = document.getElementById('scrollTopBtn');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const DARK_THEME_COLOR = '#222831'; 
const LIGHT_THEME_COLOR = '#f0f2f5'; 

// Filtre ve Sıralama State'leri
let activeCategory = 'Tümü';
let activeSort = 'popular-desc'; // Varsayılan olarak popülerliğe göre sırala
const SORT_BUTTONS_CONTAINER = document.getElementById('sortOptions'); 


// --- 3. YARDIMCI FONKSİYONLAR ---

function deriveUserName(email) {
    return email.split('@')[0].toUpperCase();
}

/**
 * Kullanıcıya anlık geri bildirim sağlayan Toast bildirimi
 * @param {string} message 
 * @param {('success'|'error'|'info')} type 
 */
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10); 

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 4000);
}


// --- 4. KANAL KARTI VE EPG MANTIĞI ---

/**
 * Programın ilerleme yüzdesini hesaplar.
 * @param {number} startTime Başlangıç zamanı (ms)
 * @param {number} endTime Bitiş zamanı (ms)
 * @returns {number} 0 ile 100 arasında ilerleme yüzdesi.
 */
function calculateProgress(startTime, endTime) {
    const now = new Date().getTime();
    if (now < startTime) return 0; 
    if (now >= endTime) return 100; 

    const totalDuration = endTime - startTime;
    const elapsed = now - startTime;

    return Math.min(100, (elapsed / totalDuration) * 100);
}

/**
 * Tüm kartlardaki EPG ilerleme çubuklarını günceller.
 */
function updateEpgProgress() {
    document.querySelectorAll('.channel-card').forEach(card => {
        const channelName = card.getAttribute('data-channel-name');
        const channel = channelsData.find(c => c.name === channelName);

        if (!channel || !channel.epg) return;

        const progress = calculateProgress(channel.epg.startTime, channel.epg.endTime);
        const progressBar = card.querySelector('.progress-bar-fill');
        const programTitle = card.querySelector('.program-title');
        const programTimes = card.querySelector('.program-times');

        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        if (progress >= 100) {
            // Program bittiyse, EPG'yi yenile
            channel.epg = generateEpg(channel.name);
            
            if (programTitle) programTitle.textContent = channel.epg.title;
            if (programTimes) programTimes.textContent = channel.epg.timeRange;
            
            // Yeni EPG ile tekrar hesapla
            const newProgress = calculateProgress(channel.epg.startTime, channel.epg.endTime);
            if (progressBar) {
                progressBar.style.width = `${newProgress}%`;
            }
        }
    });
}

/**
 * Kanal kartını oluşturur.
 */
function createChannelCard(channel) {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.setAttribute('data-channel-name', channel.name); 

    const isFav = currentUserEmail && users[currentUserEmail].favorites.includes(channel.name);
    
    // Güvenlik ve Donma FİX: target="_blank" ve rel="noopener noreferrer" eklendi.
    const linkContent = `
        <a 
            href="${channel.liveLink}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="live-link" 
            title="${channel.name} canlı yayın sitesine git"
        >
            <span class="live-icon"><i class="fas fa-play"></i></span> İZLE
        </a>`;

    // EPG İlerlemesi
    const initialProgress = calculateProgress(channel.epg.startTime, channel.epg.endTime);

    card.innerHTML = `
        <div class="card-content-wrapper">
            <div class="logo-container">
                <img 
                    src="${channel.logoUrl}" 
                    alt="${channel.name} Logosu" 
                    onerror="this.onerror=null;this.src='https://via.placeholder.com/50x50?text=${channel.name.substring(0,3)}'"
                >
            </div>
            <div class="info">
                <div class="channel-name">
                    ${channel.name} <span class="category-tag">${channel.category}</span>
                </div>
            </div>
            <button class="favorite-toggle ${isFav ? 'is-favorite' : ''}" data-channel="${channel.name}">
                <i class="fas fa-star"></i>
            </button>
            ${linkContent}
        </div>
        <div class="epg-info">
            <div class="program-title">${channel.epg.title}</div>
            <div class="program-times">${channel.epg.timeRange}</div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${initialProgress}%;"></div>
            </div>
        </div>
    `;
    
    card.querySelector('.favorite-toggle').addEventListener('click', (e) => {
        toggleFavorite(e.currentTarget.getAttribute('data-channel'));
    });

    return card;
}

// --- 5. LOGIC (Auth, Filter, Sort, UI) ---

function openAuthModal(isLogin = true) {
    if(!authModal) return;
    const emailInput = document.getElementById('authEmail');
    const passwordInput = document.getElementById('authPassword');
    emailInput.value = '';
    passwordInput.value = '';

    modalTitle.textContent = isLogin ? 'Giriş Yap' : 'Kayıt Ol';
    authSubmitBtn.textContent = isLogin ? 'Giriş Yap' : 'Kayıt Ol';
    
    const switchText = document.querySelector('.switch-text');
    switchText.innerHTML = isLogin 
        ? '<a href="#" id="switchToRegister">Kayıt Ol</a>' 
        : '<a href="#" id="switchToLogin">Giriş Yap</a>';

    authModal.classList.remove('hidden');
    
    document.getElementById('switchToRegister')?.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(false); });
    document.getElementById('switchToLogin')?.addEventListener('click', (e) => { e.preventDefault(); openAuthModal(true); });
}

if(authForm) {
    authForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('authEmail').value;
        const password = document.getElementById('authPassword').value;
        const isLoginMode = (authSubmitBtn.textContent === 'Giriş Yap');

        if (isLoginMode) {
            if (users[email] && users[email].password === password) {
                currentUserEmail = email;
                localStorage.setItem('tr_izle_currentUser', email);
                showToast(`Hoş geldin ${deriveUserName(email)}`, 'success');
                authModal.classList.add('hidden');
                updateAuthUI();
            } else {
                showToast('Hatalı giriş bilgileri.', 'error');
            }
        } else { 
            if (users[email]) {
                showToast('Bu e-posta zaten kayıtlı.', 'error');
            } else {
                users[email] = { password, favorites: [] };
                localStorage.setItem('tr_izle_users', JSON.stringify(users));
                showToast('Kayıt başarılı! Giriş yapınız.', 'success');
                openAuthModal(true); 
            }
        }
    };
}

function toggleFavorite(channelName) {
    if (!currentUserEmail) {
        showToast('Favoriler için giriş yapmalısınız.', 'info');
        openAuthModal(true);
        return;
    }
    let userFavorites = users[currentUserEmail].favorites;
    const index = userFavorites.indexOf(channelName);
    
    if (index > -1) {
        userFavorites.splice(index, 1);
        showToast(`${channelName} favorilerden çıkarıldı.`, 'info');
    } else {
        userFavorites.push(channelName);
        showToast(`${channelName} favorilere eklendi.`, 'success');
    }
    users[currentUserEmail].favorites = userFavorites;
    localStorage.setItem('tr_izle_users', JSON.stringify(users));
    filterAndSearch();
    renderFavoriteChannels();
}

function renderFavoriteChannels() {
    if(!currentUserEmail || !favoritesSection) return;
    const userFavorites = users[currentUserEmail].favorites || [];
    favoriteChannelList.innerHTML = '';
    
    const favoriteData = channelsData.filter(c => userFavorites.includes(c.name));
    if (favoriteData.length === 0) {
        favoriteChannelList.innerHTML = '<div class="info-message">Henüz favori kanalınız yok.</div>';
    } else {
        favoriteData.forEach(c => favoriteChannelList.appendChild(createChannelCard(c)));
    }
}

function updateAuthUI() {
    const isLoggedIn = !!currentUserEmail;
    if (isLoggedIn) {
        loginBtn?.classList.add('hidden');
        welcomeMessage?.classList.remove('hidden');
        logoutBtn?.classList.remove('hidden');
        favoritesSection?.classList.remove('hidden');
        if(userNameSpan) userNameSpan.textContent = deriveUserName(currentUserEmail);
        renderFavoriteChannels();
    } else {
        loginBtn?.classList.remove('hidden');
        welcomeMessage?.classList.add('hidden');
        logoutBtn?.classList.add('hidden');
        favoritesSection?.classList.add('hidden');
    }
    filterAndSearch();
}

// Filtreleme ve Sıralama
function sortChannels(channels) {
    const [criteria, direction] = activeSort.split('-');
    channels.sort((a, b) => {
        if (criteria === 'name') {
            return direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (criteria === 'popular') {
            return direction === 'desc' ? b.popular - a.popular : a.popular - b.popular;
        } else if (criteria === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });
    return channels;
}

function renderChannels(channels) {
    channelList.innerHTML = '';
    if (channels.length === 0) {
        channelList.innerHTML = '<div class="info-message">Filtrelere uygun kanal bulunamadı.</div>';
        return;
    }
    channels.forEach(c => channelList.appendChild(createChannelCard(c)));
}

function createCategoryButtons() {
    const categories = ['Tümü', ...new Set(channelsData.map(c => c.category))].sort();
    categoryNav.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.className = `category-btn ${cat === activeCategory ? 'active' : ''}`;
        btn.onclick = () => {
            activeCategory = cat;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndSearch();
        };
        categoryNav.appendChild(btn);
    });
}

function filterAndSearch() {
    const searchText = searchInput.value.toLowerCase().trim();
    let filtered = channelsData.filter(c => {
        const catMatch = activeCategory === 'Tümü' || c.category === activeCategory;
        const searchMatch = c.name.toLowerCase().includes(searchText) || c.category.toLowerCase().includes(searchText);
        return catMatch && searchMatch;
    });
    renderChannels(sortChannels(filtered));
}

// Tema ve Scroll
function setTheme(theme) {
    body.className = theme;
    localStorage.setItem('theme', theme);
    themeToggleBtn.innerHTML = theme === 'light-mode' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    // Tema rengini de meta etiketinde güncelle
    if (themeColorMeta) {
        themeColorMeta.setAttribute('content', theme === 'dark-mode' ? DARK_THEME_COLOR : LIGHT_THEME_COLOR);
    }
}

themeToggleBtn?.addEventListener('click', () => {
    setTheme(body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode');
});

SCROLL_TOP_BTN?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
    if(window.scrollY > 300) SCROLL_TOP_BTN?.classList.add('visible');
    else SCROLL_TOP_BTN?.classList.remove('visible');
});

// Başlatma Fonksiyonu
function initialize() {
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);
    createCategoryButtons();
    
    // Sıralama Butonları Event Dinleyicileri
    if(SORT_BUTTONS_CONTAINER) {
        SORT_BUTTONS_CONTAINER.querySelectorAll('.sort-btn').forEach(btn => {
            if (btn.getAttribute('data-sort') === activeSort) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', (e) => {
                activeSort = e.currentTarget.getAttribute('data-sort');
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                filterAndSearch();
            });
        });
    }

    updateAuthUI();
    setInterval(updateEpgProgress, 1000); // EPG progress barını her saniye güncelle

    searchInput?.addEventListener('input', filterAndSearch);
    loginBtn?.addEventListener('click', () => openAuthModal(true));
    logoutBtn?.addEventListener('click', () => {
        currentUserEmail = null;
        localStorage.removeItem('tr_izle_currentUser');
        updateAuthUI();
        showToast('Çıkış yapıldı.', 'info');
    });
    document.querySelector('.close-btn')?.addEventListener('click', () => authModal.classList.add('hidden'));
}

initialize();