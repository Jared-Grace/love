import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { file_exists } from "./file_exists.mjs";
import { path_name } from "./path_name.mjs";
import { path_base } from "./path_base.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
export async function giveaway_psalms_paintings_files_missing() {
  arguments_assert(arguments, 0);
  ("Every painting a lyric-video timing document names whose file is not on this machine, said as the document that names it and the name it asks for.");
  ("★ IT IS ASKED APART FROM THE WALK THAT NAMES THE PAINTINGS, BECAUSE A WALK THAT DROPPED THE ABSENT ONES WOULD BE SILENT ABOUT THEM. The record of what is being given away is a list of names and the passage each one belongs to, and nothing in it touches the disk - which is right, because a name is decided once and a file comes and goes. Had the walk checked the disk as it went, a crop that has not been made yet would simply not appear, and the giveaway would be short by however many nobody had noticed. Asking twice, in two functions, is what turns an absence into a sentence.");
  ("★ THE DOCUMENT IS NAMED AND NOT JUST THE FILE, BECAUSE WHICH DOCUMENT ASKED FOR A FILE IS WHAT SAYS WHETHER ANYTHING NEEDS DRAWING. Measured on this disk: seven files are absent and eight documents ask for them. Six are asked for by a whole-chapter document for Psalm 94 that two part-documents have since replaced, so the repair there is to retire a document and nothing needs drawing at all. The seventh is a crop for Psalm 149:1-5 that has not been made, and it is reported twice because both takes of that passage ask for it. A reader handed seven file names and no documents would go looking for seven crops, six of which were never wanted.");
  ("★ WHETHER A VIDEO WOULD STILL RENDER IS A DIFFERENT QUESTION WITH A DIFFERENT ANSWER, AND IT ALREADY HAS ITS OWN FUNCTION. The render leaves an absent picture out on purpose, so that a psalm whose scenes are written but not drawn still gets the words in time over black rather than no video at all. That is the right answer at render time and the wrong one here: a giveaway that quietly leaves a file out hands somebody an incomplete box and tells them it is complete. The two share the one test for whether a file is there, and they share nothing else.");
  ("The path each picture is asked about by is the path its document gives it, because that is the path anything collecting these files would open. Working the path out again from the picture's name would be a second spelling of the same thing, and the way two spellings disagree is a file reported absent while it sits on the disk.");
  let held = await lyric_video_documents_pictures();
  let missing = [];
  for (let one of held.pictures) {
    let there = await file_exists(one.picture.path);
    if (there) {
      continue;
    }
    let absent = {
      document_name: path_name(one.path),
      file_name: path_base(one.picture.path),
      path_in_repo: one.picture.path,
    };
    list_add(missing, absent);
  }
  list_sort_text_property(missing, "path_in_repo");
  let answer = {
    documents: held.documents,
    pictures: held.pictures.length,
    missing: missing,
  };
  return answer;
}
