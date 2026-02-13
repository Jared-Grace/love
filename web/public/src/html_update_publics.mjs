import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update_publics(searches_comma) {
  let fn = html_update_public;
  let searches = text_split_comma(searches_comma);
  await each_async(searches, fn);
}
