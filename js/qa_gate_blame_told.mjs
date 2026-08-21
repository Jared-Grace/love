import { functions_commits_last_warm } from "./functions_commits_last_warm.mjs";
import { function_commit_last_remembered } from "./function_commit_last_remembered.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { probes_at_once } from "./probes_at_once.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function qa_gate_blame_told(message, known) {
  "For every function a gate complained about, the last commit that touched it";
  "A gate names what is wrong and stops there. With several of us in one folder the answer to who is nearly always somebody else, mid-migration - and without the commit the reader spends the next minutes proving the fault is not theirs. That is the cost this removes, and it is paid on every red gate by everyone who sees it.";
  "The names are picked out of what the gate said rather than reported by the gate, so this works for every gate at once and no gate has to be changed to join in.";
  "Only names that answer to a real function survive, so an ordinary word in the sentence cannot become an accusation.";
  "the list of names is handed in rather than asked for, because reading every function in every repo is the most expensive thing here and several gates can fail in one run - asked for inside, the cost would be paid once per red gate instead of once per run";
  let unique = functions_names_in_text(message, known);
  ("★ THE ANSWERS ARE FETCHED IN ONE READ BEFORE ANY NAME IS ASKED AFTER. Asking git which commit last touched one file makes it walk the whole history for that one path, at about five seconds each, and a red run names about a hundred and thirteen - roughly three hundred and seventy seconds of processor taken off the peers sharing this machine, for something one twenty-nine second read of the same history already holds. Warming puts those answers where the asking below looks.");
  ("It is a saving and not a change of answer: a name the read does not cover is simply not filled in, and the ask below then goes and finds it exactly as it did before. So this line could be deleted and every reported commit would be the same one.");
  await functions_commits_last_warm(unique);
  ("asking after a name starts a program that reads the history, so a fixed few are asked at a time. what a gate says is now everything it printed rather than the one sentence it threw, and a gate that found two hundred faults names two hundred functions - starting two hundred of these together would cost more in the starting than the waiting it saves");
  let limit = probes_at_once();
  let blamed = await list_map_limited_async(
    unique,
    function_commit_last_remembered,
    limit,
  );
  let found = list_filter_null_not_is(blamed);
  return found;
}
