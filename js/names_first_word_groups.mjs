import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function names_first_word_groups(names, minimum) {
  "the group each name puts itself in by its own FIRST WORD, for the names that share one with enough others - answered as a record from name to that word, and holding nothing for a name that groups with nobody.";
  "A GROUP NEEDS SEVERAL, which is what `minimum` says. One name alone under a heading of its own first word is a heading that says only what the name already said, and every reader pays to open it - so a first word earns a group by being shared, not by existing. Two is the usual answer.";
  "A name with no separator in it is a whole word already: it proposes no group, and is counted toward none. Asking it for its first word would answer with the name.";
  "Named for what it does to any list of underscore-separated names, because it knows nothing about what they name - a screen, a file, a function. Whoever asked decides what a group MEANS, and how to spell the heading.";
  let counts = {};
  let firsts = {};
  for (let name of names) {
    let words = text_split(name, "_");
    let more = greater_than(words.length, 1);
    if (not(more)) {
      continue;
    }
    let first = list_first(words);
    property_set(firsts, name, first);
    let counted = 0;
    let seen = property_exists(counts, first);
    if (seen) {
      counted = property_get(counts, first);
    }
    let value = add(counted, 1);
    property_set(counts, first, value);
  }
  let groups = {};
  for (let name of object_property_names(firsts)) {
    let first = property_get(firsts, name);
    let count = property_get(counts, first);
    let enough = greater_than_equal(count, minimum);
    if (not(enough)) {
      continue;
    }
    property_set(groups, name, first);
  }
  return groups;
}
