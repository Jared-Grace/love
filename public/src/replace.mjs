export function replace() {
  let r = {
    name: "Replace",
    rules: ["a > b"],
    goals: [
      {
        start: "a",
        end: "b",
      },
      {
        start: "aa",
        end: "bb",
      },
      {
        start: "aaa",
        end: "bbb",
      },
      {
        start: "aaaa",
        end: "abba",
      },
      {
        start: "aaaaaaa",
        end: "abababa",
      },
    ],
  };
  return r;
}
