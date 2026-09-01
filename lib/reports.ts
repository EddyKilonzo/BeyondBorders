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
]

export function getReport(slug: string): Report | undefined {
  return reports.find((report) => report.slug === slug)
}

export const reportCategories = [
  'All',
  ...Array.from(new Set(reports.map((report) => report.category))),
]
