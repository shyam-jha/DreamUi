import { FeaturesSectionDemo } from "@/components/root/homepage/Feature";
import Footer from "@/components/root/homepage/Footer";
import { Header } from "@/components/root/homepage/Header";
import { Testimonials } from "@/components/root/homepage/Testimonial";

const Home = () => {
    return (
        <>
            <Header />
            <FeaturesSectionDemo />
            <Testimonials />
            <Footer />

        </>
    );
};

export default Home;