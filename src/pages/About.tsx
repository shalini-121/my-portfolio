import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  CalendarIcon,
  Building,
  Award,
  BookOpen,
  Star,
  Trophy,
  MapPin,
  Timer,
} from "lucide-react";
import educationData from "@/data/education";
import workData from "@/data/experience";

const AnimatedCharacter = ({
  character,
  index,
}: {
  character: string;
  index: number;
}) => {
  return (
    <motion.span
      className="inline-block cursor-pointer"
      whileHover={{
        scale: 1.2,
        color: "#ffffff",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
};

const AnimatedGradientCharacter = ({
  character,
  index,
}: {
  character: string;
  index: number;
}) => {
  return (
    <motion.span
      className="inline-block cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-500"
      whileHover={{
        scale: 1.2,
        backgroundImage: "linear-gradient(to right, #a78bfa, #ec4899)",
        textShadow: "0 0 12px rgba(167, 139, 250, 0.8)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  );
};

const AboutCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card className="bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300">
    <CardContent className="p-6">
      <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const TimelineItem = ({
  icon: Icon,
  title,
  subtitle,
  details,
  content,
}: any) => (
  <Card className="relative bg-secondary/50 backdrop-blur-sm hover:bg-secondary/60 transition-all duration-300">
    <div className="absolute left-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[34px] top-6" />
    <CardHeader>
      <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </CardTitle>
      <CardDescription>
        <div className="space-y-2 mt-2">{details}</div>
      </CardDescription>
    </CardHeader>
    <CardContent>{content}</CardContent>
  </Card>
);

const Timeline = ({
  title,
  icon: Icon,
  data,
  renderDetails,
  renderContent,
}: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2
      className="text-3xl font-heading font-bold mb-8 flex items-center gap-2"
      whileHover={{
        scale: 1.02,
        color: "#a78bfa",
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <motion.div
        whileHover={{
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        <Icon className="text-primary w-8 h-8" />
      </motion.div>
      {title}
    </motion.h2>
    <div className="relative">
      <div className="absolute left-0 w-0.5 h-full bg-primary/20" />
      <div className="space-y-8 pl-6">
        {data.map((item: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TimelineItem
              icon={title === "Education" ? BookOpen : Building}
              title={item.school || item.company}
              subtitle={item.degree || item.position || ""}
              details={renderDetails(item)}
              content={renderContent(item)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => {
  const aboutText = "About";
  const meText = "Me";

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-heading font-bold mb-12 text-center flex flex-wrap justify-center"
          >
            <div className="mr-3">
              {aboutText.split("").map((char, index) => (
                <AnimatedCharacter
                  key={index}
                  character={char}
                  index={index}
                />
              ))}
            </div>
            <div>
              {meText.split("").map((char, index) => (
                <AnimatedGradientCharacter
                  key={index}
                  character={char}
                  index={index}
                />
              ))}
            </div>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <AboutCard
              title="Who I Am"
              description="B.Tech Information Technology student specializing in Data Science, with a CGPA of 8.9. Proficient in Java, machine learning, and data analysis, with a keen interest in transforming raw data into intelligent, actionable insights. I’m a data-driven developer fueled by curiosity, innovation, and a passion for solving real-world problems through smart, scalable solutions. I thrive on continuous learning, collaboration, and creating meaningful impact through technology."
            />
            <AboutCard
              title="What I Do"
              description="I specialize in turning complex data into intelligent, actionable solutions. With a strong foundation in Data Science, Machine Learning, and Java, I build predictive models, extract meaningful insights, and solve real-world problems through data. I'm passionate about analyzing patterns, optimizing systems, and creating smart, scalable solutions that drive impact. As a data-driven developer, I thrive at the intersection of logic, creativity, and technology."
            />
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Timeline
            title="Education"
            icon={GraduationCap}
            data={educationData}
            renderDetails={(edu: any) => (
              <>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {edu.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  GPA: {edu.gpa}
                </div>
              </>
            )}
            renderContent={(edu: any) => (
              <>
                <p className="font-medium mb-4">{edu.degree}</p>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {edu.achievements.map((achievement: string, i: number) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </>
            )}
          />
          <Timeline
            title="Work Experience"
            icon={Briefcase}
            data={workData}
            renderDetails={(work: any) => (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{work.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{work.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Timer className="w-4 h-4" />
                  <span>{work.position}</span>
                </div>
              </div>
            )}
            renderContent={(work: any) => (
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {work.responsibilities.map((responsibility: string, i: number) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
