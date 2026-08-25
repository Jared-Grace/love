import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { commit_edit_kind_shape_named } from "./commit_edit_kind_shape_named.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function commit_edit_prose_verb_named(commit) {
  "Which of the prose-writing verbs would have made one hand-made edit outright, or that no single one of them would have.";
  "COUNTING PROSE EDITS WAS NEVER THE QUESTION. Knowing that a paragraph was reworded by hand says nothing about whether a command was there to be reached for, and the reading beside this one stops exactly there. Three verbs write a prose line - one adds a line, one takes a line away, one puts different words in a line that is already there - so the answer worth having is which of the three fits, and how often none of them does.";
  "THE SHAPE OF THE DIFFERENCE DECIDES, and it decides completely. A line put in with none taken out is an addition and nothing else; a line taken out with none put in is a removal; one for one is a rewording of a single line, which is what the replacing verb does. Anything larger is a paragraph rewritten, where the count of lines changed and so no one verb spans it.";
  "THAT SHAPE IS WORKED OUT NEXT DOOR AND ONLY NAMED HERE, because the same counting decides it for the values written into a record, where the answers are different words about a different thing. What is left here is a vocabulary - one word of this reading's own for each shape there is - so a shape this reading has no verb for is answered rather than fallen through.";
  "AN EDIT THAT TOUCHED CODE IS NOT ASKED ABOUT AT ALL, because the question is what a prose verb would have made outright, and an edit that also changed code was never going to be made by one command whatever its prose looked like.";
  "A VALUE CHOSEN COUNTS WITH THE CODE and not with the prose, for the same reason the code does. A number raised in a record beside a reworded paragraph is still two changes, and no one prose verb makes two changes; whether a named command exists for the value is a real question, but it is a different one and answering it here would make this bucket say something it does not mean.";
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  let shape = await commit_edit_kind_shape_named(commit, "prose");
  let words = {
    "something else touched": "not prose alone",
    untouched: "no prose touched",
    "put in only": fn_name("function_prose_add"),
    "taken out only": fn_name("function_prose_remove"),
    "one for one": fn_name("function_prose_replace"),
    "several for several": "no one verb spans it",
    uneven: "no one verb spans it",
  };
  let named = property_get(words, shape);
  return named;
}
