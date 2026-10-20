import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
export async function giveaway_psalms_chapters_ready(folder_media) {
  arguments_assert(arguments, 1);
  ("$plain folder_media");
  ("Which psalms could be given away right now, which have gone already, which are being held back and why, and which cannot even be worked out - read without sending anything.");
  ("★ THIS EXISTS SO THAT THE SIZE OF A GIVING-AWAY IS KNOWN BEFORE IT STARTS, BECAUSE EVERY BOX IT WOULD MAKE IS NAMED FOR GOOD. The plan next door answers that question for one psalm at a time, which is the right grain for looking hard at one box and the wrong grain for deciding whether to begin. A person about to hand over a hundred boxes wants one number for how much is about to leave the machine and one list of what is not ready, and getting that by asking a hundred times is how the asking stops happening.");
  ("★ THE CHAPTERS IT WALKS COME FROM THE RECORD AND ARE NOT COUNTED FROM ONE TO A HUNDRED AND FIFTY, BECAUSE A PSALM NOTHING HAS BEEN MADE FOR IS NOT A BOX THAT IS NOT READY - IT IS NOT A BOX AT ALL. Counting through every chapter number would ask the plan about psalms the record has never heard of, and the plan has nothing to find for those, so they would arrive here as broken rather than as absent. Walking the record means the answer is about work that exists.");
  ("★ EVERY CHAPTER IS ASKED INSIDE A CATCH, AND THAT IS NOT TIDINESS - IT IS THE DIFFERENCE BETWEEN A REPORT AND A DEAD END. The plan reads a size off the disk for every file, and a file that has been moved or renamed since the record was written stops it. One such psalm, asked without a catch, would end the whole walk at that psalm and say nothing about the hundred behind it - so the first fault would hide every other fault and the count would be unknowable until each one was mended in turn. Caught, a broken psalm is one line of the answer.");
  ("★ WHAT BROKE IS KEPT AS THE WORDS OF THE FAILURE RATHER THAN AS A COUNT OF FAILURES, BECAUSE A NUMBER HERE IS NOT ACTIONABLE. These faults are nearly always one missing file named in one line, and that line is the whole repair. A report saying three psalms could not be worked out sends somebody back to ask three times what it already knew.");
  ("★ BEING HELD BACK AND BEING BROKEN ARE KEPT APART THOUGH BOTH MEAN NOT READY, BECAUSE ONE IS A DECISION AND THE OTHER IS A FAULT. A held-back box is waiting on something nobody has made yet - a psalm with paintings and words and no singing - and waiting is correct. A broken one is the record disagreeing with the disk, which is always wrong and always mendable. Mixed into one list of what is not ready, the faults would sit quietly among the decisions and never get mended.");
  ("A chapter whose box has gone out is reported by number alone. Nothing about it needs working out - its names are frozen, so the only question anybody asks of it is whether its page is still in step, and that is a different reading.");
  let gone = await giveaway_psalms_chapters_uploaded();
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let ready = [];
  let gone_out = [];
  let withheld = [];
  let broke = [];
  for (let item of items) {
    let gone_is = list_includes(gone, item.chapter_code);
    if (gone_is) {
      list_add(gone_out, item.chapter);
    } else {
      let plan = null;
      let broke_why = null;
      try {
        plan = await giveaway_psalms_chapter_upload_plan(
          item.chapter,
          folder_media,
        );
      } catch (e) {
        broke_why = String(e);
      }
      let broke_is = null_not_is(broke_why);
      if (broke_is) {
        list_add(broke, {
          chapter: item.chapter,
          why: broke_why,
        });
      } else {
        let held_is = null_not_is(plan.withheld_why);
        if (held_is) {
          list_add(withheld, {
            chapter: item.chapter,
            why: plan.withheld_why,
          });
        } else {
          list_add(ready, {
            chapter: item.chapter,
            files: list_size(plan.files),
            size: plan.size,
          });
        }
      }
    }
  }
  let ready_sizes = list_map_property(ready, "size");
  let ready_files = list_map_property(ready, "files");
  let r = {
    ready_count: list_size(ready),
    ready_files: list_sum(ready_files),
    ready_size: list_sum(ready_sizes),
    gone_out_count: list_size(gone_out),
    withheld_count: list_size(withheld),
    broke_count: list_size(broke),
    ready: ready,
    gone_out: gone_out,
    withheld: withheld,
    broke: broke,
  };
  return r;
}
