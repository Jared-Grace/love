import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { math_max } from "./math_max.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function lyric_video_line_words_text(line, lead) {
  "$plain line";
  "$plain lead";
  "The words of one sung line as subtitle text in which each word fades to red as it begins to be sung and fades back to white when it is done.";
  "★ THE WORD IS FULLY RED FROM A PAD BEFORE IT BEGINS UNTIL A PAD AFTER IT IS DONE, AND THE FADES RUN OUTSIDE THAT. So neighbouring words can be red together for a moment, and that was asked for: the human wanted the solid red padded so that a word timed a little early or late is still red while it is actually sung. A small timing mistake then costs an overlap, which reads as fine, rather than a word sung while white, which reads as wrong.";
  "★ NO MOMENT IS LET BACK BEFORE THE LINE GOES UP. A first word placed on its note can begin a little ahead of the line, and the pad and the fade reach further back still - a change asked for before the line exists is simply a word that is already red when the line appears.";
  "★ THE MOMENTS ARE COUNTED FROM WHEN THE LINE GOES UP, NOT FROM THE START OF THE SONG, BECAUSE THAT IS WHAT A CHANGE INSIDE ONE SUBTITLE LINE IS MEASURED FROM. The line goes up a lead ahead of its singing so it can be read first, so every word's moment has that lead added back.";
  "★ A WORD STAYS RED UNTIL THE NEXT WORD STARTS, UNLESS THE SINGER STOPS FOR A SECOND OR MORE. The aligner ends a word where its letters stop matching, which on a held note is well before the note is let go, so going back to white at that end makes the colour flicker between words that are sung straight on. A real rest is different: nothing is being sung, so nothing is red.";
  "★ EVERY WORD STARTS BY SAYING WHITE, BECAUSE A COLOUR CHANGE IN A SUBTITLE CARRIES ON INTO EVERY WORD AFTER IT. Without that, the first word turning red turns the whole rest of the line red with it, and the words not yet sung light up early. Measured on the first rendering: at the third second the whole first line stood red.";
  arguments_assert(arguments, 2);
  let shown = subtract(line.start, lead);
  let words = line.words;
  let rest = 1;
  let fade_in = 0.3;
  let fade_out = 0.3;
  let pad = 0.2;
  function moment(seconds) {
    let since = subtract(seconds, shown);
    let ms = multiply_round(since, 1000);
    let kept = math_max(ms, 0);
    return kept;
  }
  function word_text(word, index) {
    let next = words[add(index, 1)];
    let done = word.end;
    if (next && less_than(subtract(next.start, word.end), rest)) {
      done = next.start;
    }
    let red_full = subtract(word.start, pad);
    let on = moment(red_full);
    let difference = subtract(red_full, fade_in);
    let on_from = moment(difference);
    let red_last = add(done, pad);
    let off = moment(red_last);
    let sum = add(red_last, fade_out);
    let off_until = moment(sum);
    let red = "\\t(" + on_from + "," + on + ",\\1c&H0000FF&)";
    let white = "\\t(" + off + "," + off_until + ",\\1c&HFFFFFF&)";
    let text = "{\\1c&HFFFFFF&" + red + white + "}" + word.text;
    return text;
  }
  let texts = list_map_index(words, word_text);
  let joined = list_join_space(texts);
  return joined;
}
