export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
  achievements: Achievement[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  location: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  project?: string;
  tech?: string;
  advisor?: string;
  highlights: string[];
}

export interface Project {
  name: string;
  date: string;
  tech: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  program: string;
  provider: string;
  period: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
}

export const resumeData: ResumeData = {
  name: "Saathvik Varma Mandapati",
  title: "GenAI Developer & CSE(DS) Undergraduate",
  summary:
    "Data Science undergraduate with hands-on experience building enterprise-grade GenAI and RAG systems. Currently interning at Ksquare Group, where I architect document retrieval platforms powered by LLMs. Passionate about bridging cutting-edge AI research—spanning GANs, NLP, and multi-agent orchestration—with production-ready backend engineering using Python, FastAPI, and PostgreSQL.",
  contact: {
    phone: "+91 9346298048",
    email: "saathvikvarma2005@gmail.com",
    linkedin: "https://linkedin.com/in/saathvik-varma-942064319",
    github: "https://github.com/Saathvik-M" ,
    portfolio: "https://saathvik999.github.io",
    location: "Hyderabad, Telangana, India",
  },
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution:
        "CRRao Advanced Institute of Mathematics, Statistics and Computer Science",
      location: "Hyderabad, Telangana",
      period: "Aug 2023 – Present",
      score: "8.19",
      scoreLabel: "CGPA",
    },
    {
      degree: "Intermediate (Grade 11–12)",
      institution: "ASCENT Junior College & SSV Institute",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "2021 – 2023",
      score: "89%",
      scoreLabel: "Score",
    },
  ],
  experience: [
    {
      role: "GenAI Intern",
      company: "Ksquare Group",
      period: "July 2026 – Present",
      location: "Hyderabad, Telangana",
      type: "On-site",
      project: "KODI AI",
      tech: "Python, FastAPI, PostgreSQL, pgvector",
      highlights: [
        "Built the full backend for KODI AI, an enterprise knowledge and document retrieval platform using RAG and LLMs to answer questions across multiple data sources.",
        "Implemented hybrid retrieval combining semantic and keyword search for improved accuracy.",
        "Developed document classification, document intelligence, and source citation features.",
        "Engineered multi-source connectors enabling scalable knowledge retrieval from diverse data repositories.",
      ],
    },
    {
      role: "I-SURE Research Intern",
      company: "School of Computer Science, University of Hyderabad",
      period: "May 2026 – July 2026",
      location: "Hyderabad, Telangana",
      type: "On-site",
      advisor: "Dr. Odelu Vanga",
      highlights: [
        "Researched GAN architectures and cryptographic methods, evaluating their potential to enhance intrusion detection systems.",
      ],
    },
    {
      role: "Data Science Intern",
      company: "Cognifyz IT Solutions Pvt. Ltd.",
      period: "May 2026 – June 2026",
      location: "Remote",
      type: "Remote",
      highlights: [
        "Completed end-to-end data science workflows including exploratory data analysis, feature engineering, and model evaluation.",
        "Delivered insights through structured reports and clear data visualizations.",
      ],
    },
  ],
  projects: [
    {
      name: "Engineering Team Agent",
      date: "August 2026",
      tech: "crewAI, Gemini, OpenRouter",
      description:
        "Multi-agent system featuring an engineering lead, backend, frontend, and test engineers that collaboratively generates complete applications from a single natural-language prompt.",
    },
    {
      name: "K-ARES: AI Reliability & Security Evaluation System",
      date: "October 2026",
      tech: "Claude code, GLM, python",
      description:
        "AI Evaluation, Reliability & Security Platform that assesses the reliability and security of LLMs and GenAI systems through adversarial testing, prompt injection, and model evaluation.",
    },

    {
      name: "Undercover: the travel insurance system",
      date: "October 2026",
      tech: "Cline, Langfuse, Supabase",
      description:
        "a travel insurance system that user an ai agent to decide wether to approve, refer or reject a claim, while having human in the loop for larger claims.",
    },
    {
      name: "Multi-RAG Application",
      date: "July 2026",
      tech: "Python, LangChain, Gemini",
      description:
        "Implements and benchmarks multiple RAG architectures—Agentic RAG, Hybrid RAG, and Graph RAG—for flexible document question-answering.",
    },
    {
      name: "Intrusion Detection Using Multiple GANs",
      date: "May 2026",
      tech: "Python, PyTorch",
      description:
        "Comparative study of GAN variants (Vanilla GAN, WGAN, CTGAN) for augmenting training data and improving intrusion detection on the NSL-KDD dataset.",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "C", "Java"],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "PyTorch",
        "Scikit-learn",
        "LangChain",
        "crewAI",
        "NumPy",
        "Pandas",
        "Matplotlib",
      ],
    },
    {
      category: "Backend & Databases",
      items: ["FastAPI", "PostgreSQL (pgvector)", "MySQL", "MongoDB"],
    },
    {
      category: "Web Technologies",
      items: ["HTML5", "CSS3", "React.js"],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "VS Code",
        "Google Colab",
        "Jupyter Notebook",
        "Cline",
        "OpenCode",
      ],
    },
    {
      category: "Core Concepts",
      items: [
        "RAG",
        "LLMs",
        "NLP",
        "GANs",
        "Cryptography",
        "High-Performance Computing",
      ],
    },
  ],
  certifications: [
    {
      program: "24-Week AI & ML Training Program",
      provider: "IIIT Hyderabad",
      period: "Nov 2024 – Apr 2025",
    },
    {
      program: "3-Month Data Science Internship Program",
      provider: "Unified Mentor",
      period: "Jan 2026 – Apr 2026",
    },
    {
      program: "4-Week Quantum Fundamentals Program",
      provider: "Amaravati Quantum Valley, Qubitech & WISER",
      period: "Dec 2025 – Jan 2026",
    },
  ],
  achievements: [
    {
      title: "Finalist, Udbhav 2026 Hackathon",
      date: "March 2026",
      description:
        "Selected as a finalist among competing teams and presented a working prototype under tight time constraints.",
    },
  ],
};
