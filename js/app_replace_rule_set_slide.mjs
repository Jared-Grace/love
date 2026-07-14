export function app_replace_rule_set_slide() {
  let r = {
    name: "Slide",
    rules: ["1 a > a 0"],
    goals: [
      {
        start: "1 a",
        end: "a 0",
      },
      {
        start: "1 1 a",
        end: "a 0 0",
      },
      {
        start: "1 1 1 a",
        end: "a 0 0 0",
      },
      {
        start: "1 1 1 1 a",
        end: "a 0 0 0 0",
      },
    ],
    why: "The rule slides the token 'a' one place to the left, and every '1' it passes turns into '0'. This single move is the heart of binary counting: a carry travelling leftward, flipping ones to zeros as it goes.",
  };
  return r;
}
