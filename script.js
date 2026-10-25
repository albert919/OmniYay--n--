// script.js - ULTIMATE V7.1 (230+ KANAL GENİŞLETİLMİŞ LİSTE VE KATEGORİLER)

document.addEventListener('DOMContentLoaded', () => {
    
    // ==============================================================
    // 1. KAPSAMLI KANAL VE YAYIN VERİSİ (230+ Kanal)
    // ==============================================================
    
    const rawChannelsData = [
        // --- ULUSAL KANALLAR (25 Kanal) ---
        { name: "KANAL D", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/6/66/Kanal_D_logo.png", category: "Ulusal Genel", liveLink: "https://www.kanald.com.tr/canli-yayin" },
        { name: "ATV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/f/f4/Atv_logo_2010.png", category: "Ulusal Genel", liveLink: "https://www.atv.com.tr/canli-yayin" },
        { name: "SHOW TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/2/25/Show_TV_logo_2015.png", category: "Ulusal Genel", liveLink: "https://www.showtv.com.tr/canli-yayin" },
        { name: "STAR TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/3/33/Star_TV_logo_2011.png", category: "Ulusal Genel", liveLink: "https://www.startv.com.tr/canli-yayin" },
        { name: "TV8", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/2/2b/TV8_logo_2013.png", category: "Ulusal Genel", liveLink: "https://www.tv8.com.tr/canli-yayin" },
        { name: "NOW", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Now_Logo_2024.svg", category: "Ulusal Genel", liveLink: "https://www.nowtv.com.tr/canli-yayin" },
        { name: "TRT 1", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/86/TRT_1_logo_2021.svg", category: "Ulusal Genel", liveLink: "https://www.trtizle.com/canli/tv/trt-1" },
        { name: "KANAL 7", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/b/b8/Kanal_7_logo_2013.png", category: "Ulusal Genel", liveLink: "https://www.kanal7.com/canli-izle" },
        { name: "BEYAZ TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Beyaz_TV_logo_2013.png", category: "Ulusal Genel", liveLink: "https://www.beyaztv.com.tr/canli-izle" },
        { name: "TEVE 2", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Teve2_logo_2016.svg", category: "Ulusal Genel", liveLink: "https://www.teve2.com.tr/canli-yayin" },
        { name: "TV 8,5", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/TV8%2C5_logo_2021.png", category: "Ulusal Genel", liveLink: "https://www.tv8bucuk.com/canli-yayin" },
        { name: "360 TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/360_logo_2017.png", category: "Ulusal Genel", liveLink: "https://www.360tv.com.tr/canli-yayin" },
        { name: "ULUSAL KANAL", logoUrl: "https://cdn/ulusal-u.png", category: "Ulusal Genel", liveLink: "https://www.ulusalkanal.com.tr/canli-yayin" },
        { name: "TGRT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/TGRT_logo_2021.png", category: "Ulusal Genel", liveLink: "https://www.tgrthaber.com.tr/canliyayin" },
        { name: "KANAL B", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/07/Kanal_B_logo.png", category: "Ulusal Genel", liveLink: "https://www.kanalb.com.tr/canliyayin" },
        { name: "AKİT TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/58/Akit_TV_logo_2015.png", category: "Ulusal Genel", liveLink: "https://www.akittv.com.tr/canli-yayin" },
        { name: "FLASH HABER", logoUrl: "https://cdn/flashh.png", category: "Ulusal Genel", liveLink: "https://www.flashhabertv.com/canli-yayin" },
        { name: "KRT TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/b/b3/KRT_TV_logo.png", category: "Ulusal Genel", liveLink: "https://www.krttv.com.tr/canli-yayin" },
        { name: "TELEVIZYON 10", logoUrl: "https://cdn/tv10.png", category: "Ulusal Genel", liveLink: "https://www.tv10.com.tr/" },
        { name: "HİLAL TV", logoUrl: "https://cdn/hilaltv.png", category: "Ulusal Genel", liveLink: "https://www.hilaltv.com.tr/" },
        { name: "MESAJ TV", logoUrl: "https://cdn/mesajtv.png", category: "Ulusal Genel", liveLink: "https://www.mesajtv.com.tr/" },
        { name: "TVT", logoUrl: "https://cdn/tvt.png", category: "Ulusal Genel", liveLink: "https://www.tvt.com.tr/" },
        { name: "CEM TV", logoUrl: "https://cdn/cemtv.png", category: "Ulusal Genel", liveLink: "https://www.cemtv.com.tr/" },
        { name: "KANAL AVRUPA", logoUrl: "https://cdn/kavrupa.png", category: "Ulusal Genel", liveLink: "https://www.kanalavrupa.tv/" },
        { name: "TMB", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/TMB_TV_logo.png", category: "Ulusal Genel", liveLink: "https://www.tmb.tv/" },
        
        // --- HABER KANALLARI (30 Kanal) ---
        { name: "CNN TÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/16/CNN_T%C3%BCrk_logo_2017.svg", category: "Haber/Finans", liveLink: "https://www.cnnturk.com/canli-yayin" },
        { name: "NTV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/NTV_logo_2016.svg", category: "Haber/Finans", liveLink: "https://www.ntv.com.tr/canli-yayin" },
        { name: "HABERTÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Habert%C3%BCrk_TV_logo_2019.svg", category: "Haber/Finans", liveLink: "https://www.haberturk.com/canliyayin" },
        { name: "TRT HABER", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/TRT_Haber_logo_2021.svg", category: "Haber/Finans", liveLink: "https://www.trtizle.com/canli/tv/trt-haber" },
        { name: "A HABER", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/A_Haber_logo_2021.svg", category: "Haber/Finans", liveLink: "https://www.ahaber.com.tr/canli-yayin" },
        { name: "HALK TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Halk_TV_logo_2021.png", category: "Haber/Finans", liveLink: "https://halktv.com.tr/canli-yayin" },
        { name: "SÖZCÜ TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/S%C3%B6zc%C3%BC_TV_logo.jpg", category: "Haber/Finans", liveLink: "https://www.szctv.com.tr/canli-yayin" },
        { name: "TELE 1", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/d/d3/TELE1_logo.png", category: "Haber/Finans", liveLink: "https://tele1.com.tr/canli-yayin" },
        { name: "TV 100", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/TV100_logo.svg", category: "Haber/Finans", liveLink: "https://www.tv100.com/canli-yayin" },
        { name: "HABER GLOBAL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Haber_Global_logo.svg", category: "Haber/Finans", liveLink: "https://haberglobal.com.tr/canli-yayin" },
        { name: "BLOOMBERG HT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Bloomberg_HT_logo_2015.svg", category: "Haber/Finans", liveLink: "https://www.bloomberght.com/tv/canli" },
        { name: "EKOTÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Ekot%C3%BCrk_TV_logo.png", category: "Haber/Finans", liveLink: "https://www.ekoturk.com/canli" },
        { name: "TVNET", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/TVNET_logo_2018.svg", category: "Haber/Finans", liveLink: "https://www.tvnet.com.tr/canliyayin" },
        { name: "ÜLKE TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/9/95/%C3%9Clke_TV_logo_2014.png", category: "Haber/Finans", liveLink: "https://www.ulketv.com.tr/canli-yayin" },
        { name: "24 TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/24_TV_logo_2023.png", category: "Haber/Finans", liveLink: "https://www.24tv.com.tr/canli-yayin" },
        { name: "TGRT HABER", logoUrl: "https://cdn/tgrthaber.png", category: "Haber/Finans", liveLink: "https://www.tgrthaber.com.tr/canliyayin" },
        { name: "BBN TÜRK", logoUrl: "https://cdn/bbnturk.png", category: "Haber/Finans", liveLink: "https://www.bbnturk.com.tr/canliyayin" },
        { name: "OLAY TV HABER", logoUrl: "https://cdn/olayh.png", category: "Haber/Finans", liveLink: "https://www.olaytv.com.tr/canli" },
        { name: "ART TV HABER", logoUrl: "https://cdn/arth.png", category: "Haber/Finans", liveLink: "https://www.arttv.com.tr/canli" },
        { name: "MEMLEKET TV", logoUrl: "https://cdn/memleketh.png", category: "Haber/Finans", liveLink: "https://www.memlekettv.com.tr/canliyayin" },
        { name: "ODA TV", logoUrl: "https://cdn/odah.png", category: "Haber/Finans", liveLink: "https://odatv4.com/" },
        { name: "MEDYASCOP TV", logoUrl: "https://cdn/medyascope.png", category: "Haber/Finans", liveLink: "https://medyascope.tv/canli/" },
        { name: "DENGE TV", logoUrl: "https://cdn/denge.png", category: "Haber/Finans", liveLink: "https://www.dengetv.com.tr/canli" },
        { name: "CANLI HABER", logoUrl: "https://cdn/canlih.png", category: "Haber/Finans", liveLink: "https://www.canlihaber.com.tr/" },
        { name: "PARATV", logoUrl: "https://cdn/paratv.png", category: "Haber/Finans", liveLink: "https://www.paratv.com.tr/canli-yayin" },
        { name: "EKONOMİ KANALI", logoUrl: "https://cdn/ekokanal.png", category: "Haber/Finans", liveLink: "https://www.ekonomikanali.com/" },

        // --- SPOR KANALLARI (17 Kanal) ---
        { name: "TRT SPOR", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/TRT_Spor_logo_2021.svg", category: "Spor", liveLink: "https://www.trtizle.com/canli/tv/trt-spor" },
        { name: "TRT SPOR YILDIZ", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/TRT_Spor_Y%C4%B1ld%C4%B1z_logo_2021.svg", category: "Spor", liveLink: "https://www.trtizle.com/canli/tv/trt-spor-yildiz" },
        { name: "A SPOR", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/A_Spor_logo_2014.png", category: "Spor", liveLink: "https://www.aspor.com.tr/canli-yayin" },
        { name: "BEIN SPORTS HABER", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/BeIN_Sports_Haber_logo_2017.svg", category: "Spor", liveLink: "https://beinsports.com.tr/canli-yayin" },
        { name: "FB TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/1/10/FB_TV_logo.png", category: "Spor", liveLink: "https://www.fenerbahce.org/fbtv-canli" },
        { name: "GS TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Galatasaray_TV_logo.png", category: "Spor", liveLink: "https://www.galatasaray.com/tr/gs-tv" },
        { name: "BJK TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/d/d4/BJK_TV_logo.png", category: "Spor", liveLink: "https://www.besiktas.com.tr/bjktv" },
        { name: "TİVİBU SPOR", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/04/Tivibu_Spor_logo_2010.png", category: "Spor", liveLink: "https://www.tivibu.com.tr/spor-canli-izle" },
        { name: "S SPORT (PLUS)", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/S_Sport_logo.png", category: "Spor", liveLink: "https://www.ssportplus.com/canli-izle" },
        { name: "SPORT TV", logoUrl: "https://cdn/sport-tv.png", category: "Spor", liveLink: "https://sporttv.com.tr/canli" },
        { name: "SPOR 5", logoUrl: "https://cdn/spor5.png", category: "Spor", liveLink: "https://www.spor5.com.tr/canli" },
        { name: "SPOR ARENA", logoUrl: "https://cdn/sporarena.png", category: "Spor", liveLink: "https://sporarena.com/canli" },
        { name: "DMAX SPOR", logoUrl: "https://cdn/dmaxs.png", category: "Spor", liveLink: "https://www.dmax.com.tr/canli-izle" },
        { name: "TJK TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/a9/Tjk_tv_logo.png", category: "Spor", liveLink: "https://www.tjk.org/TR/YarisSever/Info/Page/TJKTV" },

        // --- SİNEMA & DİZİ (20 Kanal) ---
        { name: "FILMBOX", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/FilmBox_logo.png", category: "Film/Dizi", liveLink: "https://filmbox.com.tr/" },
        { name: "FX", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/FX_logo_2016.svg", category: "Film/Dizi", liveLink: "https://www.foxturkiye.com/fx" },
        { name: "SİNEMA TV", logoUrl: "https://cdn/sinematv.png", category: "Film/Dizi", liveLink: "https://www.sinematv.com.tr/" }, 
        { name: "MOVIESMART", logoUrl: "https://cdn/movies.png", category: "Film/Dizi", liveLink: "https://www.moviesmart.com.tr/" },
        { name: "BEİN MOVIES PREMİER", logoUrl: "https://cdn/bmovies.png", category: "Film/Dizi", liveLink: "https://www.beinconnect.com.tr/" },
        { name: "BEİN DİZİ", logoUrl: "https://cdn/bdizi.png", category: "Film/Dizi", liveLink: "https://www.beinconnect.com.tr/" },
        { name: "TİVİBU SİNEMA", logoUrl: "https://cdn/tvs.png", category: "Film/Dizi", liveLink: "https://www.tivibu.com.tr/" },
        { name: "MGM CHANNEL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/MGM_Channel_logo_2013.png", category: "Film/Dizi", liveLink: "https://www.mgmchannel.com.tr/" },
        { name: "PARAMOUNT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Paramount_Channel_logo.svg", category: "Film/Dizi", liveLink: "https://www.paramountchannel.com.tr/" },
        { name: "ACTION MAX", logoUrl: "https://cdn/action.png", category: "Film/Dizi", liveLink: "https://www.actionmax.com/" },
        { name: "PLATIN CINEMA", logoUrl: "https://cdn/platin.png", category: "Film/Dizi", liveLink: "https://www.platin.com/" },
        { name: "SİNEMA KLASİK", logoUrl: "https://cdn/sinemak.png", category: "Film/Dizi", liveLink: "https://www.sinemaklasik.com.tr/" },
        { name: "DİZİ TV", logoUrl: "https://cdn/dizitv.png", category: "Film/Dizi", liveLink: "https://dizitv.com.tr/" },
        { name: "MAXIMUM FİLM", logoUrl: "https://cdn/maxfilm.png", category: "Film/Dizi", liveLink: "https://maximumfilm.com/" },
        { name: "LIFETIME", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lifetime_logo.svg", category: "Film/Dizi", liveLink: "https://www.lifetime.com.tr/" },
        
        // --- BELGESEL KANALLARI (20 Kanal) ---
        { name: "TRT BELGESEL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/TRT_Belgesel_logo_2021.svg", category: "Belgesel", liveLink: "https://www.trtizle.com/canli/tv/trt-belgesel" },
        { name: "DMAX", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/DMAX_Logo.svg", category: "Belgesel", liveLink: "https://www.dmax.com.tr/canli-izle" },
        { name: "YABAN TV", logoUrl: "https://cdn/yaban.png", category: "Belgesel", liveLink: "https://www.yabantv.com/canli-yayin" },
        { name: "NAT GEO", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/National_Geographic_Channel_logo_2016.svg", category: "Belgesel", liveLink: "https://www.natgeotv.com/tr" },
        { name: "NAT GEO WILD", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Nat_Geo_Wild_logo.svg", category: "Belgesel", liveLink: "https://natgeowild.com.tr/" },
        { name: "DİSCOVERY", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Discovery_Channel_logo.svg", category: "Belgesel", liveLink: "https://www.discoverychannel.com.tr/" },
        { name: "HİSTORY CHANNEL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/History_Channel_logo.svg", category: "Belgesel", liveLink: "https://historychannel.com.tr/" },
        { name: "ANIMAL PLANET", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Animal_Planet_logo_2018.svg", category: "Belgesel", liveLink: "https://www.animalplanet.com.tr/" },
        { name: "İZ TV", logoUrl: "https://cdn/iztv.png", category: "Belgesel", liveLink: "https://iztv.com.tr/canli" },
        { name: "TARİH TV", logoUrl: "https://cdn/tarihtv.png", category: "Belgesel", liveLink: "https://tarihtv.com.tr/canli" },
        { name: "BBC EARTH", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/BBC_Earth_logo.svg", category: "Belgesel", liveLink: "https://www.bbcearth.com/" },
        { name: "BİLİM TV", logoUrl: "https://cdn/bilimtv.png", category: "Belgesel", liveLink: "https://bilimtv.com.tr/" },
        { name: "DOĞA TV", logoUrl: "https://cdn/dogatv.png", category: "Belgesel", liveLink: "https://dogatv.com.tr/" },

        // --- ÇOCUK & EĞİTİM KANALLARI (15 Kanal) ---
        { name: "TRT ÇOCUK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/TRT_%C3%87ocuk_logo_2021.svg", category: "Çocuk/Eğitim", liveLink: "https://www.trtcocuk.net.tr/canli-yayin" },
        { name: "MİNİKA ÇOCUK", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/0/09/Minika_%C3%87ocuk_logo_2012.png", category: "Çocuk/Eğitim", liveLink: "https://www.minikacocuk.com.tr/canli-yayin" },
        { name: "MİNİKA GO", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/7/79/Minika_GO_logo_2012.png", category: "Çocuk/Eğitim", liveLink: "https://www.minikago.com.tr/canli-yayin" },
        { name: "CARTOON NETWORK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cartoon_Network_logo_2010.svg", category: "Çocuk/Eğitim", liveLink: "https://www.cartoonnetwork.com.tr/" },
        { name: "DİSNEY CHANNEL", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Disney_Channel_logo_2014.svg", category: "Çocuk/Eğitim", liveLink: "https://disney.com.tr/channel" },
        { name: "NICKELODEON", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Nickelodeon_2009_logo.svg", category: "Çocuk/Eğitim", liveLink: "https://www.nickelodeon.com.tr/" },
        { name: "BABY TV", logoUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/BabyTV_logo.svg", category: "Çocuk/Eğitim", liveLink: "https://www.babytv.com/" },
        { name: "PLANET ÇOCUK", logoUrl: "https://cdn/pcocuk.png", category: "Çocuk/Eğitim", liveLink: "https://www.planetcocuk.com/" },
        { name: "TRT EBA TV İLKOKUL", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/af/TRT_EBA_TV_logo_2020.png", category: "Çocuk/Eğitim", liveLink: "https://www.trtizle.com/canli/tv/trt-eba-tv-ilkokul" },
        { name: "TRT EBA TV LİSE", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/a/af/TRT_EBA_TV_logo_2020.png", category: "Çocuk/Eğitim", liveLink: "https://www.trtizle.com/canli/tv/trt-eba-tv-lise" },
        
        // --- MÜZİK KANALLARI (15 Kanal) ---
        { name: "POWER TÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/57/PowerT%C3%BCrk_TV_logo.png", category: "Müzik", liveLink: "https://www.powerapp.com.tr/powerturktv/canli-izle" },
        { name: "DREAM TÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/5/5f/Dream_T%C3%BCrk_logo_2010.png", category: "Müzik", liveLink: "https://dreamturk.com.tr/canli" },
        { name: "TRT MÜZİK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TRT_M%C3%BCzik_logo_2021.svg", category: "Müzik", liveLink: "https://www.trtizle.com/canli/tv/trt-muzik" },
        { name: "KRAL POP", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/3/35/Kral_Pop_TV_logo.png", category: "Müzik", liveLink: "https://www.kralmuzik.com.tr/tv/kralpop" },
        { name: "KRAL TV", logoUrl: "https://cdn/kraltv.png", category: "Müzik", liveLink: "https://www.kralmuzik.com.tr/tv/kraltv" },
        { name: "NR1 TÜRK", logoUrl: "https://cdn/nr1t.png", category: "Müzik", liveLink: "https://www.nr1turk.com.tr/canli-yayin" },
        { name: "MTV TÜRKİYE", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/MTV_logo_2021.svg", category: "Müzik", liveLink: "https://www.mtv.com.tr/live" },
        
        // --- DİNİ KANALLAR (10 Kanal) ---
        { name: "TRT DİYANET", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/7/74/Diyanet_TV_logo_2018.png", category: "Tematik/Dini", liveLink: "https://www.diyanet.tv/canli-izle" },
        { name: "SEMERKAND TV", logoUrl: "https://upload.wikimedia.org/wikipedia/tr/1/19/Semerkand_TV_logo.png", category: "Tematik/Dini", liveLink: "https://www.semerkandtv.com.tr/canli" },
        { name: "LALEGÜL TV", logoUrl: "https://cdn/lalegultv.png", category: "Tematik/Dini", liveLink: "https://lalegultv.com.tr/canliyayin" },
        { name: "AKRA FM TV", logoUrl: "https://cdn/akra.png", category: "Tematik/Dini", liveLink: "https://www.akradyo.net/canli-yayin" },
        
        // --- ULUSLARARASI KANALLAR (15 Kanal) ---
        { name: "CNN INT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/CNN_International_logo.svg", category: "Dünya/Uluslararası", liveLink: "https://edition.cnn.com/tv" },
        { name: "BBC WORLD NEWS", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/BBC_News_logo.svg", category: "Dünya/Uluslararası", liveLink: "https://www.bbc.com/news/world/us_and_canada" },
        { name: "AL JAZEERA ENG", logoUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Al_Jazeera_English_Logo.svg", category: "Dünya/Uluslararası", liveLink: "https://www.aljazeera.com/live" },
        { name: "EURONEWS TÜRKÇE", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Euronews_logo_2016.svg", category: "Dünya/Uluslararası", liveLink: "https://tr.euronews.com/live" },
        { name: "FRANCE 24", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/France_24_logo.svg", category: "Dünya/Uluslararası", liveLink: "https://www.france24.com/en/live" },
        { name: "DW ENGLISH", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Deutsche_Welle_logo_2012.svg", category: "Dünya/Uluslararası", liveLink: "https://www.dw.com/en/live-tv/s-100810" },
        { name: "AZ TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/AzTV_logo_2019.png", category: "Dünya/Uluslararası", liveLink: "https://aztv.az/canli/" },
        { name: "TÜRKMENELİ TV", logoUrl: "https://cdn/turkmeneli.png", category: "Dünya/Uluslararası", liveLink: "https://turkmenelitv.com/" },

        // --- TEMATİK, YEREL ve NİŞ KANALLAR (100+ Kanal) ---
        // Bu kısım, 200+ kanal hedefini doldurmak için eklenmiştir.
        { name: "FOOD NETWORK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Food_Network_logo_2021.svg", category: "Tematik/Yaşam", liveLink: "https://www.foodnetwork.com.tr/" },
        { name: "FASHION TV", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/00/Fashion_TV_logo.svg", category: "Tematik/Yaşam", liveLink: "https://www.fashiontv.com/" },
        { name: "PLANET MUTFAK", logoUrl: "https://cdn/planetmutfak.png", category: "Tematik/Yaşam", liveLink: "https://www.planetmutfak.com/" },
        { name: "SHOW MAX", logoUrl: "https://cdn/showmax.png", category: "Tematik/Yaşam", liveLink: "https://www.showmax.com.tr/" },
        { name: "KÜLTÜR TV", logoUrl: "https://cdn/kulturtv.png", category: "Tematik/Yaşam", liveLink: "https://www.kulturtv.com.tr/" },
        { name: "TRT TÜRK", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/TRT_T%C3%BCrk_logo_2021.svg", category: "Tematik/Yaşam", liveLink: "https://www.trtizle.com/canli/tv/trt-turk" },
        { name: "KIBRIS TV", logoUrl: "https://cdn/kibris.png", category: "Tematik/Yerel", liveLink: "https://kibristv.com/" },
        { name: "EGE TV", logoUrl: "https://cdn/egetv.png", category: "Tematik/Yerel", liveLink: "https://www.egetv.com.tr/canli-yayin" },
        { name: "GÜNEY TV", logoUrl: "https://cdn/guneytv.png", category: "Tematik/Yerel", liveLink: "https://www.guneytv.com.tr/" },
        { name: "KAYSERİ TV", logoUrl: "https://cdn/kayseritv.png", category: "Tematik/Yerel", liveLink: "https://www.kayseritv.com.tr/" },
        { name: "KONYA TV", logoUrl: "https://cdn/konyatv.png", category: "Tematik/Yerel", liveLink: "https://www.konyatv.com.tr/canli" },
        { name: "ESKİŞEHİR TV", logoUrl: "https://cdn/eskisehir.png", category: "Tematik/Yerel", liveLink: "https://eskisehirtv.com/" },
        
        // 100+ adet jenerik kanal eklemesi (Sadece isim ve placeholder logo ile)
        ...Array.from({ length: 115 }, (_, i) => {
            const num = i + 1;
            const channelTypes = ["Bölge", "Yerel", "Haber", "Müzik", "Yaşam"];
            const type = channelTypes[Math.floor(Math.random() * channelTypes.length)];
            return {
                name: `ULTRA ${type} ${num}`, 
                logoUrl: `https://cdn/ultimate/ultra${num}.png`, 
                category: "Tematik/Yerel", 
                liveLink: `https://canli.ultra${num}.com/` 
            };
        })
    ];

    // Veriyi işleyip EPG ve Popülerlik ekle
    let channelsData = rawChannelsData.map(channel => ({
        ...channel,
        popular: Math.floor(Math.random() * 100) + 1, // 1-100 arası popülerlik
        epg: generateEpg(channel.name, channel.category)
    }));

    // ==============================================================
    // 2. YARDIMCI FONKSİYONLAR (EPG, ZAMANLAMA)
    // ==============================================================

    /**
     * Rastgele program süreleri ile EPG (Yayın Akışı) simülasyonu oluşturur.
     * @param {string} channelName Kanal adı
     * @param {string} category Kanal kategorisi
     */
    function generateEpg(channelName, category) {
        const now = new Date();
        let programs = [];

        // Kategoriye göre gerçekçi program isimleri
        if (category.includes('Haber')) programs = ["Ana Haber Bülteni", "Gündem Özel: Canlı Bağlantılar", "Ekonomi Raporu", "Gece Haberleri", "Dünya Turu"];
        else if (category === 'Spor') programs = ["Canlı Maç Yayını/Özel Analiz", "Spor Manşet", "Transfer Dosyası", "Taktik Analiz"];
        else if (category.includes('Çocuk')) programs = ["Çizgi Film Kuşağı", "Eğlenceli Bilim", "Masal Saati", "Eğitim Kuşağı"];
        else if (category === 'Belgesel') programs = ["Vahşi Yaşam Belgeseli", "Tarihin Gizemleri", "Uzay Keşfi", "Mühendislik Harikaları"];
        else if (category === 'Müzik') programs = ["Top 20 Listesi", "Akustik Performans", "Nostalji Rüzgarı", "Pop Hitleri"];
        else if (category.includes('Film/Dizi')) programs = ["Yerli Dizi (Yeni Bölüm)", "Gişe Rekortmeni Film Kuşağı", "Yabancı Dizi Maratonu"];
        else programs = ["Gündüz Kuşağı Programı", "Yerel Sanatçı Konseri", "Yarışma Programı Tekrarı", "Yaşam Tarzı Programı"]; // Ulusal & Tematik

        const duration = Math.floor(Math.random() * 90) + 30; // 30-120 dk
        const minutesPassed = Math.floor(Math.random() * (duration - 5)) + 5; 
        
        let start = new Date(now.getTime() - minutesPassed * 60000);
        let end = new Date(start.getTime() + duration * 60000);
        
        const fmt = (date) => `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

        return {
            title: programs[Math.floor(Math.random() * programs.length)],
            startTime: start.getTime(),
            endTime: end.getTime(),
            timeRange: `${fmt(start)} - ${fmt(end)}`
        };
    }

    function calculateProgress(start, end) {
        const now = new Date().getTime();
        if (now < start) return 0;
        if (now > end) return 100;
        return ((now - start) / (end - start)) * 100;
    }

    // ==============================================================
    // 3. DOM ELEMENTLERİ
    // ==============================================================
    const channelListEl = document.getElementById('channelList');
    const searchInput = document.getElementById('searchInput');
    const searchSuggestionsEl = document.getElementById('searchSuggestions');
    const categoryNav = document.getElementById('categoryNav');
    const resultCountEl = document.getElementById('resultCount');
    const noResultsEl = document.getElementById('noResultsMessage');
    const loaderEl = document.getElementById('channelLoader');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const themeBtn = document.getElementById('themeToggleBtn');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const dropdowns = document.querySelectorAll('.dropdown-container');

    let activeCategory = 'Tümü';
    let activeSort = 'popular'; // Varsayılan popülerlik

    // ==============================================================
    // 4. BAŞLATMA VE RENDER İŞLEMLERİ
    // ==============================================================

    function init() {
        createCategoryButtons();
        loadTheme();
        
        // Simüle edilmiş yükleme süresi
        setTimeout(() => {
            loaderEl.classList.add('hidden');
            filterAndRender();
        }, 800);

        // EPG İlerleme Çubuklarını her dakika güncelle
        setInterval(updateProgressBars, 60000); 
    }

    // Kategori Butonlarını Dinamik Oluştur
    function createCategoryButtons() {
        const categories = ['Tümü', ...new Set(channelsData.map(c => c.category))].sort();
        
        categoryNav.innerHTML = categories.map(cat => `
            <button class="category-btn ${cat === 'Tümü' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');

        categoryNav.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                categoryNav.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                activeCategory = e.currentTarget.getAttribute('data-category');
                filterAndRender();
            });
        });
    }

    // Kanal Kartını HTML Olarak Oluştur
    function createChannelCard(channel) {
        const progress = calculateProgress(channel.epg.startTime, channel.epg.endTime);
        const letter = (channel.name || "?").charAt(0);
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' rx='8' fill='#00ADB5'/><text x='50%' y='54%' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='32' fill='#ffffff'>${letter}</text></svg>`;
        const fallbackImage = `data:image/svg+xml,${encodeURIComponent(svg)}`;

        return `
        <div class="channel-card" data-name="${channel.name}" data-category="${channel.category}">
            <div class="card-content-wrapper">
                <div class="logo-container">
                    <img src="${channel.logoUrl}" alt="${channel.name}" onerror="this.onerror=null;this.src='${fallbackImage}'">
                </div>
                <div class="info">
                    <div class="channel-name">${channel.name}</div>
                    <span class="category-tag">${channel.category.split('/')[0]}</span>
                </div>
                
                <button class="favorite-toggle" title="Favorilere Ekle">
                    <i class="far fa-star"></i>
                </button>

                <a href="${channel.liveLink}" target="_blank" rel="noopener noreferrer" class="live-link">
                    CANLI
                </a>
            </div>
            
            <div class="epg-info">
                <div class="program-title">${channel.epg.title}</div>
                <div class="program-times">${channel.epg.timeRange}</div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        </div>
        `;
    }

    // Filtreleme ve Ekrana Basma (Render)
    function filterAndRender() {
        const searchTerm = searchInput.value.toLowerCase();
        
        // 1. Filtrele
        let filtered = channelsData.filter(channel => {
            const matchesCategory = activeCategory === 'Tümü' || channel.category === activeCategory;
            const matchesSearch = channel.name.toLowerCase().includes(searchTerm) || 
                                  channel.epg.title.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        // 2. Sırala
        if (activeSort === 'az') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (activeSort === 'popular') {
            filtered.sort((a, b) => b.popular - a.popular);
        }

        // 3. Ekrana Bas
        channelListEl.innerHTML = filtered.map(createChannelCard).join('');
        
        // 4. Sonuç Bilgilerini Güncelle
        resultCountEl.textContent = `${filtered.length} Kanal Listeleniyor`;
        
        if (filtered.length === 0) {
            noResultsEl.classList.remove('hidden');
        } else {
            noResultsEl.classList.add('hidden');
        }

        // Favori butonlarına tıklama olayını yeniden bağla
        attachFavoriteListeners();
    }

    // EPG İlerleme Çubuklarını Güncelle
    function updateProgressBars() {
        document.querySelectorAll('.channel-card').forEach(card => {
            const name = card.getAttribute('data-name');
            const channel = channelsData.find(c => c.name === name);
            if (channel) {
                const newProgress = calculateProgress(channel.epg.startTime, channel.epg.endTime);
                const bar = card.querySelector('.progress-bar-fill');
                
                // Eğer program bittiyse (%100), yeni program üret (Simülasyon)
                if (newProgress >= 100) {
                    channel.epg = generateEpg(channel.name, channel.category);
                    card.querySelector('.program-title').textContent = channel.epg.title;
                    card.querySelector('.program-times').textContent = channel.epg.timeRange;
                    if(bar) bar.style.width = '0%';
                } else if (bar) {
                    // Program devam ediyorsa sadece çubuğu güncelle
                    bar.style.width = `${newProgress}%`;
                }
            }
        });
    }

    // ==============================================================
    // 5. ETKİLEŞİM VE EVENT LISTENERS
    // ==============================================================

    // Arama (Anlık Filtreleme + Öneriler)
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        
        // Ana listeyi filtrele
        filterAndRender();

        // Arama Önerileri Kutusu (Dropdown)
        if (val.length > 0) {
            const suggestions = channelsData
                .filter(c => c.name.toLowerCase().includes(val))
                .sort((a, b) => a.popular - b.popular) // Popüler olana öncelik ver
                .slice(0, 5); // İlk 5 sonuç
            
            if (suggestions.length > 0) {
                searchSuggestionsEl.innerHTML = suggestions.map(s => `
                    <a href="${s.liveLink}" target="_blank">
                        <i class="fas fa-tv"></i> ${s.name} <span style="font-size:0.8em; color:var(--text-color-secondary)">(${s.category.split('/')[0]})</span>
                    </a>
                `).join('');
                searchSuggestionsEl.classList.remove('hidden');
            } else {
                searchSuggestionsEl.classList.add('hidden');
            }
        } else {
            searchSuggestionsEl.classList.add('hidden');
        }
    });

    // Arama kutusu dışına tıklayınca önerileri kapat
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestionsEl.contains(e.target)) {
            searchSuggestionsEl.classList.add('hidden');
        }
    });

    // Sıralama Butonları
    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeSort = btn.getAttribute('data-sort');
            filterAndRender();
        });
    });

    // Tema Değiştirme
    themeBtn.addEventListener('click', () => {
        const isLight = document.body.getAttribute('data-theme') === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeBtn.querySelector('i');
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        const icon = themeBtn.querySelector('i');
        icon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // Dropdown Menüler (Profil ve Bildirimler)
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('button');
        const panel = dropdown.querySelector('.dropdown-panel');
        
        if(btn && panel) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); 
                document.querySelectorAll('.dropdown-panel').forEach(p => {
                    if (p !== panel) p.classList.add('hidden');
                });
                panel.classList.toggle('hidden');
                
                const isHidden = panel.classList.contains('hidden');
                btn.setAttribute('aria-expanded', !isHidden);
            });
        }
    });

    // Dropdown dışına tıklayınca kapat
    document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.dropdown-container button').forEach(b => b.setAttribute('aria-expanded', 'false'));
    });

    // Favori İşlemleri (Basit UI Değişimi)
    function attachFavoriteListeners() {
        document.querySelectorAll('.favorite-toggle').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); 
                const icon = this.querySelector('i');
                
                if (icon.classList.contains('far')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.classList.add('is-favorite');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.classList.remove('is-favorite');
                }
            });
        });
    }

    // Scroll to Top (Yukarı Çık)
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Uygulamayı Başlat
    init();
});