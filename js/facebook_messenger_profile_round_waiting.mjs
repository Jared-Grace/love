import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function facebook_messenger_profile_round_waiting(thread_id) {
  "$plain thread_id";
  "Answers whether messenger conversation number thread_id has a round of their messages kept and not yet answered - its newest round holds messages and no sent reply. Such a chat was already handed back for a reply, so a walk looking for the next one passes it over.";
  let file = facebook_messenger_profiles_file();
  let b = await file_exists(file);
  if (not(b)) {
    return false;
  }
  let data = await file_read_json(file);
  let kept = data[thread_id] || {};
  let rounds = kept.rounds || [];
  let last = rounds[subtract(rounds.length, 1)];
  if (not(last)) {
    return false;
  }
  let r = not(last.sent_at) && greater_than((last.messages || []).length, 0);
  return r;
}
