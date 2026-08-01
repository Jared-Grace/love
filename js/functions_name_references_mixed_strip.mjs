import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_name_references_mixed } from "./functions_name_references_mixed.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { text_combine } from "./text_combine.mjs";
import { folder_js } from "./folder_js.mjs";
import { path_join } from "./path_join.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { file_name_references_strip } from "./file_name_references_strip.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_name_references_mixed_strip() {
  "spells every name the one safe way in exactly the functions that spell it both ways";
  "the repo-wide sweep would rewrite every file that mentions a function name at all, which under many hands editing at once is a diff nobody can read — so this touches only what the finder names";
  "asking the same question again afterwards is the only honest way to say it worked, since a run that repaired nothing looks identical to one that succeeded";
  "each file is committed the moment it is repaired rather than all of them at the end, because a run over many files lasts long enough that somebody else's sweep takes them first";
  await ai_git_noted();
  let mixed = await functions_name_references_mixed();
  let stripped = [];
  for (let name of mixed) {
    let right = function_name_extension();
    let combined = text_combine(name, right);
    let src = folder_js();
    let f_path = path_join([src, combined]);
    let args = [f_path];
    await function_call_commit(file_name_references_strip, args);
    list_add(stripped, name);
  }
  let remaining = await functions_name_references_mixed();
  let r = {
    stripped,
    remaining,
  };
  return r;
}
