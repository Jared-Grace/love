import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_shared_text_reader_words_own } from "./app_shared_text_reader_words_own.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function app_shared_text_reader_picked_is(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("Whether the words this function hands back have been asked what language the person in front of them reads.");
  ("Two ways of answering yes, and they are not the same yes. The first is that a picking is somewhere under it - the function reaches one of the places a saying is chosen by the reader's language, so whatever comes back was chosen there. The second is that the function types out no words of its own: it was handed words and put an arrow or a gear in front of them, and a picture reads the same in every language, so it has nothing to ask anybody. Only the second lets a function pass while never going near a picking, and it passes because it says nothing.");
  ("So a no means one exact thing: words were typed into this function and handed on without the reader ever being asked. That is the only shape this can report, and it is the shape a new saying written in english takes.");
  ("The pickings are asked for by name from the one list of them rather than named here, so a new way of picking is known to this the moment it is known to the counting beside it.");
  let pickers = app_shared_text_reader_language_pickers();
  let reachable = await function_reachable_names(f_name);
  for (let picker of pickers) {
    let picks = list_includes(reachable, picker);
    if (picks) {
      return true;
    }
  }
  let words = await app_shared_text_reader_words_own(f_name);
  let silent = list_empty_is(words);
  return silent;
}
