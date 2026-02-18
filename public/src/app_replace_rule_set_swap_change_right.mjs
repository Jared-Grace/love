export function app_replace_rule_set_swap_change_right() {
  let r = {
    name: "Swap Change Right",
    rules: ["a b > b c"],
    goals: [
      {
        start: "aab",
        end: "bcc",
      },
      {
        start: "ababab",
        end: "ababbc",
      },
      {
        start: "abababab",
        end: "bcbcabbc",
      },
      {
        start: "aaaab",
        end: "bcccc",
      },
      {
        start: "abababababab",
        end: "abbcabbcbcbc",
      },
    ],
  };
  return r;
}
