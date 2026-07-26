import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
import { function_delete_unused } from "./function_delete_unused.mjs";
export async function function_delete_unused_multiple(names_comma) {
  "Removes each of these, and refuses any one of them that something still calls.";
  "Clearing away several at once is the ordinary case — a thing built out of small";
  "parts is retired in small parts — and running the single form once per name";
  "leaves a commit that can only be described rather than named, which is the one";
  "thing a commit message here must never be.";
  await text_split_comma_each_async(names_comma, function_delete_unused);
}
