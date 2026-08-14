import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function g_leader_chapter_codes_widen(codes, taken, total, least) {
  "Add chapters from this list, in the order given, until the pool holds at least this many passages - and answer with how many it holds when it stops.";
  "The pool is added to where it stands rather than answered with, because it is filled from two lists in turn and the second has to see what the first left. What comes back is the count, which is the only thing the caller cannot read off the pool itself without asking the store again.";
  "A whole chapter is taken or none of it, so the count usually passes the number asked for rather than landing on it. Stopping in the middle of a chapter would mean an elder who may quote part of a page.";
  for (let code of codes) {
    let enough = greater_than_equal(total, least);
    if (enough) {
      break;
    }
    let its = await g_sermon_chapter_passages(code);
    total = add(total, its.length);
    list_add(taken, code);
  }
  return total;
}
