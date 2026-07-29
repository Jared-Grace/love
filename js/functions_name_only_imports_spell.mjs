import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_name_only_imports } from "./functions_name_only_imports.mjs";
import { function_name_only_imports_spell } from "./function_name_only_imports_spell.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
export async function functions_name_only_imports_spell() {
  "Spells the word in every file that imports a name only to read it, and in no others";
  "The set is worked out here rather than handed in, because it is not a reading anybody has to do: a name whose every mention is the reading of its own word can be spelled instead, and one that is called anywhere cannot. There is no judgment in that, so asking a caller for the list would only be a way for the list to be wrong";
  "Each file is committed the moment it is changed rather than all of them at the end. A run this wide lasts long enough that somebody else's sweep takes the files first, and what that sweep leaves behind says nothing about how they were changed";
  "Whatever was already waiting is committed first, so the first file repaired here cannot file a neighbour's unfinished work under this name";
  "Asking the same question again afterwards is the only honest way to say it worked, because a run that changed nothing looks exactly like one that changed everything it should have";
  await ai_git_noted();
  let offenders = await functions_name_only_imports();
  let spelled = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let args = [f_name];
    await function_call_commit(function_name_only_imports_spell, args);
    list_add(spelled, f_name);
  }
  let left = await functions_name_only_imports();
  let names = list_map(left, property_get_f_name);
  let r = {
    spelled: spelled.length,
    remaining: names,
  };
  return r;
}
