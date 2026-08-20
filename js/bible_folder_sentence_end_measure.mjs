import { bible_folder_sentence_end_sample_chapter } from "./bible_folder_sentence_end_sample_chapter.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_folder_chapter_verses_outcome } from "./bible_folder_chapter_verses_outcome.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
import { text_last } from "./text_last.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { bible_sentence_end_sample_count } from "./bible_sentence_end_sample_count.mjs";
import { bible_verse_end_is } from "./bible_verse_end_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_folder_sentence_end_measure(bible_folder) {
  "Reads the opening of one bible and counts how many of its verses finish on a mark this repo knows a sentence to end on.";
  "This is the measurement everything about waiting for the end of a sentence rests on. A bible that marks its sentences can be asked whether this verse finished one; a bible that does not can only ever answer no, and anything waiting for it would wait until whatever bound it holds ran out.";
  "It reads what a reader reads - the verses as they were uploaded - rather than the text they were cut from, because a mark lost on the way up would be lost to the reader too and this would say nothing about it.";
  "A verse that cannot be fetched is counted as not read rather than as not marked, so a bible missing part of a chapter says so instead of being mistaken for one that writes no marks.";
  "WHY THE CHAPTER GAVE NOTHING IS WRITTEN DOWN BESIDE THE COUNT, because reading nothing has two causes that look identical and only one of them is a fact about a bible. A bible that does not hold this chapter has told us something true; a chapter that would not answer this afternoon has told us how the run went, and recorded as the first it becomes a wrong fact in the shape of a right one - believed until somebody happens to ask that bible again by hand.";
  "Measured 2026-08-20, which is what this line is for. A hundred bibles stood in the record as having no readable verse here; twenty eight of them read in full when asked again the same morning, and the record had been written four hours earlier. The count alone could never have said which twenty eight.";
  "THE CHAPTER IS CHOSEN PER BIBLE AND NOT ONCE FOR ALL OF THEM, which is the correction this line exists to record. One chapter read everywhere wrote seventy one bibles down as unreadable, and forty of those hold books they were never asked for - a bible published as a gospel and four letters has no Luke and is not thereby a language without sentences.";
  let chapter_code =
    await bible_folder_sentence_end_sample_chapter(bible_folder);
  let unstored = text_empty_is(chapter_code);
  if (unstored) {
    ("A BIBLE STORAGE HOLDS NOTHING FOR IS NOT ASKED, and says so by naming no chapter. Asking would spend a fetch to be told what the record already knows, and the answer would come back looking exactly like a bible that holds the chapter and could not be reached this afternoon.");
    let nothing = {
      bible_folder,
      chapter_code,
      read: 0,
      ended: 0,
      absent: true,
      unreachable: false,
      unrecognised: [],
    };
    return nothing;
  }
  let count = bible_sentence_end_sample_count();
  let outcome = await bible_folder_chapter_verses_outcome(
    bible_folder,
    chapter_code,
    count,
  );
  let verses = property_get(outcome, "verses");
  let absent = property_get(outcome, "absent");
  let unreachable = property_get(outcome, "unreachable");
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
  let unrecognised = list_map_unique(unended, lambda3);
  list_sort_text(unrecognised);
  let measured = {
    bible_folder,
    chapter_code,
    read: list_size(read),
    ended: list_size(ended_each),
    absent,
    unreachable,
    unrecognised,
  };
  return measured;
}
