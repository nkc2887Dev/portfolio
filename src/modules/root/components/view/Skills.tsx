import React from "react";

const data: {
  title: string;
  color?: string;
  backgroundColor: string;
  radiusColor: string;
  skills: {
    name: string;
    color?: string;
    backgroundColor: string;
    radiusColor: string;
  }[];
}[] = [
  {
    title: "Frontend",
    color: "#FF6F91", // Vibrant Pink
    backgroundColor: "#FFF0F6", // Light Pink
    radiusColor: "#FFA6C1", // Soft Pink
    skills: [
      {
        name: "React.Js",
        color: "#61DAFB",
        backgroundColor: "#E3F8FF", // Lighter React Blue
        radiusColor: "#A0E7FF",
      },
      {
        name: "Next.js",
        color: "#000000",
        backgroundColor: "#FFFFFF",
        radiusColor: "#DDDDDD",
      },
      {
        name: "HTML",
        color: "#FF7F50", // Coral
        backgroundColor: "#FFF3E0", // Light Coral
        radiusColor: "#FFAB91",
      },
      {
        name: "CSS",
        color: "#6495ED", // Cornflower Blue
        backgroundColor: "#EBF2FA", // Light Blue
        radiusColor: "#A3C5F7",
      },
      {
        name: "Tailwind",
        color: "#38B2AC",
        backgroundColor: "#E0FFFA", // Mint Cream
        radiusColor: "#9EEFE0",
      },
      {
        "name": "Bootstrap",
        "color": "#7952B3",  // Bootstrap Purple
        "backgroundColor": "#EDE9FE",  // Soft Lavender
        "radiusColor": "#BFA2DB"  // Light Purple
      }
    ],
  },
  {
    title: "Backend",
    color: "#7C4DFF", // Deep Violet
    backgroundColor: "#F3E5FF", // Lavender
    radiusColor: "#B388FF", // Soft Violet
    skills: [
      {
        name: "Node.js",
        color: "#FFFFFF",
        backgroundColor: "#00C853", // Bright Green
        radiusColor: "#69F0AE",
      },
      {
        name: "Express.js",
        color: "#FFFFFF",
        backgroundColor: "#455A64", // Blue Gray
        radiusColor: "#90A4AE",
      },
      {
        "name": "Nest.js",
        "color": "#FFFFFF",  // White text for contrast
        "backgroundColor": "#E0234E",  // Nest.js Primary Red
        "radiusColor": "#F48FB1"  // Soft Pink-Red for depth
      }
      
    ],
  },
  {
    title: "Database",
    color: "#00BFA5", // Turquoise
    backgroundColor: "#E0F7FA", // Light Turquoise
    radiusColor: "#80DEEA", // Soft Turquoise
    skills: [
      {
        name: "MongoDB",
        color: "#FFFFFF",
        backgroundColor: "#43A047", // Green
        radiusColor: "#81C784",
      },
      {
        "name": "PostgreSQL",
        "color": "#FFFFFF",  // White text for contrast
        "backgroundColor": "#336791",  // PostgreSQL Blue
        "radiusColor": "#6C91C2"  // Soft Blue for depth
      }
      
    ],
  },
  {
    title: "Devops",
    color: "#FF6D00", // Vivid Orange
    backgroundColor: "#FFF8E1", // Light Yellow
    radiusColor: "#FFD180", // Soft Orange
    skills: [
      {
        name: "Docker",
        color: "#FFFFFF",
        backgroundColor: "#1E88E5", // Blue
        radiusColor: "#90CAF9",
      }
    ],
  },
];

const Skills = () => {
  return (
    <>
      <div className="text-2xl font-bold">
        <h2 className=" rounded p-4">What I Know</h2>
      </div>
      <div className="flex flex-wrap justify-center text-white">
        {data.map((skillGroup) => (
          <div
            key={skillGroup.title}
            className="flex shrink items-center justify-evenly p-4 m-4"
          >
            <div
              className="shrink grow flex flex-col content-start items-center justify-center p-8 shadow-smooth shadow-smooth-hover rounded-lg"
              style={{
                color: skillGroup.color,
                border: `5px solid ${skillGroup.radiusColor}`,
              }}
            >
              <div className="font-bold pb-8 text-2xl">
                <h2>{skillGroup.title}</h2>
              </div>
              <div className="flex flex-wrap justify-center align-middle">
                {skillGroup.skills.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className={`flex flex-wrap rounded-md p-2 m-1 font-bold`}
                    style={{
                      color: skill.color,
                      background: skill.backgroundColor,
                      border: `5px solid ${skill.radiusColor}`,
                    }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
