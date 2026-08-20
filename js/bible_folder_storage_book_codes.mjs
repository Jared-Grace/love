export async function bible_folder_storage_book_codes(bible_folder) {
  "$plain bible_folder";
  "The books storage actually holds for one bible, read off the record of what was uploaded.";
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
