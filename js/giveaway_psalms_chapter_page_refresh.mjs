import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded } from "./giveaway_psalms_chapters_uploaded.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { list_includes } from "./list_includes.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { null_is_assert_json } from "./null_is_assert_json.mjs";
import { giveaway_archive_metadata_write } from "./giveaway_archive_metadata_write.mjs";
export async function giveaway_psalms_chapter_page_refresh(
  chapter,
  folder_media,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter");
  ("$plain folder_media");
  ("Brings one psalm's page on archive.org back in step with what the box now holds, by writing the title and the description the plan works out today.");
  ("★ THE WORDS ARE TAKEN FROM THE PLAN AND NEVER TYPED HERE, BECAUSE A HAND-TYPED DESCRIPTION IS A SECOND COPY THAT CANNOT BE KEPT RIGHT. The plan counts the songs, the videos and the paintings off the record, so it already knows that a box which went out holding one video now holds two. Typing the new sentence out by hand would have been quicker once and wrong for every box after it - and there are thirty more boxes whose descriptions will fall behind in exactly the same way the moment another singing is rendered.");
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
  let said_title = await giveaway_archive_metadata_write(
    plan.identifier,
    "title",
    plan.title,
  );
  let said_description = await giveaway_archive_metadata_write(
    plan.identifier,
    "description",
    plan.description,
  );
  let done = {
    identifier: plan.identifier,
    title: said_title,
    description: said_description,
  };
  return done;
}
