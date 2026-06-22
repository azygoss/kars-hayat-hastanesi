/* Blog-style article content — TR + EN */
const NEWS_CONTENT = {
  'tarim-is': {
    category: { tr: 'Kurumsal', en: 'Corporate' },
    tags: { tr: ['Anlaşma', 'Tarım-İş', 'SGK'], en: ['Agreement', 'Tarım-İş', 'Healthcare'] },
    tr: {
      title: 'Tarım-İş Sendikası ile özel sağlık hizmetleri anlaşması imzalandı',
      excerpt: 'Sendika üyeleri ve birinci derece yakınları, hastanemizde özel sağlık hizmetlerinden %15 indirimle yararlanabilecek.',
      article: [
        { type: 'p', text: 'Türkiye Tarım-İş Sendikası ile Özel Kars Hayat Hastanesi arasında yapılan anlaşma ile sendika üyelerinin muayene, tetkik, yatış, ayakta ve yatarak tedavi gerektiren işlemlerinde oda ücretleri, medikal yatış, ameliyatlar, acil hizmetleri, laboratuvar hizmetleri, radyoloji ve nükleer tıp hizmetlerinde %15 oranında indirimden faydalanabileceklerdir.' },
        { type: 'p', text: 'Tüm Tarım-İş Sendikası üyelerini sağlığınız için ayrıcalıklardan faydalanması için hastanemize bekliyoruz. Sağlıklı günler dileriz.' }
      ]
    },
    en: {
      title: 'Healthcare agreement signed with Tarım-İş Union',
      excerpt: 'Union members and first-degree relatives can benefit from a 15% discount on healthcare services at our hospital.',
      article: [
        { type: 'p', text: 'Under the agreement between Turkey Tarım-İş Union and Private Kars Hayat Hospital, union members receive a 15% discount on examinations, tests, hospitalization, outpatient and inpatient treatments, room fees, surgeries, emergency services, laboratory, radiology and nuclear medicine services.' },
        { type: 'p', text: 'We welcome all Tarım-İş Union members to benefit from these privileges. Wishing you good health.' }
      ]
    }
  },
  'noroloji': {
    category: { tr: 'Nöroloji', en: 'Neurology' },
    tags: { tr: ['Nöroloji', 'MR', 'Baş ağrısı'], en: ['Neurology', 'MRI', 'Headache'] },
    tr: {
      title: 'Nöroloji bölümümüz hasta kabulüne başladı',
      excerpt: 'Uzm. Dr. Levent Ali Derman öncülüğünde beyin ve sinir sistemi hastalıklarında uzman hizmet.',
      article: [
        { type: 'p', text: 'Nöroloji Uzmanı Uzm. Dr. Levent Ali Derman öncülüğünde nöroloji alanındaki geniş tecrübesi ve hasta odaklı yaklaşımı ile sağlığınız için yanınızdayız.' },
        { type: 'h3', text: 'Hizmet verdiğimiz alanlar' },
        { type: 'ul', items: ['Baş ağrıları ve türleri', 'Beyin ve damar hastalıkları', 'Hareket bozuklukları', 'Kas ve sinir hastalıkları', 'Denge bozuklukları', 'Uyku bozuklukları', 'Vertigo ve baş dönmeleri', 'Parkinson hastalığı', 'Periferik nöropatiler', 'İstem dışı kol ve bacak hareketleri', 'Demansiyel sendromlar (unutkanlık, bunama)', 'MR, BT ve anjiyografi'] },
        { type: 'p', text: 'Aynı gün, sıra beklemeden MR hizmeti Özel Kars Hayat Hastanesi ayrıcalığıyla sunulmaktadır.' }
      ]
    },
    en: {
      title: 'Our neurology department is now accepting patients',
      excerpt: 'Expert care in brain and nervous system diseases under Uzm. Dr. Levent Ali Derman.',
      article: [
        { type: 'p', text: 'Under the leadership of Neurology Specialist Uzm. Dr. Levent Ali Derman, we are at your side with extensive experience and a patient-centered approach.' },
        { type: 'h3', text: 'Areas of service' },
        { type: 'ul', items: ['Headaches and types', 'Brain and vascular diseases', 'Movement disorders', 'Muscle and nerve diseases', 'Balance disorders', 'Sleep disorders', 'Vertigo and dizziness', 'Parkinson\'s disease', 'Peripheral neuropathies', 'Involuntary limb movements', 'Dementia syndromes', 'MRI, CT and angiography'] },
        { type: 'p', text: 'Same-day MRI service without waiting — a Private Kars Hayat Hospital privilege.' }
      ]
    }
  },
  'obstetrik-usg': {
    category: { tr: 'Kadın Doğum', en: 'Obstetrics' },
    tags: { tr: ['USG', 'Gebelik', '2. Düzey'], en: ['Ultrasound', 'Pregnancy', 'Level II'] },
    tr: {
      title: 'Ayrıntılı obstetrik ultrasonografi (2. düzey USG)',
      excerpt: 'Gebeliğin 20-24. haftalarında bebeğin organlarının detaylı değerlendirildiği özel ultrason incelemesi.',
      article: [
        { type: 'p', text: 'Ayrıntılı obstetrik ultrasonografi; gebeliğin genellikle 20-24. haftaları arasında yapılan, bebeğin organlarının detaylı olarak değerlendirildiği özel bir ultrason incelemesidir.' },
        { type: 'p', text: 'Bu incelemede bebeğin beyin, yüz, dudak, omurga, kalp, mide, böbrek, kol ve bacak yapıları ayrıntılı incelenir. Bebeğin gelişimi ve büyümesi değerlendirilir. Plasenta, amniyon sıvısı ve rahim damarları kontrol edilir.' },
        { type: 'p', text: 'Güvenli ve ağrısızdır. Anne ve bebek için güvenlidir; ortalama 30-45 dakika sürmektedir. Erken tanı, sağlıklı bir gebelik ve güvenli bir gelecek için önemlidir. Op. Dr. Esmahan Nida Kaplan tarafından uygulanmaktadır.' }
      ]
    },
    en: {
      title: 'Detailed obstetric ultrasonography (Level II USG)',
      excerpt: 'A specialized ultrasound examination evaluating fetal organs in weeks 20-24 of pregnancy.',
      article: [
        { type: 'p', text: 'Detailed obstetric ultrasonography is a specialized examination performed between weeks 20-24 of pregnancy, evaluating fetal organs in detail.' },
        { type: 'p', text: 'The brain, face, lips, spine, heart, stomach, kidneys, arms and legs are examined in detail. Fetal growth and development, placenta, amniotic fluid and uterine vessels are assessed.' },
        { type: 'p', text: 'It is safe and painless for mother and baby, taking approximately 30-45 minutes. Early diagnosis is vital for a healthy pregnancy. Performed by Op. Dr. Esmahan Nida Kaplan.' }
      ]
    }
  },
  'radyoloji-biyopsi': {
    category: { tr: 'Radyoloji', en: 'Radiology' },
    tags: { tr: ['Biyopsi', 'Meme', 'Tiroid'], en: ['Biopsy', 'Breast', 'Thyroid'] },
    tr: {
      title: 'USG eşliğinde meme ve tiroid biyopsisi',
      excerpt: 'Şüpheli kitlelerden doku örneği alınarak kesin tanı konulmasını sağlayan güvenli yöntem.',
      article: [
        { type: 'p', text: 'Radyoloji Uzmanı Uzm. Dr. Selçuk Yaşar öncülüğünde deneyimli ekibiyle hasta kabulüne başlamıştır.' },
        { type: 'p', text: 'Ultrason eşliğinde, şüpheli kitle veya nodüllerden doku örneği alınarak kesin tanı konulmasını sağlayan güvenli ve etkili bir yöntemdir.' },
        { type: 'h3', text: 'Neden önemli?' },
        { type: 'ul', items: ['Erken tanı hayat kurtarır', 'Meme kitlelerinde biyopsi', 'Tiroid nodüllerinde biyopsi', 'Kesin tanı için güvenilir yöntem', 'Alanında uzman yaklaşım'] },
        { type: 'p', text: 'Sağlığınız bizim için değerli. Modern görüntüleme teknolojileri ve uzman kadromuzla yanınızdayız.' }
      ]
    },
    en: {
      title: 'USG-guided breast and thyroid biopsy',
      excerpt: 'A safe method for definitive diagnosis by sampling tissue from suspicious masses.',
      article: [
        { type: 'p', text: 'Under Radiology Specialist Uzm. Dr. Selçuk Yaşar, our experienced team has begun accepting patients.' },
        { type: 'p', text: 'USG-guided biopsy is a safe and effective method for definitive diagnosis by sampling tissue from suspicious masses or nodules.' },
        { type: 'h3', text: 'Why it matters' },
        { type: 'ul', items: ['Early diagnosis saves lives', 'Breast mass biopsy', 'Thyroid nodule biopsy', 'Reliable method for definitive diagnosis', 'Expert approach'] },
        { type: 'p', text: 'Your health matters to us. We are here with modern imaging technology and our specialist team.' }
      ]
    }
  },
  'dahiliye': {
    category: { tr: 'Dahiliye', en: 'Internal Medicine' },
    tags: { tr: ['Dahiliye', 'Diyabet', 'Hipertansiyon'], en: ['Internal Medicine', 'Diabetes', 'Hypertension'] },
    tr: {
      title: 'Dahiliye servisimiz hasta kabulüne başladı',
      excerpt: 'Uzm. Dr. Mutlu Şahin öncülüğünde iç hastalıklarında kapsamlı tanı ve takip.',
      article: [
        { type: 'p', text: 'İç Hastalıkları Uzmanı Uzm. Dr. Mutlu Şahin öncülüğünde deneyimli ekibiyle hasta kabulüne başlamıştır.' },
        { type: 'h3', text: 'Hizmet alanlarımız' },
        { type: 'ul', items: ['Kapsamlı dahiliye muayenesi ve erken tanı', 'Diyabet (şeker hastalığı) takibi', 'Hipertansiyon (tansiyon) takibi', 'Mide ve bağırsak hastalıkları', 'Solunum yolu hastalıkları', 'Tiroid bezi hastalıkları'] },
        { type: 'p', text: 'Erken tanı, doğru tedavi, düzenli takip, sağlıklı yaşam ve kişiye özel yaklaşım ile sağlığınız için hizmetinizdeyiz.' }
      ]
    },
    en: {
      title: 'Our internal medicine department is now accepting patients',
      excerpt: 'Comprehensive diagnosis and follow-up under Uzm. Dr. Mutlu Şahin.',
      article: [
        { type: 'p', text: 'Under Internal Medicine Specialist Uzm. Dr. Mutlu Şahin, our experienced team has begun accepting patients.' },
        { type: 'h3', text: 'Areas of service' },
        { type: 'ul', items: ['Comprehensive internal medicine examination', 'Diabetes follow-up', 'Hypertension follow-up', 'Gastrointestinal diseases', 'Respiratory diseases', 'Thyroid diseases'] },
        { type: 'p', text: 'Early diagnosis, proper treatment, regular follow-up and personalized care for your health.' }
      ]
    }
  },
  'hastane-ailesi': {
    category: { tr: 'Kurumsal', en: 'Corporate' },
    tags: { tr: ['Hastane', 'Ekip', 'Kars'], en: ['Hospital', 'Team', 'Kars'] },
    tr: {
      title: 'Özel Kars Hayat Hastanesi ailesi',
      excerpt: '150\'den fazla çalışanımızla teknolojik altyapı ve uzman kadro ile hizmetinizdeyiz.',
      article: [
        { type: 'p', text: 'Özel Kars Hayat Hastanesi ailesi olarak, teknolojik olarak en üst düzeyde donatılan hastanemiz, alanlarında profesyonel ve deneyimli uzman ekibiyle hizmetinize hazır.' },
        { type: 'p', text: 'Kulak Burun Boğaz (KBB), İç Hastalıkları (Dahiliye), Kadın Hastalıkları ve Doğum, Çocuk Sağlığı ve Hastalıkları, Genel Cerrahi alanlarında ve pek yakında diğer alanlardaki uzman ekibiyle hizmetlerine devam edecektir.' },
        { type: 'p', text: 'Radyoloji bölümü ile birçok tahlilin yapıldığı hastanemizde 7/24 acil servisiyle de hizmet vermektedir. karshayathastanesi.com üzerinden online randevu alabilir ve tahlil sonuçlarınıza ulaşabilirsiniz.' }
      ]
    },
    en: {
      title: 'The Private Kars Hayat Hospital family',
      excerpt: 'Over 150 staff members serving you with advanced technology and expert physicians.',
      article: [
        { type: 'p', text: 'As the Private Kars Hayat Hospital family, our hospital equipped with cutting-edge technology and a professional, experienced specialist team is ready to serve you.' },
        { type: 'p', text: 'We continue to grow in ENT, Internal Medicine, Obstetrics & Gynecology, Pediatrics, General Surgery and soon additional specialties.' },
        { type: 'p', text: 'With radiology and 24/7 emergency services, book appointments and access test results at karshayathastanesi.com.' }
      ]
    }
  },
  'cocuk': {
    category: { tr: 'Çocuk Sağlığı', en: 'Pediatrics' },
    tags: { tr: ['Pediatri', 'Aşı', 'Çocuk'], en: ['Pediatrics', 'Vaccination', 'Children'] },
    tr: {
      title: 'Çocuk Sağlığı ve Hastalıkları servisimiz hasta kabulüne başladı',
      excerpt: 'Uzm. Dr. Erhan Zencir ile 0-18 yaş büyüme, aşı ve hastalık takibi.',
      article: [
        { type: 'p', text: 'Çocuk Sağlığı ve Hastalıkları Uzmanı Uzm. Dr. Erhan Zencir öncülüğünde çocuk sağlığı için bilgi, deneyim ve sevgiyle sizlerin yanınızdayız.' },
        { type: 'p', text: 'Ailemizin en değerli varlığı olan çocuklarımız için; sağlıklı çocuklar, mutlu yarınlar sloganıyla uzun yıllara dayanan deneyimle yenidoğan takibi, aşı takibi, büyüme ve gelişme takibi ve çocuk sağlığına dair her konuda yardımcı oluyoruz.' },
        { type: 'p', text: 'Çocuklarınız emin ellerde. Sağlıklı yarınlar için buradayız.' }
      ]
    },
    en: {
      title: 'Our pediatrics department is now accepting patients',
      excerpt: 'Growth, vaccination and disease follow-up for ages 0-18 with Uzm. Dr. Erhan Zencir.',
      article: [
        { type: 'p', text: 'Under Pediatrics Specialist Uzm. Dr. Erhan Zencir, we are by your side with knowledge, experience and care for children\'s health.' },
        { type: 'p', text: 'For our most precious family members: newborn follow-up, vaccination schedules, growth and development monitoring, and all aspects of child health.' },
        { type: 'p', text: 'Your children are in safe hands. Here for healthy tomorrows.' }
      ]
    }
  },
  'kbb': {
    category: { tr: 'KBB', en: 'ENT' },
    tags: { tr: ['KBB', 'Kulak', 'Burun'], en: ['ENT', 'Ear', 'Nose'] },
    tr: {
      title: 'Kulak Burun Boğaz (KBB) servisimiz hasta kabulüne başladı',
      excerpt: 'Op. Dr. Haktan Ergin Bağış ve ekibi ile KBB alanında kapsamlı hizmet.',
      article: [
        { type: 'p', text: 'Op. Dr. Haktan Ergin Bağış ve ekibi, Özel Kars Hayat Hastanesi çatısı altında hizmet vermektedir.' },
        { type: 'h3', text: 'Tedavi alanları' },
        { type: 'ul', items: ['Kulak hastalıkları', 'Burun ve sinüs hastalıkları', 'Boğaz hastalıkları', 'İşitme problemleri', 'Allerjik ve enfeksiyon tedavileri', 'Estetik cerrahi'] },
        { type: 'p', text: 'Sağlığınız emin ellerde. Kulak, burun ve boğaz sağlığınız için buradayız.' }
      ]
    },
    en: {
      title: 'Our ENT department is now accepting patients',
      excerpt: 'Comprehensive ENT care with Op. Dr. Haktan Ergin Bağış and team.',
      article: [
        { type: 'p', text: 'Op. Dr. Haktan Ergin Bağış and team serve under Private Kars Hayat Hospital.' },
        { type: 'h3', text: 'Treatment areas' },
        { type: 'ul', items: ['Ear diseases', 'Nose and sinus diseases', 'Throat diseases', 'Hearing problems', 'Allergic and infection treatments', 'Aesthetic surgery'] },
        { type: 'p', text: 'Your health is in safe hands. We are here for your ear, nose and throat health.' }
      ]
    }
  },
  'yuksek-tansiyon': {
    category: { tr: 'Sağlık Rehberi', en: 'Health Guide' },
    tags: { tr: ['Hipertansiyon', 'Tansiyon', 'Dahiliye'], en: ['Hypertension', 'Blood Pressure', 'Internal Medicine'] },
    tr: {
      title: 'Yüksek tansiyon belirtileri nelerdir? Hipertansiyon nedir?',
      excerpt: 'Hipertansiyon, modern yaşamın sessiz tehlikesi. Belirtiler, nedenler ve tedavi.',
      article: [
        { type: 'p', text: 'Hipertansiyon, günümüzde modern yaşamın getirdiği stres ve beslenme alışkanlıklarıyla beraber sağlık gündeminin en üst sıralarında yer alan kritik bir konudur.' },
        { type: 'h3', text: 'Hipertansiyon nedir? Sessiz tehlikeyi tanıyın' },
        { type: 'p', text: 'Kanın damar duvarlarına uyguladığı basıncın normal sınırların üzerinde seyretmesidir. Zamanla damar yapısını bozarak organ yetmezliklerine yol açabilir. Halk arasında "sessiz katil" olarak bilinir.' },
        { type: 'h3', text: 'Yüksek tansiyon neden olur?' },
        { type: 'ul', items: ['Genetik faktörler ve aile öyküsü', 'Aşırı tuz tüketimi', 'Hareketsiz yaşam', 'Obezite', 'Sigara ve alkol kullanımı', 'Böbrek hastalıkları'] },
        { type: 'h3', text: 'Belirtileri nelerdir?' },
        { type: 'ul', items: ['Şiddetli baş ağrısı (özellikle ense bölgesinde)', 'Kulak çınlaması', 'Burun kanaması', 'Baş dönmesi ve denge kaybı', 'Görme sorunları', 'Çarpıntı'] },
        { type: 'h3', text: 'Normal değerler' },
        { type: 'p', text: 'Sağlıklı bir bireyde kan basıncı 120/80 mmHg altında kabul edilir. 140/90 mmHg üzeri hipertansiyon olarak değerlendirilir. Düzenli kontrol şarttır.' },
        { type: 'p', text: 'Dahiliye bölümümüzde hipertansiyon takibi ve tedavisi yapılmaktadır. Erken tanı için randevu alın.' }
      ]
    },
    en: {
      title: 'What are high blood pressure symptoms? What is hypertension?',
      excerpt: 'Hypertension — the silent threat of modern life. Symptoms, causes and treatment.',
      article: [
        { type: 'p', text: 'Hypertension ranks among the most critical health issues today, driven by stress and dietary habits of modern life.' },
        { type: 'h3', text: 'What is hypertension?' },
        { type: 'p', text: 'It is when blood pressure against artery walls exceeds normal limits. Over time it can damage vessels and lead to organ failure. Known as the "silent killer" because it often shows no symptoms.' },
        { type: 'h3', text: 'What causes high blood pressure?' },
        { type: 'ul', items: ['Genetic factors and family history', 'Excessive salt intake', 'Sedentary lifestyle', 'Obesity', 'Smoking and alcohol', 'Kidney diseases'] },
        { type: 'h3', text: 'What are the symptoms?' },
        { type: 'ul', items: ['Severe headache (especially at the back of the head)', 'Ringing in the ears', 'Nosebleeds', 'Dizziness and loss of balance', 'Vision problems', 'Palpitations'] },
        { type: 'h3', text: 'Normal values' },
        { type: 'p', text: 'Healthy blood pressure is below 120/80 mmHg. Above 140/90 mmHg is considered hypertension. Regular check-ups are essential.' },
        { type: 'p', text: 'Hypertension follow-up and treatment are available in our internal medicine department.' }
      ]
    }
  },
  'migren': {
    category: { tr: 'Sağlık Rehberi', en: 'Health Guide' },
    tags: { tr: ['Migren', 'Nöroloji', 'Baş ağrısı'], en: ['Migraine', 'Neurology', 'Headache'] },
    tr: {
      title: 'Migren nedir? Belirtileri, nedenleri ve tedavi yöntemleri',
      excerpt: 'Migren atakları, belirtiler ve tedavi seçenekleri hakkında kapsamlı rehber.',
      article: [
        { type: 'p', text: 'Migren, dünya genelinde milyonlarca insanın yaşadığı, genellikle başın bir tarafında şiddetli ağrıya neden olan nörolojik bir rahatsızlıktır. Bulantı, kusma ve ışığa duyarlılık gibi semptomlarla yaşam kalitesini ciddi şekilde etkileyebilir.' },
        { type: 'h3', text: 'Migren nedir?' },
        { type: 'p', text: 'Sıradan bir baş ağrısından çok daha fazlasıdır. Ataklar birkaç saatten birkaç güne kadar sürebilir. Migren atakları dört evrede gelişebilir: prodrom, aura, baş ağrısı ve postdrom.' },
        { type: 'h3', text: 'Belirtileri nelerdir?' },
        { type: 'ul', items: ['Başın tek tarafında yoğun ağrı', 'Bulantı ve kusma', 'Işık, ses ve kokuya aşırı duyarlılık', 'Görme bozuklukları (aura)', 'Konuşma güçlüğü'] },
        { type: 'h3', text: 'Nedenleri' },
        { type: 'ul', items: ['Genetik yatkınlık', 'Hormon değişiklikleri', 'Stres ve uyku düzensizliği', 'Belirli gıdalar ve içecekler', 'Hava değişiklikleri'] },
        { type: 'h3', text: 'Tedavi ve yönetim' },
        { type: 'p', text: 'Akut tedavi atak sırasında ağrıyı hafifletir; önleyici tedavi atak sırasını azaltır. Yaşam tarzı değişiklikleri, düzenli uyku ve tetikleyicilerden kaçınma önemlidir. Nöroloji bölümümüzde migren tanı ve tedavisi yapılmaktadır.' }
      ]
    },
    en: {
      title: 'What is migraine? Symptoms, causes and treatments',
      excerpt: 'A comprehensive guide to migraine attacks, symptoms and treatment options.',
      article: [
        { type: 'p', text: 'Migraine is a neurological condition affecting millions worldwide, typically causing severe pain on one side of the head, with nausea, vomiting and sensitivity to light.' },
        { type: 'h3', text: 'What is migraine?' },
        { type: 'p', text: 'Far more than an ordinary headache. Attacks can last hours to days and progress through four phases: prodrome, aura, headache and postdrome.' },
        { type: 'h3', text: 'Symptoms' },
        { type: 'ul', items: ['Intense pain on one side of the head', 'Nausea and vomiting', 'Sensitivity to light, sound and smell', 'Visual disturbances (aura)', 'Speech difficulty'] },
        { type: 'h3', text: 'Causes' },
        { type: 'ul', items: ['Genetic predisposition', 'Hormonal changes', 'Stress and sleep irregularity', 'Certain foods and drinks', 'Weather changes'] },
        { type: 'h3', text: 'Treatment and management' },
        { type: 'p', text: 'Acute treatment relieves pain during attacks; preventive treatment reduces frequency. Lifestyle changes, regular sleep and avoiding triggers are key. Migraine care is available in our neurology department.' }
      ]
    }
  },
  'dogum-programi': {
    category: { tr: 'Kadın Doğum', en: 'Obstetrics' },
    tags: { tr: ['Doğum', 'Gebelik', 'Program'], en: ['Birth', 'Pregnancy', 'Program'] },
    tr: {
      title: 'Kadın doğum programı',
      excerpt: 'Hamilelikten doğum sonrasına kadar anne ve bebek sağlığını kapsayan özel program.',
      article: [
        { type: 'p', text: 'Doğum programı, anne adaylarının hamilelik döneminden doğum sonrasına kadar ihtiyaç duydukları sağlık hizmetlerini kapsayan özel bir sağlık programıdır. Düzenli muayeneler, tarama testleri, eğitimler ve psikolojik destek sunar.' },
        { type: 'h3', text: '9 aylık doğum programı nedir?' },
        { type: 'p', text: 'Hamilelik sürecinden doğum sonrasına kadar annenin ve bebeğin sağlığına yönelik tıbbi ve destekleyici hizmetleri içeren bir programdır. Gebelik tarama testleri, düzenli kontroller ve hekim desteği sunar.' },
        { type: 'h3', text: 'Neden gerekli?' },
        { type: 'ul', items: ['Anne ve bebeğin sağlığını sağlamak için düzenli muayene ve tarama', 'Hamilelik, doğum ve doğum sonrası eğitim ve bilinçlendirme', 'Gebelik tarama testleri ile genetik hastalıkların erken tespiti'] },
        { type: 'p', text: 'Doğum programı hizmetleri Op. Dr. Esmahan Nida Kaplan öncülüğünde sunulmaktadır.' }
      ]
    },
    en: {
      title: 'Maternity program',
      excerpt: 'A specialized program covering mother and baby health from pregnancy through postpartum.',
      article: [
        { type: 'p', text: 'The maternity program covers healthcare needs from pregnancy through postpartum, including regular examinations, screening tests, education and psychological support.' },
        { type: 'h3', text: 'What is the 9-month maternity program?' },
        { type: 'p', text: 'A program of medical and supportive services for mother and baby health from pregnancy through postpartum, including screening tests and regular check-ups.' },
        { type: 'h3', text: 'Why is it important?' },
        { type: 'ul', items: ['Regular examinations and screening for mother and baby health', 'Education on pregnancy, birth and postpartum care', 'Early detection of genetic conditions through screening tests'] },
        { type: 'p', text: 'Maternity program services are provided under Op. Dr. Esmahan Nida Kaplan.' }
      ]
    }
  }
};