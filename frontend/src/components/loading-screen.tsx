import { motion } from 'motion/react';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="starGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="40%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#4c1d95" />
      </linearGradient>
      <linearGradient id="starEdge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
      </linearGradient>
      <filter id="starGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g filter="url(#starGlow)">
      <path
        d="M50 5 C50 35, 65 50, 95 50 C65 50, 50 65, 50 95 C50 65, 35 50, 5 50 C35 50, 50 35, 50 5 Z"
        fill="url(#starGrad)"
      />
      <path
        d="M50 5 C50 35, 65 50, 95 50 C65 50, 50 65, 50 95 C50 65, 35 50, 5 50 C35 50, 50 35, 50 5 Z"
        fill="none"
        stroke="url(#starEdge)"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

const LightningIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 160" className={className}>
    <defs>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f3e8ff" />
        <stop offset="40%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#3b0764" />
      </linearGradient>
      <linearGradient id="boltEdge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
      </linearGradient>
      <filter id="boltGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g filter="url(#boltGlow)">
      <path
        d="M65 5 L15 85 L48 85 L30 155 L90 65 L55 65 Z"
        fill="url(#boltGrad)"
      />
      <path
        d="M65 5 L15 85 L48 85 L30 155 L90 65 L55 65 Z"
        fill="none"
        stroke="url(#boltEdge)"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#070708] flex flex-col items-center justify-center overflow-hidden relative select-none">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[60vw] h-[50vh] bg-[#5c24b6] opacity-[0.07] blur-[100px] rounded-[100%] pointer-events-none" />

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center w-full max-w-[1400px] px-6"
      >
        {/* Headline Section */}
        <div className="relative w-full flex flex-col items-center justify-center mt-12 md:mt-0">
          
          {/* Top-Left Star Icon */}
          <motion.div
            animate={{ y: [-4, 4, -4], rotate: [-12, -8, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 left-[3%] sm:-top-8 sm:left-[8%] md:-top-12 md:left-[10%] lg:-top-16 lg:left-[8%] xl:left-[12%] w-16 h-16 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] z-20 drop-shadow-lg"
          >
            <StarIcon className="w-full h-full object-contain" />
          </motion.div>

          {/* Main Metallic Typography */}
          <h1 className="text-[15vw] sm:text-[13vw] md:text-[115px] lg:text-[150px] xl:text-[170px] font-black uppercase leading-[0.88] tracking-[-0.03em] text-center flex flex-col drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] from-10% via-[#e4e4e7] via-50% to-[#52525b] to-90%">
              Software
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] from-10% via-[#e4e4e7] via-50% to-[#52525b] to-90%">
              Engineer
            </span>
          </h1>

          {/* Bottom-Right Lightning Icon */}
          <motion.div
            animate={{ y: [4, -4, 4], rotate: [8, 12, 8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 right-[0%] sm:-bottom-6 sm:right-[2%] md:-bottom-12 md:right-[2%] lg:-bottom-20 lg:-right-[2%] xl:-right-[1%] w-16 h-24 md:w-24 md:h-36 lg:w-36 lg:h-52 z-20 drop-shadow-lg"
          >
            <LightningIcon className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* Divider and Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 md:mt-28 flex flex-col items-center gap-6"
        >
          {/* Horizontal Line Segment */}
          <div className="flex h-[2px] w-[140px] md:w-[180px] rounded-full overflow-hidden opacity-90 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
            <div className="w-[45%] h-full bg-[#8b5cf6]"></div>
            <div className="w-[55%] h-full bg-[#27272a]"></div>
          </div>

          {/* Widely Tracked Subtext */}
          <p className="text-[8px] sm:text-[10px] md:text-[12px] font-semibold tracking-[0.4em] md:tracking-[0.45em] text-[#a1a1aa] uppercase text-center pl-2">
            Building <span className="text-[#a87cff]">Solutions.</span> Creating <span className="text-[#a87cff]">Impact.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
