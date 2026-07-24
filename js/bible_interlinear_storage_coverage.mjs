import { equal } from "./equal.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_interlinear_chapter_codes } from "./bible_interlinear_chapter_codes.mjs";
export async function bible_interlinear_storage_coverage() {
  "prove the original-language upload is COMPLETE: list every file actually in `bible/original/` and report which expected chapter codes are still missing, so a partial upload (a run that died on an auth or network error) is caught instead of assumed done";
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: "bible/original/",
  });
  function name_of(item) {
    let full = property_get(item, "name");
    let base = full.replace("bible/original/", "").replace(".json", "");
    return base;
  }
  let present = list_map(files, name_of);
  let expected = await bible_interlinear_chapter_codes();
  function is_missing(code) {
    let there = list_includes(present, code);
    let eq = equal(there, false);
    return eq;
  }
  let missing = list_filter(expected, is_missing);
  let coverage = {
    present_count: present.length,
    expected_count: expected.length,
    missing_count: missing.length,
    missing,
  };
  return coverage;
}
