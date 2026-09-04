import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { text_size } from "./text_size.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function lyric_video_words_screens(words, characters_max, seconds) {
  "$plain characters_max";
  "$plain seconds";
  "One recorded piece cut into the screens it needs, each holding the words that fit and standing for exactly as long as those words are spoken.";
  "★ EVERY MOMENT HERE WAS HEARD, WHICH IS THE ONE THING THAT MAKES THE CUT ALLOWABLE AT ALL. A screen ends where the next screen's first word begins, and that second was measured in the sound by laying the known letters onto the recording. The older way of dividing a piece had to reason the moment from how long the words were, which supposes a reader who takes as long over a name they have never seen as over the word the - exactly wrong on a genealogy, which is where the dividing was most needed. So this is not a better guess than that one; it is the absence of a guess.";
  "★ THE FIRST SCREEN BEGINS AT NOTHING AND THE LAST ENDS AT THE WHOLE LENGTH, RATHER THAN AT ITS OWN FIRST AND LAST WORD. A reader draws breath before the first word and the recording runs on a little after the last, and a screen that appeared only on the first syllable and vanished on the last would blink twice per piece for no reason. Inside the piece the joins are shared: one screen's end is the next one's start, so no gap can open between them.";
  "★ IT BREAKS WHERE THE READER BREAKS, LOOKING BACK A FEW WORDS FOR A MARK. A screen filled to its last letter usually ends mid-phrase, and the words either side of that break are read as one breath, so splitting them puts half a phrase alone on a screen. Looking back at most a few words finds the comma or stop the reader actually paused at; looking back further would start throwing away most of a screen to find one, which costs more screens than the untidy break did.";
  "★ THE COUNT IT FILLS TO IS OF LETTERS AND THE SPACES BETWEEN THEM, and it is the caller's business that the count handed in be the number that actually fills a screen at the size the words will be drawn at. Nothing here knows the shape of a letter, so a screen is only as right as that number is.";
  "★ A PIECE SHORT ENOUGH COMES BACK AS ONE SCREEN, UNCHANGED. That is the ordinary case by a wide margin - the middle piece of the bible is about a hundred and twenty letters against a screenful of a hundred and sixty-five - so nothing is aligned, cut or moved for most of what is read.";
  arguments_assert(arguments, 3);
  let marks = [",", ";", ":", ".", "?", "!"];
  let look_back = 4;
  let count = list_size(words);
  function word_text(index) {
    let word = words[index];
    let text = property_get(word, "word");
    return text;
  }
  function break_index(first, reached) {
    let earliest = subtract(reached, look_back);
    let back = subtract(reached, 1);
    while (greater_than(back, first) && greater_than(back, earliest)) {
      let text = word_text(back);
      let marked = text_ends_with_any(text, marks);
      if (marked) {
        let after = add(back, 1);
        return after;
      }
      back = subtract(back, 1);
    }
    return reached;
  }
  let bounds = [];
  let first = 0;
  let width = 0;
  let index = 0;
  while (less_than(index, count)) {
    let added = text_size(word_text(index));
    let gap = 0;
    let started = greater_than(index, first);
    if (started) {
      gap = 1;
    }
    let would = add(add(width, gap), added);
    let over = greater_than(would, characters_max);
    if (over && started) {
      let cut = break_index(first, index);
      list_add(bounds, [first, cut]);
      first = cut;
      width = 0;
      index = cut;
    } else {
      width = would;
      index = add(index, 1);
    }
  }
  list_add(bounds, [first, count]);
  function screen_text(from, to) {
    let parts = [];
    let at = from;
    while (less_than(at, to)) {
      let started = greater_than(at, from);
      if (started) {
        list_add(parts, " ");
      }
      list_add(parts, word_text(at));
      at = add(at, 1);
    }
    let text = text_combine_multiple(parts);
    return text;
  }
  let screens = [];
  let order = 0;
  while (less_than(order, list_size(bounds))) {
    let bound = bounds[order];
    let from = bound[0];
    let to = bound[1];
    let start = seconds;
    let opening = less_than(order, 1);
    if (opening) {
      start = 0;
    } else {
      start = property_get(words[from], "start");
    }
    let end = seconds;
    let more = less_than(add(order, 1), list_size(bounds));
    if (more) {
      end = property_get(words[to], "start");
    }
    let screen = {
      start: start,
      end: end,
      text: screen_text(from, to),
    };
    list_add(screens, screen);
    order = add(order, 1);
  }
  return screens;
}
