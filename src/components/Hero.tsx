import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import FloatingIcons from "./elements/FloatingIcons";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !buttonsRef.current || !scrollIndicatorRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const titleText = new SplitType(headingRef.current!, {
        types: "chars",
        tagName: "span",
      });

      if (titleText.chars) {
        titleText.chars.forEach((char) => {
          char.addEventListener("mouseenter", () => {
            gsap.to(char, {
              scale: 1.4,
              color: "#9333EA",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          char.addEventListener("mouseleave", () => {
            gsap.to(char, {
              scale: 1,
              color: "inherit",
              duration: 0.3,
              ease: "power2.in",
            });
          });
        });
      }

      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          scrollIndicatorRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center px-4"
    >
      <FloatingIcons />

      <div className="relative z-10">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">Shalini Reddy</span>.
          <br />
          In the World of Static <span className="whitespace-nowrap"> - I Create Dynamic.</span>
        </h1>
        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://github.com/shalini-121", "_blank")}
          >
            <Github className="w-5 h-5 text-white group-hover:text-gray-300" />
            <span className="relative z-10">View on GitHub</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/1aNzo-B9-42ld2oz9J3MHaQMiP2YbuNn0/view?usp=sharing", "_blank")}
          >
            <Download className="w-5 h-5 group-hover:text-primary" />
            <span className="relative z-10">Download CV</span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-sm text-muted-foreground cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        >
          Scroll
        </span>
        <ArrowDown
          className="w-6 h-6 text-primary animate-bounce cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        />
      </div>
    </section>
  );
};

export default Hero;