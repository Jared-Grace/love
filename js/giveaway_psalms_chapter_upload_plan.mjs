import { folder_repo_love } from "./folder_repo_love.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { giveaway_chapter_identifier } from "./giveaway_chapter_identifier.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { giveaway_psalms_item_withheld_why_or_null } from "./giveaway_psalms_item_withheld_why_or_null.mjs";
import { giveaway_psalms_chapter_text_files } from "./giveaway_psalms_chapter_text_files.mjs";
import { equal } from "./equal.mjs";
import { path_join } from "./path_join.mjs";
import { text_size } from "./text_size.mjs";
import { file_size } from "./file_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { giveaway_psalms_item_title } from "./giveaway_psalms_item_title.mjs";
import { giveaway_psalms_item_description } from "./giveaway_psalms_item_description.mjs";
import { giveaway_licence_url } from "./giveaway_licence_url.mjs";
import { list_sum } from "./list_sum.mjs";
export async function giveaway_psalms_chapter_upload_plan(
  chapter,
  folder_media,
) {
  arguments_assert(arguments, 2);
  ("$plain chapter");
  ("$plain folder_media");
  ("Everything one psalm's box would be given away as - its name on the host, its words on the page, and every file in it paired with where its bytes are on this disk - worked out without sending anything.");
  ("★ THE WHOLE OF THE DECIDING IS DONE HERE AND THE SENDING NEXT DOOR, BECAUSE THE FIRST UPLOAD FREEZES EVERY NAME IN IT AND A PERSON HAS TO BE ABLE TO LOOK FIRST. A box's name, and each file's name inside it, are addresses the host serves forever and will not let anybody change. The one thing that makes that safe is a reading of exactly what is about to go up, made by the same code that will go up, available before anything leaves the machine. Split the other way - one function that works it out and sends it in the same breath - and the only way to see the plan is to have published it.");
  ("★ A BOX BEING HELD BACK IS REPORTED RATHER THAN THROWN FOR, BECAUSE THIS IS THE READING AND NOT THE DOING. Seven boxes hold a psalm's paintings and words with nothing sung in them, and the decision was to wait; the reason is one call away and is asked here so a reader can see both the hold and what is in the box that caused it. The refusal belongs to the sender, which is the function that can do the irreversible thing.");
  ("★ THREE KINDS OF FILE SIT IN THREE DIFFERENT PLACES, AND THAT IS WHY EVERY FILE IS PAIRED WITH A WHOLE PATH RATHER THAN A FOLDER AND A NAME. The singing and the videos are in a folder of downloads outside this repo, which is handed in because it is the human's own and has moved before. The paintings are crops kept inside the repo under an ignored folder, and the box already records where. The words are kept nowhere at all - they are made from the bible the apps read, every time they are asked for, so that improving a renderer never leaves a stale copy behind. A sender handed only names would have to know all three rules; handed paths and text, it knows none of them.");
  ("The sizes are read from the disk here as well, so the plan says how much is about to be sent before anything is. A missing file shows up as a size that is nothing at all rather than as a failure halfway through an upload, which is the one moment when stopping costs something.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let chapter_code = ebible_chapter_code_pad("PSA", chapter);
  let identifier = giveaway_chapter_identifier(chapter_code);
  let item = list_find_property(items, "identifier", identifier);
  let withheld_why = giveaway_psalms_item_withheld_why_or_null(item);
  let texts = await giveaway_psalms_chapter_text_files(chapter);
  let files = [];
  for (let one of item.files) {
    let text_is = equal(one.kind, "text");
    let in_repo_is = null_not_is(one.path_in_repo ?? null);
    let made = text_is
      ? list_find_property(texts, "file_name", one.path_in_item)
      : null;
    let text = text_is ? made.text : null;
    let folder = folder_repo_love();
    let path_repo = in_repo_is ? path_join([folder, one.path_in_repo]) : null;
    let path_media = text_is
      ? null
      : (path_repo ?? path_join([folder_media, one.file_name]));
    let size = text_is ? text_size(text) : await file_size(path_media);
    let file = {
      path_in_item: one.path_in_item,
      kind: one.kind,
      path_on_disk: path_media,
      text: text,
      size: size,
    };
    list_add(files, file);
  }
  let sizes = list_map_property(files, "size");
  let plan = {
    identifier: identifier,
    chapter_code: chapter_code,
    title: giveaway_psalms_item_title(chapter),
    description: giveaway_psalms_item_description(item),
    licence_url: giveaway_licence_url(),
    withheld_why: withheld_why,
    files: files,
    size: list_sum(sizes),
  };
  return plan;
}
