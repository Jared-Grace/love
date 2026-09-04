import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_words } from "./lyric_video_document_words.mjs";
import { text_word_plain } from "./text_word_plain.mjs";
import { list_map } from "./list_map.mjs";
import { lists_matched_indexes } from "./lists_matched_indexes.mjs";
export function lyric_video_document_lines_started(
  document,
  words_read,
  shift,
) {
  "$plain document";
  "$plain words_read";
  "$plain shift";
  "Where each line of a lyric video begins according to one reading of the recording, and how many of the document's words that reading accounted for.";
  "★ ONE READING IS EITHER KIND, WHICH IS THE WHOLE REASON THIS TAKES A LIST OF WORDS RATHER THAN A RECORDING. An aligner was handed the words and returns them all; a transcriber was handed nothing and returns what it thought it heard. Laying either against the document by the same route means the two answers are the same shape and can be set side by side, and a second route written for the second kind is a second place for them to stop being comparable.";
  "★ THE COUNT THAT COMES BACK IS THE CHECK, AND IT IS ONLY WORTH ANYTHING FOR A READING THAT COULD HAVE DISAGREED. An aligner accounts for every word by construction, so its count says nothing at all; a transcriber's count is how much of what is written was actually sung, and on a sung psalm that told the right words from a different psalm's by nine hundred and sixty eight thousandths against a hundred and ninety one.";
  "A line whose own first word went unheard is given the first word of it that was heard, which is late rather than early. That is the safe direction: a line reported late disagrees with the aligner and is handed to a person, where one reported early could quietly agree with a wrong answer.";
  arguments_assert(arguments, 3);
  let words = lyric_video_document_words(document);
  function plain_written(entry) {
    let r = entry.plain;
    return r;
  }
  function plain_read(word) {
    let p = text_word_plain(word.word);
    return p;
  }
  let written = list_map(words, plain_written);
  let said = list_map(words_read, plain_read);
  let indexes = lists_matched_indexes(written, said);
  let starts = [];
  for (let number = 0; less_than(number, document.lines.length); number++) {
    starts.push(null);
  }
  let matched = 0;
  for (let place = 0; less_than(place, indexes.length); place++) {
    let found = indexes[place];
    if (equal(found, null)) {
      continue;
    }
    matched = matched + 1;
    let number = words[place].line;
    if (equal(starts[number], null)) {
      starts[number] = words_read[found].start + shift;
    }
  }
  let started = {
    starts,
    matched,
    written: written.length,
    said: said.length,
  };
  return started;
}
