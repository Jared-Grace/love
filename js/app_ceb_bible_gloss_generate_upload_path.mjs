import { app_ceb_bible_gloss_generate_upload_namespace } from "./app_ceb_bible_gloss_generate_upload_namespace.mjs";
import { g_objection_generate_upload_path_generic } from "./g_objection_generate_upload_path_generic.mjs";
export function app_ceb_bible_gloss_generate_upload_path(chapter_code) {
  "Where one chapter's Cebuano glosses sit in storage.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN03 - a word chosen from the Bible's own book and chapter numbering, not a path and not anything that runs. It is joined into an address and handed back as text; nothing here reads or writes a file.";
  let f_name = app_ceb_bible_gloss_generate_upload_namespace();
  let destination = g_objection_generate_upload_path_generic(
    f_name,
    chapter_code,
  );
  return destination;
}
