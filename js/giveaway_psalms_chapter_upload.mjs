import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapter_upload_plan } from "./giveaway_psalms_chapter_upload_plan.mjs";
import { null_is_assert_json } from "./null_is_assert_json.mjs";
import { giveaway_psalms_chapters_uploaded_add } from "./giveaway_psalms_chapters_uploaded_add.mjs";
import { giveaway_archive_metadata_headers } from "./giveaway_archive_metadata_headers.mjs";
import { null_is } from "./null_is.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { giveaway_archive_file_put } from "./giveaway_archive_file_put.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
export async function giveaway_psalms_chapter_upload(chapter, folder_media) {
  arguments_assert(arguments, 2);
  ("$plain chapter");
  ("$plain folder_media");
  ("Gives one psalm's whole box away - every recording, video, picture and page of words in it - and writes down that it has gone.");
  ("★ THE CHAPTER IS WRITTEN DOWN AS GONE BEFORE THE FIRST FILE IS SENT, AND THAT ORDER IS THE WHOLE OF THE CARE IN THIS FUNCTION. The two ways to get it wrong are not equally bad. Writing it down and then failing to send freezes the names of a box that never went out: every later refresh refuses to renumber that psalm's takes, and the only way back is a hand editing a committed list, which is loud and reviewable and exactly the sort of thing a person should have to do. Sending and then failing to write it down leaves names in the world that this disk believes are still free - and the next refresh of the record renumbers them silently, so a public address goes on being served while pointing at a different singing. The first fault is a locked door; the second is a lie nobody notices. So the lock goes on first.");
  ("★ A BOX BEING HELD BACK STOPS THIS AND NOTHING ELSE IN THE CHAIN, BECAUSE THIS IS THE ONLY STEP THAT CANNOT BE TAKEN BACK. The plan next door answers freely for a held-back box, which is how somebody sees what is still missing from it. Here the hold is a refusal: a psalm with nothing sung in it would go out as a box of pictures and verses under a name that promises a song, and that name can never be reissued.");
  ("★ THE WORDS THAT BECOME THE BOX'S PAGE TRAVEL WITH THE FIRST FILE ONLY, BECAUSE THEY ARE NOTES ABOUT THE BOX AND NOT ABOUT ANY FILE IN IT. The host takes them from whichever request carries them and keeps them in a file it rewrites in place, so sending them eleven times would say the same thing eleven times and the last one would win. Sending them once, on the request that may also be the one that brings the box into being, is the same outcome with ten fewer chances to disagree with itself.");
  ("Each file is read off the disk only when its turn comes. A box of recordings is gigabytes, and holding all of it in memory to send it one piece at a time would be paying for the whole box to send the first file of it.");
  ("A number from the host that is not plain success stops the walk where it stands, naming the file it happened on. The sending can simply be run again afterwards - the host is asked to make the box if it is not there, so the files that already landed are written over with themselves rather than refused.");
  let plan = await giveaway_psalms_chapter_upload_plan(chapter, folder_media);
  null_is_assert_json(plan.withheld_why, {
    identifier: plan.identifier,
    withheld_why: plan.withheld_why,
    hint: "this box is being held back, so it is not ready to be given away under a name that can never be reissued",
  });
  let recorded = await giveaway_psalms_chapters_uploaded_add(plan.chapter_code);
  let notes = giveaway_archive_metadata_headers(
    plan.title,
    plan.description,
    plan.licence_url,
    "audio",
  );
  let sent = [];
  let first_is = true;
  for (let file of plan.files) {
    let made_is = null_is(file.path_on_disk);
    let body = made_is ? file.text : await file_read_buffer(file.path_on_disk);
    let headers_extra = first_is ? notes : {};
    let r = await giveaway_archive_file_put(
      plan.identifier,
      file.path_in_item,
      body,
      headers_extra,
    );
    true_is_assert_json(r.ok, {
      identifier: plan.identifier,
      path_in_item: file.path_in_item,
      status: r.status,
      sent_already: list_size(sent),
      hint: "the host did not accept this file, so the rest of the box was left unsent - running this again sends only what is missing",
    });
    list_add(sent, r);
    first_is = false;
  }
  let done = {
    identifier: plan.identifier,
    sent: list_size(sent),
    size: plan.size,
    recorded: recorded,
  };
  return done;
}
