import { html_update_latest_promote } from "../../../love/public/src/html_update_latest_promote.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function html_update_latest_promote_multiple(list) {
  await each_async(list, async function lambda(item) {
    await html_update_latest_promote(item);
  });
}
