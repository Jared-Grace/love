export function app_replace_rule_set_double() {
  let r = {
    name: "Double",
    rules: ["a > a a"],
    goals: [
      {
        start: "a",
        end: "a   a",
      },
      {
        start: "a",
        end: "a   a   a",
      },
      {
        start: "a",
        end: "a   a   a   a   a",
      },
    ],
    why: "Each use turns one a into two, so the line grows by one. Do it to every a in the line and the count doubles.",
  };
  return r;
}
