import { file_read } from "../../../love/public/src/file_read.mjs";
import { text_decompress } from "../../../love/public/src/text_decompress.mjs";
import { file_name_txt } from "../../../love/public/src/file_name_txt.mjs";
import { app_original_bible_gloss_generate_chapter_code_specified } from "../../../love/public/src/app_original_bible_gloss_generate_chapter_code_specified.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let chapter_code_specified =
    app_original_bible_gloss_generate_chapter_code_specified();
  let file_name = file_name_txt(chapter_code_specified);
  let p = folder_user_docs_path(file_name);
  let c = await file_read(p);
  let d = await text_decompress(c);
}
