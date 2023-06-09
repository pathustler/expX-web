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
        "https://cdn-icons-png.flaticon.com/512/4500/4500055.png",
      description: "Learn to Create Variables with data",
      day: "5",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/uUUCNw6SbSJDkZW_A6sMER63Or6M878kI1r3Y4eAeMeLvDW9IvneBSwQXYs4fLa_5RQ",
      description: "Example description 2",
      day: "8",
    },
    {
      image:
        "https://cdn.icon-icons.com/icons2/2055/PNG/512/chess_icon_124504.png",
      description: "Example description 3",
      day: "12",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border-gray-300 border rounded-3xl p-4">
        <h1 className="text-2xl font-bold mb-4">{currentDate}</h1>

        <div
          className="max-h-70vh overflow-y-auto flex flex-col gap-2"
          style={{
            maxHeight: "70vh",
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        >
          {items.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt="Icon"
                  className="w-12 h-12 rounded-xl p-1 mr-2"
                />
                <p className="text-sm mr-10 text-gray-600">
                  {item.description}
                </p>
              </div>
              <p className="text-sm whitespace-nowrap font-semibold">
                Day {item.day}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleData;
