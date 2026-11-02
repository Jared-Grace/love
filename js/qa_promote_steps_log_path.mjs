import { text_frozen } from "./text_frozen.mjs";
import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
export function qa_promote_steps_log_path() {
  "Where this machine's own history of what each step of preparing an app took is kept - one row per run, local to here and never committed.";
  "It is gitignored for the reason its neighbour holding what a run of the gates cost gives: a duration is a fact about one machine on one afternoon, so it is no verdict about any commit and would only put machine weather into a public repo.";
  "The name on disk goes through the freezing word so that no later rename of a function can move this path away from the file already written.";
  let name = text_frozen("promote_steps_cost");
  let f_path = file_name_json_folder_gitignore(name);
  return f_path;
}
