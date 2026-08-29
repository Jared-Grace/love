import { arguments_assert } from "./arguments_assert.mjs";
import { text_loading_said } from "./text_loading_said.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { html_parent_waiting_run } from "./html_parent_waiting_run.mjs";
import { app_shared_bible_books_search_render } from "./app_shared_bible_books_search_render.mjs";
export async function bible_usfm_books_render(
  parent,
  version,
  book_code_current,
  on_book,
) {
  arguments_assert(arguments, 4);
  ("$plain parent");
  ("$plain version");
  ("$plain book_code_current");
  ("The searchable canon in front of a usfm bible: the same grouped testaments and sections both bible readers offer, drawn wherever the caller says and answering with whichever book was pressed.");
  ("THE PICKER IS THE READERS OWN AND NOT A SECOND ONE THAT LOOKS LIKE IT. Everything that makes it good took a long time to get right - the search box on top for somebody who knows the name, the sections for somebody who browses, the buttons growing as the list narrows, the book being worked on marked - and a page that drew its own would have started again at the bottom of that and stayed there. All that is passed in here is where to draw and what a press means, which is genuinely all that differs.");
  ("Which books to offer is asked of the machine serving the page rather than assumed, because a usfm shelf is a folder of files and only that machine can see it.");
  ("THE WAIT FOR THAT ANSWER IS SAID OUT LOUD. It is a fetch, so it can take long enough that the place this draws into sits empty, and an empty place after a press is indistinguishable from a press that did nothing at all. The same line is shown for the same reason on the chapters next door.");
  let said = text_loading_said("the books");
  let f_name = fn_name("bible_usfm_version_books");
  async function books_ask() {
    let asked = await app_shared_api_named(f_name, [version]);
    return asked;
  }
  let books = await html_parent_waiting_run(parent, said, books_ask);
  app_shared_bible_books_search_render(
    parent,
    books,
    on_book,
    book_code_current,
  );
}
