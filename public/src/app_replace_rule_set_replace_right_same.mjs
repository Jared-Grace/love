export function app_replace_rule_set_replace_right_same() {
  let r = {
    name: "Replace Right Same",
    rules: ["a b > a a"],
    goals: [
      {
        start: "a b a b a b",
        end: "a b a a a b",
      },
      {
        start: "a b a b",
        end: "a a a a",
      },
      {
        start: "a b a a b a a b",
        end: "a a a a a a a a",
      },
    ],
    why: "The rules demonstrate a grammar that replaces every occurrence of 'a b' with 'a a', effectively transforming all 'b's that follow an 'a' into 'a's, resulting in sequences where 'a's replace 'b's in those specific contexts.",
  };
  return r;
}
