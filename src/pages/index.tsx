import { useState, useEffect } from 'react';
import Image from 'next/image';

interface QuizQuestion {
    text: string;
    options: { [key: string]: number };
    category: string;
  }
  
  interface Event {
    name: string;
    description: string;
    skills: string[];
    activities: string[];
    careers: string[];
    category: string;
  }
  
  interface Answers {
    [questionText: string]: string;
  }  
  
  const quizQuestions: { [key: string]: QuizQuestion } = {
    question1: {
      text: 'Are you interested in financial principles, such as analyzing financial data or understanding the stock market?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Financial',
    },
     question16: {
      text: 'Are you interested in being responsible for making sure a company is using money correctly?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Financial',
    },
    question2: {
      text: 'Do you enjoy using computers, such as working with software applications, coding, or developing programs?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Computer',
    },
    question3: {
      text: 'Are you interested in public speaking, presentations, or communicating in front of a group?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Communication',
    },
    question4: {
      text: 'Are you drawn to the concept of designing products or services?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Design',
    },
    question5: {
      text: 'Would you describe yourself as someone who likes to solve problems creatively?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Creative',
    },
    question6: {
      text: 'Do you enjoy the prospect of managing teams, projects, or events?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Management',
    },
    question7: {
      text: 'Are you interested in learning about the intricacies of business and entrepreneurship?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Business',
    },
    question8: {
      text: 'Would you like to learn more about health care, specifically its administration and terminology?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Healthcare',
    },
    question9: {
      text: 'Do you enjoy working with or learning about legal systems?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Legal',
    },
    question10: {
      text: 'Are you interested in the technical aspects of computers and networks?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Technical',
    },
    question11: {
      text: 'Are you someone who enjoys coming up with new ideas and sharing them with others?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Idea',
    },
    question12: {
      text: 'Do you see yourself building a business from the ground up one day?',
      options: { 'Yes': 1, 'No': 0 },
      category: 'Future',
    },
    question13: {
        text: 'Are you interested in how the flow of goods or money works in large companies?',
        options: { 'Yes': 1, 'No': 0 },
        category: 'Supply Chain',
      },
    question14: {
        text: 'Are you interested in how companies can take care of their employees?',
        options: { 'Yes': 1, 'No': 0 },
        category: 'Human Resources',
      },
      question15: {
        text: 'Are you interested in presenting projects or ideas in a visually appealing manner?',
        options: { 'Yes': 1, 'No': 0 },
        category: 'Visual Design',
      },
  };
  
  
  
  
  
  
  
  const events: Event[] = [
    {
        name: 'Accounting',
        description: 'Accounting events involve working with financial data to prepare documents and solve complex problems. This event allows you to demonstrate skills in debits, credits, financial statements, and ethical principles in accounting. You will need a sharp eye for detail and a methodical approach to problem-solving.',
        skills: ['Financial data analysis', 'Preparing financial statements', 'Problem-solving', 'Ethical principles', 'Attention to detail'],
        activities: ['Analyzing financial data', 'Preparing accounting documents', 'Solving complex accounting problems', 'Applying accounting principles', 'Working with debits and credits'],
        careers: ['Accountant', 'Auditor', 'Financial Analyst', 'Tax Consultant', 'Budget Analyst'],
        category: 'Financial',
      },
      {
        name: 'Accounting II',
        description: 'Accounting II provides members with the opportunity to gain knowledge around more advanced competencies in accounting. This competitive event consists of an objective test. This event aims to inspire members to learn about accounting.',
        skills: ['Financial data analysis', 'Preparing financial statements', 'Problem-solving', 'Ethical principles', 'Attention to detail', 'Advanced Accounting'],
        activities: ['Analyzing financial data', 'Preparing accounting documents', 'Solving complex accounting problems', 'Applying advanced accounting principles', 'Working with debits and credits'],
        careers: ['Accountant', 'Auditor', 'Financial Analyst', 'Tax Consultant', 'Budget Analyst'],
        category: 'Financial',
      },
    
      
      {
        name: 'Business Plan',
        description: 'The Business Plan event challenges you to develop a comprehensive business plan for a new business. This event will help you develop skills in market research, financial planning, marketing strategy, and presentation. It requires a strong ability to analyze data, think creatively, and communicate effectively.',
        skills: ['Market research', 'Financial planning', 'Marketing strategy', 'Data analysis', 'Communication'],
        activities: ['Developing a business concept', 'Conducting market research', 'Creating financial projections', 'Writing a business plan', 'Presenting your plan'],
        careers: ['Entrepreneur', 'Business Consultant', 'Market Research Analyst', 'Financial Planner', 'Business Development Manager'],
        category: 'Business',
      },
       {
        name: 'Advertising',
        description: 'Advertising provides members with the opportunity to gain knowledge around advertising. This competitive event consists of an objective test. This event aims to inspire members to learn about advertising.',
        skills: ['Advertising concepts', 'Market understanding', 'Campaign creation', 'Consumer behavior', 'Creative thinking'],
        activities: ['Developing ad campaigns', 'Analyzing target audiences', 'Creating advertising content', 'Understanding marketing strategies', 'Learning about market trends'],
        careers: ['Advertising Manager', 'Marketing Specialist', 'Brand Manager', 'Advertising Copywriter', 'Media Planner'],
        category: 'Marketing',
      },
      
      
      {
        name: 'Computer Game & Simulation Programming',
        description: 'In this event, you design and implement a computer game or simulation. Participants will gain experience in coding, game design, and problem-solving. This event challenges you to leverage creativity and technical expertise to engage users.',
        skills: ['Coding', 'Game design', 'Problem-solving', 'Creativity', 'Technical expertise'],
        activities: ['Designing game mechanics', 'Coding game logic', 'Creating simulations', 'Testing and debugging', 'Presenting your game'],
        careers: ['Game Developer', 'Software Engineer', 'Simulation Developer', 'UI/UX Designer', 'Web Developer'],
        category: 'Computer',
      },
     {
        name: 'Agribusiness',
        description: 'Agribusiness provides members with the opportunity to gain knowledge around business in agriculture. This competitive event consists of an objective test. This event aims to inspire members to learn about agribusiness.',
        skills: ['Agricultural knowledge', 'Business management', 'Marketing', 'Supply chain', 'Financial planning'],
        activities: ['Learning about agricultural practices', 'Developing business strategies', 'Analyzing market trends', 'Managing agricultural resources', 'Creating marketing plans'],
        careers: ['Agricultural Manager', 'Farm Owner', 'Agribusiness Consultant', 'Supply Chain Analyst', 'Marketing Specialist'],
        category: 'Agribusiness',
      },
      
      
      {
        name: 'Public Speaking',
        description: 'Public Speaking challenges you to develop and deliver a persuasive speech on a given topic. This event enhances your communication skills, ability to structure a speech, and public speaking techniques. It requires practice, confidence, and the ability to engage an audience.',
        skills: ['Communication', 'Speech structuring', 'Public speaking', 'Persuasion', 'Audience engagement'],
        activities: ['Researching topics', 'Writing speeches', 'Practicing delivery', 'Engaging the audience', 'Using persuasive techniques'],
        careers: ['Motivational Speaker', 'Communication Specialist', 'Public Relations Officer', 'Politician', 'Teacher'],
        category: 'Communication',
      },
       {
        name: 'American Enterprise Project',
        description: 'American Enterprise Project provides chapter members with the opportunity to showcase their understanding of the economic system under which they live and to develop a concept in which they share it with their community. This competitive event consists of a pre-judged report and presentation component.',
        skills: ['Economic understanding', 'Community outreach', 'Project management', 'Presentation', 'Report writing'],
        activities: ['Analyzing economic systems', 'Developing community projects', 'Creating reports', 'Presenting findings', 'Engaging with the community'],
        careers: ['Community Organizer', 'Economic Analyst', 'Project Manager', 'Public Policy Analyst', 'Nonprofit Director'],
        category: 'Community',
      },
          {
        name: 'Introduction to FBLA',
        description: 'Introduction to FBLA provides members with the opportunity to demonstrate knowledge about the operations, programs, and goals of FBLA. This competitive event consists of an objective test. This event aims to inspire members to learn about FBLA.',
        skills: ['FBLA knowledge', 'Leadership', 'Teamwork', 'Communication', 'Problem-solving'],
        activities: ['Learning about FBLA history', 'Understanding FBLA structure', 'Participating in FBLA programs', 'Exploring FBLA goals', 'Engaging with FBLA chapters'],
        careers: ['Nonprofit Manager', 'Youth Development Specialist', 'Community Organizer', 'Program Coordinator', 'Leadership Consultant'],
        category: 'Introduction to FBLA',
      },
        {
        name: 'Introduction to Business Presentation',
        description: 'Introduction to Business Presentation provides members with the opportunity to showcase their skills in using a presentation software program as an aid in delivering a business presentation. This competitive event consists of a presentation component.',
        skills: ['Presentation', 'Communication', 'Public speaking', 'Visual aids', 'Software proficiency'],
        activities: ['Creating presentations', 'Delivering speeches', 'Using presentation software', 'Designing visual aids', 'Engaging an audience'],
        careers: ['Presenter', 'Trainer', 'Educator', 'Public Relations Specialist', 'Sales Representative'],
        category: 'Introduction to Business',
      },
       {
        name: 'Introduction to Business Concepts',
        description: 'Introduction to Business Concepts provides members with the opportunity to demonstrate knowledge around introductory competencies in business. This competitive event consists of an objective test. It aims to inspire members to learn about the different functions of businesses.',
        skills: ['Basic business knowledge', 'Financial literacy', 'Marketing basics', 'Management principles', 'Problem-solving'],
        activities: ['Learning about business functions', 'Understanding financial concepts', 'Studying marketing strategies', 'Exploring management principles', 'Solving business problems'],
        careers: ['Business Intern', 'Administrative Assistant', 'Sales Associate', 'Marketing Assistant', 'Office Assistant'],
        category: 'Introduction to Business',
      },
        {
        name: 'Introduction to Business Communication',
        description: 'Introduction to Business Communication provides members with the opportunity to demonstrate knowledge around introductory competencies in communication. This competitive event consists of an objective test. It aims to inspire members to learn about the process of sharing information in and outside of a company.',
        skills: ['Basic communication', 'Business etiquette', 'Written communication', 'Verbal communication', 'Interpersonal skills'],
        activities: ['Writing emails', 'Conducting meetings', 'Giving presentations', 'Practicing active listening', 'Learning basic communication practices'],
        careers: ['Administrative Assistant', 'Office Manager', 'Communications Intern', 'Customer Service Representative', 'Sales Associate'],
        category: 'Introduction to Business',
      },
      {
        name: 'Health Care Administration',
        description: 'Health Care Administration provides members with the opportunity to demonstrate knowledge about health care concepts and terminology. This competitive event consists of an objective test. This event aims to inspire members to learn about healthcare.',
        skills: ['Medical terminology', 'Healthcare systems', 'Office procedures', 'Patient care', 'Ethical considerations'],
        activities: ['Learning medical terms', 'Understanding healthcare procedures', 'Analyzing healthcare systems', 'Studying patient care', 'Discussing ethical issues'],
        careers: ['Medical Administrator', 'Healthcare Consultant', 'Medical Biller', 'Office Manager', 'Health Information Technician'],
        category: 'Healthcare Administration',
      },
      {
        name: 'Securities and Investments',
        description: 'Securities and Investments provides members with the opportunity to demonstrate knowledge about the various securities, such as stocks, bonds, and mutual funds. This competitive event consists of an objective test. This event aims to inspire members to learn about securities and investments.',
        skills: ['Investment analysis', 'Financial planning', 'Market knowledge', 'Risk assessment', 'Portfolio management'],
        activities: ['Analyzing stocks and bonds', 'Creating investment strategies', 'Understanding market trends', 'Assessing investment risks', 'Managing portfolios'],
        careers: ['Financial Advisor', 'Investment Analyst', 'Securities Trader', 'Portfolio Manager', 'Stockbroker'],
        category: 'Investment',
      },
       {
        name: 'Parliamentary Procedure',
        description: 'Parliamentary Procedure provides members with the opportunity to demonstrate knowledge about how meetings should run and how to use Robert’s Rules of Order. This competitive event consists of a team role-play and objective test.',
        skills: ['Meeting protocols', 'Decision-making', 'Teamwork', 'Communication', 'Leadership'],
        activities: ['Conducting meetings', 'Following parliamentary procedure', 'Making group decisions', 'Communicating effectively', 'Leading discussions'],
        careers: ['Parliamentarian', 'Meeting Facilitator', 'Board Member', 'Community Leader', 'Political Analyst'],
        category: 'Parli Pro',
      },
      {
        name: 'Marketing',
        description: 'Marketing provides members with the opportunity to demonstrate knowledge about marketing principles and techniques. This competitive event consists of an objective test. This event aims to inspire members to learn about marketing.',
        skills: ['Market analysis', 'Consumer behavior', 'Branding', 'Advertising', 'Sales strategies'],
        activities: ['Analyzing market trends', 'Understanding consumer needs', 'Developing brand identities', 'Creating advertising campaigns', 'Planning sales strategies'],
        careers: ['Marketing Manager', 'Brand Manager', 'Advertising Specialist', 'Sales Manager', 'Market Research Analyst'],
        category: 'Marketing',
      },
       {
        name: 'Management Information Systems',
        description: 'Management Information Systems provides members with the opportunity to demonstrate knowledge about the information systems used in businesses. This competitive event consists of an objective test. This event aims to inspire members to learn about MIS.',
        skills: ['Information systems', 'Data management', 'Technology', 'Business processes', 'Problem-solving'],
        activities: ['Analyzing information systems', 'Managing data', 'Understanding technology', 'Improving business processes', 'Solving technical problems'],
        careers: ['Systems Analyst', 'IT Manager', 'Database Administrator', 'Business Analyst', 'Information Security Manager'],
        category: 'Management Information Systems',
      },
       {
        name: 'Local Chapter Annual Business Report',
        description: 'Local Chapter Annual Business Report provides chapter members with the opportunity to review, document, and submit their activities from the school year. This competitive event consists of a pre-judged report component.',
        skills: ['Report writing', 'Documentation', 'Organizational skills', 'Project review', 'Teamwork'],
        activities: ['Compiling chapter activities', 'Writing annual reports', 'Organizing documents', 'Reviewing chapter projects', 'Collaborating with team members'],
        careers: ['Nonprofit Administrator', 'Project Manager', 'Office Manager', 'Communications Coordinator', 'Business Consultant'],
        category: 'Local Chapter Report',
      },
      {
        name: 'Organizational Leadership',
        description: 'Organizational Leadership provides members with the opportunity to demonstrate their leadership, project management, and communication skills. This competitive event consists of an objective test and a role play scenario.',
        skills: ['Leadership', 'Project management', 'Communication', 'Decision-making', 'Teamwork'],
        activities: ['Leading teams', 'Managing projects', 'Communicating effectively', 'Making decisions', 'Working collaboratively'],
        careers: ['Team Leader', 'Project Manager', 'Operations Manager', 'Business Manager', 'Nonprofit Director'],
        category: 'Leadership',
      },
       {
        name: 'Personal Finance',
        description: 'Personal Finance provides members with the opportunity to demonstrate knowledge about personal financial literacy, budgeting, savings, and investing. This competitive event consists of an objective test. This event aims to inspire members to learn about personal finance.',
        skills: ['Financial literacy', 'Budgeting', 'Savings', 'Investing', 'Financial planning'],
        activities: ['Creating budgets', 'Managing personal finances', 'Saving money', 'Making investments', 'Planning for the future'],
        careers: ['Financial Advisor', 'Personal Banker', 'Budget Analyst', 'Financial Planner', 'Accountant'],
        category: 'Personal Finance',
      },
       {
        name: 'Political Science',
        description: 'Political Science provides members with the opportunity to demonstrate knowledge about political concepts. This competitive event consists of an objective test. This event aims to inspire members to learn about political science.',
        skills: ['Political knowledge', 'Government systems', 'Critical thinking', 'Policy analysis', 'Civic engagement'],
        activities: ['Analyzing political data', 'Understanding government structures', 'Discussing political issues', 'Evaluating policies', 'Engaging in civic activities'],
        careers: ['Political Analyst', 'Policy Analyst', 'Political Scientist', 'Government Relations Specialist', 'Lobbyist'],
        category: 'Political Science',
      },
      {
        name: 'Sales Presentation',
        description: 'Sales Presentation provides members with the opportunity to demonstrate knowledge about creating and implementing a sales presentation. This competitive event consists of a presentation component.',
        skills: ['Sales techniques', 'Presentation', 'Communication', 'Persuasion', 'Product knowledge'],
        activities: ['Creating sales presentations', 'Delivering pitches', 'Communicating product value', 'Using persuasive techniques', 'Engaging clients'],
        careers: ['Sales Representative', 'Sales Manager', 'Account Executive', 'Marketing Specialist', 'Business Development Manager'],
        category: 'Sales',
      },
         {
        name: 'Social Media Strategies',
        description: 'Social Media Strategies provides members with the opportunity to demonstrate knowledge about developing a social media plan. This competitive event consists of a pre-judged project and a presentation.',
        skills: ['Social media marketing', 'Content creation', 'Branding', 'Communication', 'Analytics'],
        activities: ['Developing social media plans', 'Creating content', 'Building brand identity', 'Communicating online', 'Analyzing social media data'],
        careers: ['Social Media Manager', 'Content Creator', 'Marketing Specialist', 'Digital Marketer', 'Brand Strategist'],
        category: 'Social Media',
      },
     
      
      
      {
        name: 'Graphic Design',
        description: 'This event focuses on creating visual content for a specific purpose. Participants will utilize design software and principles to craft visually appealing graphics. This event enhances creativity, attention to detail, and the ability to work within design constraints.',
        skills: ['Design principles', 'Creativity', 'Visual communication', 'Software proficiency', 'Attention to detail'],
        activities: ['Designing graphics', 'Using design software', 'Choosing color schemes', 'Working with typography', 'Presenting design ideas'],
        careers: ['Graphic Designer', 'Web Designer', 'Art Director', 'Marketing Designer', 'Illustrator'],
        category: 'Design',
      },
      
      {
        name: 'Banking & Financial Systems',
        description: 'Banking & Financial Systems provides members with the opportunity to understand how financial institutions operate and how those operations are important to successful business ownership and management, as well as to personal financial success. This competitive event consists of an objective test and a role play scenario.',
        skills: ['Financial knowledge', 'Banking operations', 'Business management', 'Problem-solving', 'Customer service'],
        activities: ['Analyzing financial institutions', 'Understanding banking practices', 'Developing business strategies', 'Solving financial problems', 'Interacting with clients'],
        careers: ['Bank Teller', 'Financial Advisor', 'Loan Officer', 'Business Manager', 'Financial Analyst'],
        category: 'Financial',
      },
          {
        name: 'E-Business',
        description: 'E-Business is the study of how a business can best operate online. This event will allow you to expand your knowledge on this rapidly growing business sector.',
        skills: ['E-commerce knowledge', 'Web design', 'Social media marketing', 'Market analysis', 'Financial planning'],
        activities: ['Studying e-commerce sites', 'Designing a website', 'Developing marketing strategies', 'Analyzing market trends', 'Learning financial principles'],
        careers: ['E-commerce manager', 'Web designer', 'Digital marketer', 'Financial planner', 'Market researcher'],
        category: 'E-Business',
      },

      
      
      {
        name: 'Business Management',
        description: 'Business Management tests your knowledge on management themes such as leading teams, strategy, and ethical decision-making. You will need to apply critical thinking, problem-solving, and teamwork to succeed in this event.',
        skills: ['Team leadership', 'Strategic thinking', 'Problem-solving', 'Ethical decision-making', 'Critical thinking'],
        activities: ['Leading teams', 'Developing strategies', 'Making ethical decisions', 'Solving management challenges', 'Working collaboratively'],
        careers: ['Business Manager', 'Team Leader', 'Operations Manager', 'Project Manager', 'Business Consultant'],
        category: 'Management',
      },
        {
        name: 'Broadcast Journalism',
        description: 'Broadcast Journalism provides members with the opportunity to emphasize communication, with the creation and presentation of a news broadcast to judges on a variety of stories. This competitive event consists of a presentation component.',
        skills: ['Communication', 'Journalism', 'Presentation', 'Storytelling', 'News broadcasting'],
        activities: ['Creating news stories', 'Presenting news', 'Developing scripts', 'Filming', 'Reporting'],
        careers: ['News Anchor', 'Journalist', 'Reporter', 'Broadcaster', 'Video Editor'],
        category: 'Communication',
      },
    
    
      {
        name: 'Entrepreneurship',
        description: 'In Entrepreneurship, you develop a business concept and gain knowledge on what it takes to start and run a successful business. This event focuses on problem-solving, financial planning, marketing, and innovation. It’s about turning ideas into actionable business strategies.',
        skills: ['Problem-solving', 'Financial planning', 'Marketing', 'Innovation', 'Business strategy'],
        activities: ['Developing business concepts', 'Creating financial plans', 'Defining marketing strategies', 'Presenting ideas', 'Outlining business structure'],
        careers: ['Entrepreneur', 'Business Developer', 'Innovation Consultant', 'Small Business Owner', 'Product Manager'],
        category: 'Business',
      },
        {
        name: 'Business Communication',
        description: 'Business Communication provides members with the opportunity to gain knowledge about communication in the business world. This competitive event consists of an objective test. This event aims to inspire members to learn about communication skills in the business world.',
        skills: ['Communication skills', 'Business writing', 'Presentation skills', 'Interpersonal skills', 'Active listening'],
        activities: ['Writing business emails', 'Giving presentations', 'Conducting meetings', 'Negotiating', 'Communicating effectively'],
        careers: ['Communications Specialist', 'Business Analyst', 'Project Manager', 'Public Relations Manager', 'Marketing Coordinator'],
        category: 'Communication',
      },
      
      
      {
        name: 'Healthcare Administration',
        description: 'Healthcare Administration is an event that covers healthcare terminology and procedures. This includes office procedures, medical coding, and understanding healthcare systems. This event will allow you to gain critical knowledge in this rapidly growing field.',
        skills: ['Medical terminology', 'Office procedures', 'Healthcare systems', 'Medical coding', 'Attention to detail'],
        activities: ['Learning medical terms', 'Understanding healthcare procedures', 'Applying medical codes', 'Managing office tasks', 'Following regulations'],
        careers: ['Medical Administrator', 'Healthcare Consultant', 'Medical Biller', 'Office Manager', 'Health Information Technician'],
        category: 'Healthcare',
      },
      {
        name: 'Business Ethics',
        description: 'Business Ethics recognizes members who demonstrate the ability to present solutions to ethical situations encountered in the business world and the workplace. This competitive event consists of an individual objective test, report and presentation.',
        skills: ['Ethical decision-making', 'Critical thinking', 'Problem-solving', 'Presentation', 'Report writing'],
        activities: ['Analyzing ethical issues', 'Developing solutions', 'Creating reports', 'Presenting ideas', 'Debating ethical situations'],
        careers: ['Compliance Officer', 'Ethics Consultant', 'Business Analyst', 'Human Resources Manager', 'Legal Advisor'],
        category: 'Ethics',
      },
      
      {
        name: 'Business Law',
        description: 'Business Law allows you to dive into the legal systems that affect the business world. This includes contracts, regulations, ethics, and legal implications of business decisions. This event challenges you to apply legal principles in practical business scenarios.',
        skills: ['Contract law', 'Regulatory knowledge', 'Business ethics', 'Legal principles', 'Analytical skills'],
        activities: ['Analyzing contracts', 'Understanding regulations', 'Evaluating business decisions', 'Applying legal principles', 'Identifying ethical issues'],
        careers: ['Lawyer', 'Legal Analyst', 'Compliance Officer', 'Contract Manager', 'Paralegal'],
        category: 'Legal',
      },
      {
        name: 'Business Plan',
        description: 'Business plans are an effective tool for evaluating, organizing, and selling a new business concept. A well-developed business plan can be a key component of a successful business start-up. Business Plan provides members with the opportunity to prepare a business plan. This competitive event consists of a pre-judged report and presentation component.',
        skills: ['Business planning', 'Market research', 'Financial planning', 'Presentation', 'Report writing'],
        activities: ['Developing business concepts', 'Conducting market research', 'Creating financial plans', 'Writing business plans', 'Presenting business plans'],
        careers: ['Entrepreneur', 'Business Consultant', 'Market Research Analyst', 'Financial Analyst', 'Business Development Manager'],
        category: 'Business',
      },
      
      {
        name: 'Network Design',
        description: 'In Network Design, you will gain knowledge on setting up network architecture in the business world. This includes understanding different types of networks, configuring network devices, and managing network security. This event challenges you to apply technical knowledge and problem-solving skills in network scenarios.',
        skills: ['Network architecture', 'Device configuration', 'Network security', 'Problem-solving', 'Technical knowledge'],
        activities: ['Designing network layouts', 'Configuring network devices', 'Planning network security', 'Troubleshooting network issues', 'Understanding different networks'],
        careers: ['Network Engineer', 'Systems Administrator', 'IT Consultant', 'Cybersecurity Analyst', 'Network Architect'],
        category: 'Technical',
      },
      {
        name: 'Client Service',
        description: 'Client Service provides members with an opportunity to develop and demonstrate skills in interacting with internal and external clients to provide an outstanding client service experience. The competitor engages clients in conversations regarding products, handles inquiries, and solves problems. This competitive event consists of a role play scenario.',
        skills: ['Customer service', 'Problem-solving', 'Communication', 'Interpersonal skills', 'Product knowledge'],
        activities: ['Interacting with clients', 'Handling inquiries', 'Solving client problems', 'Providing product information', 'Maintaining client relations'],
        careers: ['Customer Service Representative', 'Account Manager', 'Client Relations Specialist', 'Sales Associate', 'Help Desk Technician'],
        category: 'Customer Service',
      },
      
      {
        name: 'Supply Chain Management',
        description: 'Supply Chain Management allows you to gain skills in how supply chains work in businesses. You will get to learn about the flow of goods and money that allows for business to work correctly.',
        skills: ['Supply chain flow', 'Business workings', 'Flow of goods', 'Flow of money', 'Efficiency'],
        activities: ['Learning about supply chain', 'Studying business', 'Understanding the movement of goods', 'Understanding the movement of money', 'Streamlining efficiency'],
        careers: ['Supply chain manager', 'Business Analyst', 'Distribution center', 'Warehouse manager', 'Business owner'],
        category: 'Supply Chain',
      },

      {
        name: 'Impromptu Speaking',
        description: 'This event focuses on developing extemporaneous speaking skills. You will need to prepare and deliver a speech on the spot. This will allow you to refine your ability to think on your feet and articulate your thoughts clearly and quickly.',
        skills: ['Extemporaneous speaking', 'Quick thinking', 'Articulation', 'Speech preparation', 'Audience engagement'],
        activities: ['Preparing speeches quickly', 'Delivering speeches without preparation', 'Structuring thoughts rapidly', 'Engaging an audience', 'Adapting to unexpected topics'],
        careers: ['Public Speaker', 'Presenter', 'Facilitator', 'Debater', 'Communication Specialist'],
        category: 'Idea',
      },
      {
        name: 'Coding & Programming',
        description: 'Coding & Programming provides members with the opportunity to design and implement a standalone application to accomplish a task. This competitive event consists of a presentation component.',
        skills: ['Coding', 'Programming', 'Problem-solving', 'Logical thinking', 'Application design'],
        activities: ['Writing code', 'Developing applications', 'Troubleshooting code', 'Designing software', 'Presenting projects'],
        careers: ['Software Developer', 'Programmer', 'Web Developer', 'Application Developer', 'Computer Engineer'],
        category: 'Computer',
      },
    
    
      {
        name: 'Future Business Leader',
        description: 'This is the premier FBLA event. To succeed in this event you must demonstrate leadership skills, participation in FBLA, and knowledge of essential business skills. This will allow you to refine your skills for future business.',
        skills: ['Leadership', 'FBLA knowledge', 'Business skills', 'Communication', 'Strategic thinking'],
        activities: ['Showcasing leadership', 'Participating in FBLA', 'Applying business knowledge', 'Communicating effectively', 'Demonstrating strategic thinking'],
        careers: ['Business Leader', 'Executive', 'Manager', 'Director', 'Consultant'],
        category: 'Future',
      },
      {
        name: 'Community Service Project',
        description: 'Community Service Project provides chapter members with the opportunity to showcase their community service projects within their school and/or community. The project must be in the interest of the community and designed for chapter participation. This competitive event consists of a pre-judged report and presentation component.',
        skills: ['Community service', 'Project planning', 'Teamwork', 'Presentation', 'Report writing'],
        activities: ['Organizing community events', 'Leading service projects', 'Creating presentations', 'Writing reports', 'Collaborating with teams'],
        careers: ['Nonprofit Manager', 'Community Organizer', 'Project Coordinator', 'Social Worker', 'Event Planner'],
        category: 'Community Service',
      },
      
      {
        name: 'Human Resources',
        description: 'Human Resources focuses on learning about how to manage, hire, train, and development employees in a workplace. this event will allow you to gain knowledge about the people aspect of a business.',
        skills: ['Employee management', 'Hiring', 'Training', 'Development', 'Workplace ethics'],
        activities: ['Learning about the work force', 'Interviewing', 'Training employees', 'Improving employee skills', 'Implementing workplace policy'],
        careers: ['HR manager', 'HR consultant', 'Hiring manager', 'Training and development', 'Business owner'],
        category: 'Human Resources',
      },
      {
        name: 'Computer Applications',
        description: 'Computer Applications provides members with the opportunity to demonstrate knowledge around competencies in different applications in computing. It aims to inspire members to learn about the effective application of the computer to facilitate handling of business information. This competitive event consists of an objective test and production test.',
        skills: ['Computer proficiency', 'Software knowledge', 'Data management', 'Problem-solving', 'Information handling'],
        activities: ['Using various computer applications', 'Managing data', 'Creating documents', 'Developing spreadsheets', 'Preparing presentations'],
        careers: ['Office Administrator', 'Data Analyst', 'Information Manager', 'Technical Support Specialist', 'Administrative Assistant'],
        category: 'Computer',
      },
      
    
      {
        name: 'Visual Design',
        description: 'Visual Design allows members to express their creativity through presentation design. You will get to show off the creation of a visual appealing project while showcasing design principles.',
        skills: ['Design creativity', 'Visual communication', 'Design principles', 'Software proficiency', 'Attention to detail'],
        activities: ['Designing a project', 'Choosing a color scheme', 'Working with typography', 'Using design software', 'Presenting design ideas'],
        careers: ['Visual designer', 'Web designer', 'Graphic designer', 'Marketing designer', 'Illustrator'],
        category: 'Visual Design',
      },
      {
        name: 'Digital Animation',
        description: 'Digital Animation allows members to create an animated video. You will get to express your creative side and utilize animation design skills.',
        skills: ['Animation', 'Creativity', 'Video design', 'Software proficiency', 'Attention to detail'],
        activities: ['Designing animations', 'Using animation software', 'Choosing scene design', 'Creating character design', 'Presenting animation ideas'],
        careers: ['Animator', 'Motion graphics', 'Video producer', 'Graphic designer', 'Illustrator'],
        category: 'Design',
      },
      
     {
        name: 'Computer Problem Solving',
        description: 'Computer Problem Solving provides members with the opportunity to demonstrate knowledge about operating systems, networks and hardware. This competitive event consists of an objective test. This event aims to inspire members to learn about computer problem solving.',
        skills: ['Troubleshooting', 'Operating systems', 'Networking', 'Hardware', 'Problem-solving'],
        activities: ['Diagnosing computer issues', 'Understanding operating systems', 'Setting up networks', 'Repairing hardware', 'Learning about computers'],
        careers: ['Computer Technician', 'IT Support Specialist', 'Network Administrator', 'Systems Analyst', 'Help Desk Technician'],
        category: 'Computer',
      },
     {
        name: 'Cybersecurity',
        description: 'Cyber Security provides members with the opportunity to demonstrate knowledge about defending and attacking viruses, spam, and spyware. This competitive event consists of an objective test. This event aims to inspire members to learn about cyber security.',
        skills: ['Cybersecurity', 'Network security', 'Data protection', 'Threat analysis', 'Ethical hacking'],
        activities: ['Identifying security threats', 'Protecting networks', 'Analyzing data', 'Learning about viruses', 'Understanding spyware'],
        careers: ['Cybersecurity Analyst', 'Network Security Engineer', 'Information Security Manager', 'Security Consultant', 'Ethical Hacker'],
        category: 'Cybersecurity',
      },
      {
        name: 'Data Analysis',
        description: 'Data Analysis provides members with the opportunity to deep dive into a data set and provide analysis. This competitive event consists of a presentation component for the judges.',
        skills: ['Data analysis', 'Statistical analysis', 'Presentation', 'Data interpretation', 'Problem-solving'],
        activities: ['Analyzing datasets', 'Creating reports', 'Interpreting data', 'Presenting findings', 'Drawing conclusions'],
        careers: ['Data Analyst', 'Statistician', 'Business Analyst', 'Market Research Analyst', 'Data Scientist'],
        category: 'Data Analysis',
      },
      {
        name: 'Digital Video Production',
        description: 'Digital Video Production has become a prominent and effective way of conveying new ideas and products. This event provides recognition for members who demonstrate the ability to create an effective video to present an idea to a specific audience. This competitive event consists of a pre-judged project and presentation component.',
        skills: ['Video production', 'Storytelling', 'Editing', 'Filming', 'Presentation'],
        activities: ['Creating videos', 'Editing footage', 'Writing scripts', 'Filming scenes', 'Presenting ideas'],
        careers: ['Video Editor', 'Videographer', 'Film Director', 'Content Creator', 'Multimedia Artist'],
        category: 'Digital Video',
      },
      {
        name: 'Economics',
        description: 'Economics provides members with the opportunity to demonstrate knowledge about economic concepts and principles. This competitive event consists of an objective test. This event aims to inspire members to learn about economics.',
        skills: ['Economic analysis', 'Market understanding', 'Financial principles', 'Critical thinking', 'Problem-solving'],
        activities: ['Analyzing economic data', 'Understanding market trends', 'Studying financial systems', 'Learning economic concepts', 'Solving economic problems'],
        careers: ['Economist', 'Financial Analyst', 'Market Research Analyst', 'Economic Consultant', 'Policy Analyst'],
        category: 'Economics',
      },
       {
        name: 'Electronic Career Portfolio',
        description: 'Sometimes, a basic resume is not always enough. Electronic Career Portfolio provides members with the opportunity to present a portfolio showcasing their ability to combine their achievements, growth, vision, skills, education, training, and career goals into an electronic format. This competitive event consists of a presentation component where the portfolio is shown to the judges.',
        skills: ['Portfolio development', 'Presentation', 'Self-assessment', 'Career planning', 'Digital design'],
        activities: ['Creating an electronic portfolio', 'Showcasing achievements', 'Presenting career goals', 'Highlighting skills', 'Reflecting on growth'],
        careers: ['Career Counselor', 'Human Resources Specialist', 'Talent Acquisition Manager', 'Personal Branding Consultant', 'Educational Consultant'],
        category: 'Career Development',
      },
      {
        name: 'Financial Math',
        description: 'Financial Math provides members with the opportunity to gain knowledge around calculations in the business world. This competitive event consists of an objective test. This event aims to inspire members to learn about math in the business world.',
        skills: ['Financial calculations', 'Mathematical problem-solving', 'Budgeting', 'Financial analysis', 'Quantitative reasoning'],
        activities: ['Calculating financial data', 'Solving math problems', 'Creating budgets', 'Analyzing financial statements', 'Applying quantitative methods'],
        careers: ['Financial Analyst', 'Accountant', 'Budget Analyst', 'Financial Planner', 'Actuary'],
        category: 'Financial',
      },
      {
        name: 'Financial Statement Analysis',
        description: 'Financial Statement Analysis provides members with the opportunity to apply knowledge in accounting and analyzing financial information. This competitive event consists of a presentation component, with a specific topic.',
        skills: ['Financial analysis', 'Accounting knowledge', 'Presentation', 'Data interpretation', 'Problem-solving'],
        activities: ['Analyzing financial statements', 'Interpreting data', 'Creating reports', 'Presenting findings', 'Drawing financial conclusions'],
        careers: ['Financial Analyst', 'Accountant', 'Auditor', 'Financial Consultant', 'Investment Analyst'],
        category: 'Financial',
      },
      {
        name: 'Future Business Educator',
        description: 'Future Business Educator provides competitors with the opportunity to demonstrate their skills in the business education field. This competitive event consists of pre-judged materials and presentation components.',
        skills: ['Teaching', 'Presentation', 'Lesson planning', 'Communication', 'Curriculum development'],
        activities: ['Creating lesson plans', 'Delivering presentations', 'Designing educational materials', 'Evaluating learning', 'Engaging students'],
        careers: ['Business Teacher', 'Education Consultant', 'Training Manager', 'Curriculum Developer', 'Corporate Trainer'],
        category: 'Education',
      },
    
       {
        name: 'Help Desk',
        description: 'Help Desk provides members with the opportunity to demonstrate knowledge around competencies in help desk operations. This competitive event consists of an objective test and a role-play scenario. It aims to inspire members to learn about the skills in the general operations of the various components of the help desk sector.',
        skills: ['Problem-solving', 'Communication', 'Customer service', 'Technical skills', 'Troubleshooting'],
        activities: ['Assisting customers', 'Solving technical issues', 'Troubleshooting', 'Communicating solutions', 'Providing support'],
        careers: ['Help Desk Technician', 'IT Support Specialist', 'Technical Support Engineer', 'Customer Service Representative', 'Systems Administrator'],
        category: 'Technical Support',
      },
      {
        name: 'Hospitality & Event Management',
        description: 'Hospitality & Event Management provides members with the opportunity to gain knowledge in the hospitality management and event planning industries. This competitive event consists of an objective test and a role play scenario.',
        skills: ['Event planning', 'Hospitality', 'Customer service', 'Problem-solving', 'Communication'],
        activities: ['Organizing events', 'Managing guest relations', 'Handling logistics', 'Solving problems', 'Communicating effectively'],
        careers: ['Event Planner', 'Hotel Manager', 'Restaurant Manager', 'Hospitality Consultant', 'Tourism Officer'],
        category: 'Hospitality',
      },
      {
        name: 'Human Resource Management',
        description: 'Human Resource Management provides members with the opportunity to demonstrate knowledge about staffing, training, and development. This competitive event consists of an objective test. This event aims to inspire members to learn about human resource management.',
        skills: ['Staffing', 'Training', 'Development', 'Employee relations', 'HR policies'],
        activities: ['Hiring employees', 'Training staff', 'Developing skills', 'Managing employee relations', 'Implementing HR policies'],
        careers: ['HR Manager', 'Recruiter', 'Training Coordinator', 'Employee Relations Manager', 'Compensation Analyst'],
        category: 'Human Resources',
      },
      {
        name: 'Insurance & Risk Management',
        description: 'Insurance & Risk Management provides members with the opportunity to demonstrate knowledge about risk management processes and different types of insurance. This competitive event consists of an objective test. This event aims to inspire members to learn about insurance and risk management.',
        skills: ['Risk assessment', 'Insurance knowledge', 'Financial planning', 'Analytical skills', 'Problem-solving'],
        activities: ['Identifying risks', 'Evaluating insurance policies', 'Managing finances', 'Analyzing data', 'Solving problems'],
        careers: ['Insurance Agent', 'Risk Manager', 'Actuary', 'Financial Advisor', 'Claims Adjuster'],
        category: 'Insurance',
      },
       {
        name: 'International Business',
        description: 'The global economy is a complex; continually flowing and constantly changing network of information, goods, services, and culture. International Business offers members a chance to dive into these concepts. This competitive event consists of an objective test and a role play scenario.',
        skills: ['Global business', 'Cross-cultural communication', 'Market analysis', 'International trade', 'Business strategy'],
        activities: ['Studying global markets', 'Communicating across cultures', 'Analyzing trade data', 'Developing business strategies', 'Learning international business practices'],
        careers: ['International Business Consultant', 'Export/Import Manager', 'Global Marketing Manager', 'International Trade Specialist', 'Foreign Affairs Officer'],
        category: 'International Business',
      },
        {
        name: 'Introduction to Business Communication',
        description: 'Introduction to Business Communication provides members with the opportunity to demonstrate knowledge around introductory competencies in communication. This competitive event consists of an objective test. It aims to inspire members to learn about the process of sharing information in and outside of a company.',
        skills: ['Basic communication', 'Business etiquette', 'Written communication', 'Verbal communication', 'Interpersonal skills'],
        activities: ['Writing emails', 'Conducting meetings', 'Giving presentations', 'Practicing active listening', 'Learning basic communication practices'],
        careers: ['Administrative Assistant', 'Office Manager', 'Communications Intern', 'Customer Service Representative', 'Sales Associate'],
        category: 'Introduction to Business',
      },
       {
        name: 'Introduction to Business Concepts',
        description: 'Introduction to Business Concepts provides members with the opportunity to demonstrate knowledge around introductory competencies in business. This competitive event consists of an objective test. It aims to inspire members to learn about the different functions of businesses.',
        skills: ['Basic business knowledge', 'Financial literacy', 'Marketing basics', 'Management principles', 'Problem-solving'],
        activities: ['Learning about business functions', 'Understanding financial concepts', 'Studying marketing strategies', 'Exploring management principles', 'Solving business problems'],
        careers: ['Business Intern', 'Administrative Assistant', 'Sales Associate', 'Marketing Assistant', 'Office Assistant'],
        category: 'Introduction to Business',
      },
        {
        name: 'Introduction to Business Presentation',
        description: 'Introduction to Business Presentation provides members with the opportunity to showcase their skills in using a presentation software program as an aid in delivering a business presentation. This competitive event consists of a presentation component.',
        skills: ['Presentation', 'Communication', 'Public speaking', 'Visual aids', 'Software proficiency'],
        activities: ['Creating presentations', 'Delivering speeches', 'Using presentation software', 'Designing visual aids', 'Engaging an audience'],
        careers: ['Presenter', 'Trainer', 'Educator', 'Public Relations Specialist', 'Sales Representative'],
        category: 'Introduction to Business',
      },
      {
        name: 'Journalism',
        description: 'Journalism provides members with the opportunity to gain knowledge around the reporting of information. This competitive event consists of a presentation component. This event aims to inspire members to learn about journalism.',
        skills: ['Reporting', 'Writing', 'Storytelling', 'Interviewing', 'News ethics'],
        activities: ['Writing news stories', 'Conducting interviews', 'Creating reports', 'Investigating events', 'Learning about news ethics'],
        careers: ['Journalist', 'Reporter', 'Editor', 'News Anchor', 'Writer'],
        category: 'Journalism',
      },
     
  ];

