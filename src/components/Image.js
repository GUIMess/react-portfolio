import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Image({ src, alt, className }) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative">
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
            )}
            <motion.img
                src={src}
                alt={alt}
                className={className}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}