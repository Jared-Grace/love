import { html_update_latest_new } from "../../../love/public/src/html_update_latest_new.mjs";
export async function html_update_latest_promote(search) {
  let r = await html_update_latest_new(search);
  return r;
}
