import Display from "@/components/root/homepage/Dis";
import { FeaturesSectionDemo } from "@/components/root/homepage/Fea";
import Hero from "@/components/root/homepage/Hero";

const Home = () => {
    return (
        <div className="h-full w-full bg-black-100 pb-20">
            <Hero />
            <Display />
            <FeaturesSectionDemo />
        </div>
    );
};

export default Home;