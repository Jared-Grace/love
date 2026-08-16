import { arguments_assert } from "./arguments_assert.mjs";
import { machine_path_prefixes } from "./machine_path_prefixes.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes_multiple } from "./repo_functions_names_code_includes_multiple.mjs";
import { js_machine_path_literals } from "./js_machine_path_literals.mjs";
import { key_literals_all_generic } from "./key_literals_all_generic.mjs";
export async function machine_path_literals_all() {
  "Every place in this repo that writes out a folder belonging to one machine, as {files, sites} - how many files were opened, and what was found in them, each carrying the name of the function it was found in. Read-only, and it says what is there rather than what is wrong; the few that are written out on purpose are named next door.";
  "Only files whose text holds one of the openings are opened at all, because reading a whole tree costs a great deal more than looking for a few letters, and a file that writes a machine folder has already written one of them down. That holds by construction rather than by luck - it is the same list of openings in both places, so nothing can be missed by the narrowing that the reading would have found.";
  "How many files were opened is handed back with what was found, because what is hoped for here is nothing found, and a walk that opened no files at all says exactly the same word. The two are one sentence and opposite news, and the count is what tells them apart.";
  arguments_assert(arguments, 0);
  let prefixes = machine_path_prefixes();
  let repo_name = repo_love_name();
  let candidates = await repo_functions_names_code_includes_multiple(
    repo_name,
    prefixes,
  );
  let walked = await key_literals_all_generic(
    candidates,
    js_machine_path_literals,
  );
  return walked;
}
