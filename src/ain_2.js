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
                <h1>Finally</h1>
            </li>
            <li>
                <p>디자인과 코딩을 모두 해보고 싶은 사람</p>
            </li>
            <li>
                <p>시각적으로 바로 결과물이 드러나는 것을 좋아하는 사람</p>
            </li>
        </motion.div>
    );
}

export default AnimatedComponent;