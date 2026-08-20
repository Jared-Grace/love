import { arguments_assert } from "./arguments_assert.mjs";
import { examples_import_prefixes } from "./examples_import_prefixes.mjs";
import { examples_imports_wrong } from "./examples_imports_wrong.mjs";
import { file_read } from "./file_read.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace } from "./text_replace.mjs";
import { equal_not } from "./equal_not.mjs";
export async function examples_imports_repair() {
  "Points every example file at the repo's javascript from where the examples room now sits, however deep that is.";
  "It asks which files are reaching from the wrong depth, repairs exactly those, and asks again - so it needs no list from whoever runs it and cannot drift from what is actually broken. The second asking is the proof: an empty answer is the whole report, and a repair that quietly did nothing would fail here rather than be believed.";
  "The room moving is what makes this necessary, and the room will move again. An example reaches its function by climbing out of wherever it is kept, so the number of steps is a fact about the folder rather than about the example, and no example should have to be edited to learn it.";
  arguments_assert(arguments, 0);
  let before = await examples_imports_wrong();
  function path_of(offender) {
    let f_path = property_get(offender, "f_path");
    return f_path;
  }
  let named = list_map(before, path_of);
  let paths = list_unique(named);
  let prefixes = examples_import_prefixes();
  let right = property_get(prefixes, "right");
  let wrong = property_get(prefixes, "wrong");
  let repaired = [];
  for (let f_path of paths) {
    let text = await file_read(f_path);
    let written = text;
    for (let spelled of wrong) {
      written = text_replace(written, spelled, right);
    }
    let changed = equal_not(written, text);
    if (changed) {
      await file_overwrite_uncached(f_path, written);
      repaired.push(f_path);
    }
  }
  let after = await examples_imports_wrong();
  list_empty_is_assert_json(after, {
    hint: "some example files are still reaching for the repo's javascript from the wrong depth after the repair - the start they spell is not one of the ones this knows how to recognise, so it was passed over rather than corrected",
    after,
  });
  let r = {
    repaired,
    remaining: after,
  };
  return r;
}
