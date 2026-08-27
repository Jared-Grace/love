import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { door43_version_record_download } from "./door43_version_record_download.mjs";
import { property_get } from "./property_get.mjs";
import { door43_version_books } from "./door43_version_books.mjs";
import { sword_version_or_null } from "./sword_version_or_null.mjs";
import { sword_version_record_download } from "./sword_version_record_download.mjs";
import { sword_version_books } from "./sword_version_books.mjs";
import { ebible_version_books_original_check } from "./ebible_version_books_original_check.mjs";
import { ebible_class_new } from "./ebible_class_new.mjs";
import { ebible_class_old } from "./ebible_class_old.mjs";
import { ebible_class_apocrypha } from "./ebible_class_apocrypha.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { ebible_version_books_testament } from "./ebible_version_books_testament.mjs";
export async function ebible_version_books(bible_folder) {
  "Every book one bible carries, whichever of the three places the bible came from.";
  "A bible from the Door43 catalogue has no book index page. Its books are files, and each one names itself in its own first lines, so the list is gathered from the books themselves next door.";
  "A bible carried as a Sword module has no index page either. It is one run of marked-up text with a mark opening each book, so its list is gathered by walking that run next door.";
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    await door43_version_record_download(door);
    let door43_folder = property_get(door, "door43_folder");
    let carried = await door43_version_books(door43_folder);
    return carried;
  }
  let sword = sword_version_or_null(bible_folder);
  let packaged = null_not_is(sword);
  if (packaged) {
    await sword_version_record_download(sword);
    let sword_folder = property_get(sword, "sword_folder");
    let walked = await sword_version_books(sword_folder);
    return walked;
  }
  let result = await ebible_version_books_original_check(bible_folder);
  if (null_not_is(result)) {
    return result;
  }
  let n = ebible_class_new();
  let o = ebible_class_old();
  let a = ebible_class_apocrypha();
  let classes = list_join_comma_space([o, a, n]);
  let books = await ebible_version_books_testament(bible_folder, classes);
  return books;
}
