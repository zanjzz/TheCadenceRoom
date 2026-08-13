type RoomFurnitureProps = {
  className?: string;
};

/**
 * Flat neo-brutalist "room" props that pop up along the bottom edge of the hero.
 * Stroke/fill use the hero's accent-foreground ink so they read on the cyan frame.
 */
export default function RoomFurniture({ className }: RoomFurnitureProps) {
  return (
    <div className={`room-furniture ${className ?? ""}`} aria-hidden="true">
      <svg className="room-furniture__item room-furniture__item--lamp" viewBox="0 0 90 190" fill="none">
        <path d="M20 34 45 6l25 28z" className="rf-fill-dark" strokeWidth={6} />
        <path d="M45 34v128" strokeWidth={6} />
        <path d="M22 176h46l-6-14H28z" className="rf-fill-light" strokeWidth={6} />
      </svg>

      <svg className="room-furniture__item room-furniture__item--shelf" viewBox="0 0 130 170" fill="none">
        <rect x="6" y="10" width="118" height="150" strokeWidth={6} className="rf-fill-light" />
        <path d="M6 60h118M6 110h118" strokeWidth={6} />
        <rect x="20" y="22" width="14" height="32" className="rf-fill-dark" strokeWidth={5} />
        <rect x="40" y="26" width="14" height="28" className="rf-fill-accent" strokeWidth={5} />
        <rect x="20" y="76" width="40" height="28" className="rf-fill-accent" strokeWidth={5} />
        <rect x="76" y="72" width="14" height="32" className="rf-fill-dark" strokeWidth={5} />
      </svg>

      <svg className="room-furniture__item room-furniture__item--chair" viewBox="0 0 170 140" fill="none">
        <path d="M14 40a16 16 0 0 1 16-16h110a16 16 0 0 1 16 16v52H14z" className="rf-fill-light" strokeWidth={6} />
        <path d="M14 66h142" strokeWidth={6} />
        <path d="M30 92v30M140 92v30" strokeWidth={6} />
      </svg>

      <svg className="room-furniture__item room-furniture__item--table" viewBox="0 0 110 120" fill="none">
        <rect x="6" y="26" width="98" height="20" className="rf-fill-dark" strokeWidth={6} />
        <path d="M22 46v56M88 46v56" strokeWidth={6} />
        <path d="M22 74h66" strokeWidth={6} />
      </svg>

      <svg className="room-furniture__item room-furniture__item--plant" viewBox="0 0 110 170" fill="none">
        <path d="M55 100V52" strokeWidth={6} />
        <path d="M55 62c-24 0-30-14-30-26 16 0 30 8 30 26z" className="rf-fill-accent" strokeWidth={6} />
        <path d="M55 74c24 0 32-16 32-30-18 0-32 10-32 30z" className="rf-fill-accent" strokeWidth={6} />
        <path d="M28 100h54l-8 60H36z" className="rf-fill-light" strokeWidth={6} />
      </svg>

      <svg className="room-furniture__item room-furniture__item--speaker" viewBox="0 0 90 150" fill="none">
        <rect x="8" y="12" width="74" height="128" className="rf-fill-dark" strokeWidth={6} />
        <circle cx="45" cy="52" r="20" className="rf-fill-accent" strokeWidth={6} />
        <circle cx="45" cy="108" r="11" className="rf-fill-light" strokeWidth={6} />
      </svg>
    </div>
  );
}
