import { property_difference } from "./property_difference.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bible_versions_english_choices_psalms_agreement_ordered(
  one,
  other,
) {
  arguments_assert(arguments, 2);
  let gap = property_difference(one, other, "nearest");
  return gap;
}
