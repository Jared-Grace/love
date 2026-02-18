export function app_replace_rule_set_binary_counting() {
  return {
    name: "Binary Counting",
    rules: ["0 a > 1", "1 a > a 0", "c > a c", "b a > b 1"],
    goals: [
      {
        start: "b0c",
        end: "b0ac",
      },
      {
        start: "b0c",
        end: "b1c",
      },
      {
        start: "b0c",
        end: "b10c",
      },
      {
        start: "b0c",
        end: "b11c",
      },
      {
        start: "b0c",
        end: "b101c",
      },
      {
        start: "b0c",
        end: "b111c",
      },
      {
        start: "b0c",
        end: "b1010c",
      },
    ],
  };
}
