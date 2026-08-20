import { fn_name } from "./fn_name.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
export function object_property_names_numbers_sorted(object) {
  "The numbers the property names of this record spell, in counting order.";
  "A record kept under a number has text for its names, because a property name can be nothing else. So every reader of one has to read them back as numbers before it can say which comes first, and four commands here were each doing that by hand a line at a time.";
  "Counting order rather than the order the names arrived in: the arrival order is a fact about how the record came to be filled rather than about what is in it, and whoever wants these numbered wants them counted.";
  ("A name that is not a number answers loudly here, because ",
    fn_name("number_from_text"),
    " says so. That is the wanted answer - a record whose names were expected to be chapters and turn out not to be is a record the caller is reading wrongly, and the quiet answer looks exactly like a chapter nobody has yet.");
  let names = object_property_names(object);
  let numbers = list_map(names, number_from_text);
  let sorted = list_sort_number(numbers);
  return sorted;
}
