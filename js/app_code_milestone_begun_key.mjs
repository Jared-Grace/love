import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_milestone_begun_key() {
  arguments_assert(arguments, 0);
  ("where this tab writes the id of the milestone whose Begin was pressed - an id rather than yes or no, so opening a different milestone shows its own first screen without anything being cleared");
  let r = "milestone_begun";
  return r;
}
