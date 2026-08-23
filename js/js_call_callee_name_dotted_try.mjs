import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_callee_try } from "./js_call_callee_try.mjs";
import { js_member_dotted_or_null } from "./js_member_dotted_or_null.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function js_call_callee_name_dotted_try(node) {
  "What a call reaches, written the way a person would say it - a plain name, or two plain words with the dot still between them - and nothing at all where the call reaches something that has no such name.";
  "A DOTTED CALL IS STILL A CALL WITH A NAME. The reading beside this one answers only for a plain name, which is right for callers deciding whether a call reaches a function of this repo. A caller naming what an edit did wants something else: a line that called window.addEventListener and now calls a function of this repo is one call swapped for another, and answering nothing there sends the edit back to the bucket that says only that some statement changed.";
  "THE TWO ARE KEPT APART RATHER THAN ONE WIDENED. Widening the plain reading would hand a dotted word to every caller that asks it whether a name is one of ours, and a dotted word is never one of ours, so each of them would have to learn to refuse what it had just been given.";
  arguments_assert(arguments, 1);
  let callee = js_call_callee_try(node);
  let plain_is = js_node_type_is(callee, "Identifier");
  if (plain_is) {
    let name = property_get_or_null(callee, "name");
    return name;
  }
  let member_is = js_node_type_is(callee, "MemberExpression");
  if (member_is) {
    let dotted = js_member_dotted_or_null(callee);
    return dotted;
  }
  return null;
}
