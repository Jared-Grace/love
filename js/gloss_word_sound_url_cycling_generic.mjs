import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { not } from "./not.mjs";
export function gloss_word_sound_url_cycling_generic(
  voices_get,
  start,
  url_get,
  slow_get,
) {
  "$plain start";
  "the place in the cast the first tap is said from. It is counted from, never run.";
  "Hands back two ways of asking for one word's recording: an ordinary one, which answers in a different person's voice every time it is asked, and a slower one, which answers from the same cycle, so the next person in turn says it whichever of the two was pressed. The cast is asked for per word, so one page can hold words whose casts differ.";
  "★ THE CAST IS ASKED OF THE WORD, BECAUSE ONE SCREEN OF THE BIBLE CAN HOLD HEBREW AND GREEK, and the two languages have different people. The place in the cycle is shared by every word and each word's own cast is wrapped round it, so a cast of one simply always answers with its one voice and a cast of four goes round.";
  "★ A LEARNER WHO ONLY EVER HEARS ONE MOUTH HAS LEARNED THAT MOUTH RATHER THAN THE WORD. Real speech arrives from men and women, higher and lower, quicker and slower, and a word is only known once it is recognised whoever is saying it. One reader saying everything teaches a very good imitation of one reader.";
  "★ THE ORDER IS FIXED AND ONLY THE STARTING PLACE IS DRAWN, WHICH IS WHAT MAKES TWO TAPS IN A ROW GUARANTEE TWO DIFFERENT PEOPLE RATHER THAN MERELY MAKE IT LIKELY. Picking a name at random each time would say the same person twice about one time in four, and a word said twice by the same person is the one case a reader would read as the page having ignored them. Drawing only where the cycle begins keeps every visit different from the last without ever repeating inside one.";
  "★ THE TURTLE MOVES THE SAME CYCLE AS THE WORD, SO NO TWO PRESSES IN A ROW - AT EITHER SPEED - ARE EVER SAID BY TWO MEN OR TWO WOMEN. The casts alternate man and woman, and that alternation is only a promise if every press takes the next place. The human asked for exactly this on 2026-09-30, after hearing the Hebrew cast: slow and full speed continue one alternation.";
  "REJECTED: the turtle once repeated the voice that word was last said in, remembered per word and spent on its first use, so a reader who missed a word heard the same person say it slowly. It broke the alternation - a word by a man, then its turtle by the same man, then the next word by a man - and the human judged the alternation worth more than the pairing.";
  "Nothing is handed back for the slow way when there is no slow way handed in, so a page whose words have only ordinary recordings draws no turtle - the same absence that already decides whether a speaker is drawn beside a word at all.";
  "The count only goes up and the list is asked to wrap, so nothing has to know how many people are in the cast - a fifth voice added tomorrow joins the cycle without a number anywhere needing to change.";
  "★ THE PLACE IS KEPT IN A BOX RATHER THAN IN A NAME THAT GETS WRITTEN OVER. The counting has to survive between taps, and a plain local that an inner function assigns to is the one shape the transforms here are known to move wrongly - lifted out, it silently becomes a fresh count on every tap and every reader hears the same voice forever. Nothing goes red when that happens, so it is written in the shape that cannot happen.";
  arguments_assert(arguments, 4);
  let place = {
    at: start,
  };
  function voice_advance(word) {
    let at = property_get(place, "at");
    let value = add(at, 1);
    property_set(place, "at", value);
    let voices = voices_get(word);
    let voice = list_get_wrap(voices, at);
    return voice;
  }
  function url_next(word) {
    let voice = voice_advance(word);
    let url = url_get(word, voice);
    return url;
  }
  function slow_next(word) {
    let voice = voice_advance(word);
    let url = slow_get(word, voice);
    return url;
  }
  function slow_or_none() {
    let missing = not(slow_get);
    if (missing) {
      return null;
    }
    return slow_next;
  }
  let slow = slow_or_none();
  let r = {
    sound: url_next,
    slow: slow,
  };
  return r;
}
