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
  };
  return r;
}
