export const ExampleComponent = `
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import VideoCar from "./VideoCar";

const Highlights = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to('#title', { opacity: 1, y: 0 });
            gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full p-4 bg-zinc"
      ref={sectionRef}
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="py-5" style={{ opacity: 0, transform: 'translateY(-20px)' }}>Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link" style={{ opacity: 0, transform: 'translateY(-20px)' }}>
              Watch the film
            </p>
            <p className="link" style={{ opacity: 0, transform: 'translateY(-20px)' }}>
              Watch the event
            </p>
          </div>
        </div>
        <VideoCar />

      </div>
    </section>
  );
};

export default Highlights;
`;
