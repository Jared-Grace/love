import { fn_name } from "./fn_name.mjs";
import { g_leader_book_reaches } from "./g_leader_book_reaches.mjs";
import { equal } from "./equal.mjs";
export function g_leader_book_reach(book_code) {
  "the books a leader arc written for this book may draw on, the book itself first; a book big enough to supply its own arcs reaches only itself";
  ("The default is the answer for sixty-two of the sixty-six books, so it is returned here rather than listed in ",
    fn_name("g_leader_book_reaches"),
    " - a table naming every book would have to be checked against the canon every time a book was added, and the four real entries would be lost in it.");
  let reaches = g_leader_book_reaches();
  for (let reach of reaches) {
    let home = reach[0];
    let same = equal(home, book_code);
    if (same) {
      return reach;
    }
  }
  let alone = [book_code];
  return alone;
}
