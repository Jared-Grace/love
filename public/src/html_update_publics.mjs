import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update_publics(searches) {
  await each_async(searches, html_update_public);
}
