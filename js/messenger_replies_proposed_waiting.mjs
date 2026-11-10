import { not } from "./not.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_read } from "./file_read.mjs";
export async function messenger_replies_proposed_waiting() {
  "Every proposed messenger reply still waiting for a yes: the conversation number, the messages it answers, and the proposed words. A reply already approved or already sent is left out.";
  "★ IT RUNS ON THIS MACHINE ONLY: the messages and the replies sit in the private folder, which nothing serves, so a sandbox screen asks this command and shows what it answers.";
  let folder = folder_private_path("messenger_reply_proposed");
  let b = await folder_exists(folder);
  if (not(b)) {
    let r = [];
    return r;
  }
  let names = await folder_read(folder);
  let waiting = [];
  for (let name of names.sort()) {
    let b2 = name.endsWith(".txt");
    if (not(b2)) {
      continue;
    }
    let id = name.slice(0, -4);
    let since_file = messenger_since_mine_file(id);
    let b3 = await file_exists(since_file);
    if (not(b3)) {
      continue;
    }
    let saved = await file_read_json(since_file);
    if (saved.sent_at || saved.reply) {
      continue;
    }
    let proposed = await file_read(folder + "/" + name);
    waiting.push({
      id,
      messages: saved.messages,
      proposed,
    });
  }
  return waiting;
}
