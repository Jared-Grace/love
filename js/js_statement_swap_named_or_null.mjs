import { js_statement_prose_is } from "./js_statement_prose_is.mjs";
import { js_call_callee_name_dotted_try } from "./js_call_callee_name_dotted_try.mjs";
import { js_declaration_single_variable_name_try } from "./js_declaration_single_variable_name_try.mjs";
import { js_statement_runs_differing_or_null } from "./js_statement_runs_differing_or_null.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
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
  "AN IF IS ONLY THE CONDITION ONCE EVERY BRANCH HAS COME BACK IDENTICAL. Both branches moving is two edits and an else appearing is a change of shape, and neither of those touched the condition at all - so the branches are compared before the condition is named, and the two other shapes are handed back unnamed. The reading beside this one gives that same case up on purpose, saying every run matching is the head having moved and belongs to the caller; this is the caller it meant.";
  "A PARAGRAPH EDITED IS NOT A CALL EDITED, AND IT IS WHAT MOST OF THE RESIDUE TURNED OUT TO BE. Three of the four edits still landing under the bare name after the kinds above were told apart were somebody rewording an explanation and touching nothing else. This repo keeps its reasoning in its prose, so that is a real and frequent edit, and filing it under a name that says only that some statement changed hides the one kind of change a later reader most wants to find. All three shapes a paragraph gets written in answer to one reading, so a paragraph rewritten from one shape into another is still named as the wording having moved.";
  "A CALL REACHED THROUGH A DOT IS STILL A CALL. The fourth of the four was window.addEventListener becoming a function of this repo, which is the shape of the wrapping this repo does constantly - and the plain callee reading answers nothing for it, because it exists to tell callers whether a name is one of ours. So the dotted reading is asked here instead.";
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
    let name = js_declaration_single_variable_name_try(node_before);
    let name_after = js_declaration_single_variable_name_try(node_after);
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
    let prose = js_statement_prose_is(node_before);
    let prose_after = js_statement_prose_is(node_after);
    let both_prose = prose && prose_after;
    if (both_prose) {
      let r6 = "the prose written differently";
      return r6;
    }
    let expression = property_get(node_before, "expression");
    let expression_after = property_get(node_after, "expression");
    let callee = js_call_callee_name_dotted_try(expression);
    let callee_after = js_call_callee_name_dotted_try(expression_after);
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
    let differing = js_statement_runs_differing_or_null(
      node_before,
      node_after,
    );
    let apart = null_is(differing);
    if (apart) {
      return null;
    }
    let inside = list_empty_not_is(differing);
    if (inside) {
      return null;
    }
    let r5 = "a condition written differently";
    return r5;
  }
  return null;
}
