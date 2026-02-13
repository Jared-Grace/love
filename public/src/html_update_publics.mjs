import { text_split_comma_each_async } from "../../../love/public/src/text_split_comma_each_async.mjs";
import { html_update_public } from "../../../love/public/src/html_update_public.mjs";
export async function html_update_publics(searches_comma) {
  let fn = html_update_public;
  await text_split_comma_each_async(searches_comma, fn);
}
