import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { list_random_index } from "./list_random_index.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
export function gloss_word_sound_url_cycling(url_get) {
  "Hands back a way of asking for one word's recording that answers in a different person's voice every time it is asked.";
  "★ A LEARNER WHO ONLY EVER HEARS ONE MOUTH HAS LEARNED THAT MOUTH RATHER THAN THE WORD. Real English arrives from men and women, higher and lower, quicker and slower, and a word is only known once it is recognised whoever is saying it. One reader saying everything teaches a very good imitation of one reader.";
  "★ THE ORDER IS FIXED AND ONLY THE STARTING PLACE IS DRAWN, WHICH IS WHAT MAKES TWO TAPS IN A ROW GUARANTEE TWO DIFFERENT PEOPLE RATHER THAN MERELY MAKE IT LIKELY. Picking a name at random each time would say the same person twice about one time in four, and a word said twice by the same person is the one case a reader would read as the page having ignored them. Drawing only where the cycle begins keeps every visit different from the last without ever repeating inside one.";
  "★ THE PLACE IS KEPT IN A BOX RATHER THAN IN A NAME THAT GETS WRITTEN OVER. The counting has to survive between taps, and a plain local that an inner function assigns to is the one shape the transforms here are known to move wrongly - lifted out, it silently becomes a fresh count on every tap and every reader hears the same voice forever. Nothing goes red when that happens, so it is written in the shape that cannot happen.";
  "The count only goes up and the list is asked to wrap, so nothing has to know how many people are in the cast - a fifth voice added tomorrow joins the cycle without a number anywhere needing to change.";
  arguments_assert(arguments, 1);
  let voices = gloss_word_sound_voices();
  let place = {
    at: list_random_index(voices),
  };
  function url_next(word) {
    let at = property_get(place, "at");
    let value = add(at, 1);
    property_set(place, "at", value);
    let voice = list_get_wrap(voices, at);
    let url = url_get(word, voice);
    return url;
  }
  return url_next;
}
