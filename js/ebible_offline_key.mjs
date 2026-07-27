import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function ebible_offline_key(bible_folder, name) {
  function_duplicate_kind_parallel();
  ("the version comes first so every saved piece of one bible sorts together");
  let key = list_join_slash_forward([bible_folder, name]);
  return key;
}
