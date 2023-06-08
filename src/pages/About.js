import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            Hi, I'm Nikhil Kumar Thota, a passionate and dedicated Computer Science student pursuing my Bachelor's degree. I have a strong foundation in HTML, CSS, JavaScript, React JS, and Java, along with experience in building web applications.

            </p>
            <p>
              <h3> Work Experience: </h3>
              <ul>

              <li>
                  <span>Open Source Contributor - GSsoC'23</span>
                  <span> - </span>  <span>present</span>
                </li>
                <li>
                  <span>Front-end Intern - Zemoso</span>
                  <span> - </span>  <span>Nov 2022 - Feb 2023</span>
                </li>
                
              </ul>
            </p>
            <h3>------------------------------------------------------</h3>
            
            <p>
            I am currently seeking new challenges and opportunities to grow as a developer. If you are looking for a motivated and dedicated individual who can bring value to your team, I would love to connect and explore potential collaborations.

            </p>
            <h3>------------------------------------------------------</h3>

            <p>
            Feel free to reach out to me at <a href="mailto:nikhilkumarnikky980@gmail.com">nikhilkumarnikky17@gmail.com</a>

            </p>
            <p>
            <h3>Thank you for visiting my portfolio!</h3>
            </p>
            <h3>------------------------------------------------------</h3>

            <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            <p>
              Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
              Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus
              arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.
            </p>
            <p>
              Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
            </p>
            <p>
              Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
              pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
              suscipit leo.
            </p>
            <h2>Sub-header</h2>
            <p>
              Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
              fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam
              id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
              faucibus, vehicula metus ac, interdum nibh. Curabitur vitae
              convallis ligula. Integer ac enim vel felis pharetra laoreet.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque hendrerit ac augue quis pretium.
            </p>
            <p>
              Morbi ut scelerisque nibh. Integer auctor, massa non dictum
              tristique, elit metus efficitur elit, ac pretium sapien nisl nec
              ante. In et ex ultricies, mollis mi in, euismod dolor.
            </p>
            <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
