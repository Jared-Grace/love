import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { path_join } from "./path_join.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { json_to } from "./json_to.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { storage_function_path_json } from "./storage_function_path_json.mjs";
import { json_extension } from "./json_extension.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_book_claim_next_generic(
  chapter_codes,
  uploaded,
  fn,
) {
  "$plain chapter_codes";
  "$plain uploaded";
  arguments_assert(arguments, 3);
  ("Hands one author the first book, in the order given, that still has unpublished chapters and that no other author is working in, marks it as theirs, and names the chapters of it still waiting.");
  ("★ SEVERAL AUTHORS WORK ONE STORE AT ONCE, AND NONE OF THEM CAN SEE THE OTHERS. Each would otherwise read the same published list and pick the same next chapter, and two authors writing one chapter in turn store whichever wrote last - a chapter's worth of work thrown away with nothing red anywhere.");
  ("★ A BOOK IS HANDED OUT, NOT A CHAPTER. An author works through a book in order, so a chapter mark keeps them apart for one chapter and then walks them back into each other. A book also carries its own words - its names, its places, the way its speakers are referred to - and one author keeps those the same from chapter to chapter where two would not.");
  ("A book is being worked in while its mark, or any of its chapters in the store, was written within the last two hours. The store's clock counts as much as the mark: an author who began before marks existed, or chose a book by hand, leaves no mark but does write the store every few minutes, and every author writing keeps their own book held without asking again. Two hours idle is several times the longest one chapter has taken, so a book an author has stopped in without saying so is handed on rather than left unfinished forever.");
  ("The mark is a file per book, created only if no file stands under that name, so between two authors asking in the same instant the disk decides and exactly one creation succeeds. A stale mark is moved aside before it is replaced, and moving is decided by the disk too, so two authors finding the same stale mark cannot both take it.");
  ("Publishing is what finishes a chapter, so a published chapter is never handed out whatever marks remain, and nothing has to remember to give a mark back.");
  ("Marks sit in a folder inside the store's own handover folder: the readers of that folder read only its files, so a folder beside them is never mistaken for a handover.");
  let waiting = list_difference(chapter_codes, uploaded);
  let books = [];
  let chapters_of = {};
  for (let chapter_code of waiting) {
    let book_code = ebible_chapter_code_to_book(chapter_code);
    if (not(chapters_of[book_code])) {
      chapters_of[book_code] = [];
      books.push(book_code);
    }
    chapters_of[book_code].push(chapter_code);
  }
  let folder2 = gloss_write_folder(fn);
  let folder = path_join([folder2, "claims"]);
  let fs = await import("fs");
  await fs.promises.mkdir(folder, {
    recursive: true,
  });
  let left = multiply(2, 60);
  let left2 = multiply(left, 60);
  let idle_ms = multiply(left2, 1000);
  async function written_ms(path) {
    try {
      let stat = await fs.promises.stat(path);
      let r2 = stat.mtimeMs;
      return r2;
    } catch (e) {
      if (equal(e.code, "ENOENT")) {
        let r3 = 0;
        return r3;
      }
      throw e;
    }
  }
  async function recent(paths) {
    let now = date_now_milliseconds();
    for (let path of paths) {
      let ms = await written_ms(path);
      let a = subtract(now, ms);
      if (less_than(a, idle_ms)) {
        return true;
      }
    }
    return false;
  }
  async function create(path) {
    let text = json_to({
      claimed: date_now_iso(),
    });
    try {
      await fs.promises.writeFile(path, text, {
        flag: "wx",
      });
      return true;
    } catch (e) {
      if (equal(e.code, "EEXIST")) {
        return false;
      }
      throw e;
    }
  }
  async function take(path) {
    let created = await create(path);
    if (created) {
      return true;
    }
    let aside = path + "." + date_now_milliseconds() + ".stale";
    try {
      await fs.promises.rename(path, aside);
    } catch (e) {
      if (equal(e.code, "ENOENT")) {
        return false;
      }
      throw e;
    }
    await fs.promises.unlink(aside);
    let r4 = await create(path);
    return r4;
  }
  for (let book_code of books) {
    let chapters = chapters_of[book_code];
    function lambda(c) {
      let path2 = storage_function_path_json(c, fn.name);
      return path2;
    }
    let stored = chapters.map(lambda);
    let claim = path_join([folder, book_code + json_extension()]);
    let busy = await recent([claim, ...stored]);
    if (busy) {
      continue;
    }
    let taken = await take(claim);
    if (taken) {
      let r = {
        book_code,
        chapters,
        claim,
        waiting: list_size(waiting),
      };
      return r;
    }
  }
  let none = {
    book_code: null,
    waiting: list_size(waiting),
  };
  return none;
}
