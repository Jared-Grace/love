export function app_replace_rule_set_shrink_between() {
  let r = {
    name: "Shrink Between",
    rules: ["a b a > a a"],
    goals: [
      {
        start: "a a a b a",
        end: "a a a a",
      },
      {
        start: "a b a a a b a",
        end: "a a a a a",
      },
      {
        start: "a b a a b a a b a",
        end: "a a a a a a",
      },
    ],
    why: "The replacement rules demonstrate a process of simplifying a sequence by removing 'b' whenever it appears between two 'a's, effectively shrinking the sequence. This is shown by the rule ['a','b','a'] → ['a','a'], which is repeatedly applied to transform the start sequence into the end sequence by eliminating all such 'b's.",
  };
  return r;
}
