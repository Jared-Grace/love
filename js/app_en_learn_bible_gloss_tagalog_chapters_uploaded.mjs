import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_upload_namespace_en_learn_bible_tagalog } from "./gloss_upload_namespace_en_learn_bible_tagalog.mjs";
import { app_shared_gloss_chapters_uploaded_generic } from "./app_shared_gloss_chapters_uploaded_generic.mjs";
export async function app_en_learn_bible_gloss_tagalog_chapters_uploaded() {
  "Every chapter of English words explained in Tagalog that has been published, which is every chapter this app can explain a word of to a reader of Tagalog.";
  "Read from the store rather than written down here, so publishing a chapter is the whole of putting it in front of a reader.";
  arguments_assert(arguments, 0);
  let cache_fn = app_en_learn_bible_gloss_tagalog_chapters_uploaded;
  let namespace_fn = gloss_upload_namespace_en_learn_bible_tagalog;
  let value = await app_shared_gloss_chapters_uploaded_generic(
    cache_fn,
    namespace_fn,
  );
  return value;
}