export default function Quiz() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');

  const handleAnswer = (questionText: string, answer: string) => {
    setAnswers(prevAnswers => ({ ...prevAnswers, [questionText]: answer }));
  };

  const calculateBestEvent = () => {
    const categoryScores: { [key: string]: number } = {};
    Object.entries(quizQuestions).forEach(([key, question]) => {
      const answer = answers[question.text];
      if (answer === 'Yes') {
        categoryScores[question.category] = (categoryScores[question.category] || 0) + 1;
      }
    });
  
    const positiveCategories = Object.entries(categoryScores).filter(([, score]) => score > 0);
  
    let bestCategory: string;
  
    if (positiveCategories.length === 0) {
      return events[Math.floor(Math.random() * events.length)];
    } else if (positiveCategories.length === 1) {
      bestCategory = positiveCategories[0][0];
    } else {
      
      const categoryCounts: { [key: string]: number } = {};
      positiveCategories.forEach(([category, score]) => {
        categoryCounts[category] = score;
      });
  
      
      bestCategory = Object.keys(categoryCounts).reduce((a, b) =>
        categoryCounts[a] > categoryCounts[b] ? a : b, Object.keys(categoryCounts)[0]
      );
    }

    const relevantEvents = events.filter((event) => event.category === bestCategory);
    return relevantEvents[Math.floor(Math.random() * relevantEvents.length)];
  };

  const handleSubmit = () => {
    const isComplete = Object.keys(quizQuestions).every(questionKey => answers[quizQuestions[questionKey].text]);
    if (!isComplete) {
      setError('Please answer all questions before submitting.');
      return;
    }
    setError('');
    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
    }
  }, [showResults]);  
  
  const bestEvent = showResults ? calculateBestEvent() : undefined;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <Image
        src="/fbla-logo.svg"
        alt="FBLA Logo"
        width={200}
        height={200}
        className="mb-4"
      />
      <h1 className="text-3xl font-bold mb-4">FBLA Event Quiz</h1>
      {!showResults ? (
        <div className="flex flex-col gap-4">
          {Object.entries(quizQuestions).map(([questionKey, question]) => (
            <div key={questionKey} className="border p-4 rounded-lg w-[600px]">
              <h2 className="text-xl mb-2">{question.text}</h2>
              <div className="flex gap-2">
                {Object.keys(question.options).map(option => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(question.text, option)}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                      answers[question.text] === option ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {error && <p className="text-red-500">{error}</p>}
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Submit Quiz
          </button>
        </div>
      ) : bestEvent ? (
        <div className="text-center w-[600px]">
          <h2 className="text-2xl font-semibold mb-2">Based on Your Answers, You Might Enjoy:</h2>
          <h3 className='font-bold text-xl'>{bestEvent.name}</h3>
          <p className="mb-4">{bestEvent.description}</p>
          <h4 className='font-semibold'>Skills Involved:</h4>
          <ul className="list-disc list-inside mb-4">
            {bestEvent.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4 className='font-semibold'>Activities:</h4>
          <ul className="list-disc list-inside mb-4">
            {bestEvent.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <h4 className='font-semibold'>Potential Careers:</h4>
          <ul className="list-disc list-inside mb-4">
            {bestEvent.careers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => window.open("https://www.fbla.org/", "_blank")}>
            Visit FBLA Website
          </button>
        </div>
      ) : <div className='text-red-500'>Something went wrong please try again later</div>}
          </div>
  );
}
