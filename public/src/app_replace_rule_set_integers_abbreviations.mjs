export function app_replace_rule_set_integers_abbreviations() {
  let r = {
    di: ["", "di", "git (numbers 0-9)"],
    g: ["integer ", "g", "rower"],
    i: ["", "i", "nteger (non-negative whole number)"],
    p: ["", "p", "ositive digit (numbers 1-9)"],
  };
  return r;
}
