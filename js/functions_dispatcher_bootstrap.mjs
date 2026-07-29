import { fn_name } from "./fn_name.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
export async function functions_dispatcher_bootstrap() {
  "Every function the dispatcher itself needs before it can run anything at all";
  "These are the ones where a broken import is not one broken function but a stopped repo. Everything any of us asks for arrives through the same entry, so a name it cannot resolve fails the call before the asked-for function is even looked up - and it fails that way for every one of us at once, on a folder we all share";
  "Worse, it takes the repair with it. The canonicalizing pass that would add the missing import is itself asked for through this entry, so a function in here cannot be repaired by the usual command once it is broken. That is why the instructions say to hand-write the import for these, and it is the reason for naming the set rather than leaving it to be rediscovered each time somebody trips on it";
  "Measured twice in one session: a mark placed in a name-sorting helper, and a missing import in the grant checker, each stopping every command in the repo until somebody noticed and put it back";
  let entry = fn_name("function_run_from_process_argv_full_name");
  let names = [entry];
  let reached = await function_dependencies(names);
  return reached;
}
