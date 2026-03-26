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
  };
  return r;
}
