import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_above_text_or_null } from "./app_code_lesson_source_above_text_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { text_includes } from "./text_includes.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
export async function app_code_lesson_family_telling_bank_asked(
  source,
  counted,
  telling,
) {
  "Splits the functions a lesson counts on into the ones its own words already name and the ones a learner is being asked to supply, handing back that second list. It follows mentions outward rather than stopping at the first layer: a name found in the words above the lesson is read in turn and whatever that names is followed too, because a function named in something the lesson hands the learner has been told to them just as surely as one named on the page. What is left over after that walk is the bank of names the lesson is really asking for.";
  arguments_assert(arguments, 3);
  let above_text = app_code_lesson_source_above_text_or_null(source);
  let some = null_not_is(above_text);
  if (some) {
    let front = [above_text];
    while (list_empty_not_is(front)) {
      let next = [];
      for (let text of front) {
        for (let name of counted) {
          let fresh = list_includes_not(telling, name);
          let mentioned = text_includes(text, name);
          let take = and(fresh, mentioned);
          if (take) {
            list_add(telling, name);
            let reached = await repo_love_function_read(name);
            list_add(next, reached);
          }
        }
      }
      front = next;
    }
  }
  let bank = [];
  for (let name of counted) {
    let asked = list_includes_not(telling, name);
    if (asked) {
      list_add(bank, name);
    }
  }
  return bank;
}
