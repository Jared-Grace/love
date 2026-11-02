import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_records_by_key } from "./app_message_reply_records_by_key.mjs";
export async function reply_case_from_message(from) {
  arguments_assert(arguments, 1);
  ("Hands back the real message a saved test was drawn from, given the word in the test's from field, for the person who owns the messages to read at their own terminal.");
  ("★ IT PRINTS PRIVATE WORDS, SO IT IS FOR THE HUMAN'S TERMINAL. It must not be granted, and an agent should not run it unless the human asks, because what it prints then lands in a transcript.");
  let by_key = await app_message_reply_records_by_key();
  let record = by_key[from];
  let r = record.message;
  return r;
}
