import { text_regex_match } from "./text_regex_match.mjs";
import { list_map } from "./list_map.mjs";
import { integer_from_base_try } from "./integer_from_base_try.mjs";
export function text_integers(text) {
  "every run of digits in text, as integers - e.g. text_integers('Math.floor(14 / 4)') is [14, 4]; used by tailored-decoy functions to recover a question's numbers (the operands don't survive on the quiz's qa, so they are re-read from the question string)";
  let runs = text_regex_match(text, /[0-9]+/g);
  function to_integer(run) {
    return integer_from_base_try(run, 10);
  }
  return list_map(runs, to_integer);
}
