export function app_replace_rule_set_replace_2() {
  let r = {
    name: "Replace 2",
    rules: ["a > b", "c > d"],
    goals: [
      {
        start: "a   c",
        end: "b   d",
      },
      {
        start: "a   c   a",
        end: "b   d   b",
      },
      {
        start: "c   a   b   a   c   d",
        end: "d   b   b   b   d   d",
      },
      {
        start: "c   a   a   a   a   a   c",
        end: "d   b   a   b   a   b   d",
      },
    ],
    why: "Two rules to choose between for the first time, and they never get in each other's way: a's become b's, c's become d's.",
  };
  return r;
}
