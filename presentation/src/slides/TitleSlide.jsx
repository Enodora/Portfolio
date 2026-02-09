import SlideLayout from '../components/SlideLayout';
import { motion } from 'framer-motion';
import './TitleSlide.css';

export default function TitleSlide() {
  return (
    <SlideLayout className="title-slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="title-name">白柿 有啓</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="title-subtitle">任天堂 面接用プレゼンテーション</h2>
      </motion.div>
    </SlideLayout>
  );
}
