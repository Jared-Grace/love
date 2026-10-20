import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { giveaway_psalms_item_subjects } from "./giveaway_psalms_item_subjects.mjs";
import { list_join_semicolon_space } from "./list_join_semicolon_space.mjs";
import { giveaway_psalms_language } from "./giveaway_psalms_language.mjs";
import { giveaway_psalms_files_date_or_null } from "./giveaway_psalms_files_date_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
export async function giveaway_psalms_plan_words(chapter, plan) {
  arguments_assert(arguments, 2);
  ("$plain chapter");
  ("$plain plan");
  ("Every word a psalm's page on archive.org is meant to carry, worked out from the plan, as a list of a name and what it should say.");
  ("★ THIS IS THE ONE PLACE THAT DECIDES WHAT A BOX'S PAGE SAYS, AND THAT IS THE WHOLE REASON IT EXISTS. There were two: the notes that ride along with the first file when a box is made, and the patch that mends the page of a box that has already gone out. Both were spelling out which words a page carries, which meant a word added to one was missing from the other - and the way that showed up was the worst way it could: a box made today would carry a word that every box made last month is still missing, and nothing anywhere would say so. Now both ask here, so a word added here reaches a new box and an old one by the same change.");
  ("★ A LIST OF NAMED SAYINGS RATHER THAN AN OBJECT OF THEM, BECAUSE THE ORDER IS PART OF THE ANSWER. The host keeps the order the words arrive in and prints them in it, so the order is something being chosen rather than something falling out of how a list was built. It also means the two readers downstream need nothing but a walk - no asking an object what names it has, which this repo has no word for.");
  ("★ A DAY NOBODY CAN WORK OUT LEAVES THE WORD OFF THE PAGE ENTIRELY, RATHER THAN PUTTING AN EMPTY ONE THERE. A box with no singing in it has no day the work was made, and the host would take an empty date and show it - a page saying its work was made on nothing at all is worse than a page not saying when it was made. So the list is shorter by one, and the patch downstream simply never names the word.");
  ("★ WHAT KIND OF BOX IT IS LIVES WITH THE MAKING AND NOT HERE, THOUGH IT LOOKS LIKE ONE OF THESE WORDS. The host treats that one as the sort of thing the box is rather than as a word on its page, and it is settled when the box comes into being. Sending it again in a patch at a box that already exists asks the host to reconsider what the box is, and a patch it refuses takes every other word down with it. So it is passed to the notes that make a box and never patched.");
  ("★ THE SUBJECTS GO AS ONE SAYING WITH SEMICOLONS BETWEEN THEM RATHER THAN AS SEVERAL SAYINGS. That is the host's own shorthand for a word that holds several, and it is the only shape that reads the same down both roads: a patch would take a real list, but the notes on a first file cannot - several of one word there have to be numbered one by one, and a reader that had to tell a list from a saying would be branching on what it was handed. One shape, two plain walks. If the host turns out to show the semicolons rather than splitting on them, the three words are all still there to be searched for and the mending is a rewrite of this one line - which is the cheap kind of wrong, since words on a page can be rewritten as often as anyone likes.");
  ("The licence is the one of these that is a promise and not just a word, so the only safe direction to ever change it is a freer one.");
  let words = [];
  list_add_multiple(words, [
    {
      name: "title",
      said: plan.title,
    },
    {
      name: "description",
      said: plan.description,
    },
    {
      name: "licenseurl",
      said: plan.licence_url,
    },
  ]);
  let subjects = giveaway_psalms_item_subjects(chapter);
  list_add_multiple(words, [
    {
      name: "subject",
      said: list_join_semicolon_space(subjects),
    },
    {
      name: "language",
      said: giveaway_psalms_language(),
    },
  ]);
  let day = await giveaway_psalms_files_date_or_null(plan.files);
  let b = null_is(day);
  let day_known_is = not(b);
  if (day_known_is) {
    list_add(words, {
      name: "date",
      said: day,
    });
  }
  return words;
}
