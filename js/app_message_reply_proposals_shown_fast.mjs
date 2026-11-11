import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_proposals_shown_saved_path } from "./app_message_reply_proposals_shown_saved_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { app_message_reply_proposals_shown_hash } from "./app_message_reply_proposals_shown_hash.mjs";
import { equal } from "./equal.mjs";
import { app_message_reply_proposals_shown } from "./app_message_reply_proposals_shown.mjs";
export async function app_message_reply_proposals_shown_fast() {
  arguments_assert(arguments, 0);
  ("The reply rules screen's whole answer, read from where the background job kept it when that was worked out by the code as it stands now, and worked out on the spot only when it was not.");
  ("★ THE SAVED ANSWER IS TRUSTED ON THE CODE'S WORD ALONE, NOT ON ITS AGE. A change to the rules is caught exactly; a message that arrived after the answer was saved shows at the next round of the background job, which redoes the answer by age as well. Checking age here would send the person back to waiting every time the job was a minute behind.");
  let p = app_message_reply_proposals_shown_saved_path();
  if (await file_exists(p)) {
    let saved = await file_read_json(p);
    let hash = await app_message_reply_proposals_shown_hash();
    if (equal(saved.hash, hash)) {
      let r = saved.shown;
      return r;
    }
  }
  let shown = await app_message_reply_proposals_shown();
  return shown;
}
