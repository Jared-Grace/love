import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { commit_edit_kind_shape_named } from "./commit_edit_kind_shape_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function commit_edit_value_shape_named(commit) {
  "What shape of change one hand-made edit made to the values written out in a file, or that it did not change values alone.";
  "VALUES ARE THE LARGEST HAND-MADE KIND THAT IS NOT MISSING CODE, and until this nothing said what was being done to them. Counting them said only that they were touched; whether one command could have made the change turns entirely on whether entries were added, entries were taken away, or a value already there was written over, so the count on its own carries no verdict at all.";
  "THE SHAPE OF THE DIFFERENCE DECIDES, exactly as it does for the paragraphs. Lines put in with none taken out is an addition; lines taken out with none put in is a removal; one for one is a value written over. Several for several is a record rewritten, and no single verb writes a record.";
  "AN EDIT THAT TOUCHED ANYTHING ELSE IS NOT ASKED ABOUT, because the question is what one command would have made outright and an edit that also changed a paragraph or a line of program was never going to be made by one whatever its values look like.";
  "WHICH VERB IS NOT NAMED HERE, and that is a limit rather than an omission. An entry of a list and a named part of a record are added by two different verbs, and a changed line on its own does not always say which of the two it was; the shape is what the case for building rests on, and the shape is answerable.";
  "THAT SHAPE IS WORKED OUT NEXT DOOR AND ONLY NAMED HERE, because the same counting decides it for the paragraphs written for a reader, where the answers are different words about a different thing. What is left here is a vocabulary - one word of this reading's own for each shape there is.";
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  let shape = await commit_edit_kind_shape_named(commit, "data");
  let words = {
    "something else touched": "not values alone",
    untouched: "no values touched",
    "put in only": "entries added",
    "taken out only": "entries taken out",
    "one for one": "one value put in place of another",
    "several for several": "several values put in place of others",
    uneven: "no one verb spans it",
  };
  let named = property_get(words, shape);
  return named;
}
