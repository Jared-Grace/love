import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function bible_versions_english_choices_psalms_agreement_ordered(
  one,
  other,
) {
  arguments_assert(arguments, 2);
  let left = property_get(one, "nearest");
  let right = property_get(other, "nearest");
  let gap = subtract(left, right);
  return gap;
}
