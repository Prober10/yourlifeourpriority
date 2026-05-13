import {
  Accessibility,
  ArrowRight,
  Camera,
  Check,
  CircleDollarSign,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Mail,
  PiggyBank,
  Share2,
  Shield,
  Star,
  Target,
  Users,
} from 'lucide-react';

export const navItems = ['Home', 'About Us', 'Our Plans', 'FAQ', 'Contact Us'];

export const pageSlugs = {
  Home: 'home',
  'About Us': 'about',
  'Our Plans': 'plans',
  FAQ: 'faq',
  'Contact Us': 'contact',
  'Privacy Policy': 'privacy',
};

export const heroImages = {
  home: '/images/home-hero.png',
  about: '/images/about-hero.png',
  plans: '/images/plans-hero.png',
  contact: '/images/contact-hero.png',
  privacy: '/images/privacy-hero.png',
};

export const plans = [
  {
    title: 'Critical Illness Plan',
    copy: 'Financial support to help you focus on recovery when facing major illnesses.',
    short: 'Financial support when recovery is what matters most.',
    Icon: HeartHandshake,
    tone: 'blue',
  },
  {
    title: 'Disability Plan',
    copy: "Income protection if you're unable to work due to illness or injury.",
    short: "Income protection if you can't work.",
    Icon: Accessibility,
    tone: 'green',
  },
  {
    title: 'Retirement Plan',
    copy: 'Build your savings and enjoy a comfortable retirement with financial freedom.',
    short: 'Build a secure future for your retirement.',
    Icon: PiggyBank,
    tone: 'purple',
  },
  {
    title: 'Education Plan',
    copy: "Invest in your children's future and help them achieve their dreams.",
    short: 'Invest today for a brighter tomorrow.',
    Icon: GraduationCap,
    tone: 'orange',
  },
  {
    title: 'Daily Alternative Cash',
    copy: 'Provides cash support for your daily expenses when you need it most.',
    short: 'Cash support for your daily needs.',
    Icon: CircleDollarSign,
    tone: 'teal',
  },
  {
    title: 'Life Insurance',
    copy: 'Protect your loved ones and leave a legacy of love and security.',
    short: "Secure your loved ones' future and dreams.",
    Icon: Users,
    tone: 'pink',
  },
];

export const faqs = [
  ['What is a critical illness plan?', 'A critical illness plan provides a lump sum payment if you are diagnosed with a covered critical illness. It helps you focus on your recovery without worrying about medical expenses and loss of income.'],
  ['What does a disability plan cover?', "It helps replace income if illness or injury keeps you from working, so essential expenses can continue while you recover."],
  ['How does a retirement plan work?', 'A retirement plan helps you save consistently over time and prepare for a stable income after your working years.'],
  ['Why is an education plan important?', "It protects your children's education goals by helping you prepare for future school and university costs."],
  ['What is daily alternative cash?', 'It is short-term cash support intended to help with everyday expenses during eligible periods of need.'],
  ['Why do I need life insurance?', 'Life insurance helps protect the people who rely on you financially and can leave a secure legacy for your family.'],
  ['Can I have more than one plan?', 'Yes. Many families combine plans to cover health, income, education, retirement, and legacy needs.'],
  ['How do I file a claim?', 'Contact our team with your policy details and supporting documents. We will guide you through the claim steps.'],
  ['Can I update my plan later?', 'Yes. Plans can be reviewed as your family, income, or priorities change.'],
  ['How can I get started?', 'Request a quote or contact us, and we will help you choose coverage that fits your needs.'],
];

export const features = [
  ['Trusted Protection', 'Reliable coverage you can count on.', Shield],
  ['Financial Security', "Plans designed for your life's milestones.", ClipboardList],
  ['Peace of Mind', "Focus on what matters. We've got you covered.", HeartHandshake],
  ['Personalized Plans', 'Solutions tailored to your unique needs.', Users],
];

export const values = [
  ['Integrity', "We do what's right, always. Honesty and transparency guide every decision we make.", Check],
  ['Commitment', 'We are committed to protecting what matters most to you.', Users],
  ['Care', 'We care about our clients and treat every family like our own.', HeartHandshake],
  ['Excellence', 'We strive for excellence in service, solutions, and long-term partnerships.', Star],
];

export const contactMethods = [
  [Mail, 'Email', 'yourlife@ourpriority.com', 'email'],
  [HeartHandshake, 'WhatsApp', '+123 456 7890', 'whatsapp'],
  [Share2, 'Facebook', 'facebook.com/yourlifeourpriority', 'facebook'],
  [Camera, 'Instagram', 'instagram.com/yourlifeourpriority', 'instagram'],
];

export const privacyItems = [
  ['Information We Collect', 'We collect personal information that you provide to us, such as your name, email address, phone number, and other details necessary to provide our services.', ClipboardList],
  ['How We Use Your Information', 'We use your information to provide and improve our services, communicate with you, process transactions, and comply with legal obligations.', Users],
  ['How We Protect Your Information', 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.', Shield],
  ['Information Sharing', 'We do not sell your personal information. We may share it with trusted service providers who assist us in operating our business and serving you.', ArrowRight],
  ['Your Rights', 'You have the right to access, update, or request deletion of your personal information. Contact us to exercise your rights.', Users],
  ['Changes to This Policy', 'We may update this policy from time to time. We will notify you of any significant changes through our website or other communication channels.', ClipboardList],
  ['Contact Us', 'If you have any questions about this Privacy Policy, please contact us using the information on our Contact Us page.', Mail],
];

export { Mail, Target, Shield };
