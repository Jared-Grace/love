import { json_to } from "./json_to.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_difference } from "./list_difference.mjs";
import { path_join } from "./path_join.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { json_extension } from "./json_extension.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapter_claim_next_generic(
  chapter_codes,
  uploaded,
  fn,
) {
  "$plain chapter_codes";
  "$plain uploaded";
  arguments_assert(arguments, 3);
  ("Hands one author the first chapter, in the order given, that is neither published nor already being authored by someone else, and marks it as theirs so the next one to ask is handed a different chapter.");
  ("★ SEVERAL AUTHORS WORK ONE STORE AT ONCE, AND NONE OF THEM CAN SEE THE OTHERS. Each would otherwise read the same published list and pick the same next chapter, and two authors writing one chapter's handover file in turn store whichever wrote last - a chapter's worth of work thrown away with nothing red anywhere.");
  ("The mark is a file per chapter, created only if no file stands under that name. The disk decides between two authors asking in the same instant: exactly one creation succeeds, and the other is told the name is taken and moves on to the next chapter.");
  ("A mark goes stale after six hours, because an author can stop without saying so - a conversation ends, a machine sleeps - and a chapter marked forever is a chapter nobody ever finishes. Six hours is several times the longest chapter has taken. The stale mark is moved aside before it is replaced, and moving is also decided by the disk, so two authors finding the same stale mark cannot both take it.");
  ("Publishing is what finishes a chapter, so a published chapter is never handed out whatever marks remain, and nothing has to remember to give a mark back.");
  ("Marks sit in a folder inside the store's own handover folder: the readers of that folder read only its files, so a folder beside them is never mistaken for a handover.");
  let waiting = list_difference(chapter_codes, uploaded);
  let folder2 = gloss_write_folder(fn);
  let folder = path_join([folder2, "claims"]);
  let fs = await import("fs");
  await fs.promises.mkdir(folder, {
    recursive: true,
  });
  let left = multiply(6, 60);
  let left2 = multiply(left, 60);
  let stale_ms = multiply(left2, 1000);
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
    let stat = null;
    try {
      stat = await fs.promises.stat(path);
    } catch (e) {
      if (equal(e.code, "ENOENT")) {
        let r2 = await create(path);
        return r2;
      }
      throw e;
    }
    let left3 = date_now_milliseconds();
    let age = subtract(left3, stat.mtimeMs);
    if (less_than(age, stale_ms)) {
      return false;
    }
    let aside = path + "." + process.pid + "." + date_now_milliseconds();
    try {
      await fs.promises.rename(path, aside);
    } catch (e) {
      if (equal(e.code, "ENOENT")) {
        return false;
      }
      throw e;
    }
    await fs.promises.unlink(aside);
    let r3 = await create(path);
    return r3;
  }
  for (let chapter_code of waiting) {
    let path = path_join([folder, chapter_code + json_extension()]);
    let taken = await take(path);
    if (taken) {
      let r = {
        chapter_code,
        claim: path,
        waiting: list_size(waiting),
      };
      return r;
    }
  }
  let none = {
    chapter_code: null,
    waiting: list_size(waiting),
  };
  return none;
}
