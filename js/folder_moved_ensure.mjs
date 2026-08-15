import { file_exists } from "./file_exists.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { file_move } from "./file_move.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function folder_moved_ensure(before, after) {
  "Puts one folder where it now belongs, and does nothing at all when it is already there.";
  "Running it twice is the same as running it once, and that is the whole point of it. A move that is half done is the ordinary state of a move that was interrupted, and this can simply be run again rather than anybody having to work out which half finished.";
  "A folder that is gone from where it used to be has already arrived, so that is answered as a quiet no rather than as a failure. A folder standing in both places at once is the one thing this will not decide for anybody, because moving would bury one of them; the move itself refuses and says so.";
  let same = equal(before, after);
  if (same) {
    let unchanged = {
      before,
      after,
      moved: false,
    };
    return unchanged;
  }
  let there = await file_exists(before);
  if (not(there)) {
    let already = {
      before,
      after,
      moved: false,
    };
    return already;
  }
  let parent = await path_dirname(after);
  await folder_exists_ensure(parent);
  await file_move(before, after);
  let done = {
    before,
    after,
    moved: true,
  };
  return done;
}
