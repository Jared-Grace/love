export function app_search_results_expand_more_is(buttons) {
  "Whether pressing open-everything on a page of search results would still bring anything new to it: any verse listed on the page whose words have not been fetched yet.";
  "THE BUTTON'S MAIN WORK IS NOT FOLDING. It opens the cards, and then it fetches the words of every verse inside them - and a page can land with every card already open and not one verse fetched, which is exactly what a search matching a single book does. Asked only about the cards, the button switched itself off there and left the reader looking at a list of references with nothing under any of them, and a button greyed out beside it saying there was nothing left to do.";
  arguments_assert(arguments, 1);
  let button_list = property_get(buttons, "list");
  ("the cards are drawn underneath the buttons and so exist after them; asked before the page is finished there is no list yet, and at that moment nothing has been fetched, which is the whole page still left to do");
  let none = null_is(button_list);
  if (none) {
    return true;
  }
  function button_unfetched_is(b) {
    let fetched = property_exists(b, "bible_texts");
    let unfetched = not(fetched);
    return unfetched;
  }
  let any = list_any(button_list, button_unfetched_is);
  return any;
}
