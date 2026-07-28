import { instructions_text } from "./instructions_text.mjs";
import { claude_md_command_names } from "./claude_md_command_names.mjs";
import { claude_md_table_names } from "./claude_md_table_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function claude_md_names() {
  "Every function name the instructions file names as a thing to run, from both places it names one";
  "The instructions are executable for every Claude at once, so a name that has gone stale there costs each of them a crash";
  "Read across every file the instructions are written in. A name in a note the instructions point at is run by exactly the same reader as one in the file itself, so going stale costs the same crash and has to be caught the same way.";
  let text = await instructions_text();
  let names = claude_md_command_names(text);
  let table = claude_md_table_names(text);
  list_add_multiple(names, table);
  let unique = list_unique(names);
  return unique;
}
