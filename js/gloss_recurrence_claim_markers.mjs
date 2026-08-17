export function gloss_recurrence_claim_markers() {
  "The turns of phrase an explanation uses when it says how often, or how many times over, a word stands in its own chapter.";
  "A claim of this shape is a matter of fact and the chapter settles it, which is what makes it worth finding. Everything else an explanation says about a word is judgment, and no phrase can tell a good judgment from a poor one.";
  "They are matched against wording already lowered, so each is written in lower case here. Each one carries the space that has to stand before it, and the wording it is matched against is given a space at the front, so a phrase opening a sentence still finds one.";
  "Each has to be a phrase that can only be counting. 'first' and 'last' stand alone in a great deal of ordinary explaining - the first letter of the root, the last part of the word - so they are on the list only where an article or a noun of counting stands with them.";
  "This is a net and not a verdict. A sentence caught here is one worth reading beside the chapter, and most of what it catches will be right.";
  let markers = [
    " the only",
    " only time",
    " only word",
    " only verse",
    " the first time",
    " the second time",
    " the third time",
    " the last time",
    " the first verse",
    " the second verse",
    " the third verse",
    " the last verse",
    " the first and",
    " the second and",
    " the third and",
    " the last of",
    " and last",
    " once more",
    " once again",
    " twice",
    " three times",
    " four times",
    " five times",
    " six times",
    " seven times",
    " every time",
    " each time",
    " both times",
    " verses running",
    " running to",
    " throughout the chapter",
    " whole chapter",
    " whole poem",
    " never named",
    " never again",
    " nowhere else",
    " anywhere else",
  ];
  return markers;
}
