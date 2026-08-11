import { app_shared_bible_reference_entries_generic } from "./app_shared_bible_reference_entries_generic.mjs";
import { app_reply_verses_uplifting_text } from "./app_reply_verses_uplifting_text.mjs";
export async function reply_verses_uplifting_entries(
  reference,
  languages_chosen,
) {
  "one entry per language taking the words from the offline package when that version has one";
  let entries = await app_shared_bible_reference_entries_generic(
    reference,
    languages_chosen,
    app_reply_verses_uplifting_text,
  );
  return entries;
}
