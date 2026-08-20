import { arguments_assert } from "./arguments_assert.mjs";
import { function_unalias_exists_not_assert_json } from "./function_unalias_exists_not_assert_json.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { js_format } from "./js_format.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_write } from "./file_write.mjs";
import { data_file_update } from "./data_file_update.mjs";
export async function function_source_new(f_name, contents) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 2);
  ("Makes the file for a function that does not exist yet and puts the given source text into it, placed by the function's own name rather than by a path.");
  ("The other half of the pair beside the overwriter, which could only reach a file that was already there. A generator that builds a whole function's text had nowhere to put it, so each one was working the path out for itself.");
  ("IT REFUSES A NAME THE REPO ALREADY ANSWERS TO. A generator handed an existing name would replace something a person wrote by hand and nothing would go red, which is the one failure a writer of files must not be able to make quietly.");
  ("The text is formatted on the way in rather than being trusted as written, so a generator may join its lines however is easiest to read at the join and the file still lands looking like every other file here.");
  await function_unalias_exists_not_assert_json(f_name, {
    hint: "a function with this name already exists — a generator must not overwrite a hand-written one, so pick another name or delete the old file first",
  });
  let f_path = function_name_to_path_relative(f_name);
  let formatted = await js_format(contents);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await file_write(combined, formatted);
  await data_file_update(combined);
  return combined;
}
