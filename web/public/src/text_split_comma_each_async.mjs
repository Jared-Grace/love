import { each_async } from "../../../love/public/src/each_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export async function text_split_comma_each_async(searches_comma, fn) {
  let searches = text_split_comma(searches_comma);
  await each_async(searches, fn);
}
