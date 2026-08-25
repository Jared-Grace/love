import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_object_containing_text } from "./js_find_object_containing_text.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
export function js_find_record_property_by_text(ast, text, key) {
  "One named part of one record out of a list of them, found by a word written elsewhere in that same record.";
  "A LIST NESTED INSIDE A LIST WAS UNREACHABLE, and that is the hole this fills. Every verb that writes into a list gets there through the line that binds the list, so a list bound to nothing - one sitting under a name inside a record inside another list - had no address at all, and the only way to add an entry to one was to type it. The curriculum's own groups are exactly that shape, so registering a new example was the one edit the transforms could not make about themselves.";
  "IT IS TWO EXISTING QUESTIONS ASKED IN A ROW and neither is new. Which record is meant is answered by a word the record says about itself, the way a group is told apart by its heading; which part of it is meant is answered by that part's name. Written as one selector they compose, and every verb that already writes into a list or a record pairs with the address for free.";
  "THE WORD AND THE NAME MUST BE DIFFERENT PARTS, which is not a rule so much as what makes it usable: a record is found by what it says and then opened at what it holds, so asking for the heading's own name would just hand back the heading.";
  arguments_assert(arguments, 3);
  let record = js_find_object_containing_text(ast, text);
  let found = js_object_expression_property_named_or_null(record, key);
  return found;
}
