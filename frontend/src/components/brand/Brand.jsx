export default function Brand({ className = "" }) {
  return (
    <a className={`brand ${className}`} href="#" aria-label="Orbit home">
      <span className="brand-mark">
        <span />
      </span>
      <span>
        orbit<span className="brand-period">.</span>
      </span>
    </a>
  );
}
