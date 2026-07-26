import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { python_mirrors_write } from "./python_mirrors_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { python_mirrors } from "./python_mirrors.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { python_mirror_checked } from "./python_mirror_checked.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function python_mirrors_assert() {
  arguments_assert(arguments, 0);
  ("Gate: every list the python guard imports still says what this side says.");
  ("Drift is silent in the dangerous direction. The guard's floor is keyed on these");
  ("sets, so a name dropped from one copy stops being denied while every check made");
  ("from the other side still reports it as covered — closed from wherever you look,");
  ("open where it counts.");
  ("Reports every stale file rather than the first, since regenerating them is one");
  ("command either way and a partial answer only earns a second run.");
  let mirrors = python_mirrors();
  let checked = await list_map_async(mirrors, python_mirror_checked);
  let stale = list_filter_property_not(checked, "fresh", true);
  let paths = list_map_property(stale, "path");
  list_empty_is_assert_json(paths, {
    hint: text_combine_multiple([
      "these generated python files no longer match their source — regenerate them with ",
      python_mirrors_write.name,
    ]),
    paths,
  });
  let r = {
    checked: list_size(checked),
    stale: paths,
  };
  return r;
}
