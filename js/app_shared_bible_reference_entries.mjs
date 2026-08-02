import { app_shared_bible_reference_entries_generic } from "./app_shared_bible_reference_entries_generic.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
export async function app_shared_bible_reference_entries(
  reference,
  languages_chosen,
) {
  "one entry per language read straight out of the bible files";
  let entries = await app_shared_bible_reference_entries_generic(
    reference,
    languages_chosen,
    app_shared_bible_reference_text,
  );
  return entries;
}
