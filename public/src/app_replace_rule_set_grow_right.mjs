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
    why: "The replacement rules demonstrate a simple right-growing grammar where each 'g' can be replaced by 'g s', effectively appending an 's' to the right of each 'g' in the sequence. This process can be repeated, causing the sequence to grow longer with each application, and the goals show how starting from one or more 'g's, repeated application of the rule generates increasingly longer sequences with more 's's appended to each 'g'.",
  };
  return r;
}
