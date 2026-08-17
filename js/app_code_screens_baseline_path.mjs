import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_screens_baseline_path() {
  "where the accepted screen manifest is kept: the one crawl every later crawl is compared against";
  "the check that diffs against it and the command that replaces it both have to name the same file, and a diff pointed at one file while the accepting pointed at another would go on reporting the very changes that had just been accepted";
  arguments_assert(arguments, 0);
  let path = "data/app_code_screens_baseline.json";
  return path;
}
