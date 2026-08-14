import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { word_root_endings } from "./word_root_endings.mjs";
export function word_root_ending_cut(w) {
  "The word left when a plain English ending is cut off it - the plural s, the past ed, the ing, the ly.";
  "An ending is only cut off a word of five letters or more, because cutting two letters off a four-letter word reaches something that is no longer a word at all.";
  "One ending is cut, never two. The endings are read longest first and the first that matches is the one taken, so witnesses gives up sses rather than s.";
  "A trailing e is dropped from whatever is left, and that is the point of this rather than an afterthought: love, loves and loved would otherwise reach love, love and lov, so the one form that lost its e to an ending would fail to meet its own word. Dropping the e everywhere costs nothing, because both sides of every comparison lose it together - and it has to be dropped from the short words too, or love itself is the form left out.";
  "A doubled consonant at the end is cut back to one - stopped reaches stop - except for s, l, f and z, which are the letters an English word ends doubled in of its own accord. Without that exception crossed would reach cros and never meet cross.";
  ("This is a modest reader of endings, not the Porter algorithm. It sits behind ",
    fn_name("word_root"),
    ", which is the one seam its callers know, so a fuller stemmer can take its place there without a single caller changing.");
  let cut = w;
  if (greater_than(cut.length, 4)) {
    let endings = word_root_endings();
    function ending_matches(ending) {
      let held = cut.endsWith(ending.end);
      return held;
    }
    let matched = list_filter(endings, ending_matches);
    if (greater_than(matched.length, 0)) {
      let ending = list_first(matched);
      let keep = subtract(cut.length, ending.drop);
      cut = add(cut.slice(0, keep), ending.add);
    }
  }
  let last = cut.slice(-1);
  let before = cut.slice(-2, -1);
  let doubled = equal(last, before);
  let kept = "slfz".includes(last);
  if (doubled && not(kept) && greater_than(cut.length, 3)) {
    cut = cut.slice(0, -1);
  }
  if (cut.endsWith("e") && greater_than(cut.length, 3)) {
    cut = cut.slice(0, -1);
  }
  return cut;
}
