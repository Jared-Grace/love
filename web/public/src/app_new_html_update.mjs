import { html_update_latest } from "../../../love/public/src/html_update_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_update_dev } from "../../../love/public/src/html_update_dev.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function app_new_html_update(name) {
  marker("1");
  await html_update_public(name);
  await html_update_dev(name);
  await html_update_latest(name);
}
