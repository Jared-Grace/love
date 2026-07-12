import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export async function text_split_comma_dot_map_unordered(
  f_names_comma,
  lambda,
) {
  let f_names = text_split_comma_dot(f_names_comma);
  let r = await list_map_unordered_async(f_names, lambda);
  return r;
}
