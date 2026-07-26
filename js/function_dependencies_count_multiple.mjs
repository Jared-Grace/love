import { text_split_comma } from "./text_split_comma.mjs";
import { function_dependencies_single } from "./function_dependencies_single.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function function_dependencies_count_multiple(names_comma) {
  "How many functions each of these pulls in, counted together. The number is only worth reading beside the others — one app pulling in a thousand functions means nothing until the app beside it pulls in three hundred — and asking one at a time leaves the comparison to be done by hand from separate answers.";
  async function name_count(name) {
    let dependencies = await function_dependencies_single(name);
    let r = {
      name,
      count: dependencies.length,
    };
    return r;
  }
  let names = text_split_comma(names_comma);
  let out = await list_map_async(names, name_count);
  return out;
}
