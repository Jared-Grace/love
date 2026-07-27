import { assert_json } from "./assert_json.mjs";
export function number_from_text(text) {
  "A count written down as text, read back as a number. A command line hands";
  "every argument over as text, so any verb taking a position needs this before";
  "it can use one.";
  "Text that is not a number at all answers loudly rather than quietly: the";
  "quiet answer is the one that reads as a position nothing sits at, and then";
  "looks exactly like an address that simply found nothing.";
  let number = Number(text);
  let finite_is = Number.isFinite(number);
  assert_json(finite_is, {
    hint: "this was expected to be a number written as text — would you like to check what was passed?",
    text,
  });
  return number;
}
