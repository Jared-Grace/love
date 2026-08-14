import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { g_leader_book_reach } from "./g_leader_book_reach.mjs";
import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function g_leader_chapter_codes_split(chapter_code) {
  "Every written chapter a leader arc for this chapter may draw on, in canon order, split into the ones up to and including it and the ones after it.";
  "$plain chapter_code";
  "the code is a chapter's name, like ROM08, chosen from the Bible's own book and chapter numbering. It names a chapter and nothing that runs.";
  "The reach names books and most of the canon has none of it written yet, so a chapter is only here if the reach allows it and the write store has it - the answer is the overlap of the two.";
  "AFTER means after within this chapter's own book. A book earlier in the reach is behind this chapter however high its chapter numbers run, and a book later in the reach is not something the player is walking towards - it is simply another book the elder may quote. Only the book the plant stands in has a here and an ahead.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let reach = g_leader_book_reach(book_code);
  let written = await g_sermon_chapter_codes_all();
  let canon = ebible_book_codes();
  let stop = ebible_chapter_code_to_number(chapter_code);
  function book_index_of(code) {
    let index = list_index_of(canon, code);
    return index;
  }
  let ordered = list_sort_number_mapper(reach, book_index_of);
  let kept = [];
  let later = [];
  for (let book of ordered) {
    function of_this_book(code) {
      let of_book = ebible_chapter_code_to_book(code);
      let same = equal(of_book, book);
      return same;
    }
    let mine = list_filter(written, of_this_book);
    let sorted = list_sort_number_mapper(mine, ebible_chapter_code_to_number);
    let home = equal(book, book_code);
    for (let code of sorted) {
      let number = ebible_chapter_code_to_number(code);
      let past = greater_than(number, stop);
      let after = home && past;
      if (after) {
        list_add(later, code);
        continue;
      }
      list_add(kept, code);
    }
  }
  let r = {
    kept,
    later,
  };
  return r;
}
