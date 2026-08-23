import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_feedback_chapter } from "./g_arc_feedback_chapter.mjs";
import { g_arc_review_person_cards } from "./g_arc_review_person_cards.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_review_chapter_cards(chapter_code) {
  "$plain chapter_code";
  "Everything a reviewer needs about one chapter's arcs in a single answer: every person written for it, their turns with the Scripture each answer named, and every note already standing against a line.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS ONE ANSWER BECAUSE A SCREEN ASKING THREE TIMES CAN BE ANSWERED ABOUT THREE DIFFERENT MOMENTS. The arcs, the passages they were written from and the notes standing against them are read here one after another with nothing in between; asked separately across a wire, a note filed between two of the questions arrives attached to a turn the reader is no longer looking at.";
  "IT READS THE STORE EVERY TIME AND CARRIES NOTHING. That is the whole reason for it: a review page built once from a file goes stale the moment the arc is revised, and a stale page is unreadable as stale - the reviewer sees a fault, reports it, and it was mended a day ago. Asked over the seam, every drawing of the page is answered by a reader started after the last write.";
  "NOTHING WRITTEN YET IS AN EMPTY LIST OF PEOPLE AND NOT A FAILURE, the same as it is for the store underneath.";
  arguments_assert(arguments, 1);
  let arcs = await g_arc_written_chapter(chapter_code);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let people = [];
  for (let entry of arcs) {
    let person = await g_arc_review_person_cards(entry, passages, notes);
    list_add(people, person);
  }
  let r = {
    chapter_code,
    people,
  };
  return r;
}
