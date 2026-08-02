import { ai_git_noted } from "./ai_git_noted.mjs";
import { file_math_calls_repair } from "./file_math_calls_repair.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_math_calls_pending } from "./functions_math_calls_pending.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_math_calls_repair() {
  "Says the covered Math calls with the repo's own names, in exactly the files still spelling one.";
  "The whole normalize pass would do this too, one file at a time as somebody happens to touch it. Asking which files are waiting and moving those is the same change arriving now rather than over however many months it takes for every one of them to be edited for some other reason.";
  "Asking the same question again afterwards is the only honest way to say it worked. A file that was never a candidate and a file that was repaired read the same way once it is written back out.";
  "Each file is committed the moment it is repaired rather than all of them at the end, because a run over fifty files lasts long enough that somebody else's sweep takes them first, and what it leaves behind then says nothing about how they were repaired.";
  await ai_git_noted();
  let pending = await functions_math_calls_pending();
  let repaired = [];
  for (let one of pending) {
    let f_path = property_get(one, "f_path");
    let args = [f_path];
    await function_call_commit(file_math_calls_repair, args);
    let name = property_get(one, "name");
    list_add(repaired, name);
  }
  let left = await functions_math_calls_pending();
  let remaining = list_map_property(left, "name");
  let r = {
    repaired,
    remaining,
  };
  return r;
}
