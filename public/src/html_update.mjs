import { html_update_dev } from "../../../love/public/src/html_update_dev.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update(name) {
  await html_update_public(name);
  await html_update_dev(name);
}
