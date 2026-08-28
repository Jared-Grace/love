import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { or } from "./or.mjs";
export function app_code_lesson_family_file_names(root, roots, names) {
  arguments_assert(arguments, 3);
  ("the functions that belong to one lesson: every name beginning with the lesson's own, less the ones beginning with a longer lesson's name.");
  ("Without that subtraction a lesson eats its neighbour, and it was measured doing it: the string-order lesson took the string-order-equal lesson's question bank for its own and was then found guilty of never showing the <= that the other lesson exists to teach. A lesson's name is the prefix of its own helpers and of a longer lesson's name alike, and only the list of lessons tells those two apart.");
  let nested = [];
  for (let other of roots) {
    let same = equal(other, root);
    let under = text_starts_with(other, root);
    let right = not(same);
    let deeper = and(under, right);
    if (deeper) {
      list_add(nested, other);
    }
  }
  let found = [];
  for (let name of names) {
    let mine = text_starts_with(name, root);
    if (mine) {
      let taken = false;
      for (let other of nested) {
        let theirs = text_starts_with(name, other);
        taken = or(taken, theirs);
      }
      if (not(taken)) {
        list_add(found, name);
      }
    }
  }
  return found;
}
