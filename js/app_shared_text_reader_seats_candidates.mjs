import { app_shared_text_reader_seats } from "./app_shared_text_reader_seats.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_literal_text_letters_try } from "./js_literal_text_letters_try.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_seats_candidates(f_name_app) {
  "$plain f_name_app";
  "Everything inside one app that is handed written words and is not one of the doors being watched, counted by how often each is handed some.";
  "This is the one question the count of untranslated words cannot ask about itself. That count walks the doors it was given, so a door left off the list is not a fault it finds - it is a fault it is blind to, and its answer comes out clean because it never went and looked.";
  "So it is read by a person rather than compared against a number. Most of what comes back is not a door at all: a name looked up under a word, a colour, a key something is filed under. What is being looked for is the one line among them that is a page of words going out to a reader through a way nobody had listed.";
  "It says nothing about whether the words are already in the reader's language, because it is not reading the words - it is reading where they are going.";
  arguments_assert(arguments, 1);
  let seats = app_shared_text_reader_seats();
  function lambda$seat(seat) {
    let fn = property_get(seat, "fn");
    return fn;
  }
  let doors = list_map(seats, lambda$seat);
  let f_names = await function_reachable_names(f_name_app);
  let candidates = {};
  for (let f_name of f_names) {
    let ast = await function_ast(f_name);
    let calls = js_list_type_nodes(ast, "CallExpression");
    for (let call of calls) {
      let callee_name = js_call_callee_name_try(call);
      let unnamed = null_is(callee_name);
      if (unnamed) {
        continue;
      }
      let watched = list_includes(doors, callee_name);
      if (watched) {
        continue;
      }
      for (let argument of call.arguments) {
        let words = js_literal_text_letters_try(argument);
        let unwritten = null_is(words);
        if (unwritten) {
          continue;
        }
        property_count_add(candidates, callee_name, 1);
      }
    }
  }
  return candidates;
}
