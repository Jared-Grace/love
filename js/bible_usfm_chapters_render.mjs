import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_code_label } from "./ebible_book_code_label.mjs";
import { text_loading_said } from "./text_loading_said.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { html_parent_waiting_run } from "./html_parent_waiting_run.mjs";
import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
export async function bible_usfm_chapters_render(
  parent,
  version,
  book_code,
  on_chapter,
) {
  arguments_assert(arguments, 4);
  ("$plain parent");
  ("$plain version");
  ("$plain book_code");
  ("The chapters of one book of a usfm bible as the carded numbers both bible readers show, drawn wherever the caller says and answering with whichever chapter was pressed.");
  ("NO CHAPTER IS MARKED AS THE ONE BEING READ, and that is the truth here rather than a thing left undone. This is reached by asking to choose a passage, so at the moment it is drawn there is no chapter being worked on - the choice is the thing about to be made.");
  ("Which chapters to offer is asked of the machine serving the page, on the same footing as the books before it: a bible that does not carry a chapter leaves it off rather than offering it and opening on nothing.");
  ("THE WAIT FOR THAT ANSWER IS SAID OUT LOUD, because it is long enough to be mistaken for nothing happening. Measured over the dev machine it runs to several seconds, and for all of them the place this draws into was simply empty - which is what a button that did not work also looks like. It fooled the person writing this twice, who had the network in front of them; somebody with only the screen has no way at all to tell, and their one move against a dead control is to press it again.");
  ("The line names the book rather than saying only that something is loading, so pressing the chapter button and pressing the book button do not read the same.");
  let book_name = ebible_book_code_label(book_code);
  let said = text_loading_said("the chapters of " + book_name);
  let f_name = fn_name("bible_usfm_version_book_chapter_codes");
  async function chapter_codes_ask() {
    let asked = await app_shared_api_named(f_name, [version, book_code]);
    return asked;
  }
  let chapter_codes = await html_parent_waiting_run(
    parent,
    said,
    chapter_codes_ask,
  );
  let current_chapter_code = "";
  app_shared_bible_chapters_card(
    parent,
    book_name,
    chapter_codes,
    on_chapter,
    current_chapter_code,
  );
}
