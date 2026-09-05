import { ProjectItem, ServiceItem, ExperienceItem, SkillCategory, PhilosophyItem, ImpactStat } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Ali Abdul Kholiq',
  shortName: 'Ali Kholiq',
  tagline: 'Communicator · Leader · Community Builder',
  centralStatement: 'A young communicator and leader who thrives at the intersection of stage presence, team discipline, and grassroots community empowerment.',
  narrativeLead: 'Di atas lapangan hijau saya belajar disiplin dan teamwork. Di atas panggung saya belajar menyatukan energi audiens. Dan di dalam komunitas, saya belajar memimpin dengan empati dan tanggung jawab nyata.',
  email: 'muhammadaliabdulkholiq@gmail.com',
  whatsapp: '+62 85179939515',
  whatsappUrl: 'https://wa.me/6285179939515',
  instagram: '@muhammadaliabdulkholiq',
  instagramUrl: 'https://instagram.com/muhammadaliabdulkholiq',
  location: 'Indonesia',
  status: 'Open for MC Hosting, Speaking & Community Collabs',
};

export const THREE_SIDES_DATA = [
  {
    id: 'player',
    number: '01',
    title: 'The Player',
    symbol: '⚽',
    subtitle: 'Teamwork · Discipline · Resilience',
    quote: 'Sepak bola mengajarkan saya bahwa talenta individu tidak ada artinya tanpa kekompakan tim dan daya tahan di menit-menit krusial.',
    story: 'Di lapangan sepak bola, tidak ada ruang untuk ego. Setiap operan membutuhkan pengertian, setiap transisi membutuhkan konsistensi, dan setiap kekalahan melatih resiliensi mental. Nilai-nilai inilah yang saya bawa ke panggung dan ruang kepemimpinan: selalu siap bekerja keras, membaca situasi dengan tenang, dan saling menutupi kekurangan tim.',
    keyAttributes: [
      { label: 'Discipline', desc: 'Konsistensi latihan dan kepatuhan pada instruksi taktik' },
      { label: 'Teamwork', desc: 'Percaya rekan satu tim dan bergerak sebagai satu kesatuan' },
      { label: 'Resilience', desc: 'Mental pantang menyerah meski situasi sedang di bawah tekanan' },
      { label: 'Competitive Spirit', desc: 'Hasrat sehat untuk selalu memberikan performa terbaik' }
    ],
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Di lapangan: membangun chemistry, disiplin ritme, dan ketahanan mental.',
    accentColor: '#1E3A8A' // Deep Blue
  },
  {
    id: 'host',
    number: '02',
    title: 'The Host',
    symbol: '🎙️',
    subtitle: 'Communication · Stage Presence · Audience Connection',
    quote: 'Menjadi MC bukan tentang mengambil lampu sorot untuk diri sendiri, melainkan menyalakan energi seluruh ruangan agar setiap orang merasa terhubung.',
    story: 'Berbicara di depan publik bagi saya adalah seni merajut suasana. Dari pembukaan yang berenergi hingga menjaga timing rangkaian acara yang presisi, saya menikmati momentum saat audiens yang awalnya pasif berubah menjadi antusias dan terlibat. Kemampuan mengamati bahasa tubuh, beradaptasi dengan perubahan tak terduga, dan menjaga mood panggung adalah instrumen utama saya.',
    keyAttributes: [
      { label: 'Audience Engagement', desc: 'Membaca emosi audiens dan membangun respon interaktif yang hangat' },
      { label: 'Public Presence', desc: 'Artikulasi lugas, vokal berbobot, dan ketenangan di depan sorot lampu' },
      { label: 'Time & Cue Management', desc: 'Presisi mengawal rundown dan sigap mengatasi improvisasi panggung' },
      { label: 'Mood Curation', desc: 'Menciptakan transisi mulus dari formal khidmat ke santai penuh antusiasme' }
    ],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Di atas panggung: menghidupkan suasana dan mengalirkan cerita sebuah acara.',
    accentColor: '#D97706' // Warm Amber
  },
  {
    id: 'leader',
    number: '03',
    title: 'The Leader',
    symbol: '🕌',
    subtitle: 'Organization · Youth Empowerment · Real Impact',
    quote: 'Kepemimpinan pemuda bukan tentang memerintah dari atas, melainkan merangkul di samping dan membuka ruang agar setiap anak muda menemukan peran terbaiknya.',
    story: 'Sebagai Ketua Remaja Islam Masjid Al-Muhtadun (RIMA), saya mendedikasikan waktu dan pemikiran untuk mengaktifkan potensi generasi muda. Memimpin organisasi pemuda masjid membutuhkan pendekatan yang luwes, modern, dan inklusif. Kami merancang program kajian tematik yang relevan, aksi sosial, kaderisasi, hingga kegiatan kebersamaan yang membuktikan bahwa pemuda masjid bisa mandiri, adaptif, dan berpengaruh positif.',
    keyAttributes: [
      { label: 'Community Building', desc: 'Membangun ekosistem pemuda yang suportif, hangat, dan solid' },
      { label: 'Program Architecture', desc: 'Merancang kegiatan dari konsep strategis hingga eksekusi lapangan' },
      { label: 'Team Stewardship', desc: 'Mengelola dinamika panitia dengan pembagian peran yang adil dan apresiatif' },
      { label: 'Problem Solving', desc: 'Menavigasi kendala dana, logistik, dan regenerasi dengan solusi taktis' }
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    caption: 'Di tengah komunitas: menggerakkan pemuda untuk berdaya dan berkontribusi.',
    accentColor: '#047857' // Deep Emerald
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'mc-hosting',
    number: '01',
    title: 'MC & Event Hosting',
    subtitle: 'Memandu acara dengan pembawaan energik, luwes, dan berkarakter.',
    description: 'Menjaga jalannya acara tetap hidup, mengalir tepat waktu, dan meninggalkan kesan mendalam bagi para peserta maupun penyelenggara.',
    deliverables: [
      'Master of Ceremony formal & semi-formal',
      'Moderator seminar & talkshow pemuda',
      'Pemandu gathering & community meetup',
      'Penyusunan alur ice breaking interaktif'
    ],
    idealFor: 'Acara komunitas, seminar kampus/sekolah, festival pemuda, perayaan hari besar, dan acara korporat/keorganisasian.',
    iconName: 'Mic'
  },
  {
    id: 'public-speaking',
    number: '02',
    title: 'Public Speaking & Sharing',
    subtitle: 'Membagikan insight kepemudaan, komunikasi, dan pergerakan organisasi.',
    description: 'Penyampaian materi yang grounded, aplikatif, dan relate dengan tantangan generasi muda masa kini.',
    deliverables: [
      'Sharing session kepemimpinan pemuda',
      'Workshop dasar public speaking & rasa percaya diri',
      'Motivasi kaderisasi & keaktifan organisasi',
      'Diskusi interaktif pemuda dan masjid'
    ],
    idealFor: 'Latihan Dasar Kepemimpinan (LDK), orientasi mahasiswa baru/santri, forum remaja masjid, dan workshop komunitas.',
    iconName: 'Volume2'
  },
  {
    id: 'event-management',
    number: '03',
    title: 'Event & Program Management',
    subtitle: 'Membantu merancang konsep hingga mengawal eksekusi operasional acara.',
    description: 'Menerjemahkan ide acara menjadi rundown matang, kesiapan tim teknis, dan pengalaman peserta yang terstruktur.',
    deliverables: [
      'Penyusunan konsep & timeline acara',
      'Manajemen rundown & crowd control lapangan',
      'Briefing teknis panitia & pembagian jobdesc',
      'Evaluasi pasca-acara & reporting'
    ],
    idealFor: 'Penyelenggara festival, peringatan hari besar Islam, pesantren kilat, seminar tematik, dan kegiatan sosial.',
    iconName: 'CalendarDays'
  },
  {
    id: 'community-organizing',
    number: '04',
    title: 'Community & Team Building',
    subtitle: 'Membangun kohesi tim dan menggerakkan komunitas dari nol.',
    description: 'Menghidupkan atmosfer komunitas yang inklusif, memberdayakan anggota, dan menumbuhkan rasa kepemilikan bersama.',
    deliverables: [
      'Fasilitasi sesi bonding & team alignment',
      'Perumusan struktur kerja kepengurusan pemuda',
      'Sistem komunikasi internal yang efektif',
      'Pendampingan regenerasi kepemimpinan'
    ],
    idealFor: 'Organisasi kepemudaan, karang taruna, remaja masjid, dan inisiatif komunitas lokal.',
    iconName: 'Users'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'events',
    value: 25,
    suffix: '+',
    label: 'Events & Panggung Terpandu',
    description: 'Memandu rangkaian acara dari skala seminar, tabligh akbar, hingga gathering komunitas.'
  },
  {
    id: 'audience',
    value: 1500,
    suffix: '+',
    label: 'Audiens & Partisipan',
    description: 'Pemuda, santri, dan masyarakat umum yang terlibat dalam program yang saya bawakan atau kelola.'
  },
  {
    id: 'programs',
    value: 12,
    suffix: '+',
    label: 'Program Organisasi Sukses',
    description: 'Inisiatif kepemudaan yang dirancang dan dieksekusi bersama tim RIMA.'
  },
  {
    id: 'experience',
    value: 3,
    suffix: '+',
    label: 'Tahun Dedikasi Aktif',
    description: 'Konsisten berkontribusi di bidang komunikasi panggung dan kepemimpinan komunitas muda.'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'rima-leadership',
    title: 'Remaja Islam Masjid Al-Muhtadun (RIMA)',
    category: 'Leadership',
    year: '2024 — Sekarang',
    role: 'Ketua Umum / Youth Organization Leader',
    tagline: 'Membangun kembali ekosistem pemuda masjid yang relevan, aktif, dan berdampak nyata bagi lingkungan sekitar.',
    description: 'Sebagai Ketua RIMA, tugas utama saya adalah mentransformasi persepsi organisasi pemuda masjid agar tidak terasa kaku atau eksklusif. Kami menata ulang sistem komunikasi internal, merangkul remaja sebaya dengan pendekatan humanis, dan mengadakan kegiatan yang menjawab kebutuhan aktual anak muda saat ini.',
    challenge: 'Apatisme pemuda terhadap masjid dan keterbatasan regenerasi kepengurusan sebelumnya.',
    whatIDid: [
      'Menyusun struktur kepengurusan yang ramping dan berbasis minat bakat anggota.',
      'Membangun budaya rapat yang terbuka, kolaboratif, dan tanpa jarak hierarki yang kaku.',
      'Meluncurkan program unggulan bulanan yang menggabungkan kajian keislaman dengan diskusi isu kepemudaan.',
      'Memperluas jejaring kolaborasi dengan pengurus DKM, tokoh masyarakat, dan komunitas pemuda sekitar.'
    ],
    result: 'Terbentuknya tim pengurus inti yang solid, meningkatnya partisipasi pemuda di masjid hingga dua kali lipat, dan lahirnya program rutin yang berkelanjutan.',
    impactMetrics: '[XX]+ Anggota Aktif & Pengurus Baru Terkader',
    tags: ['Leadership', 'Community Building', 'Youth Empowerment', 'Team Governance'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'karima-kajian',
    title: 'KaRIMA (Kajian Remaja Islam Al-Muhtadun)',
    category: 'Event Management',
    year: '2024 — 2026',
    role: 'Program Director & Host',
    tagline: 'Mengemas kajian pemuda dengan format interaktif, tema kontekstual, dan atmosfer yang hangat.',
    description: 'KaRIMA adalah inisiatif serial diskusi tematik yang mendiskusikan topik-topik nyata yang dihadapi pemuda: manajemen diri, pergaulan sehat, mental health dari perspektif Islam, hingga persiapan masa depan.',
    challenge: 'Membuat format kajian tidak membosankan dan mendorong peserta untuk berani bertanya serta berdiskusi santai.',
    whatIDid: [
      'Merumuskan topik kajian yang relate dengan kehidupan sehari-hari anak muda.',
      'Bertindak sebagai moderator dan MC pemandu diskusi dua arah.',
      'Menata layout ruangan yang ramah diskusi serta mengelola publikasi media sosial.',
      'Mengkoordinasikan tim konsumsi, sound system, dan tim dokumentasi.'
    ],
    result: 'Kehadiran audiens yang konsisten dari berbagai latar belakang pemuda, interaksi tanya jawab yang aktif, dan feedback peserta yang sangat positif.',
    impactMetrics: '[XX]+ Seri Kajian Terlaksana dengan Konsisten',
    tags: ['Program Management', 'Moderation', 'Content Curation', 'Event Operations'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'mc-stage-events',
    title: 'MC & Event Hosting Engagements',
    category: 'MC & Speaking',
    year: '2023 — Sekarang',
    role: 'Master of Ceremony & Host',
    tagline: 'Memandu berbagai acara formal dan semi-formal dengan artikulasi jelas dan energi panggung yang prima.',
    description: 'Menjadi garda terdepan pembawa suasana dalam berbagai agenda publik: dari festival kepemudaan, wisuda tahfidz, peringatan hari besar, hingga diskusi umum.',
    challenge: 'Menghadapi rundown acara yang seringkali bergeser waktu secara mendadak serta audiens dengan rentang usia yang beragam.',
    whatIDid: [
      'Melakukan riset mendalam profil pengisi acara dan audiens sebelum naik ke panggung.',
      'Melakukan improvisasi cerdas untuk mengisi jeda tanpa membuat audiens jenuh.',
      'Menjaga koordinasi ketat dengan show director dan operator sound.',
      'Menghidupkan audiens melalui storytelling pembuka dan ice-breaking yang tepat konteks.'
    ],
    result: 'Acara berjalan lancar, tertib, tepat waktu, dengan apresiasi tinggi dari panitia penyelenggara atas kemampuan menjaga ritme acara.',
    impactMetrics: '[XX]+ Jam Panggung Tanpa Kendala Teknis',
    tags: ['Public Speaking', 'Master of Ceremony', 'Stage Presence', 'Crowd Engagement'],
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'sanlat-ramadhan',
    title: 'Pesantren Kilat (Sanlat) Ramadhan',
    category: 'Event Management',
    year: '2024 & 2025',
    role: 'Koordinator Acara & Fasilitator',
    tagline: 'Program intensif pembentukan karakter anak dan remaja dengan kurikulum interaktif dan menyenangkan.',
    description: 'Kegiatan edukasi dan pembentukan karakter selama bulan suci Ramadhan bagi anak-anak dan remaja di lingkungan sekitar masjid.',
    challenge: 'Menjaga konsentrasi dan kebahagiaan peserta usia muda selama rangkaian acara seharian penuh saat berpuasa.',
    whatIDid: [
      'Menyusun modul fun learning yang memadukan materi adab, quranic quiz, dan simulasi teamwork.',
      'Mengatur rotasi tim mentor remaja untuk mendampingi kelompok kecil peserta.',
      'Memimpin sesi pembukaan, games interaktif, dan penutupan puncak apresiasi.',
      'Berkoordinasi dengan para orang tua peserta terkait logistik dan jadwal penjemputan.'
    ],
    result: 'Antusiasme luar biasa dari puluhan anak dan apresiasi tinggi dari para orang tua atas kehangatan pengurus RIMA.',
    impactMetrics: '[XX]+ Peserta Anak & Remaja Terdampingi',
    tags: ['Youth Education', 'Operations', 'Curriculum Execution', 'Community Trust'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'rihlah-gathering',
    title: 'Rihlah & Community Youth Gathering',
    category: 'Community',
    year: '2024',
    role: 'Project Lead & Outbound Organizer',
    tagline: 'Menguatkan ukhuwah dan kebersamaan lewat agenda outdoor yang penuh kehangatan dan kekeluargaan.',
    description: 'Kegiatan rekreasi edukatif luar ruang yang dirancang untuk merekatkan hubungan emosional antar pengurus dan pemuda masjid setelah menyelesaikan agenda besar.',
    challenge: 'Manajemen risiko outdoor, mobilisasi transportasi peserta, dan menjaga anggaran tetap efisien namun berkesan.',
    whatIDid: [
      'Menentukan lokasi, survei rute, dan mengurus perizinan serta logistik transportasi.',
      'Merancang fun team building games yang menuntut kerjasama tanpa membebani fisik secara berlebihan.',
      'Memimpin malam keakraban dengan sesi refleksi dan saling tukar masukan untuk kemajuan bersama.',
      'Memastikan keamanan, kesehatan, dan kenyamanan seluruh peserta dari keberangkatan hingga kepulangan.'
    ],
    result: 'Terciptanya bonding internal yang jauh lebih erat dan penurunan friksi tim, siap menyongsong kepengurusan baru dengan semangat segar.',
    impactMetrics: '100% Kepuasan Peserta & Zero Accident',
    tags: ['Team Bonding', 'Outdoor Operations', 'Logistics', 'Youth Camaraderie'],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    year: '2024 — Sekarang',
    period: '2024 — Present',
    role: 'Ketua / Youth Organization Leader',
    organization: 'Remaja Islam Masjid Al-Muhtadun (RIMA)',
    location: 'Indonesia',
    description: 'Memimpin arah strategis organisasi pemuda, mengorkestrasi program berkala, dan mengembangkan regenerasi pemuda yang aktif serta berakhlak.',
    highlights: [
      'Mengkoordinir seluruh divisi kepengurusan dalam merancang dan mengeksekusi program kerja tahunan.',
      'Menjadi jembatan komunikasi antara pengurus DKM senior dengan aspirasi anak muda.',
      'Meningkatkan partisipasi pemuda masjid dalam kegiatan keagamaan, sosial, dan kebersamaan.'
    ],
    type: 'Leadership'
  },
  {
    year: '2023 — Sekarang',
    period: '2023 — Present',
    role: 'Master of Ceremony & Moderator',
    organization: 'Independent / Public & Community Engagements',
    location: 'Regional Events',
    description: 'Memandu puluhan agenda formal, talkshow kepemudaan, perayaan hari besar, dan pertemuan komunitas dengan gaya komunikasi yang luwes.',
    highlights: [
      'Dipercaya memandu seminar, perayaan hari besar keagamaan, dan gathering pemuda.',
      'Menguasai crowd engagement, transisi acara, dan pemeliharaan antusiasme audiens.',
      'Berpengalaman melakukan adaptasi cepat terhadap perubahan mendadak di rundown panggung.'
    ],
    type: 'Public Speaking'
  },
  {
    year: '2022 — Sekarang',
    period: '2022 — Present',
    role: 'Community Activist & Event Organizer',
    organization: 'Youth Initiatives & Grassroots Movements',
    location: 'Local Community',
    description: 'Terlibat aktif dalam berbagai kepanitiaan sosial, olahraga bersama, dan program pengembangan diri remaja.',
    highlights: [
      'Menginisiasi turnamen olahraga persahabatan pemuda untuk mempererat hubungan antar lingkungan.',
      'Membantu perancangan konten media sosial untuk kampanye positif kepemudaan.',
      'Berpartisipasi aktif dalam bakti sosial dan tanggap bencana lokal.'
    ],
    type: 'Community'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Communication & Presence',
    description: 'Keahlian dalam menyuarakan gagasan, memandu publik, dan membangun koneksi emosional.',
    skills: [
      { name: 'Public Speaking', context: 'Penyampaian materi dan sambutan yang terstruktur, percaya diri, dan persuasif.' },
      { name: 'Master of Ceremony (MC)', context: 'Kemampuan mengalirkan rundown, membaca audiens, dan menghidupkan panggung.' },
      { name: 'Audience Engagement', context: 'Teknik interaktif yang membuat peserta merasa dilibatkan dan dihargai.' },
      { name: 'Storytelling & Artikulasi', context: 'Membungkus pesan dengan analogi sederhana yang mudah dipahami berbagai kalangan.' }
    ]
  },
  {
    title: 'Leadership & People Stewardship',
    description: 'Kapasitas menggerakkan tim, merawat motivasi, dan mengambil keputusan bertanggung jawab.',
    skills: [
      { name: 'Team Leadership', context: 'Memimpin dengan teladan, mendengarkan masukan, dan mendelegasikan tugas secara adil.' },
      { name: 'Conflict Resolution', context: 'Menengahi perbedaan pendapat dalam tim dengan kepala dingin dan objektivitas.' },
      { name: 'Youth Mentorship', context: 'Mendorong anggota yang pasif agar berani mengambil peran dan berkembang.' },
      { name: 'Strategic Decision Making', context: 'Memilih prioritas terbaik di tengah keterbatasan waktu dan sumber daya.' }
    ]
  },
  {
    title: 'Event & Program Operations',
    description: 'Kecakapan teknis dalam meramu ide menjadi eksekusi lapangan yang presisi.',
    skills: [
      { name: 'Rundown & Stage Management', context: 'Menjaga akurasi waktu dan sinkronisasi antara pengisi acara, MC, dan teknisi.' },
      { name: 'Budget & Resource Planning', context: 'Mengoptimalkan pos anggaran kegiatan agar efektif dan transparan.' },
      { name: 'Crowd & Venue Coordination', context: 'Mengatur alur lalu lintas peserta dan kenyamanan fasilitas lokasi acara.' },
      { name: 'Contingency Planning', context: 'Selalu menyiapkan rencana cadangan (Plan B) untuk mengantisipasi kendala tak terduga.' }
    ]
  },
  {
    title: 'Personal Attributes & Mindset',
    description: 'Fondasi karakter yang diasah dari disiplin olahraga dan dedikasi sosial.',
    skills: [
      { name: 'High Resilience', context: 'Daya tahan mental menghadapi tekanan, kritik, dan kegagalan sementara.' },
      { name: 'Teamwork Orientation', context: 'Mengutamakan kemenangan tim di atas ego pribadi (football mindset).' },
      { name: 'High Adaptability', context: 'Cepat menyesuaikan diri dengan karakter orang dan situasi yang dinamis.' },
      { name: 'Humility & Integrity', context: 'Menjaga amanah, konsistensi perkataan dengan perbuatan, dan selalu rendah hati.' }
    ]
  }
];

export const PHILOSOPHY_DATA: PhilosophyItem[] = [
  {
    number: '01',
    title: 'People First',
    subtitle: 'Segala program ada untuk manusia, bukan sebaliknya.',
    description: 'Kegiatan yang megah kehilangan maknanya jika orang-orang di dalamnya merasa lelah tanpa dihargai. Fokus saya adalah memastikan setiap orang yang terlibat merasa didengar, diberdayakan, dan membawa pulang sesuatu yang berarti.',
    quote: 'Ukuran keberhasilan sebuah acara bukan pada meriahnya tepuk tangan, tetapi pada perubahan rasa dan nilai yang dibawa pulang oleh setiap orang.'
  },
  {
    number: '02',
    title: 'Discipline in the Little Things',
    subtitle: 'Kemenangan besar dibangun dari kebiasaan-kebiasaan kecil.',
    description: 'Di lapangan sepak bola, operan simpel yang presisi menentukan gol. Begitu pula dalam kepemimpinan dan panggung: tepat waktu, persiapan mendalam terhadap hal detail, dan komitmen kata adalah fondasi kepercayaan yang tak tergantikan.',
    quote: 'Bagaimana kita memperlakukan hal-hal kecil adalah cerminan bagaimana kita akan mengemban tanggung jawab yang lebih besar.'
  },
  {
    number: '03',
    title: 'Energy is Contagious',
    subtitle: 'Suasana ruangan adalah pantulan energi yang kita bawa.',
    description: 'Ketika seorang MC atau pemimpin membawa keraguan, ruangan akan membeku. Namun ketika kita membawa kehangatan, antusiasme tulus, dan optimisme, orang-orang di sekitar kita akan tergerak untuk memberikan yang terbaik dari diri mereka.',
    quote: 'Bawalah senyum dan keyakinan tulus sebelum melangkah ke atas panggung maupun ke tengah forum musyawarah.'
  },
  {
    number: '04',
    title: 'Build Together, Grow Together',
    subtitle: 'Karya terbaik tidak pernah lahir dari pahlawan tunggal.',
    description: 'Seorang kapten sepak bola tidak bisa mencetak gol tanpa umpan rekannya. Komunitas pemuda hanya akan berkelanjutan jika setiap individu merasa memiliki andil dalam perjalanan yang ditempuh bersama.',
    quote: 'Berjalan sendiri mungkin terasa lebih cepat, tetapi melangkah bersama adalah satu-satunya cara untuk sampai lebih jauh.'
  }
];
