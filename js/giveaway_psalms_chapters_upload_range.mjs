import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { giveaway_psalms_chapter_upload } from "./giveaway_psalms_chapter_upload.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
export async function giveaway_psalms_chapters_upload_range(
  chapter_first_text,
  chapter_last_text,
  folder_media,
) {
  arguments_assert(arguments, 3);
  ("$plain chapter_first_text");
  ("$plain chapter_last_text");
  ("$plain folder_media");
  ("Gives away every psalm's box from one chapter number to another, skipping the ones already gone and the ones still being held back, and writing each box down as it lands.");
  ("★ THE STRETCH IS HANDED IN AND NEVER WORKED OUT HERE, BECAUSE WHICH PSALMS GO OUT IS A DECISION AND NOT A FACT ABOUT THE DISK. Every box made here takes a public name that can never be reissued, so the one thing this command must not do is widen its own job. A ready psalm outside the stretch is not an oversight to be mended; it is a psalm nobody has said yes to yet. What this command finds for itself is only the part that is a fact - which of the psalms inside the stretch are ready, which have gone already, and which are still short of a song.");
  ("★ EACH BOX COMMITS AS IT LANDS, BECAUSE THIS RUN IS MANY CHANGES AND NOT ONE. Thirty boxes take hours, every one of them writes a line into the record of what has gone, and with other hands editing the same folder the whole time, a single commit at the end would lose every one of those lines to somebody else's sweep and to a bare word. Committing step by step means the name of each box's own command stands next to the line it wrote, and the longest a sweep can win is one box.");
  ("★ A BOX THAT FAILS DOES NOT STOP THE REST, AND THE FAULT IT LEAVES BEHIND IS THE SAFE ONE. A chapter is written down as gone before its first file is sent, so a failure part way through leaves a locked door: the names are frozen and the box is short of files, which is mended by running this again, since the host is asked to make the box if it is not there and the files already in it are written over with themselves. The other order would leave names in the world the disk thinks are free. So a failure here is worth carrying on past, and worth coming back to.");
  ("★ WHAT WAS PASSED OVER AND WHAT FAILED ARE KEPT APART, BECAUSE ONLY ONE OF THEM IS WORTH TRYING AGAIN. A psalm with nothing sung in it will be held back just as firmly in an hour; a psalm whose sending broke will very likely go out next time. Counted together they would be one number that answers neither question - how much is left to make, and how much is left to send.");
  ("Anything already noted as changed is committed under the bare word before the first box, because the note is one running list with no divider in it and whatever is left over would otherwise be filed under the first box's name. The same is done after a box fails, so that the failed box's half-written line does not end up inside the next box's commit.");
  let chapter_first = number_from_text(chapter_first_text);
  let chapter_last = number_from_text(chapter_last_text);
  let gone = await giveaway_psalms_chapters_uploaded();
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let sent = [];
  let passed_over = [];
  let failed = [];
  await ai_git_noted();
  for (let item of items) {
    let after_is = greater_than_equal(item.chapter, chapter_first);
    let before_is = less_than_equal(item.chapter, chapter_last);
    let inside_is = after_is && before_is;
    if (inside_is) {
      let gone_is = list_includes(gone, item.chapter_code);
      if (gone_is) {
        list_add(passed_over, {
          chapter: item.chapter,
          why: "this one has gone out already",
        });
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
          list_add(passed_over, {
            chapter: item.chapter,
            why: broke_why,
          });
        } else {
          let held_is = null_not_is(plan.withheld_why);
          if (held_is) {
            list_add(passed_over, {
              chapter: item.chapter,
              why: plan.withheld_why,
            });
          } else {
            let done = null;
            let failed_why = null;
            try {
              done = await function_call_commit(
                giveaway_psalms_chapter_upload,
                [item.chapter, folder_media],
              );
            } catch (e) {
              failed_why = String(e);
            }
            let failed_is = null_not_is(failed_why);
            if (failed_is) {
              await ai_git_noted();
              list_add(failed, {
                chapter: item.chapter,
                why: failed_why,
              });
            } else {
              list_add(sent, {
                chapter: item.chapter,
                files: done.sent,
                size: done.size,
              });
            }
          }
        }
      }
    }
  }
  let sizes = list_map_property(sent, "size");
  let files = list_map_property(sent, "files");
  let r = {
    chapter_first: chapter_first,
    chapter_last: chapter_last,
    sent_count: list_size(sent),
    sent_files: list_sum(files),
    sent_size: list_sum(sizes),
    passed_over_count: list_size(passed_over),
    failed_count: list_size(failed),
    sent: sent,
    passed_over: passed_over,
    failed: failed,
  };
  return r;
}
