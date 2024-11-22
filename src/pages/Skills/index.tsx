import React from "react";
import ProgressBar from "../../components/ProgressBar";

interface Skill {
  label: string;
  percentage: number;
}

const Skills: React.FC = () => {
  const FE_skills: Skill[] = [
    { label: "React.js/Redux", percentage: 100 },
    { label: "API Integration", percentage: 100 },
    { label: "HTML/CSS", percentage: 98 },
    { label: "Next.js", percentage: 95 },
    { label: "Tailwind", percentage: 95 },
    { label: "Vue.js", percentage: 80 },
    { label: "Angular", percentage: 70 },
    { label: "Jest(Testing)", percentage: 70 },
    { label: "Micro-Frontend", percentage: 70 },
  ];
  const BE_skills: Skill[] = [
    { label: "Laravel", percentage: 99 },
    { label: "Node.js", percentage: 90 },
    { label: "Nest.js", percentage: 85 },
    { label: "Jenkins", percentage: 80 },
    { label: "Docker", percentage: 70 },
    { label: "CI/CD Pipelines/Automated Development", percentage: 70 },
    { label: "AWS/Linux System", percentage: 70 },
    { label: "Azure/Google Cloud Services", percentage: 70 }, 
    { label: "Spring Boot", percentage: 67 },
  ];
  const DB_skills: Skill[] = [
    { label: "Mysql", percentage: 99 },
    { label: "MongoDB", percentage: 99 },
    { label: "PostgreSQL", percentage: 90 },
    { label: "SQL", percentage: 85 },
    { label: "Neo4j", percentage: 80 },
    { label: "Fire-Store", percentage: 80 },
    { label: "Redis", percentage: 80 },
    { label: "Graph Databases", percentage: 80 },
    { label: "Cloud Databases", percentage: 70 },
  ];
  const BC_skills: Skill[] = [
    { label: "LLM(Large Language Models)", percentage: 80 },
    { label: "Ethereum", percentage: 70 },
    { label: "Solidity", percentage: 65 },
    { label: "Smart Contracts/Dapps", percentage: 60 },
  ];

  return (
    <div className=" no-scrollbar overflow-auto pb-[2rem] h-screen">
      <h1 className="text-center text-white text-4xl mt-8">
        🛠 Technical Skills
        <span className="block w-16 h-1 bg-green-500 m-auto mt-2"></span>
      </h1>
      <div className="p-10 text-white  flex  flex-wrap justify-center gap-5     ">
        <div className="w-full max-w-md border p-7 rounded-2xl border-slate-600 ">
          <h5 className="text-center mb-5 text-slate-400">
            Frontend Development
          </h5>
          {FE_skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
        <div className="w-full max-w-md border p-7 rounded-2xl border-slate-600 ">
          <h5 className="text-center mb-5 text-slate-400">
            Backend Development/ DevOps
          </h5>
          {BE_skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
        <div className="w-full max-w-md border p-7 rounded-2xl border-slate-600 ">
          <h5 className="text-center mb-5 text-slate-400">
            Database Development/Management
          </h5>
          {DB_skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
        <div className="w-full max-w-md border p-7 rounded-2xl border-slate-600 ">
          <h5 className="text-center mb-5 text-slate-400">
            Blockchain/AI Development
          </h5>
          {BC_skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
