import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export function gloss_root_row_note(holder, root, word, explain) {
  "$plain holder";
  "$plain root";
  "$plain word";
  "$plain explain";
  "One more sighting of one root, filed under that root: the row is started if this is the first time the root has been met, its count of sightings goes up by one, and the word it was met in joins the words listed beside it if it is not already there.";
  ("The other half of the turn ",
    fn_name("gloss_rows_ranked"),
    " completes. That one takes a finished gathering out from under the names it was filed by and puts the worst first; this one is what does the filing, and the two were written out again in every reading that gathered roots. Four readings held these same eleven lines.");
  ("The words are kept as a set rather than a count, because a root met in one word four hundred times and a root met in four hundred words are the same number and nothing like the same finding, and only the list of words tells them apart.");
  ("★ THE EXPLANATION KEPT IS THE FIRST ONE MET AND NEVER THE LAST. A root gathered across many entries has many sentences written about it and only one is carried, so read it as an example of how the root is written about rather than as the sentence for that root. Every reading here worked that way before this was one function, and keeping the first is what makes a second run over an unchanged store answer the same thing.");
  ("A reading that wants no explanation at all should not come here: the row would still carry the key, and an answer gaining a field it never had is a change to what somebody reads rather than a tidying. One reading beside these four is that shape and keeps its own gathering for exactly that reason.");
  ("Nothing is read off the disk and nothing is written to it. The holder handed in is changed in place, which is what lets a walk call this once per sighting and ask for the gathering at the end.");
  arguments_assert(arguments, 4);
  let row = property_get_or_null(holder, root);
  let fresh = null_is(row);
  if (fresh) {
    let made = {
      named_root: root,
      sightings: 0,
      words: [],
      explain: explain,
    };
    property_set(holder, root, made);
    row = made;
  }
  let seen = property_get(row, "sightings");
  let value = add(seen, 1);
  property_set(row, "sightings", value);
  let words = property_get(row, "words");
  list_add_if_not_includes(words, word);
}
