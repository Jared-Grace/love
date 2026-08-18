import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_imports_dangling } from "./functions_imports_dangling.mjs";
import { list_map } from "./list_map.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_imports_unused_repair } from "./functions_imports_unused_repair.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_imports_dangling_repair() {
  "Takes out the import lines that name a file which is not there, in exactly the functions the dangling sweep names, and asks a second time to say which of them are left.";
  "It finds its own set rather than being handed one. What is dangling changes hour by hour here, because the commonest way one appears is somebody renaming a small function partway: the new import lands, the old line stays, and the file it names has already gone. A list written into the call would be a list of what was broken when it was typed, and the sweep says what is broken now.";
  "The remover it calls is the one that takes out imports nothing reads, rather than one written for this. That is not a shortcut - an import naming a file that is gone is only safe to take out when nothing reads the name, and that is the very question the other one already asks. It does mean a file being repaired also loses any other import nothing reads in it, which is wanted anyway and is the whole of what it does elsewhere.";
  "What comes back under remaining is the half this cannot do. There the name is genuinely read, so the line cannot simply go and the missing file has to be written instead - and what belongs in it is known only to whoever was partway through writing it. Naming them is the service; guessing at their bodies would be the harm.";
  "This is worth having as its own command because of what a dangling import costs. A name read without an import is one line failing when that line runs. A file that is not there stops the whole module loading, and with it every module importing that one, before any of it has had the chance to run - so it is first felt as a build that will not finish, some distance from the file that caused it.";
  "Each repair commits itself under its own name and its own function, so a sweep by somebody else can take at most one step rather than the whole run. Whatever was already noted is committed before the first step for the same reason - it would otherwise be swept into that step's commit and filed under a function that never wrote it.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let before = await functions_imports_dangling();
  let f_names = list_map(before, property_get_f_name);
  let repaired = [];
  for (let f_name of f_names) {
    let one = [f_name];
    await function_call_commit(functions_imports_unused_repair, one);
    list_add(repaired, f_name);
  }
  let after = await functions_imports_dangling();
  let remaining = list_map(after, property_get_f_name);
  let r = {
    repaired,
    remaining,
  };
  return r;
}
