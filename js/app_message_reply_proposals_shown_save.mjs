import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_proposals_shown_hash } from "./app_message_reply_proposals_shown_hash.mjs";
import { app_message_reply_proposals_shown } from "./app_message_reply_proposals_shown.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { app_message_reply_proposals_shown_saved_path } from "./app_message_reply_proposals_shown_saved_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function app_message_reply_proposals_shown_save() {
  arguments_assert(arguments, 0);
  ("Works out the reply rules screen's whole answer and keeps it, under the word for the code it was worked out by and the time it was finished, so opening the screen only has to read it.");
  ("★ THE WORD IS TAKEN BEFORE THE WORK, NOT AFTER. Code changed while the answer was being worked out then leaves a word that no longer matches, so the answer is redone; taken after, it would match new code with an answer from the old.");
  ("Answers with the word only, because whoever asked runs this in a separate process and reads back what it printed; the answer itself is far too long to print.");
  let hash = await app_message_reply_proposals_shown_hash();
  let shown = await app_message_reply_proposals_shown();
  let when = date_now_milliseconds();
  let saved = {
    hash,
    when,
    shown,
  };
  let p = app_message_reply_proposals_shown_saved_path();
  await file_overwrite_json(p, saved);
  return hash;
}
