export function app_replace_rule_set_grow_triple() {
  let r = {
    name: "Grow Triple",
    rules: ["a > a a a"],
    goals: [
      {
        start: "a",
        end: "a   a   a",
      },
      {
        start: "a",
        end: "a   a   a   a   a",
      },
      {
        start: "a",
        end: "a   a   a   a   a   a   a",
      },
    ],
    why: "One 'a' becomes three, so each use adds two. Starting from one 'a' you can reach 3, 5 or 7 - but never an even number, because you only ever add two at a time.",
  };
  return r;
}
