import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { functions_names } from "./functions_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { memory_symbol_call_tokens } from "./memory_symbol_call_tokens.mjs";
export async function memory_symbol_references_unresolved() {
  "List every function-call-style token - a snake_case name followed by an open";
  "paren, foo underscore bar then ( - written in a memory .md file that does NOT";
  "match a live function name across the repos. These are candidate STALE";
  "references: a memory naming a function since renamed or deleted. A read-only";
  "REVIEW report, not a hard gate - prose can legitimately write name( so a";
  "human triages the list; backtick-only tokens are excluded on purpose (too";
  "many non-function terms match). The pointer-orphan report is the other half.";
  let folder = memory_folder();
  let file_names = await folder_read_files(folder);
  function is_md(name) {
    let ew = text_ends_with(name, ".md");
    return ew;
  }
  let md_names = list_filter(file_names, is_md);
  async function read_one(name) {
    let path = path_join([folder, name]);
    let text = await file_read(path);
    return text;
  }
  let texts = await list_map_unordered_async(md_names, read_one);
  let joined = texts.join("\n");
  let tokens = memory_symbol_call_tokens(joined);
  let fn_names = await functions_names();
  function is_unresolved(token) {
    let un = list_includes_not(fn_names, token);
    return un;
  }
  let unresolved = list_filter(tokens, is_unresolved);
  return unresolved;
}
