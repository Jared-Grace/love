import { not } from "./not.mjs";
export function array_verb_probe() {
  let names = [not, list_any];
  let words = ["alpha_word"];
  let both = {
    names,
    words,
  };
  return both;
}
