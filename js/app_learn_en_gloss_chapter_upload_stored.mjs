import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { g_generate_upload_filter } from "./g_generate_upload_filter.mjs";
export async function app_learn_en_gloss_chapter_upload_stored(
  language_code,
  chapter_code,
) {
  "Publish one chapter of English words explained in the reader's language exactly as it already stands, generating nothing.";
  "The explanations are written by hand rather than asked of a model, so publishing and writing are separate steps on purpose: this one only carries up what is already in the store.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to publish and nothing that runs.";
  let store = app_learn_en_gloss_authored_get(language_code);
  let fn = property_get(store, "generate");
  let path_get = property_get(store, "upload_path");
  await g_generate_upload_filter(fn, path_get, chapter_code);
}
