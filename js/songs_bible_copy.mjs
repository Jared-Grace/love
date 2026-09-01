import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { ebible_version_books_names } from "./ebible_version_books_names.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { song_file_book_named_or_null } from "./song_file_book_named_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { path_join } from "./path_join.mjs";
import { file_copy } from "./file_copy.mjs";
export async function songs_bible_copy(folder_from, folder_to) {
  arguments_assert(arguments, 2);
  ("$plain folder_from");
  ("$plain folder_to");
  ("Copies every recording of a bible passage out of one folder into another, leaving behind anything already there, and says what it did.");
  ("A SONG IS TAKEN TO BE A PASSAGE WHEN ITS NAME OPENS WITH A BOOK OF THE BIBLE AND ITS NAME ENDS IN A SOUND FILE. Both halves are needed and neither is enough: the folder these arrive in also holds pictures and documents whose names begin with a book, and songs with titles drawn from a psalm that are not the psalm.");
  ("A FILE ALREADY THERE IS LEFT ALONE RATHER THAN WRITTEN OVER. This exists to be run again and again as more songs arrive, so the ordinary case is a folder that is mostly already right - and the copy underneath refuses to overwrite anyway, which would turn every later run into a raising one. Copying only what is missing is also what makes the run cheap enough to be habitual.");
  ("A DESTINATION THAT IS NOT THERE IS REPORTED AND NOT CREATED. The folder this is aimed at lives on a drive that is plugged in, and a drive that is unplugged looks exactly like a folder that does not exist yet. Making it would put the copies on the machine's own disk under a path nobody looks at, where they would fill it up while reading, to anyone who checked, as a backup that had worked.");
  ("The two folders are handed in rather than named here, so the same sweep serves a second drive or a folder made to check it against without a second copy of the judgment.");
  let there = await file_exists(folder_to);
  let missing = not(there);
  if (missing) {
    let unmounted = {
      folder_from,
      folder_to,
      folder_to_found: false,
      copied: [],
      already: [],
      ignored: [],
    };
    return unmounted;
  }
  let bible_folder = ebible_folder_english();
  let book_names = await ebible_version_books_names(bible_folder);
  let file_names = await folder_read_files(folder_from);
  let suffixes = [".mp3", ".wav"];
  let copied = [];
  let already = [];
  let ignored = [];
  for (let file_name of file_names) {
    let lowered = text_lower_to(file_name);
    let sounds = text_ends_with_any(lowered, suffixes);
    let book = song_file_book_named_or_null(file_name, book_names);
    let unnamed = null_is(book);
    let passage_not = not(sounds) || unnamed;
    if (passage_not) {
      list_add(ignored, file_name);
      continue;
    }
    let path_to = path_join([folder_to, file_name]);
    let held = await file_exists(path_to);
    if (held) {
      list_add(already, file_name);
      continue;
    }
    let path_from = path_join([folder_from, file_name]);
    await file_copy(path_from, path_to);
    list_add(copied, file_name);
  }
  let r = {
    folder_from,
    folder_to,
    folder_to_found: true,
    copied,
    already,
    ignored,
  };
  return r;
}
