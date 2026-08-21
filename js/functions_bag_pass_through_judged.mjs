import { arguments_assert } from "./arguments_assert.mjs";
import { functions_bag_carry_verdict } from "./functions_bag_carry_verdict.mjs";
import { functions_bag_pass_through } from "./functions_bag_pass_through.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_bag_pass_through_judged() {
  arguments_assert(arguments, 0);
  ("Every place where a record's names are carried through by hand, sorted by what would actually happen if the carrying were replaced by handing the record over whole and adding the new names on top of it.");
  ("The replacement is only the same piece of work when the record that arrives holds exactly the names that were taken out of it - no more and no fewer. One name more and handing it over whole quietly puts that name into the record being built, where nothing wrote it and nothing expects it. One name fewer and a name is being read out of a record that never held it, which is a fault where it stands and is not this to fix.");
  ("With the names settled, what is left is their order, and that is asked as one question rather than two. Handing the record over whole puts its maker's names first in its maker's order and the new ones after them; writing them out by hand puts all of them wherever the hand put them. Those agree only when the hand happened to write the carried names first, in that same order, and the new ones behind. Where they agree the replacement is invisible. Where they do not it is a real change of order, and whether anybody minds is a question about the readers rather than about this.");
  ("The judging of one carrying is held one name down, and what is done here is only the counting and the filing under names. Which of the six words a carrying earns is a question about that carrying alone, and asking it somewhere else is what lets the same answer be gated over later without any of this being written a second time.");
  ("Three of the six lists are handed back whole and three are only counted. A word that names something to go and do is worth reading name by name; a word naming what could not be reached is worth knowing the size of and nothing more.");
  let offenders = await functions_bag_pass_through();
  let unmade = [];
  let unread = [];
  let extra = [];
  let absent = [];
  let same = [];
  let reordered = [];
  let filed = {
    unmade,
    unread,
    extra,
    absent,
    same,
    reordered,
  };
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let carried = property_get(offender, "pass_through");
    for (let one of carried) {
      let word = await functions_bag_carry_verdict(one);
      let list = property_get(filed, word);
      list_add(list, f_name);
    }
  }
  let counted = {
    same_count: same.length,
    reordered_count: reordered.length,
    extra_count: extra.length,
    absent_count: absent.length,
    unmade_count: unmade.length,
    unread_count: unread.length,
    same,
    reordered,
    absent,
  };
  return counted;
}
