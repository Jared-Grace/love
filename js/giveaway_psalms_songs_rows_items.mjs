import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_folder } from "./giveaway_bible_folder.mjs";
import { giveaway_passage_code_chapter_code } from "./giveaway_passage_code_chapter_code.mjs";
import { list_add } from "./list_add.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { giveaway_passage_text_file_names } from "./giveaway_passage_text_file_names.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { giveaway_chapter_identifier } from "./giveaway_chapter_identifier.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
export function giveaway_psalms_songs_rows_items(rows) {
  arguments_assert(arguments, 1);
  ("$plain rows");
  ("Which archive.org box each row of the giveaway record goes in, and what it is called once it is inside - one box to a psalm, each box's files listed in the order a bare download page shows them.");
  ("★ THERE ARE NO FOLDERS INSIDE A BOX, AND THAT IS A FINDING RATHER THAN A SIMPLIFICATION. The host builds a free zip of a whole box, and a free zip of one format inside a box, and nothing else: asked for a subfolder it answers 503, and asked for that subfolder as a file it answers 404, both measured. So a folder is something nobody downloading can ask for, while a format is - which is why the kinds of thing in a box are told apart by their ending and not by a folder above them. The second reason points the same way: the free mp3 the host derives carries a tag holding only a details url and a length, no title and no artist, so the file name is the only text a music player ever shows, and a folder is not part of that name.");
  ("★ THE FIELD IS STILL CALLED A PATH, THOUGH TODAY EVERY ONE OF THEM IS A BARE NAME. A kind of file that genuinely needs a folder - a lyric video's pictures, say, which are many and are not themselves the thing being listened to - can be given one without changing the shape of this answer or of anything reading it. Calling it a name today would make that day a rewrite of every reader instead of a different value in one field.");
  ("★ THE BOX IS A WHOLE PSALM, SO A PSALM SUNG IN PARTS AND SUNG WHOLE PUTS BOTH IN ONE BOX. Psalm 147 and Psalm 149 are each sung both ways on this disk, so a box per part would hand somebody who asked for Psalm 149 some of its singing and keep the rest. The part-naming function is where that is written down and where the verse range gets its shape.");
  ("★ THE BOX A ROW GOES IN IS ASKED OF THE ROW'S PASSAGE, AND IT USED TO BE WORKED OUT BY HANDING THE ROW'S DISK NAME BACK TO A READER OF SUNG-PSALM NAMES. That reader wants to see the word Psalm and a number, and the record is no longer going to be only songs: the paintings drawn over these psalms sit on this disk under painters' names and say no chapter at all, so the first painting row to arrive here would have stopped the whole answer as a name nothing can read. Every row already carries the passage it is for, whatever kind of thing it is, so asking the passage is the one route that does not have to know what kind it got. The passage code is spelled in two shapes by one function - the padded chapter code alone, or that code with the verse range joined on by an underscore - so the chapter code is the text before the first underscore and there is nothing else it could be, a chapter code being letters and digits run together and never carrying one. That inverse is its own function rather than written out here, so that this and anything else wanting a box ask one question. Reading the published name instead would be a different matter altogether: it joins five pieces, and pulling a chapter out of it would restate the whole naming rule, which is why the record keeps those pieces beside it.");
  ("A row whose passage names no chapter this bible knows stops the whole answer rather than being left out, and the refusal belongs to the reading of the passage rather than to this loop. Leaving such a row out would publish a shelf with a file silently missing from it, and nothing downstream would be any the wiser; every passage code in the record was spelled by the writer from a chapter code it had padded itself, so one that will not read back means the record was edited by hand or the spelling changed under it.");
  ("The files are sorted by the name they carry inside the box, because that sorted order is the whole of what a reader of a bare download page is given. The boxes are sorted the same way, which puts the psalms in number order because the chapter code is padded.");
  ("A box carries the psalm as a plain number as well as the padded code it is named after, because everything that writes words for a reader wants the number - a title, a sentence saying which psalm this is. The number comes out of the code through the named inverse of the padding that put it in, which was written long before this function and is what the check on a padded code already spells a code back with; what this avoids is parsing written out by hand here, not asking a function whose whole job is that one step. The grouping is on the code rather than the number, so the name a box is given and the group it was gathered under are one value and cannot drift apart.");
  ("Each file keeps the kind of thing it is, carried straight over from the record. What a box can be described as is read off the kinds actually inside it and never assumed - a sentence saying a box holds videos when it holds only singing is a lie told once and then published, and the whole reason to describe a box from its contents is that every box is at a different stage.");
  ("★ EVERY BOX ALSO GETS THE WORDS OF ITS PSALM, AND THOSE FILES COME FROM THE PSALM'S NUMBER RATHER THAN FROM THE RECORD. A recording has to be written down before it can be named, because its mark says which take it is and that depends on how many takes there are; a psalm's words are named from the psalm and the translation and nothing else, so there is nothing to write down and no refresh of the record that could move them. That is why they are added here, where the box is assembled, instead of being rows in the record alongside the singing.");
  ("★ SO A BOX NEVER HOLDS SINGING WITHOUT THE WORDS BEING SUNG, WHICH IS THE POINT OF PUTTING THEM IN AT THIS LAYER. The person asked that the psalm's own words go in its box; adding them one box at a time would leave a box somebody forgot, and nothing would say so. Here a box cannot exist without them, because the same loop that makes the box makes them.");
  ("★ A FILE IN A BOX IS NOW ONE OF TWO THINGS, AND THE KIND IS WHAT SAYS WHICH, WHICH IS WHY NO SECOND FIELD WAS ADDED TO SAY IT AGAIN. A recording is a file sitting on this disk and carries the name it sits under; the words are made at the moment they are handed over and carry the two words naming which of the three renderings they are. A field saying disk or made would be a second copy of something the kind already settles, and two copies of one fact come apart. What reads a file therefore looks at its kind first - the same fixed list the description works off - and a kind nothing knows about stops it rather than being read as either.");
  ("★ THE COUNT OF FILES IN A BOX NOW COUNTS BOTH, SO IT IS NO LONGER THE NUMBER OF ROWS THE RECORD HOLDS FOR THAT PSALM. Anything that printed the record's row count as the file count was right until this and is wrong after it, by exactly three per box. The count is taken from the list rather than worked out, so it cannot drift from what is in the box.");
  ("★ A PICTURE CARRIES THE PLACE IT SITS IN THIS REPO AND A RECORDING DOES NOT, BECAUSE A PICTURE'S NAME DOES NOT SAY WHERE IT IS. Every recording of a psalm is in the one folder handed to the writer of the record, so a bare name finds it; a crop of a painting sits in one of nearly four hundred folders, one to a timing document, and the name on it says which painting it is and never which folder. Handed a crop called pd_bellini_gebed_in_de_hof_van_olijven.png and nothing else, whatever comes to upload these boxes has nowhere to look, and that is not a failure it could report - it is a file it quietly cannot find, in a box it uploads anyway. The record already worked the folder out during its walk, so the place is carried straight through rather than searched for again.");
  ("The field is only on the files that have one, and the alternative was the same field on every file with nothing in it for the recordings. Nothing in a field is the shape that reads as a failed lookup rather than as an answer, and a reader could not tell a recording - which never had a path - from a picture whose path went missing. The shape of a file in a box already differs by its kind, deliberately: a made file carries the two words naming which rendering it is and no disk name at all, because it is not on any disk. So a kind bringing its own fields is the rule here and not an exception made for the paintings.");
  ("The one file is now built where the row is read and handed along whole, rather than built there and copied field by field a second time once its box is known. The two lists were the same three fields written twice, which is two places to add a fourth and one of them easy to miss - as this very change would have been.");
  let bible_folder = giveaway_bible_folder();
  let placed = [];
  for (let row of rows) {
    let chapter_code_of_row = giveaway_passage_code_chapter_code(
      row.passage_code,
    );
    let file = {
      kind: row.kind,
      file_name: row.file_name,
      path_in_item: row.name_published,
    };
    let path_in_repo = row.path_in_repo;
    if (path_in_repo) {
      file.path_in_repo = path_in_repo;
    }
    let one = {
      chapter_code: chapter_code_of_row,
      file: file,
    };
    list_add(placed, one);
  }
  let grouped = list_group_by_property(placed, "chapter_code");
  let items = [];
  for (let group of grouped) {
    let chapter_code = group.key;
    let files = [];
    for (let one of group.items) {
      list_add(files, one.file);
    }
    let named = giveaway_passage_text_file_names(chapter_code, bible_folder);
    for (let one of named) {
      let file = {
        kind: one.kind,
        mark: one.mark,
        ending: one.ending,
        path_in_item: one.file_name,
      };
      list_add(files, file);
    }
    list_sort_text_property(files, "path_in_item");
    let item = {
      identifier: giveaway_chapter_identifier(chapter_code),
      chapter: ebible_chapter_code_to_number(chapter_code),
      chapter_code,
      files_count: files.length,
      files,
    };
    list_add(items, item);
  }
  list_sort_text_property(items, "chapter_code");
  return items;
}
