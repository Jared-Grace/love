export function app_replace_rule_set_double() {
  let r = {
    name: "Double",
    rules: ["a > a a"],
    goals: [
      {
        start: "a",
        end: "a a",
      },
      {
        start: "a",
        end: "a a a",
      },
      {
        start: "a",
        end: "a a a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that doubles the number of 'a's in a string each time the rule is applied. Starting from a single 'a', each application of the rule replaces 'a' with 'aa', so repeated applications generate strings with lengths that are powers of two. The goals show examples of deriving longer strings of 'a's from a single 'a' using this doubling rule.",
  };
  return r;
}
