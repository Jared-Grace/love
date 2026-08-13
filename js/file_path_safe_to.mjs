import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
export function file_path_safe_to(fp) {
  function_duplicate_kind_parallel();
  let safe = encodeURIComponent(fp);
  return safe;
}
