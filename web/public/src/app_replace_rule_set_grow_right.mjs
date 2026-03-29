export function app_replace_rule_set_grow_right() {
  let r = {
    name: "Grow Right",
    rules: ["g > g s"],
    goals: [
      {
        start: "g",
        end: "g s s",
      },
      {
        start: "g g",
        end: "g s s g s",
      },
      {
        start: "g g",
        end: "g s s g s s s",
      },
      {
        start: "g g g",
        end: "g s g s s g s s s",
      },
    ],
    why: "The replacement rules demonstrate a right-growing grammar where each 'g' can be replaced by 'g s', allowing the sequence to expand by adding an 's' to the right of each 'g' in the string; this is evident from the way the goals show progressively longer sequences generated from initial 'g's.",
    rules_used: [
      [
        {
          left: ["g"],
          right: ["g", "s"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
        },
      ],
    ],
  };
  return r;
}
