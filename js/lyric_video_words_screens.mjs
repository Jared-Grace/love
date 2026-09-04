import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
export function lyric_video_words_screens(words, room, seconds) {
  "$plain seconds";
  "One recorded piece cut into the screens it needs, each holding the words that fit and standing for exactly as long as those words are spoken.";
  "★ EVERY MOMENT HERE WAS HEARD, WHICH IS THE ONE THING THAT MAKES THE CUT ALLOWABLE AT ALL. A screen ends where the next screen's first word begins, and that second was measured in the sound by laying the known letters onto the recording. The older way of dividing a piece had to reason the moment from how long the words were, which supposes a reader who takes as long over a name they have never seen as over the word the - exactly wrong on a genealogy, which is where the dividing was most needed. So this is not a better guess than that one; it is the absence of a guess.";
  "★ THE FIRST SCREEN BEGINS AT NOTHING AND THE LAST ENDS AT THE WHOLE LENGTH, RATHER THAN AT ITS OWN FIRST AND LAST WORD. A reader draws breath before the first word and the recording runs on a little after the last, and a screen that appeared only on the first syllable and vanished on the last would blink twice per piece for no reason. Inside the piece the joins are shared: one screen's end is the next one's start, so no gap can open between them.";
  "★ IT BREAKS WHERE THE READER BREAKS, LOOKING BACK A FEW WORDS FOR A MARK. A screen filled to its last letter usually ends mid-phrase, and the words either side of that break are read as one breath, so splitting them puts half a phrase alone on a screen. Looking back at most a few words finds the comma or stop the reader actually paused at; looking back further would start throwing away most of a screen to find one, which costs more screens than the untidy break did.";
  "★ HOW FAR BACK IT LOOKS IS THE LENGTH OF A SHORT PHRASE, AND FOUR IS ONE MORE THAN IT SEEMS. The phrase this was measured on is the son of Name, which is four words, so a screen that fills up on the name has to reach four words back to find the comma before the. Reaching only three left the son of stranded at the foot of one screen and its name at the head of the next, four times over in a single genealogy - correct by every count and wrong to read. So the distance is not a round number chosen for tidiness; it is the length of the shortest thing here that must not be split.";
  "★ WHAT IT FILLS TO IS A COUNT OF DRAWN LINES, NOT A COUNT OF LETTERS, AND THAT IS THE WHOLE OF WHY A SCREEN NOW STAYS ON THE FRAME. A count of letters supposes every letter is the same width and that a line is filled to its last one; neither is true. Word wrap leaves a ragged edge, so the room actually thrown away at the end of each line varies with the words, and two cards of the same number of letters were measured coming out eleven lines and thirteen. Asking how many lines the words really break into asks the question the frame is actually asking.";
  "★ A PIECE SHORT ENOUGH COMES BACK AS ONE SCREEN, UNCHANGED. That is the ordinary case by a wide margin - the middle verse of the bible fills about two lines against a screenful of eleven - so nothing is aligned, cut or moved for most of what is read.";
  arguments_assert(arguments, 3);
  let pixels_across = property_get(room, "pixels_across");
  let lines_max = property_get(room, "lines_max");
  let font_size = property_get(room, "font_size");
  let marks = [",", ";", ":", ".", "?", "!"];
  let look_back = 4;
  let count = list_size(words);
  function word_text(order_word) {
    let word = words[order_word];
    let text = property_get(word, "word");
    return text;
  }
  function screen_text(from, to) {
    let parts = [];
    let at = from;
    while (less_than(at, to)) {
      let started = greater_than(at, from);
      if (started) {
        list_add(parts, " ");
      }
      let item = word_text(at);
      list_add(parts, item);
      at = add(at, 1);
    }
    let text = text_combine_multiple(parts);
    return text;
  }
  function break_index(opened, reached) {
    let earliest = subtract(reached, look_back);
    let back = subtract(reached, 1);
    while (greater_than(back, opened) && greater_than_equal(back, earliest)) {
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
  let index = 0;
  while (less_than(index, count)) {
    let reach = add(index, 1);
    let candidate = screen_text(first, reach);
    let lines = lyric_video_text_lines(candidate, pixels_across, font_size);
    let over = greater_than(lines, lines_max);
    let started = greater_than(index, first);
    if (over && started) {
      let cut = break_index(first, index);
      list_add(bounds, [first, cut]);
      first = cut;
      index = cut;
    } else {
      index = add(index, 1);
    }
  }
  list_add(bounds, [first, count]);
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
    let a = add(order, 1);
    let b = list_size(bounds);
    let more = less_than(a, b);
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
