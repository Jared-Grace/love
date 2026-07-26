import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_read } from "./file_read.mjs";
import { claude_md_command_names } from "./claude_md_command_names.mjs";
import { claude_md_table_names } from "./claude_md_table_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function claude_md_names() {
  "Every function name the instructions file names as a thing to run, from both places it names one";
  "The instructions are executable for every Claude at once, so a name that has gone stale there costs each of them a crash";
  let f_path = repo_path_combine("love", "CLAUDE.md");
  let text = await file_read(f_path);
  let names = claude_md_command_names(text);
  let table = claude_md_table_names(text);
  list_add_multiple(names, table);
  let unique = list_unique(names);
  return unique;
}
