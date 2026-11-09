import { messenger_passage_file } from "./messenger_passage_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { next_passage_testament_new_random_copied } from "./next_passage_testament_new_random_copied.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function facebook_messenger_passage_draft(id, languages_plus) {
  "$plain id";
  "$plain languages_plus";
  "Drafts the next passage for conversation number id - a random New Testament book in languages_plus, like en+original - and keeps it in that conversation's private passage file to be read before it is sent. Answers the file and what it holds.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ A NEW DRAFT REPLACES AN UNSENT ONE: the passage is not chosen by anyone, so nothing is lost; a sent one is the record that it went, so it is never replaced.";
  let file = messenger_passage_file(id);
  if (await file_exists(file)) {
    let before = await file_read_json(file);
    if (before.sent_at) {
      let r2 = {
        file,
        saved: before,
        why: "already sent",
      };
      return r2;
    }
  }
  let passage = await next_passage_testament_new_random_copied(languages_plus);
  let saved = {
    id,
    url: passage.url,
    text: passage.text,
    drafted_at: new Date().toISOString(),
  };
  await file_overwrite_json(file, saved);
  let r = {
    file,
    saved,
  };
  return r;
}
