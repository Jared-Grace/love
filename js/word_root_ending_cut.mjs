export function word_root_ending_cut(w) {
  "The word left when a plain English ending is cut off it - the plural s, the past ed, the ing, the ly.";
  "An ending is only cut off a word of five letters or more, because cutting two letters off a four-letter word reaches something that is no longer a word at all.";
  "A trailing e is dropped from whatever is left, and that is the point of this rather than an afterthought: love, loves and loved would otherwise reach love, love and lov, so the one form that lost its e to an ending would fail to meet its own word. Dropping the e everywhere costs nothing, because both sides of every comparison lose it together - and it has to be dropped from the short words too, or love itself is the form left out.";
  "A doubled consonant at the end is cut back to one - stopped reaches stop - except for s, l, f and z, which are the letters an English word ends doubled in of its own accord. Without that exception crossed would reach cros and never meet cross.";
  "This is a modest reader of endings, not the Porter algorithm. It sits behind word_root, which is the one seam its callers know, so a fuller stemmer can take its place there without a single caller changing.";
  let cut = w;
  if (cut.length > 4) {
    if (cut.endsWith("ies")) {
      cut = cut.slice(0, -3) + "y";
    } else if (cut.endsWith("sses")) {
      cut = cut.slice(0, -2);
    } else if (cut.endsWith("ches") || cut.endsWith("shes") || cut.endsWith("xes")) {
      cut = cut.slice(0, -2);
    } else if (cut.endsWith("s") && !cut.endsWith("ss") && !cut.endsWith("us")) {
      cut = cut.slice(0, -1);
    } else if (cut.endsWith("ing")) {
      cut = cut.slice(0, -3);
    } else if (cut.endsWith("ed")) {
      cut = cut.slice(0, -2);
    } else if (cut.endsWith("ly")) {
      cut = cut.slice(0, -2);
    }
  }
  let last = cut.slice(-1);
  let before = cut.slice(-2, -1);
  let doubled = last === before;
  let kept = "slfz".includes(last);
  if (doubled && !kept && cut.length > 3) {
    cut = cut.slice(0, -1);
  }
  if (cut.endsWith("e") && cut.length > 3) {
    cut = cut.slice(0, -1);
  }
  return cut;
}
