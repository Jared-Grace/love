import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { list_includes } from "./list_includes.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { giveaway_archive_item_read_or_null } from "./giveaway_archive_item_read_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_words_missing } from "./list_words_missing.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
export async function giveaway_psalms_boxes_whole_report(folder_media) {
  arguments_assert(arguments, 1);
  ("$plain folder_media");
  ("Every psalm's box this repo has written down as gone out, asked of the place that holds it, and told apart into the ones holding everything they were meant to hold and the ones that do not.");
  ("★ HANDING A FILE OVER IS NOT THE SAME AS THE PLACE KEEPING IT, AND NOTHING UNTIL NOW COULD TELL THOSE APART. The sending answers with how many files it handed over, and a box that took twenty of twenty-two answers exactly like a box that took all of them. A box short one song still opens, still looks finished, and still breaks the one promise the giving away makes - that somebody can take this home and not need anybody else's site. So the only answer worth having comes from asking the place itself what it is holding, name by name.");
  ("★ THE WANTED NAMES ARE WORKED OUT THE SAME WAY THE SENDER WORKED THEM OUT, BY ASKING THE PLAN. A hand-written list of what should be in a box would be a second opinion about the same thing, and the day it drifted from the plan this would start reporting faults that are its own. Asking the plan means this check and the sending can only ever disagree about what ARRIVED.");
  ("★ A BOX STILL BEING FILED IS SAID TO BE STILL BEING FILED, NOT SAID TO BE BROKEN. The place takes the files at once and writes them into the box afterwards, so for a while a box truthfully holds less than was sent. Reported as a fault, that would send somebody sending files that are already there; reported as waiting, it says come back and ask again. Both answers name the missing files, because which files are not in yet is the useful part either way.");
  ("★ SIZES ARE COMPARED AS WELL AS NAMES, AND ANY DIFFERENCE AT ALL IS A REAL ONE. A film cut off halfway keeps its name and loses its length, so names alone would pass it. The first run of this called nineteen boxes short, and every one of those was the words of a psalm counted in letters on this side and in bytes on the other - which differ wherever a letter is not a plain one. That was a fault in the measuring, and it was mended where it was made rather than excused here: the plan counts bytes now. A check that has to forgive its own false alarms teaches a reader to skip its answers, so a gap here is left meaning exactly one thing.");
  ("★ A NAME THE PLACE DOES NOT HOLD AT ALL IS A BOX HOLDING NOTHING, NOT A QUESTION THAT FAILED. Asked about a box that was never made, the place answers plainly and at once with an empty answer - no list of files in it, not even an empty one. Read as though a list were always there, that ended the whole walk on the very first such box, which is the opposite of useful: a box whose first file never went is exactly the box somebody needs named. So an answer with no list of files is read as a box holding nothing, every file it was meant to hold is reported missing, and it is counted short like any other short box. The mender then sends the whole of it, which is the right amount to send into a box with nothing in it.");
  let gone = await giveaway_psalms_chapters_uploaded();
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let whole = [];
  let short = [];
  let filing = [];
  let unanswered = [];
  for (let item of items) {
    let gone_is = list_includes(gone, item.chapter_code);
    if (gone_is) {
      let plan = await giveaway_psalms_chapter_upload_plan(
        item.chapter,
        folder_media,
      );
      let live = await giveaway_archive_item_read_or_null(plan.identifier);
      let said_is = null_not_is(live);
      let silent_is = not(said_is);
      if (silent_is) {
        list_add(unanswered, {
          chapter: item.chapter,
          identifier: plan.identifier,
          why: "the place would not say what is in this box",
        });
      } else {
        let held = live.files ?? [];
        let names_held = list_map_property(held, "name");
        let names_wanted = list_map_property(plan.files, "path_in_item");
        let missing = list_words_missing(names_wanted, names_held);
        let sizes_off = [];
        for (let one of plan.files) {
          let there_is = list_includes_not(missing, one.path_in_item);
          if (there_is) {
            let row = list_find_property(held, "name", one.path_in_item);
            let size_held = number_from_text(row.size);
            let same_is = equal(size_held, one.size);
            let off_is = not(same_is);
            if (off_is) {
              list_add(sizes_off, {
                path_in_item: one.path_in_item,
                kind: one.kind,
                size_wanted: one.size,
                size_held: size_held,
                short_by: subtract(one.size, size_held),
              });
            }
          }
        }
        let missing_none_is = list_empty_is(missing);
        let sizes_right_is = list_empty_is(sizes_off);
        let whole_is = missing_none_is && sizes_right_is;
        let row_report = {
          chapter: item.chapter,
          identifier: plan.identifier,
          wanted: list_size(plan.files),
          held: list_size(held),
          missing: missing,
          sizes_off: sizes_off,
        };
        if (whole_is) {
          list_add(whole, row_report);
        } else {
          let filing_is = equal(live.pending_tasks, true);
          if (filing_is) {
            list_add(filing, row_report);
          } else {
            list_add(short, row_report);
          }
        }
      }
    }
  }
  let report = {
    gone_count: list_size(gone),
    whole_count: list_size(whole),
    filing_count: list_size(filing),
    short_count: list_size(short),
    unanswered_count: list_size(unanswered),
    short: short,
    filing: filing,
    unanswered: unanswered,
    whole: list_map_property(whole, "chapter"),
  };
  return report;
}
