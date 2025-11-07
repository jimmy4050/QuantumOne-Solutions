import { Server, Cloud, Code, Stethoscope, FlaskConical, Network, Cable, Building, School, Factory, Store, User, Users, HeartHandshake, Linkedin, Twitter, Facebook, Award, PackageCheck } from 'lucide-react';
import { Service, Industry, Project, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact Us', path: '/contact' },
];

export const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
];

export const CONTACT_DETAILS = {
  address: 'Surat, Gujarat, India',
  phones: [
    { display: '+91 95589 00157', tel: 'tel:+919558900157' },
    { display: '+91 88663 17299', tel: 'tel:+918866317299' },
    { display: '+91 63550 48577', tel: 'tel:+916355048577' },
  ],
  email: { display: 'quantumonesolutions@outlook.com', href: 'mailto:quantumonesolutions@outlook.com' }
};

export const SERVICE_CATEGORIES = ['All', 'Infrastructure', 'Software', 'Cloud'];

export const SERVICES_DATA: Service[] = [
  {
    icon: Server,
    title: 'Server Hardware Solutions',
    description: 'Enterprise servers, storage, and virtualization solutions.',
    details: 'We provide end-to-end server hardware solutions, including supply, professional installation, and ongoing maintenance of enterprise-grade servers, storage arrays, and virtualization platforms to ensure your IT backbone is robust and reliable.',
    category: 'Infrastructure',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Cloud migration, data backup, and hybrid solutions.',
    details: 'Leverage the power of the cloud with our expert services. We specialize in seamless cloud migration, secure data backup strategies, hybrid cloud implementations, and deployment on leading platforms like Microsoft Azure and AWS.',
    category: 'Cloud',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web applications, mobile apps, and automation.',
    details: 'Our development team builds custom web and mobile applications tailored to your unique business needs. We also create powerful automation tools to streamline your workflows, increase efficiency, and drive growth.',
    category: 'Software',
  },
  {
    icon: Stethoscope,
    title: 'HIMS',
    description: 'Comprehensive Hospital Information Management System.',
    details: 'Our HIMS is a comprehensive hospital management software designed to digitize and manage all aspects of hospital operations, including OPD, IPD, billing, pharmacy, inventory, and laboratory modules for a paperless environment.',
    category: 'Software',
  },
  {
    icon: FlaskConical,
    title: 'LIMS',
    description: 'Laboratory Information Management System.',
    details: 'Streamline your laboratory with our LIMS solution. It offers complete workflow automation, featuring a robust test master, dynamic reference ranges, automated reporting, and seamless data export capabilities for enhanced accuracy.',
    category: 'Software',
  },
  {
    icon: Network,
    title: 'Networking & Security',
    description: 'Network design, firewall configuration, and data protection.',
    details: 'Secure and optimize your network with our comprehensive services. We offer expert network design, firewall and VLAN configuration, robust Wi-Fi deployment, and advanced data protection strategies to safeguard your digital assets.',
    category: 'Infrastructure',
  },
   {
    icon: Cable,
    title: 'Rack Dressing & Cabling',
    description: 'Professional cable management and rack layout services.',
    details: 'We provide professional rack dressing and structured cabling services to organize your data center. Our services include meticulous cable management, logical rack layout design, clear labeling, and thorough documentation for easy maintenance.',
    category: 'Infrastructure',
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    icon: Building,
    name: 'Healthcare',
    description: 'Providing robust HIMS, LIMS, and IT infrastructure for hospitals and clinics to ensure seamless patient care and data management.'
  },
  {
    icon: School,
    name: 'Education',
    description: 'Implementing smart classroom solutions, campus Wi-Fi, and secure network infrastructure for educational institutions.'
  },
  {
    icon: Factory,
    name: 'Corporate',
    description: 'Empowering businesses with scalable IT solutions, cloud services, and custom software to enhance productivity and collaboration.'
  },
  {
    icon: Store,
    name: 'Manufacturing',
    description: 'Deploying reliable server and networking solutions for production floors and managing data for industrial operations.'
  },
  {
    icon: User,
    name: 'Retail',
    description: 'Offering point-of-sale networking, inventory management software, and secure data backup for retail businesses.'
  }
];

export const PROJECT_CATEGORIES = ['All', 'Healthcare', 'Corporate', 'Manufacturing'];

export const PROJECTS_DATA: Project[] = [
  {
    image: 'https://picsum.photos/seed/project1/600/400',
    title: 'Multi-Specialty Hospital HIMS Rollout',
    category: 'Healthcare | HIMS',
    description: 'Successfully deployed our comprehensive HIMS across a 200-bed hospital, integrating all departments from OPD to billing. Reduced patient wait times by 30% and improved revenue cycle management.'
  },
  {
    image: 'https://picsum.photos/seed/project2/600/400',
    title: 'Corporate Office IT Infrastructure Overhaul',
    category: 'Corporate | Networking',
    description: 'Designed and implemented a new structured cabling and networking infrastructure for a 500-employee corporate office, including server room setup and firewall configuration, enhancing network speed and security.'
  },
  {
    image: 'https://picsum.photos/seed/project3/600/400',
    title: 'Diagnostic Lab LIMS Automation',
    category: 'Healthcare | LIMS',
    description: 'Automated a high-volume diagnostic lab with our LIMS, enabling faster report generation and reducing manual errors. Integrated with existing lab equipment for seamless data flow.'
  },
  {
    image: 'https://picsum.photos/seed/project4/600/400',
    title: 'Hybrid Cloud Solution for Manufacturing Firm',
    category: 'Manufacturing | Cloud Computing',
    description: 'Implemented a hybrid cloud solution for a manufacturing client, moving critical applications to Azure while maintaining on-premise data servers. Improved data accessibility and disaster recovery capabilities.'
  }
];

export const TEAM_DATA: TeamMember[] = [
    {
        image: 'https://picsum.photos/seed/team_jimmy/400/400',
        name: 'Jimmy',
        title: 'Founder & CEO'
    },
    {
        image: 'https://picsum.photos/seed/team_ravi/400/400',
        name: 'Ravi',
        title: 'Founder & Head of Software Development'
    },
    {
        image: 'https://picsum.photos/seed/team_krunal/400/400',
        name: 'Krunal',
        title: 'Head of Marketing & Sales'
    }
];

export const COMPANY_VALUES = [
    {
        icon: Users,
        title: 'Customer Satisfaction',
        description: 'Our primary goal is to ensure our clients are successful. We build lasting partnerships based on trust and mutual respect.'
    },
    {
        icon: HeartHandshake,
        title: 'Reliability',
        description: 'We deliver robust and dependable solutions that our clients can count on, ensuring business continuity and peace of mind.'
    },
    {
        icon: Code,
        title: 'Innovation',
        description: 'We stay at the forefront of technology to provide innovative solutions that solve real-world business challenges and drive growth.'
    }
];

export const STATS_DATA = [
    {
        icon: Award,
        value: 10,
        label: 'Years of Experience',
        suffix: '+'
    },
    {
        icon: PackageCheck,
        value: 150,
        label: 'Projects Completed',
        suffix: '+'
    },
    {
        icon: HeartHandshake,
        value: 99,
        label: 'Satisfied Clients',
        suffix: '%'
    }
];