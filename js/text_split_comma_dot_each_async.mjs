import { each_async } from "./each_async.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export async function text_split_comma_dot_each_async(f_names_comma, lambda) {
  let f_names = text_split_comma_dot(f_names_comma);
  await each_async(f_names, lambda);
}
