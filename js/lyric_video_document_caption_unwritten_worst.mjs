import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_word_sure_score } from "./lyric_video_word_sure_score.mjs";
import { lyric_video_caption_margins_seconds } from "./lyric_video_caption_margins_seconds.mjs";
import { lyric_video_vocalise_words } from "./lyric_video_vocalise_words.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_word_plain_canonical } from "./text_word_plain_canonical.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
export function lyric_video_document_caption_unwritten_worst(document, heard) {
  arguments_assert(arguments, 2);
  ("$plain document");
  ("$plain heard");
  ("The one caption in a timing document with the most sung words under it that it does not say: which line, how long it holds the screen, how many such words, and what they were.");
  ("★ IT ASKS THE VIEWER'S QUESTION RATHER THAN THE FILE'S, WHICH IS THE WHOLE DIFFERENCE. A caption holds the screen until the next line begins, so the thing a person suffers is one wrong line standing over a verse being sung. An earlier reading asked instead how much singing came AFTER the last written line, and that reading put Psalm 133 twentieth of twenty-six while it was the worst song in the corpus - because the aligner had already spread the document across the repeat, which moved the last written line past the fault. A landmark inside the file is written by the same process that produces the fault; how long a person reads one line is not.");
  ("★ A WORD THE CAPTION ALREADY SHOWS IS NOT AN UNWRITTEN WORD, and leaving that out is what stops the check firing on singing that is perfectly captioned. Psalm 149 holds Hallelujah for thirty seconds while Hallelujah is sung ten times over; the screen is right at every instant, and splitting it into ten identical captions would only make the words blink out for a frame between each. Counting by spelling rather than by moment is what tells that apart from Psalm 133, where the words sung under the held line belong to five other verses.");
  ("The last line is held to the end of the song, so its window is closed by the recording's own length rather than by a line after it.");
  let lines = document.lines;
  let sure = lyric_video_word_sure_score();
  let margins = lyric_video_caption_margins_seconds();
  let vocalise = lyric_video_vocalise_words();
  let worst = {
    line: null,
    held: 0,
    count: 0,
    said: [],
  };
  let last = subtract(lines.length, 1);
  for (let number = 0; less_than(number, lines.length); number++) {
    let line = lines[number];
    let from = line.start;
    let ending = equal(number, last);
    let to = ending ? document.duration : lines[number + 1].start;
    let list = text_split_space(line.text);
    let shown = list_map(list, text_word_plain_canonical);
    let opens = add(from, margins.start);
    let closes = subtract(to, margins.end);
    let said = [];
    for (let word of heard) {
      let after = greater_than(word.start, opens);
      let before = less_than(word.start, closes);
      let confident = greater_than(word.score, sure);
      if (not(after) || not(before) || not(confident)) {
        continue;
      }
      let plain = text_word_plain_canonical(word.word);
      let captioned = list_includes(shown, plain);
      let wordless = list_includes(vocalise, plain);
      if (captioned || wordless) {
        continue;
      }
      said.push(word.word);
    }
    let more = greater_than(said.length, worst.count);
    if (more) {
      let held = subtract(to, from);
      worst = {
        line: number,
        held,
        count: said.length,
        said,
      };
    }
  }
  return worst;
}
