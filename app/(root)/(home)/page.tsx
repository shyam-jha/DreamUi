import { FeaturesSectionDemo } from "@/components/root/homepage/Feature";
import { Header } from "@/components/root/homepage/Header";
import { Testimonials } from "@/components/root/homepage/Testimonial";

const Home = () => {
    return (
        <>
            <Header />
            <FeaturesSectionDemo />
            <Testimonials />

        </>
    );
};

export default Home;