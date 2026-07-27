import { text_identifier_count } from "./text_identifier_count.mjs";
import { file_read } from "./file_read.mjs";
import { text_identifier_replace } from "./text_identifier_replace.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { equal } from "./equal.mjs";
export async function file_identifier_replace(f_path, name_before, name_after) {
  "Rewrites a whole word in one file, and writes only when the word was really there. A sweep over a folder then leaves the untouched files untouched, so the commit that follows names only what actually moved.";
  "It answers how many places it rewrote rather than merely whether it rewrote any, because the two answers cost the same and only one of them can be checked. A word swept through written text is a word swept through prose as well, and a function here may share its name with an ordinary English one - so the caller has to be able to say afterwards which file took how much, and a yes cannot say that.";
  let contents = await file_read(f_path);
  let sites = text_identifier_count(contents, name_before);
  let none_is = equal(sites, 0);
  if (none_is) {
    return sites;
  }
  let replaced = text_identifier_replace(contents, name_before, name_after);
  await file_overwrite(f_path, replaced);
  return sites;
}
