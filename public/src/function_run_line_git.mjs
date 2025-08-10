import { function_run_line_parse } from "./function_run_line_parse.mjs";
import { list_unique_reverse } from "./list_unique_reverse.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { function_run_git } from "./function_run_git.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
import { data_transform } from "./data_transform.mjs";
import { list_copy } from "./list_copy.mjs";
export async function function_run_line_git(line) {
  let { f_name, args } = await function_run_line_parse(line);
  await function_run_git(f_name, args);
}
