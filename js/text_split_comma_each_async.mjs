import { each_async } from "./each_async.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function text_split_comma_each_async(searches_comma, fn) {
  let searches = text_split_comma(searches_comma);
  await each_async(searches, fn);
}
