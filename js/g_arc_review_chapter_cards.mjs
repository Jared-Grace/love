import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_chapter } from "./g_arc_written_chapter.mjs";
import { g_arc_reviewed_chapter } from "./g_arc_reviewed_chapter.mjs";
import { g_arc_previous_chapter } from "./g_arc_previous_chapter.mjs";
import { g_arc_noted_chapter } from "./g_arc_noted_chapter.mjs";
import { g_arc_backup_chapter } from "./g_arc_backup_chapter.mjs";
import { g_arc_approved_chapter } from "./g_arc_approved_chapter.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_feedback_chapter } from "./g_arc_feedback_chapter.mjs";
import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { g_npc_cast_dealt_nicknames } from "./g_npc_cast_dealt_nicknames.mjs";
import { property_get } from "./property_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { g_arc_review_base } from "./g_arc_review_base.mjs";
import { g_arc_noted_person } from "./g_arc_noted_person.mjs";
import { g_arc_chapter_person_or_null } from "./g_arc_chapter_person_or_null.mjs";
import { g_arc_review_person_cards } from "./g_arc_review_person_cards.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_review_chapter_cards(chapter_code) {
  "$plain chapter_code";
  "Everything a reviewer needs about one chapter's arcs in a single answer: every person written for it, their turns with the Scripture each answer named, every note already standing against a line, and what has moved in each arc since the last older copy of it.";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "IT IS ONE ANSWER BECAUSE A SCREEN ASKING THREE TIMES CAN BE ANSWERED ABOUT THREE DIFFERENT MOMENTS. The arcs, the passages they were written from and the notes standing against them are read here one after another with nothing in between; asked separately across a wire, a note filed between two of the questions arrives attached to a turn the reader is no longer looking at.";
  "THE OLDER COPIES ARE READ IN THE SAME BREATH AS THE ARC ITSELF, and that matters more here than for any of the others. They are compared against each other, so a gap between the reads is a gap in which the live arc can be rewritten - and the answer would then show a difference against a version nobody ever saw beside a version nobody has read.";
  "THERE ARE THREE OLDER COPIES AND THE PERSON'S OWN READING WINS, which is why all of them are fetched before anybody is walked. The reading is the arc the reviewer actually judged; the copy a revision replaced is the arc as it stood just before the notes were answered; the backup is the stand-in for arcs written before there was any way to mark one read, and without it the first pass over a chapter shows nothing moved on arcs that have been rewritten line by line. Which of the three is used is not decided here - they are handed over in one place so that the deciding is done in one place.";
  "THE APPROVED COPY IS A FOURTH READ AND NOT A FOURTH CANDIDATE FOR THE BASE, and it is fetched here beside the other three for the same reason they are - so that nothing can be rewritten in the gap between two reads. It is never a stand-in for a reading, because approving records a reading of its own in the same breath; it is asked for so the page can say what has moved since the wording was last passed, which is a different question from what has moved since anybody last looked.";
  "IT READS THE STORE EVERY TIME AND CARRIES NOTHING. That is the whole reason for it: a review page built once from a file goes stale the moment the arc is revised, and a stale page is unreadable as stale - the reviewer sees a fault, reports it, and it was mended a day ago. Asked over the seam, every drawing of the page is answered by a reader started after the last write.";
  "NOTHING WRITTEN YET IS AN EMPTY LIST OF PEOPLE AND NOT A FAILURE, the same as it is for the store underneath.";
  "THE CAST IS DEALT ONCE FOR THE WHOLE CHAPTER, and that is the difference between a page and a page that never arrives. Both of the things this needs about a person - what they are called and whether they are a man or a woman - come off one deal, and a deal counts every sermon that has been written. Asked per person it was six deals for a chapter of three people, and the page died on a phone with three aborted requests and no partial drawing; asked per chapter it was still two, because the naming used to deal for itself. It is one now however many people the chapter holds.";
  "THE ANSWERS ARE INDEXED RATHER THAN SEARCHED, because the pool's own number is the position a person sits at in both of these lists. So a person's number is their address in the deal and in the naming alike, and neither list has to be walked looking for them.";
  arguments_assert(arguments, 1);
  let arcs = await g_arc_written_chapter(chapter_code);
  let reviewed = await g_arc_reviewed_chapter(chapter_code);
  let previous = await g_arc_previous_chapter(chapter_code);
  let noted = await g_arc_noted_chapter(chapter_code);
  let backup = await g_arc_backup_chapter(chapter_code);
  let approved_arcs = await g_arc_approved_chapter(chapter_code);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let dealt = await g_npc_cast_dealt();
  let nicknames = g_npc_cast_dealt_nicknames(dealt);
  ("THE PEOPLE COME BACK IN POOL ORDER AND NOT IN THE ORDER THEY WERE LAST WRITTEN. The store keeps a person by dropping their entry and adding it again, so whoever was revised most recently sits at the end of it - and the tabs across the top of the bench, which are drawn straight from this list, shuffled every time anybody answered a note. A reviewer coming back to the page found the person they were reading in a different place, and the one place it moved them to was the far end, which is where somebody who has just been revised is least likely to be looked for. Sorting on the pool's own number makes the order a fact about the chapter rather than a record of what was touched last, so it is the same on every drawing of the page.");
  function person_pool_number(entry) {
    let index = property_get(entry, "index");
    let wanted = number_from_text(index);
    return wanted;
  }
  list_sort_number_mapper(arcs, person_pool_number);
  let people = [];
  for (let entry of arcs) {
    let index = property_get(entry, "index");
    let wanted = number_from_text(index);
    let nickname = list_get(nicknames, wanted);
    let gender = list_get_property(dealt, wanted, "gender");
    let base = g_arc_review_base(reviewed, previous, backup, wanted);
    let asked = g_arc_noted_person(noted, wanted);
    let approved_arc = g_arc_chapter_person_or_null(approved_arcs, wanted);
    let person = g_arc_review_person_cards(
      entry,
      passages,
      notes,
      nickname,
      gender,
      {
        base,
        asked,
        approved_arc,
      },
    );
    list_add(people, person);
  }
  let r = {
    chapter_code,
    people,
  };
  return r;
}
