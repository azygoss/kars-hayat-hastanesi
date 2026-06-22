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
      bio: 'Dr. Abdil Yılmaz, Özel Kars Hayat Hastanesi yönetim kurulu başkanı ve başhekimidir. Kamuda doktorluk görevinin yanı sıra Kars Sağlık Müdürlüğü görevinde de bulunmuştur. Sağlık hizmetlerinin koordinasyonunu yürütmekte ve kalite standartlarının sürdürülmesinden sorumludur.'
    },
    'haktan-ergin-bagis': {
      name: 'Op. Dr. Haktan Ergin BAĞIŞ',
      title: 'Kulak Burun Boğaz Uzmanı',
      image: 'assets/doctors/haktan-ergin-bagis.jpg',
      category: 'cerrahi',
      instagram: 'https://www.instagram.com/drhaktanerginbagis',
      bio: 'Kulak, burun ve boğaz hastalıklarının tanı ve tedavisinde cerrahi ve medikal yöntemlerle hizmet vermektedir.',
      specialties: [
        'Rinoplasti', 'Göz kapağı estetiği', 'Facelift', 'Temporal lift',
        'Gamze estetiği', 'Bisektomi — yanak yağlarının alımı',
        'Fonksiyonel burun ameliyatları (Rinoplasti, Septorinoplasti, SRP)',
        'Burun orta bölmesinin düzeltilmesi (Septoplasti, SMR)',
        'Horlama, Uyku Apnesi Cerrahisi (UPPP)',
        'Ses telleri cerrahisi (Larengoskopi, MLS)',
        'Orta kulak ameliyatı (Mastoidektomi, Timpanomastoidektomi)',
        'Kulak önü tükrük bezi ameliyatı (Parotidektomi)'
      ]
    },
    'esmahan-nida-kaplan': {
      name: 'Op. Dr. Esmahan Nida KAPLAN',
      title: 'Kadın Hastalıkları ve Doğum Uzmanı',
      image: 'assets/doctors/esmahan-nida-kaplan.jpg',
      category: 'cerrahi',
      bio: 'Gebelik takibi, doğum ve jinekolojik cerrahi alanlarında uzmanlaşmıştır. 2. düzey obstetrik USG hizmeti sunmaktadır.',
      specialties: [
        'Gebelik Takibi ve Doğum', 'Normal Doğum', 'Sezaryen',
        'Jinekolojik Ameliyatlar', 'Genital Estetik', 'HPV',
        'İnfertilite (Kısırlık)', 'Himenoplasti', 'Menopoz'
      ]
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
      bio: 'Dahiliye bölümümüzün öncülüğünde iç hastalıklarının tanı, tedavi ve takibini yürütmektedir.',
      specialties: [
        'Kapsamlı Dahiliye Muayenesi', 'Diyabet (Şeker Hastalığı) Takibi',
        'Hipertansiyon (Tansiyon) Takibi', 'Mide ve Bağırsak Hastalıkları',
        'Solunum Yolu Hastalıkları', 'Tiroid Bezi Hastalıkları'
      ]
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
      body: 'Özel Kars Hayat Hastanesi ailesi olarak, teknolojik olarak en üst düzeyde donatılan hastanemiz, alanlarında profesyonel ve deneyimli uzman ekibiyle hizmetinize hazır. Alanında uzman 150\'den fazla çalışanımızla sağlığınız için 7/24 hizmetinizdeyiz.'
    },
    'cocuk': {
      title: 'Çocuk Sağlığı ve Hastalıkları servisimiz hasta kabulüne başladı',
      date: '2026-05-03',
      image: 'assets/news/cocuk-hastakabulu.jpg',
      body: 'Çocuk Sağlığı ve Hastalıkları Uzmanı Uzm. Dr. Erhan ZENCİR öncülüğünde çocuk sağlığı için bilgi, deneyim ve sevgiyle sizlerin yanınızdayız. Ailemizin en değerli varlığı olan çocuklarımızın sağlığı için 0-18 yaş arası büyüme-gelişim takibi, aşılama ve hastalık tedavisi hizmeti sunulmaktadır.'
    },
    'kbb': {
      title: 'Kulak Burun Boğaz (KBB) servisimiz hasta kabulüne başladı',
      date: '2026-05-05',
      image: 'assets/news/kbb-hastakabulu.jpg',
      body: 'Op. Dr. Haktan Ergin BAĞIŞ ve ekibi, Özel Kars Hayat Hastanesi çatısı altında kulak hastalıkları, burun ve sinüs hastalıkları, boğaz hastalıkları, işitme kaybı, tonsil ve geniz eti problemleri başta olmak üzere KBB alanında hizmet vermektedir.'
    },
    'yuksek-tansiyon': {
      title: 'Yüksek tansiyon belirtileri nelerdir? Hipertansiyon nedir?',
      date: '2026-05-01',
      image: 'assets/news/yuksek-tansiyon.jpg',
      body: 'Hipertansiyon, günümüzde modern yaşamın getirdiği stres ve beslenme alışkanlıklarıyla beraber sağlık gündeminin en üst sıralarında yer alan kritik bir konudur. Yüksek tansiyon genellikle belirti vermeden ilerler; düzenli kontrol ve erken tanı hayati önem taşır. Dahiliye bölümümüzde hipertansiyon takibi ve tedavisi yapılmaktadır.'
    },
    'migren': {
      title: 'Migren nedir? Belirtileri, nedenleri ve tedavi yöntemleri',
      date: '2026-05-02',
      image: 'assets/news/migren.jpg',
      body: 'Migren, dünya genelinde milyonlarca insanın yaşadığı, genellikle başın bir tarafında şiddetli ağrıya neden olan nörolojik bir hastalıktır. Bulantı, kusma, ışık ve ses hassasiyeti gibi belirtilerle seyreder. Nöroloji bölümümüzde migren tanı ve tedavisi yapılmaktadır.'
    },
    'dogum-programi': {
      title: 'Kadın doğum programı',
      date: '2026-05-03',
      image: 'assets/news/dogum-programi.jpg',
      body: 'Doğum programı, anne adaylarının hamilelik döneminden doğum sonrasına kadar ihtiyaç duydukları sağlık hizmetlerini kapsayan özel bir sağlık programıdır. Düzenli muayene, gebelik takibi, doğum planlaması ve doğum sonrası bakım hizmetleri Op. Dr. Esmahan Nida Kaplan öncülüğünde sunulmaktadır.'
    }
  },

  partners: [
    { name: 'SGK', image: 'assets/partners/sgk.jpg' },
    { name: 'Tarım-İş Sendikası', image: 'assets/partners/tarim-is.png' },
    { name: 'Türkiye Sigorta', image: 'assets/partners/turkiye-sigorta.png' },
    { name: 'Anadolu Sigorta', image: 'assets/partners/anadolu.png' },
    { name: 'Allianz Sigorta', image: 'assets/partners/allianz.png' },
    { name: 'AXA Sigorta', image: 'assets/partners/axa.png' },
    { name: 'Türkiye Hayat Emeklilik', image: 'assets/partners/tzh.png' },
    { name: 'Ziraat Bankası', image: 'assets/partners/ziraat.png' },
    { name: 'Halkbank', image: 'assets/partners/halkbank.png' }
  ],

  gallery: [
    { src: 'assets/gallery/slayt5.jpg', alt: 'Özel Kars Hayat Hastanesi — tesis görünümü' },
    { src: 'assets/gallery/slayt45.jpg', alt: 'Özel Kars Hayat Hastanesi — iç mekan' },
    { src: 'assets/gallery/slayt51.jpg', alt: 'Özel Kars Hayat Hastanesi — hasta odası' }
  ],

  videos: [
    {
      title: '7/24 Acil Servis',
      embed: 'https://www.youtube.com/embed/8lfMdiCtV6g',
      thumb: 'assets/departments/acil-servis.jpg'
    }
  ],

  quality: {
    title: 'Kalite Yönetim Birimi',
    intro: 'Hastanemizdeki kalite çalışmaları, yönetimin ve bölüm kalite sorumlularının desteği ile Kalite Geliştirme Birimi tarafından; Sağlık Bakanlığı Sağlıkta Kalite Standartları-Hastane doğrultusunda yürütülmektedir.',
    areas: [
      { title: 'Kurumsal Hizmetler', items: ['Kurumsal Yapı', 'Kalite Yönetimi', 'Doküman Yönetimi', 'Risk Yönetimi', 'Güvenlik Raporlama Sistemi', 'Acil Durum ve Afet Yönetimi', 'Eğitim Yönetimi', 'Sosyal Sorumluluk'] },
      { title: 'Hasta ve Çalışan Odaklı Hizmetler', items: ['Hasta Deneyimi', 'Hizmete Erişim', 'Yaşam Sonu Hizmetler', 'Sağlıklı Çalışma Yaşamı'] },
      { title: 'Sağlık Hizmetleri', items: ['Hasta Bakımı', 'İlaç Yönetimi', 'Enfeksiyonların Önlenmesi', 'Sterilizasyon Hizmetleri', 'Acil Servis', 'Ameliyathane', 'Yoğun Bakım Üniteleri', 'Doğum Hizmetleri', 'Laboratuvar Hizmetleri'] },
      { title: 'Destek Hizmetler', items: ['Tesis Yönetimi', 'Otelcilik Hizmetleri', 'Bilgi Yönetim Sistemi', 'Malzeme ve Cihaz Yönetimi', 'Tıbbi Kayıt ve Arşiv', 'Atık Yönetimi'] },
      { title: 'Gösterge Yönetimi', items: ['Göstergelerin İzlenmesi', 'Bölüm Bazlı Göstergeler', 'Klinik Bazlı Göstergeler'] }
    ],
    committees: [
      'Acil Durumlar ve Afet Yönetimi Komitesi', 'Radyasyon Güvenliği Komitesi',
      'Çalışan Sağlığı ve Güvenliği Komitesi', 'Eğitim Komitesi',
      'Enfeksiyon Kontrol Komitesi', 'Hasta Güvenliği Komitesi',
      'İlaç Komitesi', 'Temizlik Komitesi', 'Transfüzyon Takip Komitesi'
    ],
    notes: [
      'Güvenlik Raporlama Sistemi ile istenmeyen olayların bildirilmesi ve önlenmesi sağlanmaktadır.',
      'Gösterge Yönetimi Sistemi ile kalitenin sürekli geliştirilmesine katkı sağlanmaktadır.',
      'Düzenli aralıklarla bina turları yapılarak fiziksel alan denetimleri gerçekleştirilmektedir.',
      'Sağlıkta Kalite Standartları kapsamında yılda 2 defa özdeğerlendirme (iç denetim) yapılmaktadır.'
    ]
  },

  companionRules: [
    'Hasta ziyaretçilerinin kabul edilmesi, hastanemizde belirlenen usul ve esaslara uygun olarak ve hastaların huzur ve sükûnlarını bozacak fiil ve tutumlara sebebiyet vermeyecek şekilde gerçekleştirilmelidir.',
    'Hasta ziyareti, hastanemizin belirlediği ziyaret saatleri (23:00–07:00 arası hariç) içinde yapılmaktadır.',
    'Ziyaret süresi 10 dakika ile sınırlandırılmalı ve odada 2 kişiden fazla ziyaretçi bulunmamalıdır.',
    'Hastane içinde cep telefonları sessiz modda kullanılmalıdır.',
    'Ateş, öksürük veya bilinen enfeksiyon hastalığı olan kişiler ile 12 yaşından küçük çocuklar mümkün olduğunca ziyarete getirilmemelidir.',
    'Doktorun izin vermediği özel durumlarda ve salgın varlığında ziyaret kısıtlaması getirilebilir.',
    'Sağlık kuruluşları içinde sigara içilmesi yasaktır.',
    'Hastanızın sağlığını korumak için dışarıdan yiyecek-içecek getirmeyiniz.',
    'Topraklı çiçek ve buket çiçek hasta servislerine kabul edilmemektedir.',
    'Hasta yatağına oturmamaya ve ekipmanlara dokunmamaya dikkat ediniz.',
    'Ziyaret öncesi ve sonrası el hijyenine özen gösteriniz.',
    'İzolasyon altındaki hastalarda sağlık personelinin talimatlarına uyunuz.',
    'Ziyaret sırasında hasta ve yakınlarının mahremiyetine özen gösteriniz.'
  ],

  legal: {
    kvkk: {
      title: 'Kişisel Verilerin Korunması (KVKK)',
      sections: [
        { heading: '6698 Sayılı Kişisel Verilerin Korunması Kanunu Bilgilendirme ve Aydınlatma Metni', body: 'MEDİCALPORT HASTANESİ VE SAĞLIK HİZMETLERİ LTD. ŞTİ. olarak kişisel verilerinizin işlenmesine ve korunmasına azami özen gösteriyoruz. Kişisel Verilerin Korunması Kanunu, Sağlık Hizmetleri Temel Kanunu ve ilgili mevzuat uyarınca gerekli her türlü teknik ve idari tedbirler alınmaktadır.' },
        { heading: 'Veri Sorumlusu', body: 'Örnek Mah. Ali Gaffar Okkan Bulvarı No:88/5, 36100 Merkez/KARS adresinde mukim MEDİCALPORT HASTANESİ VE SAĞLIK HİZMETLERİ LTD. ŞTİ. (Özel Kars Hayat Hastanesi), Kişisel Verilerin Korunması Kanununun 3. maddesinde tanımlanan veri sorumlusu sıfatıyla kişisel verilerinizi işlemektedir.' },
        { heading: 'Kişisel Verilerin İşlenme Amaçları', body: 'Kişisel verileriniz; kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve bakım hizmetlerinin yürütülmesi, sağlık hizmetlerinin finansmanının planlanması, Sağlık Bakanlığı ve SGK ile bilgi paylaşımı, hasta haklarının korunması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.' },
        { heading: 'Kişisel Verilerin Aktarılması', body: 'Kişisel verileriniz; kanunen yetkili kamu kurum ve kuruluşlarına, SGK\'ya, anlaşmalı kurumlara, hizmet alınan üçüncü kişilere ve yasal zorunluluk halinde ilgili mercilere aktarılabilmektedir.' },
        { heading: 'Haklarınız', body: 'KVKK\'nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini isteme haklarına sahipsiniz.' },
        { heading: 'Başvuru', body: 'KVKK kapsamındaki taleplerinizi info@karshayathastanesi.com adresine veya Örnek Mah. Ali Gaffar Okkan Bulvarı No:88/5, Merkez/Kars adresine yazılı olarak iletebilirsiniz.' }
      ]
    },
    yasal: {
      title: 'Yasal Uyarı',
      sections: [
        { body: 'Aşağıdaki maddelerde www.karshayathastanesi.com web sitesini ziyaret eden kişilere yönelik kurallar açıklanmaktadır. Bu web sitesi Özel Kars Hayat Hastanesi\'ne aittir ve siteyi ziyaret eden kullanıcılar aşağıdaki koşulları kabul etmiş sayılacaktır.' },
        { body: 'Kullanıcılar bu sitede yer alan bilgi ve dokümanları sadece bilgi edinmek amacıyla kullanabilir. Burada mevcut olan bilgiler Özel Kars Hayat Hastanesi\'nden önceden yazılı izni alınmaksızın kısmen veya tamamen kopya edilemez, dağıtılamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.' },
        { body: 'Özel Kars Hayat Hastanesi web sitesinde yayınlanmış bilgiler ya da bilgilere dayanılarak yapılan işlemlerden veya siteye ulaşılamamasından doğan zarar ve kayıplardan dolayı hiçbir şekilde sorumluluk kabul etmez. Sitede yer alan bilgiler ışığında verilecek her türlü karar ile ilgili tüm sorumluluk, bu siteyi ziyaret eden kişiye aittir.' },
        { body: 'Bu sitede bulunan bilgi veya ifadelerin telif hakkı Özel Kars Hayat Hastanesi\'ne aittir. Özel Kars Hayat Hastanesi\'nin yazılı izni olmaksızın kullanılamaz. İhtilaflarda Türkçe Kullanım Şartları metni esas alınacaktır.' },
        { body: 'Sitede yer alan bilgiler genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Tanı ve tedavi için mutlaka bir sağlık profesyoneline başvurunuz.' }
      ]
    }
  },

  links: {
    randevu: 'http://195.175.92.206:3634/randevu',
    esonuc: 'http://195.175.92.206:3634/labsonuc/patient_information.php',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/@OzelKarsHayatHastanesi'
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