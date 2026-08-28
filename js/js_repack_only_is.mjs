import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_silent_is } from "./js_repack_only_is_silent_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_repack_only_is_unfound_is } from "./js_repack_only_is_unfound_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_repack_only_is_few_is } from "./js_repack_only_is_few_is.mjs";
import { js_repack_only_is_made } from "./js_repack_only_is_made.mjs";
import { js_repack_only_is_counted } from "./js_repack_only_is_counted.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_repack_only_is_busy_is } from "./js_repack_only_is_busy_is.mjs";
export function js_repack_only_is(declaration) {
  "Whether a function's whole product is a record it took apart and put back together - every name it hands back lifted out of something else with the getter, and at most one thing actually done besides.";
  "A function like this reads as work and is none. It is handed a record, or calls one thing that makes one, lifts each entry out under a name of its own, and builds an equal record out of those names. Whoever called it could have read the entries where they already were. What the file buys is a line count and a name.";
  "It is not free. Each entry costs a line to lift and a word to put back, so a body of this shape grows with the number of entries rather than with the amount of work, and the growth lands in whatever page ships the caller. One of these went in beside seven others in a single sweep and carried the page it was on past the size it is allowed to be.";
  "Six things must all hold, and each is there to keep an honest function out. Exactly one place hands a value back, which also means no lambda anywhere - a tree with a lambda in it is doing something this reading has no opinion about. What it hands back is a record written out, reached through one name if it was set on a line of its own. Two entries at least, because one entry is not a repack. Every entry written short, because an entry given a value at the brace is a value being made rather than moved. At least one entry set, in this same function, from a call to the getter - that is the whole of the claim, and it is what makes this a repack rather than merely a function returning a record. And at most one entry that is neither lifted nor left empty.";
  "At most one other thing done, matching that one entry, so that a function which really does something and happens to hand back some of what it was given is left alone. Nought means the thing was taken apart and put back with nothing done to it at all; one means a single piece of work with lifting and putting back on either side of it, which is the shape a cut leaves behind.";
  "A thing done is looked for in two shapes, because a body works in two. A line binding a plain name to a plain call is one. A line doing something and binding no name at all is the other - painting a screen, walking a list, asking a question about what was handed in. Reading only the first called a page painter and a list walker pure repacks, which is the opposite of what this is for. Lifting a name out, and the one line handing the record back, are the product rather than work, so neither is counted.";
  "THE ENTRIES ARE WALKED NEXT DOOR, and nothing back from that walk means one of them settled the reading on its own. Three unrelated things end it there - an entry made at the brace, an entry moved from nowhere, an entry left empty and filled in later - and none of them can be weighed against a count, so the walk hands back nothing rather than a number.";
  arguments_assert(arguments, 1);
  let r4 = js_repack_only_is_silent_is(declaration);
  let silent_is = property_get(r4, "silent_is");
  let node = property_get(r4, "node");
  if (silent_is) {
    return false;
  }
  let r = js_repack_only_is_unfound_is(node, declaration);
  let answer = property_get(r, "answer");
  let unfound_is = property_get(r, "unfound_is");
  if (unfound_is) {
    return false;
  }
  let record_is = js_node_type_is(answer, "ObjectExpression");
  if (not(record_is)) {
    return false;
  }
  let r3 = js_repack_only_is_few_is(answer);
  let properties = property_get(r3, "properties");
  let few_is = property_get(r3, "few_is");
  if (few_is) {
    return false;
  }
  let r2 = js_repack_only_is_made(declaration);
  let getter = property_get(r2, "getter");
  let assigned = property_get(r2, "assigned");
  let started = property_get(r2, "lifted");
  let done = property_get(r2, "made");
  let counted = js_repack_only_is_counted(
    declaration,
    properties,
    getter,
    assigned,
    started,
    done,
  );
  let settled_is = null_is(counted);
  if (settled_is) {
    return false;
  }
  let lifted = property_get(counted, "lifted");
  let made = property_get(counted, "made");
  let empty_is = equal(lifted, 0);
  if (empty_is) {
    return false;
  }
  ("One entry may be something genuinely new, matching the one call the body is allowed. That is the shape a cut leaves when it takes a run of lines holding a single piece of work: the work becomes one line and everything around it becomes lifting and putting back. Eighteen lines of lifting to carry one new value through is the same waste as eighteen carrying none, and refusing to see it would leave the worst of them unnamed.");
  let mixed_is = greater_than(made, 1);
  if (mixed_is) {
    return false;
  }
  let busy_is = js_repack_only_is_busy_is(declaration, getter);
  if (busy_is) {
    return false;
  }
  return true;
}
