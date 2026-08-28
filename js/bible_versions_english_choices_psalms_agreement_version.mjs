import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_psalms_agreement_ordered } from "./bible_versions_english_choices_psalms_agreement_ordered.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_versions_english_choices_psalms_agreement_version(
  apart,
  lowest_by_folder,
) {
  arguments_assert(arguments, 2);
  function ordered(one, other) {
    let r2 = bible_versions_english_choices_psalms_agreement_ordered(
      one,
      other,
    );
    return r2;
  }
  apart.sort(ordered);
  let usable = await bible_versions_english_choices_usable();
  let unmeasured = [];
  for (let version of usable) {
    let property_name = bible_folder_key();
    let bible_folder = property_get(version, property_name);
    let seen = lowest_by_folder[bible_folder];
    let unasked = equal(seen, undefined);
    if (unasked) {
      list_add(unmeasured, version);
    }
  }
  return unmeasured;
}
