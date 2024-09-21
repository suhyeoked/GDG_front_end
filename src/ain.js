import React from 'react';
import {motion} from 'framer-motion';

function AnimatedComponent() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: false
            }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                y: {
                    duration: 1
                }
            }}>

            <li>
                <h1>Front-End란?</h1>
            </li>
            <li>
                <p>사용자 인터페이스(UI) 구현</p>
            </li>
            <li>
                <p>사용자 경험(UX) 최적화</p>
            </li>

        </motion.div>
    );
}

export default AnimatedComponent;