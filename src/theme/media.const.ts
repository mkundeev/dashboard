const size = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1300px",
};

export const MEDIA = {
  tablet: `(min-width: ${size.mobile})`,
  laptop: `(min-width: ${size.tablet})`,
  bigLaptop: `(min-width: ${size.laptop})`,
};
