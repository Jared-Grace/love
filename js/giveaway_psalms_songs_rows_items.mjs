import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_song_file_read_or_null } from "./psalms_song_file_read_or_null.mjs";
import { null_not_is_assert } from "./null_not_is_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { giveaway_chapter_identifier } from "./giveaway_chapter_identifier.mjs";
export function giveaway_psalms_songs_rows_items(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Which archive.org box each row of the giveaway record goes in, and what it is called once it is inside - one box to a psalm, each box's files listed in the order a bare download page shows them.");
  ("★ THERE ARE NO FOLDERS INSIDE A BOX, AND THAT IS A FINDING RATHER THAN A SIMPLIFICATION. The host builds a free zip of a whole box, and a free zip of one format inside a box, and nothing else: asked for a subfolder it answers 503, and asked for that subfolder as a file it answers 404, both measured. So a folder is something nobody downloading can ask for, while a format is - which is why the kinds of thing in a box are told apart by their ending and not by a folder above them. The second reason points the same way: the free mp3 the host derives carries a tag holding only a details url and a length, no title and no artist, so the file name is the only text a music player ever shows, and a folder is not part of that name.");
  ("★ THE FIELD IS STILL CALLED A PATH, THOUGH TODAY EVERY ONE OF THEM IS A BARE NAME. A kind of file that genuinely needs a folder - a lyric video's pictures, say, which are many and are not themselves the thing being listened to - can be given one without changing the shape of this answer or of anything reading it. Calling it a name today would make that day a rewrite of every reader instead of a different value in one field.");
  ("★ THE BOX IS A WHOLE PSALM, SO A PSALM SUNG IN PARTS AND SUNG WHOLE PUTS BOTH IN ONE BOX. Psalm 147 and Psalm 149 are each sung both ways on this disk, so a box per part would hand somebody who asked for Psalm 149 some of its singing and keep the rest. The part-naming function is where that is written down and where the verse range gets its shape.");
  ("The psalm is read back off the recording's own name rather than taken apart out of the published name. The published name does say it - the first word is the chapter code with the verse range joined on - but pulling it back out would be a second statement of the rule that spelled it, and the two copies come apart the moment one of them is corrected. The reading is the one the record was built with, so it cannot disagree with itself.");
  ("A row whose name the reading cannot place stops the whole answer rather than being left out. Leaving it out would publish a shelf with a recording silently missing from it, and nothing downstream would be any the wiser; the record was built from names that read, so a name that does not read means the record was edited by hand or the reading changed under it.");
  ("The files are sorted by the name they carry inside the box, because that sorted order is the whole of what a reader of a bare download page is given. The boxes are sorted the same way, which puts the psalms in number order because the chapter code is padded.");
  ("A box carries the psalm as a plain number as well as the padded code it is named after. Everything that writes words for a reader wants the number - a title, a sentence saying which psalm this is - and taking the number back out of the code would be the one bit of parsing this function exists to avoid. The grouping is on the number for the same reason: the number is what the reading hands over, and the code is made from it afterwards.");
  let placed = [];
  for (let row of rows) {
    let read = psalms_song_file_read_or_null(row.file_name);
    null_not_is_assert(read);
    let one = {
      chapter: read.chapter,
      file_name: row.file_name,
      path_in_item: row.name_published,
    };
    list_add(placed, one);
  }
  let grouped = list_group_by_property(placed, "chapter");
  let items = [];
  for (let group of grouped) {
    let files = [];
    for (let one of group.items) {
      let file = {
        file_name: one.file_name,
        path_in_item: one.path_in_item,
      };
      list_add(files, file);
    }
    list_sort_text_property(files, "path_in_item");
    let chapter_code = ebible_chapter_code_pad("PSA", group.key);
    let item = {
      identifier: giveaway_chapter_identifier(chapter_code),
      chapter: group.key,
      chapter_code,
      files_count: files.length,
      files,
    };
    list_add(items, item);
  }
  list_sort_text_property(items, "chapter_code");
  return items;
}
