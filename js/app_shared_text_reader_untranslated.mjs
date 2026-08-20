import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_shared_text_reader_seats } from "./app_shared_text_reader_seats.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { list_add } from "./list_add.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_is } from "./text_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_untranslated(f_name_app) {
  "$plain f_name_app";
  "Every place inside one app where words go straight onto the page as they were typed, having never been asked what language the reader in front of them reads.";
  "This is the half the count of translated sayings cannot see. That one walks the sayings that already go through the picking, and a word that never went near it is not a saying it counts short - it is a saying it never met, so the count comes out whole while a whole screen stays in english.";
  "It is asked of one app rather than of the folder, because whether a word should be turned into another language is a promise that particular app made and not a rule of the repo. An app that only ever speaks english is not in breach for speaking it.";
  "Words with no letters in them are passed over. An arrow, a space, a gap between two things reads the same in every language there is, and naming those would bury the ones that matter under the ones that never could.";
  arguments_assert(arguments, 1);
  let seats = app_shared_text_reader_seats();
  let f_names = await function_reachable_names(f_name_app);
  let found = [];
  for (let f_name of f_names) {
    let ast = await function_ast(f_name);
    let calls = js_list_type_nodes(ast, "CallExpression");
    for (let call of calls) {
      let callee = property_get(call, "callee");
      let named = equal(callee.type, "Identifier");
      if (not(named)) {
        continue;
      }
      for (let seat of seats) {
        let door = property_get(seat, "fn");
        let ours = equal(callee.name, door);
        if (not(ours)) {
          continue;
        }
        let at = property_get(seat, "at");
        let argument = call.arguments[at];
        let absent = null_is(argument);
        if (absent) {
          continue;
        }
        let words = js_literal_value_deep_try(argument);
        let written = text_is(words);
        if (not(written)) {
          continue;
        }
        let letters = text_letters_only(words);
        let anything = text_empty_not_is(letters);
        if (not(anything)) {
          continue;
        }
        list_add(found, {
          f_name,
          door,
          words,
        });
      }
    }
  }
  return found;
}
