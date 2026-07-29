import { function_rename } from "./function_rename.mjs";
export function argument_alias_groups() {
  "The short spellings an argument accepts, gathered into named groups.";
  "A fn name can be typed short or long - one letter at the keyboard, the whole name in a rule or a commit - and an argument value had no such thing, so a value was either cryptic or long-winded and never both. Each group here maps a short word to the full one, so somebody who knows types the letter and somebody who does not types the word, and both reach the same value.";
  ("Groups exist so the short words can repeat. A letter is only scarce inside the set it is read against, so o may mean one thing where a screen is being shown and something else entirely in a group about ordering. Sharing one table across every argument would spend the whole alphabet on whichever parameter asked first.");
  ("The full spelling is deliberately absent from the mapping. It is accepted because it is the value itself, not because a row here says so, which keeps a group from ever disagreeing with itself about what a value is called.");
  let show = argument_alias_group_show();
  let groups = {};
  groups[show] = {
    o: "open",
    p: "print",
  };
  return groups;
}
