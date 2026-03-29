export function app_replace_rule_set_shrink_different() {
  let r = {
    name: "Shrink Different",
    rules: ["b c > a"],
    goals: [
      {
        start: "b c",
        end: "a",
      },
      {
        start: "b c b c",
        end: "a a",
      },
      {
        start: "b c b c b c b c",
        end: "a a b c a",
      },
    ],
    why: "The rules demonstrate a grammar where every occurrence of the sequence ['b', 'c'] can be replaced by 'a', effectively shrinking repeated ['b', 'c'] pairs into 'a's, as shown by the transformation of longer sequences of ['b', 'c'] into fewer 'a's.",
    rules_used: [
      [
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
        },
      ],
    ],
  };
  return r;
}
