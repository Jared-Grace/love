export function app_replace_rule_set_add_one() {
  let r = {
    name: "Add One",
    rules: ["0 a > 1", "1 a > a 0", "c > a c"],
    goals: [
      {
        start: "b 0 c",
        end: "b 1 c",
      },
      {
        start: "b 0 1 c",
        end: "b 1 0 c",
      },
      {
        start: "b 0 1 1 c",
        end: "b 1 0 0 c",
      },
      {
        start: "b 0 1 1 1 1 c",
        end: "b 1 0 0 0 0 c",
      },
    ],
    why: "To add one, the right wall 'c' grows a carry 'a', which slides left flipping ones to zeros until it lands on a zero and turns it into a one. Because there is always a zero waiting to catch the carry, the number never has to grow — that overflow case is the one new idea saved for Binary Counting.",
  };
  return r;
}
