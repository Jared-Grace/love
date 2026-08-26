import { html_update_dev } from "./html_update_dev.mjs";
import { file_open } from "./file_open.mjs";
export async function html_update_dev_open(name) {
  let path = await html_update_dev(name);
  await file_open(path);
}
