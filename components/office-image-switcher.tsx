"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function OfficeImageSwitcher() {
  const images = ["/images/kantor1.png", "/images/kantor2.png"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Al Jadid Office"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 1280px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
