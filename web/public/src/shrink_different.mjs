export function shrink_different() {
  return {
    name: "Shrink Different",
    rules: ["b c > a"],
    goals: [
      {
        start: "bc",
        end: "a",
      },
      {
        start: "bcbc",
        end: "aa",
      },
      {
        start: "bcbcbcbc",
        end: "aaaa",
      },
    ],
  };
}
