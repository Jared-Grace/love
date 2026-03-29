export function app_replace_rule_set_right_change() {
  let r = {
    name: "Right Change",
    rules: ["a b > a c"],
    goals: [
      {
        start: "a b a b a b",
        end: "a b a b a c",
      },
      {
        start: "a b a b a b",
        end: "a c a b a c",
      },
      {
        start: "a b a a b a a a b a a a a b",
        end: "a c a a c a a a c a a a a c",
      },
    ],
    why: "The replacement rules demonstrate a context-sensitive grammar where every occurrence of 'a b' can be replaced with 'a c', allowing selective transformation of 'b's that are immediately preceded by 'a' into 'c's, as shown by the progression from the start to end strings in the goals.",
  };
  return r;
}
