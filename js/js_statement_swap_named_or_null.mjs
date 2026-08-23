import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_address_name } from "./js_statement_address_name.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_statement_swap_named_or_null(node_before, node_after) {
  "$plain node_before";
  "$plain node_after";
  "The name for one statement swapped for another of its own kind, said as what kind of line changed and which one - or nothing, where the two lines are not the same kind of line or the kind is one this has nothing to add about.";
  "ONE STATEMENT REPLACED IS AN ARITHMETIC RESULT AND NOT A SPECIFICATION. It is what is left after the readings that go inside a statement have all said nothing, and measured over the corpus it was the largest bucket there was. A hundred edits under one name is a hundred edits nobody can search for, because the name says only that the run stayed the length it was.";
  "WHAT A READER WANTS TO KNOW IS WHICH LINE AND WHAT KIND OF LINE. A binding whose value was written differently, a call whose arguments moved, a different thing coming back: those are three separate edits, and each of them is the shape of a transform somebody could write. Told apart they are specifications; told together they are a count.";
  "A SWAP BETWEEN TWO KINDS IS NOT NAMED HERE. A binding that became a return, or a call that became an if, is a change of what the line is for rather than a change inside it, and there is no shorter true thing to say about it than that one statement went out and another came in.";
  "THE NAME OF A BINDING IS ONLY WORTH SAYING WHILE IT STAYS THE SAME. Where the value was written differently the name is the address a reader goes to; where the name changed too, saying either of them points at half the edit, so the kind is said on its own.";
  arguments_assert(arguments, 2);
  let kind = property_get(node_before, "type");
  let kind_after = property_get(node_after, "type");
  let alike = equal(kind, kind_after);
  if (not(alike)) {
    return null;
  }
  let bound = js_node_type_is(node_before, "VariableDeclaration");
  if (bound) {
    let name = js_statement_address_name(node_before);
    let name_after = js_statement_address_name(node_after);
    let same_name = equal(name, name_after);
    let nameless = null_is(name);
    if (nameless) {
      let r = "one value written differently";
      return r;
    }
    if (not(same_name)) {
      let r2 = "one value written differently";
      return r2;
    }
    let said = text_combine_multiple([name, " written differently"]);
    return said;
  }
  let called = js_node_type_is(node_before, "ExpressionStatement");
  if (called) {
    let expression = property_get(node_before, "expression");
    let expression_after = property_get(node_after, "expression");
    let callee = js_call_callee_name_try(expression);
    let callee_after = js_call_callee_name_try(expression_after);
    let unknown = null_is(callee);
    if (unknown) {
      return null;
    }
    let same_callee = equal(callee, callee_after);
    if (not(same_callee)) {
      let r3 = "one call swapped for another";
      return r3;
    }
    let said_call = text_combine_multiple([callee, " called differently"]);
    return said_call;
  }
  let back = js_node_type_is(node_before, "ReturnStatement");
  if (back) {
    let r4 = "what comes back written differently";
    return r4;
  }
  let asked = js_node_type_is(node_before, "IfStatement");
  if (asked) {
    let r5 = "a condition written differently";
    return r5;
  }
  return null;
}
