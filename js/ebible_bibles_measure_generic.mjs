import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_bibles_measure_generic(differ$bible_folder) {
  arguments_assert(arguments, 1);
  ("Every bible this repo ships, put through one measurement, with the ones that could not be measured named apart.");
  ("A bible whose pages are not on this machine is named apart rather than counted as agreeing. Answering nothing for it would leave the record reading as though every bible had been looked at, which is the one way a measurement can be wrong and look right.");
  ("Written once for every measurement of this shape because the walking, the catching and the naming apart are the same work whatever is being measured; only the question asked of each bible differs, and that is what is handed in.");
  let bible_folders = ebible_bible_folders_sorted();
  let bibles = [];
  let unmeasured = [];
  async function lambda(bible_folder) {
    async function lambda2() {
      let counted = await differ$bible_folder(bible_folder);
      return counted;
    }
    let measured = await catch_null_async(lambda2);
    let missing = null_is(measured);
    if (missing) {
      list_add(unmeasured, bible_folder);
      return;
    }
    list_add(bibles, measured);
  }
  await each_async(bible_folders, lambda);
  let r = {
    bibles,
    unmeasured,
  };
  return r;
}
