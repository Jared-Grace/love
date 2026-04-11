import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
export async function text_split_comma_dot_map_unordered(
  f_names_comma,
  lambda,
) {
  let f_names = text_split_comma_dot(f_names_comma);
  await list_map_unordered_async(f_names, lambda);
}
