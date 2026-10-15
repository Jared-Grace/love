import { path_folder_name } from "./path_folder_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_folder } from "./giveaway_bible_folder.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { lyric_video_bible_document_name_read_or_null } from "./lyric_video_bible_document_name_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { giveaway_passage_code } from "./giveaway_passage_code.mjs";
import { path_base } from "./path_base.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { giveaway_painting_mark } from "./giveaway_painting_mark.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_unique } from "./list_unique.mjs";
export async function giveaway_psalms_paintings_rows() {
  arguments_assert(arguments, 0);
  ("Every painting that has been cropped for a psalm's lyric video, written down beside the name it will be given away under.");
  ("★ THE PASSAGE A PAINTING BELONGS TO IS READ OFF THE NAME OF THE DOCUMENT THAT NAMES THE PAINTING, AND IT CANNOT BE REACHED FORWARD FROM THE RECORDINGS. The obvious route - walk the sung psalms, and for each one open the timing document it would have - drops seven hundred and seventy-four of the two thousand and sixty-nine paintings, silently. Thirty-one picture-bearing documents are whole-chapter documents of chapters that are only ever sung in parts: Psalm 78 holds eighty-two paintings that way, Psalm 89 fifty-seven. Those documents exist and hold the work; no recording addresses them. So the walk starts from the documents, and a document's own name is what says which passage it is for.");
  ("★ THE NAME IS WHAT IS READ AND NOT THE PASSAGE WRITTEN INSIDE THE DOCUMENT, THOUGH THE FIELD INSIDE IS EASIER TO READ. That field says Psalm 147:12-20 - words printed on the video for a person to read - and user-facing words are changed for a reader whenever a reader is better served. The name is an address: one function spells it, nothing may respell it, and a round-trip check holds every one of the five hundred and seventeen documents to spelling back to its own address. An address that reads back is the safe thing to depend on; the readable field is the fragile one.");
  ("★ ONE ROW PER PASSAGE AND PAINTING, SO THE TAKES OF ONE PASSAGE ARE UNIONED RATHER THAN COUNTED, AND THAT UNION LOSES NOTHING BY CONSTRUCTION. Eighteen passages are timed by more than one document - Psalm 150 by six of them - and the paintings do not move when a passage is sung again: the later take's document names the same picture folder as the first, so a hundred and fifty-one of these repeats name a hundred and fifty-one files and not three hundred. Measured: of the eighteen hundred and thirteen passage-and-painting keys, a hundred and fifty-one are named by more than one document and not one of them is given two different paths. So the first document the walk meets keeps the row and there is no second copy for it to have preferred - which is why this is a union and not a choice. Without it the same file would be published several times under several names.");
  ("★ THE PASSAGE STAYS IN THE KEY RATHER THAN THE CHAPTER, WHICH ADMITS TWO HUNDRED AND NINETY-FOUR BYTE-IDENTICAL DUPLICATES INTO THE BOXES ON PURPOSE. Within one chapter, two hundred and ninety-five painting names are claimed by more than one passage, and two hundred and ninety-four of those are the same picture - so keying by chapter instead would publish a shorter name and fewer files. It is not done, for three reasons. The one remaining pair is two genuinely different crops under one name - Psalm 119's pd_johansen_kerstboom.png is cropped differently for verses 1-8 and for verses 105-112 - so chapter keying would collide there and refuse the whole record until somebody renames a file on this disk, which is the owner's to do and not a thing to be blocked behind. Deduplicating by bytes instead would make a permanent address depend on a byte comparison that a recrop flips. And the passage is the one authored fact here: a document says which verses it is for, and a reader asking which paintings go with a part of a psalm has an answer rather than a chapter's worth of pictures.");
  ("★ THE KIND WORD IS `picture` AND NOT `painting`, THOUGH EVERY ONE OF THESE IS A CROP OF A PAINTING TODAY. Asked on 2026-10-14, all two thousand and sixty-nine pictures the timing documents name begin `pd_` and not one was drawn by a model, so `painting` would have been true of every file going up. It is still the wrong word. The kind says what sort of file a reader is holding, and `picture` is the whole of what this kind has to say: something to look at, rather than to listen to or to read. `painting` says that and also makes a claim about where the picture came from - and a kind word can never be taken back, so the first drawn picture ever given away would need a second kind beside this one, and a box would then hold `picture` files and `painting` files with a reader made to learn two words for one thing. Where a picture came from is said twice over without this word: the mark carries the painter's name, and the prefix on the file it was cropped from says it is a painting in the public domain.");
  ("★ THE BIBLE FOLDER IS IN A PAINTING'S NAME EVEN THOUGH NOBODY TRANSLATED THE PAINTING. The crop was chosen for a line of a particular English text and timed against it, so the word is true; and it keeps every file in a box to one shape, which is what lets somebody automating a download split a name into its pieces without knowing which kind of file they have in hand.");
  ("A document whose name will not read is reported rather than passed over, and so is a document naming a book other than the Psalms. This folder holds nothing but timing documents, so a name that will not read is not somebody's stray file - it is paintings going silently missing from the giveaway.");
  ("Nothing here looks at the disk. Whether the file a document names is actually there is a different question with a different answer - seven of the eighteen hundred and thirteen are not on this machine - and it is asked by its own check, so that a missing crop is reported rather than quietly keeping a row out of the record.");
  let bible_folder = giveaway_bible_folder();
  let kind = "picture";
  let ending = ".png";
  let held = await lyric_video_documents_pictures();
  let rows = [];
  let seen = {};
  let unread = [];
  let other_book = [];
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
    let key = one.picture.path;
    if (property_exists(seen, key)) {
      continue;
    }
    property_set(seen, key, true);
    let mark = giveaway_painting_mark(file_name);
    let name_published = giveaway_passage_file_name(
      passage_code,
      bible_folder,
      kind,
      mark,
      ending,
    );
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
  };
  return answer;
}
