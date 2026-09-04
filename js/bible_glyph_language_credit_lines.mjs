import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { ebible_licence_words } from "./ebible_licence_words.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function bible_glyph_language_credit_lines(credit, changes) {
  arguments_assert(arguments, 2);
  ("One translation credited in the header of the file its words were written into - what it is called, who it belongs to, on what terms, what this app altered in it, and where it came from.");
  ("IT IS THE SAME BLOCK THE LICENCE CARD SHOWS A READER, in the same order, because the two are answering one question in two places. What the card puts in front of somebody using the app, this puts in front of somebody reading the source, and a licence that asks for attribution is not asking only of the audience it happens to be easiest to reach.");
  ("THE COPYRIGHT HOLDER'S OWN LINES ARE CARRIED ACROSS WHOLE and never retold, because that block is the thing the licence asks to travel with the text. A summary of a legal notice is not the notice.");
  ("EVERY LINE IS READ OFF THE TRANSLATION rather than spelled here. One sentence spelled here would be one claim made about every language at once, made before any of them was chosen - which is exactly how a generated file came to say for a year that it held a public-domain bible while holding two that were not.");
  ("THE CHANGE NOTICE GOES IN BECAUSE THE WORDS BELOW IT ARE ALTERED, and the first version of this said the opposite. It was written believing the writer fetched the publisher's own text; the road it fetches down had already put 87 missing spaces back, so the file held a repaired bible under a credit block that never mentioned it. The licence asks for the changes to be listed wherever the text is read, and a file in a repository is somewhere the text is read.");
  ("A BIBLE THIS APP DOES NOT ALTER GETS NO SUCH LINES, because a notice of alterations under scripture nobody altered says something false about somebody else's work.");
  let lines = [];
  let name = property_get(credit, "name");
  list_add(lines, name);
  let description = property_get(credit, "description");
  list_add(lines, description);
  let holder_lines = property_get(credit, "credit");
  function lambda(line) {
    list_add(lines, line);
  }
  each(holder_lines, lambda);
  let licence = property_get(credit, "licence");
  let words = ebible_licence_words(licence);
  let terms = text_combine_multiple(["The terms are ", words, "."]);
  list_add(lines, terms);
  let altered = null_not_is(changes);
  if (altered) {
    let changed_lines = property_get(changes, "lines");
    function changed_lambda(changed_line) {
      list_add(lines, changed_line);
    }
    each(changed_lines, changed_lambda);
    let changes_url = property_get(changes, "url");
    let listed = text_combine_multiple([
      "The changes are listed at ",
      changes_url,
      ".",
    ]);
    list_add(lines, listed);
  }
  let url = property_get(credit, "url");
  let where = text_combine_multiple(["It came from ", url, "."]);
  list_add(lines, where);
  return lines;
}
