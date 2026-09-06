import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { list_random_index } from "./list_random_index.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function gloss_word_sound_url_cycling(url_get, slow_get) {
  "Hands back two ways of asking for one word's recording: an ordinary one, which answers in a different person's voice every time it is asked, and a slower one, which answers in the person that word was just heard from and then in somebody new each time after that.";
  "★ A LEARNER WHO ONLY EVER HEARS ONE MOUTH HAS LEARNED THAT MOUTH RATHER THAN THE WORD. Real English arrives from men and women, higher and lower, quicker and slower, and a word is only known once it is recognised whoever is saying it. One reader saying everything teaches a very good imitation of one reader.";
  "★ THE ORDER IS FIXED AND ONLY THE STARTING PLACE IS DRAWN, WHICH IS WHAT MAKES TWO TAPS IN A ROW GUARANTEE TWO DIFFERENT PEOPLE RATHER THAN MERELY MAKE IT LIKELY. Picking a name at random each time would say the same person twice about one time in four, and a word said twice by the same person is the one case a reader would read as the page having ignored them. Drawing only where the cycle begins keeps every visit different from the last without ever repeating inside one.";
  "★ THE SLOW ONE REPEATS THE VOICE THAT WORD WAS LAST SAID IN, AND THAT IS WHY THE VOICE IS REMEMBERED PER WORD RATHER THAN ONCE FOR THE SCREEN. A reader taps a word, misses it, and reaches for the turtle - and between those two taps they may have tapped other words, each of which moved the cycle on. Remembered once for the whole screen the turtle would answer in whoever spoke last, which is a person the reader did not just hear say this word, arriving at the exact moment they are already struggling with it. Remembered per word it cannot happen at all.";
  "★ THE REMEMBERED NAME IS SPENT WHEN IT IS USED, SO A TURTLE PRESSED AGAIN MOVES ON INSTEAD OF SAYING THE SAME PERSON FOREVER. Remembering without spending was tried and a reader judging the slow recordings reported hearing only one voice from the turtle - which is exactly right, because judging a word means pressing its turtle several times, and every press after the first was reading back the same remembered name. Matching the voice just heard is worth having for one press and is a fault by the second. Spending it keeps the pairing where it helps and hands the cast back afterwards.";
  "★ THE REMEMBERED NAME IS CHECKED AGAINST THE CAST BEFORE IT IS TRUSTED. The memory is keyed by the word itself, and a plain object answers for names it was never given - `constructor` and `toString` among them. No English word in a passage spells one of those, so this has never happened, and if it did nothing would say so: the reader would simply hear the wrong person. Asking whether the answer is somebody in the cast closes it, which is cheaper than arguing that it cannot arise.";
  "★ MOVING THE CYCLE ON AND REMEMBERING WHERE IT GOT TO ARE TWO THINGS, BECAUSE THE TURTLE WANTS THE FIRST WITHOUT THE SECOND. Were the turtle to remember the person it just moved on to, that name would be waiting for the next press and the second and third turtle would say it again - the very fault being fixed, reintroduced one step further along. Only a press of the word itself puts a name down to be paired with.";
  "A word whose turtle is pressed before the word itself has ever been pressed has nobody remembered, so the cycle moves on and somebody says it slowly. That is the right answer to the only thing that press can mean.";
  "Nothing is handed back for the slow way when there is no slow way handed in, so a page whose words have only ordinary recordings draws no turtle - the same absence that already decides whether a speaker is drawn beside a word at all.";
  "The count only goes up and the list is asked to wrap, so nothing has to know how many people are in the cast - a fifth voice added tomorrow joins the cycle without a number anywhere needing to change.";
  "★ THE PLACE IS KEPT IN A BOX RATHER THAN IN A NAME THAT GETS WRITTEN OVER. The counting has to survive between taps, and a plain local that an inner function assigns to is the one shape the transforms here are known to move wrongly - lifted out, it silently becomes a fresh count on every tap and every reader hears the same voice forever. Nothing goes red when that happens, so it is written in the shape that cannot happen.";
  arguments_assert(arguments, 2);
  let voices = gloss_word_sound_voices();
  let place = {
    at: list_random_index(voices),
  };
  let spoken = {};
  function voice_advance() {
    let at = property_get(place, "at");
    let value = add(at, 1);
    property_set(place, "at", value);
    let voice = list_get_wrap(voices, at);
    return voice;
  }
  function voice_next(word) {
    let voice = voice_advance();
    property_set(spoken, word, voice);
    return voice;
  }
  function url_next(word) {
    let voice = voice_next(word);
    let url = url_get(word, voice);
    return url;
  }
  function voice_heard(word) {
    let taken = property_delete_if_exists(spoken, word);
    let remembered = property_get(taken, "value");
    let known = list_includes(voices, remembered);
    if (known) {
      return remembered;
    }
    let voice = voice_advance();
    return voice;
  }
  function slow_next(word) {
    let voice = voice_heard(word);
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
