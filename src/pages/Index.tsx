import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import BlogSection from "@/components/Blogs";
import AboutTeaser from "@/components/elements/AboutTeaser";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Project />
      <BlogSection />
      <AboutTeaser />
    </div>
  );
};

export default Index;