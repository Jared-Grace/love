import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
import { claude_md_atom_names } from "./claude_md_atom_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function atoms_documented() {
  "The atoms the instructions file's vocabulary tables name, kept to the ones that are live functions";
  "A row can name something that is not a function of its own - a shape, a family, a thing described rather than run - and those are prose rather than a promise that a unit exists. The other gate on this file already refuses a name that no function answers to, so nothing is lost by dropping them here";
  let f_path = repo_path_combine("love", "CLAUDE.md");
  let text = await file_read(f_path);
  let names = claude_md_atom_names(text);
  let live = await functions_names();
  function live_is(name) {
    let included = list_includes(live, name);
    return included;
  }
  let documented = list_filter(names, live_is);
  return documented;
}
