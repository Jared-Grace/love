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
    why: "The replacement rules demonstrate a left-growing grammar, where each 'g' can be replaced by 's' followed by 'g', effectively adding an 's' to the left of each 'g' in the sequence. This process can be repeated, resulting in sequences where groups of 's's accumulate to the left of each 'g'. The examples show how starting from one or more 'g's, the rule can be applied to generate increasingly longer sequences with more 's's preceding each 'g'.",
  };
  return r;
}
