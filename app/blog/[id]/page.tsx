import { ArrowLeft, ArrowRight, Calendar, Clock, Instagram, LinkIcon, Mail, User, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimation } from "@/components/scroll-animation"

// Sample blog posts data (in a real app, this would come from a database or CMS)
const blogPosts = [
  {
    id: 1,
    title: "Building Economic Resilience: Success Stories from Our Entrepreneurship Program",
    excerpt: "Discover how our vocational training and microfinance programs are transforming lives and creating sustainable livelihoods in nomadic communities.",
    content: (
      <div className="space-y-6">
        <p>In the heart of the Kenya-Somalia border, where opportunities are scarce and challenges abundant, our Economic Empowerment program has become a beacon of hope for hundreds of nomadic families. Through a comprehensive approach combining vocational training, microfinance, and ongoing mentorship, we're breaking the cycle of poverty one entrepreneur at a time.</p>

        <h2>The Challenge</h2>
        <p>Nomadic communities face unique obstacles when it comes to economic participation. Limited access to traditional financial services, lack of formal documentation, and restricted mobility create barriers that seem insurmountable. Our research revealed that 78% of nomadic people in our target areas had entrepreneurial aspirations but lacked the resources and knowledge to pursue them.</p>

        <h2>Our Approach</h2>
        <p>Our Economic Empowerment program takes a holistic approach:</p>
        <ul>
          <li><strong>Skills Training:</strong> We offer vocational training in high-demand trades including tailoring, carpentry, mobile phone repair, and small-scale agriculture.</li>
          <li><strong>Microfinance:</strong> Our community-based lending circles provide access to small loans with flexible repayment terms.</li>
          <li><strong>Business Mentorship:</strong> Each participant is paired with a successful local entrepreneur who provides ongoing guidance and support.</li>
          <li><strong>Market Linkages:</strong> We facilitate connections between our entrepreneurs and local markets, ensuring sustainable income streams.</li>
        </ul>

        <h2>Success Stories</h2>
        <p>Amina, a 28-year-old mother of three, joined our tailoring program after fleeing conflict in Somalia. Within six months, she had established a small business making school uniforms for local schools. Today, she employs two other women and has expanded her business to include wedding dresses and traditional clothing.</p>

        <p>"This program didn't just teach me to sew," Amina reflects. "It taught me to dream again. I now own my own business and can provide for my family with dignity."</p>

        <h2>Impact and Results</h2>
        <p>Over the past year, our Economic Empowerment program has achieved remarkable results:</p>
        <ul>
          <li>500+ entrepreneurs trained across various trades</li>
          <li>85% of participants started their own businesses within 6 months</li>
          <li>Average monthly income increased by 340% for participants</li>
          <li>200+ jobs created in local communities</li>
          <li>95% loan repayment rate in our microfinance program</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>As we expand our program, we're focusing on technology integration and digital literacy to help our entrepreneurs access broader markets. We're also developing partnerships with mobile money providers to increase financial inclusion.</p>

        <p>The success of our Economic Empowerment program demonstrates that with the right support, nomadic communities can become engines of economic growth and innovation. We're not just providing aid – we're building sustainable futures.</p>
      </div>
    ),
    author: "Amina Hassan",
    date: "July 5, 2025",
    readTime: "5 min read",
    category: "Economic Justice",
    image: "/2.webp",
    tags: ["Entrepreneurship", "Skills Training", "Microfinance", "Economic Empowerment", "Nomadic Communities"],
    featured: true,
  },
  {
    id: 2,
    title: "Breaking the Silence: Our Fight Against Gender-Based Violence",
    excerpt: "A deep dive into our comprehensive approach to ending harmful practices and supporting survivors through community-led initiatives.",
    content: (
      <div className="space-y-6">
        <p>Gender-based violence (GBV) remains one of the most pervasive human rights violations in nomadic communities. Our Social Justice program addresses this crisis through a multi-faceted approach that combines immediate support for survivors with long-term community transformation initiatives.</p>

        <h2>Understanding the Scope</h2>
        <p>In nomadic settings, GBV rates are significantly higher than in stable communities. Our research indicates that 1 in 3 women in our target areas have experienced some form of gender-based violence. The isolation, lack of legal protections, and social disruption that characterize nomadic situations create conditions where GBV can flourish unchecked.</p>

        <h2>Our Comprehensive Response</h2>
        <p>Our approach to combating GBV is built on four pillars:</p>
        
        <h3>1. Immediate Support and Protection</h3>
        <ul>
          <li>24/7 crisis hotline staffed by trained counselors</li>
          <li>Safe houses providing temporary shelter for survivors</li>
          <li>Legal aid and advocacy services</li>
          <li>Medical and psychological support</li>
        </ul>

        <h3>2. Community Education and Awareness</h3>
        <p>We work with community leaders, religious figures, and traditional authorities to challenge harmful norms and practices. Our education programs reach both men and women, recognizing that lasting change requires community-wide engagement.</p>

        <h3>3. Economic Empowerment</h3>
        <p>We provide specialized economic opportunities for GBV survivors, recognizing that economic independence is crucial for breaking cycles of violence. Our tailored programs include trauma-informed vocational training and support groups.</p>

        <h3>4. System Strengthening</h3>
        <p>We work with local authorities to strengthen referral systems and improve the response to GBV cases. This includes training police, healthcare workers, and judicial officers on GBV protocols.</p>

        <h2>Cultural Transformation</h2>
        <p>One of our most significant achievements has been the transformation of cultural attitudes toward harmful practices like Female Genital Mutilation (FGM). Through intensive community dialogue and education, we've seen a 60% reduction in FGM cases in our target areas.</p>

        <p>Fatima, a traditional birth attendant who once performed FGM, now leads our anti-FGM campaign. "I used to think I was helping girls become women," she explains. "Now I understand I was harming them. Today, I protect girls from this practice."</p>

        <h2>Survivor-Centered Approach</h2>
        <p>All our programs are designed with survivors at the center. We ensure that services are accessible, culturally appropriate, and trauma-informed. Our survivors' support groups have become powerful forums for healing and advocacy.</p>

        <h2>Measuring Impact</h2>
        <p>Our Social Justice program has achieved significant milestones:</p>
        <ul>
          <li>300+ survivors provided with comprehensive support services</li>
          <li>50+ community leaders trained as GBV advocates</li>
          <li>25% reduction in reported GBV cases over 18 months</li>
          <li>60% reduction in FGM cases in target communities</li>
          <li>85% of survivors report feeling safer in their communities</li>
        </ul>

        <h2>The Road Ahead</h2>
        <p>While we've made significant progress, much work remains. We're expanding our program to reach more communities and developing innovative approaches to prevention. Our goal is not just to respond to GBV, but to create communities where it cannot take root.</p>

        <p>Breaking the silence around GBV is the first step toward ending it. Through our comprehensive approach, we're not only supporting survivors but building a future where all women and girls can live free from violence.</p>
      </div>
    ),
    author: "Dr. Fatima Al-Rashid",
    date: "July 2, 2025",
    readTime: "7 min read",
    category: "Social Justice",
    image: "/6.webp",
    tags: ["GBV", "Women's Rights", "Community Healing", "FGM", "Social Justice"],
    featured: false,
  },
  {
    id: 3,
    title: "Climate Adaptation: Innovative Solutions for Water Security",
    excerpt: "How our climate resilience projects are helping communities adapt to changing weather patterns and secure water access.",
    content: (
      <div className="space-y-6">
        <p>Climate change is not a distant threat for nomadic communities along the Kenya-Somalia border – it's a daily reality that affects every aspect of life. Our Climate Resilience program addresses this challenge through innovative, community-driven solutions that build long-term adaptive capacity.</p>

        <h2>The Climate Challenge</h2>
        <p>The region faces increasingly unpredictable rainfall patterns, prolonged droughts, and extreme weather events. Traditional water sources are disappearing, and agricultural practices that sustained communities for generations are no longer viable. Our climate data shows that rainfall has decreased by 35% over the past decade, while temperatures have risen by 2.3°C.</p>

        <h2>Water Security Innovations</h2>
        <p>Water is life, and securing reliable access to clean water is fundamental to community resilience. Our water security initiatives include:</p>

        <h3>Rainwater Harvesting Systems</h3>
        <p>We've installed over 150 rainwater harvesting systems in schools, health centers, and community buildings. These systems can capture and store up to 10,000 liters of water during the rainy season, providing a crucial buffer during dry periods.</p>

        <h3>Solar-Powered Water Pumps</h3>
        <p>Traditional hand pumps often fail during droughts when water tables drop. Our solar-powered pumps can access deeper groundwater sources and operate independently of the electrical grid. We've installed 25 solar pumps that serve over 8,000 people.</p>

        <h3>Water Treatment and Purification</h3>
        <p>Access to clean water is as important as access to water itself. Our community-based water treatment programs train local technicians to maintain and operate water purification systems, ensuring long-term sustainability.</p>

        <h2>Climate-Smart Agriculture</h2>
        <p>Food security is intrinsically linked to climate resilience. Our agricultural programs help farmers adapt to changing conditions through:</p>

        <h3>Drought-Resistant Crops</h3>
        <p>We've introduced drought-resistant varieties of sorghum, millet, and cowpeas that can survive with minimal water. These crops have shown 40% higher yields compared to traditional varieties during drought conditions.</p>

        <h3>Conservation Agriculture</h3>
        <p>Our conservation agriculture techniques, including crop rotation, cover cropping, and minimal tillage, help preserve soil moisture and improve soil health. Farmers report 30% improvement in soil water retention after implementing these practices.</p>

        <h3>Irrigation Efficiency</h3>
        <p>We've introduced drip irrigation systems that reduce water usage by up to 60% while maintaining crop yields. These systems are particularly effective for vegetable production and have enabled year-round farming in previously marginal areas.</p>

        <h2>Community Success Stories</h2>
        <p>Omar, a farmer from Dadaab, was struggling with declining crop yields due to erratic rainfall. After joining our climate-smart agriculture program, he adopted drought-resistant sorghum varieties and conservation farming techniques. His 2024 harvest was his best in five years, despite receiving only 40% of normal rainfall.</p>

        <p>"The old ways of farming don't work anymore," Omar explains. "But with these new methods, I can feed my family even when the rains fail. My children won't go hungry."</p>

        <h2>Environmental Restoration</h2>
        <p>Building resilience also means restoring damaged ecosystems. Our environmental restoration initiatives include:</p>

        <ul>
          <li>Reforestation with native drought-resistant species</li>
          <li>Soil conservation through terracing and contour farming</li>
          <li>Wetland restoration to improve water retention</li>
          <li>Community-based natural resource management</li>
        </ul>

        <h2>Building Adaptive Capacity</h2>
        <p>True climate resilience comes from building the capacity of communities to adapt to changing conditions. Our program includes:</p>

        <ul>
          <li>Climate literacy education for all age groups</li>
          <li>Early warning systems for weather-related risks</li>
          <li>Community-based disaster preparedness</li>
          <li>Livelihood diversification strategies</li>
        </ul>

        <h2>Measuring Our Impact</h2>
        <p>Our Climate Resilience program has achieved significant results:</p>
        <ul>
          <li>1,200+ households have improved access to clean water</li>
          <li>800+ farmers trained in climate-smart agriculture</li>
          <li>500+ hectares of land under conservation agriculture</li>
          <li>40% increase in crop yields using drought-resistant varieties</li>
          <li>200+ hectares of degraded land restored</li>
        </ul>

        <h2>Looking to the Future</h2>
        <p>Climate change will continue to pose challenges, but our program demonstrates that communities can adapt and thrive with the right support. We're expanding our initiatives to reach more communities and developing new technologies for climate adaptation.</p>

        <p>The fight against climate change is not just about reducing emissions – it's about building resilient communities that can weather any storm. Through innovation, community engagement, and sustainable practices, we're creating a future where climate change is not a barrier to human flourishing.</p>
      </div>
    ),
    author: "Omar Jama",
    date: "June 28, 2025",
    readTime: "4 min read",
    category: "Climate Resilience",
    image: "/po2.jpg",
    tags: ["Climate Change", "Water Security", "Agriculture", "Sustainability", "Innovation"],
    featured: false,
  },
  {
    id: 4,
    title: "Maternal Health Revolution: Mobile Clinics Transform Healthcare Access",
    excerpt: "The impact of our mobile health clinics in providing essential reproductive health services to remote communities.",
    content: (
      <div className="space-y-6">
        <p>Healthcare access is a fundamental human right, yet for many nomadic women and girls along the Kenya-Somalia border, quality maternal and reproductive health services remain out of reach. Our Mobile Health Clinics are revolutionizing healthcare delivery by bringing essential services directly to communities that need them most.</p>

        <h2>The Healthcare Access Challenge</h2>
        <p>In remote nomadic settlements, the nearest health facility can be dozens of kilometers away. For pregnant women and new mothers, this distance can be life-threatening. Our baseline assessment revealed that only 35% of women in our target areas had access to skilled birth attendance, and maternal mortality rates were 3.5 times higher than the national average.</p>

        <h2>Mobile Clinics: Healthcare on Wheels</h2>
        <p>Our fleet of mobile clinics operates on a regular schedule, visiting remote communities weekly or bi-weekly depending on need. Each clinic is equipped with:</p>

        <ul>
          <li>Ultrasound machines for prenatal care</li>
          <li>Laboratory equipment for basic diagnostics</li>
          <li>Contraceptive supplies and family planning services</li>
          <li>Maternal health supplies and equipment</li>
          <li>Pharmacy with essential medications</li>
          <li>Cold chain storage for vaccines</li>
        </ul>

        <h2>Comprehensive Reproductive Health Services</h2>
        <p>Our mobile clinics provide a full range of sexual and reproductive health services:</p>

        <h3>Antenatal Care</h3>
        <p>We provide complete antenatal care packages including regular check-ups, health education, nutritional counseling, and identification of high-risk pregnancies. Our portable ultrasound technology has been particularly valuable in detecting complications early.</p>

        <h3>Family Planning</h3>
        <p>We offer a full range of contraceptive options with comprehensive counseling to help women make informed choices about their reproductive health. Our services include long-acting reversible contraceptives (LARCs) that are particularly suitable for resource-constrained settings.</p>

        <h3>Postnatal Care</h3>
        <p>Our postnatal care services include health checks for both mothers and newborns, breastfeeding support, immunizations, and screening for postpartum depression. We also provide ongoing family planning counseling.</p>

        <h3>Adolescent Health</h3>
        <p>We offer specialized services for adolescent girls, including health education, menstrual health management, and age-appropriate reproductive health services. Our peer educator program has been particularly effective in reaching young women.</p>

        <h2>Community Health Workers</h2>
        <p>Our mobile clinics work in partnership with trained community health workers (CHWs) who provide ongoing support between clinic visits. CHWs are trained to:</p>

        <ul>
          <li>Identify and refer high-risk pregnancies</li>
          <li>Provide basic health education</li>
          <li>Support medication adherence</li>
          <li>Conduct follow-up visits</li>
          <li>Maintain health records</li>
        </ul>

        <h2>Technology Integration</h2>
        <p>We've integrated digital health technologies to improve service delivery and data collection:</p>

        <ul>
          <li>Electronic health records accessible across all clinic locations</li>
          <li>Telemedicine capabilities for specialist consultations</li>
          <li>Mobile health (mHealth) platforms for appointment reminders and health education</li>
          <li>Digital data collection for program monitoring and evaluation</li>
        </ul>

        <h2>Transforming Lives</h2>
        <p>Khadija's story illustrates the impact of our mobile health clinics. Living in a remote settlement, she had already lost two children due to complications during childbirth. When she became pregnant again, our mobile clinic provided regular antenatal care, identified her high-risk status, and facilitated her transfer to a hospital for delivery.</p>

        <p>"Without the mobile clinic, I would have lost another child," Khadija reflects. "The nurses became like family to me. They gave me hope when I had none."</p>

        <h2>Measuring Our Impact</h2>
        <p>Our Mobile Health Clinics have achieved remarkable results:</p>
        <ul>
          <li>3,000+ people served annually across 15 remote communities</li>
          <li>85% of pregnant women now receive skilled antenatal care</li>
          <li>70% reduction in maternal mortality rates in target areas</li>
          <li>95% of deliveries now attended by skilled birth attendants</li>
          <li>80% increase in modern contraceptive use</li>
          <li>100% increase in childhood immunization rates</li>
        </ul>

        <h2>Sustainability and Scale</h2>
        <p>To ensure long-term sustainability, we're working to integrate our mobile clinic services with the national health system. We're also training local health workers to take over clinic operations gradually.</p>

        <p>Our model has attracted attention from other organizations and governments. We're currently supporting the replication of our approach in three other countries, demonstrating the scalability of mobile health solutions.</p>

        <h2>Future Innovations</h2>
        <p>We're continuously innovating to improve our services:</p>

        <ul>
          <li>Solar-powered mobile clinics for extended field operations</li>
          <li>Drone technology for medication delivery to remote areas</li>
          <li>Artificial intelligence for diagnostic support</li>
          <li>Virtual reality for health education and training</li>
        </ul>

        <h2>A Vision for the Future</h2>
        <p>Our Mobile Health Clinics represent more than just healthcare delivery – they embody our vision of a world where every woman and girl has access to quality reproductive health services, regardless of where she lives.</p>

        <p>As we continue to expand and innovate, we're not just saving lives – we're building a foundation for healthier, more resilient communities. The revolution in maternal health access is just beginning, and we're proud to be leading the way.</p>
      </div>
    ),
    author: "Nurse Khadija Mohamed",
    date: "June 25, 2025",
    readTime: "6 min read",
    category: "Health Rights",
    image: "/5.webp",
    tags: ["Maternal Health", "Mobile Clinics", "Healthcare Access", "Reproductive Health", "Community Health"],
    featured: false,
  },
  {
    id: 5,
    title: "Youth Leadership: The Next Generation of Change-Makers",
    excerpt: "Meet the young leaders who are driving transformation in their communities through education and advocacy.",
    content: (
      <div className="space-y-6">
        <p>Young people are not just the leaders of tomorrow – they are the change-makers of today. In nomadic communities, youth represent both the greatest challenges and the most promising opportunities for transformation. Our Youth Leadership program harnesses the energy, creativity, and resilience of young people to drive positive change in their communities.</p>

        <h2>The Youth Opportunity</h2>
        <p>In nomadic settlements, young people under 25 make up 65% of the population. Despite facing numerous challenges including limited educational opportunities and restricted mobility, these youth possess incredible potential for innovation and leadership. Our program recognizes that investing in youth leadership is essential for sustainable community development.</p>

        <h2>Leadership Development Framework</h2>
        <p>Our Youth Leadership program is built on a comprehensive framework that develops skills across multiple domains:</p>

        <h3>Core Leadership Skills</h3>
        <ul>
          <li>Communication and public speaking</li>
          <li>Project management and planning</li>
          <li>Conflict resolution and mediation</li>
          <li>Financial literacy and resource mobilization</li>
          <li>Team building and collaboration</li>
        </ul>

        <h3>Civic Engagement</h3>
        <p>We train young people to become active citizens who can advocate for their communities' needs. This includes understanding of governance structures, advocacy strategies, and human rights principles.</p>

        <h3>Social Innovation</h3>
        <p>Our program encourages young people to identify community problems and develop innovative solutions. We provide support for social enterprises and community-based projects led by youth.</p>

        <h2>Youth-Led Initiatives</h2>
        <p>Our young leaders have launched numerous initiatives that are transforming their communities:</p>

        <h3>Community Learning Centers</h3>
        <p>Youth leaders have established learning centers that provide educational support to out-of-school children. These centers offer basic literacy and numeracy classes, vocational training, and life skills education.</p>

        <h3>Peace Building Programs</h3>
        <p>Young people are leading peace-building initiatives that bring together youth from different ethnic and religious backgrounds. These programs use sports, arts, and cultural activities to build understanding and cooperation.</p>

        <h3>Environmental Conservation</h3>
        <p>Youth environmental groups are leading reforestation efforts, waste management programs, and environmental education campaigns. Their tree-planting initiative has resulted in over 10,000 trees planted in the past year.</p>

        <h3>Health Education</h3>
        <p>Peer health educators are conducting awareness campaigns on topics including reproductive health, mental health, and disease prevention. Their peer-to-peer approach has been particularly effective in reaching young people.</p>

        <h2>Education and Scholarships</h2>
        <p>Education is the foundation of youth empowerment. Our program provides:</p>

        <ul>
          <li>Scholarships for secondary and higher education</li>
          <li>Alternative education pathways for older youth</li>
          <li>Technical and vocational training opportunities</li>
          <li>Digital literacy programs</li>
          <li>Leadership and soft skills training</li>
        </ul>

        <h2>Mentorship and Support</h2>
        <p>Every young leader in our program is paired with a mentor who provides guidance and support. Our mentors include community leaders, professionals, and successful young people who have graduated from our program.</p>

        <h2>Youth Council</h2>
        <p>We've established Youth Councils in each community that serve as platforms for youth participation in local decision-making. These councils work closely with traditional leaders and local authorities to ensure that youth voices are heard in community governance.</p>

        <h2>Success Stories</h2>
        <p>Ahmed, a 22-year-old nomadic person from Somalia, joined our program three years ago. Despite having limited formal education, he demonstrated exceptional leadership potential. Through our program, he received training in project management and community mobilization.</p>

        <p>Ahmed identified the lack of recreational facilities for young people as a major issue in his community. He mobilized other youth to build a sports field using local materials and volunteer labor. The project not only provided a space for recreation but also brought together young people from different backgrounds.</p>

        <p>Today, Ahmed leads a youth organization that runs multiple programs including sports leagues, tutoring services, and environmental conservation projects. He has been recognized by local authorities and invited to participate in regional youth forums.</p>

        <p>"This program taught me that age is not a barrier to leadership," Ahmed says. "Young people can create change if they are given the opportunity and support."</p>

        <h2>Digital Innovation</h2>
        <p>Recognizing the importance of digital skills in the 21st century, we've integrated technology training into our program:</p>

        <ul>
          <li>Basic computer literacy for all participants</li>
          <li>Digital marketing and social media management</li>
          <li>Mobile app development and coding</li>
          <li>Online entrepreneurship and e-commerce</li>
          <li>Digital storytelling and content creation</li>
        </ul>

        <h2>Gender Equality</h2>
        <p>Our program places special emphasis on developing young women leaders. We provide targeted support to address the unique challenges faced by young women in nomadic communities, including:</p>

        <ul>
          <li>Girls' leadership circles and mentorship</li>
          <li>Scholarships specifically for young women</li>
          <li>Support for young mothers to continue their education</li>
          <li>Advocacy training on women's rights and gender equality</li>
        </ul>

        <h2>Measuring Impact</h2>
        <p>Our Youth Leadership program has achieved significant results:</p>
        <ul>
          <li>500+ young people trained as community leaders</li>
          <li>150+ youth-led community projects implemented</li>
          <li>85% of participants continue their education or find employment</li>
          <li>25+ young women now serve in leadership positions in their communities</li>
          <li>10+ youth organizations established and registered</li>
          <li>95% of participants report increased confidence and leadership skills</li>
        </ul>

        <h2>Regional and Global Engagement</h2>
        <p>Our youth leaders are not just local change-makers – they are also regional and global advocates. We provide opportunities for young people to participate in regional youth forums, international conferences, and global advocacy campaigns.</p>

        <h2>Future Vision</h2>
        <p>We envision a future where young nomadic people are not seen as problems to be solved but as solutions to be supported. Our program is building a generation of leaders who will transform not just their own communities but the world.</p>

        <p>The next generation of change-makers is already here. They are creative, resilient, and determined to build a better future. Our role is to provide them with the tools, opportunities, and support they need to succeed.</p>

        <p>As we continue to expand our program, we're not just developing individual leaders – we're building a movement of young people who are committed to justice, equality, and human dignity. The future is in good hands.</p>
      </div>
    ),
    author: "Ahmed Ali",
    date: "June 22, 2025",
    readTime: "5 min read",
    category: "Youth Empowerment",
    image: "/3.webp",
    tags: ["Youth", "Leadership", "Education", "Empowerment", "Community Development"],
    featured: false,
  },
  {
    id: 6,
    title: "Sustainable Agriculture: Growing Food Security in Arid Regions",
    excerpt: "Innovative farming techniques and drought-resistant crops are helping communities achieve food security despite climate challenges.",
    content: (
      <div className="space-y-6">
        <p>Food security is fundamental to human dignity and community resilience. In the arid regions along the Kenya-Somalia border, traditional farming methods are increasingly inadequate to meet the nutritional needs of growing populations. Our Sustainable Agriculture program is revolutionizing food production through innovative techniques that work in harmony with the challenging environment.</p>

        <h2>The Food Security Challenge</h2>
        <p>The region faces a perfect storm of challenges: declining rainfall, soil degradation, population growth, and limited access to agricultural inputs. Our baseline studies showed that 68% of households experienced food insecurity, with children under five showing stunting rates of 35% – well above emergency thresholds.</p>

        <h2>Sustainable Agriculture Principles</h2>
        <p>Our approach to sustainable agriculture is built on principles that address both immediate food needs and long-term environmental health:</p>

        <h3>Soil Health Management</h3>
        <p>Healthy soil is the foundation of productive agriculture. We promote practices that build soil organic matter, improve water retention, and enhance nutrient cycling:</p>
        <ul>
          <li>Composting using organic waste and crop residues</li>
          <li>Cover cropping to protect and enrich soil</li>
          <li>Minimal tillage to preserve soil structure</li>
          <li>Integrated pest management to reduce chemical inputs</li>
        </ul>

        <h3>Water Conservation</h3>
        <p>In water-scarce environments, every drop counts. Our water conservation strategies include:</p>
        <ul>
          <li>Drip irrigation systems that reduce water usage by 50%</li>
          <li>Mulching to reduce evaporation and suppress weeds</li>
          <li>Rainwater harvesting for agricultural use</li>
          <li>Greywater recycling for irrigation</li>
        </ul>

        <h3>Crop Diversification</h3>
        <p>Diversifying crops reduces risk and improves nutrition. We promote cultivation of:</p>
        <ul>
          <li>Drought-resistant indigenous crops like sorghum and millet</li>
          <li>Nutritious vegetables that can be grown in small spaces</li>
          <li>Legumes that fix nitrogen and improve soil fertility</li>
          <li>Fruit trees that provide long-term food security</li>
        </ul>

        <h2>Climate-Smart Technologies</h2>
        <p>We introduce appropriate technologies that help farmers adapt to climate change:</p>

        <h3>Greenhouse Farming</h3>
        <p>Small-scale greenhouses allow year-round production of high-value crops using minimal water. Our simple, low-cost greenhouse designs can be built using local materials and have increased vegetable production by 300%.</p>

        <h3>Hydroponics and Vertical Farming</h3>
        <p>These soil-less growing systems are particularly valuable in areas with poor soil quality. They use 90% less water than traditional farming while producing higher yields in smaller spaces.</p>

        <h3>Solar-Powered Irrigation</h3>
        <p>Solar-powered water pumps and irrigation systems provide reliable water access without dependence on fossil fuels or grid electricity. These systems have enabled farming in previously marginal areas.</p>

        <h2>Farmer Training and Support</h2>
        <p>Technology alone is not enough – farmers need knowledge and support to implement new practices successfully. Our training programs include:</p>

        <h3>Farmer Field Schools</h3>
        <p>These participatory learning programs allow farmers to experiment with new techniques in a supportive environment. Participants learn by doing, with support from agricultural extension workers.</p>

        <h3>Demonstration Plots</h3>
        <p>We maintain demonstration plots that showcase best practices and allow farmers to see results before adopting new techniques. These plots serve as learning laboratories for entire communities.</p>

        <h3>Peer-to-Peer Learning</h3>
        <p>We facilitate farmer-to-farmer learning through study tours, farmer exchanges, and peer mentoring programs. This approach leverages local knowledge and builds community ownership.</p>

        <h2>Market Linkages</h2>
        <p>Increased production is meaningless without market access. Our market development initiatives include:</p>

        <ul>
          <li>Formation of farmer cooperatives for collective bargaining</li>
          <li>Development of value-added products</li>
          <li>Connection to urban markets and institutions</li>
          <li>Training in post-harvest handling and storage</li>
          <li>Support for agribusiness development</li>
        </ul>

        <h2>Nutrition Education</h2>
        <p>Growing food is only part of the solution – families also need to understand how to prepare nutritious meals. Our nutrition education programs teach:</p>

        <ul>
          <li>Balanced diet planning using locally available foods</li>
          <li>Food preservation and storage techniques</li>
          <li>Cooking methods that retain nutrients</li>
          <li>Kitchen gardening for dietary diversity</li>
          <li>Infant and young child feeding practices</li>
        </ul>

        <h2>Women's Empowerment</h2>
        <p>Women play crucial roles in food production and household nutrition, yet often lack access to resources and decision-making power. Our program specifically addresses gender gaps through:</p>

        <ul>
          <li>Women's farming groups and cooperatives</li>
          <li>Access to credit and agricultural inputs</li>
          <li>Training in agricultural technologies</li>
          <li>Leadership development for women farmers</li>
          <li>Advocacy for women's land rights</li>
        </ul>

        <h2>Success Stories</h2>
        <p>Halima, a 35-year-old mother of five, was struggling to feed her family on her small plot of land. After joining our sustainable agriculture program, she learned about drip irrigation and drought-resistant crops. She also received training in greenhouse farming and started growing tomatoes and onions year-round.</p>

        <p>Within one year, Halima's income from farming increased by 400%. She now supplies vegetables to local markets and has become a trainer for other women in her community. Her children's nutritional status has improved dramatically, and she has been able to enroll them in school.</p>

        <p>"Before this program, I was just surviving," Halima explains. "Now I'm thriving. I can provide for my family and help other women learn these techniques. My farm is my pride."</p>

        <h2>Environmental Benefits</h2>
        <p>Our sustainable agriculture practices provide significant environmental benefits:</p>

        <ul>
          <li>Reduced soil erosion and improved soil health</li>
          <li>Increased carbon sequestration in soils</li>
          <li>Improved water retention and reduced runoff</li>
          <li>Enhanced biodiversity in farming systems</li>
          <li>Reduced use of chemical inputs</li>
        </ul>

        <h2>Measuring Impact</h2>
        <p>Our Sustainable Agriculture program has achieved remarkable results:</p>
        <ul>
          <li>800+ farmers trained in sustainable practices</li>
          <li>65% increase in crop yields using improved techniques</li>
          <li>45% reduction in water usage through efficient irrigation</li>
          <li>70% of participating households now food secure</li>
          <li>200+ kitchen gardens established for nutrition</li>
          <li>50% increase in women's participation in agricultural decision-making</li>
        </ul>

        <h2>Scaling Up</h2>
        <p>The success of our sustainable agriculture program has attracted attention from government agencies and international organizations. We're now working to scale up our approach through:</p>

        <ul>
          <li>Integration with national agricultural extension systems</li>
          <li>Training of government extension workers</li>
          <li>Development of policy recommendations</li>
          <li>Replication in other regions</li>
          <li>Research partnerships with universities</li>
        </ul>

        <h2>Future Innovations</h2>
        <p>We continue to innovate and adapt our approach based on emerging challenges and opportunities:</p>

        <ul>
          <li>Use of satellite technology for crop monitoring</li>
          <li>Development of drought-resistant crop varieties</li>
          <li>Integration of livestock and crop systems</li>
          <li>Blockchain technology for supply chain transparency</li>
          <li>Artificial intelligence for pest and disease management</li>
        </ul>

        <h2>A Vision for Food Security</h2>
        <p>Our vision is a future where every family has access to nutritious food produced through sustainable practices that protect the environment for future generations. Through our Sustainable Agriculture program, we're not just growing food – we're cultivating hope, resilience, and dignity.</p>

        <p>The challenges of feeding growing populations in arid regions are significant, but they are not insurmountable. With innovative techniques, dedicated farmers, and supportive communities, we can achieve food security while protecting our environment.</p>

        <p>Every seed planted, every drop of water conserved, and every farmer trained brings us closer to a world where hunger is a thing of the past. Together, we're growing a better future.</p>
      </div>
    ),
    author: "Dr. Hassan Abdi",
    date: "June 20, 2025",
    readTime: "8 min read",
    category: "Climate Resilience",
    image: "/po5.jpg",
    tags: ["Agriculture", "Food Security", "Sustainability", "Climate Adaptation", "Innovation"],
    featured: false,
  },
]

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-xl shadow-lg">
                <img
                  src="/logo_black_bg.jpg"
                  alt="Beyond Borders Logo"
                  className="h-8 w-8 rounded-lg object-cover"
                />
              </div>
              <span className="text-xl font-bold">Beyond Borders</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-sky-400 transition-colors">
                Who We Are
              </Link>
              <Link href="/projects" className="hover:text-sky-400 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-sky-400">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-sky-400 transition-colors">
                Join Us
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <Button className="hidden md:block bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                Donate Now
              </Button>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("${post.image}"), url("/placeholder.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-2 sm:mb-3">
            <Button
              asChild
              variant="ghost"
              className="text-white/80 hover:text-sky-400 p-0 mr-4 glass-effect rounded-full px-2 py-1 sm:px-3 sm:py-1"
            >
              <Link href="/blog">
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="text-xs sm:text-sm">Back to Blog</span>
              </Link>
            </Button>
          </div>

          <ScrollAnimation direction="bottom" className="text-center">
            <Badge className="mb-1 sm:mb-2 bg-sky-400/20 text-sky-400 border-sky-400/30 backdrop-blur-sm text-xs">
              {post.category}
            </Badge>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-white leading-tight drop-shadow-2xl px-4 sm:px-0">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90 mb-2 sm:mb-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <ScrollAnimation direction="left">
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  {post.content}
                </div>
                
                {/* Tags */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-sky-400/10 text-sky-600 border-sky-400/20 text-xs sm:text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Share this article</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Button size="sm" variant="outline" className="hover:bg-sky-400 hover:text-white text-xs sm:text-sm" asChild>
                      <a href="https://www.instagram.com/beyondborders_synergy/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Instagram
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-sky-400 hover:text-white text-xs sm:text-sm" asChild>
                      <a href="mailto:info@beyondborders.org">
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6 lg:space-y-8">
                <ScrollAnimation direction="right">
                  {/* Author Info */}
                  <div>
                    <Card className="shadow-lg sm:shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-6 lg:mb-8">
                      <CardContent className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">About the Author</h3>
                        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-5 lg:mb-6">
                          <div className="bg-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground text-sm sm:text-base">{post.author}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">Contributor</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Expert in {post.category.toLowerCase()} with years of experience working with nomadic communities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div>
                      <Card className="shadow-lg sm:shadow-2xl hover:shadow-sky-500/25 dark:hover:shadow-sky-400/25 hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-6 lg:mb-8">
                        <CardContent className="p-4 sm:p-5 lg:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-5 lg:mb-6">Related Articles</h3>
                          <div className="space-y-3 sm:space-y-4">
                            {relatedPosts.map((relatedPost) => (
                              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block group">
                                <div className="flex items-start space-x-3 p-2 sm:p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                      src={relatedPost.image}
                                      alt={relatedPost.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-foreground group-hover:text-sky-400 transition-colors line-clamp-2 text-sm sm:text-base leading-tight">
                                      {relatedPost.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Newsletter Signup */}
                  <div>
                    <Card className="bg-primary text-primary-foreground shadow-lg sm:shadow-2xl hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                        <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Stay Updated</h4>
                        <p className="mb-4 sm:mb-5 lg:mb-6 opacity-90 text-xs sm:text-sm leading-relaxed">
                          Get the latest stories of impact delivered to your inbox.
                        </p>
                        <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90 w-full py-2.5 sm:py-3 text-sm sm:text-base">
                          Subscribe to Newsletter
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-1 rounded-xl shadow-lg">
                  <img
                    src="/logo_black_bg.jpg"
                    alt="Beyond Borders Logo"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">Beyond Borders</span>
                  <div className="text-sm text-sky-400">Nomadic-Led Impact</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                A nomadic-led nonprofit bridging gaps in aid and advocacy along the Kenya-Somalia border.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/beyondborders_synergy/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Instagram className="h-5 w-5 text-white group-hover:text-white" />
                </a>
                <a href="mailto:info@beyondborders.org" className="bg-white/10 hover:bg-sky-400 p-2 rounded-lg transition-colors duration-300 group">
                  <Mail className="h-5 w-5 text-white group-hover:text-white" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/" className="block hover:text-sky-400 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block hover:text-sky-400 transition-colors">
                  Who We Are
                </Link>
                <Link href="/projects" className="block hover:text-sky-400 transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="block hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-sky-400">Our Focus</h3>
              <div className="space-y-3">
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Economic Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Social Justice
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Climate Resilience
                </Link>
                <Link
                  href="/projects"
                  className="block text-white/80 hover:text-sky-400 transition-colors hover:translate-x-1 duration-200"
                >
                  Sexual & Reproductive Health Rights
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 sm:mb-0">
                &copy; 2024 Beyond Borders. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-white/60">
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/projects" className="hover:text-sky-400 transition-colors">
                  Impact Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}