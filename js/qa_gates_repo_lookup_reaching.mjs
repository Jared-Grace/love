import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names_reaching } from "./function_names_reaching.mjs";
export async function qa_gates_repo_lookup_reaching() {
  "The gates that can reach the question of which repo this machine is currently pointed at, however many files away.";
  "That question is answered out of a setting nobody commits. Every gate is judged inside a frozen copy of the repo, and only committed files are in that copy, so asked in there it comes back with no repo of that name and throws.";
  "A gate that throws is worse than a gate that fails. It writes down no offenders, and a gate naming nobody cannot be shown to be about somewhere else, so it counts against every app and holds the whole site out of every deployment. Measured 2026-08-26: two gates were doing exactly this and between them made sixteen judged commits unshippable for every app. Neither was found by a gate; each was found by spending a quarter of an hour judging a commit to be told the next one.";
  "Imports and not calls, so a gate is named whether or not the branch reaching the lookup is the one that runs. That is the right way round here: the throw happens where the line is reached, and a line nobody expects to reach is exactly the one nobody checked.";
  "What the offender should do instead is work the folder out from where the code is standing. That reading is right in both places at once - inside a frozen copy it names that copy, in the working folder it names the working folder - while a name looked up in a setting names one same place whichever copy is asking.";
  arguments_assert(arguments, 0);
  let names = await qa_gates_names();
  let target = fn_name("user_repo_get");
  let offenders = await function_names_reaching(names, target);
  let r = {
    walked: names.length,
    offenders,
  };
  return r;
}
