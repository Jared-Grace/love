export function app_replace_rule_set_shrink_both_same() {
  let r = {
    name: "Shrink Both Same",
    rules: ["a b a > b"],
    goals: [
      {
        start: "c a b a c",
        end: "c b c",
      },
      {
        start: "a a a b a a a",
        end: "a b a",
      },
      {
        start: "a a a a a b a a a a a",
        end: "a b a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that reduces sequences where 'a', 'b', and 'a' appear together to just 'b'. This rule can be applied repeatedly to shrink longer sequences with repeated 'a's surrounding a 'b' into a more compact form, ultimately simplifying the string to a desired goal configuration.",
  };
  return r;
}
