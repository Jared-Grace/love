export function app_replace_rule_set_shrink_triple() {
  let r = {
    name: "Shrink Triple",
    rules: ["a a a > a"],
    goals: [
      {
        start: "a a a",
        end: "a",
      },
      {
        start: "a a a a a",
        end: "a",
      },
      {
        start: "a a a a a a a",
        end: "a",
      },
    ],
    why: "The replacement rules demonstrate a grammar that reduces any sequence of three consecutive 'a's to a single 'a'. This process can be repeatedly applied to shrink longer sequences of 'a's down to a single 'a', as shown in the goals where sequences of 3, 5, or 7 'a's are all reduced to just one 'a'.",
  };
  return r;
}
