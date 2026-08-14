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
  "An ending is only cut where enough of the word is left standing, and how much is enough is the ending's own business - it is carried beside it as keep.";
  "What is measured is what REMAINS, not what went in, and that is the whole of the correction made on 2026-08-14. The guard used to ask whether the word was five letters long, which is a different question and got both halves wrong: acts is four letters and keeps its s, never meeting act, while thing is five and gives up ing to become th. Asking after the remainder answers both at once - acts loses its s and thing keeps everything, because th is not a word and act is.";
  "The remainder is the reason an ending can be passed over for a shorter one. Lies is not cut back by ies, which would leave one letter, so it falls through to the plain s and reaches lie.";
  "The endings are read longest first and the first that matches is the one taken, so witnesses gives up sses rather than s - and then the shortened word is asked again, until no ending matches at all.";
  "Asking again is what makes a plural of an ending-word meet its own root. Actions ends in s and not in ion, so one pass reached action while action itself reached act, and the two forms of one word failed to meet. Every word built on ion, ment or ness carried the same split, and it was the commonest miss left in the whole New Testament after the endings themselves were right.";
  "It always stops, because an ending that cuts nothing leaves the word exactly as it was and that is the signal to stop. Confession gives up its ion and becomes confess; confess ends in a doubled s, which is an ending that keeps every letter, so the next ask changes nothing and the reading ends there.";
  "A trailing e is dropped from whatever is left, and that is the point of this rather than an afterthought: love, loves and loved would otherwise reach love, love and lov, so the one form that lost its e to an ending would fail to meet its own word. Dropping the e everywhere costs nothing, because both sides of every comparison lose it together - and it has to be dropped from the short words too, or love itself is the form left out.";
  "A doubled consonant at the end is cut back to one - stopped reaches stop - except for s, l, f and z, which are the letters an English word ends doubled in of its own accord. Without that exception crossed would reach cros and never meet cross.";
  ("This is a modest reader of endings, not the Porter algorithm. It sits behind ",
    fn_name("word_root"),
    ", which is the one seam its callers know, so a fuller stemmer can take its place there without a single caller changing.");
  let cut = w;
  let endings = word_root_endings();
  function ending_matches(ending) {
    let held = cut.endsWith(ending.end);
    let keep = subtract(cut.length, ending.drop);
    let b = greater_than(ending.keep, keep);
    let enough = not(b);
    let r = held && enough;
    return r;
  }
  let more = true;
  while (more) {
    more = false;
    let matched = list_filter(endings, ending_matches);
    if (greater_than(matched.length, 0)) {
      let ending = list_first(matched);
      let keep = subtract(cut.length, ending.drop);
      let left = cut.slice(0, keep);
      let shorter = add(left, ending.add);
      if (not(equal(shorter, cut))) {
        cut = shorter;
        more = true;
      }
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
