import { functions_duplicates_group_kind } from "./functions_duplicates_group_kind.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_shape } from "./function_shape.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
export async function functions_duplicates() {
  "Every group of functions that do the same thing under different names. Small functions written by many hands at once produce these on their own - two people reach for the same idea, one names it one way and one another, and until now nothing in the repo could tell them they had met.";
  "Sameness is decided by what a function does with its own name, its private names and its prose taken away, so the two spellings of one idea land on the same text. What it is not decided by is the name, which is the thing in dispute.";
  "This reads and reports and changes nothing. Whether a group really is one idea twice, or two ideas that happen to be shaped alike, is a judgment - and once made, the collapse already has a transform waiting for it.";
  "Each group says what sort of thing its functions are - an unwritten placeholder, a fixed value, or real work. Only the last is held to a ratchet. The other two are alike far more often than they are the same idea: the slash that divides two numbers and the slash that separates two words are one character and two ideas, and every unwritten function is unwritten in the same way. They are marked rather than dropped, because a fixed value under two names is still one idea under two names, and a pile of placeholders is a backlog worth seeing; the gate holds the working groups and leaves these to a reader.";
  let love = await repo_functions_names("love");
  let by_shape = {};
  for (let name of love) {
    let shape = await function_shape(name);
    let known = property_exists(by_shape, shape);
    if (known) {
      let names = property_get(by_shape, shape);
      list_add(names, name);
    } else {
      by_shape[shape] = [name];
    }
  }
  let shapes = properties_get(by_shape);
  let groups = [];
  for (let shape of shapes) {
    let names = property_get(by_shape, shape);
    let shared = list_multiple_is(names);
    if (shared) {
      let kind = await functions_duplicates_group_kind(names);
      list_add(groups, {
        names,
        shape,
        kind,
      });
    }
  }
  return groups;
}
