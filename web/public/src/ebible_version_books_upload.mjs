import { ebible_firebase_upload } from "./ebible_firebase_upload.mjs";
import { object_merge } from "./object_merge.mjs";
import { ebible_verses_upload_name } from "./ebible_verses_upload_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { marker } from "./marker.mjs";
export async function ebible_version_books_upload(bible_folder) {
  marker("1");
  let books = await ebible_version_books(bible_folder);
  let verse_number = object_property_get(books, "verse_number");
  let joined2 = ebible_verses_upload_name(chapter_code, verse_number);
  let verse = object_merge(
    {
      bible_folder,
      chapter_code,
    },
    books,
  );
  await ebible_firebase_upload(bible_folder, joined2, {
    books,
  });
  return books;
}
