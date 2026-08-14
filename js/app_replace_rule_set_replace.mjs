export function app_replace_rule_set_replace() {
  let r = {
    name: "Replace",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "a   a",
        end: "b   b",
      },
      {
        start: "a   a   a",
        end: "b   b   b",
      },
      {
        start: "a   a   a   a",
        end: "a   b   b   a",
      },
      {
        start: "a   a   a   a   a   a   a",
        end: "a   b   a   b   a   b   a",
      },
    ],
    why: "Every a can turn into a b, one at a time, and you choose which one. Some goals want every a changed, some want only a few - so read the goal before you start pressing.",
  };
  return r;
}
