import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { ebible_readaloud_lines_differ } from "./ebible_readaloud_lines_differ.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_readaloud_lines_measure() {
  "Every bible this repo ships, measured for whether its chapters are written for reading aloud in as many lines as its pages mark verses.";
  "Each verse of a bible is now read as the line the reading-aloud text gives it, numbered by the mark its page carries. That only holds while the two counts agree. Where the lines outnumber the marks the reading falls off the end and says so; where the marks outnumber the lines the last verses of the chapter are quietly dropped instead, and nothing anywhere says a chapter came back short.";
  "A bible whose pages are not on this machine is named apart rather than counted as agreeing. Answering nothing for it would leave the record reading as though every bible had been looked at.";
  let bible_folders = ebible_bible_folders_sorted();
  let bibles = [];
  let unmeasured = [];
  async function lambda(bible_folder) {
    async function lambda2() {
      let counted = await ebible_readaloud_lines_differ(bible_folder);
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
