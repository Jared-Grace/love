import { fn_name } from "./fn_name.mjs";
import { bible_event_reading_function_names } from "./bible_event_reading_function_names.mjs";
import { bible_gathered_event_function_names } from "./bible_gathered_event_function_names.mjs";
import { function_names_reaching } from "./function_names_reaching.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function bible_gathered_finders_gate_run() {
  "Gate: nothing a Bible-corpus finder picks up by prefix may depend on that finder. Throws so the dispatcher seam exits nonzero.";
  "★ THE FAILURE THIS CATCHES SPINS FOREVER AND SAYS NOTHING. Both finders answer with every function whose name starts with one prefix, and the caller then runs each one as a book of records. Name a HELPER inside that prefix and the finder hands the helper back too - so the helper is run, and it asks the finder again, and that runs the helper again. No error, no output, one core at a hundred per cent until somebody notices.";
  "It has now happened twice. Both finders carry a paragraph warning about it, written after the first time, and a paragraph is what a person reads when they are already looking at the file - which is exactly not the moment a name gets chosen. This says it at the moment the name lands instead.";
  "DEPENDENCE IS READ OFF IMPORTS AND NOT OFF CALLS, because an import is unconditional. A record function is a list of data and imports almost nothing, so its closure is small and this stays cheap; anything reaching a finder from inside the finder's own prefix is a helper wearing a record's name.";
  "The prefixed sets are asserted non-empty first. A gate that found no records at all would pass by having nothing to check, which is the one failure it could not report about itself - and an emptied set is a real possibility here, because the whole membership rests on a prefix that could be moved.";
  let readings_names = await bible_event_reading_function_names();
  let events_names = await bible_gathered_event_function_names();
  list_empty_not_is_assert_json(readings_names, {
    hint: "no readings functions were found by their prefix, so this gate checked nothing; either every readings function has been removed or the prefix the finder looks for has moved",
  });
  list_empty_not_is_assert_json(events_names, {
    hint: "no gathered event functions were found by their prefix, so this gate checked nothing; either every gathered span has been removed or the prefix the finder looks for has moved",
  });
  let f_name_target = fn_name("bible_event_reading_function_names");
  let readings_offenders = await function_names_reaching(
    readings_names,
    f_name_target,
  );
  let f_name_target2 = fn_name("bible_gathered_event_function_names");
  let events_offenders = await function_names_reaching(
    events_names,
    f_name_target2,
  );
  let offenders = list_concat(readings_offenders, events_offenders);
  list_empty_is_assert_json(offenders, {
    hint: "these functions sit inside a Bible-corpus prefix and depend on the finder that prefix belongs to, so running the corpus recurses forever without saying anything; they are helpers rather than records - rename each one to start bible_gathered_ instead, which is the prefix the helpers use precisely because no finder looks for it",
  });
  let r = {
    readings: list_size(readings_names),
    events: list_size(events_names),
  };
  return r;
}
