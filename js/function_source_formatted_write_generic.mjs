import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { js_format } from "./js_format.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { data_file_update } from "./data_file_update.mjs";
export async function function_source_formatted_write_generic(
  f_name,
  contents,
  write,
) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 3);
  ("Lays a function's source down at the place its own name asks for, formatted on the way in, using whichever writer it is handed, and tells the index of files that it is there. Hands back where it landed.");
  ("Working out where a function goes, formatting it and telling the index are the same three things whether the file is new or is being replaced. The only thing the two differ about is one word - whether an existing file is refused or written over - and that word is a writer, which is how the layer underneath already draws the same line.");
  ("The refusal, when there is one, belongs to the writer that was handed in and not to this. So nothing here has to say which of the two happened, and neither half can drift from the other by having its own copy of the three steps.");
  let f_path = function_name_to_path_relative(f_name);
  let formatted = await js_format(contents);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await write(combined, formatted);
  await data_file_update(combined);
  return combined;
}
