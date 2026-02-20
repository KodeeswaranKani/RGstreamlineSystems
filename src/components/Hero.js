import { motion } from "framer-motion";

function Hero({ title, subtitle }) {
  return (
    <div className="hero text-center">
      <div className="container">
        <motion.h1 initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:1}}>
          {title}
        </motion.h1>
        <p className="mt-3">{subtitle}</p>
      </div>
    </div>
  );
}

export default Hero;
