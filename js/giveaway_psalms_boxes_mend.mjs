import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_boxes_whole_report } from "./giveaway_psalms_boxes_whole_report.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_is } from "./null_is.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { giveaway_archive_file_put_patient } from "./giveaway_archive_file_put_patient.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { giveaway_psalms_chapter_page_refresh } from "./giveaway_psalms_chapter_page_refresh.mjs";
export async function giveaway_psalms_boxes_mend(folder_media) {
  arguments_assert(arguments, 1);
  ("$plain folder_media");
  ("Finds every psalm's box that the place holding it says is short a file, sends exactly the files it is short, brings its page back in step, and then asks again to show what that changed.");
  ("★ THIS SENDS ONLY WHAT IS MISSING, WHICH IS THE WHOLE REASON IT EXISTS RATHER THAN A SECOND RUN OF THE SENDER. The whole-box sender stops dead on the first file that will not go, so a box can be left holding thirty-five of its files with the rest never sent. Running that sender again would send all thirty-five a second time, and sending a file that is already public again is not free: the host puts the box in a queue for a person to look at, and every later send to that same box waits behind it. So the box is asked what it already holds, and only the gap is sent. Nothing public is written over, so nothing waits for anybody.");
  ("★ IT FINDS ITS OWN WORK AND IS HANDED NO LIST OF CHAPTERS, BECAUSE A LIST TYPED BY A CALLER CAN ONLY EVER BE OUT OF DATE. The report next door already asks every box that this disk has written down as gone out what it really holds, and already tells a box that is short apart from a box that is merely still being filed. Asking it is the one way this and that report cannot disagree about which boxes are broken. It also means the command can simply be run again after a bad night with no argument changed and no reading done first.");
  ("★ A BOX STILL BEING FILED IS LEFT ALONE, NOT MENDED. The host takes files at once and writes them into the box afterwards, so a box that was sent ten minutes ago is honestly short and will mend itself. Sending its files again would turn a few minutes of waiting into a queue behind a person's review. Only the boxes the report calls short - which is to say, short and no longer filing - are touched.");
  ("★ ONE BOX GOING WRONG MUST NOT COST THE REST, SO EACH ONE IS CAUGHT ON ITS OWN. The whole point of this command is being run on the morning after a run that broke, and the fault that breaks it is usually a reach that comes and goes - which means the box it stops on is rarely the last one. A walk that gave up on the first failure would mend one box out of four and look exactly like a walk that mended everything. What went wrong travels out per box instead, with the count of files that did get in, so a second run has somewhere to start.");
  ("★ THE PAGE IS BROUGHT BACK IN STEP AFTER THE FILES, AND THAT IS NOT OPTIONAL TIDYING. A box whose very first file never went has no page at all - no title, no description, no licence - because those words travel with the first file the sender gets in. Mending only the files would leave a public box full of recordings and nameless. The page mender is asked rather than the words being written here, so a word added in one place reaches a mended box and a new box alike. It is safe to ask for a box whose page is already right, since it writes every word in one ask and says the same thing twice at worst.");
  ("★ THE SECOND ASKING IS THE PROOF, AND IT IS EXPECTED TO SAY FILING RATHER THAN WHOLE. A command that mends and then claims success on its own say-so has no way of being wrong. Asking the place again is the only honest answer. A box mended a moment ago is still being written into, so it comes back counted as filing - that is the right answer and not a half-failure, and a box that comes back short after this ran is a real one to look at.");
  let before = await giveaway_psalms_boxes_whole_report(folder_media);
  let mended = [];
  let failed = [];
  for (let row of before.short) {
    let names = list_map_property(row.sizes_off, "path_in_item");
    for (let name of row.missing) {
      list_add(names, name);
    }
    let sent = [];
    let threw_why = null;
    try {
      let plan = await giveaway_psalms_chapter_upload_plan(
        row.chapter,
        folder_media,
      );
      for (let file of plan.files) {
        let wanted_is = list_includes(names, file.path_in_item);
        if (wanted_is) {
          let made_is = null_is(file.path_on_disk);
          let body = made_is
            ? file.text
            : await file_read_buffer(file.path_on_disk);
          let r = await giveaway_archive_file_put_patient(
            plan.identifier,
            file.path_in_item,
            body,
            {},
          );
          true_is_assert_json(r.ok, {
            identifier: plan.identifier,
            path_in_item: file.path_in_item,
            status: r.status,
            tried: r.tried,
            threw_why: r.threw_why,
            sent_already: list_size(sent),
            hint: "this file did not go in, so the rest of this box was left for a later run - a number says the host refused it, and a reason says the host was never reached",
          });
          list_add(sent, file.path_in_item);
        }
      }
      await giveaway_psalms_chapter_page_refresh(row.chapter, folder_media);
    } catch (e) {
      threw_why = String(e);
    }
    let well_is = null_is(threw_why);
    let row_done = {
      chapter: row.chapter,
      identifier: row.identifier,
      wanted: list_size(names),
      sent: list_size(sent),
    };
    if (well_is) {
      list_add(mended, row_done);
    } else {
      list_add(failed, {
        chapter: row.chapter,
        identifier: row.identifier,
        wanted: list_size(names),
        sent: list_size(sent),
        why: threw_why,
      });
    }
  }
  let after = await giveaway_psalms_boxes_whole_report(folder_media);
  let done = {
    short_before: before.short_count,
    mended_count: list_size(mended),
    failed_count: list_size(failed),
    short_after: after.short_count,
    filing_after: after.filing_count,
    unanswered_after: after.unanswered_count,
    mended: mended,
    failed: failed,
    short: after.short,
  };
  return done;
}
