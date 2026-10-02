import { arguments_assert } from "./arguments_assert.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { function_imports_reached } from "./function_imports_reached.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function function_names_reaching_any_walked(
  f_names,
  f_names_target,
) {
  "$plain f_names";
  "$plain f_names_target";
  "Which of these functions can reach any of those by importing, however many files away, with how many functions the walk opened to find out - one record per offending pair, saying who reached what.";
  "It is the counting half of the reading beside it, and that one is now a line thick over this. A gate asking the plain question is green by finding no pair, which is also what it answers when the names it was given have moved or the imports stopped being followed, so the two cannot be told apart from the verdict. How much was opened is the number that falls when the walk breaks, and it only exists where the walk happens.";
  "The functions reached are counted once each across every door asked about, not once per door. Two doors into the same family would otherwise make the walk look twice the size it is, and the number is here to be watched for falling rather than to be exact about anything.";
  arguments_assert(arguments, 2);
  list_is_assert_json(f_names, {
    hint: "function names reaching any walked expects a list of names to ask about; a single name given as text would be walked one letter at a time and each letter looked up as a function",
  });
  list_is_assert_json(f_names_target, {
    hint: "function names reaching any walked expects a list of names to look for; a single name given as text would be walked one letter at a time",
  });
  let offenders = [];
  let seen = {};
  for (let f_name of f_names) {
    let reached = await function_imports_reached(f_name);
    function reached_note(name) {
      property_set(seen, name, 1);
    }
    each(reached, reached_note);
    for (let target of f_names_target) {
      let reaches = list_includes(reached, target);
      if (reaches) {
        list_add(offenders, {
          f_name,
          target,
        });
      }
    }
  }
  let names = object_property_names(seen);
  let r = {
    reached: list_size(names),
    offenders,
  };
  return r;
}
