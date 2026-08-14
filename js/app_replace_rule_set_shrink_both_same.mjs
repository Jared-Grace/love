export function app_replace_rule_set_shrink_both_same() {
  let r = {
    name: "Shrink Both Same",
    rules: ["a b a > b"],
    goals: [
      {
        start: "c   a   b   a   c",
        end: "c   b   c",
      },
      {
        start: "a   a   a   b   a   a   a",
        end: "a   b   a",
      },
      {
        start: "a   a   a   a   a   b   a   a   a   a   a",
        end: "a   b   a",
      },
    ],
    why: "A b with an a on each side loses both of them at once. The b survives alone.",
  };
  return r;
}
