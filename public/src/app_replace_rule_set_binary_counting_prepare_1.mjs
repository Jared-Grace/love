export function app_replace_rule_set_binary_counting_prepare_1() {
  let r = {
    name: "Binary Counting Prepare 1",
    rules: ["1 a > a 0", "1 > 1 1"],
    goals: [
      {
        start: "1 a",
        end: "1 a 0",
      },
      {
        start: "1 a",
        end: "a 0 0 0",
      },
    ],
    why: "These replacement rules demonstrate a simple binary counting mechanism. The rule ['1', 'a'] → ['a', '0'] simulates incrementing a binary number, while ['1'] → ['1', '1'] allows for the binary number to grow in length, representing higher values. The goals show how starting from ['1', 'a'], the rules can generate binary representations of numbers, such as ['a', '0'] and ['a', '0', '0', '0'], illustrating the process of binary incrementation.",
  };
  return r;
}
