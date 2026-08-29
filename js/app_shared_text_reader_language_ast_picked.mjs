import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_text_reader_language_ast_picked(ast) {
  "Every place a saying is picked in this piece of writing, each one saying which way of picking it went through and carrying the record of sayings handed to it, with nothing in the place of any that is worked out rather than written out, and the name of the holder when the sayings were fetched from one.";
  "The way of picking is carried out rather than dropped once it has served its purpose here. There is more than one way, and a count that cannot say how many sayings came through each of them cannot tell a way nobody uses from a way it failed to recognise - the two look alike from outside and only one of them is fine.";
  "Nothing rather than leaving the place out, because a saying that cannot be read off the page is the thing worth knowing about and would otherwise be the one thing invisible here.";
  "It is asked of a piece of writing rather than of a file, so the same reading serves the count that walks every file and the change that rewrites one of them. Two readings would be two chances to disagree about what a saying is, and the change would then quietly repair something other than what the count complained about.";
  "A saying written out under a name of its own is followed to that name. It is the ordinary way one is written, and stopping at the handing over would find nothing at almost every place there is.";
  "A saying FETCHED from a holder is not followed here, and its holder's name is carried out instead. The words are in another file, and this reading is of one piece of writing on purpose - so reaching into a second one would hand back a piece of a page nobody here is writing, and the change that rewrites what it is given would set the words on a page it never puts back. The name is enough for a reading that has the whole folder open, and it is nothing at all to the change, which passes it over exactly as it passes over words it cannot read.";
  "Only a call handed nothing is treated as a holder. What a call handed something answers with depends on what it was handed, so its answer is not written down anywhere and this would be guessing at one of them.";
  arguments_assert(arguments, 1);
  let pickers = app_shared_text_reader_language_pickers();
  let named_objects = {};
  let named_calls = {};
  let declarators = js_list_type_nodes(ast, "VariableDeclarator");
  for (let declarator of declarators) {
    let named = equal(declarator.id.type, "Identifier");
    if (not(named)) {
      continue;
    }
    let init = declarator.init;
    let missing = null_is(init);
    if (missing) {
      continue;
    }
    let written = equal(init.type, "ObjectExpression");
    if (written) {
      property_set(named_objects, declarator.id.name, init);
      continue;
    }
    let fetched = equal(init.type, "CallExpression");
    if (not(fetched)) {
      continue;
    }
    let plain = list_empty_is(init.arguments);
    if (not(plain)) {
      continue;
    }
    let holder = js_call_callee_name_try(init);
    let unnamed = null_is(holder);
    if (unnamed) {
      continue;
    }
    property_set(named_calls, declarator.id.name, holder);
  }
  let picked = [];
  let calls = js_list_type_nodes(ast, "CallExpression");
  for (let call of calls) {
    let picker = js_call_callee_name_try(call);
    let unnamed = null_is(picker);
    if (unnamed) {
      continue;
    }
    let ours = list_includes(pickers, picker);
    if (not(ours)) {
      continue;
    }
    let object = null;
    let held_by = null;
    ("the languages are always the first thing handed over, whichever way the saying is picked, so the rest of what a call takes is no business of this reading");
    let anything = list_empty_not_is(call.arguments);
    if (anything) {
      let argument = call.arguments[0];
      let written = equal(argument.type, "ObjectExpression");
      if (written) {
        object = argument;
      }
      let by_name = equal(argument.type, "Identifier");
      if (by_name) {
        object = property_get_or_null(named_objects, argument.name);
        held_by = property_get_or_null(named_calls, argument.name);
      }
      let fetched = equal(argument.type, "CallExpression");
      if (fetched) {
        let plain = list_empty_is(argument.arguments);
        if (plain) {
          held_by = js_call_callee_name_try(argument);
        }
      }
    }
    list_add(picked, {
      picker,
      object,
      held_by,
    });
  }
  return picked;
}
