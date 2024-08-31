import { WobbleCardDemo } from "@/components/root/aboutpage/AboutHeader";
import Intro from "@/components/root/aboutpage/Intro"
import MeetTheTeam from "@/components/root/aboutpage/Team";

const Aboutpage = () => {
  return (
    <div className="h-full w-full bg-black-100">
      <WobbleCardDemo />
      <Intro />
      <MeetTheTeam />

    </div>
  );
};

export default Aboutpage; 