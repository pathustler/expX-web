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
}

interface SkillStatsProps {
  skillId: string;
}

const SkillStats: React.FC<SkillStatsProps> = ({ skillId }) => {
  const skill: Skill | undefined = skillsData.find((skill) => skill.skillId === skillId);

  if (!skill) {
    return <div>No data found for skill ID: {skillId}</div>;
  }

  return (
    <div>
      <h1>Skill Stats</h1>
      <h2>{skill.title}</h2>
      <p>Builder: {skill.builder}</p>
      <p>Tags: {skill.tags.join(", ")}</p>
      <p>Duration: {skill.duration}</p>
      <p>Current Day: {skill.currentDay}</p>
      <p>Mastery Date: {skill.masteryDate}</p>
    </div>
  );
};

export default SkillStats;
