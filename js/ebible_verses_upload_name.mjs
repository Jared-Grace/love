import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function ebible_verses_upload_name(chapter_code, verse_number) {
  "$plain chapter_code";
  function_duplicate_kind_parallel();
  let joined = list_join_slash_forward([chapter_code, verse_number]);
  return joined;
}
