import React from "react";
import skillsData from "../../static/mockdata/skillStats.json";
import '../../static/css/skillStats.css'
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

  const tagColors = ["bg-premium", "bg-verified", "bg-normal",];

  return (
    <div className="skillstatcontainer my-auto">


    <div>
      <div className="imagediv">
            <img src={skill.icon} alt="Skill Icon" className="imageicon" />
        </div>
    </div>


    <div className="contentcontainer">
      <div className="contentinner">
      <div>
        <div className="flex items-center mb-4">
          <div>
            <h2 className="mainskilltitle">{skill.title}</h2>
            <p className="devname">By {skill.builder}</p>
          </div>
        </div>
        <div className="flex flex-wrap mb-2">
          {skill.tags.map((tag, index) => (
            <div
              key={index}
              className={`rounded-full px-2 py-1 mr-2 mb-2 text-xs text-white ${tagColors[index % tagColors.length]}`}
            >
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
      </div>


      <div>
      <h3 className="subtitles">Course Duration</h3>
      <p className="content">{skill.duration}</p>
      </div>
      <div className="sm:hidden md:hidden lg:block xl:block 2xl:block">
      <h3 className="subtitles">Current Day</h3>
      <p className="content">{skill.currentDay}</p>
      </div>
      <div>
        <h3 className="subtitles ">Expected Mastery Date</h3>
        <p className="content">{skill.masteryDate}</p>
      </div>
      
      <div>
         <h3 className="subtitles">Mastery Reward</h3>
         <span className="flex flex-row items-center gap-2">
          <img className="w-5 h-5" src="https://cdn.discordapp.com/attachments/1100745859664191558/1110881341538582619/SOLIDUS.png"></img>
          <p className="rewardcontent">{skill.masteryReward}</p>
         </span>
        
      </div>
      </div>
    </div>
    </div>
  );
};

export default SkillStats;
