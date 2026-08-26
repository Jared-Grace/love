export function markdown_heading_font_sizes() {
  "How big a markdown heading is written, one size per level of hash marks,";
  "largest first.";
  "A ladder rather than four values. What each step is worth is decided by the";
  "step above and the step below it and by nothing else, so the four are one";
  "thing with one name, and reading any of them on its own tells a reader";
  "nothing about why it is that number.";
  "Named here because two of the steps collide by coincidence with sizes chosen";
  "elsewhere for something else entirely - a screen's title, a gap between two";
  "drawn cups - and a report of repeated spellings has no way to tell a shared";
  "constant from a collision. Under a name of its own the ladder stops being";
  "offered as a copy of somebody else's number.";
  "The last step is the smallest heading there is, and a document nesting deeper";
  "than four levels of hash marks reads every level past the fourth at that same";
  "size. That is the reader's decision rather than this list's, and it is why the";
  "list is allowed to be shorter than the levels somebody might write.";
  let sizes = ["1.5em", "1.3em", "1.15em", "1.05em"];
  return sizes;
}
