var app = new Vue({
  el: "#app",
  data: {
    topLinks: ["HOME", "SERVICES", "SKILLS", "PARTNERS", "BLOG"],
    colSections: [
      {
        title: "About",
        links: [
          "The Company",
          "Institutional",
          "Social & Events",
          "Innovation",
          "Environment",
          "Technology",
        ],
      },
      {
        title: "Transport",
        links: [
          "Industrialized",
          "Chemicals",
          "Packaged Liquids",
          "Construction",
          "Laminated Wood",
          "And others",
        ],
      },
      {
        title: "Support",
        links: [
          "Responsibility",
          "Terms of Use",
          "About Cookies",
          "Privacy Policy",
          "Accessibility",
          "Information",
        ],
      },
    ],
  },
});
