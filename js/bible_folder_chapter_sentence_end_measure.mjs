import { bible_verse_end_apparatus_or_null } from "./bible_verse_end_apparatus_or_null.mjs";
import { bible_verse_end_unrecognised_tail_or_null } from "./bible_verse_end_unrecognised_tail_or_null.mjs";
import { bible_sentence_end_tails_kept_count } from "./bible_sentence_end_tails_kept_count.mjs";
import { list_take } from "./list_take.mjs";
import { bible_verse_end_blocked_or_null } from "./bible_verse_end_blocked_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
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
export async function bible_folder_chapter_sentence_end_measure(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Reads one named chapter of one bible and counts how many of its verses finish on a mark this repo knows a sentence to end on.";
  "This is the measurement everything about waiting for the end of a sentence rests on. A bible that marks its sentences can be asked whether this verse finished one; a bible that does not can only ever answer no, and anything waiting for it would wait until whatever bound it holds ran out.";
  "It reads what a reader reads - the verses as they were uploaded - rather than the text they were cut from, because a mark lost on the way up would be lost to the reader too and this would say nothing about it.";
  "A verse that cannot be fetched is counted as not read rather than as not marked, so a bible missing part of a chapter says so instead of being mistaken for one that writes no marks.";
  "WHY THE CHAPTER GAVE NOTHING IS WRITTEN DOWN BESIDE THE COUNT, because reading nothing has two causes that look identical and only one of them is a fact about a bible. A bible that does not hold this chapter has told us something true; a chapter that would not answer this afternoon has told us how the run went, and recorded as the first it becomes a wrong fact in the shape of a right one - believed until somebody happens to ask that bible again by hand.";
  "WHICH CHAPTER IS THE CALLER'S TO SAY, and that is the whole reason this is a name of its own. One bible gets asked twice - once for the chapter every bible is asked for, and once more for a chapter it actually holds when the first is not there - and the counting either time is the same counting.";
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
  ("THE MARKS THAT ONLY HID A SENTENCE MARK ARE COUNTED APART FROM THE ONES THAT REPLACED IT, and this is the half a gate can be built on. A verse ending on a comma has not finished and never will, which is a fact about where a translator cut the verse; a verse ending on a full stop and then a closing quotation has finished and was read as though it had not, which is a fault in this repo. Written down here it needs no second reading of the same chapter to find - and that is what lets the refusing happen where the rest of the gates run, with nothing reaching the network.");
  function bible_folder_chapter_sentence_end_blocking(verse) {
    let text = property_get(verse, "text");
    let blocking = bible_verse_end_blocked_or_null(text);
    return blocking;
  }
  let blocking_each = list_map_filter_null_not_is(
    unended,
    bible_folder_chapter_sentence_end_blocking,
  );
  let blocked = list_unique(blocking_each);
  list_sort_text(blocked);
  ("A FEW OF THE CLOSING WORDS ARE KEPT FOR THE VERSES THAT ENDED ON NO MARK AT ALL, because the last character alone cannot say why. Counted 2026-09-05, fifty two of the two hundred and forty three bibles that stop short have at least one verse ending on a letter, and the one of them read by hand turned out to be finishing its sentence and then printing a cross reference in brackets behind it - so the mark was there and the reader was carried past it anyway. Reading the other fifty one meant fetching every one of those chapters a second time, which is the whole reason this is written down here instead.");
  function bible_folder_chapter_sentence_end_tail(verse) {
    let text = property_get(verse, "text");
    let tail = bible_verse_end_unrecognised_tail_or_null(text);
    return tail;
  }
  let tail_each = list_map_filter_null_not_is(
    unended,
    bible_folder_chapter_sentence_end_tail,
  );
  let tails_all = list_unique(tail_each);
  list_sort_text(tails_all);
  let count2 = bible_sentence_end_tails_kept_count();
  let tails = list_take(tails_all, count2);
  ("THE BRACKETED SPANS ARE COUNTED APART FROM BOTH THE OTHERS, because a verse can finish its sentence and then print a cross reference behind it, and what stands in the way then is a whole span of words rather than one mark. The detector for a hidden mark cannot reach that, having to stop at the first letter it meets, so this asks the second question over the same verses that were already fetched. Written down beside the rest it says how many bibles do it, which is what decides whether taking such a span off is worth the judgement it needs.");
  function bible_folder_chapter_sentence_end_apparatus(verse) {
    let text = property_get(verse, "text");
    let span = bible_verse_end_apparatus_or_null(text);
    return span;
  }
  let apparatus_each = list_map_filter_null_not_is(
    unended,
    bible_folder_chapter_sentence_end_apparatus,
  );
  let apparatus_all = list_unique(apparatus_each);
  list_sort_text(apparatus_all);
  let apparatus = list_take(apparatus_all, count2);
  let measured = {
    bible_folder,
    chapter_code,
    read: list_size(read),
    ended: list_size(ended_each),
    absent,
    unreachable,
    unrecognised,
    blocked,
    tails,
    apparatus,
  };
  return measured;
}
