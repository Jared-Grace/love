import { fn_name } from "./fn_name.mjs";
import { facebook_messenger_since_mine_read } from "./facebook_messenger_since_mine_read.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { facebook_messenger_profile_round_messages_set } from "./facebook_messenger_profile_round_messages_set.mjs";
export async function facebook_messenger_since_mine_save(url) {
  "$plain url";
  "Reads every message sent after your last one in the messenger conversation at url and keeps them, with the address, in the private folder - one file per conversation, named by its number. It answers only counts and where the file is, never the words, so nothing anyone wrote reaches a log.";
  ("★ PRIVATE ONLY: other people's words never go in a repo; ",
    fn_name("folder_private_path"),
    " is the one door out.");
  let r = await facebook_messenger_since_mine_read(url);
  let id = url.match(/\/t\/(\d+)/)[1];
  let file = messenger_since_mine_file(id);
  let saved = {
    url,
    read_at: new Date().toISOString(),
    dialog: r.dialog,
    loaded: r.loaded,
    mine_seen: r.mine_seen,
    top: r.top,
    messages: r.messages,
  };
  await file_overwrite_json(file, saved);
  ("★ THE MESSAGES A REPLY IS MADE FROM ARE ALSO KEPT WITH THE PERSON'S IDS, as a round, so they outlive this file - which the next reading replaces - and a later reply can read what came before.");
  await facebook_messenger_profile_round_messages_set(id, r.messages);
  let r2 = {
    url,
    file,
    dialog: r.dialog,
    loaded: r.loaded,
    mine_seen: r.mine_seen,
    top: r.top,
    count: r.messages.length,
  };
  return r2;
}
