import React from "react";
import skillsData from "./skillStats.json";

interface Skill {
  skillId: string;
  icon: string;
  title: string;
  builder: string;
  tags: string[];
  duration: string;
  currentDay: number;
  masteryDate: string;
  masteryReward: string;
}

interface SkillStatsProps {
  skillId: string;
}

const SkillStats: React.FC<SkillStatsProps> = ({ skillId }) => {
  const skill: Skill | undefined = skillsData.find(
    (skill) => skill.skillId === skillId
  );

  if (!skill) {
    return <div>No data found for skill ID: {skillId}</div>;
  }

  const tagColors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"];

  return (
    <div className="p-4 pl-14 border-2 border-gray-300 rounded">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <img src={skill.icon} alt="Skill Icon" className="w-8 h-8" />
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
          <p className="text-gray-600 mb-2">By {skill.builder}</p>
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        {skill.tags.map((tag, index) => (
          <div
            key={index}
            className={`rounded-full px-2 py-1 mr-2 mb-2 text-sm text-white ${tagColors[index % tagColors.length]}`}
          >
            {tag.toUpperCase()}
          </div>
        ))}
      </div>
      <h3 className="text-lg font-semibold mb-1">Course Duration</h3>
      <p className="text-gray-600 mb-2">{skill.duration}</p>
      <h3 className="text-lg font-semibold mb-1">Current</h3>
      <p className="text-gray-600 mb-2">Day {skill.currentDay}</p>
      <h3 className="text-lg font-semibold mb-1">Expected Mastery Date</h3>
      <p className="text-gray-600 mb-2">{skill.masteryDate}</p>
      <h3 className="text-lg font-semibold mb-1">Mastery Reward</h3>
      <p className="text-blue-500">{skill.masteryReward}</p>
    </div>
  );
};

export default SkillStats;
