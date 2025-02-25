const judges = [
  {
    name: "Zaza Pachulia",
    role: "NBA Champion, Director of Investments for Golden State Warriors",
    imageSrc: "/images/judges/zaza.png",
  },
  {
    name: "Furqan Rydhan",
    role: "CEO, Founders, Inc & thirdweb; Prev Founders/CTO Applovin (+$30B IPO)",
    imageSrc: "/images/judges/furqan.png",
  },
  {
    name: "Suman Talukdar",
    role: "Founder & GP, AiSprouts; Over $7B in returns",
    imageSrc: "/images/judges/suman.png",
  },
  {
    name: "Ivan Porollo",
    role: "Founder, Cerebral Valley",
    imageSrc: "/images/judges/ivan.png",
  },
];

export const Judges = () => {
  return (
    <div id="partners" className="w-full flex flex-col justify-center items-center pb-20 lg:py-20">
      <img className="w-72 h-20" src="/images/judges.png" alt="" />
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 gap-x-10 mt-12 lg:mt-20">
        {judges.map((judge, index) => (
          <div key={index} className="flex flex-col">
            <img
              className="w-60 h-60 rounded-xl"
              src={judge.imageSrc}
              alt={judge.name}
            />
            <div className="uppercase text-white text-2xl ibm-400 mt-2 lg:mt-4">
              {judge.name}
            </div>
            <div className="uppercase text-[#FFFFFF99] ibm-400 text-sm max-w-[15rem] mt-1 lg:mt-2">
              {judge.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
