import { property_count_add } from "./property_count_add.mjs";
import { list_size } from "./list_size.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_literal_text_letters_try } from "./js_literal_text_letters_try.mjs";
import { app_shared_text_reader_seats } from "./app_shared_text_reader_seats.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_untranslated(f_name_app) {
  "$plain f_name_app";
  "Every place inside one app where words are written out inside the very act of putting them on the page, as they were typed, having never been asked what language the reader in front of them reads.";
  "This is the half the count of translated sayings cannot see. That one walks the sayings that already go through the picking, and a word that never went near it is not a saying it counts short - it is a saying it never met, so the count comes out whole while a whole screen stays in english.";
  "Words typed somewhere else and merely carried here are not seen, and cannot be. Where a screen writes its words into a record of titles and lines and reads them back out a step later, what arrives at the door is decided while the app is running, so nothing in the code as written says what the reader will end up looking at. That is not a corner case - the screen answering what this app does with money is built exactly that way, and while nine of its sections were still in english this said it had found nothing.";
  "Notice which way that leans. Lifting a word out of a call and into a record with a name is what tidier code looks like, so this goes blinder as the code around it gets better, which is the opposite of what a number climbing towards zero invites anyone to believe. The count of translated sayings is what covers that half, because it reads the sayings rather than the places words leave through. The two are one instrument in two pieces, and neither number says anything on its own.";
  "It is asked of one app rather than of the folder, because whether a word should be turned into another language is a promise that particular app made and not a rule of the repo. An app that only ever speaks english is not in breach for speaking it.";
  "Words with no letters in them are passed over. An arrow, a space, a gap between two things reads the same in every language there is, and naming those would bury the ones that matter under the ones that never could.";
  "It says alongside what it found how many doors it went and stood at, one line per door, because a small answer here has two readings and they are opposite. Two words left in english is a good day; two doors watched out of ten is a page nobody looked at, reported as a good day.";
  arguments_assert(arguments, 1);
  let seats = app_shared_text_reader_seats();
  let f_names = await function_reachable_names(f_name_app);
  let found = [];
  let looked = {};
  for (let f_name of f_names) {
    let ast = await function_ast(f_name);
    let calls = js_list_type_nodes(ast, "CallExpression");
    for (let call of calls) {
      let callee_name = js_call_callee_name_try(call);
      let unnamed = null_is(callee_name);
      if (unnamed) {
        continue;
      }
      for (let seat of seats) {
        let door = property_get(seat, "fn");
        let ours = equal(callee_name, door);
        if (not(ours)) {
          continue;
        }
        property_count_add(looked, door, 1);
        let at = property_get(seat, "at");
        let argument = call.arguments[at];
        let absent = null_is(argument);
        if (absent) {
          continue;
        }
        let words = js_literal_text_letters_try(argument);
        let unwritten = null_is(words);
        if (unwritten) {
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
  let reachable = list_size(f_names);
  let r = {
    found,
    looked,
    reachable,
  };
  return r;
}
