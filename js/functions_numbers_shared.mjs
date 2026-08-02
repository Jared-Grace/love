import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_numbers_used } from "./function_numbers_used.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
export async function functions_numbers_shared(most) {
  "Every number this repo writes in more than one function and in no more than the given many, together with the functions that write it.";
  "Numbers rather than every kind of value, because the strings a function holds are mostly the language's own words - the name of a node kind, a style property, a key on an object - and those are shared by everything that speaks about the same thing rather than by two people writing the same decision down twice. Measured across the repo: two thousand values are shared as strings and sixty-three as numbers, and reading the string half is reading a dictionary. A number carries almost nothing but a decision - a length, a delay, a ceiling, one part of a colour.";
  "How wide a spread still counts is asked for rather than settled here, because it is the whole judgment and it belongs to whoever is reading. Nought, one and two are written by hundreds of functions and mean an index or a count rather than anything anybody chose; the same figure in four places is usually one thing named four times.";
  "This reads and reports and changes nothing. Whether a group is one value waiting to be named, or several places that merely land on the same figure, is a judgment - and where it is one value, the collapse is the ordinary one: a getter holding it, and a call to that getter where each figure stood.";
  arguments_assert(arguments, 1);
  let love = await repo_functions_names("love");
  let by_value = {};
  for (let f_name of love) {
    let numbers = await function_numbers_used(f_name);
    for (let value of numbers) {
      let known = property_exists(by_value, value);
      if (known) {
        let written_by = property_path_get_2(by_value, value, "names");
        list_add(written_by, f_name);
        continue;
      }
      by_value[value] = {
        value,
        names: [f_name],
      };
    }
  }
  let keys = properties_get(by_value);
  let groups = [];
  for (let key of keys) {
    let group = property_get(by_value, key);
    let names = property_get(group, "names");
    let shared = list_multiple_is(names);
    let alone = not(shared);
    if (alone) {
      continue;
    }
    let count = list_size(names);
    let narrow = less_than_equal(count, most);
    let wide = not(narrow);
    if (wide) {
      continue;
    }
    let value = property_get(group, "value");
    list_add(groups, {
      count,
      value,
      names,
    });
  }
  function by_count(a, b) {
    let difference = subtract(b.count, a.count);
    return difference;
  }
  groups.sort(by_count);
  return groups;
}
