import { function_name_to_base } from "./function_name_to_base.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_imports_missing } from "./functions_imports_missing.mjs";
import { property_get } from "./property_get.mjs";
import { folder_js } from "./folder_js.mjs";
import { path_join } from "./path_join.mjs";
import { file_imports_repair } from "./file_imports_repair.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_name } from "./property_get_name.mjs";
export async function functions_imports_missing_repair() {
  "Adds the imports that are missing, in exactly the files that are missing one";
  "The repo-wide fix rewrites every file and every import path in it, which under many hands editing at once is a diff nobody can read and a collision with whoever is mid-edit - so this one touches only what the gate names";
  "Asking the same question again afterwards is the only honest way to say it worked, since a repair that adds nothing looks identical to one that succeeded";
  "Each file is committed the moment it is repaired rather than all of them at the end, because a run over many files lasts long enough that somebody else's sweep takes them first, and what it leaves behind then says nothing about how they were repaired";
  await ai_git_noted();
  let offenders = await functions_imports_missing();
  let repaired = [];
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let combined = function_name_to_base(name);
    let src = folder_js();
    let f_path = path_join([src, combined]);
    let args = [f_path];
    await function_call_commit(file_imports_repair, args);
    list_add(repaired, name);
  }
  let left = await functions_imports_missing();
  let names = list_map(left, property_get_name);
  let r = {
    repaired,
    remaining: names,
  };
  return r;
}
