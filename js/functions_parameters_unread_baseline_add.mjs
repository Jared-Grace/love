import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_parameters_unread } from "./functions_parameters_unread.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_parameters_unread_baseline_path } from "./functions_parameters_unread_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_parameters_unread_baseline_add(names_comma) {
  "Record NAMED functions that take a parameter their own body never reads, and leave every other such function still failing.";
  "Its whole-file twin takes everything the repo carries right now, which is the wrong shape for this gate in particular, because what it holds is a mixture. Some functions ignore a parameter because the body was meant to use it and does not, and that is the bug the gate exists to catch. Others fill a slot that somebody else decides the shape of - a quiz kind handed over as a value, called by a dispatcher that gives every kind the same arguments, where one kind needs a thing and its neighbour does not. The second cannot be repaired from the function that has the parameter, and the repair arm refuses it for exactly that reason. Absorbing the whole set treats the two alike, and afterwards nothing tells the bug from the shared shape.";
  "The refusals live in the shared adder and both matter here. A name not failing right now is not recorded, so a mistyped name cannot become a permanent line for something the repo does not do. A name the record already holds is not recorded twice, because asking for it means the caller believes something about the file that is not true.";
  "Entries the record already holds are carried over as they stand rather than taken again from the repo. A function already excused for one parameter may since have grown a second one nothing reads, and re-reading it would sweep that in under cover of the first - which is the growth this ratchet exists to refuse.";
  "Every entry is a function name and the parameters of its that nothing reads, so the record is sorted by that name for the same reason its whole-file twin comes out sorted: the file is read by people, and a line arriving in the middle rather than at the end is the difference between a diff nobody has to think about and one that has to be read.";
  arguments_assert(arguments, 1);
  let names = text_split_comma(names_comma);
  let offenders = await functions_parameters_unread();
  let offending_names = list_map_property(offenders, "name");
  let phantom = list_difference(names, offending_names);
  list_empty_is_assert_json(phantom, {
    phantom,
    hint: "every parameter of these is read right now, so there is nothing to record - a ratchet only ever blesses what is actually red, and a line recorded for something the repo does not do can never be found again",
  });
  let path = functions_parameters_unread_baseline_path();
  let known = await baseline_known_read(path);
  let known_names = list_map_property(known, "name");
  let already = list_intersection(names, known_names);
  list_empty_is_assert_json(already, {
    already,
    hint: "the record already holds these, so asking for them again means it does not say what you think it says - read the file",
  });
  function asked_for_is(entry) {
    let name = property_get(entry, "name");
    let asked = list_includes(names, name);
    return asked;
  }
  let adding = list_filter(offenders, asked_for_is);
  list_add_multiple(known, adding);
  list_sort_text_property(known, "name");
  let written = await baseline_known_write(known, path);
  let r = {
    added: list_size(adding),
    known: written,
  };
  return r;
}
