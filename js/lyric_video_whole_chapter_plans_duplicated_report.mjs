import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { lyric_video_chapter_plans } from "./lyric_video_chapter_plans.mjs";
import { null_is } from "./null_is.mjs";
import { lyric_video_plans_pictures_hashes } from "./lyric_video_plans_pictures_hashes.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { file_hash } from "./file_hash.mjs";
import { property_exists } from "./property_exists.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_whole_chapter_plans_duplicated_report() {
  arguments_assert(arguments, 0);
  ("Every psalm that has a whole-chapter plan, with the pictures of it a part plan already holds, the pictures it alone holds, and whether a whole-chapter recording addresses it at all - so that throwing one away can be priced before it is done.");
  ("★ THE QUESTION IS WHETHER A PICTURE WOULD BE LOST, AND ONLY THE CONTENTS CAN ANSWER IT. Two plans of one chapter sometimes draw out of one folder and sometimes out of a folder each, so a shared picture is written down once in the first case and twice in the second. Comparing what is written down calls four chapters wholly unique that are wholly duplicated - measured 2026-10-14, Psalms 96, 97, 98 and 99, fifty-seven crops between them, every one of them byte for byte a copy of a crop a part plan already names.");
  ("★ ONLY LIVE PART PLANS COUNT AS HOLDING A PICTURE, AND THE FOUR ODD CHAPTERS TURN ON IT. Psalms 101, 102, 103 and 104 each hold exactly one crop found nowhere else, and each of those four is named by the whole-chapter plan and by superseded takes and by nothing live. They are pictures that were replaced. Counting a take as holding them would say those plans hold nothing of their own, which would be a reason to throw away four plans on the strength of four pictures nobody wants.");
  ("★ A RECORDING IS WHAT MAKES A PLAN USED, SO IT IS ASKED HERE AND NOT LEFT TO THE READER. Forty-four of the seventy-four chapters with a whole-chapter plan have been recorded whole, so such a plan is ordinarily work on its way to a recording rather than leftovers. A plan whose every picture is duplicated is spare only where no recording addresses it; where one does, the duplication is the ordinary way this record works and means nothing at all.");
  ("★ IT REPORTS AND NEVER REFUSES, BECAUSE WHAT IT FINDS IS NOT A FAULT. The duplication it counts is admitted on purpose: the record keys a picture by its passage rather than by its chapter, and says in its own prose why it would rather publish one file twice than let one chapter's two crops of one painting collide. This is a thing to read before deciding, not a gate to go red, and a gate built on it would be red for as long as the psalms are being recorded.");
  ("A picture the plan names that is not on this machine is counted apart from both, because absent is not the same as held elsewhere, and the check that chases absent crops is its own.");
  let file_path = giveaway_psalms_record_path();
  let rows = await file_read_json(file_path);
  let sung = {};
  for (let row of rows) {
    let song_is = equal(row.kind, "song");
    if (not(song_is)) {
      continue;
    }
    property_set(sung, row.passage_code, true);
  }
  let chapters = await lyric_video_chapter_plans();
  let report = [];
  for (let chapter of chapters) {
    let whole = chapter.whole;
    if (null_is(whole)) {
      continue;
    }
    let held = await lyric_video_plans_pictures_hashes(chapter.parts);
    let elsewhere = [];
    let only_here = [];
    let absent = [];
    for (let picture of whole.document.pictures) {
      let there = await file_exists(picture.path);
      if (not(there)) {
        list_add(absent, picture.path);
        continue;
      }
      let hash = await file_hash(picture.path);
      let known = property_exists(held, hash);
      if (known) {
        list_add(elsewhere, picture.path);
        continue;
      }
      list_add(only_here, picture.path);
    }
    let chapter_code = ebible_chapter_code_pad("PSA", chapter.chapter_number);
    let recorded_whole = property_exists(sung, chapter_code);
    let duplicated = list_empty_is(only_here);
    let spare = duplicated && not(recorded_whole);
    let row = {
      chapter_number: chapter.chapter_number,
      whole_plan: whole.name,
      part_plans: list_size(chapter.parts),
      pictures: list_size(whole.document.pictures),
      held_by_a_part_plan: list_size(elsewhere),
      only_here: only_here,
      absent: absent,
      recorded_whole: recorded_whole,
      spare: spare,
    };
    list_add(report, row);
  }
  return report;
}
