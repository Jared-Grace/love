import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { g_leader_book_reach } from "./g_leader_book_reach.mjs";
import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_chapter_code_to_name_code } from "./ebible_chapter_code_to_name_code.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function g_leader_chapter_codes(chapter_code) {
  "the written chapters a leader arc for this chapter may draw on: the nearest ones behind it, in canon order, wide enough that no passage has to answer more than about six times";
  "A leader answers 216 times over one plant, which is far more than one chapter of preaching can carry without repeating itself - so the elder draws on the whole reach of the book the plant stands in, and the reach is what makes a small book like Philemon answerable at all.";
  "IT STOPS AT THIS CHAPTER because the player has not met what comes after it. That cap costs nothing, because every reach borrows backward only - a rule the reaches gate enforces, and the reason it exists.";
  "ONLY WRITTEN CHAPTERS COUNT. The reach names books, not preaching, and most of the canon has none written yet; an unwritten chapter in the list would be a passage set nothing can be drawn from. So the reach is asked what it may draw on and the write store is asked what there is, and the answer is the overlap.";
  "IT WIDENS EVERY BOOK, not only the four that borrow. Sixty-two books reach just themselves, and for those this still answers with the written chapters of that book up to this one rather than the single chapter that used to be asked for - which is the same fix for the same reason. One chapter of Romans is about twenty passages against 216 leader turns, so an elder standing on it repeats each about eleven times whether or not the book is small. The four reaches are the case where widening within the book is not enough.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let reach = g_leader_book_reach(book_code);
  let written = await g_sermon_chapter_codes_all();
  let canon = ebible_book_codes();
  function chapter_number_of(code) {
    let name_code = ebible_chapter_code_to_name_code(code);
    let number = integer_to_try(name_code);
    return number;
  }
  let stop = chapter_number_of(chapter_code);
  function book_index_of(code) {
    let index = list_index_of(canon, code);
    return index;
  }
  let ordered = list_sort_number_mapper(reach, book_index_of);
  let kept = [];
  for (let book of ordered) {
    function of_this_book(code) {
      let of_book = ebible_chapter_code_to_book(code);
      let same = equal(of_book, book);
      return same;
    }
    let mine = list_filter(written, of_this_book);
    let sorted = list_sort_number_mapper(mine, chapter_number_of);
    let home = equal(book, book_code);
    for (let code of sorted) {
      let number = chapter_number_of(code);
      let past = greater_than(number, stop);
      let after = home && past;
      if (after) {
        continue;
      }
      list_add(kept, code);
    }
  }
  let least = g_leader_passages_least();
  let backward = list_reverse(kept);
  let taken = [];
  let total = 0;
  for (let code of backward) {
    let enough = greater_than_equal(total, least);
    if (enough) {
      break;
    }
    let its = await g_sermon_chapter_passages(code);
    total = add(total, its.length);
    list_add(taken, code);
  }
  let nearest = list_reverse(taken);
  return nearest;
}
