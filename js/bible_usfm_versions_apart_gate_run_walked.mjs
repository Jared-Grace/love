import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_usfm_versions_apart_allowed } from "./bible_usfm_versions_apart_allowed.mjs";
import { bible_usfm_versions_apart_gate_run_row } from "./bible_usfm_versions_apart_gate_run_row.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export function bible_usfm_versions_apart_gate_run_walked(
  versions_read,
  shelf_size,
  shelf,
  rows,
  verses,
) {
  arguments_assert(arguments, 5);
  let whole_shelf = equal(versions_read, shelf_size);
  assert_json(whole_shelf, {
    versions_read,
    shelf_size,
    shelf,
    hint: "a bible on the shelf was never reached by the sweep, so it is unmeasured rather than clean; find where its books are written on this disk",
  });
  let allowed = bible_usfm_versions_apart_allowed();
  let unread = [];
  let risen = [];
  let slack = [];
  bible_usfm_versions_apart_gate_run_row(rows, allowed, slack, unread, risen);
  let none_unread = list_empty_is(unread);
  assert_json(none_unread, {
    unread,
    hint: "this bible says nothing the rest of the shelf says at these verses and nobody has read them; open the verse named beside another bible at the same verse, and either write down what you found or hold the bible back from readers",
  });
  let none_risen = list_empty_is(risen);
  assert_json(none_risen, {
    risen,
    hint: "this bible stands apart more often than the reading written beside it accounts for, so the text under that name is not the text that was read; the allowance may only be lowered, never raised to meet a new count",
  });
  let list = object_property_names(allowed);
  let walked = {
    verses,
    versions: versions_read,
    allowances: list_size(list),
    slack,
  };
  return walked;
}
