"use client";

import { motion } from "framer-motion";
import React from "react";
import { timelineData } from "@/app/data";
import SectionHeader from "../SectionHeader";
import AnimatedTimeline from "../timeline/AnimatedTimeline";

const CallForPaper: React.FC = () => {
  return (
    <>
      <SectionHeader
        sectionTitle={"Call for Papers"}
        sectionDescription={
          "Submit your research papers and contribute to the advancement of knowledge in your field."
        }
        sectionButtonText={"Submit Now"}
        sectionButtonHref={""}
      />

      <section className="w-full ">
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-2xl text-primary-accent"
            >
              General Information
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-accent text-white font-semibold py-3 px-6 w-[40%] mx-auto rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Download Call For Paper
            </motion.button>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Research scholars (Internal and External), Faculty members and
              Students are invited submit original and unpublished research
              papers on the following topics but not limited to
            </motion.p>
          </div>

          <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-2xl text-primary-accent"
            >
              Key Dates
            </motion.h1>
            <AnimatedTimeline timelineData={timelineData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CallForPaper;
