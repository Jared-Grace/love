import { file_exists_not } from "../../../love/public/src/file_exists_not.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
import { html_update_latest } from "../../../love/public/src/html_update_latest.mjs";
import { html_update_dev } from "../../../love/public/src/html_update_dev.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function app_new_html_update(name) {
  let file_path = html_name_to_path(name);
  let n = await file_exists_not(file_path);
  if (n) {
    fov;
  }
  await html_update_public(name);
  await html_update_dev(name);
  await html_update_latest(name);
}
