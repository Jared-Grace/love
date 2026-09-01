import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_folder_korean } from "./ebible_folder_korean.mjs";
import { ebible_folder_sung } from "./ebible_folder_sung.mjs";
import { ebible_folder_swahili } from "./ebible_folder_swahili.mjs";
import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_glued_words_candidates } from "./ebible_glued_words_candidates.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_glued_words_survey(half_least, parts) {
  "How many words of each translation this repo reads look like a given number of its own words run together, and how many of those are never once spelled apart anywhere in that translation.";
  "$plain half_least";
  "how often the rarest piece has to stand on its own elsewhere in the translation before the word is worth offering: a number, and nothing that runs.";
  "$plain parts";
  "how many words to try reading each one as: a number, and nothing that runs.";
  "Neither count is a verdict, and the second one is not even a clue. Measured 2026-09-01 it was tried as the tell — a pair the translation writes welded every single time cannot be ordinary spelling, or so it went. Read against English, whose spelling is not in question, the never-spaced list is because, into, upon, another, cannot, nothing: every one correct. A score invented from one confirmed defect ranks a correct compound exactly as high.";
  "So what this says is how big each pile is and in what order to ask a person who reads the language. It does not say what is wrong, and reporting the numbers as if it did would be reporting a pile size as a finding.";
  "The translations are named one by one rather than found, because what is wanted is the ones this repo puts in front of a reader, and the download holds fifteen hundred nobody here opens.";
  let folders = [];
  let e = ebible_folder_english();
  let c = ebible_folder_cebuano();
  let k = ebible_folder_korean();
  let folder2 = ebible_folder_sung();
  let v = ebible_folder_swahili();
  let r = ebible_folder_tagalog();
  let u = ebible_folder_urdu();
  let named = [e, c, k, folder2, v, r, u];
  for (let folder of named) {
    let seen = list_includes(folders, folder);
    if (seen) {
      continue;
    }
    list_add(folders, folder);
  }
  let surveyed = [];
  for (let bible_folder of folders) {
    let candidates = await ebible_glued_words_candidates(
      bible_folder,
      half_least,
      parts,
    );
    let never_spaced = [];
    for (let candidate of candidates) {
      let spaced = property_get(candidate, "spaced");
      let never = equal(spaced, 0);
      if (never) {
        let word = property_get(candidate, "word");
        list_add(never_spaced, word);
      }
    }
    let row = {
      bible_folder,
      candidates: list_size(candidates),
      never_spaced: list_size(never_spaced),
      never_spaced_words: never_spaced.slice(0, 20),
    };
    list_add(surveyed, row);
  }
  return surveyed;
}
