import { subtract } from "./subtract.mjs";
import { gloss_chapters_roots_quoted_only } from "./gloss_chapters_roots_quoted_only.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_quoted_only_rooted_named(
  sample_size,
) {
  "Every Cebuano explanation the quoted-only reading calls silent about where its word came from, that names a root outright in one of the wordings the strict root reader cannot see.";
  "★ THIS IS THE ONE PLACE THE STRICT READER'S BLIND SPOT REACHES A WRITER. The sweep beside this one only reports, and a report that is wrong wastes a person's reading. The repair that empties the same list replaces the sentence, so a sentence wrongly called silent is not merely miscounted - the claim somebody wrote is overwritten and the store is left saying less than it did. Everything else built on the strict reader is a reading, and a reading can be corrected after the fact.";
  "The judgment being tested has four parts and only the fourth stands between the blind spot and the writer. It strikes the headword out of the sentence and asks whether the dictionary's root still stands in what is left, which does catch a built on X sentence whenever X is the root the dictionary gives. It cannot catch one where the sentence names a different root, because the word it looks for was never there to find.";
  "Nothing is written and nothing is asked of the site. The repair is not run; this asks only how much of its work would be wrong if it were.";
  "$plain sample_size";
  "the count says how many sentences to print. It names nothing that runs.";
  let held = await gloss_chapters_roots_quoted_only(
    app_ceb_bible_gloss_generate,
  );
  let offenders = property_get(held, "offenders");
  let sightings = 0;
  let rooted = 0;
  let rows = [];
  function finding_read(finding) {
    sightings = add(sightings, 1);
    let explain = property_get(finding, "explain");
    let named = gloss_explain_roots_named(explain);
    let count = list_size(named);
    let none = equal(count, 0);
    if (none) {
      return;
    }
    rooted = add(rooted, 1);
    let first = list_get(named, 0);
    let word = property_get(finding, "word");
    let root = property_get(finding, "root");
    let row = {
      word: word,
      dictionary_root: root,
      named_root: first,
      explain: explain,
    };
    list_add(rows, row);
  }
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let count2 = Number(sample_size);
  let shown = list_take(rows, count2);
  let r = {
    chapters: list_size(offenders),
    sightings: sightings,
    rooted: rooted,
    silent: subtract(sightings, rooted),
    shown: shown,
  };
  return r;
}
