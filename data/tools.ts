export interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  image: string;
  icon: string;
  category: string;
  tags: string[];
}

export const tools: Tool[] = [
  {
    id: "1",
    title: "GitHub",
    link: "https://github.com",
    description: "A platform for version control and collaboration",
    image: "https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png",
    icon: "https://github.githubassets.com/favicons/favicon.svg",
    category: "Version Control",
    tags: ["git", "collaboration", "open-source"]
  },
  {
    id: "2",
    title: "VS Code",
    link: "https://code.visualstudio.com",
    description: "A powerful, extensible code editor",
    image: "https://code.visualstudio.com/opengraphimg/opengraph-home.png",
    icon: "https://code.visualstudio.com/favicon.ico",
    category: "Code Editor",
    tags: ["editor", "microsoft", "extensions"]
  },
  {
    id: "3",
    title: "Node.js",
    link: "https://nodejs.org",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    image: "https://nodejs.org/en/next-data/og/announcement/Node.js%20%E2%80%94%20Run%20JavaScript%20Everywhere",
    icon: "https://nodejs.org/static/images/favicons/favicon.ico",
    category: "Runtime",
    tags: ["javascript", "server", "npm"]
  },
  {
    id: "4",
    title: "React",
    link: "https://reactjs.org",
    description: "A JavaScript library for building user interfaces",
    image: "https://reactjs.org/logo-og.png",
    icon: "https://reactjs.org/favicon.ico",
    category: "Frontend Framework",
    tags: ["javascript", "ui", "components"]
  },
  {
    id: "5",
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
    description: "A typed superset of JavaScript that compiles to plain JavaScript",
    image: "https://www.typescriptlang.org/images/branding/og-image.png",
    icon: "https://www.typescriptlang.org/favicon-32x32.png",
    category: "Programming Language",
    tags: ["javascript", "static typing", "microsoft"]
  },
  {
    id: "6",
    title: "Docker",
    link: "https://www.docker.com",
    description: "A platform for developing, shipping, and running applications",
    image: "https://www.docker.com/wp-content/uploads/2023/06/meta-image-homepage-1110x580.png",
    icon: "https://www.docker.com/wp-content/uploads/2023/04/favicon-32x32.png",
    category: "DevOps",
    tags: ["containers", "virtualization", "deployment"]
  },
  {
    id: "7",
    title: "PostgreSQL",
    link: "https://www.postgresql.org",
    description: "A powerful, open source object-relational database system",
    image: "https://www.postgresql.org/media/img/about/press/elephant.png",
    icon: "https://www.postgresql.org/favicon.ico",
    category: "Database",
    tags: ["sql", "relational", "open-source"]
  },
  {
    id: "8",
    title: "Kubernetes",
    link: "https://kubernetes.io",
    description: "An open-source system for automating deployment, scaling, and management of containerized applications",
    image: "https://kubernetes.io/images/kubernetes-horizontal-color.png",
    icon: "https://kubernetes.io/images/favicon.png",
    category: "DevOps",
    tags: ["containers", "orchestration", "cloud"]
  },
  {
    id: "9",
    title: "TensorFlow",
    link: "https://www.tensorflow.org",
    description: "An end-to-end open source platform for machine learning",
    image: "https://www.tensorflow.org/images/tf_logo_social.png",
    icon: "https://www.tensorflow.org/favicon.ico",
    category: "Machine Learning",
    tags: ["ai", "deep learning", "data science"]
  },
  {
    id: "10",
    title: "Rust",
    link: "https://www.rust-lang.org",
    description: "A language empowering everyone to build reliable and efficient software",
    image: "https://www.rust-lang.org/static/images/rust-social.jpg",
    icon: "https://www.rust-lang.org/favicon.ico",
    category: "Programming Language",
    tags: ["systems programming", "performance", "safety"]
  },
  {
    id: "11",
    title: "MongoDB",
    link: "https://www.mongodb.com",
    description: "A general purpose, document-based, distributed database",
    image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
    category: "Database",
    tags: ["nosql", "document", "scalable"]
  },
  {
    id: "12",
    title: "GraphQL",
    link: "https://graphql.org",
    description: "A query language for APIs and a runtime for executing those queries",
    image: "https://graphql.org/img/og-image.png",
    icon: "https://graphql.org/img/favicon.ico",
    category: "API",
    tags: ["query", "api", "flexible"]
  },
  {
    id: "13",
    title: "Webpack",
    link: "https://webpack.js.org",
    description: "A static module bundler for modern JavaScript applications",
    image: "https://webpack.js.org/assets/og-image.png",
    icon: "https://webpack.js.org/favicon.ico",
    category: "Build Tool",
    tags: ["bundler", "javascript", "module"]
  },
  {
    id: "14",
    title: "Redis",
    link: "https://redis.io",
    description: "An open source, in-memory data structure store",
    image: "https://redis.io/images/redis-white.png",
    icon: "https://redis.io/images/favicon.png",
    category: "Database",
    tags: ["cache", "in-memory", "nosql"]
  },
  {
    id: "15",
    title: "Ansible",
    link: "https://www.ansible.com",
    description: "An open-source software provisioning, configuration management, and application-deployment tool",
    image: "https://www.ansible.com/hubfs/2017_Images/BrandPage/Brand-Assets/Ansible_RH_AnsibleAutomation_RGB_RedBlack.png",
    icon: "https://www.ansible.com/favicon.ico",
    category: "DevOps",
    tags: ["automation", "configuration", "deployment"]
  }
];

