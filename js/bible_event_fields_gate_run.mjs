import { bible_event_fields } from "./bible_event_fields.mjs";
import { bible_gathered_event_function_names } from "./bible_gathered_event_function_names.mjs";
import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
import { each_pair_min } from "./each_pair_min.mjs";
import { not } from "./not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function bible_event_fields_gate_run() {
  "Gate: every gathered Bible event carries exactly the fields the record declares - no field missing, and none added. Throws so the dispatcher seam exits nonzero.";
  "The record is two fields on purpose, so that gathering a chapter can only ever point at the text and never state a reading of it. A field quietly added to one chapter's events is how that guarantee is lost, and it is lost silently, because a bigger object answers every question a smaller one does.";
  "The set of gathered chapters is derived from their shared prefix rather than listed here, so a chapter gathered tomorrow is under the gate without anyone remembering to add it.";
  "The empty answer is asserted against before anything is compared. A gate that finds nothing to look at passes, and passing for want of anything to check is the one failure a gate can never report about itself.";
  let fields = bible_event_fields();
  function field_name(field) {
    let n = property_get(field, "name");
    return n;
  }
  let declared_names = list_map(fields, field_name);
  let declared = list_sort_text(declared_names);
  let f_names = await bible_gathered_event_function_names();
  list_empty_not_is_assert_json(f_names, {
    hint: "no gathered Bible events were found at all, so this gate compared nothing; either every gathered chapter has been removed or the prefix the finder looks for has moved",
    declared,
  });
  async function run_gathered(f_name) {
    let events = await function_run(f_name, []);
    return events;
  }
  let events_lists = await list_map_async(f_names, run_gathered);
  let wrong = [];
  let counted = 0;
  function each_gathered(events, f_name) {
    function each_event(event) {
      counted = counted + 1;
      let carried_names = object_property_names(event);
      let carried = list_sort_text(carried_names);
      let same = lists_equal_pair(carried, declared);
      if (not(same)) {
        list_add(wrong, {
          f_name,
          title: property_get(event, "title"),
          carried,
          declared,
        });
      }
    }
    each(events, each_event);
  }
  each_pair_min(events_lists, f_names, each_gathered);
  list_empty_is_assert_json(wrong, {
    hint: "a gathered Bible event carries fields the record does not declare, or is missing one it does; the record is deliberately small, so widen it in bible_event_fields on purpose or take the extra field back out",
    declared,
  });
  let gathered_count = list_size(f_names);
  let r = {
    gathered_count,
    events_checked: counted,
    declared,
  };
  return r;
}
