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
  ("IT ONLY EVER MAKES A FILE THAT IS NOT THERE YET, and a caller wanting to replace one has to reach for the overwriting writer instead. The layer underneath asserts the file is absent before it writes a byte, so a name the repo already answers to throws here rather than being quietly replaced.");
  ("THAT PARAGRAPH USED TO SAY THE OPPOSITE and it cost somebody a run. It said this asked nothing about what was already there and left refusing an existing name to each caller, which reads as an invitation to use this for a rewrite - and a command that rebuilt fifteen generated files from a corrected reading threw on the first one. A caller cannot check the code of every layer beneath the atom it calls; what the atom says about itself is the whole of what it has to go on, so a sentence here that is wrong is not a stale comment but a broken promise.");
  ("WHAT IS STILL THE CALLER'S IS THE WORDS OF THE REFUSAL AND NOT THE REFUSAL. The maker of new functions next door asserts first with a hint about generators not replacing hand-written files, because it knows why its caller is here; the assert underneath speaks about a path and can say nothing about names or generators.");
  let f_path = function_name_to_path_relative(f_name);
  let formatted = await js_format(contents);
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  await file_write(combined, formatted);
  await data_file_update(combined);
  return combined;
}
