type BrandLogoProps = {
  inverted?: boolean;
};

export default function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full ${
          inverted ? "bg-[#f8fafc] text-[#172554]" : "bg-[#c75b3a] text-white"
        }`}
      >
        <span className="absolute h-7 w-7 rotate-45 rounded-[6px] border-2 border-current/45" />
        <span className="absolute h-3 w-3 rotate-45 rounded-[3px] bg-current" />
        <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-current/60" />
        <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-current/60" />
        <span
          className={`absolute bottom-2 right-2 h-2 w-2 rounded-full ${
            inverted ? "bg-[#c75b3a]" : "bg-[#bef264]"
          }`}
        />
      </span>
      <span className="leading-none">
        <span
          className={`block whitespace-nowrap text-base font-black tracking-tight sm:text-xl ${
            inverted ? "text-white" : "text-[#17211f]"
          }`}
        >
          CrystalTourAndTravel
        </span>
        <span
          className={`mt-1 block text-[10px] font-black uppercase tracking-[0.2em] ${
            inverted ? "text-white/65" : "text-[#64748b]"
          }`}
        >
          Plan your way
        </span>
      </span>
    </span>
  );
}
