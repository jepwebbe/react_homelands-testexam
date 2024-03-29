// The theme object holding values that can be accessed globally by styled-components
export const Theme = {
  colors: {
    primaryBg: "white",
    orange: "#AF7627",
    rosa: "#FED9C9",
    green: "#14C451"
  },
  space: {
    sidePadding: "5rem",
    headerMargin: "0",
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
  desktop: {
    rows: "auto auto 1fr auto",
    columns: "repeat(6, 1fr)",
    area: `
    "a a a a a a"
    "b b b b b b"
    "c c c c c c"
    "d d d d d d"
              `,
  },
  desktopTwo: {
    rows: "auto 1fr auto",
    columns: "4fr 1fr",
    area: `"a a" "b c" "d d"
              `,
  },
  desktopThree: {
    rows: "auto 1fr",
    columns: "4fr 1fr",
    area: `"a a" "b b"
              `,
  },
  tablet: {
    rows: "auto auto 1fr auto",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
      "d d"
              `,
  },
  tabletTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
  mobile: {
    rows: "auto auto 1fr auto auto",
    columns: "repeat(2, auto)",
    area: `
      "a a"
      "b b"
      "c c"
      "d d"
              `,
  },
  mobileTwo: {
    rows: "",
    columns: "",
    area: `
              
              `,
  },
};
