import { useEffect, useState } from "react";
import { useInView as useFramerInView } from "framer-motion";

export function useInView(ref, options = {}) {
    const isInView = useFramerInView(ref, {
        once: true,
        margin: "-20% 0px -20% 0px",
        ...options
    });

    return isInView;
} 