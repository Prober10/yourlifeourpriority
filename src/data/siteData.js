import {
  Accessibility,
  ArrowRight,
  Baby,
  Banknote,
  BookOpen,
  Camera,
  Check,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  HeartHandshake,
  Mail,
  Phone,
  PiggyBank,
  Share2,
  Shield,
  Star,
  Target,
  TrendingUp,
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
  home: '/images/home-roland-portrait.jpeg',
  homeFamily: '/images/home-hero.png',
  about: '/images/about-hero.png',
  plans: '/images/plans-overview-hero.png',
  critical: '/images/plans-hero.png',
  contact: '/images/contact-hero.png',
  privacy: '/images/privacy-hero.png',
};

export const plans = [
  {
    slug: 'critical-protect',
    title: 'Critical Illness Plan',
    copy: 'Immediate financial support during major medical crises, so recovery can come before bills.',
    short: 'Cash support when recovery matters most.',
    Icon: HeartPulse,
    tone: 'blue',
    image: heroImages.critical,
    hero: {
      title: 'Protect Your Focus.',
      gold: "We'll Protect Your Finances.",
      text: 'Delivers immediate financial support during major medical crises, allowing clients to prioritize physical recovery over bills.',
    },
    tiers: [
      ['Cancer Only', 'Specialized care focused on cancer protection.'],
      ['3 Core Illnesses', 'Cancer, heart attack, and stroke.'],
      ['6 Major Conditions', 'Adds cardiovascular surgeries.'],
      ['Full Coverage', 'Coverage spanning 33 distinct conditions.'],
    ],
    features: [
      ['Immediate Peace', 'Day 1 active coverage with zero waiting periods.', Shield],
      ['Family Discounts', '20% off for spouses and 30% for each child.', Users],
      ['Flexible Safeguards', 'Built-in 90-day grace and reinstatement support.', ClipboardList],
    ],
    accordions: [
      ['Age & Guidelines', ['Adults: entry ages 16 to 70, with active protection up to 75.', 'Children: entry from 3 months up to 17, extendable to 23 or 26 if dependent or student.']],
    ],
  },
  {
    slug: 'advantage-plan',
    title: 'Retirement Plan',
    copy: 'Reliable life insurance protection paired with strategic capital growth opportunities.',
    short: 'Protection today with legacy-building potential.',
    Icon: PiggyBank,
    tone: 'green',
    image: heroImages.homeFamily,
    hero: {
      title: 'Protect Your Family Today.',
      gold: 'Build Your Legacy for Tomorrow.',
      text: 'Perfectly unifies reliable life insurance protection with strategic capital growth opportunities that adapt to evolving milestones.',
    },
    tiers: [
      ['Balanced Orientation', 'Dual approach to life cover and investment.'],
      ['Flexible Premiums', 'Tailored around targets or regular budgets.'],
      ['On-Demand Liquidity', 'Modify benefits or make partial withdrawals.'],
      ['Comprehensive Pension', 'Lifetime guaranteed income.'],
    ],
    features: [
      ['Policy Flexibility', 'Freedom to adjust premium commitments.', ClipboardList],
      ['Inflation Guard', 'Pre-set indexation to automatically preserve value.', PiggyBank],
      ['Life Event Blessings', 'Milestone cash gifts up to $500 USD.', Star],
    ],
    accordions: [
      ['Plan Structure Rules', ['Fluid allocations dynamically adjusted to household requirements.', 'Variable benefits fully adjustable across active policy duration.', 'Entry age starts from 1 month up to a maximum of 65 years.']],
    ],
  },
  {
    slug: 'circles-of-protection',
    title: 'Personal Accident',
    copy: 'A standalone cash cushion for designated accident injuries when it is needed most.',
    short: 'Accident protection with direct cash support.',
    Icon: Accessibility,
    tone: 'purple',
    image: heroImages.about,
    hero: {
      title: "Saving Your Life Shouldn't Cost",
      gold: 'Your Life Savings.',
      text: "Provides a crucial standalone cash cushion directly at your discretion for designated accident injuries when it's needed most.",
    },
    tiers: [
      ['Accidental Death', 'Immediate structural security.'],
      ['PTD', 'Safety net for long-term work inability.'],
      ['Permanent Partial', 'Payouts scaled to specific physical impairments.'],
      ['Full Protection', 'Covers the full spectrum of accidents.'],
    ],
    features: [
      ['Cash Cushions', 'Lump-sum payments for concussions or broken bones.', Banknote],
      ['Customization', 'Choose elements to add or subtract fluidly.', ClipboardList],
      ['Plan Harmony', 'Functions cleanly alongside core health insurance.', HeartHandshake],
    ],
    accordions: [
      ['Plan Structure Metrics', ['Regular premium schedule configured around long-scale metrics.', 'Includes Circle 1 structures for Accidental Death, PTD, and Partial Disability.']],
    ],
  },
  {
    slug: 'term-protect',
    title: 'Life Insurance',
    copy: 'Straightforward protection for a specified period, built to protect loved ones.',
    short: 'Simple protection for pure peace of mind.',
    Icon: Users,
    tone: 'orange',
    image: heroImages.privacy,
    hero: {
      title: 'Simple Protection for Your Loved Ones.',
      gold: 'Pure Peace of Mind.',
      text: 'Straightforward solution offering powerful protection for a specified period to ensure your family is looked after if you are no longer here.',
    },
    tiers: [
      ['Fixed Term Flexibility', 'Predictable policies written for 1, 5, 10, 15, 20, or 25 years.'],
      ['Up-to-Age Protection', 'Anchor coverage up to age 55, 60, 65, 70, or 75.'],
      ['Level Death Benefit', 'Unchanging predictable payout metric.'],
      ['Dynamic Amortization', 'Sum insured can decrease sequentially.'],
    ],
    features: [],
    accordions: [
      ['Age & Policy Rules', ['Entry ages 20 to 65, with maximum insured age of 75.', 'USD denominated, nonparticipating zero-dividend plans.', 'Pure risk: no maturity benefits or loans.', 'Includes 100% Terminal Illness advance, optional CI acceleration, and 1/5-year conversions.']],
    ],
  },
  {
    slug: 'meteducation',
    title: 'Education Plan',
    copy: 'Financial accumulation with a specialized rider that keeps school tuition secure.',
    short: 'Secure academic milestones and tuition funding.',
    Icon: GraduationCap,
    tone: 'teal',
    image: heroImages.contact,
    hero: {
      title: 'Secure Their Academic Future.',
      gold: 'Fuel Their Highest Potential.',
      text: 'Combines reliable financial accumulation with a specialized rider to guarantee that school tuition funding remains entirely secure.',
    },
    tiers: [
      ['Flexible Terms', 'Configured around 5-pay, 10-pay, or regular options.'],
      ['Single Premium', 'Deploy a one-time setup for milestones.'],
      ['Protection Plus', 'Tuition insulation against household changes.'],
      ['Long-Scale Horizon', 'Windows up to 25 years covering university.'],
    ],
    features: [
      ['Inflation Indexation', 'Optional premium increases of 2%, 4%, or 6%.', PiggyBank],
      ['Tuition Guarantee', 'Protection Plus lump-sum accounts for inflation.', BookOpen],
      ['Life Event Blessings', 'One monthly premium gift up to $500 for major events.', Baby],
    ],
    accordions: [
      ['Requirements & Timelines', ['Entry from 1 month up to a maximum of 20 years old for MetEducation.', 'Blessings active from policy year 2 for the first event and year 3 for the second event.']],
    ],
  },
  {
    slug: 'metretirement-horizon-wealth',
    title: 'Horizon Wealth',
    copy: 'A pure, flexible wealth-building framework designed for retirement growth without forced insurance deductions.',
    short: 'Flexible retirement growth with global fund access.',
    Icon: TrendingUp,
    tone: 'pink',
    image: heroImages.plans,
    hero: {
      title: 'Build Your Capital.',
      gold: 'Shape Your Ultimate Horizon.',
      text: 'A pure, flexible wealth-building framework built for retirement growth without forced insurance deductions.',
    },
    tiers: [
      ['Global Growth', 'Access to five international mutual funds.'],
      ['Flexible Funding', 'Choose 1, 2, 5, 10-pay, or regular schedules.'],
      ['Pure Preservation', 'Zero built-in cost-of-insurance drains.'],
      ['Strategic Add-Ons', 'Optional unbundled accident and health safety riders.'],
    ],
    features: [
      ['Inflation Shield', 'Premium indexation options of 2%, 4%, or 6%.', PiggyBank],
      ['Event Blessings', 'Monthly premium rewards up to $500 for major life milestones.', Star],
      ['Market Access', 'Diversified choice across five international mutual funds.', Target],
    ],
    accordions: [
      ['Technical Metrics', ['Entry ages from 21 to 85, with maturity at age 95.', 'Maturity benefit pays 100% of account value as a lump-sum distribution.', 'Death benefit pays the total account value at the time of event.', 'Payment frequencies can be monthly, quarterly, semi-annual, or annual.']],
    ],
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
  [Phone, 'Phone', '+961 03 187 060', 'phone', 'tel:+9613187060'],
  [HeartHandshake, 'WhatsApp', '+961 03 187 060', 'whatsapp', 'https://wa.me/9613187060'],
  [Share2, 'LinkedIn', 'linkedin.com/in/askroland', 'linkedin', 'https://linkedin.com/in/askroland'],
  [Camera, 'Instagram', '@ask.roland', 'instagram', 'https://www.instagram.com/ask.roland'],
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
