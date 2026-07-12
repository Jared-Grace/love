import { html_update_latest_promote } from "./html_update_latest_promote.mjs";
import { each_async } from "./each_async.mjs";
export async function html_update_latest_promote_multiple(list) {
  await each_async(list, async function lambda(item) {
    await html_update_latest_promote(item);
  });
}
