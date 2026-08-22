import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { bible_gathered_events_by_chapter } from "./bible_gathered_events_by_chapter.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { text_split } from "./text_split.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_gathered_verse_gaps() {
  "Every run of verses inside a gathered chapter that no event points at, found by laying the gathered ranges of each chapter end to end and looking at what is between them.";
  "★ GATHERING TOO LITTLE LOOKS EXACTLY LIKE GATHERING, WHICH IS THE WHOLE REASON THIS EXISTS. An event that was never written down throws nothing, fails no gate and leaves no mark - the corpus simply hands back one fewer scene and says nothing is wrong. Verses nobody points at are the only trace such an omission leaves, so this is what turns a silence into a list somebody can read.";
  "★ IT SEES GAPS AT THE FRONT AND IN THE MIDDLE AND IT CANNOT SEE ONE AT THE END, AND THAT LIMIT IS EXACT. A gap is found by the distance between two things that were gathered, so the last gathered verse of a chapter has nothing after it to measure against. Telling a chapter that stops at verse twenty from one that stops at verse forty needs the chapter's own length, which is in the bible text and not on this machine. So a clean answer here means no gap was FOUND, never that no verse was missed.";
  "A gap being reported is not the same as a mistake. The spans keep only what happens with agents, so a run of verses left out may be a genealogy somebody set aside deliberately - and that judgement is written in prose at the foot of each span rather than in the data, which is exactly why a reader has to look at what comes back rather than treating the list as a fault report.";
  "A verse range this cannot read is collected rather than skipped. The gathered ranges are written as one number or two with a dash between, and anything else - a comma, a letter, a stray space - is handed back under its own heading, because a range silently treated as zero would invent a gap that is not there.";
  let by_chapter = await bible_gathered_events_by_chapter();
  let codes = object_property_names(by_chapter);
  let chapters = [];
  let unreadable = [];
  function each_code(code) {
    let taken = by_chapter[code];
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
  each(codes, each_code);
  let answer = {
    chapters,
    chapters_with_gaps: chapters.length,
    chapters_gathered: codes.length,
    unreadable,
  };
  return answer;
}
