import { html_update_latest_promote_deploy } from "../../love/js/html_update_latest_promote_deploy.mjs";
import { html_public_exists_ensure } from "../../love/js/html_public_exists_ensure.mjs";
import { html_update_latest } from "../../love/js/html_update_latest.mjs";
import { html_update_dev_open } from "../../love/js/html_update_dev_open.mjs";
import { html_update_public } from "../../love/js/html_update_public.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export async function app_new_html_update(name) {
  await html_public_exists_ensure(name);
  await html_update_dev_open(name);
  return;
  ("before, app html files worked differently, so these may not be needed anymore");
  text_combine("now use ", html_update_latest_promote_deploy);
  await html_update_public(name);
  await html_update_latest(name);
}
