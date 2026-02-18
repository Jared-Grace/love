export function app_replace_rule_set_two_different_grow_same() {
  return {
    name: "Two Different Grow Same",
    rules: ["e b > c e b c"],
    goals: [
      {
        start: "eb",
        end: "ccebcc",
      },
      {
        start: "eb",
        end: "ccccebcccc",
      },
    ],
  };
}
