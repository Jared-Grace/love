import { words_dash_pieces_absent_cases } from "./words_dash_pieces_absent_cases.mjs";
import { property_get } from "./property_get.mjs";
import { words_dash_pieces_absent } from "./words_dash_pieces_absent.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { json_to } from "./json_to.mjs";
import { error } from "./error.mjs";
export function words_dash_pieces_absent_gate_run() {
  "Check that reading a list of words for the pieces its dashed words would be cut into still says what the corpus says it says.";
  "★ THE WHOLE ANSWER IS COMPARED, NOT THE COUNTS. A count agreeing is the cheapest thing to arrange and says nothing about which words were named; two of the numbers here would sit still while every word under them changed.";
  "The corpus is small enough to be read, so a failure is meant to be settled by reading the two answers side by side rather than by trusting the one that came out.";
  let cases = words_dash_pieces_absent_cases();
  let words = property_get(cases, "words");
  let expected = property_get(cases, "expected");
  let got = words_dash_pieces_absent(words);
  let differs = json_equal_not(got, expected);
  if (differs) {
    let json = json_to(got);
    console.log(json);
    let json2 = json_to(expected);
    console.log(json2);
    error(
      "the dashed words of a word list are read differently than the corpus says",
    );
  }
  let r = {
    checked: 1,
    defects: 0,
  };
  return r;
}
