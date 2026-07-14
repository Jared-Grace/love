export function app_replace_rule_set_marker_convert() {
  let r = {
    name: "Marker Convert",
    rules: ["d c > a d", "d b > b d"],
    goals: [
      {
        start: "d c",
        end: "a d",
      },
      {
        start: "d c c",
        end: "a a d",
      },
      {
        start: "d c c c",
        end: "a a a d",
      },
      {
        start: "d b",
        end: "b d",
      },
      {
        start: "d b c",
        end: "b a d",
      },
      {
        start: "d b c c",
        end: "b a a d",
      },
    ],
    why: "A 'd' marker walks rightward: every 'c' it passes becomes 'a', and when it meets a 'b' it simply steps past unchanged. This rehearses the converting-marker move used later to turn a whole run of one symbol into another as the marker travels through it.",
  };
  return r;
}
