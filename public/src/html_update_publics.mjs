import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update_publics(search) {
  async function lambda(item) {}
  await each_async(list, lambda);
  let r = await html_update_public(search);
  return r;
}
