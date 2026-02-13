import { text_split_comma_each_async } from "../../../love/public/src/text_split_comma_each_async.mjs";
import { html_update_latest } from "../../../love/public/src/html_update_latest.mjs";
export async function html_update_latests(searches_comma) {
  await text_split_comma_each_async(searches_comma, html_update_latest);
}
