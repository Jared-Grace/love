import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_family_neighbours(roots) {
  "Every name that is a lesson in its own right, so a lesson being judged does not claim another lesson's files because its name starts the same way: the judged lessons and every lesson the code app lists.";
  "★ THE LESSONS JUDGED AND THE LESSONS SUBTRACTED ARE DIFFERENT LISTS. Only lessons built directly on the expression maker are judged, but a lesson built some other way is still a neighbour. The not lesson was found guilty of never showing the >= that a wrong answer in the not-equal-same lesson writes, because that lesson is built on the base maker, so it was not on the judged list and its files fell to the shorter name.";
  "Judging all of them instead was measured and is a different question: it names six more lessons, because the check was only ever written for the shape the judged ones have.";
  let fns = app_code_lessons_fns();
  let listed = list_map_property(fns, "name");
  let all = list_concat(roots, listed);
  let unique = list_unique(all);
  return unique;
}
