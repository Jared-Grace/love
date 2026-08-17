import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_hash_fields_unknown_findings } from "./app_shared_hash_fields_unknown_findings.mjs";
import { list_size } from "./list_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { app_shared_bible_hash_unknown_gate_run_note } from "./app_shared_bible_hash_unknown_gate_run_note.mjs";
import { list_get } from "./list_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { each_index } from "./each_index.mjs";
export function app_shared_bible_hash_unknown_gate_run_check(
  one,
  fields,
  defects,
) {
  arguments_assert(arguments, 3);
  let hash = property_get(one, "hash");
  let wanted = property_get(one, "findings");
  let found = app_shared_hash_fields_unknown_findings(hash, fields);
  let count_wanted = list_size(wanted);
  let count_found = list_size(found);
  let counted_wrong = equal_not(count_found, count_wanted);
  if (counted_wrong) {
    app_shared_bible_hash_unknown_gate_run_note(
      one,
      "wanted " + count_wanted + " wrong, found " + count_found,
      defects,
    );
    return;
  }
  function compare(want, index) {
    let finding = list_get(found, index);
    let field = property_get(finding, "field");
    let value = property_get(finding, "value");
    let name = property_get(field, "name");
    let name_wanted = property_get(want, "name");
    let value_wanted = property_get(want, "value");
    let named_wrong = equal_not(name, name_wanted);
    if (named_wrong) {
      app_shared_bible_hash_unknown_gate_run_note(
        one,
        "wanted the " + name_wanted + " wrong, found the " + name,
        defects,
      );
      return;
    }
    let valued_wrong = equal_not(value, value_wanted);
    if (valued_wrong) {
      app_shared_bible_hash_unknown_gate_run_note(
        one,
        'wanted "' + value_wanted + '", found "' + value + '"',
        defects,
      );
      return;
    }
    let suggest = property_get(field, "suggestions");
    let offered = suggest(value);
    let suggestion = property_get(want, "suggestion");
    let nothing_wanted = text_empty_is(suggestion);
    if (nothing_wanted) {
      let offered_anyway = list_empty_not_is(offered);
      if (offered_anyway) {
        app_shared_bible_hash_unknown_gate_run_note(
          one,
          'nothing is spelled like "' +
            value +
            '", yet it offered ' +
            list_join_comma(offered),
          defects,
        );
      }
      return;
    }
    let missing = list_includes_not(offered, suggestion);
    if (missing) {
      app_shared_bible_hash_unknown_gate_run_note(
        one,
        'wanted "' +
          suggestion +
          '" offered for "' +
          value +
          '", got ' +
          list_join_comma(offered),
        defects,
      );
    }
  }
  each_index(wanted, compare);
}
