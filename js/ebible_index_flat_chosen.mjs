import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_flat } from "./ebible_index_flat.mjs";
import { ebible_index_flat_chapter_codes } from "./ebible_index_flat_chapter_codes.mjs";
import { ebible_index_flat_try } from "./ebible_index_flat_try.mjs";
import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_index_flats_union } from "./ebible_index_flats_union.mjs";
export async function ebible_index_flat_chosen(bible_folders) {
  "The list of verses a page walks for a reader who chose these bibles: every verse number any one of them has, in the bible's own order.";
  "It used to walk English and no other, whoever was reading. A bible that joins two verses into one then has nothing at the second number, and the page said so - which is right for a reader who chose English beside it, and is an apology for nothing at all for a reader who did not. Asking the bibles somebody actually chose turns that second reader's gap into no gap, because the number was never one their bibles use.";
  "English still says what order the chapters come in, whether or not anybody chose it. That is a fact about the bible rather than about a version of it, and only the index knows it.";
  "A bible with no index uploaded yet is passed over rather than waited for, and where that leaves nothing at all the walk is English's, exactly as it was. So this can be true before a single index has been uploaded, and each one that is uploaded afterwards makes it truer for the readers who chose that bible - there is no day on which it has to change over.";
  let version_english = ebible_folder_english();
  let list_english = await ebible_index_flat(version_english);
  let chapter_codes = ebible_index_flat_chapter_codes(list_english);
  async function lambda(bible_folder) {
    let list = await ebible_index_flat_try(bible_folder);
    return list;
  }
  let lists = await list_map_unordered_async_filter_null_not_is(
    bible_folders,
    lambda,
  );
  let none = list_empty_is(lists);
  if (none) {
    return list_english;
  }
  let union = ebible_index_flats_union(chapter_codes, lists);
  return union;
}
