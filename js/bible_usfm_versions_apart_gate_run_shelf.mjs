import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_verses_apart } from "./bible_usfm_versions_verses_apart.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function bible_usfm_versions_apart_gate_run_shelf() {
  arguments_assert(arguments, 0);
  let found = await bible_usfm_versions_verses_apart();
  let verses = property_get(found, "verses");
  let rows = property_get(found, "rows");
  let measured_any = greater_than(verses, 0);
  assert_json(measured_any, {
    verses,
    hint: "the sweep measured no verses at all, so every bible came out standing apart at nothing for want of anything to compare; the shelf on this disk is the thing to look at, not this list",
  });
  let versions = bible_usfm_versions();
  let shelf = object_property_names(versions);
  let r = {
    verses,
    rows,
    shelf,
  };
  return r;
}
