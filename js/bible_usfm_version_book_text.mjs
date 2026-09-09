import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { bible_usfm_book_typos_mended } from "./bible_usfm_book_typos_mended.mjs";
export async function bible_usfm_version_book_text(version, book_code) {
  arguments_assert(arguments, 2);
  ("$plain version");
  ("$plain book_code");
  ("One whole book of any bible this disk holds as usfm, still marked up, fetched off whichever shelf that bible came off and put right where its file is marked up wrongly.");
  ("★ IT IS THE ONE DOOR ONTO THE SHELF, AND THAT IS THE WHOLE REASON IT EXISTS. Five readers used to find the file and read it themselves, which was three lines each and looked like nothing; but a mend is a thing every one of them needs and none of them would have thought to ask for, so five doors meant five chances for a reader to be handed a word the translation does not say. There is now one place where a book arrives, and anything that must be true of every reading of scripture is said there once.");
  ("A READER BELOW THIS MAY NOT REACH PAST IT FOR THE FILE. Reading the file directly is not wrong in the way a mistake is wrong, it is wrong in the way a second door is wrong: it works, it agrees today, and it is where the next fault will be handed on from.");
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let mended = bible_usfm_book_typos_mended(usfm, version, book_code);
  return mended;
}
