import { arguments_assert } from "./arguments_assert.mjs";
import { berean_usfm_download_path } from "./berean_usfm_download_path.mjs";
import { path_join } from "./path_join.mjs";
export function berean_books_path() {
  arguments_assert(arguments, 0);
  ("Where the sixty-six book files of the unpacked Berean release actually sit.");
  ("The publisher's zip carries a folder of its own inside it rather than laying the books out at the top, so the folder the release was unpacked into is not the folder the books are in. Sticking a book name straight onto the unpack folder names a file that is not there, and the read fails at the first book rather than saying what is wrong.");
  ("Written apart from the unpack folder rather than folded into it, because the two are different facts: one is this repo's choice of where to put a download, the other is the publisher's choice of how to wrap it. A publisher that stops wrapping it changes this line and nothing else.");
  let folder = berean_usfm_download_path();
  let joined = path_join([folder, "bsb_usfm"]);
  return joined;
}
