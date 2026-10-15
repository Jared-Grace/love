import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_folder } from "./giveaway_bible_folder.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { path_folder_name } from "./path_folder_name.mjs";
import { lyric_video_bible_document_name_read_or_null } from "./lyric_video_bible_document_name_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { giveaway_passage_code } from "./giveaway_passage_code.mjs";
import { path_base } from "./path_base.mjs";
import { giveaway_painting_mark } from "./giveaway_painting_mark.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_unique } from "./list_unique.mjs";
export async function giveaway_psalms_paintings_rows() {
  arguments_assert(arguments, 0);
  ("Every painting that has been cropped for a psalm's lyric video, written down beside the name it will be given away under.");
  ("★ THE PASSAGE A PAINTING BELONGS TO IS READ OFF THE FOLDER THE CROP SITS IN, AND NOT OFF THE DOCUMENT THAT NAMES THE CROP. A file has one place on the disk and so it has one passage; the documents naming it are many, and taking the passage from them gave one file as many published names as there were documents naming it. Measured on 2026-10-15, that was eight hundred and ninety-seven of the two thousand and eighty files carrying more than one published name, and eighteen names each claimed by two genuinely different crops. Reading the folder ends both at once, because the folder is where the file is and a published name is an address for a file. No reader had to be written for it: the timing writer copies a document's pictures into a folder named after that document, so a crop folder's name is a document's name and the one reader of document names reads it unchanged.");
  ("★ THE WALK STILL STARTS FROM THE DOCUMENTS, BECAUSE NOTHING ELSE REACHES THE CROPS. The obvious route - walk the sung psalms, and for each one open the timing document it would have - drops seven hundred and seventy-four of the paintings, silently. Thirty-one picture-bearing documents are whole-chapter documents of chapters that are only ever sung in parts: Psalm 78 holds eighty-two paintings that way, Psalm 89 fifty-seven. Those documents exist and hold the work; no recording addresses them. So the documents are the way in, and the folder each one points at is what says which passage a crop is for.");
  ("★ THE NAME IS WHAT IS READ AND NOT THE PASSAGE WRITTEN INSIDE THE DOCUMENT, THOUGH THE FIELD INSIDE IS EASIER TO READ. That field says Psalm 147:12-20 - words printed on the video for a person to read - and user-facing words are changed for a reader whenever a reader is better served. The name is an address: one function spells it, nothing may respell it, and a round-trip check holds every one of the documents to spelling back to its own address. An address that reads back is the safe thing to depend on; the readable field is the fragile one.");
  ("★ ONE ROW PER PUBLISHED NAME, AND WHAT IS KEPT BESIDE EACH NAME IS THE PATH IT WAS TAKEN FROM, WHICH IS WHAT TELLS A HARMLESS REPEAT FROM A REAL COLLISION. The same crop is met again and again - a passage timed twice names the same folder twice, and a chapter's whole-chapter document names pictures that the document of each part names as well - so the four thousand six hundred and seventy-one meetings of a picture on 2026-10-15 are only two thousand and eighty files, and two thousand five hundred and ninety-one of those meetings are a file arriving again under the name it already holds. Those are a union and lose nothing, so they are passed over in silence. Seven are a different file arriving at a name already taken, which leaves two thousand and seventy-three names; and a file silently losing its only address is the fault this record exists to avoid, so those seven are passed over by path, into the answer, where a reader can see the pair.");
  ("★ THE SEVEN ARE ONE PAIR OF FOLDERS AND THEY WILL NOT BE THE LAST. A passage sung twice is timed twice, and the second take's document gets a folder of its own with the mark in its name - bsb_PSA_133_take1 beside bsb_PSA_133 - so the same seven crops sit in two folders under one passage, a take being no part of a passage. Those seven pairs are byte-identical today, so which folder was met first decides nothing; that is a fact about this disk this week and not a thing to build on, which is why the paths are reported rather than assumed harmless. Comparing the bytes is not done here, because nothing here looks at the disk.");
  ("★ THE KIND WORD IS `picture` AND NOT `painting`, THOUGH EVERY ONE OF THESE IS A CROP OF A PAINTING TODAY. Asked on 2026-10-14, all two thousand and sixty-nine pictures the timing documents name begin `pd_` and not one was drawn by a model, so `painting` would have been true of every file going up. It is still the wrong word. The kind says what sort of file a reader is holding, and `picture` is the whole of what this kind has to say: something to look at, rather than to listen to or to read. `painting` says that and also makes a claim about where the picture came from - and a kind word can never be taken back, so the first drawn picture ever given away would need a second kind beside this one, and a box would then hold `picture` files and `painting` files with a reader made to learn two words for one thing. Where a picture came from is said twice over without this word: the mark carries the painter's name, and the prefix on the file it was cropped from says it is a painting in the public domain.");
  ("★ THE TRANSLATION IS STILL HANDED TO THE NAMER, AND NO LONGER APPEARS IN A PAINTING'S NAME. Nobody translated the painting. A crop is chosen for what a psalm means and cut by what is in the frame, and both of those are the same whichever English text is on the screen, so the translation was never part of what the picture is. It is handed in all the same, because one function names every kind and the kind is what decides: a song is a translation's words sung, a video is them sung and printed, a text file is them written, and each of those says so in its name - a picture has no words in it to translate and so keeps its name shorter. The folder is still written into the row beside the name, because it is a true thing worth keeping: this crop was timed against that text's lines. What stood here before was that one shape for every kind lets somebody automating a download cut a name into its pieces without knowing which kind of file is in hand; that was given up when it was pointed out that the picture is the same whatever the wording, and it costs almost nothing, because nothing anywhere takes a published name apart - a name is spelled out of its pieces, and checked by being spelled again.");
  ("A folder whose name will not read is reported rather than passed over, and so is a folder naming a book other than the Psalms. Nothing but crops for these videos is kept in there, so a name that will not read is not somebody's stray file - it is paintings going silently missing from the giveaway.");
  ("Nothing here looks at the disk. Whether the file a document names is actually there is a different question with a different answer, and it is asked by its own check, so that a missing crop is reported rather than quietly keeping a row out of the record.");
  let bible_folder = giveaway_bible_folder();
  let kind = "picture";
  let ending = ".png";
  let held = await lyric_video_documents_pictures();
  let rows = [];
  let seen = {};
  let unread = [];
  let other_book = [];
  let passed_over = [];
  for (let one of held.pictures) {
    let folder_name = path_folder_name(one.picture.path);
    let read = lyric_video_bible_document_name_read_or_null(folder_name);
    if (null_is(read)) {
      list_add(unread, folder_name);
      continue;
    }
    let psalms_is = equal(read.book_code, "PSA");
    if (not(psalms_is)) {
      list_add(other_book, folder_name);
      continue;
    }
    let chapter_code = ebible_chapter_code_pad("PSA", read.chapter_number);
    let whole_is = text_empty_is(read.verse_first);
    let passage_code = whole_is
      ? chapter_code
      : giveaway_passage_code(chapter_code, read.verse_first, read.verse_last);
    let file_name = path_base(one.picture.path);
    let mark = giveaway_painting_mark(file_name);
    let name_published = giveaway_passage_file_name(
      passage_code,
      bible_folder,
      kind,
      mark,
      ending,
    );
    let path_before = property_get_or_null(seen, name_published);
    let b = null_is(path_before);
    let taken_is = not(b);
    if (taken_is) {
      let same_is = equal(path_before, one.picture.path);
      if (not(same_is)) {
        list_add(passed_over, one.picture.path);
      }
      continue;
    }
    property_set(seen, name_published, one.picture.path);
    let row = {
      file_name: file_name,
      path_in_repo: one.picture.path,
      passage_code: passage_code,
      bible_folder: bible_folder,
      kind: kind,
      mark: mark,
      ending: ending,
      name_published: name_published,
    };
    list_add(rows, row);
  }
  list_sort_text_property(rows, "name_published");
  let answer = {
    documents: held.documents,
    rows: rows,
    unread: list_unique(unread),
    other_book: list_unique(other_book),
    passed_over: list_unique(passed_over),
  };
  return answer;
}
