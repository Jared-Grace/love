import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { function_work_none_is } from "./function_work_none_is.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
export async function functions_work_none_is(names_comma) {
  "Whether each of several functions takes nothing and calls nothing asked in one command - one answer per name under the name it belongs to and nothing under a name that answers to no function";
  "The single form was run twelve deep in one sitting which is the shape the log reads as a sweep nobody had written yet";
  let names = text_split_comma_dot_trim(names_comma);
  async function answer_one(name_one) {
    let answer_found = await function_work_none_is(name_one);
    return answer_found;
  }
  let found = await list_map_async_record_try(names, answer_one);
  return found;
}
