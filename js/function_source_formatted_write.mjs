import { arguments_assert } from "./arguments_assert.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { file_write } from "./file_write.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { js_format } from "./js_format.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function function_source_formatted_write(f_name, contents) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 2);
  ("Lays a function's source down at the place its own name asks for, formatted on the way in, and tells the index of files that it is there. Hands back where it landed.");
  ("It is the whole of what the two makers of new functions do once each has worked out its text - one is handed the text and one builds it out of a shape - and it was written out twice.");
  ("The text is formatted here rather than being trusted as written, so a generator may join its lines however is easiest to read at the join and the file still lands looking like every other file here.");
  ("IT ASKS NOTHING ABOUT WHAT IS ALREADY THERE. Refusing a name the repo already answers to is the caller's to do, and each caller has its own reason and its own words for the refusal, so the check stays where those words are.");
  let f_path = function_name_to_path_relative(f_name);
  let formatted = await js_format(contents);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await file_write(combined, formatted);
  await data_file_update(combined);
  return combined;
}
