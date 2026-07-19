import { html_public_exists_ensure } from "../../love/js/html_public_exists_ensure.mjs";
import { html_update_dev_open } from "../../love/js/html_update_dev_open.mjs";
export async function app_shared_html_update(name) {
  await html_public_exists_ensure(name);
  await html_update_dev_open(name);
}
