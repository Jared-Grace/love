import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_code_lesson_ids_baseline_path() {
  "Where the record of the lesson ids the code app has taught under keeps them. Reading it, rewriting it, and refusing a change to it are separate functions, so the file name is spelled once here rather than once in each of them.";
  let path = path_join([
    data_given_baselines_folder(),
    "app_code_lesson_ids_baseline.json",
  ]);
  return path;
}
