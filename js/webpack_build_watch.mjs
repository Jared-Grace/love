import { folder_web_dev } from "./folder_web_dev.mjs";
import { webpack_build_generic } from "./webpack_build_generic.mjs";
export async function webpack_build_watch(search) {
  let words_after = ["--watch"];
  let config_folder = folder_web_dev();
  let result = await webpack_build_generic(search, config_folder, words_after);
  return result;
}
