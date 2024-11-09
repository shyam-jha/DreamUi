import Image from 'next/image';
import i1 from "@/src/root/images/icon.png";

const Intro = () => {
  return (
    <>
      <div className="h-full w-full px-10 py-5 lg:text-xl">
        <h2 className="max-w-7xl sm:pl-4 sm:mx-5 text-xl md:text-5xl font-bold text-neutral-200">
          An Introduction in Order.
        </h2>

        <h4 className="text-base text-zinc-400 mt-5 sm:mx-5 sm:p-5">
          Welcome to <span className="text-xl text-white font-extrabold">Fronchef</span>
        </h4>

        <p className="text-white mt-5 sm:px-5 sm:mx-5">
          Fronchef began as a spark of inspiration among a group of passionate college students. Driven by a shared vision to innovate in the digital space, we embarked on a journey to transform creative ideas into reality.
        </p>

        <div className="w-full mt-8 sm:mx-5 sm:p-5 flex justify-center">
          <Image
            src={i1}
            alt="Fronchef Showcase"
            className="w-full h-auto max-w-7xl rounded-lg shadow-lg"
          />
        </div>

        <p className="text-white mt-5 sm:px-5 sm:mx-5">
          What started as a classroom idea quickly evolved into a full-fledged startup, combining our expertise with our desire to contribute to the open-source community.
        </p>

        <p className="text-white mt-10 sm:px-5 sm:mx-5 text-lg font-semibold">
          Together, we create. Together, we innovate.
        </p>

      </div>
      <span className="mx-auto mt-10 block h-1 w-[95%] bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>

    </>
  );
};

export default Intro;
