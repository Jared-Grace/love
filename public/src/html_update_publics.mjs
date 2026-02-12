import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update_publics(searches_comma) {
  let split = text_split_comma(f_names);
  await each_async(searches_comma, html_update_public);
}
