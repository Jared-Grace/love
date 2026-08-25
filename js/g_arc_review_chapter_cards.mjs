import { g_npc_cast_dealt_nicknames } from "./g_npc_cast_dealt_nicknames.mjs";
import { g_npc_cast_dealt } from "./g_npc_cast_dealt.mjs";
import { property_get } from "./property_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_property } from "./list_get_property.mjs";
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
  "THE CAST IS DEALT ONCE FOR THE WHOLE CHAPTER, and that is the difference between a page and a page that never arrives. Both of the things this needs about a person - what they are called and whether they are a man or a woman - come off one deal, and a deal counts every sermon that has been written. Asked per person it was six deals for a chapter of three people, and the page died on a phone with three aborted requests and no partial drawing; asked per chapter it was still two, because the naming used to deal for itself. It is one now however many people the chapter holds.";
  "THE ANSWERS ARE INDEXED RATHER THAN SEARCHED, because the pool's own number is the position a person sits at in both of these lists. So a person's number is their address in the deal and in the naming alike, and neither list has to be walked looking for them.";
  arguments_assert(arguments, 1);
  let arcs = await g_arc_written_chapter(chapter_code);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let notes = await g_arc_feedback_chapter(chapter_code);
  let dealt = await g_npc_cast_dealt();
  let nicknames = g_npc_cast_dealt_nicknames(dealt);
  let people = [];
  for (let entry of arcs) {
    let index = property_get(entry, "index");
    let wanted = number_from_text(index);
    let nickname = list_get(nicknames, wanted);
    let gender = list_get_property(dealt, wanted, "gender");
    let person = g_arc_review_person_cards(
      entry,
      passages,
      notes,
      nickname,
      gender,
    );
    list_add(people, person);
  }
  let r = {
    chapter_code,
    people,
  };
  return r;
}
