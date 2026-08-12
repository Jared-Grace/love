import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_last } from "./text_last.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { bible_sentence_end_sample_chapter } from "./bible_sentence_end_sample_chapter.mjs";
import { bible_sentence_end_sample_count } from "./bible_sentence_end_sample_count.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { ebible_verse_download } from "./ebible_verse_download.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_folder_sentence_end_measure(bible_folder) {
  "Reads the opening of one bible and counts how many of its verses finish on a mark this repo knows a sentence to end on.";
  "This is the measurement everything about waiting for the end of a sentence rests on. A bible that marks its sentences can be asked whether this verse finished one; a bible that does not can only ever answer no, and anything waiting for it would wait until whatever bound it holds ran out.";
  "It reads what a reader reads - the verses as they were uploaded - rather than the text they were cut from, because a mark lost on the way up would be lost to the reader too and this would say nothing about it.";
  "A verse that cannot be fetched is counted as not read rather than as not marked, so a bible missing part of a chapter says so instead of being mistaken for one that writes no marks.";
  let chapter_code = bible_sentence_end_sample_chapter();
  let count = bible_sentence_end_sample_count();
  let verse_numbers = range_1(count);
  async function lambda(verse_number) {
    async function download() {
      let downloaded = await ebible_verse_download(
        bible_folder,
        chapter_code,
        verse_number,
      );
      return downloaded;
    }
    let verse = await catch_null_async(download);
    return verse;
  }
  let verses = await list_map_unordered_async(verse_numbers, lambda);
  let read = list_filter(verses, null_not_is);
  function lambda2(verse) {
    let text = property_get(verse, "text");
    let ended = bible_verse_end_is(text);
    return ended;
  }
  let ended_each = list_filter(read, lambda2);
  ("What the verses this did not recognise end on is written down beside the count, because a bible reading zero has two quite different causes and the count alone cannot tell them apart. One writes no mark at all; the other writes a mark nobody here had met - and only the second is repaired by widening the set. The first time this ran it found Urdu at zero, and this line is what said the reason was a full stop shaped differently rather than a language without sentences.");
  function lambda3(verse) {
    let text = property_get(verse, "text");
    let trimmed = bible_verse_trim_right(text);
    let last = text_last(trimmed);
    return last;
  }
  let unended = list_difference(read, ended_each);
  let ends = list_map(unended, lambda3);
  let unrecognised = list_unique(ends);
  list_sort_text(unrecognised);
  let measured = {
    bible_folder,
    chapter_code,
    read: list_size(read),
    ended: list_size(ended_each),
    unrecognised,
  };
  return measured;
}
