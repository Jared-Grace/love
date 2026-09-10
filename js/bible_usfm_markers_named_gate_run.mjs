import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_markers_named_shelf } from "./bible_usfm_markers_named_shelf.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_usfm_markers_named_row_unread_is } from "./bible_usfm_markers_named_row_unread_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function bible_usfm_markers_named_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that every usfm line mark written anywhere on this disk is named by one of the lists the layout reader consults, so no bible can hand a person a line nobody said.");
  ("THE READER NOW REFUSES A MARK IT DOES NOT KNOW, AND THIS IS THE OTHER HALF OF THAT. Refusing is only safe if nothing on the shelf is refused; without this, naming the marks would have turned a silent wrong answer into a loud failure in front of whoever asked for a psalm. So the shelf is read through the reader once, here, rather than by somebody who wanted to sing.");
  ("IT IS THE CHECK THE OLD FALL-THROUGH COULD NOT HAVE. A mark that was kept as text whatever it was could not be wrong, so there was nothing to check; a printers division label, Psalms 107-150, stood as the first line of a psalm for thirteen days and no gate could have seen it. The refusal is what makes the question askable, and this is the question.");
  ("IT REFUSES TO PASS WITHOUT HAVING READ ANYTHING. A bible that offers no books reads exactly like a bible whose marks are all named, because both come out with nothing to report; so every bible on the shelf is required to have given up at least one book before the empty list of refusals is believed.");
  ("How much was walked comes back beside the verdict, and not as the length of the list of refusals. A clean run and a blind one both hand back nothing to say, so the number that tells them apart has to be a count of what was read rather than a count of what was wrong.");
  let found = await bible_usfm_markers_named_shelf();
  let unnamed = property_get(found, "unnamed");
  let rows = property_get(found, "rows");
  let unread = list_filter(rows, bible_usfm_markers_named_row_unread_is);
  let all_read = list_empty_is(unread);
  assert_json(all_read, {
    unread,
    hint: "a bible on the shelf gave up no books at all, so its marks are unread rather than named; find where its books are written on this disk",
  });
  let all_named = list_empty_is(unnamed);
  assert_json(all_named, {
    unnamed,
    hint: "a line mark on the shelf is named by none of the lists the layout reader consults, so a reading of that book stops dead; name the mark in whichever list says what its line is",
  });
  let books_each = list_map_property(rows, "books");
  let books = list_sum(books_each);
  let marks_each = list_map_property(rows, "marks");
  let marks = list_sum(marks_each);
  let versions = list_size(rows);
  let walked = {
    versions,
    books,
    marks,
    rows,
  };
  return walked;
}
