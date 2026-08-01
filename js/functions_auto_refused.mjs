import { property_not } from "./property_not.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
export async function functions_auto_refused() {
  arguments_assert(arguments, 0);
  ("every function the normalize pass cannot carry through and leave loadable, asked of the whole repo at once and answered without touching a file");
  ("the per-name check has been askable for a while and there was no way to ask it of everything. So the answer was only ever known for the handful of names somebody happened to run it on, which is the wrong handful: a pass that breaks one shape of code breaks it everywhere that shape occurs, and the file being edited today is the least likely place to notice.");
  ("asked a fixed number at a time rather than all at once. Every step of the pass is work this program does itself rather than waiting on anything outside it, so asking two thousand at once finishes no sooner - it only holds two thousand trees at the same time, which was measured climbing past a gigabyte and a half and still rising.");
  ("run it by hand and expect it to take the best part of an hour. That is not a number to tune: for work a program does itself, a limit of twenty and a limit of one finish at the same moment, so the whole repo costs one check times the number of names however it is asked. A gate against this was written and then deleted, because the run that measured it was still going at sixty minutes - the same failure is watched for a few milliseconds by the corpus over the step that caused it, and that is the one that belongs in the gate list.");
  let at_once = 20;
  let f_names = await functions_names();
  let results = await list_map_limited_async(
    f_names,
    function_auto_check,
    at_once,
  );
  function refused_is(result) {
    let not_ok = property_not(result, "ok");
    return not_ok;
  }
  let names = list_filter_map_property(results, refused_is, "name");
  return names;
}
