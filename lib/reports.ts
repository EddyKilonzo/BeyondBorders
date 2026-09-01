export type ReportSection = {
  heading: string
  paragraphs?: string[]
  bullets?: { label?: string; text: string }[]
  callout?: string
}

export type ReportStat = {
  value: string
  label: string
}

export type Report = {
  slug: string
  reportNumber: string
  title: string
  subtitle: string
  summary: string
  excerpt: string
  category: string
  categoryColor: string
  file: string
  fileSize: string
  pages: number
  published: string
  publishedISO: string
  period: string
  region: string
  methodology: string
  preparedBy: string
  readTime: string
  featured: boolean
  tags: string[]
  image: string
  contentWarning?: string
  stats: ReportStat[]
  sections: ReportSection[]
  keyFindings: string[]
  recommendations?: { label: string; text: string }[]
}

export const reports: Report[] = [
  {
    slug: 'digital-colonialism-asal-corridor',
    reportNumber: 'Report 02',
    title: 'Digital Colonialism in the ASAL Corridor',
    subtitle:
      'A Feminist Analysis of Technology Challenges Facing Indigenous and Pastoralist Communities in Northern Kenya',
    summary:
      'Northern Kenya’s ASAL corridor is one of the most technologically marginalised regions in East Africa — and that marginalisation is not accidental. This report documents six interconnected challenge domains and offers a framework for indigenous feminist tech sovereignty.',
    excerpt:
      'Six challenge domains, 450+ community consultations, and a community-generated framework for indigenous feminist tech sovereignty across the Northern Kenya ASAL corridor.',
    category: 'Research Report',
    categoryColor: 'bg-sky-400',
    file: '/reports/Beyond_Borders_Tech_Challenges_Northern_Kenya_Report.pdf',
    fileSize: '390 KB',
    pages: 12,
    published: 'January 2026',
    publishedISO: '2026-01-01',
    period: 'Research conducted 2024 – 2025',
    region: 'Turkana, Samburu, Marsabit, Isiolo, Wajir & Mandera Counties',
    methodology:
      'Community consultations (450+ participants), participatory mapping, digital security audits, infrastructure surveys',
    preparedBy: 'Beyond Borders Indigenous Feminist Tech Collective',
    readTime: '18 min read',
    featured: true,
    tags: ['Digital Rights', 'Data Sovereignty', 'Infrastructure', 'Feminist Tech', 'Climate Tech'],
    image: '/2.webp',
    contentWarning:
      'This report is not a plea for connectivity. It is a feminist interrogation of who controls technology, who profits from it, and whose bodies are made visible or invisible by its design. We write from the position that indigenous pastoralist communities in Northern Kenya are not technologically backward — they are technologically dispossessed.',
    stats: [
      { value: '6', label: 'Challenge domains identified' },
      { value: '450+', label: 'Community consultations' },
      { value: '92%', label: 'Young women with no private device access' },
      { value: '78%', label: 'Settlements with no grid electricity' },
      { value: '0%', label: 'Community consent for data extraction by state/NGOs' },
      { value: '100%', label: 'External tech designed without community input' },
    ],
    sections: [
      {
        heading: 'Executive Summary',
        paragraphs: [
          'Northern Kenya’s ASAL corridor is one of the most technologically marginalized regions in East Africa. Yet this marginalization is not accidental. It is the result of deliberate infrastructure neglect, extractive digital colonialism, and patriarchal control over the few technologies that do reach nomadic communities. This report documents the specific, intersectional tech challenges facing indigenous pastoralist communities — and particularly indigenous young women — in the Northern Kenya corridor.',
          'Our analysis moves beyond the simplistic narrative of the “digital divide” to examine how technology in the ASAL is actively used to surveil, extract, and exclude. We document six interconnected challenge domains: infrastructure apartheid, extractive data colonialism, patriarchal tech control, climate-tech failure, educational exclusion, and the violence of humanitarian innovation. For each, we offer community-generated responses and a framework for indigenous feminist tech sovereignty.',
        ],
      },
      {
        heading: '1. Infrastructure Apartheid: The Physics of Exclusion',
        paragraphs: [
          'The ASAL corridor covers 23 counties and over 80% of Kenya’s land area, yet less than 12% of the national fiber optic network reaches these regions. In our surveys, 78% of nomadic settlements reported having no reliable mobile data, and 64% had no voice signal during the dry season when communities move to remote grazing areas. This is not a technical failure — it is an economic decision by telecom companies and the Kenyan state.',
          'Electricity access in ASAL counties averages 8–15%, compared to 65% nationally. For nomadic communities, this figure drops to near zero. A single smartphone charge can cost 50 Kenyan shillings — equivalent to a day’s worth of water. Charging a phone requires access to a charging station, often in a town centre where young women face harassment, or in a male-controlled household where phone use is monitored.',
          'The devices available in ASAL markets are the cheapest, lowest-quality smartphones — often refurbished units with failing batteries and outdated Android versions. Average device lifespan in our communities is 8–14 months. More critically, these devices are shared: 92% of young women reported having no private device, which means every digital action is surveilled.',
        ],
      },
      {
        heading: '2. Extractive Data Colonialism: Harvesting Indigenous Bodies',
        paragraphs: [
          'Humanitarian agencies collect biometric data from pastoralist communities as a condition of aid, with no meaningful consent framework and no community governance over how that data is stored, shared, or subpoenaed.',
          'The few digital platforms that do reach ASAL communities are foreign-owned and extractive. In 2024, Facebook’s content moderation system removed posts by Samburu women discussing FGM survivor support, classifying them as harmful content — while allowing misogynistic hate speech in Swahili to remain. The platforms control the infrastructure, the rules, and the profits. Communities control nothing.',
        ],
      },
      {
        heading: '3. Patriarchal Tech Control: Gender, Devices, and Domination',
        paragraphs: [
          'Technology in Northern Kenya’s pastoralist societies is not gender-neutral. Phone ownership is overwhelmingly male, internet cafes are male spaces, repair shops are run by men, and community radio stations are managed by male elders. In our consultations, 68% of young women reported having a phone confiscated by a male relative, and 45% reported being beaten or threatened for accessing information about contraception or legal rights online.',
          'The same technologies that exclude women are also used to harm them: image-based abuse in WhatsApp groups, SIM swap attacks that isolate women from support networks, and organised harassment campaigns targeting women who speak out against FGM or child marriage. Platform reporting mechanisms require English literacy and stable internet — both unavailable to most survivors.',
          'The deepest challenge is the erasure of indigenous women’s existing technological knowledge. Pastoralist women have managed complex ecological information systems for generations — tracking water sources, pasture quality, animal health, and climate patterns. This is sophisticated data work, yet it is never recognised as technology.',
        ],
      },
      {
        heading: '4. Climate-Tech Failure: When Innovation Meets Dispossession',
        paragraphs: [
          'Climate adaptation tech deployed in Northern Kenya is overwhelmingly designed by urban engineers with no understanding of pastoralism. Satellite-based early warning systems send SMS alerts to phones that are often off, shared, or out of signal range. Drought insurance requires KYC documentation nomadic communities do not possess. Solar pumps assume stationary farming, not mobile pastoralism.',
          'In Turkana, an NGO installed a solar-powered water monitoring system at a cost of 2.3 million Kenyan shillings. Within six months the panels were covered in dust, the sensors damaged by livestock, and the community had no training to maintain the system. This is not an isolated incident — it is the standard model.',
          'Tech startups and research institutions want to digitise pastoralist knowledge of pasture, water, and weather for global climate models and carbon credit schemes. They want the data, but not the data holders. There is no framework for benefit-sharing, and no mechanism for communities to retain intellectual property over their ecological knowledge.',
        ],
      },
      {
        heading: '5. Educational Exclusion: The Digital Skills Gap as Structural Violence',
        paragraphs: [
          'ASAL regions have the lowest school enrollment rates in Kenya, with girls’ enrollment dropping under 30% in some pastoralist areas. Where tablets from the government’s Digital Literacy Program were delivered, they arrived without charging infrastructure, without relevant content, and without teachers trained to use them.',
          'All major tech platforms, coding languages, and digital tools are in English. The specific languages of Northern Kenya — Turkana, Samburu, Borana, Rendille, Gabra — have zero presence in digital infrastructure. No keyboards. No voice assistants. No auto-correct. No content. For young women who speak these languages as their mother tongue, the digital world is not just inaccessible — it is linguistically alienating.',
        ],
      },
      {
        heading: '6. The Violence of Humanitarian Innovation',
        paragraphs: [
          'Northern Kenya has become a testing ground for humanitarian technology. Drones, blockchain, AI prediction models, and biometric ID systems are piloted on pastoralist populations with minimal consent and no accountability.',
          'We call this the innovation industrial complex. It operates through a cycle of extraction: identify a “problem”; design a solution without community input; pilot it for 12–18 months; collect data and success stories; win awards at international conferences; abandon the project when funding ends. When we asked community members whether they felt they had genuine decision-making power in tech projects affecting their lives, 94% said no.',
        ],
      },
      {
        heading: '7. Community-Generated Responses',
        paragraphs: [
          'Despite these challenges, indigenous pastoralist communities — particularly young women — are not passive victims. They are actively developing strategies of resistance, adaptation, and autonomous tech creation.',
        ],
        bullets: [
          {
            label: 'Offline-First Networks',
            text: 'Mesh networks, Bluetooth sharing circles, and SD-card content libraries that function entirely without internet, controlled by community members rather than telecom companies.',
          },
          {
            label: 'Disguised Digital Spaces',
            text: 'Young women hide SRHR and legal information inside agricultural apps, prayer apps, and music files — turning the surveillance of shared devices into a site of resistance.',
          },
          {
            label: 'Community Repair Circles',
            text: 'Repair collectives that fix devices using locally available materials, rejecting dependency on male-dominated repair shops in town centres.',
          },
          {
            label: 'Elder-Youth Tech Partnerships',
            text: 'Pairing elder women holding ecological knowledge with young women holding digital skills to design pasture and water mapping tools together.',
          },
          {
            label: 'Radio-as-Tech',
            text: 'Solar-powered community FM stations managed by women’s councils remain the most trusted information source, now integrated with offline broadcast-to-SD systems.',
          },
          {
            label: 'Data Refusal',
            text: 'Communities are refusing biometric data collection, demanding paper-based alternatives and organising collective boycotts of surveillance-based aid distribution.',
          },
        ],
      },
      {
        heading: '9. Conclusion: Technology as Territory',
        paragraphs: [
          'The tech challenges facing indigenous and pastoralist communities in Northern Kenya are not a digital divide waiting to be bridged. They are a form of ongoing colonial dispossession. The same forces that dispossessed pastoralists of their land — the state, the market, the aid industry — are now dispossessing them of their data, their knowledge, and their technological future.',
          'But this report is not a story of victimhood. It is a story of resistance. Across the ASAL corridor, indigenous young women are building offline networks, disguising digital content, repairing their own devices, and refusing extractive data collection. They are not waiting for connectivity. They are creating autonomy.',
        ],
        callout:
          'The future of technology in Northern Kenya will be determined not by the next innovation competition in Nairobi, but by whether indigenous young women are recognised as the architects of their own digital lives.',
      },
    ],
    keyFindings: [
      'Less than 12% of Kenya’s national fiber optic network reaches the ASAL corridor, which covers over 80% of the country’s land area.',
      '78% of nomadic settlements report no reliable mobile data; 64% lose voice signal entirely during dry-season migration.',
      '92% of young women have no private device — making every digital action visible to male household members.',
      '68% of young women have had a phone confiscated by a male relative; 45% were beaten or threatened for seeking information online.',
      '94% of community members report having no genuine decision-making power in tech projects affecting their lives.',
      'Average device lifespan in ASAL communities is 8–14 months, with no local access to spare parts or repair skills.',
    ],
    recommendations: [
      {
        label: 'Infrastructure Justice, Not Connectivity Charity',
        text: 'Universal service funds must be transparently directed to ASAL regions, and community-owned mesh networks and solar infrastructure recognised as legitimate public goods.',
      },
      {
        label: 'Data Sovereignty, Not Data Extraction',
        text: 'All biometric and research data collection must require free, prior, and informed consent with community-controlled governance, including the right to refuse and demand deletion.',
      },
      {
        label: 'Device Access as Bodily Autonomy',
        text: 'Prioritise private, affordable, rugged devices for young women — not shared family phones — alongside digital security training and safe charging infrastructure.',
      },
      {
        label: 'Indigenous Language Justice',
        text: 'Platforms must support Turkana, Samburu, Borana, Rendille and other indigenous languages with keyboards, voice interfaces, and content creation tools — not translation after the fact.',
      },
      {
        label: 'Community Archivist Model',
        text: 'All ASAL tech projects must be led by local young women trained in digital skills and platform governance, with external technical support transferring full control within 18 months.',
      },
      {
        label: 'End the Innovation Industrial Complex',
        text: 'Funders must stop financing short-term pilots and instead support long-term, community-controlled infrastructure with maintenance budgets and responsible exit strategies.',
      },
      {
        label: 'Recognise Indigenous Women’s Tech Knowledge',
        text: 'Elder women’s ecological knowledge must be recognised as sophisticated data science, positioning indigenous women as tech experts rather than beneficiaries.',
      },
    ],
  },
  {
    slug: 'offline-first-bodily-autonomy-asal',
    reportNumber: 'Report 01',
    title: 'Offline First: Bodily Autonomy in the ASAL',
    subtitle:
      'A Community-Led Report on Delivering SRHR Resources to Nomadic Communities in Northern Kenya',
    summary:
      'Two years of building offline-first, culturally grounded SRHR resources designed by and for indigenous nomadic women — the methodology, the failures, the adaptations, and the evidence.',
    excerpt:
      'How 40 community archivists carried offline SRHR kits across 25 nomadic settlements, reaching 2,400+ young women with zero digital traces and zero data breaches.',
    category: 'Project Report',
    categoryColor: 'bg-blue-600',
    file: '/reports/Beyond_Borders_Offline_SRHR_Project_Report.pdf',
    fileSize: '468 KB',
    pages: 9,
    published: 'July 2024',
    publishedISO: '2024-07-01',
    period: 'January 2024 – June 2024',
    region: 'Turkana, Samburu, Marsabit & Isiolo Counties',
    methodology:
      'Participatory action research, community archivist model, offline-first digital deployment',
    preparedBy: 'Beyond Borders, Indigenous Feminist Tech Collective',
    readTime: '14 min read',
    featured: false,
    tags: ['SRHR', 'Offline-First', 'Digital Security', 'FGM', 'Community Archivists'],
    image: '/6.webp',
    contentWarning:
      'This report discusses female genital mutilation (FGM), child marriage, sexual and gender-based violence, and bodily harm affecting indigenous young women and girls. All narratives are shared with consent and governed by community-controlled access protocols.',
    stats: [
      { value: '2,400+', label: 'Young women reached' },
      { value: '85%', label: 'Reported increased bodily autonomy knowledge' },
      { value: '0', label: 'Data breaches or digital traces' },
      { value: '12', label: 'Local languages & dialects' },
      { value: '40+', label: 'Community archivists trained' },
      { value: '100%', label: 'Offline-first design' },
    ],
    sections: [
      {
        heading: 'Executive Summary',
        paragraphs: [
          'In the arid and semi-arid lands (ASAL) of Northern Kenya, patriarchal violence is sustained by silence — and silence is sustained by isolation. Nomadic young women and girls face female genital mutilation, child marriage, and sexual violence with no access to confidential information about their bodies, their rights, or their options for survival. The few SRHR resources that exist are designed for urban, literate, connected audiences.',
          'Beyond Borders has spent two years developing and deploying offline-first, culturally grounded SRHR resources designed by and for indigenous nomadic women. This report documents our methodology, our failures, our adaptations, and the emerging evidence that when young pastoralist women control the technology that carries knowledge about their bodies, they also begin to shift the power that governs those bodies.',
        ],
      },
      {
        heading: '1. The Context: Silence in the ASAL',
        paragraphs: [
          'Northern Kenya’s ASAL corridor covers over 80% of Kenya’s landmass but receives less than 5% of its infrastructure investment. Settlements are temporary, schools are sparse, and health facilities are often a full day’s walk away. For young indigenous women, this isolation is not just geographic — it is informational.',
          'In our community consultations, we learned that 90% of young women access phones shared with family members. A search history, a text message, or even a saved PDF can be discovered and used as evidence of disobedience. In 2024, a 16-year-old participant in Marsabit was beaten by her brother after he found a general health pamphlet on her phone. Digital privacy in our context is not an individual right — it is a collective survival strategy.',
          'Mainstream SRHR apps assume individual smartphone ownership, reliable connectivity, English or Swahili literacy, and a safe private space. None of these assumptions hold in the ASAL corridor. The result is that the very tools designed to empower become instruments of surveillance and exclusion.',
        ],
      },
      {
        heading: '2. Our Methodology',
        paragraphs: [
          'Beyond Borders developed our SRHR resource model through two years of participatory action research with indigenous young women. Rather than distributing content from a central office, we trained 40 indigenous young women as Community Archivists — peer educators who carry offline SRHR kits on ruggedised SD cards and solar-charged devices. These archivists are not beneficiaries. They are the designers, curators, and distributors of knowledge within their own communities.',
          'Each archivist undergoes a six-week training covering digital security and device management, SRHR content creation using open-source tools, trauma-informed facilitation, and indigenous cultural protocols for handling sensitive knowledge. They are paid stipends — rejecting the volunteer model that extracts labour from poor communities — and they report to a rotating council of elder women and young survivors, not to Beyond Borders staff.',
        ],
        bullets: [
          {
            label: 'Offline-first',
            text: 'All resources function without internet, on basic feature phones or low-end smartphones, and are shareable via Bluetooth, SD cards, or community wifi hotspots.',
          },
          {
            label: 'No digital trace',
            text: 'No visible search history, no app icons that signal SRHR content, and no requirement for personal registration or phone numbers.',
          },
          {
            label: 'Culturally grounded',
            text: 'Content is created in Turkana, Samburu, Borana and Rendille, framed through indigenous knowledge systems rather than imported Western frameworks.',
          },
          {
            label: 'Community archivist control',
            text: 'Indigenous young women decide what is created, how it is shared, and who has access — not external NGOs or tech developers.',
          },
          {
            label: 'Multi-modal',
            text: 'Information is available as audio for low-literacy users, visual for cultural resonance, and text for reference and advocacy.',
          },
          {
            label: 'Survivor-centered',
            text: 'All content on FGM, child marriage, and GBV is created with survivor input and includes clear, safe referral pathways.',
          },
        ],
      },
      {
        heading: '3. The Tools: What We Built',
        paragraphs: [
          'The core of our project is a lightweight, offline digital library that fits on a 32GB SD card and can be loaded onto any Android device.',
        ],
        bullets: [
          {
            label: 'Audio zines on bodily autonomy',
            text: '45-minute audio programs in Turkana, Samburu and Borana, recorded by indigenous young women, covering menstruation, contraception, consent, and FGM survivor stories.',
          },
          {
            label: 'Visual guides with no text',
            text: 'Illustrated, wordless comics showing how to access emergency contraception, recognise signs of infection after FGM, and find safe houses — for users with low literacy or who need to hide content.',
          },
          {
            label: 'Disguised app interface',
            text: 'The digital library opens as a generic Pasture Calendar app. SRHR content is nested within agricultural information, making it invisible to someone quickly checking the phone.',
          },
          {
            label: 'Encrypted referral database',
            text: 'An offline database of safe health providers, paralegals, and women’s shelters across the ASAL corridor, updated quarterly by archivists via mesh network sync.',
          },
          {
            label: 'Safe House Signal Network',
            text: 'Archivists carry ruggedised devices with pre-loaded contacts for regional safe houses and legal aid, able to send encrypted alerts without ever storing a survivor’s identity on the device.',
          },
          {
            label: 'Solar-powered community hubs',
            text: 'In five settlements, charging stations, offline content servers, and private listening booths managed by local women’s councils — not Beyond Borders staff.',
          },
        ],
      },
      {
        heading: '4. Outcomes and Evidence',
        paragraphs: [
          'Our offline SRHR resources reached 2,437 young women and girls across 25 nomadic settlements. 85% of surveyed users reported increased knowledge of bodily autonomy, contraception options, and legal rights. 62% reported sharing content with at least one other person — creating a peer-to-peer knowledge cascade that extends far beyond direct distribution.',
          'Critically, zero digital security breaches have occurred. No user identities have been exposed. In two instances where archivists were questioned by local authorities, the absence of cloud data and the generic app appearance prevented confiscation and protected survivor information.',
          'In Samburu County, a group of archivists successfully delayed three FGM ceremonies by connecting mothers to audio content on the long-term health consequences of cutting — information framed through Samburu cultural narratives about strength and health, not external condemnation. In Turkana, young women used the encrypted referral system to organise a collective escape for a 14-year-old girl facing forced marriage, coordinating with a safe house 80 kilometres away.',
        ],
      },
      {
        heading: '5. Challenges and Adaptations',
        bullets: [
          {
            label: 'Device breakage in harsh environments',
            text: 'We shifted from standard smartphones to ruggedised devices with reinforced cases, and established community repair circles trained in basic hardware maintenance.',
          },
          {
            label: 'Patriarchal backlash against archivists',
            text: 'We established a security fund for rapid relocation, rotated archivist visibility, and integrated elder women as cultural shields — positioning archivists as health knowledge keepers within traditional frameworks.',
          },
          {
            label: 'Content created by outsiders was rejected',
            text: 'Early materials developed with a Nairobi partner were dismissed as “city people talking.” We destroyed those materials and restarted with 100% community-created content.',
          },
          {
            label: 'Sustainability beyond grant funding',
            text: 'We are transitioning to a cooperative model where women’s councils manage hub fees that subsidise SRHR content access, and archivists train in digital livelihoods to generate independent income.',
          },
        ],
      },
      {
        heading: '7. Looking Forward',
        bullets: [
          { text: 'Scale to 75 settlements across the full ASAL corridor, including Mandera, Wajir, and Garissa counties.' },
          { text: 'Develop an open-source toolkit for other indigenous feminist collectives to adapt our offline SRHR model.' },
          { text: 'Establish regional Safe House Signal Hubs with encrypted mesh networking for cross-county survivor coordination.' },
          { text: 'Train 100 additional community archivists, with explicit inclusion of young women with disabilities and young mothers.' },
          { text: 'Launch an advocacy campaign using anonymised data to push county governments to fund community-led SRHR infrastructure.' },
        ],
      },
    ],
    keyFindings: [
      'Privacy is collective, not individual. On shared devices, SRHR tech must be designed for collective safety — disguised interfaces, no registration, no visible digital traces.',
      'Literacy is not just about reading. Wordless visual guides and audio content are often more powerful, more culturally resonant, and safer than text-based resources.',
      'Community archivists are not peer educators — they are infrastructure. Paying them, protecting them, and letting them lead design decisions is the core of the work.',
      'Cultural respect is not cultural relativism. Challenging FGM requires deep cultural fluency, not condemnation from outside.',
      'Offline is not a limitation — it is a feminist security strategy. The assumption that everything must be cloud-connected is a colonial tech assumption that puts marginalised communities at risk.',
    ],
  },
  {
    slug: 'srhr-tech-circles-2023-2024',
    reportNumber: 'Project Report',
    title: 'SRHR Tech Circles 2023–2024',
    subtitle:
      'Safe Digital Spaces for Indigenous Young Women on FGM, Child Marriage and Menstrual Health',
    summary:
      'Peer circles that combined face-to-face trust-building with anonymous audio stories and zines — and produced three independent lead facilitators from within the cohort.',
    excerpt:
      'More than 60 indigenous young women created anonymous audio stories and zines in confidential, low-tech peer circles. Three became independent lead facilitators.',
    category: 'Project Report',
    categoryColor: 'bg-indigo-500',
    file: '/reports/Beyond_Borders_SRHR_Tech_Circles_2023-2024.pdf',
    fileSize: '10 KB',
    pages: 4,
    published: '2024',
    publishedISO: '2024-12-01',
    period: 'Implementation period: 2023–2024',
    region: 'Northern Kenya ASAL',
    methodology: 'Peer-led circles, anonymous audio production, zine-making, facilitator mentorship',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '7 min read',
    featured: false,
    tags: ['SRHR', 'Peer Facilitation', 'Menstrual Health', 'Child Marriage', 'Zines'],
    image: '/4.webp',
    stats: [
      { value: '60+', label: 'Young women reached' },
      { value: '3', label: 'Lead facilitators emerged' },
      { value: '3', label: 'Core themes: FGM, child marriage, menstrual health' },
      { value: '2', label: 'Formats: audio stories & zines' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'Between 2023 and 2024, Beyond Borders established SRHR Tech Circles that reached more than 60 indigenous young women. The circles created confidential, low-tech digital and peer spaces for discussing female genital mutilation, child marriage and menstrual health. Participants produced anonymous audio stories and zines that could be shared without exposing individuals on shared family phones. Three women who began as participants later became lead facilitators and have independently trained new cohorts.',
          'The work addressed a critical gap: in many ASAL communities there is no safe, culturally relevant channel for young women to access accurate information about their bodies. The circles tested offline-friendly, peer-led methods that prioritise safety and anonymity over high-tech platforms.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'In many pastoralist communities of Northern Kenya, FGM and child marriage remain linked to economic pressure, patriarchal control and limited access to alternative information. Drought and livestock loss can accelerate early marriage as a household coping strategy. Young women seeking information about their bodies face multiple barriers: shared family phones leave digital traces; formal health services are distant or stigmatising; and open discussion of FGM or menstruation can attract social sanction.',
          'Beyond Borders recognised that conventional digital SRHR tools designed for urban, individual smartphone users would not work in this context. The collective therefore designed peer circles that combined face-to-face trust-building with simple digital outputs that could circulate without exposing participants.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Create confidential peer spaces where indigenous young women could discuss FGM, child marriage and menstrual health without fear of immediate exposure.' },
          { text: 'Support participants to produce anonymous audio stories and simple zines that could be shared safely on shared devices or in print.' },
          { text: 'Build practical digital and facilitation skills so that knowledge and methods could continue beyond the initial circles.' },
          { text: 'Identify and support emerging facilitators who could lead new cohorts independently.' },
          { text: 'Generate learning on what safety, anonymity and cultural relevance require in ASAL digital SRHR work.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        paragraphs: [
          'Circles were kept relatively small and grounded in existing relationships. Sessions combined discussion, basic digital skills (audio recording, simple editing, anonymous sharing methods) and creative production of stories and zines. Content was delivered in local languages and Kiswahili as appropriate. Facilitators emphasised that no one was required to disclose personal experience.',
          'Because phones are frequently shared within households, the circles avoided approaches that left visible search histories or personal accounts. Audio stories were recorded and edited so that individual voices and identifying details could be removed or altered. Zines used drawings, collective narratives and non-identifying text. Distribution relied on peer networks and trusted intermediaries rather than public online platforms.',
          'From the outset the circles included space for participants to practise leading short sessions. Three women who showed consistent engagement, care for group safety and ability to explain content clearly were supported to take on lead facilitator roles.',
        ],
      },
      {
        heading: '5. Key Results and Outcomes',
        bullets: [
          { text: 'More than 60 indigenous young women participated across the 2023–2024 circles.' },
          { text: 'Anonymous audio stories and zines produced on FGM, child marriage and menstrual health.' },
          { text: 'Three participants became lead facilitators and have independently trained new groups.' },
          { text: 'Participants reported greater confidence in discussing bodily issues within trusted peer settings.' },
          { text: 'The facilitator pathway reduced dependence on the small core team and increased local ownership.' },
          { text: 'Peer production of content increased relevance and reduced perceptions of outside imposition.' },
        ],
      },
      {
        heading: '7. Contribution to Beyond Borders’ Work',
        paragraphs: [
          'The SRHR Tech Circles formed the practical foundation of the Bodily Autonomy Tech working circle. They demonstrated that peer-led, offline-friendly methods can create safer information spaces and can generate local facilitators. This experience directly informs current plans for offline-first SRHR resource kits in local languages and for scaling peer facilitation rather than centralised delivery.',
          'Next steps include consolidating the offline SRHR kits, supporting the existing lead facilitators to train further cohorts, and strengthening links between the circles and community-based referral options. The priority remains safety, anonymity and local ownership rather than rapid numerical scale-up.',
        ],
        callout:
          'This report documents community-led learning and practice. It does not disclose identifying details of participants or survivors.',
      },
    ],
    keyFindings: [
      'Safety is collective: individual “privacy settings” are largely meaningless on shared phones, so design must prioritise anonymity and non-identifying formats.',
      'Stigma and silence are real constraints — even within peer circles, opening discussion required careful facilitation and clear confidentiality agreements.',
      'Low-tech is often more appropriate: audio and simple print/zine formats travelled further than complex apps and required less infrastructure.',
      'Facilitator development takes time, requiring ongoing mentorship, practice opportunities, and attention to facilitators’ own safety and wellbeing.',
      'Circles can open conversation but cannot replace referral pathways for survivors needing protection, medical or psychosocial support.',
    ],
  },
  {
    slug: 'indigenous-digital-archive-pilot-2024',
    reportNumber: 'Project Report',
    title: 'Indigenous Digital Archive Pilot',
    subtitle:
      'Community-Controlled Digital Collection of Nomadic Heritage in Turkana and Samburu Counties',
    summary:
      'Twenty-five indigenous young women were trained to document, curate and govern digital records of nomadic cultural heritage. More than 40 oral histories and cultural practices were recorded — and every file stays on local devices under community control, never on commercial cloud services.',
    excerpt:
      '25 indigenous young women trained, 40+ oral histories documented, and the first community-controlled digital collection of nomadic heritage in the region — stored offline, governed by community protocols.',
    category: 'Project Report',
    categoryColor: 'bg-amber-500',
    file: '/reports/Beyond_Borders_Indigenous_Digital_Archive_Pilot_2024.pdf',
    fileSize: '437 KB',
    pages: 4,
    published: '2024',
    publishedISO: '2024-12-01',
    period: 'Implementation period: 2024',
    region: 'Turkana & Samburu Counties, Northern Kenya ASAL',
    methodology:
      'Community-led documentation, digital storytelling training, elder-guided consent and sensitivity protocols, offline-first local storage',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '8 min read',
    featured: false,
    tags: ['Digital Heritage', 'Data Sovereignty', 'Oral History', 'Offline-First', 'Archiving'],
    image: '/3.webp',
    stats: [
      { value: '25', label: 'Young women trained' },
      { value: '40+', label: 'Oral histories & practices documented' },
      { value: '2', label: 'Counties reached' },
      { value: '0', label: 'Files on commercial cloud services' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'In 2024, Beyond Borders implemented the Indigenous Digital Archive Pilot in Turkana and Samburu counties. The pilot trained 25 indigenous young women in digital storytelling and community archiving methods. Participants documented more than 40 oral histories and cultural practices, creating what is understood to be the first community-controlled digital collection of nomadic heritage in the region.',
          'Unlike extractive documentation projects, all materials are stored on local devices and governed by community archivists according to indigenous protocols around sacred knowledge. The pilot responded directly to a long history of external researchers and agencies extracting cultural knowledge without consent or local ownership, and demonstrated that indigenous young women can design and manage digital heritage systems that respect cultural boundaries while building technical skills relevant to low-connectivity ASAL contexts.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'Turkana and Samburu communities hold oral histories, songs, ecological knowledge and cultural practices that have been systematically extracted by external researchers, NGOs and media. Materials are frequently stored in Global North institutions with little or no community control over access, use or interpretation.',
          'At the same time, digital tools that could support local memory work are rarely designed for ASAL realities: intermittent connectivity, limited electricity, shared devices and low smartphone ownership outside towns. Beyond Borders identified the need for a practical alternative — training young women to document heritage themselves, store it locally, and apply indigenous protocols that distinguish sacred knowledge from material that can be shared. The pilot was designed as a proof of concept for community-controlled digital archives rather than a large-scale digitisation project.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Build practical digital storytelling and archiving skills among indigenous young women from Turkana and Samburu communities.' },
          { text: 'Document a first set of oral histories and cultural practices under community direction.' },
          { text: 'Establish local-device storage and simple access protocols that keep sensitive material offline and under community control.' },
          { text: 'Test whether a modest, offline-first approach could generate trust among elders after years of extractive documentation.' },
          { text: 'Identify young women ready to continue as community archivists and peer trainers.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        paragraphs: [
          'Twenty-five young women aged approximately 18–28 were selected through existing community networks and prior engagement with Beyond Borders. No prior technical expertise was required.',
          'Training combined practical digital skills with cultural protocols: basic device handling, audio recording and simple video on available phones and shared tablets; interview and storytelling techniques respectful of elders and gender dynamics; consent processes covering both collective and individual consent; distinguishing sacred or restricted knowledge from shareable material; local file organisation, basic metadata (who, where, when, language, sensitivity level) and offline backup; and discussion of digital colonialism and why local control of archives matters. Sessions were delivered in short residential or clustered formats to accommodate pastoralist mobility and household responsibilities, and adapted to local languages where possible.',
          'Participants conducted interviews and recordings within their own communities under the guidance of the core team and cultural advisors. Materials were stored on local devices — phones, tablets and external drives managed by the collective — with no content uploaded to commercial cloud services. Access levels were agreed with elders and the young women archivists: some materials remain fully offline and restricted; others may be used for community education or limited external sharing with explicit consent.',
        ],
      },
      {
        heading: '5. Key Results and Outputs',
        bullets: [
          { label: 'Training', text: '25 indigenous young women trained in digital storytelling and community archiving.' },
          { label: 'Documentation', text: 'More than 40 oral histories and cultural practices documented, including songs, ecological knowledge and historical accounts.' },
          { label: 'Collection', text: 'A first community-controlled digital collection stored exclusively on local devices.' },
          { label: 'Protocols', text: 'Simple classification and access protocols co-developed with elders and participants.' },
          { label: 'Trust', text: 'Increased trust among some elders who had previously refused external documentation projects.' },
          { label: 'Continuity', text: 'A smaller group of participants identified as ongoing community archivists and peer trainers.' },
        ],
      },
      {
        heading: '6. Challenges and Lessons Learned',
        bullets: [
          { label: 'Device and power constraints', text: 'Shared phones, limited battery life and scarce charging points required careful planning of recording sessions and frequent local backups.' },
          { label: 'Connectivity assumptions', text: 'Any workflow that assumed regular internet access failed. Offline-first storage and occasional physical transfer of files proved more reliable.' },
          { label: 'Trust recovery', text: 'Initial suspicion from elders was expected given prior extractive experiences. Consistent presence, transparent consent and visible community control of devices were essential.' },
          { label: 'Sacred knowledge boundaries', text: 'Not all material can or should be digitised. Clear protocols for what remains offline and restricted are as important as the technical system.' },
          { label: 'Time and mobility', text: 'Pastoralist movement and household labour limited continuous participation; clustered and residential formats worked better than weekly meetings.' },
        ],
        callout:
          'Key lesson: technical training alone is insufficient. Trust, cultural protocols and realistic offline design determine whether a digital archive is adopted and sustained.',
      },
      {
        heading: '7. Contribution to Beyond Borders’ Work and Looking Ahead',
        paragraphs: [
          'The pilot established the foundation for the Digital Heritage working circle and provided practical experience shaping the collective’s longer-term approach to community-controlled archives, offline-first tools and indigenous feminist tech. It also generated a small cohort of young women with demonstrated capacity to train others and manage local collections.',
          'Future work will deepen the existing collection, strengthen community archivist skills, and explore lightweight offline platforms that remain under local control. The emphasis will continue to be quality of process and community ownership rather than volume of digitised material. Any expansion will prioritise solar-supported local storage and clear protocols that protect sacred knowledge.',
        ],
        callout:
          'This report is intended for internal reflection, partner learning and accountable documentation of community-led work. It does not claim to represent the full diversity of Turkana or Samburu heritage, nor does it replace ongoing community governance of the archives.',
      },
    ],
    keyFindings: [
      'Indigenous young women can lead both the technical and cultural dimensions of digital memory work — external technical expertise was not the limiting factor.',
      'Offline-first is not a compromise in ASAL contexts; it is the only workflow that survives intermittent connectivity, shared devices and scarce power.',
      'Trust is rebuilt through visible community control of the devices and the archive, not through consent forms alone.',
      'Protocols defining what must never be digitised are as central to the archive as the recording and storage system itself.',
      'Quality of process and community ownership matter more than volume — a modest, well-governed collection earns participation that a large extractive one cannot.',
    ],
  },
  {
    slug: 'feminism-and-tech-asal-region',
    reportNumber: 'Project Report',
    title: 'Feminism & Tech in the ASAL Region',
    subtitle:
      'How Feminist Principles Reshape Technology Design, Access and Governance in Arid and Semi-Arid Lands',
    summary:
      'Twenty-eight indigenous young women from Turkana, Samburu and Isiolo examined how technology intersects with patriarchy, colonial data practices and pastoralist marginalisation — and authored the ASAL Feminist Tech Principles, a community framework insisting technology be collective, consent-based, offline-capable and governed by women.',
    excerpt:
      '28 young women, three counties, and a 10-point community-authored framework for feminist technology in the ASAL region.',
    category: 'Project Report',
    categoryColor: 'bg-rose-500',
    file: '/reports/Beyond_Borders_Feminism_and_Tech_Report.pdf',
    fileSize: '337 KB',
    pages: 4,
    published: '2025',
    publishedISO: '2025-03-01',
    period: 'Implementation period: 2025',
    region: 'Turkana, Samburu & Isiolo Counties, Northern Kenya ASAL',
    methodology:
      'Women-only feminist tech labs, participatory principle development with elders, advocacy training and county forum engagement',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '8 min read',
    featured: false,
    tags: ['Feminist Tech', 'Governance', 'Digital Rights', 'Advocacy', 'Consent'],
    image: '/1.webp',
    stats: [
      { value: '28', label: 'Young women participants' },
      { value: '3', label: 'Counties' },
      { value: '1', label: 'Feminist tech framework' },
      { value: '8', label: 'New feminist tech advocates' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'In March 2025, Beyond Borders launched Feminism & Tech in the ASAL Region, a project exploring how feminist principles can reshape technology design, access and governance in arid and semi-arid lands. The project brought together 28 indigenous young women from Turkana, Samburu and Isiolo communities to examine how technology intersects with patriarchy, colonial data practices and pastoralist marginalisation — and to prototype alternatives.',
          'The project produced the ASAL Feminist Tech Principles, a community-authored framework insisting that technology in indigenous contexts must be collective, consent-based, offline-capable and governed by women. It also trained a cohort of young women to advocate for feminist technology policies at community and county levels, challenging the male-dominated tech spaces that typically exclude pastoralist women.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'Technology spaces in Kenya — from innovation hubs to policy forums — remain overwhelmingly male, urban and disconnected from pastoralist realities. In ASAL regions this gender gap is compounded by nomadic mobility, low formal schooling and patriarchal control over household resources including phones. Women are frequently the last to access devices, the least consulted about tech projects, and the most vulnerable when data is extracted without consent.',
          'Beyond Borders recognised that “closing the gender digital divide” requires more than handing women smartphones. It requires interrogating whose technology, whose data and whose control. This project treated feminism not as an add-on to tech training, but as a foundational design ethic — centring care, collective ownership and the right to refuse.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Develop, through participatory process, a set of Feminist Tech Principles appropriate to ASAL indigenous contexts.' },
          { text: 'Train indigenous young women to analyse and challenge patriarchal and colonial patterns in existing technology projects.' },
          { text: 'Create safe digital and physical spaces for women to experiment with technology without male oversight or judgment.' },
          { text: 'Support participants to advocate for feminist technology governance at community and county levels.' },
          { text: 'Document how feminist leadership changes the outcomes of tech adoption in pastoralist settings.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        bullets: [
          { label: 'Feminist tech labs', text: 'Monthly women-only gatherings combined practical skills — audio recording, offline mapping, basic device repair — with feminist analysis of digital colonialism, surveillance and algorithmic bias. Spaces were deliberately free of male participants to enable open discussion of gendered barriers.' },
          { label: 'Principle development', text: 'Over six months, participants and elders co-developed the ASAL Feminist Tech Principles through story-sharing, case analysis of failed tech projects and collective drafting. The principles address collective consent, offline-first design, sacred knowledge protection, shared-device equity and women’s governance of community data.' },
          { label: 'Advocacy training', text: 'Participants learned to present the principles to community elders, women’s groups and county officials. Eight women were supported to join or observe county technology and gender forums.' },
        ],
      },
      {
        heading: '5. Key Results and Outputs',
        bullets: [
          { label: 'Framework', text: 'The ASAL Feminist Tech Principles: a 10-point community-authored framework.' },
          { label: 'Training', text: '28 young women trained in feminist technology analysis and practical digital skills.' },
          { label: 'Safe spaces', text: 'Six women-only tech labs established as ongoing safe spaces.' },
          { label: 'Advocacy', text: '12 advocacy presentations to community and county audiences.' },
          { label: 'Discourse shift', text: 'Technology is now discussed in women’s groups as a site of power and choice, not just consumption.' },
          { label: 'Refusal capacity', text: 'Increased confidence among women to refuse tech projects that lack consent protocols.' },
        ],
      },
      {
        heading: '6. Challenges and Lessons Learned',
        bullets: [
          { label: 'Backlash and ridicule', text: 'Some men and external actors dismissed the project as “unnecessary” or “political”. Consistent community grounding and elder support were essential defences.' },
          { label: 'Safety concerns', text: 'Women-only tech spaces required careful location selection to avoid harassment or gossip-based retaliation.' },
          { label: 'Donor timelines', text: 'Participatory principle development is slow. Rushed funding cycles pressure communities to skip consent and governance steps.' },
          { label: 'Intersecting marginalisation', text: 'Stateless women and women from minority clans faced additional barriers even within women’s spaces. Intersectional attention is ongoing.' },
          { label: 'Digital feminism is not urban feminism', text: 'ASAL feminist tech must account for oral culture, collective identity and mobility — not import frameworks from Nairobi or Silicon Valley.' },
        ],
        callout:
          'Key lesson: Feminist technology in ASAL regions is not about catching women up to existing systems. It is about redesigning systems so that indigenous women’s knowledge, labour and governance are centred from the start.',
      },
      {
        heading: '7. Contribution and Looking Ahead',
        paragraphs: [
          'This project consolidated Beyond Borders’ identity as an indigenous feminist tech collective. The ASAL Feminist Tech Principles now govern all collective digital projects and are used to screen partnerships. The women-only lab model is being replicated, and the advocacy cohort is reshaping how the collective engages with county and national technology policy spaces.',
          'Beyond Borders will disseminate the Feminist Tech Principles more widely, translate them into additional local languages, and establish a feminist tech fellowship for emerging indigenous women leaders. The collective will also continue building alliances with feminist tech movements globally while insisting that ASAL realities remain central to any shared framework.',
        ],
      },
    ],
    keyFindings: [
      'Handing women devices does not close the gender digital divide; control over technology, data and governance does.',
      'Women-only tech spaces were the precondition for open discussion of gendered barriers to technology.',
      'Participatory principle development cannot be compressed into short donor cycles without sacrificing consent.',
      'Feminist frameworks imported from urban or Global North contexts do not fit oral, collective, mobile pastoralist life.',
      'Once women held a shared framework, they successfully challenged male-dominated decisions about shared device access.',
    ],
  },
  {
    slug: 'breaking-barriers-indigenous-tech-solutions',
    reportNumber: 'Project Report',
    title: 'Breaking Barriers',
    subtitle:
      'Implementing Tech Solutions for Indigenous Communities in Northern Kenya',
    summary:
      'A pilot testing three low-cost, offline-first technology solutions — offline mapping, solar-powered community radio linkages and SMS market information — deployed and maintained entirely by 22 indigenous young women across six settlement hubs.',
    excerpt:
      '22 women implementers, three tested tech solutions and six community-run hubs that sustained operation for 8+ months without a single external technical visit.',
    category: 'Project Report',
    categoryColor: 'bg-emerald-500',
    file: '/reports/Beyond_Borders_Indigenous_Tech_Report.pdf',
    fileSize: '261 KB',
    pages: 5,
    published: 'September 2025',
    publishedISO: '2025-09-01',
    period: 'Implementation period: September 2025',
    region: 'Turkana & Samburu Counties, Northern Kenya ASAL',
    methodology:
      'Community tool selection, practical deployment training, six settlement hub pilots, women-majority technology management committees',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '9 min read',
    featured: false,
    tags: ['Appropriate Tech', 'Offline-First', 'Solar Power', 'Mapping', 'Market Access'],
    image: '/5.webp',
    stats: [
      { value: '22', label: 'Young women implementers' },
      { value: '3', label: 'Tech solutions tested' },
      { value: '6', label: 'Settlement hubs reached' },
      { value: '100%', label: 'Locally maintained' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'In September 2025, Beyond Borders implemented Breaking Barriers, a pilot project testing practical, low-cost technology solutions designed specifically for indigenous pastoralist communities in Northern Kenya. The project trained 22 young women to deploy, manage and adapt three core tools: offline mapping applications for resource tracking, solar-powered community radio linkages, and simple digital market-information systems.',
          'Unlike standard tech-for-development models, Breaking Barriers required that every solution be maintainable without external technical support, function without reliable internet, and remain under community governance. The pilot demonstrated that barriers to technology are not primarily about innovation — they are about design fit. When tools are adapted to low-connectivity, mobile, oral-culture contexts, and when indigenous women manage them, adoption rates increase and community trust is preserved.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'Pastoralist communities in Northern Kenya face persistent barriers to information and communication: drought early warnings often arrive too late, women livestock traders lack market price data, and conflict mediation suffers from poor coordination across vast territories. Conventional tech solutions — smartphone apps, cloud-based platforms, biometric systems — assume levels of connectivity, literacy and individual device ownership that do not exist in most ASAL settlements.',
          'Beyond Borders designed Breaking Barriers to test whether appropriately simple, offline-first, collectively managed technologies could address these gaps without replicating patterns of dependency or extraction. The project focused on tools that could be repaired locally, powered by solar energy, and operated by women who understand both the technology and the social context.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Test three appropriate technology solutions in real pastoralist settlement conditions.' },
          { text: 'Train a cohort of indigenous young women as technology implementers and troubleshooters.' },
          { text: 'Assess whether community-managed tech hubs can sustain operation without permanent external technical support.' },
          { text: 'Document which barriers — power, connectivity, literacy, gender norms — are most decisive for each tool type.' },
          { text: 'Establish maintenance and governance protocols that keep technology under local control.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        bullets: [
          { label: 'Offline mapping', text: 'Mapeo and paper-digital hybrid methods for tracking grazing, water points and conflict-sensitive areas.' },
          { label: 'Community radio', text: 'Solar-powered linkages connecting settlement hubs to existing FM stations for drought and market alerts.' },
          { label: 'SMS market information', text: 'Basic feature phones used to share livestock prices between women traders.' },
          { label: 'Training and deployment', text: '22 young women trained in device management, solar charging systems, basic troubleshooting and collective governance of shared equipment, then deployed across six settlement hubs.' },
          { label: 'Governance', text: 'Each hub established a women-majority technology management committee responsible for device care, access scheduling and malfunction reporting. No data was uploaded to external servers without explicit collective consent.' },
        ],
      },
      {
        heading: '5. Key Results and Outputs',
        bullets: [
          { label: 'Hubs', text: 'Six functional community tech hubs operating across Turkana and Samburu counties.' },
          { label: 'Implementers', text: '22 young women trained as technology implementers capable of basic hardware troubleshooting and workflow adaptation.' },
          { label: 'Documentation', text: 'Three tested and documented tech solutions with ASAL-adapted user guides in Kiswahili and Turkana.' },
          { label: 'Market access', text: 'Improved market information flow among women livestock traders in four settlement clusters.' },
          { label: 'Sustainability', text: 'Community-managed hubs sustained operation for 8+ months without external technical visits.' },
          { label: 'Negotiating power', text: 'Increased confidence among women in negotiating with male-dominated livestock markets using price data.' },
        ],
      },
      {
        heading: '6. Challenges and Lessons Learned',
        bullets: [
          { label: 'Hardware durability', text: 'Dust, heat and rough transport damaged equipment faster than anticipated. Ruggedised or locally repairable devices are essential.' },
          { label: 'Solar dependency', text: 'Extended cloudy periods reduced charging capacity. Hybrid power strategies — solar plus hand-crank or pedal options — warrant exploration.' },
          { label: 'Feature phone persistence', text: 'Smartphones remain scarce; SMS and voice-based solutions reached far more people than app-based tools.' },
          { label: 'Gendered time poverty', text: 'Women could not attend hub sessions during peak livestock or water-fetching periods. Scheduling must align with pastoralist labour calendars.' },
          { label: 'External assumptions die hard', text: 'Some partner organisations continued pushing app-based solutions that failed in testing. Community implementers needed advocacy skills to resist inappropriate donor preferences.' },
        ],
        callout:
          'Key lesson: The barrier is rarely the community. The barrier is technology designed for radically different contexts. Breaking barriers means redesigning the tool, not demanding the environment change.',
      },
      {
        heading: '7. Contribution and Looking Ahead',
        paragraphs: [
          'Breaking Barriers proved that indigenous young women can implement and sustain technology in some of Kenya’s most infrastructure-poor regions. It generated practical toolkits, maintenance protocols and evidence that now anchor the collective’s partnerships and advocacy, confirming that Beyond Borders’ offline-first, community-governed approach is not a limitation but a design strength.',
          'Beyond Borders will expand the hub network, deepen repair and maintenance training, and explore mesh networking for inter-settlement communication. All future tool adoption will be filtered through the Breaking Barriers criteria: offline-capable, locally maintainable, collectively governed and gender-responsive.',
        ],
      },
    ],
    keyFindings: [
      'Offline-first tools consistently outperformed cloud-dependent alternatives in ASAL conditions.',
      'SMS and voice-based solutions reached far more people than app-based tools, because smartphones remain scarce.',
      'Community-managed hubs operated for over eight months with no external technical visits.',
      'Environmental durability — dust, heat, transport — is a more decisive constraint than software capability.',
      'Adoption failures trace to design fit, not community capacity or willingness.',
    ],
  },
  {
    slug: 'limited-access-technology-impact',
    reportNumber: 'Research Report',
    title: 'The Impact of Technology on Communities with Limited Access',
    subtitle:
      'Participatory Action Research on Technology Resources, Skills and Knowledge in Indigenous Pastoralist Communities',
    summary:
      'Thirty indigenous young women and twelve elders across Turkana, Samburu and Marsabit mapped technology gaps, documented lived experiences of digital exclusion, and co-designed realistic pathways to meaningful inclusion — producing a community-authored Technology Impact Assessment covering 15 settlements.',
    excerpt:
      '30 young women researchers, 12 elders, 15 settlements audited, and a community-authored evidence base on what digital exclusion actually looks like in the ASAL.',
    category: 'Research Report',
    categoryColor: 'bg-violet-500',
    file: '/reports/Beyond_Borders_Limited_Access_Report.pdf',
    fileSize: '339 KB',
    pages: 4,
    published: 'February 2026',
    publishedISO: '2026-02-01',
    period: 'Research conducted 2024 – 2025',
    region: 'Turkana, Samburu & Marsabit Counties, Northern Kenya ASAL',
    methodology:
      'Community technology audits, recorded story circles, five-day critical digital literacy residentials, separate elder consultations, offline-first data storage',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '9 min read',
    featured: false,
    tags: ['Digital Divide', 'Participatory Research', 'Digital Literacy', 'Data Sovereignty', 'Infrastructure'],
    image: '/7.webp',
    stats: [
      { value: '30', label: 'Young women researchers' },
      { value: '12', label: 'Elders consulted' },
      { value: '3', label: 'Counties reached' },
      { value: '85%', label: 'Report increased digital confidence' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'In 2024–2025, Beyond Borders conducted a participatory action research project examining how technology impacts indigenous pastoralist communities who possess limited access to devices, electricity, digital literacy training and internet connectivity. The project engaged 30 indigenous young women and 12 community elders across Turkana, Samburu and Marsabit counties to map technology gaps, document lived experiences of digital exclusion, and co-design realistic pathways for meaningful inclusion.',
          'The research confirmed that technology is not neutral in ASAL contexts. Without community control, external tech interventions often replicate extractive patterns: data is harvested, infrastructure is abandoned, and local knowledge is displaced by incompatible platforms. Conversely, when indigenous women lead technology adoption, tools are adapted to pastoralist mobility, oral traditions and collective decision-making.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'Northern Kenya’s ASAL communities are among the most digitally excluded populations in East Africa. National connectivity statistics mask deep rural inequalities: mobile network coverage is intermittent, smartphone ownership is concentrated among men and youth in market towns, and digital literacy programmes rarely reach nomadic households. External technology projects — from biometric registration to mobile money pilots — have frequently been designed in Nairobi or international capitals with little consultation, leading to tool abandonment, data vulnerabilities and community distrust.',
          'Beyond Borders initiated this project to centre indigenous voices in debates about technology and development. Rather than measuring impact through device penetration or app downloads, the collective asked: what does technology mean for communities whose primary resources are mobility, oral memory and ecological knowledge? The project treated digital exclusion not as a deficit to be fixed, but as a structural condition requiring structural — and culturally grounded — responses.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Map the actual distribution of technology resources, skills and knowledge across pastoralist settlements in three counties.' },
          { text: 'Document community experiences of extractive or inappropriate tech interventions.' },
          { text: 'Build critical digital literacy among indigenous young women, enabling them to assess technology proposals rather than simply consume them.' },
          { text: 'Co-design, with elders and participants, principles for ethical technology engagement in ASAL contexts.' },
          { text: 'Produce a community-authored evidence base to inform future advocacy and partnership negotiations.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        paragraphs: [
          'Thirty young women aged 18–30 were selected through community networks, prioritising those with existing roles in women’s groups, peace committees or livestock marketing associations. Twelve male and female elders were engaged separately to capture intergenerational perspectives on technology and cultural change. All materials were stored on local devices under community control, consistent with Beyond Borders’ offline-first protocol.',
        ],
        bullets: [
          { label: 'Community technology audits', text: 'Participants inventoried devices, charging points, network availability and existing digital practices in their settlements.' },
          { label: 'Story circles', text: 'Facilitated discussions recorded, with consent, community experiences of failed tech projects, mobile money fraud, biometric registration and distance learning.' },
          { label: 'Critical digital literacy workshops', text: 'Five-day residential sessions covering how the internet works, data privacy basics, algorithmic bias, and how to evaluate whether a technology serves community interests.' },
          { label: 'Elder consultations', text: 'Separate dialogues exploring how technology intersects with sacred knowledge, gender norms and pastoralist mobility.' },
        ],
      },
      {
        heading: '5. Key Results and Outputs',
        bullets: [
          { label: 'Assessment', text: 'A community-authored Technology Impact Assessment covering 15 settlements across three counties.' },
          { label: 'Training', text: '30 young women trained in critical digital literacy and participatory research methods.' },
          { label: 'Principles', text: 'A set of community-developed principles for ethical tech engagement in ASAL areas.' },
          { label: 'Documentation', text: '18 recorded story-circle sessions documenting lived experiences of digital exclusion and extractive tech.' },
          { label: 'Assessors', text: '8 participants identified as ready to serve as community technology assessors for future projects.' },
          { label: 'Advocacy', text: 'Evidence base now used by participants to engage county government and NGO partners on connectivity infrastructure demands.' },
        ],
      },
      {
        heading: '6. Challenges and Lessons Learned',
        bullets: [
          { label: 'Infrastructure gaps are deeper than assumed', text: 'Many settlements lack any reliable charging point within a two-hour walk. Solar solutions are essential but require maintenance knowledge.' },
          { label: '“Digital literacy” must include critical analysis', text: 'Teaching women to use apps without teaching them to question data extraction leaves them vulnerable.' },
          { label: 'Gendered device ownership', text: 'In most households men control the primary smartphone. Women’s access is borrowed and monitored. Tech design must account for shared-device realities.' },
          { label: 'Elder suspicion is rational and protective', text: 'Prior bad experiences with biometric and research projects meant trust-building took longer than anticipated.' },
          { label: 'Connectivity assumptions distort design', text: 'Any intervention assuming regular internet access failed in practice. Offline-capable, low-bandwidth tools are non-negotiable.' },
        ],
        callout:
          'Key lesson: Technology impact cannot be separated from power. Meaningful access requires not just devices and networks, but community control over what is collected, who owns the data, and which knowledge systems are privileged.',
      },
      {
        heading: '7. Contribution to Beyond Borders’ Work',
        paragraphs: [
          'This project established Beyond Borders’ Technology & Power working circle and provided the collective with a critical lens for evaluating all future digital partnerships. It demonstrated that indigenous young women can author sophisticated technology assessments and that communities can shift from passive recipients to informed negotiators of tech interventions.',
        ],
      },
    ],
    keyFindings: [
      'National connectivity statistics mask the depth of rural ASAL exclusion; settlement-level audits tell a different story.',
      'Many settlements have no reliable charging point within a two-hour walk.',
      'Women’s device access is overwhelmingly borrowed and monitored, not owned.',
      'Digital literacy without critical analysis of data extraction leaves communities more exposed, not less.',
      'Elder suspicion of technology projects is a rational response to prior extractive research and registration schemes.',
    ],
  },
  {
    slug: 'open-source-opening-the-frontier',
    reportNumber: 'Project Report',
    title: 'How Open-Source Digital Tools Are Opening Up the Frontier',
    subtitle:
      'Community-Governed Open-Source Deployment in Northern Kenya’s Pastoralist Frontier',
    summary:
      'Twenty indigenous young women were trained to deploy, adapt and locally govern four open-source tools — Mapeo, KoboToolbox, Syncthing and Jitsi Meet — creating 35+ community records with zero uploads to corporate cloud services.',
    excerpt:
      '20 women trained, four open-source tools tested, 35+ community records created, and not a single file passed through a commercial cloud.',
    category: 'Project Report',
    categoryColor: 'bg-teal-500',
    file: '/reports/Beyond_Borders_Open_Source_Report.pdf',
    fileSize: '339 KB',
    pages: 4,
    published: '2025',
    publishedISO: '2025-06-01',
    period: 'Implementation period: 2024 – 2025',
    region: 'Turkana & Samburu Counties, Northern Kenya ASAL',
    methodology:
      'Community tool selection, hands-on installation and troubleshooting workshops, offline and peer-to-peer deployment, local governance protocols',
    preparedBy: 'Beyond Borders — Indigenous Young Women-Led Collective',
    readTime: '8 min read',
    featured: false,
    tags: ['Open Source', 'Digital Sovereignty', 'Offline-First', 'Mapping', 'Privacy'],
    image: '/ac.jpg',
    stats: [
      { value: '20', label: 'Young women trained' },
      { value: '4', label: 'Open-source tools tested' },
      { value: '35+', label: 'Community records created' },
      { value: '0', label: 'Corporate cloud uploads' },
    ],
    sections: [
      {
        heading: '1. Executive Summary',
        paragraphs: [
          'In 2024–2025, Beyond Borders piloted the use of open-source digital tools to address information and communication gaps in Northern Kenya’s pastoralist frontier. The project trained 20 indigenous young women to deploy, adapt and locally govern open-source applications for mapping, storytelling and secure communication — tools that are free to use, modifiable, and free from corporate data extraction.',
          'The pilot demonstrated that open-source tools can bypass the proprietary lock-in and surveillance risks of commercial platforms while remaining adaptable to low-connectivity, mobile pastoralist contexts. When combined with community governance and offline-first workflows, open-source becomes not just a technical choice but a political one: a refusal of digital colonialism and an assertion of local control over community data and knowledge.',
        ],
      },
      {
        heading: '2. Background and Rationale',
        paragraphs: [
          'Pastoralist communities in Northern Kenya have historically been “opened up” by external forces — colonial administrators, researchers, NGOs and now technology corporations — each extracting data, labour or knowledge while offering limited lasting benefit. Commercial digital platforms, even when nominally free, impose terms of service that few community members can read or negotiate, harvest behavioural data, and can terminate access without recourse.',
          'Open-source software offers a structural alternative: code that is publicly inspectable, modifiable and deployable without licensing fees or corporate control. However, open-source tools are rarely designed with ASAL realities in mind, and technical support is typically available only to those with internet access and English fluency. Beyond Borders designed this pilot to bridge that gap — training indigenous young women to become the local adapters and maintainers of open-source tools in frontier contexts.',
        ],
      },
      {
        heading: '3. Objectives',
        bullets: [
          { text: 'Introduce and test open-source tools relevant to pastoralist community needs — mapping, archiving, communication.' },
          { text: 'Train indigenous young women to install, configure and troubleshoot open-source applications on local devices.' },
          { text: 'Assess whether open-source tools can function reliably in low-connectivity, low-power ASAL conditions.' },
          { text: 'Establish community governance protocols that keep open-source deployments under local control and free from external data extraction.' },
          { text: 'Document the political and practical dimensions of choosing open-source in indigenous contexts.' },
        ],
      },
      {
        heading: '4. Approach and Methods',
        bullets: [
          { label: 'Mapeo', text: 'Offline collaborative mapping for resource and territory documentation.' },
          { label: 'KoboToolbox', text: 'Offline data collection for community surveys and oral history metadata.' },
          { label: 'Syncthing', text: 'Peer-to-peer file sync for secure, device-to-device transfer without cloud servers, configured for local mesh networks rather than internet-dependent sync.' },
          { label: 'Jitsi Meet', text: 'Self-hosted video conferencing for occasional inter-settlement meetings when connectivity permits.' },
          { label: 'Training', text: '20 young women participated in hands-on workshops covering installation, offline configuration, basic troubleshooting and the ethical rationale for open-source — emphasising that these tools belong to no corporation and can be modified to fit community needs.' },
        ],
      },
      {
        heading: '5. Key Results and Outputs',
        bullets: [
          { label: 'Training', text: '20 young women trained as open-source tool adapters and community support providers.' },
          { label: 'Records', text: '35+ community records — maps, oral history metadata, survey data — created using open-source platforms.' },
          { label: 'Toolkits', text: 'Four fully offline-capable toolkits with ASAL-adapted user guides in local languages.' },
          { label: 'Policy', text: 'A community policy committing Beyond Borders to open-source and local-data principles for all future digital work.' },
          { label: 'Extraction eliminated', text: 'Corporate data extraction removed entirely from documented community knowledge workflows.' },
          { label: 'Refusal capacity', text: 'Local capacity to refuse proprietary platforms when they do not serve community interests.' },
        ],
      },
      {
        heading: '6. Challenges and Lessons Learned',
        bullets: [
          { label: 'Technical documentation is exclusionary', text: 'Most open-source guides assume English fluency and urban technical literacy. Local-language, visual and oral training methods were essential adaptations.' },
          { label: 'Device limitations', text: 'Some open-source tools require more processing power or memory than available on older shared phones. Lightweight alternatives must always be prioritised.' },
          { label: 'Occasional connectivity is still a challenge', text: 'Even peer-to-peer sync requires occasional proximity or local network access. Manual transfer via SD cards and external drives remained necessary for some settlements.' },
          { label: 'The “free” myth', text: 'Open-source is free as in freedom, not always free as in cost. Local support, training and maintenance require time and resources that must be funded.' },
          { label: 'Resistance from partners', text: 'Some institutional partners preferred familiar proprietary platforms. Community open-source advocates needed negotiation skills to maintain collective standards.' },
        ],
        callout:
          'Key lesson: Open-source is not a magic solution, but it shifts power. When indigenous women control the tools, the frontier is opened on community terms — not by external extraction, but by local digital sovereignty.',
      },
      {
        heading: '7. Contribution to Beyond Borders’ Work',
        paragraphs: [
          'This project established open-source and digital sovereignty as core pillars of Beyond Borders’ technology strategy. It proved that frontier communities need not accept the platforms offered by corporations or distant governments; they can build, adapt and govern their own. The trained cohort now serves as internal technical support for all collective digital projects.',
        ],
      },
    ],
    keyFindings: [
      'Open-source deployment eliminated corporate data extraction from community knowledge workflows entirely.',
      'Indigenous women managed complex software configuration without external engineers.',
      'Open-source documentation assumes English fluency and urban technical literacy — local-language and oral training were required adaptations.',
      'Peer-to-peer sync still needs proximity; manual transfer by SD card remained necessary in some settlements.',
      'Open-source is free as in freedom, not as in cost — training and maintenance must be funded.',
    ],
  },
]

export function getReport(slug: string): Report | undefined {
  return reports.find((report) => report.slug === slug)
}

export const reportCategories = [
  'All',
  ...Array.from(new Set(reports.map((report) => report.category))),
]
