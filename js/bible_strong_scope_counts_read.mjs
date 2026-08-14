import { fn_name } from "./fn_name.mjs";
import { bible_strong_chapter_tallies_cache } from "./bible_strong_chapter_tallies_cache.mjs";
import { bible_strong_scope_counts } from "./bible_strong_scope_counts.mjs";
export async function bible_strong_scope_counts_read(chapter_code, strong) {
  ("The same three counts as ",
    fn_name("bible_strong_scope_counts"),
    ", for somebody who has a chapter and a Strong's number and not the tallies. It fetches the tallies itself.");
  ("$plain chapter_code");
  ("$plain strong");
  ("Neither argument names anything that runs. The chapter code is a place in the counts, like JHN05, and the Strong's number is a word's key in whichever numbering its testament uses.");
  ("This exists because a person authoring a word explanation has exactly those two things in front of them and wants the answer by name, not by writing a script to load a cache first. The pure function stays pure and this one does the fetching, so a caller that already holds the tallies is not made to fetch them again.");
  let tallies = await bible_strong_chapter_tallies_cache();
  let counts = bible_strong_scope_counts(tallies, chapter_code, strong);
  return counts;
}
