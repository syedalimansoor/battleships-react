const theme = {
  color: {
    blue2: "#6AABC2",
    blue3: "#1D5F76",
    blue4: "#0C465A",
    blue5: "#073A4B",
    blue6: "#023546",

    yellow5: "#ECDE66",
    yellow6: "#B1A437",

    red5: "#EC6666",
  },

  font: {
    family: {
      primary:
        "Kollektif, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
      display:
        "ChunkFive, Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif",
    },

    size: {
      base: "16px",
    },
  },

  padding: {
    inline: "20px",
  },
};

export type Theme = typeof theme;
export default theme;
