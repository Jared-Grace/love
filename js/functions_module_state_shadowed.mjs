import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_module_variable_names } from "./js_module_variable_names.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { property_get } from "./property_get.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
export async function functions_module_state_shadowed() {
  "Every file whose own top-level state is hidden by a binding inside one of its";
  "functions.";
  "This is the sharp corner of hiding, not another shade of it. A variable at the";
  "top of a file is there because more than one call has to see it, and a cache is";
  "nearly always why. So a function that binds the same word again fills its own";
  "copy, throws the copy away at the closing brace, and every line reading the";
  "shared one still gets whatever it was started with - usually null, forever.";
  "The gate on hiding in general ratchets against a baseline of what the repo";
  "already carried, so a member of this set can sit inside that baseline and never";
  "be looked at again. This asks for the subset separately because the general";
  "answer is a tidiness complaint and this one is a function that does not work.";
  "The step that adds the word let wrote some of these itself: it could not see a";
  "top-level binding, so it declared a fresh one over an assignment meant for the";
  "shared name. That was fixed 2026-08-03, which stops the set growing and leaves";
  "what had already landed standing.";
  "A file the parser cannot read is passed over. That is a different complaint with";
  "a gate of its own.";
  let records = await js_files_texts();
  let offenders = [];
  function record_each(record) {
    let text = property_get(record, "text");
    function parse() {
      let tree = js_parse(text);
      return tree;
    }
    let ast = catch_null(parse);
    let readable = not_equal(ast, null);
    if (not(readable)) {
      return;
    }
    let names = js_module_variable_names(ast);
    let hidden = [];
    function name_each(name) {
      let scopes = js_scopes_shadowing(ast, name);
      if (list_empty_is(scopes)) {
        return;
      }
      list_add(hidden, name);
    }
    each(names, name_each);
    if (list_empty_is(hidden)) {
      return;
    }
    let file = property_get(record, "file");
    let f_name = text_suffix_without(file, ".mjs");
    let offender = {
      name: f_name,
      hidden,
    };
    list_add(offenders, offender);
  }
  each(records, record_each);
  return offenders;
}
