import "../../static/css/calendar.css";

const ScheduleData = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const items = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
      description: "Learn to Create Variables with data",
      day: "5",
    },
    {
      image:
      'https://images.saatchiart.com/saatchi/877178/art/3855212/2925095-HSC00001-7.jpg',
      description: "Example description 2",
      day: "8",
    },
    {
      image:
      'https://assets.hongkiat.com/uploads/kitchen-cooking-icon-sets/cooking-stuff-icon.jpg',
      description: "Example description 3",
      day: "12",
    },{
      image:
      'https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg',
      description: "Example description 3",
      day: "12",
    },{
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
      description: "Learn to Create Variables with data",
      day: "5",
    },
    {
      image:
      'https://images.saatchiart.com/saatchi/877178/art/3855212/2925095-HSC00001-7.jpg',
      description: "Example description 2",
      day: "8",
    },
    {
      image:
      'https://assets.hongkiat.com/uploads/kitchen-cooking-icon-sets/cooking-stuff-icon.jpg',
      description: "Example description 3",
      day: "12",
    },{
      image:
      'https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg',
      description: "Example description 3",
      day: "12",
    }
  ];

  return (
    <div className="schedule-container">
        <h1 className="header">{currentDate}</h1>

        <div
          className="max-h-70vh overflow-y-auto noscrollbar flex flex-col gap-2 w-full ">
          {items.map((item, index) => (
            <button className="flex items-center w-full justify-between p-3 rounded-2xl hover:bg-slate-50" key={index}>
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt="Icon"
                  className="w-12 h-12 rounded-2xl border-2 border-gray-50 p-1 mr-2"
                />
                <p className="itemdesc">
                  {item.description}
                </p>
              </div>
              <p className="daytag">
                Day {item.day}
              </p>
            </button>
          ))}
        </div>


      </div>
  );
};

export default ScheduleData;
