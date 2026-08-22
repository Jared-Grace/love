import { or } from "./or.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { app_shared_folds_shut_any } from "./app_shared_folds_shut_any.mjs";
import { app_shared_folds_open_any } from "./app_shared_folds_open_any.mjs";
import { not } from "./not.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_shared_buttons_expand_collapse_refresh(pair) {
  "switch a pair of open-everything and shut-everything buttons off when there is nothing left for them to open or to shut, and back on when there is.";
  "A BUTTON THAT DOES NOTHING IS WORSE THAN NO BUTTON. Pressed on a page where everything is already open, nothing moves, and the reader cannot tell whether the page is finished or the button is broken - so they press it again. Switched off, it answers that question before it is asked.";
  "Each button is asked about its own groups rather than about the page, because the two do not always act on the same cards: the search results open the sections and the books, and shut only the books.";
  arguments_assert(arguments, 1);
  function folds_shut_any(folds) {
    let shut_any = app_shared_folds_shut_any(folds);
    return shut_any;
  }
  function folds_open_any(folds) {
    let open_any = app_shared_folds_open_any(folds);
    return open_any;
  }
  let folds_expandable = list_any(pair.folds_expand, folds_shut_any);
  ("the page is asked its own question beside the cards, because opening is not only folding: the search results fetch the words of every verse as they open, and a page can stand with every card open and not one verse fetched");
  let more = pair.expand_more_is();
  let expandable = or(folds_expandable, more);
  let collapsible = list_any(pair.folds_collapse, folds_open_any);
  let disabled = not(expandable);
  app_shared_button_disabled_set(pair.expand, disabled);
  let disabled2 = not(collapsible);
  app_shared_button_disabled_set(pair.collapse, disabled2);
}
