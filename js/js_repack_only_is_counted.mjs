import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not } from "./not.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_call_callee_name_equal } from "./js_call_callee_name_equal.mjs";
import { add } from "./add.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_repack_only_is_counted(
  declaration,
  properties,
  getter,
  assigned,
  lifted,
  made,
) {
  "How many of a record's entries were lifted back out with the getter and how many were made here instead, or nothing at all when one entry settles the whole reading on its own.";
  "The two counts are what the reading upstream actually decides on: no entry lifted means nothing was taken apart, and more than one entry made means the function is doing work rather than moving it. Both counts are started from what the maker already found rather than from nought, so an entry lifted before this walk is not forgotten by it.";
  "NOTHING BACK MEANS THE ANSWER IS ALREADY NO, and it is returned rather than counted because the three ways it happens have nothing in common except being final. An entry written out at the brace is a value being made there. An entry whose name is never set is not being moved from anywhere. An entry left empty and then filled in further down is a decision, and a decision is work. None of the three can be weighed against the others, so none of them belongs in a count.";
  "An entry set to nothing and never set again is carried along with the rest rather than counted against them. A cut moves a name out whether or not the name held anything yet, so a record put back together after one arrives with some entries empty - and refusing those would be refusing exactly the shape this is here to find. Never set again is the whole of what makes it safe.";
  arguments_assert(arguments, 6);
  for (let property of properties) {
    let short_is = property_or_null(property, "shorthand");
    if (not(short_is)) {
      return null;
    }
    let key = js_property_key_name_try(property);
    let source = js_name_set_from_node_try(declaration, key);
    let unset_is = null_is(source);
    if (unset_is) {
      return null;
    }
    let unpack_is = js_call_callee_name_equal(source, getter);
    if (unpack_is) {
      lifted = add(lifted, 1);
      continue;
    }
    let written_is = js_node_type_is(source, "Literal");
    let value = property_or_null(source, "value");
    let blank_is = null_is(value);
    if (written_is) {
      if (blank_is) {
        let filled_is = list_includes(assigned, key);
        if (filled_is) {
          return null;
        }
        continue;
      }
    }
    made = add(made, 1);
  }
  let r = {
    lifted,
    made,
  };
  return r;
}
