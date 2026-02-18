export function app_replace_rule_set_swap_change_left() {
  return {
    name: "Swap Change Left",
    rules: ["b c > a b"],
    goals: [
      {
        start: "bcc",
        end: "aab",
      },
      {
        start: "bcbcbc",
        end: "bcbcab",
      },
      {
        start: "bcbcabbc",
        end: "abababab",
      },
      {
        start: "bcccc",
        end: "aaaab",
      },
      {
        start: "abbcabbcbcbc",
        end: "abababababab",
      },
    ],
  };
}
