import { function_work_none_is } from "./function_work_none_is.mjs";
import { not } from "./not.mjs";
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
  "Each group says whether its functions do any work, meaning they take something or call something. A group that does none can only be handing back a fixed value or nothing at all, and those are alike far more often than they are the same idea - the slash that divides two numbers and the slash that separates two words are one character and two ideas. They are marked rather than dropped, because a fixed value under two names is still one idea under two names; the gate holds the working groups to a ratchet and leaves these to a reader.";
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
      let first = names[0];
      let none = await function_work_none_is(first);
      let work = not(none);
      list_add(groups, {
        names,
        shape,
        work,
      });
    }
  }
  return groups;
}
