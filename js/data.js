const SITE_DATA = {
  departments: {
    'acil-servis': {
      title: 'Acil Servis',
      tag: '7/24',
      image: 'assets/departments/acil-servis.jpg',
      desc: 'Yılın her günü 24 saat hizmet veren acil servisimizde, acil tıp hekimimiz gerekli müdahaleleri yaptıktan sonra ilgili branş hekimleriyle konsültasyon gerçekleştirir. Her yaş grubundaki hasta hizmet alabilir; 24 saat radyoloji ve laboratuvar desteği mevcuttur.'
    },
    'genel-cerrahi': {
      title: 'Genel Cerrahi',
      image: 'assets/departments/genel-cerrahi.jpg',
      desc: 'Genel cerrahi bölümümüzde laparoskopik ve açık cerrahi yöntemlerle gastrointestinal sistem, meme, tiroid ve yumuşak doku hastalıklarının tanı ve tedavisi gerçekleştirilmektedir.'
    },
    'kadin-hastaliklari': {
      title: 'Kadın Hastalıkları ve Doğum',
      image: 'assets/departments/kadin-hastaliklari.jpg',
      desc: 'Gebelik takibi, doğum, jinekolojik muayene ve cerrahi müdahaleler modern ultrasonografi cihazları eşliğinde uzman kadromuz tarafından yürütülmektedir. 2. düzey obstetrik USG hizmeti sunulmaktadır.'
    },
    'cocuk': {
      title: 'Çocuk Sağlığı ve Hastalıkları',
      image: 'assets/departments/cocuk.jpg',
      desc: '0-18 yaş arası çocukların büyüme-gelişim takibi, aşılama, enfeksiyon ve kronik hastalıklarının tanı ve tedavisi çocuk sağlığı uzmanımız tarafından gerçekleştirilmektedir.'
    },
    'kbb': {
      title: 'Kulak Burun Boğaz',
      image: 'assets/departments/kbb.jpg',
      desc: 'Kulak, burun ve boğaz hastalıklarının tanı ve tedavisinde endoskopik ve cerrahi yöntemler uygulanmaktadır. Sinüzit, işitme kaybı, tonsil ve geniz eti problemleri tedavi edilmektedir.'
    },
    'noroloji': {
      title: 'Nöroloji',
      image: 'assets/departments/noroloji.jpg',
      desc: 'Beyin, omurilik ve sinir sistemi hastalıklarının tanı ve tedavisinde MR, BT, EEG, EMG ve ekokardiyografi gibi ileri tetkikler kullanılmaktadır. Ayaktan ve yatarak hasta takibi yapılmaktadır.'
    },
    'dahiliye': {
      title: 'İç Hastalıkları (Dahiliye)',
      image: 'assets/departments/dahiliye.jpg',
      desc: 'Diyabet, hipertansiyon, tiroid, böbrek ve karaciğer hastalıkları başta olmak üzere iç hastalıklarının tanı, tedavi ve takibi deneyimli dahiliye uzmanımız tarafından yürütülmektedir.'
    },
    'radyoloji': {
      title: 'Radyoloji',
      image: 'assets/departments/radyoloji.jpg',
      desc: 'Ultrasonografi, mamografi, BT ve MR görüntüleme hizmetleri sunulmaktadır. USG eşliğinde meme ve tiroid biyopsisi gibi ileri tanı yöntemleri uygulanmaktadır.'
    },
    'ameliyathane': {
      title: 'Ameliyathane',
      image: 'assets/departments/ameliyathane.jpg',
      desc: '3 modern ameliyathane ünitemizde steril ortamda genel ve özel cerrahi operasyonlar, anestezi ve reanimasyon desteğiyle güvenle gerçekleştirilmektedir.'
    },
    'yogun-bakim': {
      title: 'Yetişkin Yoğun Bakım',
      image: 'assets/departments/yogun-bakim.jpg',
      desc: 'Kritik hastaların 7/24 izlenmesi ve tedavisi için donanımlı yoğun bakım ünitemizde deneyimli hekim ve hemşire kadromuz görev yapmaktadır.'
    },
    'yenidogan-yb': {
      title: 'Yenidoğan Yoğun Bakım',
      image: 'assets/departments/yenidogan-yb.jpg',
      desc: 'Prematüre ve riskli yenidoğan bebeklerin özel bakım ve tedavisi, ileri izleme cihazları eşliğinde yenidoğan yoğun bakım ünitemizde sağlanmaktadır.'
    },
    'endoskopi': {
      title: 'Endoskopi Ünitesi',
      image: 'assets/departments/endoskopi.jpg',
      desc: 'Üst ve alt gastrointestinal sistem endoskopileri, kolonoskopi ve ileri endoskopik işlemler modern cihazlarla gerçekleştirilmektedir.'
    },
    'anestezi': {
      title: 'Anestezi ve Reanimasyon',
      image: 'assets/departments/anestezi-reanimasyon.jpg',
      desc: 'Ameliyat öncesi değerlendirme, anestezi uygulaması ve ameliyat sonrası ağrı yönetimi prof. düzeyde anestezi uzmanımız tarafından yürütülmektedir.'
    },
    'biyokimya': {
      title: 'Tıbbi Biyokimya',
      image: 'assets/departments/biyokimya.jpg',
      desc: 'Kan, idrar ve diğer vücut sıvılarının biyokimyasal analizleri modern laboratuvar altyapımızla hızlı ve güvenilir şekilde yapılmaktadır.'
    },
    'servis': {
      title: 'Dahili ve Cerrahi Servis',
      image: 'assets/departments/servis-genel.jpg',
      desc: 'Otel konforunda özel odalarımızda yatarak tedavi gören hastalarımıza dahili ve cerrahi branşlarda kapsamlı bakım hizmeti sunulmaktadır.'
    },
    'sac-ekim': {
      title: 'Saç Ekim Merkezi',
      image: 'assets/departments/sac-ekim.jpg',
      desc: 'FUE ve DHI teknikleriyle doğal görünümlü saç ekimi, sakal ve kaş ekimi hizmetleri uzman ekibimiz tarafından gerçekleştirilmektedir.'
    }
  },

  doctors: {
    'abdil-yilmaz': {
      name: 'Dr. Abdil YILMAZ',
      title: 'Başhekim',
      image: 'assets/doctors/abdil-yilmaz.jpg',
      category: 'dahili',
      bio: 'Hastanemizin başhekimi olarak sağlık hizmetlerinin koordinasyonunu yürütmekte ve kalite standartlarının sürdürülmesinden sorumludur.'
    },
    'haktan-ergin-bagis': {
      name: 'Op. Dr. Haktan Ergin BAĞIŞ',
      title: 'Kulak Burun Boğaz Uzmanı',
      image: 'assets/doctors/haktan-ergin-bagis.jpg',
      category: 'cerrahi',
      instagram: 'https://www.instagram.com/drhaktanerginbagis',
      bio: 'KBB hastalıklarının tanı ve tedavisinde cerrahi ve medikal yöntemlerle hizmet vermektedir.'
    },
    'esmahan-nida-kaplan': {
      name: 'Op. Dr. Esmahan Nida KAPLAN',
      title: 'Kadın Hastalıkları ve Doğum Uzmanı',
      image: 'assets/doctors/esmahan-nida-kaplan.jpg',
      category: 'cerrahi',
      bio: 'Gebelik takibi, doğum ve jinekolojik cerrahi alanlarında uzmanlaşmıştır. 2. düzey obstetrik USG hizmeti sunmaktadır.'
    },
    'levent-ali-derman': {
      name: 'Uzm. Dr. Levent Ali Derman',
      title: 'Nöroloji Uzmanı',
      image: 'assets/doctors/levent-ali-derman.jpg',
      category: 'dahili',
      bio: 'Nöroloji alanındaki geniş tecrübesi ve hasta odaklı yaklaşımıyla beyin ve sinir sistemi hastalıklarının tanı ve tedavisinde hizmet vermektedir.'
    },
    'erhan-zencir': {
      name: 'Uzm. Dr. Erhan ZENCİR',
      title: 'Çocuk Sağlığı ve Hastalıkları Uzmanı',
      image: 'assets/doctors/erhan-zencir.jpg',
      category: 'dahili',
      instagram: 'https://www.instagram.com/uzm.drerhanzencir',
      bio: 'Çocukların sağlık takibi, aşılama ve hastalık tedavisinde deneyimli pediatri uzmanıdır.'
    },
    'isak-dasdemir': {
      name: 'Op. Dr. İsak DAŞDEMİR',
      title: 'Genel Cerrahi Uzmanı',
      image: 'assets/doctors/isak-dasdemir.jpg',
      category: 'cerrahi',
      bio: 'Genel cerrahi alanında açık ve laparoskopik cerrahi operasyonlar gerçekleştirmektedir.'
    },
    'mutlu-sahin': {
      name: 'Uzm. Dr. Mutlu ŞAHİN',
      title: 'İç Hastalıkları Uzmanı',
      image: 'assets/doctors/mutlu-sahin.jpg',
      category: 'dahili',
      instagram: 'https://www.instagram.com/mutlu_shn36',
      bio: 'Dahiliye bölümümüzün öncülüğünde iç hastalıklarının tanı, tedavi ve takibini yürütmektedir.'
    },
    'selcuk-yasar': {
      name: 'Uzm. Dr. Selçuk YAŞAR',
      title: 'Radyoloji Uzmanı',
      image: 'assets/doctors/selcuk-yasar.jpg',
      category: 'dahili',
      bio: 'Görüntüleme yöntemleri ve USG eşliğinde biyopsi gibi ileri tanı işlemlerini gerçekleştirmektedir.'
    },
    'mehmet-ozcan-ersoy': {
      name: 'Prof. Dr. Mehmet Özcan ERSOY',
      title: 'Anestezi ve Reanimasyon Uzmanı',
      image: 'assets/doctors/mehmet-ozcan-ersoy.jpg',
      category: 'dahili',
      bio: 'Ameliyat öncesi hazırlık, anestezi uygulaması ve ameliyat sonrası bakım süreçlerini yönetmektedir.'
    },
    'kadirhan-sunguroglu': {
      name: 'Prof. Dr. Kadirhan SUNGUROĞLU',
      title: 'Biyokimya Uzmanı',
      image: 'assets/doctors/kadirhan-sunguroglu.jpg',
      category: 'dahili',
      bio: 'Laboratuvar hizmetlerinin kalite standartlarında yürütülmesinden ve biyokimyasal analizlerden sorumludur.'
    },
    'ezgi-alpata': {
      name: 'Ezgi ALPATA',
      title: 'Saç Ekim Direktörü',
      image: 'assets/doctors/ezgi-alpata.jpg',
      category: 'cerrahi',
      bio: 'Saç ekim merkezimizin operasyonel yönetimini yürütmekte ve hasta süreçlerini koordine etmektedir.'
    },
    'emir-kaan-yazici': {
      name: 'Dr. Emir Kaan YAZICI',
      title: 'Acil Servis Hekimi',
      image: 'assets/doctors/emir-kaan-yazici.jpg',
      category: 'acil',
      bio: '7/24 acil servisimizde acil tıp müdahaleleri ve hasta triyajı hizmeti vermektedir.'
    },
    'hasan-duha-ugur': {
      name: 'Dr. Hasan Duha UĞUR',
      title: 'Acil Servis Hekimi',
      image: 'assets/doctors/hasan-duha-ugur.jpg',
      category: 'acil',
      bio: 'Acil servis birimimizde kesintisiz sağlık hizmeti sunmaktadır.'
    },
    'omer-batur-monolbuga': {
      name: 'Dr. Ömer Batur MONOLBUĞA',
      title: 'Acil Servis Hekimi',
      image: 'assets/doctors/omer-batur-monolbuga.jpg',
      category: 'acil',
      bio: 'Acil tıp alanında hasta değerlendirmesi ve acil müdahale hizmetleri vermektedir.'
    }
  },

  news: {
    'tarim-is': {
      title: 'Tarım-İş Sendikası ile özel sağlık hizmetleri anlaşması imzalandı',
      date: '2026-06-11',
      image: 'assets/news/tarim-is-anlasma.png',
      body: 'Tarım-İş Sendikası ile hastanemiz arasında özel sağlık hizmetlerinden yararlanmak üzere protokol imzalanmıştır. Anlaşma kapsamında sendika üyeleri ve birinci derece yakınları, hastanemizde sunulan sağlık hizmetlerinden özel koşullarla faydalanabilecektir.'
    },
    'noroloji': {
      title: 'Nöroloji bölümümüz hasta kabulüne başladı',
      date: '2026-06-09',
      image: 'assets/news/noroloji.jpg',
      body: 'Nöroloji Uzmanı Uzm. Dr. Levent Ali Derman öncülüğünde nöroloji bölümümüz hasta kabulüne başlamıştır. Geniş tecrübesi ve hasta odaklı yaklaşımıyla beyin ve sinir sistemi hastalıklarının tanı ve tedavisinde hizmetinizdeyiz.'
    },
    'obstetrik-usg': {
      title: 'Ayrıntılı obstetrik ultrasonografi (2. düzey USG)',
      date: '2026-05-22',
      image: 'assets/news/obstetrik-usg.png',
      body: 'Ayrıntılı obstetrik ultrasonografi; gebeliğin genellikle 20-24. haftaları arasında yapılan, bebeğin organlarının detaylı olarak değerlendirildiği özel bir ultrason incelemesidir. Op. Dr. Esmahan Nida Kaplan tarafından uygulanmaktadır.'
    },
    'radyoloji-biyopsi': {
      title: 'USG eşliğinde meme ve tiroid biyopsisi',
      date: '2026-05-06',
      image: 'assets/news/radyoloji-biyopsi.jpg',
      body: 'Ultrason eşliğinde şüpheli kitle veya nodüllerden doku örneği alınarak kesin tanı konulmasını sağlayan güvenli ve etkili bir yöntemdir. Uzm. Dr. Selçuk Yaşar tarafından uygulanmaktadır.'
    },
    'dahiliye': {
      title: 'Dahiliye servisimiz hasta kabulüne başladı',
      date: '2026-05-06',
      image: 'assets/news/dahiliye.jpg',
      body: 'İç Hastalıkları Uzmanı Uzm. Dr. Mutlu Şahin öncülüğünde deneyimli ekibiyle dahiliye servisimiz hasta kabulüne başlamıştır.'
    },
    'hastane-ailesi': {
      title: 'Özel Kars Hayat Hastanesi ailesi',
      date: '2026-05-12',
      image: 'assets/news/hospital-family.jpg',
      body: 'Alanında uzman 150\'den fazla çalışanımızla sağlığınız için 7/24 hizmetinizdeyiz. Modern tesisimiz ve hasta odaklı yaklaşımımızla Kars\'ın sağlık altyapısına yeni bir soluk getiriyoruz.'
    }
  },

  faq: [
    {
      q: 'Hastaneniz SGK anlaşmalı mı?',
      a: 'Evet, hastanemiz SGK ile anlaşmalıdır. Sosyal güvenceniz kapsamında poliklinik ve yatarak tedavi hizmetlerinden yararlanabilirsiniz.'
    },
    {
      q: 'Randevu nasıl alabilirim?',
      a: 'Online randevu sistemimiz üzerinden veya 0 (474) 502 44 36 numaralı telefondan randevu alabilirsiniz. WhatsApp hattımız da 7/24 aktiftir.'
    },
    {
      q: 'Acil servis hangi saatlerde açık?',
      a: 'Acil servisimiz yılın 365 günü, 24 saat kesintisiz hizmet vermektedir. Her yaş grubundaki hasta acil servisimizden hizmet alabilir.'
    },
    {
      q: 'Otopark imkânı var mı?',
      a: 'Hastanemizde hem açık hem kapalı otopark bulunmaktadır. Hasta ve ziyaretçilerimiz ücretsiz olarak yararlanabilir.'
    },
    {
      q: 'Hastane odaları nasıl?',
      a: 'Tüm hastane odalarımız özel ve otel konforuna sahiptir. Modern donanımlı odalarımızda konforlu bir iyileşme süreci sunuyoruz.'
    },
    {
      q: 'Hangi branşlarda hizmet veriyorsunuz?',
      a: 'Acil servis, genel cerrahi, dahiliye, KBB, kadın doğum, çocuk sağlığı, nöroloji, radyoloji, anestezi, yoğun bakım, endoskopi ve saç ekim merkezi başta olmak üzere 15\'ten fazla poliklinikle hizmet vermekteyiz.'
    }
  ]
};