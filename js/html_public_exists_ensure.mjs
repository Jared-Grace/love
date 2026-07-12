import { file_exists_ensure } from "./file_exists_ensure.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
export async function html_public_exists_ensure(name) {
  let file_path = html_name_to_path(name);
  await file_exists_ensure(file_path);
}
