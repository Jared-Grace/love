import { list_first } from "./list_first.mjs";
import { each_next_reverse } from "./each_next_reverse.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_index_of_all } from "./list_index_of_all.mjs";
import { list_index_of_last } from "./list_index_of_last.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_replace } from "./text_replace.mjs";
import { ebible_verses_before } from "./ebible_verses_before.mjs";
import { property_get } from "./property_get.mjs";
import { urdu_allah_to_god } from "./urdu_allah_to_god.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { ebible_verse_new } from "./ebible_verse_new.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { text_combine } from "./text_combine.mjs";
export async function ebible_verses(bible_folder, chapter_code) {
  "Cuts one chapter of a Bible into its verses, each with the number it is known by.";
  "A chapter arrives as one unbroken run of words with the verse numbers standing among them as words of their own, so the cutting has to find those markers rather than read a line each. That is why this is work at all: the numbers are not a field beside the text, they are in it.";
  "The cutting runs from the end of the chapter backwards. A number's word can appear more than once in a chapter - as part of the text itself, or because the same digits come round again - and the marker is always the later one, so taking the last and then throwing away everything after it leaves a shorter chapter in which the same rule holds again. Read forwards, the first match is as likely to be a word of the verse as the mark of one.";
  "Where the chapter names the number after this one, the search is narrowed to what lies past that one's mark, which keeps a number that also occurs inside an earlier verse from being taken for the heading of a later one.";
  "Anything standing before the first number is kept as a verse of its own under a nought, because a chapter often opens with a title or a heading and dropping it would lose words that are in the book.";
  "A verse left with nothing in it once the empty brackets are taken out is dropped. Those are places the translation has no words for rather than verses somebody could read, and a reader shown a numbered blank would take it for a fault in the app.";
  let v2 = await ebible_chapter_text(bible_folder, chapter_code);
  let property = "text";
  let text = property_get(v2, property);
  let verse_numbers = property_get(v2, "verse_numbers");
  text = whitespace_normalize(text);
  text = urdu_allah_to_god(text);
  let split = text_split_space(text);
  let filtered = list_filter(split, text_empty_not_is);
  function lambda_list_adder(la) {
    function lambda_each_reverse(nn, nn_next) {
      let name = property_get(nn, "name");
      let number = property_get(nn, "number");
      let index = list_index_of_last(filtered, name);
      if (null_not_is(nn_next)) {
        let name_next = property_get(nn_next, "name");
        let filtered3 = list_take(filtered, index);
        let index_next = list_index_of_last(filtered3, name_next);
        let r = list_index_of_all(filtered, name);
        function lambda2(item2) {
          let g = greater_than(item2, index_next);
          return g;
        }
        let filtered4 = list_filter(r, lambda2);
        index = list_first(filtered4);
      }
      let skipped = list_skip(filtered, text_combine(index, 1));
      let v = ebible_verse_new(skipped, number);
      la(v);
      filtered = list_take(filtered, index);
    }
    each_next_reverse(verse_numbers, lambda_each_reverse);
  }
  let verses_unfiltered = list_adder(lambda_list_adder);
  let ne = list_empty_not_is(filtered);
  if (ne) {
    let verse_number = ebible_verses_before();
    let v = ebible_verse_new(filtered, verse_number);
    list_add(verses_unfiltered, v);
  }
  list_reverse(verses_unfiltered);
  function lambda3(item) {
    let value = property_get(item, property);
    let replaced = text_replace(value, "[]", "");
    let n = text_empty_not_is(replaced);
    return n;
  }
  let verses = list_filter(verses_unfiltered, lambda3);
  return verses;
}
