import { instructions_text } from "./instructions_text.mjs";
import { claude_md_atom_names } from "./claude_md_atom_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function atoms_documented() {
  "The atoms the instructions file's vocabulary tables name, kept to the ones that are live functions";
  "A row can name something that is not a function of its own - a shape, a family, a thing described rather than run - and those are prose rather than a promise that a unit exists. The other gate on this file already refuses a name that no function answers to, so nothing is lost by dropping them here";
  "Read across every file the instructions are written in, not just the one that loads each session. A table moved into a note of its own would otherwise leave this finding nothing and reporting no defects, which is a gate passing because it stopped looking.";
  let text = await instructions_text();
  let names = claude_md_atom_names(text);
  let live = await functions_names();
  function live_is(name) {
    let included = list_includes(live, name);
    return included;
  }
  let documented = list_filter(names, live_is);
  return documented;
}
