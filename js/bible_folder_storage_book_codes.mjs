import { bible_storage_books_path } from "./bible_storage_books_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
export async function bible_folder_storage_book_codes(bible_folder) {
  "$plain bible_folder";
  "Books storage was seen to hold for one bible, read off the record of what was uploaded.";
  "SOME OF THE BOOKS AND NOT ALL OF THEM, which is the thing to know before believing anything read from here. The record keeps the first page of a storage listing, so a bible with plenty in it can name only the first two - the English bible does exactly that and has sixty six. Every book named is one storage really holds; a book not named may be there all the same, and nothing may conclude from this that a bible lacks something.";
  "AN EMPTY ANSWER IS THE ONE ANSWER THAT IS WHOLE. A first page with nothing on it is a listing with nothing to list, so no books named means no books at all - which is why the gate refusing empty bibles can read this record and a caller asking which books cannot.";
  "STORAGE AND THE INDEX DISAGREE, and this is the half that can be believed. A bible's index names every chapter the translation has, whether or not a word of it was ever uploaded; asking one bible its index gave two hundred and sixty chapters where storage held nothing at all. Anything choosing a chapter to go and read has to ask this one, because the other answers about a book that exists somewhere rather than about a file anybody can fetch.";
  "It reads only the file the storage sweep left behind, so it costs no network and can be asked once per bible without turning a measurement into a second sweep.";
  "A bible the record does not mention answers with no books rather than stopping, because the record and the roster are kept in step by a gate of their own and a reader here has nothing to add to that.";
  let path = bible_storage_books_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let property_name = bible_folder_key();
  let none = [];
  let book_codes = list_find_property_get_or(
    bibles,
    property_name,
    bible_folder,
    "book_codes",
    none,
  );
  return book_codes;
}
