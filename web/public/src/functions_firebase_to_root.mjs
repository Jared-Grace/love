import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
import { string_split_slash_forward } from "../../../love/public/src/string_split_slash_forward.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_firebase_to_root() {
  marker("1");
  let f_names = await functions_names();
  async function lambda(f_name) {
    let { f_path } = await function_name_to_path_search(f_name);
    let split = string_split_slash_forward(f_path);
    let second = list_second(split);
    let sliced = list_slice(list, a, b);
    log(second);
  }
  await each_async(f_names, lambda);
}
