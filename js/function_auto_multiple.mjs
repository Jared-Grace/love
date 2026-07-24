import { function_auto } from "./function_auto.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
export async function function_auto_multiple(names_comma) {
  await text_split_comma_each_async(names_comma, function_auto);
}
