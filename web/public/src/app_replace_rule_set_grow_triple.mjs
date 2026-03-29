export function app_replace_rule_set_grow_triple() {
  let r = {
    name: "Grow Triple",
    rules: ["a > a a a"],
    goals: [
      {
        start: "a",
        end: "a a a",
      },
      {
        start: "a",
        end: "a a a a a",
      },
      {
        start: "a",
        end: "a a a a a a a",
      },
    ],
    why: "The replacement rules demonstrate a grammar where each 'a' is replaced by three 'a's, showing exponential growth (tripling) of 'a's with each application, which explains how the goals with 3, 5, and 7 'a's can be derived from a single 'a' through repeated rule applications.",
  };
  return r;
}
