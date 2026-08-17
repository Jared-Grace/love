import { js_functions_nested_named } from "./js_functions_nested_named.mjs";
import { js_functions_named_ambiguous_is } from "./js_functions_named_ambiguous_is.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { js_node_self_read_is } from "./js_node_self_read_is.mjs";
import { js_special_arguments } from "./js_special_arguments.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
export async function js_function_lift_wrapper_refusals(ast, declaration) {
  arguments_assert(arguments, 2);
  ("Every reason there is not to move this function's body out and leave its name behind holding one line that calls it. Empty means there is none.");
  ("One judgement, asked by two askers. The move asks it to decide whether to go ahead or say why not; the report of what could be moved asks the same question of every function written inside another one, without moving anything. Two copies of this would drift, and the drift would show up as a report promising a move that then refuses - the worst kind of list, because acting on it costs a whole command to learn it was wrong.");
  ("Nothing here is a fault. Each one is a shape this move cannot keep the meaning of, and each says what somebody could do first to make it one that can.");
  ("Each one carries a short word for its shape alongside the sentence. The sentence is for whoever is turned down and reads it once; the word is for counting one shape across the whole repo, which a sentence cannot be counted by - a reading that tallied prose would come apart the first time a sentence was made kinder.");
  let refusals = [];
  let reading = await js_function_nested_lift_reading(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let written_closed = property_get(reading, "written_closed");
  let written_is = list_empty_not_is(written_closed);
  if (written_is) {
    list_add(refusals, {
      reason: "written_closed",
      why: "this function writes to a name it reached out for, and a parameter would only be a copy of it, so the write would stop reaching the line waiting to read it. Would you like it to hand the new value back instead?",
      written_closed,
    });
  }
  ("Read from the same list the move's own finder will read, so the two cannot disagree about a word. Three functions inside one of these answered to lambda2 at once - names handed out to nameless functions are kept apart only within the file as it stood when each was handed out - and the finder stopped the whole walk on the first of them rather than this saying so first.");
  let named = js_functions_nested_named(ast);
  let ambiguous_is = js_functions_named_ambiguous_is(named, name_old);
  if (ambiguous_is) {
    list_add(refusals, {
      reason: "name_ambiguous",
      why: "more than one function written inside this one answers to the same word, so there is no way to say which of them was meant. Would you like to give the one you mean a name of its own first?",
      name_old,
    });
  }
  ("Asked of the body alone rather than of the whole function, because a name is written once at the head of every function and a reading that counted that would call every one of them a function that calls itself.");
  let block = property_get(declaration, "body");
  let itself = js_identifiers_named(block, name_old);
  let itself_is = list_empty_not_is(itself);
  if (itself_is) {
    list_add(refusals, {
      reason: "calls_itself",
      why: "this function calls itself, and the name it calls itself by would be left behind on the line that calls the moved body, where the moved body cannot see it. Would you like to hand it in as one more thing it is given?",
    });
  }
  ("Asked of the body alone for the same reason as the name above: the word stands at the head of every function this repo writes, where it names that function's own list and not this one's.");
  let word = js_special_arguments();
  let given = js_identifiers_named(block, word);
  let given_is = list_empty_not_is(given);
  if (given_is) {
    list_add(refusals, {
      reason: "arguments_read",
      why: "this function reads the whole list of what it was given, under the one word that always means that list. Moved out it is given more than it used to be - everything it reached out for arrives as one more thing handed in - so that word would answer with a longer list than the one the body was written to read. Would you like it to name what it is given instead?",
    });
  }
  let self_is = js_node_self_read_is(block);
  if (self_is) {
    list_add(refusals, {
      why: "this function reads the word for whatever it was called on, and that word is answered by the call rather than by where the function is written. A function written as a value under a name is called on the thing holding it, and the same body standing on its own is called on nothing, so the word would quietly change what it means. Would you like it to be handed what it needs by name instead?",
    });
  }
  let generator_is = property_get(declaration, "generator");
  if (generator_is) {
    list_add(refusals, {
      why: "this function hands its answers back one at a time as they are asked for, and the line left behind would call the moved body once and hand back the whole thing that does the handing rather than being it. Moving one of these needs the line left behind to pass every request along, which is not what this move writes.",
    });
  }
  let param_names = property_list_map(
    declaration,
    "params",
    js_identifier_name_try,
  );
  let pattern_is = list_includes(param_names, null);
  if (pattern_is) {
    list_add(refusals, {
      why: "one of this function's parameters pulls a value apart rather than naming it, and the line left behind has to spell every parameter out to pass it on. Would you like to give that parameter a plain name first?",
    });
  }
  return refusals;
}
