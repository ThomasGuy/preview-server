// these breakpoints refer to gallery layout with max-width 35rem = 305px
const breakpoints = {
  xs: 32,
  sm: 59,
  md: 90,
  lg: 144,
  xl: 178,
};

export const mediaQuery = key => style =>
  `@media only screen and (min-width: ${breakpoints[key]}rem) { ${style} }`;

export const mediaQueryMax = key => style =>
  `@media only screen and (max-width: ${breakpoints[key]}rem) { ${style} }`;
