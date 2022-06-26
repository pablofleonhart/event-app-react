export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="#26c6ed"
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <ellipse
        cx="128"
        cy="128"
        fill="none"
        stroke="#26c6ed"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="44"
        ry="116"
        transform="rotate(-45 128.01 127.977)"
      ></ellipse>
      <ellipse
        cx="128"
        cy="128"
        fill="none"
        stroke="#26c6ed"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="116"
        ry="44"
        transform="rotate(-45 128.01 127.977)"
      ></ellipse>
      <circle cx="128" cy="128" r="12"></circle>
    </svg>
  );
}