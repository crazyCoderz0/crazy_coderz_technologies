export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/svg+xml";

export default function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#246bff" />
          <stop offset="100%" stopColor="#00b8a9" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#g)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
      >
        CC
      </text>
    </svg>
  );
}
