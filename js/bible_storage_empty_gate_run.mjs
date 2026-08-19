import { bible_storage_books_path } from "./bible_storage_books_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_storage_books_entry_empty_is } from "./bible_storage_books_entry_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function bible_storage_empty_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every bible this repo offers a reader has something uploaded for it.");
  ("A reader picks a language and the page asks storage for each verse of it. A bible with nothing there answers nothing for every verse of every book, so the whole reading is apologies - and the offer of that language is what led them there.");
  ("It refuses only an empty folder, and never a bible that holds some books and not others. Bibles published in parts are ordinary and there are hundreds of them here: a single gospel, a New Testament alone, an Old Testament alone. A gate that refused those would be refusing a fact about a translation, which is nothing anybody can repair.");
  ("This reads only the file. The asking reaches the network and is a command somebody runs; the checking has to run wherever the rest of the gates run.");
  let path = bible_storage_books_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let shipped = ebible_bible_folders_sorted();
  let property_name = bible_folder_key();
  let measured = list_map_property(bibles, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  let empty = list_filter(bibles, bible_storage_books_entry_empty_is);
  let f_name = fn_name("bible_storage_books_write");
  list_empty_is_assert_json(unmeasured, {
    hint: text_combine_multiple([
      "a bible is offered that storage has never been asked about - ask about them all with ",
      f_name,
      ", which reaches the network and rewrites the record",
    ]),
    unmeasured,
  });
  let f_name2 = fn_name("bible_storage_books_write");
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer offers - write it again with ",
      f_name2,
      " so what is checked is what is here",
    ]),
    departed,
  });
  let f_name3 = fn_name("ebible_chapters_upload");
  let f_name4 = fn_name("ebible_languages");
  list_empty_is_assert_json(empty, {
    hint: text_combine_multiple([
      "storage holds nothing at all for this bible, so a reader who picked its language would get a line saying so in place of every verse of every book - either the upload never ran, and ",
      f_name3,
      " named with this folder is what runs it, or the folder is spelled here differently from how it was spelled there, which is a line of ",
      f_name4,
      " to correct",
    ]),
    empty,
  });
  let r = {
    checked: list_size(shipped),
    unmeasured,
    departed,
    empty,
  };
  return r;
}
