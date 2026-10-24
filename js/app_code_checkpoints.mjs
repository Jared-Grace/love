import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_numbers } from "./app_code_review_numbers.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_code_milestones } from "./app_code_milestones.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_checkpoints() {
  "every checkpoint standing between the lessons, each as the key it is filed under and the number of the lesson it stands under - the reviews first, filed by their number, then the milestones, filed by their id";
  "One list, so that anything walking every checkpoint - forgetting them, marking them finished - walks all of them. Asked as two lists, a kind added later was walked by the clearing and missed by both markings, and nothing went red.";
  arguments_assert(arguments, 0);
  let checkpoints = [];
  let numbers = app_code_review_numbers();
  function each_number(number) {
    list_add(checkpoints, {
      key: number,
      number,
    });
  }
  each(numbers, each_number);
  let milestones = app_code_milestones();
  function each_milestone(milestone) {
    let key = property_get(milestone, "id");
    let number = property_get(milestone, "number");
    list_add(checkpoints, {
      key,
      number,
    });
  }
  each(milestones, each_milestone);
  return checkpoints;
}
