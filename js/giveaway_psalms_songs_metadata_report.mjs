import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_path } from "./giveaway_psalms_songs_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { giveaway_licence_url } from "./giveaway_licence_url.mjs";
import { giveaway_psalms_item_title } from "./giveaway_psalms_item_title.mjs";
import { giveaway_psalms_item_description } from "./giveaway_psalms_item_description.mjs";
import { list_add } from "./list_add.mjs";
export async function giveaway_psalms_songs_metadata_report() {
  arguments_assert(arguments, 0);
  ("The words every box of sung psalms would be published under: its address, its title, the licence it is given away on, and the sentence describing what is inside it. Nothing is uploaded and nothing on the disk is touched.");
  ("★ THIS IS FOR READING THE WORDS BEFORE THEY ARE PUBLISHED, WHICH IS THE LAST MOMENT SOME OF THEM CAN BE CHANGED AT ALL. A title and a description can be rewritten afterwards as often as anybody likes; the address cannot be changed ever, and the licence is a promise made to whoever already downloaded the box under it. So the two lines that are cheap to fix and the two that are not are shown side by side on purpose.");
  ("The licence is said once above the list rather than once a box, because it is the same promise on every one of them and repeating it eighty times would make a reader check whether it was.");
  ("It takes no argument so that anybody can ask it at any time without deciding anything first, and it returns the whole shelf while printing a line to a box, because a page of lines can be read and eighty paragraphs cannot.");
  let path = giveaway_psalms_songs_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let described = [];
  console.log("licence: " + giveaway_licence_url());
  for (let item of items) {
    let title = giveaway_psalms_item_title(item.chapter);
    let description = giveaway_psalms_item_description(item);
    let one = {
      identifier: item.identifier,
      title,
      licence_url: giveaway_licence_url(),
      description,
      files_count: item.files_count,
    };
    list_add(described, one);
    console.log(one.identifier + "  " + title + "  " + description);
  }
  console.log("boxes: " + described.length);
  let r = {
    items_count: described.length,
    items: described,
  };
  return r;
}
