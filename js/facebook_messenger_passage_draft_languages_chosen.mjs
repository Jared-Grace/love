import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_messenger_profiles_file } from "./facebook_messenger_profiles_file.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { facebook_messenger_languages_read } from "./facebook_messenger_languages_read.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { facebook_messenger_passage_draft } from "./facebook_messenger_passage_draft.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
export async function facebook_messenger_passage_draft_languages_chosen(id) {
  "$plain id";
  "Drafts the next passage for conversation number id in the languages that person reads: the ones kept for them, else the ones the last next-passage link you sent them names, else the reply app's default. Answers the draft, the languages, and which of the three they came from.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ A LINK SENT IS A CHOICE WRITTEN DOWN, SO IT WINS OVER ANY GUESS: kept languages came from such a link or were chosen for the person, so they are asked first; the chat is read for a link only when nothing is kept; only when no link was ever sent does the default answer.";
  let languages = null;
  let from = null;
  let file = facebook_messenger_profiles_file();
  if (await file_exists(file)) {
    let profiles = await file_read_json(file);
    let kept = profiles[id] && profiles[id].languages;
    if (Array.isArray(kept) && greater_than(kept.length, 0)) {
      languages = kept;
      from = "kept";
    }
  }
  if (equal(languages, null)) {
    let read = await facebook_messenger_languages_read(id);
    if (not_equal(read.languages, null)) {
      languages = read.languages;
      from = "link";
    }
  }
  if (equal(languages, null)) {
    let list = app_reply_languages_chosen_default();
    languages = list_map_property(list, "language_code");
    from = "default";
  }
  let languages_plus = list_join_plus(languages);
  let draft = await facebook_messenger_passage_draft(id, languages_plus);
  let r = {
    languages,
    from,
    ...draft,
  };
  return r;
}
