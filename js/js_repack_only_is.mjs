import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_return_try } from "./js_find_return_try.mjs";
import { null_is } from "./null_is.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_object_expression_properties } from "./js_object_expression_properties.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_callee_names } from "./js_block_callee_names.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_repack_only_is(declaration) {
  "Whether a function's whole product is a record it took apart and put back together - every name it hands back lifted out of something else with the getter, and at most one thing actually done besides.";
  "A function like this reads as work and is none. It is handed a record, or calls one thing that makes one, lifts each entry out under a name of its own, and builds an equal record out of those names. Whoever called it could have read the entries where they already were. What the file buys is a line count and a name.";
  "It is not free. Each entry costs a line to lift and a word to put back, so a body of this shape grows with the number of entries rather than with the amount of work, and the growth lands in whatever page ships the caller. One of these went in beside seven others in a single sweep and carried the page it was on past the size it is allowed to be.";
  "Six things must all hold, and each is there to keep an honest function out. Exactly one place hands a value back, which also means no lambda anywhere - a tree with a lambda in it is doing something this reading has no opinion about. What it hands back is a record written out, reached through one name if it was set on a line of its own. Two entries at least, because one entry is not a repack. Every entry written short, because an entry given a value at the brace is a value being made rather than moved. At least one entry set, in this same function, from a call to the getter - that is the whole of the claim, and it is what makes this a repack rather than merely a function returning a record. And at most one entry that is neither lifted nor left empty.";
  "At most one other thing done, matching that one entry, so that a function which really does something and happens to hand back some of what it was given is left alone. Nought means the thing was taken apart and put back with nothing done to it at all; one means a single piece of work with lifting and putting back on either side of it, which is the shape a cut leaves behind.";
  "A thing done is looked for in two shapes, because a body works in two. A line binding a plain name to a plain call is one. A line doing something and binding no name at all is the other - painting a screen, walking a list, asking a question about what was handed in. Reading only the first called a page painter and a list walker pure repacks, which is the opposite of what this is for. Lifting a name out, and the one line handing the record back, are the product rather than work, so neither is counted.";
  arguments_assert(arguments, 1);
  let node = js_find_return_try(declaration);
  let silent_is = null_is(node);
  if (silent_is) {
    return false;
  }
  let answer = js_return_argument_get(node);
  let named = js_identifier_name_try(answer);
  let bound_is = null_not_is(named);
  if (bound_is) {
    answer = js_name_set_from_node_try(declaration, named);
  }
  let unfound_is = null_is(answer);
  if (unfound_is) {
    return false;
  }
  let record_is = js_node_type_is(answer, "ObjectExpression");
  if (not(record_is)) {
    return false;
  }
  let properties = js_object_expression_properties(answer);
  let few_is = list_size_less_than_value(properties, 2);
  if (few_is) {
    return false;
  }
  let getter = fn_name("property_get");
  let assigned = js_assigned_names(declaration);
  let lifted = 0;
  let made = 0;
  for (let property of properties) {
    let short_is = property_or_null(property, "shorthand");
    if (not(short_is)) {
      return false;
    }
    let key = js_property_key_name_try(property);
    let source = js_name_set_from_node_try(declaration, key);
    let unset_is = null_is(source);
    if (unset_is) {
      return false;
    }
    let called = js_call_callee_name_try(source);
    let unpack_is = equal(called, getter);
    if (unpack_is) {
      lifted = add(lifted, 1);
      continue;
    }
    ("An entry set to nothing and never set again is carried along with the rest rather than counted against them. A cut moves a name out whether or not the name held anything yet, so a record put back together after one arrives with some entries empty - and refusing those would be refusing exactly the shape this is here to find. Never set again is the whole of what makes it safe: a name set to nothing and filled in further down is a decision being made, which is work.");
    let written_is = js_node_type_is(source, "Literal");
    let value = property_or_null(source, "value");
    let blank_is = null_is(value);
    if (written_is) {
      if (blank_is) {
        let filled_is = list_includes(assigned, key);
        if (filled_is) {
          return false;
        }
        continue;
      }
    }
    made = add(made, 1);
  }
  let empty_is = equal(lifted, 0);
  if (empty_is) {
    return false;
  }
  ("One entry may be something genuinely new, matching the one call the body is allowed. That is the shape a cut leaves when it takes a run of lines holding a single piece of work: the work becomes one line and everything around it becomes lifting and putting back. Eighteen lines of lifting to carry one new value through is the same waste as eighteen carrying none, and refusing to see it would leave the worst of them unnamed.");
  let mixed_is = greater_than(made, 1);
  if (mixed_is) {
    return false;
  }
  let block = property_get(declaration, "body");
  let callees = js_block_callee_names(block);
  let others = 0;
  for (let callee of callees) {
    let unpack_is = equal(callee, getter);
    if (unpack_is) {
      continue;
    }
    others = add(others, 1);
  }
  let statements = property_get(block, "body");
  for (let statement of statements) {
    let bind_is = js_node_type_is(statement, "VariableDeclaration");
    if (bind_is) {
      continue;
    }
    let hand_back_is = js_node_type_is(statement, "ReturnStatement");
    if (hand_back_is) {
      continue;
    }
    (
      "The line counting the arguments is written by the canonical pass into every function here, so counting it as work would count a thing nobody chose against every body alike - and since the allowance is one, it would hide every repack that does a single thing besides."
    );
    let counting_is = js_statement_arguments_assert_is(statement);
    if (counting_is) {
      continue;
    }
    let work_is = js_statement_work_is(statement);
    if (not(work_is)) {
      continue;
    }
    others = add(others, 1);
  }
  let busy_is = greater_than(others, 1);
  if (busy_is) {
    return false;
  }
  return true;
}
