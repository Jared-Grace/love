import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_chapters_claims_wrong_names } from "./gloss_chapters_claims_wrong_names.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_chapters_claims_wrong_read(chapters) {
  "Every wrong verse claim a sweep found, laid out for a person to read: the name the record keeps it under, and beside it the sentence that made the finding.";
  "★ THIS IS THE SIBLING OF THE NAMING READER AND IT EXISTS BECAUSE THE TWO HALVES WANT OPPOSITE THINGS. A record must not hold the sentence, because the sentence is the thing being mended and a record holding it would call the same fault new the first time a comma moved. A reader must have nothing else: a name alone says a verse was named and never what was said about it, so settling one row meant opening the store at that chapter and hunting the word by hand, and a queue that costs a file read per row is a queue nobody finishes.";
  "So the sweep's findings are reduced twice, once each way, from the one reading. The name is spelled by the naming reader rather than again here, so the two can never disagree about which row this is - which matters, because the name is what somebody types to bank a row they have just read.";
  "Nothing is sorted or made unique, unlike the naming half. Two rows sharing a name are two claims in one sentence and a reader wants both, and the order a sweep found them in is the order the chapters stand in.";
  arguments_assert(arguments, 1);
  let rows = [];
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let one = {
        chapter_code,
        found: [finding],
      };
      let named = gloss_chapters_claims_wrong_names([one]);
      let name = list_get(named, 0);
      let explain = property_get(finding, "explain");
      let row = {
        name,
        explain,
      };
      list_add(rows, row);
    }
    each(found, finding_read);
  }
  each(chapters, chapter_read);
  return rows;
}
