import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function bible_gathered_chapter_gaps(code, taken, chapters, unreadable) {
  "One gathered chapter measured against itself: its gathered verse ranges laid end to end, and every run of verses between them that nothing points at.";
  "IT WRITES INTO TWO LISTS IT WAS HANDED rather than returning them, because both answers are gathered across every chapter and only mean anything once every chapter has been asked.";
  "A CHAPTER WITH NO GAP IS NOT MENTIONED, not even as an empty entry, so the length of the answer is the count of chapters that really have one.";
  "A VERSE RANGE THIS CANNOT READ IS COLLECTED RATHER THAN SKIPPED. The ranges are written as one number, or two with a dash between, and anything else - a comma, a letter, a stray space - goes on the other list, because a range silently treated as zero would invent a gap that is not there.";
  arguments_assert(arguments, 4);
  let spans = [];
  function each_take(take) {
    let parts = text_split(take.verses, "-");
    let first_text = parts[0];
    let last_text = parts[subtract(parts.length, 1)];
    let first_digits = text_digits_only(first_text);
    let last_digits = text_digits_only(last_text);
    let readable =
      equal(first_digits, first_text) && equal(last_digits, last_text);
    if (not(readable)) {
      let unread = {
        chapter_code: code,
        title: take.title,
        verses: take.verses,
      };
      list_add(unreadable, unread);
      return;
    }
    let span = {
      first: Number(first_text),
      last: Number(last_text),
    };
    list_add(spans, span);
  }
  each(taken, each_take);
  function span_first(span) {
    let r = span.first;
    return r;
  }
  let sorted = list_sort_number_mapper(spans, span_first);
  let gaps = [];
  let reached = 0;
  function each_span(span) {
    let after = reached + 1;
    if (greater_than(span.first, after)) {
      let gap = {
        from: after,
        to: subtract(span.first, 1),
      };
      list_add(gaps, gap);
    }
    if (greater_than(span.last, reached)) {
      reached = span.last;
    }
  }
  each(sorted, each_span);
  if (gaps.length) {
    let chapter = {
      chapter_code: code,
      gaps,
    };
    list_add(chapters, chapter);
  }
}
