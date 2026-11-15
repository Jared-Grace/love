import { arguments_assert } from "./arguments_assert.mjs";
export function reply_response_unrecognized() {
  arguments_assert(arguments, 0);
  ("What is said beside a reply when part of the message was passed over unread, so the person knows the reply answers only some of what they wrote.");
  ("Chosen by the human 2026-11-15. Not picked: I didn't understand everything you said, which claims a failure to understand when nothing here tries to understand; I didn't recognize everything you said as English, because misspellings, run-together words and place names are passed over too, and telling a writer that a misspelling is not English reads as correcting their English; I may have missed part of your message, which hedges what is known; and asking them to write in English, which invites a spammer to write back.");
  let r = "I didn't recognize everything you said.";
  return r;
}
