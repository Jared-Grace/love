import { lyric_video_line_lit_colour } from "./lyric_video_line_lit_colour.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { math_max } from "./math_max.mjs";
import { half } from "./half.mjs";
import { add } from "./add.mjs";
import { lyric_video_word_done } from "./lyric_video_word_done.mjs";
import { math_min } from "./math_min.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function lyric_video_line_words_text(line, lead) {
  "$plain line";
  "$plain lead";
  "The words of one sung line as subtitle text in which each word fades to its line's lit colour as it begins to be sung and back to white as it is done.";
  "★ WHICH COLOUR IS ASKED OF THE LINE RATHER THAN SETTLED HERE, AND IT USED TO BE RED WRITTEN OUT IN THIS FILE. One colour for a whole song says the same thing over the cross and over the empty tomb, and a song that goes through both is saying two things; a line is the smallest piece of a song that has a single thing to say, so it is the piece that carries the colour. A line that asks for nothing still lights red, so nothing already watched changes.";
  "★ EACH FADE IS CENTRED ON THE MOMENT, SO THE WORD IS HALF RED EXACTLY WHEN IT BEGINS AND HALF WHITE EXACTLY WHEN IT IS DONE. It used to begin a fifth of a second early and end as late, so a word timed a little wrong was still red while it was sung; the human then placed the words by hand, which lights them exactly, and asked for no pad. They asked for the fade back without the pad: a word is done the moment the next begins, so the one fading out and the one fading in cross over each other on the same moment rather than one waiting for the other.";
  "★ A FADE IS NEVER LONGER THAN THE WORD IS LIT. Centred fades on a word shorter than the fade would have its fade out begin before its fade in ends, and the two changes of colour would fight; shortened to the word, the fade in ends exactly where the fade out begins.";
  "★ NO CHANGE OF COLOUR ENDS AT ZERO. The renderer reads a change whose end is written as zero as one that lasts the whole line, so a first word begun before its line goes up would creep to red over the entire card. Every change ends at least a millisecond after it begins, and a millisecond is far shorter than a frame.";
  "★ NO MOMENT IS LET BACK BEFORE THE LINE GOES UP. A first word placed on its note can begin a little ahead of the line - a change asked for before the line exists is simply a word that is already red when the line appears.";
  "★ THE MOMENTS ARE COUNTED FROM WHEN THE LINE GOES UP, NOT FROM THE START OF THE SONG, BECAUSE THAT IS WHAT A CHANGE INSIDE ONE SUBTITLE LINE IS MEASURED FROM. The line goes up a lead ahead of its singing so it can be read first, so every word's moment has that lead added back.";
  "★ WHEN A WORD IS DONE IS ASKED OF THE SAME RULE THE SCREEN FOR MOVING WORDS BY HAND LIGHTS THEM BY, so a word placed there by ear lights here exactly as it did there - that screen switches at the middle of each fade.";
  "★ EVERY WORD STARTS BY SAYING WHITE, BECAUSE A COLOUR CHANGE IN A SUBTITLE CARRIES ON INTO EVERY WORD AFTER IT. Without that, the first word turning red turns the whole rest of the line red with it, and the words not yet sung light up early. Measured on the first rendering: at the third second the whole first line stood red.";
  arguments_assert(arguments, 2);
  let shown = subtract(line.start, lead);
  let words = line.words;
  let fade_most = 0.3;
  let lit_colour = lyric_video_line_lit_colour(line);
  function moment(seconds) {
    let since = subtract(seconds, shown);
    let ms = multiply_round(since, 1000);
    let kept = math_max(ms, 0);
    return kept;
  }
  function change(seconds, fade, colour) {
    let halved = half(fade);
    let before = subtract(seconds, halved);
    let from = moment(before);
    let after = add(seconds, halved);
    let end = moment(after);
    let shortest = add(from, 1);
    let to = math_max(end, shortest);
    let text_change = "\\t(" + from + "," + to + ",\\1c" + colour + ")";
    return text_change;
  }
  function word_text(word, index) {
    let done = lyric_video_word_done(words, index);
    let lit = subtract(done, word.start);
    let lit_kept = math_max(lit, 0);
    let fade = math_min(fade_most, lit_kept);
    let to_lit = change(word.start, fade, lit_colour);
    let white = change(done, fade, "&HFFFFFF&");
    let text = "{\\1c&HFFFFFF&" + to_lit + white + "}" + word.text;
    return text;
  }
  let texts = list_map_index(words, word_text);
  let joined = list_join_space(texts);
  return joined;
}
