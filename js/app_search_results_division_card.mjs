import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_code_to_division } from "./ebible_book_code_to_division.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_container_blue_medium_titled } from "./app_shared_container_blue_medium_titled.mjs";
export function app_search_results_division_card(
  book_code,
  division_current,
  div_books,
  testament_folds,
) {
  arguments_assert(arguments, 4);
  ("which section card this book's own card belongs in, nesting the results the same way choosing a book does: a testament card holding section cards holding the books. the results arrive sorted by section, so crossing into a new one is exactly when its card is opened - no card is opened twice and none is opened for a section nothing matched");
  let division = ebible_book_code_to_division(book_code);
  let testament_name = property_get(division, "testament");
  let division_name = property_get(division, "name");
  let testament_same = equal(testament_name, division_current.testament_name);
  if (not(testament_same)) {
    division_current.testament_name = testament_name;
    division_current.division_name = null;
    let collapsible = app_shared_folds_collapsible(
      testament_folds,
      div_books,
      testament_name,
    );
    division_current.testament_body = property_get(collapsible, "body");
  }
  let division_same = equal(division_name, division_current.division_name);
  if (not(division_same)) {
    division_current.division_name = division_name;
    division_current.division_body = app_shared_container_blue_medium_titled(
      division_current.testament_body,
      division_name,
    );
  }
  let r = division_current.division_body;
  return r;
}
