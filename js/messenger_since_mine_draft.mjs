import { object_property_names } from "./object_property_names.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { reply_rules_remembered } from "./reply_rules_remembered.mjs";
import { reply_attempt_remembered } from "./reply_attempt_remembered.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function messenger_since_mine_draft(id) {
  "$plain id";
  "Drafts a reply to what conversation number id said since your last message, with the same reply rules the message app answers by, and keeps it in that conversation's private file as reply_draft. It sends nothing and never writes the reply that gets sent - that one is yours to finalize.";
  "★ THE MESSAGES ARE READ AS ONE: a person who sent three lines in a row is answered once, the way the message app reads one message.";
  let file = messenger_since_mine_file(id);
  let saved = await file_read_json(file);
  function lambda(m) {
    let r2 = m.text;
    return r2;
  }
  let message = saved.messages.map(lambda).join("\n");
  let rules = await reply_rules_remembered();
  let attempt = await reply_attempt_remembered(message, rules);
  saved.reply_draft = attempt;
  await file_overwrite_json(file, saved);
  let r = {
    file,
    count: saved.messages.length,
    keys: object_property_names(attempt),
  };
  return r;
}
