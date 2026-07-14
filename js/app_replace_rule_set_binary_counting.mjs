export function app_replace_rule_set_binary_counting() {
  let r = {
    name: "Binary Counting",
    rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
    goals: [
      {
        start: "b 1 c",
        end: "b 1 0 c",
      },
      {
        start: "b 1 1 c",
        end: "b 1 0 0 c",
      },
      {
        start: "b 1 1 1 c",
        end: "b 1 0 0 0 c",
      },
      {
        start: "b 0 c",
        end: "b 1 1 c",
      },
    ],
    why: "Now the carry can run out of room. When it reaches the left wall 'b' with no zero to land on, 'b a > b 1' grows a new leading digit — this overflow is the one new idea, since sliding and landing were learned in Add One. The last goal counts 0, 1, 10, 11 in a row, overflowing and settling as it goes.",
  };
  return r;
}
