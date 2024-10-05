export const HEADER_HEIGHT = 76;

export const GITHUB_PROFILE_LINK = 'https://github.com/rohailtaha';
export const LINKEDIN_PROFILE_LINK = 'https://www.linkedin.com/in/rohail-taha/';
export const CODESANDBOX_PROFILE_LINK = 'https://codesandbox.io/u/Rohail77';
export const CODEPEN_PROFILE_LINK = 'https://codepen.io/Rohail_Taha';
export const FRONTEND_MENTOR_PROFILE_LINK =
  'https://www.frontendmentor.io/profile/rohailtaha';

export const YEARS_OF_EXPERIENCE = 2.5;

export const PROJECTS = {
  'api-freaks': {
    slug: 'api-freaks',
    name: 'APIFreaks',
    description:
      'A centralized API hub for services like ipgeolocation.io, whoisfreaks.com and currencyfreaks.com, allowing users to manage subscriptions and organizations efficiently from a single platform.',
    skills: ['Next.js', 'TailwindCSS', 'PostgreSQL'],
    image: {
      large: 'api-freaks-large.png',
      small: 'api-freaks-small.png',
    },
    viewLink: 'https://apifreaks.com',
    year: 2024,
    highlights: [
      'Built the frontend and api integration for the product.',
      'Lead the frontend team and distributed tasks to different team members.',
      'Continously communicated with the backend team for api requirements.',
      'Wrote website content for improved SEO.',
      'Enhanced core web vitals by improving website performance.',
      'Performed code reviews and ensured coding standards and clean code practices are met.',
      'Researched and installed the Ghost platform on server for hassle free blog management.',
    ],
  },
  tweetstorm: {
    slug: 'tweetstorm',
    name: 'TweetStorm',
    description:
      'An AI-powered Tweet Generator featuring hashtag generation, bio generation, username suggestions, advanced tweet search and a browser extension.',
    image: {
      large: 'tweetstorm-large.png',
      small: 'tweetstorm-small.png',
    },
    viewLink: 'https://tweetstorm.ai',
    year: 2024,
    skills: ['Next.js', 'TailwindCSS', 'Stripe', 'MySQL'],
    highlights: [
      'Migrated the application from Laravel to Next.js.',
      'Collaborated with team members on the implementation and enhancement of various application features.',
      'Performed safe database migrations in production.',
      'Wrote website content and improved SEO.',
      'Developed the CD pipeline for streamlining the development workflow.',
      'Lead the development team and assigned tasks to team members.',
      'Brainstormed about the features and issues in browser extensions and made improvements to it.',
      'Performed code reviews and ensured coding standards and clean code practices are met.',
    ],
  },
  webbsai: {
    slug: 'webbsai',
    name: 'webbsai',
    description:
      'An AI-powered low-code website builder, that allows users to create websites with drag-and-drop functionality, customizable templates and AI enabled chat. Important features include conversion of linked resume to website, hosting via Amazon S3 and Cloudfront, and Stripe integration for subscriptions.',
    image: {
      large: 'webbsai-large.png',
      small: 'webbsai-small.png',
    },
    viewLink: 'https://webbsai.com',
    year: 2023,
    skills: [
      'Next.js',
      'TailwindCSS',
      'AWS S3',
      'Stripe',
      'MongoDB',
      'Firebase',
    ],
    highlights: [
      'Collaborated with team members on the implementation and enhancement of various application features.',
      'Updating the @craftjs/layers open source package for our custom use.',
      'Writing database migration scripts.',
      "Optimizing the performance of firebase's firestore read and write queries.",
      'Performed code reviews and ensured coding standards and clean code practices are met.',
      'Writing documentation for various architectural designs used in the application.',
    ],
  },
  'softwares-rating-app': {
    slug: 'softwares-rating-app',
    name: 'Softwares Rating App',
    description:
      'A softwares-rating-app built with React and Firebase (Firebase authentication, cloud database and hosting). The user can see all reviews of any software, filter from 1 to 5 star reviews, rate and review any software after logging in, edit his/her ratings, change account settings.',
    skills: ['React', 'Firebase', 'React Router', 'Figma'],
    viewLink: 'https://my-holiday-proje-1616778972307.web.app/',
    codeLink: 'https://github.com/rohailtaha/Softwares-Rating-App',
    year: 2021,
    image: {
      large: 'softwares-rating-app.png',
      small: 'softwares-rating-app.png',
    },
    highlights: [
      'Prepared the design of the application on Figma.',
      "Utilized Firebase's firestore, authentication and hosting services to handle application backend.",
      'Used react router for client side navigation.',
    ],
  },
  'nationpedia': {
    slug: 'nationpedia',
    name: 'Nationpedia',
    description:
      'An application that fetches and displays comprehensive information about world countries using the REST Countries API. Users are presented with a paginated list of countries sorted alphabetically. The app offers intuitive search functionality and region-based filters to quickly find specific countries. Detailed country information, including key facts and statistics, is accessible with a single click. Users can also navigate between neighboring countries via clickable border links. The application supports both light and dark modes for an enhanced user experience.',
    image: {
      large: 'nationpedia-large.png',
      small: 'nationpedia-small.png',
    },
    viewLink: 'https://rest-countries-api-ornd.vercel.app/',
    codeLink: 'https://github.com/rohailtaha/REST-Countries-API',
    year: 2021,
    skills: ['React', 'Redux'],
    highlights: [
      'Read the api documentation for fetching the countries data.',
      'Used Redux for storing the state of countries data.',
      'Followed an existing design to make the ui of the application.',
    ],
  },
};
