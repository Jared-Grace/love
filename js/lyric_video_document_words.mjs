import { text_word_plain } from "./text_word_plain.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { text_words } from "./text_words.mjs";
export function lyric_video_document_words(document) {
  "$plain document";
  "Every word of a lyric video's lines in the order they are sung, each stripped down to its bare letters and carrying the number of the line it belongs to.";
  "★ THE BARE LETTERS ARE WHAT MAKE THE WORD COMPARABLE WITH ONE THAT WAS HEARD RATHER THAN READ. A listener writes Hallelujah with no mark after it and LORD in ordinary letters, and neither difference is a mishearing; leaving the marks and the case in would count both as words nobody said and make a right reading look like a wrong one.";
  "★ THE LINE NUMBER TRAVELS WITH THE WORD BECAUSE EVERY LATER STEP NEEDS IT AND NOTHING LATER CAN WORK IT OUT AGAIN. Once the words are laid alongside what was heard, some of them have no partner; counting words per line afterwards would go one out at the first one missing and stay wrong for the rest of the psalm.";
  arguments_assert(arguments, 1);
  let words = [];
  for (let number = 0; less_than(number, document.lines.length); number++) {
    let line = document.lines[number];
    function word_plain(word) {
      let entry = {
        plain: text_word_plain(word),
        line: number,
      };
      return entry;
    }
    let list = text_words(line.text);
    let entries = list_map(list, word_plain);
    for (let entry of entries) {
      words.push(entry);
    }
  }
  return words;
}
