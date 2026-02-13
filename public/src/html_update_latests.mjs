import { html_update_latest } from "../../../love/public/src/html_update_latest.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function html_update_latests(searches_comma) {
  let searches = text_split_comma(searches_comma);
  await each_async(searches, html_update_latest);
}
