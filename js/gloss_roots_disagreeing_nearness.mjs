import { each } from "./each.mjs";
import { gloss_root_explain_nearest } from "./gloss_root_explain_nearest.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_spread_take } from "./list_spread_take.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_roots_disagreeing_nearness(offenders, sample_size) {
  "Findings that an explanation missed its word's root, sorted by how far the explanation came from saying it: how many stand at each distance, and an evenly spread sample of the ones standing furthest away.";
  "A finding on its own does not say whether anything is wrong. An explanation naming ginuo where the dictionary writes ginoo has the origin exactly right and is reported all the same, because the letters differ. So the findings have to be separated before any of them is read, and how far the nearest word in the prose stands from the root is what separates them: one or two edits is very often a spelling the two sources write differently, while five or more is a different word, which is a made-up origin handed to a reader as fact.";
  "The count at each distance is the measurement and the sample is only how it gets checked. Run once before a generator prompt is fixed and once after, the two sets of counts say whether the fixing worked, and they say it over every finding rather than over the few anybody had time to read. The sample is spread through the whole rather than taken from the front, because the findings arrive book by book and the opening ones are all about one book.";
  "Three edits is where the sample starts. Below it a difference of spelling is the likeliest reading and above it that gets steadily harder to believe, so this is the line between what is worth a reader's time and what is not - and it is a line, not a verdict, so a sound explanation will turn up in the sample and a wrong one will sit below it.";
  let findings = [];
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let disagreeing = property_get(chapter, "disagreeing");
    function finding_read(finding) {
      let root = property_get(finding, "root");
      let explain = property_get(finding, "explain");
      let nearest = gloss_root_explain_nearest(root, explain);
      let r1 = {
        chapter_code,
        word: property_get(finding, "word"),
        root,
        affixes: property_get(finding, "affixes"),
        nearest: property_get(nearest, "nearest"),
        edits: property_get(nearest, "edits"),
        explain,
      };
      list_add(findings, r1);
    }
    each(disagreeing, finding_read);
  }
  each(offenders, chapter_read);
  let total = list_size(findings);
  function edits_read(finding) {
    let edits = property_get(finding, "edits");
    return edits;
  }
  let distances = list_map(findings, edits_read);
  let counted = list_tally(distances);
  function far_is(finding) {
    let edits = property_get(finding, "edits");
    let far = greater_than_equal(edits, 3);
    return far;
  }
  let far = list_filter(findings, far_is);
  let farthest = list_spread_take(far, sample_size);
  let r = {
    total,
    counted,
    farthest,
  };
  return r;
}
