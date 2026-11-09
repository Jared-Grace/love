import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { facebook_messenger_profile_round_messages_set } from "./facebook_messenger_profile_round_messages_set.mjs";
import { facebook_messenger_profile_round_sent } from "./facebook_messenger_profile_round_sent.mjs";
export async function facebook_messenger_profile_rounds_from_since_mine_all() {
  "Keeps, as rounds with each person's ids, every conversation already read into its own private file since your last message - the messages, and the reply when it was sent. Answers the conversation numbers it kept and the ones it left alone.";
  "★ FOR WHAT WAS READ BEFORE ROUNDS WERE KEPT: from then on reading and sending keep the rounds themselves, so this only catches up what came earlier.";
  "★ SAFE TO RUN AGAIN: a conversation whose rounds already hold that reply's send time is left alone, so a sent round is never added twice.";
  let folder = folder_private_path(fn_name("messenger_since_mine"));
  let names = await folder_read(folder);
  let file_path = facebook_messenger_profiles_file();
  let profiles = (await file_read_json(file_path)) || {};
  let kept = [];
  let skipped = [];
  for (let name of names) {
    let b = name.endsWith(".json");
    if (not(b)) {
      continue;
    }
    let id = name.slice(0, -".json".length);
    let file_path2 = messenger_since_mine_file(id);
    let saved = await file_read_json(file_path2);
    let rounds = (profiles[id] || {}).rounds || [];
    function lambda(r) {
      let eq = equal(r.sent_at, saved.sent_at);
      return eq;
    }
    if (saved.sent_at && rounds.some(lambda)) {
      skipped.push(id);
      continue;
    }
    await facebook_messenger_profile_round_messages_set(
      id,
      saved.messages || [],
    );
    if (saved.sent_at && saved.reply) {
      await facebook_messenger_profile_round_sent(
        id,
        saved.reply,
        saved.sent_at,
      );
    }
    kept.push(id);
  }
  let r2 = {
    kept,
    skipped,
  };
  return r2;
}
