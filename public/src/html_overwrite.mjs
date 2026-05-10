import { html_code } from "../../../love/public/src/html_code.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
export async function html_overwrite(name, file_path, body) {
  let contents = html_code(name, body);
  await file_overwrite(file_path, contents);
}
