import { motion } from "framer-motion";

const CustomMotion = ({ children }: any) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {children}
        </motion.div>
    );
};

export default CustomMotion;
