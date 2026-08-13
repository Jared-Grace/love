import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_size } from "./text_size.mjs";
export function gloss_words_misaligned(written, explained) {
  "Where a passage's words and the words its explanations name stop lining up, or nothing when they line up all the way through. Both lists are already cut into bare words.";
  "It walks the two side by side rather than comparing them place for place, because the counts are allowed to differ and a place-for-place reading calls every word after the first difference wrong as well.";
  "An explanation may take one written word apart into its pieces - a root and the ending joined onto it, siya and ng under siyang - and that is lining up, not a fault. So when the next explanation is not the written word, the ones after it are joined on until they spell it. Joining is the only thing tried: the pieces have to spell the written word exactly, letter for letter, so nothing is accepted here that a reader could not put back together.";
  "A word the explanations never reach, and an explanation left over after the words have run out, are both differences too. Either one means the page paints something with nothing under it or nothing above it.";
  let count = list_size(written);
  let count_explained = list_size(explained);
  let index = 0;
  let cursor = 0;
  while (less_than(index, count)) {
    let word = list_get(written, index);
    if (greater_than_equal(cursor, count_explained)) {
      let ran_out = {
        index,
        written: word,
        explained: null,
      };
      return ran_out;
    }
    let other = list_get(explained, cursor);
    if (equal(word, other)) {
      index = index + 1;
      cursor = cursor + 1;
      continue;
    }
    let joined = other;
    let reach = cursor + 1;
    let matched = false;
    while (
      less_than(reach, count_explained) &&
      less_than(text_size(joined), text_size(word))
    ) {
      let right = list_get(explained, reach);
      joined = text_combine(joined, right);
      reach = reach + 1;
      if (equal(joined, word)) {
        matched = true;
        break;
      }
    }
    if (matched) {
      index = index + 1;
      cursor = reach;
      continue;
    }
    let difference = {
      index,
      written: word,
      explained: other,
    };
    return difference;
  }
  if (less_than(cursor, count_explained)) {
    let spare = {
      index: count,
      written: null,
      explained: list_get(explained, cursor),
    };
    return spare;
  }
  let aligned = null;
  return aligned;
}
