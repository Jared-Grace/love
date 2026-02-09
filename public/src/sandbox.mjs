import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { app_original_bible_gloss_generate_chapter_code_specified } from "../../../love/public/src/app_original_bible_gloss_generate_chapter_code_specified.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let chapter_code_specified =
    app_original_bible_gloss_generate_chapter_code_specified();
  let file_name = file_name_json(name);
  let p = folder_user_docs_path(chapter_code_specified);
  let data = await file_read_json(p);
  log({
    data,
  });
}
