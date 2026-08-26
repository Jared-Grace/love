import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_imports_neighbor_climbed } from "./functions_imports_neighbor_climbed.mjs";
import { property_get } from "./property_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_imports_neighbor_climbed_repair() {
  arguments_assert(arguments, 0);
  ("Writes the short spelling of a neighbour in exactly the files still reaching one the long way round, and says which are left.");
  ("Nothing new is written here. The canonicalizing pass already spells an import the short way and has done all along; these files simply have not been asked since they arrived from a repo beside this one, where the long spelling was the correct one. So the repair is that pass, run over the files that need it and no others.");
  ("Asking the same question again afterwards is the only honest way to say it worked, because a repair that changed nothing looks exactly like one that succeeded.");
  ("The general form of this - every function the pass would still change - was measured taking over an hour and a half and rewrites files nobody asked about. This names its own set from a reading that takes a couple of minutes, so what gets touched is only what was actually wrong.");
  ("Each file is committed the moment it is repaired rather than all of them at the end, because a run over many files lasts long enough for somebody else's sweep to take them first, and what that leaves behind says nothing about how they were repaired.");
  ("The pass is asked in its checking form, so a file caught half-written by a peer is reported back rather than rewritten.");
  await ai_git_noted();
  let offenders = await functions_imports_neighbor_climbed();
  let repaired = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let args = [f_name];
    await function_call_commit(function_auto_checked, args);
    list_add(repaired, f_name);
  }
  let left = await functions_imports_neighbor_climbed();
  let names = list_map(left, property_get_f_name);
  let r = {
    repaired,
    remaining: names,
  };
  return r;
}
