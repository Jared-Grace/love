import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names_reaching } from "./function_names_reaching.mjs";
import { property_set } from "./property_set.mjs";
export async function qa_gates_folder_uncommitted_reaching() {
  "The gates that can reach a folder no commit contains, named per folder, however many files away.";
  "A gate is judged inside a frozen copy of the repo, and that copy is made out of commits. A folder the repo is told to ignore is therefore never in it - not sometimes, never - so a gate reading one is asking about something that cannot be there. The build outputs are the ones this bites: they are written by building and ignored on purpose, so they exist in the working folder every time a person checks by hand and are absent every time the gate is actually asked.";
  "Measured 2026-09-04: three gates came back with no such file or directory naming the built folder, and they had been doing it in every judgement ever recorded. One of them is the ceiling that is supposed to keep the small pages under their size caps, so that ceiling had never once held while being judged. It looked like a gate that goes red rather than a gate that cannot run.";
  "Reaching and not failing is the question, because the ones that throw are the ones that got off lightly. A gate that reads an absent folder and asks how many things are in it is handed nothing and answers that nothing is wrong, which is the same silence a clean repo gives - so it passes, for ever, without ever having looked.";
  "Imports and not calls, so a gate is named whether or not the branch reaching the folder is the one that runs. A folder read down a branch nobody expects to take is exactly the read nobody checked.";
  "The folders are named here one at a time rather than read off the ignore file, because the ignore file spells paths and this has to ask about functions, and no reading turns one into the other. Adding a folder means adding the function that spells it.";
  arguments_assert(arguments, 0);
  let names = await qa_gates_names();
  let f_name = fn_name("folder_web_dev");
  let f_name2 = fn_name("folder_web_latest");
  let f_name3 = fn_name("folder_web_latest_absolute");
  let f_name4 = fn_name("folder_gitignore_name");
  let f_name5 = fn_name("folder_gitignore_join");
  let targets = [f_name, f_name2, f_name3, f_name4, f_name5];
  let offenders = {};
  for (let target of targets) {
    let reaching = await function_names_reaching(names, target);
    property_set(offenders, target, reaching);
  }
  let r = {
    walked: names.length,
    offenders,
  };
  return r;
}
