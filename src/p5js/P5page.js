import React from 'react';
import './p5page.css'
import { motion } from 'framer-motion'
import Feedback from '../feedback/Feedback';
import ReportsList from '../reports_list/ReportsList';
import { variants } from '../framer motion/variants';

const P5page = () => {

    return (
        <motion.div className="p5page"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit">

            <div className="todo text-center">
                <h4 className="todo__title">  <span role="img" aria-label="jsx-a11y/accessible-emoji">🚀</span> In the next update  <span role="img" aria-label="jsx-a11y/accessible-emoji">🚀</span></h4>
                <h5>Ever tried making art with algorithm !! No? </h5>
                <h5>P5 js implementations coming soon :)</h5>
                <h5>Full Screen Mode</h5>
                <h5>Art with recursion</h5>
                <h5>Add <span role="img" aria-label="jsx-a11y/accessible-emoji">🎵</span> during the sorting </h5>
                <h5>implement other Sorting and Searching algorithms</h5>
                <h5>About me <span role="img" aria-label="jsx-a11y/accessible-emoji">👦</span> and this project</h5>
                <h5>Populate Articles section with something more interesting <span role="img" aria-label="jsx-a11y/accessible-emoji">🚀</span></h5>
            </div>
            <Feedback />
            <ReportsList />

        </motion.div>
    );
};

export default P5page;