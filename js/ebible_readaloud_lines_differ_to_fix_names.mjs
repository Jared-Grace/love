import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_differ_names } from "./ebible_readaloud_lines_differ_names.mjs";
import { ebible_readaloud_lines_differ_as_published_names } from "./ebible_readaloud_lines_differ_as_published_names.mjs";
import { list_difference } from "./list_difference.mjs";
export async function ebible_readaloud_lines_differ_to_fix_names() {
  arguments_assert(arguments, 0);
  ("Every chapter whose reading-aloud lines and whose page's verse marks disagree and where something could still be done about it, each named by its bible and its chapter together.");
  ("The whole list of disagreeing chapters, less the ones already proved to have been published that way. What is left is what is worth a person's time: a chapter here has either not been looked at yet or has a cause that lies on this side of the download.");
  ("Kept apart because one list cannot carry two pieces of advice. A ratchet over the whole lot says look at the chapter and put it right, and it says that just as firmly about a chapter whose publisher only ever released its first three verses - which is an instruction nobody can follow, given about seventeen chapters out of twenty-two, in a list that then has to be believed about the other five.");
  ("Neither list forgives anything. A chapter published short is still a chapter no reader is shown, and it is still watched - by the check that every name over there is a name that really does still disagree. What changes is only which of the two things somebody is being asked to do about it.");
  let names = await ebible_readaloud_lines_differ_names();
  let as_published = await ebible_readaloud_lines_differ_as_published_names();
  let to_fix = list_difference(names, as_published);
  return to_fix;
}
