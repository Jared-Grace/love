import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { math_max } from "./math_max.mjs";
import { lyric_video_word_done } from "./lyric_video_word_done.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function lyric_video_line_words_text(line, lead) {
  "$plain line";
  "$plain lead";
  "The words of one sung line as subtitle text in which each word turns red the moment it begins to be sung and back to white the moment it is done.";
  "★ THE RED IS EXACT: NO PAD BEFORE OR AFTER, AND NO FADE. It used to begin a fifth of a second early and fade in over a further three tenths, and end as late, so a word timed a little wrong was still red while it was sung. The human then placed the words by hand on the screen for moving them, which lights them exactly, and asked for the video to light them exactly too - a pad now only smears words that were put where they belong.";
  "★ A CHANGE OF COLOUR IS A CHANGE OVER ONE MILLISECOND ENDING ON THE MOMENT, NEVER OVER NONE. The renderer reads a change whose end is written as zero as one that lasts the whole line, so a first word begun before its line goes up would creep to red over the entire card. Ending every change at one millisecond or later rules that out, and a millisecond is far shorter than a frame.";
  "★ NO MOMENT IS LET BACK BEFORE THE LINE GOES UP. A first word placed on its note can begin a little ahead of the line - a change asked for before the line exists is simply a word that is already red when the line appears.";
  "★ THE MOMENTS ARE COUNTED FROM WHEN THE LINE GOES UP, NOT FROM THE START OF THE SONG, BECAUSE THAT IS WHAT A CHANGE INSIDE ONE SUBTITLE LINE IS MEASURED FROM. The line goes up a lead ahead of its singing so it can be read first, so every word's moment has that lead added back.";
  "★ WHEN A WORD IS DONE IS ASKED OF THE SAME RULE THE SCREEN FOR MOVING WORDS BY HAND LIGHTS THEM BY, so a word placed there by ear lights here exactly as it did there.";
  "★ EVERY WORD STARTS BY SAYING WHITE, BECAUSE A COLOUR CHANGE IN A SUBTITLE CARRIES ON INTO EVERY WORD AFTER IT. Without that, the first word turning red turns the whole rest of the line red with it, and the words not yet sung light up early. Measured on the first rendering: at the third second the whole first line stood red.";
  arguments_assert(arguments, 2);
  let shown = subtract(line.start, lead);
  let words = line.words;
  function moment(seconds) {
    let since = subtract(seconds, shown);
    let ms = multiply_round(since, 1000);
    let kept = math_max(ms, 1);
    return kept;
  }
  function change(seconds, colour) {
    let at = moment(seconds);
    let from = subtract(at, 1);
    let text_change = "\\t(" + from + "," + at + ",\\1c" + colour + ")";
    return text_change;
  }
  function word_text(word, index) {
    let done = lyric_video_word_done(words, index);
    let red = change(word.start, "&H0000FF&");
    let white = change(done, "&HFFFFFF&");
    let text = "{\\1c&HFFFFFF&" + red + white + "}" + word.text;
    return text;
  }
  let texts = list_map_index(words, word_text);
  let joined = list_join_space(texts);
  return joined;
}
