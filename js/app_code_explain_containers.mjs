import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_code_explain_containers(groups) {
  "One lesson's explain list built a container at a time: a group of lines per light blue container, with the mark that starts a new one put between the groups rather than typed in among the writing.";
  "★ THE MARK IS WRITTEN HERE ONCE SO THAT NO LESSON WRITES IT TWICE. The gate over registers went red on the first lesson with four containers: the mark is spelled once per break, and a list of twenty-three names is read as a register of things each to be done once. Both of the gate's answers were open - excuse that lesson by name in a let-off list, or stop the list spelling the mark more than once. The second was taken. A let-off is a claim somebody types once and nobody reads again, this gate is held to zero on purpose, and the excuse would have been rewritten for every later lesson with three containers in it.";
  "The reading it hands back is the one a lesson used to write out by hand. The mark is compared by identity and never called, so laying it between the groups gives back the same list in the same order, and nothing that reads an explain can tell the two apart.";
  "A group is a shape rather than a register, which is what makes a line shown in two containers nobody's mistake: it is written in two groups, each of them short, and the gate asks its question of registers alone.";
  arguments_assert(arguments, 1);
  let explain = [];
  let first = true;
  for (let group of groups) {
    if (not(first)) {
      list_add(explain, app_code_explain_container_next);
    }
    first = false;
    list_add_multiple(explain, group);
  }
  return explain;
}
