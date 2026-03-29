export function app_replace_rule_set_grow_left() {
  let r = {
    name: "Grow Left",
    rules: ["g > s g"],
    goals: [
      {
        start: "g",
        end: "s s g",
      },
      {
        start: "g g",
        end: "s g s s g",
      },
      {
        start: "g g",
        end: "s s s g s s g",
      },
      {
        start: "g g g",
        end: "s s s g s s g s g",
      },
    ],
    why: "The replacement rules demonstrate a left-growing grammar where each 'g' can be replaced by 's g', allowing the sequence to expand by adding 's' to the left of each 'g', which explains the patterns in the goals.",
    rules_used: [
      [
        {
          left: ["g"],
          right: ["s", "g"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
        },
      ],
    ],
  };
  return r;
}
