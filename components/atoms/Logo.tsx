import React from 'react'

interface LogoProps {
width: string;
height: string;
color: string;
}

const Logo: React.FC<LogoProps> = ({ width, height, color = 'black' }: LogoProps) => {
  return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width={width} height={height} viewBox="0 0 413.000000 409.000000"
      preserveAspectRatio="xMidYMid meet" >
      <g transform="translate(0.000000,409.000000) scale(0.100000,-0.100000)"
          stroke="none">
          <path fill={color} d="M1702 3867 c-19 -20 -25 -50 -44 -209 l-23 -186 -185 -67 c-102 -38
-410 -150 -685 -251 -503 -184 -535 -199 -535 -244 0 -9 121 -347 269 -751
148 -404 369 -1008 491 -1344 142 -389 229 -616 242 -627 11 -10 33 -18 48
-18 15 0 380 129 811 286 l784 286 307 -37 c168 -20 316 -34 327 -30 12 3 28
16 36 28 16 26 360 2847 351 2884 -4 12 -16 29 -29 37 -15 10 -354 55 -1072
140 -578 69 -1055 126 -1061 126 -6 0 -20 -10 -32 -23z m-86 -544 c-3 -32 -68
-567 -142 -1189 -75 -623 -134 -1143 -130 -1158 3 -14 16 -32 29 -40 15 -10
230 -40 662 -92 352 -42 643 -80 647 -83 4 -3 -296 -116 -665 -250 -370 -135
-686 -251 -703 -257 l-31 -13 -138 377 c-75 207 -295 806 -487 1331 -192 524
-348 955 -346 956 7 6 1284 473 1297 474 11 1 12 -11 7 -56z"/>
      </g>
</svg>
}

export default Logo
