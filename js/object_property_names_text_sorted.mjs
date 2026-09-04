import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function object_property_names_text_sorted(object) {
  "Every name an object carries, in the order the alphabet puts them in rather than the order they were written down in.";
  "IT IS SORTING THAT TURNS A LIST OF NAMES BACK INTO A SET. The repository's way of asking whether two collections are the same writes each one out and compares the writing, so the order the names arrived in counts as part of the answer - and two readings of the same set almost never arrive in the same order once anything in between has moved a name to a new folder. Sorting first is what makes such a comparison ask the question that was meant.";
  "The twin that sorts by number is for names that are really counting, where the alphabet would put ten before two.";
  arguments_assert(arguments, 1);
  let list = object_property_names(object);
  let sorted = list_sort_text(list);
  return sorted;
}
