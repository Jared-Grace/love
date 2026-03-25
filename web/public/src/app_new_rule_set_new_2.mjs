export function app_new_rule_set_new_2() {
  let r = {
    name: "Expressions multiplicative",
    rules: ["mue > ue", "mue > mue mo ue", "mo > *", "mo > /"],
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
