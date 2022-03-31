// these breakpoints refer to gallery layout with maw-width 350px
const breakpoints = {
  xs: 320,
  sm: 590,
  md: 900,
  lg: 1440,
  xl: 1780,
};

export const mediaQuery = key => style =>
  `@media only screen and (min-width: ${breakpoints[key]}px) { ${style} }`;

export const mediaQueryMax = key => style =>
  `@media only screen and (max-width: ${breakpoints[key]}px) { ${style} }`;
