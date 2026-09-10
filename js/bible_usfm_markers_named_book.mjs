import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_book_markers } from "./bible_usfm_book_markers.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { bible_usfm_marker_layout } from "./bible_usfm_marker_layout.mjs";
import { lambda_throws } from "./lambda_throws.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function bible_usfm_markers_named_book(
  version,
  book_code,
  usfm,
  unnamed,
) {
  arguments_assert(arguments, 4);
  ("$plain version");
  ("$plain book_code");
  ("$plain usfm");
  ("$plain unnamed");
  ("One whole book put through the reader that names line marks, with any refusal it makes added to the list handed in, and the count of marks it got through returned.");
  ("The refusal is caught rather than allowed to fly, because a check that dies at the first bad book says nothing about the sixty five behind it. What is wanted from a shelf sweep is every mark nobody has named, in one reading, so that naming them is one job rather than sixty six.");
  ("The whole reading is inside the catch, not merely the marks it hands back. The layout is asked its opinion twice on the way through - once while lines carrying nothing but a mark are joined onto the line beneath, and once here - so a refusal arrives from inside the survey as readily as from after it, and a catch drawn round only the second of those would have let the first past untold.");
  let markers = [];
  function lambda() {
    let found = bible_usfm_book_markers(usfm);
    list_add_multiple(markers, found);
    for (let marker of found) {
      bible_usfm_marker_layout(marker);
    }
  }
  let verdict = lambda_throws(lambda);
  let refused = property_get(verdict, "throws");
  if (refused) {
    let error_thrown = property_get(verdict, "result");
    let refusal = property_get(error_thrown, "message");
    let row = {
      version,
      book_code,
      refusal,
    };
    list_add(unnamed, row);
  }
  let marks = list_size(markers);
  return marks;
}
