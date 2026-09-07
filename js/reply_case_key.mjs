import { arguments_assert } from "./arguments_assert.mjs";
import { text_hash } from "./text_hash.mjs";
import { text_take } from "./text_take.mjs";
export function reply_case_key(message) {
  arguments_assert(arguments, 1);
  ("The short word that stands for one real message, so a case written here can say which message it was drawn from without the message itself being written down.");
  ("★ THE REAL MESSAGES ARE PRIVATE AND THIS REPO IS PUBLIC, WHICH IS THE WHOLE REASON A KEY EXISTS. A case has to be joinable back to the message a person actually sent - otherwise nobody can tell whether the case still stands for anything - and the only join that does not carry the words across is one worked out from them and not reversible.");
  ("It is cut short because it is read by people. The full word is sixty-four characters and would be the longest thing on every line of the corpus; sixteen is far more than enough to keep thirty messages apart, and the cost of two of them colliding is a case shown against the wrong message on one screen, not a wrong reply to anybody.");
  let whole = text_hash(message);
  let key = text_take(whole, 16);
  return key;
}
