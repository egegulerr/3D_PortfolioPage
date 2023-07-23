import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[-20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I come from Turkey and studied Wirtschaftsinformatik at TUM. I have
        worked as a software engineer in Outbank Gmbh for 2 years and in Exo-IT
        Solutions for 4 months. During my studies I got chance to participate
        different projects and worked with some frameworks like Pandas, Numpy,
        Tenserflow, ThreeJS, REST, React, Angular, Javascript, TypeScript, gRPC,
        WebSockets. At my last project I was responsible for building Database
        and Webscrabing microservices. There I worked with databases such as
        MongoDB. I got 1.7 from my thesis. The title of the thesis is 'Comparing
        different network architectures and serialization methods in Federated
        Machine Learning in respect to their energy consumption'. A part from
        the Univesity, I wrote Python scripts to parse user specific bank datas
        using APIs in Outbank Gmbh. I did code reviews, analyze HAR files using
        Proxyman, PostMan. Now, at Exo-IT Solutions, I am writing Java code in
        backend, typescript in frontend. Also I am using PostgresSQL as
        database. I do love my job and beeing an software engineer. I think that
        is my strength. I am a person, who is a quick learner, eager to learn
        new technoligies and egaer to develop my skills one step further.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
