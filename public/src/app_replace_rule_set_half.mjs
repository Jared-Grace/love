export function app_replace_rule_set_half() {
  let r = {
    name: "Half",
    rules: ["a a > a"],
    goals: [
      {
        start: "a a",
        end: "a",
      },
      {
        start: "a a a",
        end: "a",
      },
      {
        start: "a a a a a",
        end: "a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that reduces any even number of 'a's to a single 'a' by repeatedly replacing pairs of 'a's with one 'a'. This is shown by the rule ['a', 'a'] → ['a'], and the goals illustrate how starting with an even number of 'a's (like 2, 4, or 6) can be reduced to a single 'a', while an odd number (like 3 or 5) cannot be fully reduced to just one 'a' using this rule.",
  };
  return r;
}
