export const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export const personalInfo = {
    name: "BAO NGUYEN NGOC GIA",
    nickname: "BERNIE",
    titles: [
        "Software Engineer",
        "Sui Stack Developer",
        "Web3 Builder"
    ],
    email: "bernie.web3@gmail.com",
    github: "https://github.com/bernieio",
    linkedin: "https://linkedin.com/in/bernieio",
    portfolio: "https://bernie-nguyen.netlify.app",
    about: "I am a Software Engineer based in Vietnam, specializing in building decentralized applications and robust smart contracts on the Sui ecosystem. My approach combines rigorous engineering principles with a passion for user-centric Web3 experiences."
};

export const aboutContent = {
    statement: "I don't just write code; I architect digital assets. With a deep foundation in computer science and blockchain technology, I transform complex protocols into seamless, user-friendly interfaces.",
    objective: "To contribute to the mass adoption of Web3 by building secure, scalable, and intuitive dApps that empower users and redefine digital ownership.",
    languages: [
        { language: "Vietnamese", level: "Native" },
        { language: "English", level: "B1 (VSTEP)" }
    ]
};

export const skills = {
    blockchain: {
        title: "Sui Stack Development and Other Blockchains",
        items: ["Sui Move", "DeepBook integration", "Walrus integration", "Solidity (EVM)", "Hardhat", "Web3.js", "Ethers.js"]
    },
    frontend: {
        title: "Frontend & Full-Stack",
        items: ["TypeScript", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion", "Reactbits", "Node.js", "Express", "PostgreSQL", "Supabase", "Neon.Tech"]
    },
    tools: {
        title: "Tools & Workflow",
        items: ["Sui CLI", "Git/GitHub", "CloudFlare Workers", "CloudFlare R2", "CloudFlare D1", "CloudFlare KV", "Netlify", "Vercel", "Render", "Cursor IDE", "Claude Code", "Google Antigravity", "Bolt.new"]
    }
};

export const projects = [
    {
        id: 1,
        title: "Orlim",
        role: "Founder & Lead Developer",
        tech: ["Move", "TypeScript", "Next.js", "DeepBook", "PTB", "Sui Object Model"],
        description: "A fully on chain limit order engine for Sui featuring Limit Order, OCO, and Time in Force, leveraging Sui’s object centric model and parallel transaction execution. Each order is represented as a unique Sui Object for transparency and ownership.",
        impact: [
            "Achieved ~67% lower gas cost vs existing solutions on Solana/BNB.",
            "Native MEV resistance through PTB and predictable object states.",
            "Implemented batch PTB execution + flexible Order Receipt design.",
            "Runner up at Sui Bootcamp HCMC 2025 Hackathon."
        ],
        github: "https://github.com/bernieio/bernie-projects/tree/main/orlim"
    },
    {
        id: 2,
        title: "FloodGuard",
        role: "Founder & Sui Stack Developer",
        tech: ["Sui Move", "Walrus", "Next.js", "TypeScript", "Mapbox GL", "AI matching engine"],
        description: "A production ready decentralized disaster relief coordination protocol using Walrus decentralized storage, Move smart contracts, and a real time AI powered bipartite matching engine. Designed to solve transparency and allocation inefficiencies in Vietnam’s emergency response.",
        impact: [
            "Optimized system load time from 13s → ~2s with singleton + event driven architecture.",
            "Precise geohash based location (±19m) ensures accurate relief routing.",
            "Secure evidence storage via Walrus; fully transparent resource flows.",
            "Submitted to Walrus Haulout Hackathon 2025, AI x Data track."
        ],
        github: "https://github.com/bernieio/bernie-projects/tree/main/floodguard"
    }
];

export const education = {
    university: "University of Transport and Communications",
    degree: "B.Eng in Information Technology",
    period: "2020 – 2025",
    thesisGrade: "A"
};

export const achievements = [
    { event: "Web3 Ideathon 2025", result: "Top 10 Finalist" },
    { event: "SEA Ideathon 2025", result: "Top 8 Finalist" },
    { event: "TLS-Innovation 2025", result: "Runner-up" },
    { event: "Sui Bootcamp HCMC Hackathon", result: "Runner-up" },
    { event: "Walrus Haulout Hackathon 2025", result: "AI x Data Track Contestant" }
];
