import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { list_includes } from "./list_includes.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { null_is_assert_json } from "./null_is_assert_json.mjs";
import { giveaway_psalms_plan_words } from "./giveaway_psalms_plan_words.mjs";
import { giveaway_archive_metadata_write_multiple_patient } from "./giveaway_archive_metadata_write_multiple_patient.mjs";
export async function giveaway_psalms_chapter_page_refresh(
  chapter,
  folder_media,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter");
  ("$plain folder_media");
  ("Brings one psalm's page on archive.org back in step with what the box now holds, by writing every word the plan works out today.");
  ("★ THE WORDS ARE TAKEN FROM THE PLAN AND NEVER TYPED HERE, BECAUSE A HAND-TYPED DESCRIPTION IS A SECOND COPY THAT CANNOT BE KEPT RIGHT. The plan counts the songs, the videos and the paintings off the record, so it already knows that a box which went out holding one video now holds two. Typing the new sentence out by hand would have been quicker once and wrong for every box after it - and there are thirty more boxes whose descriptions will fall behind in exactly the same way the moment another singing is rendered.");
  ("★ WHICH WORDS THERE ARE IS NOT DECIDED HERE EITHER, AND THAT IS NEWER AND MATTERED MORE. This used to name the title and the description one at a time, while the notes that make a new box named their own four next door. So a word added to one road was missing from the other, and the way that showed was the worst way: a box made today would carry a word every older box lacked, and nothing anywhere would say so. Both roads now ask one place what a page says, so a word added there reaches a box made last month and a box made tonight by the same change.");
  ("★ EVERY WORD GOES IN ONE ASK RATHER THAN ONE ASK EACH, BECAUSE THE HOST QUEUES EVERY ASK BEHIND THE BOX'S OTHER WORK. Measured on a live box: a file sent while an earlier job was still waiting sat queued for a day. Six words sent singly are six jobs on a queue that already has to be watched; one ask is one.");
  ("★ IT REFUSES A CHAPTER WHOSE BOX HAS NOT GONE OUT, BECAUSE THERE IS NO PAGE TO MEND. A patch sent at a name the host does not hold either fails or, worse, brings a box into being with a description and no files in it. The list of boxes that have gone out is the only thing on this disk that knows which names exist, so it is what gets asked.");
  ("★ A PLAN THAT IS HELD BACK STOPS THIS TOO, EVEN THOUGH NOTHING IS BEING SENT. The reason a plan is withheld is that the record is not ready to be described - a file missing, a count that cannot be worked out - and a description written from a record in that state would be a confident sentence about something nobody has checked. Words are cheap to rewrite, but a wrong one sitting on a public page is read by everybody who finds the box in the meantime.");
  let chapters_uploaded = await giveaway_psalms_chapters_uploaded();
  let plan = await giveaway_psalms_chapter_upload_plan(chapter, folder_media);
  let gone_out_is = list_includes(chapters_uploaded, plan.chapter_code);
  true_is_assert_json(gone_out_is, {
    chapter_code: plan.chapter_code,
    chapters_uploaded: chapters_uploaded,
    hint: "this box has not gone out yet, so it has no page to bring back in step - the first upload writes the words",
  });
  null_is_assert_json(plan.withheld_why, {
    chapter_code: plan.chapter_code,
    withheld_why: plan.withheld_why,
    hint: "the plan is held back, so the record is not ready to be described",
  });
  let words = await giveaway_psalms_plan_words(chapter, plan);
  let said = await giveaway_archive_metadata_write_multiple_patient(
    plan.identifier,
    words,
  );
  let done = {
    identifier: plan.identifier,
    words: words,
    said: said,
  };
  return done;
}
