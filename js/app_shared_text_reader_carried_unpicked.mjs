import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_door_arrivals } from "./app_shared_text_reader_door_arrivals.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_literal_text_deep_is } from "./js_literal_text_deep_is.mjs";
import { function_ast_memo } from "./function_ast_memo.mjs";
import { app_shared_text_reader_word_source_try } from "./app_shared_text_reader_word_source_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { function_exists } from "./function_exists.mjs";
import { app_shared_text_reader_picked_is } from "./app_shared_text_reader_picked_is.mjs";
import { app_shared_text_reader_words_own } from "./app_shared_text_reader_words_own.mjs";
export async function app_shared_text_reader_carried_unpicked(f_name_app) {
  "$plain f_name_app";
  arguments_assert(arguments, 1);
  ("Every word that goes onto the page in one app having been typed somewhere other than the door it leaves by, followed one step back to the function it came out of, and named where that function hands its words on without ever asking what language the reader reads.");
  ("This is the half of the door reading that was missing, and the numbers said how much was missing: of the words arriving at the doors of the app that teaches english, all but three were carried in, so a clean answer was a promise about three words. A word carried in was walked up to and could not be read, and the reading beside this one is honest about that by printing how many there were - but a number of things not looked at is not the same as looking at them.");
  ("Following one step is enough because of how the words are written here. A door is nearly always handed a plain name, and the line that makes that name is nearly always a call to the function that says the words. So the question a person would ask by hand - where did this word come from, and was anybody asked about it - is asked here instead, once per door, every time.");
  ("What it cannot follow it counts rather than passes over in silence, for the same reason the reading beside it does. A word made from something other than a call, or arriving as a parameter from a caller, is settled while the app runs; nothing written in the code says what it will be, and a reading that quietly dropped those would report a clean app whose screens it never opened.");
  ("A name that stands where a call stands need not be a function of this repo at all - a list of buttons is handed a way of saying what each one is called, and that way arrives as a parameter, so the name written at the call site names nobody. So the answer to whether a name is one of ours is read out of the looking rather than taken as the looking itself, which is a record and would otherwise pass for a yes every time.");
  ("The trees are kept as they are read, because several doors are nearly always written into the one function and finding and parsing it again per door is the same work done over.");
  let read = await app_shared_text_reader_door_arrivals(f_name_app);
  let arrivals = property_get(read, "arrivals");
  let found = [];
  let followed = [];
  let unfollowed = [];
  let remembered = {};
  for (let arrival of arrivals) {
    let argument = property_get(arrival, "argument");
    let absent = null_is(argument);
    if (absent) {
      continue;
    }
    let written = js_literal_text_deep_is(argument);
    if (written) {
      continue;
    }
    let f_name = property_get(arrival, "f_name");
    let door = property_get(arrival, "door");
    let ast = await function_ast_memo(f_name, remembered);
    let source = app_shared_text_reader_word_source_try(ast, argument);
    let named = null_not_is(source);
    if (not(named)) {
      list_add(unfollowed, {
        f_name,
        door,
      });
      continue;
    }
    let search = await function_exists(source);
    let ours = property_get(search, "exists");
    if (not(ours)) {
      list_add(unfollowed, {
        f_name,
        door,
      });
      continue;
    }
    list_add(followed, {
      f_name,
      door,
      source,
    });
    let picked = await app_shared_text_reader_picked_is(source);
    if (picked) {
      continue;
    }
    let words = await app_shared_text_reader_words_own(source);
    list_add(found, {
      f_name,
      door,
      source,
      words,
    });
  }
  let r = {
    found,
    followed: followed.length,
    unfollowed: unfollowed.length,
  };
  return r;
}
