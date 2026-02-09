import { log } from "../../../love/public/src/log.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function sandbox() {
  let p = folder_user_docs_path(chapter_code_specified);
  let data = await file_read_json(p);
  log({
    data,
  });
}
