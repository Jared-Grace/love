import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { literals_frozen_write } from "./literals_frozen_write.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function literals_frozen_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every constant whose value has escaped this repo still hands back what the record says it did.");
  ("Merging two spellings is safe to do without asking, and splitting them again later is safe too, because the repair adds a second function rather than changing the first. What that repair cannot reach is a value already written into somebody's browser or bookmarked in an address: change it in place and every future read looks for the new word while every past write still holds the old one.");
  ("So the one edit this watches for is the value moving with the name standing still. It is invisible in every other way - the file still loads, every caller still compiles, and the damage is to data nobody here can see.");
  ("A deliberate change is still allowed and takes one command; what it may not do is happen quietly.");
  let now = await literals_frozen_values();
  let path = literals_frozen_path();
  let recorded = await file_read_json(path);
  let a = Object.keys(now);
  let b = Object.keys(recorded);
  let names = list_concat_unique(a, b);
  let moved = [];
  for (let f_name of names) {
    let was = property_or_null(recorded, f_name);
    let is = property_or_null(now, f_name);
    let different = not_equal(was, is);
    if (different) {
      list_add(moved, {
        f_name,
        was,
        is,
      });
    }
  }
  list_empty_is_assert_json(moved, {
    hint: text_combine_multiple([
      "a frozen value is not what the record says - if the change was meant, write the record again with ",
      literals_frozen_write.name,
      " so it stands in the commit; if it was not, put the old value back",
    ]),
    moved,
  });
  let r = {
    checked: list_size(names),
    moved,
  };
  return r;
}
