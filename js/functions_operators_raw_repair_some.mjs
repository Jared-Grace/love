import { fn_name } from "./fn_name.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_operators_raw } from "./functions_operators_raw.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_operators_raw_repair_some(how_many) {
  "Puts a few of the functions that still spell their operators as symbols through the canonicalizing pass, and stops there";
  "The whole set is about a hundred and twenty five functions, which is most of the repo touched at once. That is not a correctness worry - the pass is behaviour preserving and was probed on the three shapes people hold back over - but with many hands editing one working directory it is a bet on the next quarter of an hour being quiet, and that bet is somebody's to make. A few at a time is nobody's bet: ten of them is a minute, and a peer editing one of the ten is a conflict you see immediately rather than one buried in a hundred";
  ("So this is the one to reach for by default and ",
    fn_name("functions_operators_raw_repair"),
    " is for a quiet box. Running this over and over gets to the same place, because each run fixes the ones it took and the next ask no longer returns them");
  ("The count arrives from a command line as a word, so it is read as a number before it is used - handing a word to the taking would quietly take none");
  ("What was repaired is worked out by asking again rather than by writing down what was tried, because the two are not the same thing and the first version of this said they were. The checked pass refuses a function it cannot process and changes no file when it does, so a name that was tried and a name that was fixed came back in the same list - and ",
    fn_name("function_worker_pool_run"),
    " appeared as repaired and as still waiting in one breath. The ones that refused are worth naming on their own, because those are the ones somebody has to read");
  ("The checked form is the one called, not the bare one: the bare pass throws on a file it cannot process, which would throw past this loop and discard every function already paid for");
  ("Each function is committed the moment it is canonicalized rather than all of them at the end, because somebody else's sweep takes the files otherwise, and what it leaves behind then says nothing about how they were changed");
  function name_of(one) {
    let n = property_get(one, "f_name");
    return n;
  }
  await ai_git_noted();
  let offenders = await functions_operators_raw();
  let size = number_from_text(how_many);
  let chosen = list_take(offenders, size);
  let attempted = list_map(chosen, name_of);
  for (let name of attempted) {
    let args = [name];
    await function_call_commit(function_auto_checked, args);
  }
  let left = await functions_operators_raw();
  let names = list_map(left, name_of);
  let repaired = list_without_multiple(attempted, names);
  let refused = list_without_multiple(attempted, repaired);
  let r = {
    repaired,
    refused,
    remaining: names,
  };
  return r;
}
