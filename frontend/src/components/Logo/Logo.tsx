import './Logo.css';

/*
 * Inline version of assets/logo.svg.
 * Colors come from CSS classes (Logo.css) that use the :root variables,
 * so changing --primary, --background or --accent updates the logo too.
 */
function Logo() {
  return (
    <svg
      className="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 500"
      role="img"
      aria-label="MoraesLab logo"
    >
      <defs>
        {/* Reusable shapes */}
        <path
          id="logo-flask"
          d="M170,160 V245 L105,370 Q93,395 122,395 H278 Q307,395 295,370 L230,245 V160"
        />
        <path
          id="logo-spark"
          d="M0,-18 Q2,-2 18,0 Q2,2 0,18 Q-2,2 -18,0 Q-2,-2 0,-18 Z"
        />
      </defs>

      {/* Background arch */}
      <path className="logo-bg" d="M0,500 V200 A200,200 0 0 1 400,200 V500 Z" />

      {/* Distant stars (small dots) */}
      <g className="logo-fill">
        <circle cx="120" cy="95" r="2.5" />
        <circle cx="270" cy="70" r="2" />
        <circle cx="340" cy="210" r="3" />
        <circle cx="60" cy="250" r="2" />
        <circle cx="355" cy="420" r="2.5" />
        <circle cx="45" cy="440" r="3" />
        <circle cx="150" cy="460" r="2" />
        <circle cx="300" cy="465" r="2" />
        <circle cx="245" cy="120" r="2" />
        <circle cx="95" cy="330" r="2" />
      </g>

      {/* Sparkle stars */}
      <g className="logo-fill">
        <use href="#logo-spark" transform="translate(84 150) scale(.8)" />
        <use href="#logo-spark" transform="translate(352 245) scale(.5)" />
        <use href="#logo-spark" transform="translate(95 440) scale(.45)" />
        <use href="#logo-spark" transform="translate(150 60) scale(.4)" />
        <use href="#logo-spark" transform="translate(345 430) scale(.6)" />
        <use href="#logo-spark" transform="translate(310 110)" />
      </g>

      {/* Orbital ring: back half (faded, hidden behind the flask) */}
      <ellipse
        className="logo-ring"
        cx="200"
        cy="330"
        rx="160"
        ry="38"
        transform="rotate(-14 200 330)"
        strokeWidth="8"
        opacity=".55"
      />

      {/* Flask (filled with background color to hide the ring behind it) */}
      <use
        className="logo-flask"
        href="#logo-flask"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        className="logo-line"
        d="M150,160 H250"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Stars inside the flask */}
      <g className="logo-fill">
        <use href="#logo-spark" transform="translate(200 335) scale(.55)" />
        <use href="#logo-spark" transform="translate(165 365) scale(.3)" />
        <circle cx="238" cy="365" r="3" />
        <circle cx="200" cy="280" r="2.5" />
      </g>

      {/* Orbital ring: front half */}
      <path
        className="logo-ring"
        d="M40,330 A160,38 0 0 0 360,330"
        transform="rotate(-14 200 330)"
        strokeWidth="8"
      />

      {/* Smoke */}
      <path
        className="logo-line"
        d="M200,140 C176,120 224,102 200,82 C182,66 212,52 198,36"
        strokeWidth="9"
        strokeLinecap="round"
        opacity=".8"
      />
    </svg>
  );
}

export default Logo;
