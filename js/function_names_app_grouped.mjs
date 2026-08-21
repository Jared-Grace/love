import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export function function_names_app_grouped(f_names, app_names) {
  arguments_assert(arguments, 2);
  ("A list of function names sorted into piles under the app that owns each, with the ones no app owns left out altogether.");
  ("IT IS THE JUDGING A PROMOTION RESTS ON, taken out on its own so that it can be checked. Whether a function may be moved into the shared namespace is decided by which apps appear in this answer and by how much of each - so this is the step that has to be right, and it was the step being done by eye over a printed list. Reading it out of a list that had been shortened for the screen once gave an answer with a fifth of the names in it, and a closure that small is exactly what makes an unsafe move look proved.");
  ("IT IS GIVEN BOTH LISTS RATHER THAN FETCHING EITHER, which is what lets it be asked with names that are simply made up. Everything around it reads the repo, so every answer it could give would otherwise change the next time anybody edited an import, and a check written over an answer like that goes red for reasons that have nothing to do with it. Handed two plain lists it is a question with a fixed answer, and the same names sorted the same way tomorrow.");
  ("THE ONES NOBODY OWNS ARE DROPPED RATHER THAN GATHERED under a name of their own. They are the shared code and the plain machinery, which is most of the repo and none of the question - a move is never blocked by them, because they belong to nobody and so come along with anybody.");
  let owned = {};
  for (let f_name of f_names) {
    let app_name = function_name_app_try(f_name, app_names);
    let nobody = text_empty_is(app_name);
    if (nobody) {
      continue;
    }
    let seen = property_exists(owned, app_name);
    if (not(seen)) {
      property_set(owned, app_name, []);
    }
    let held = property_get(owned, app_name);
    list_add(held, f_name);
  }
  return owned;
}
