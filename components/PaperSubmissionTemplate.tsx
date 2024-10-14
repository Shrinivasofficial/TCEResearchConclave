import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PaperSubmissionTemplate: React.FC = () => {
  return (
    <>
      <div className="mt-5 p-1 sm:p-6 md:pt-8 lg:pt-12 rounded-lg ">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Paper Submission Template
        </h2>

        <div className="mt-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start bg-white p-4 rounded-lg shadow"
          >
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <p className="text-gray-600">
              Read through Author Guidelines carefully & proceed with
              submission.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start bg-white p-4 rounded-lg shadow"
          >
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <p className="text-gray-600">
              Paper should not exceed more than 6 pages.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-start bg-white p-4 rounded-lg shadow"
          >
            <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
            <p className="text-gray-600">
              Make sure to prepare the paper in the format prescribed. Click the
              link below to download the format.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PaperSubmissionTemplate;
