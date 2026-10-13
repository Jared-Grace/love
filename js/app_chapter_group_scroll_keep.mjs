import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_body_page_or_null } from "./html_scroll_body_page_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { property_get } from "./property_get.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
import { html_scroll_top_get } from "./html_scroll_top_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { property_set } from "./property_set.mjs";
export function app_chapter_group_scroll_keep(path) {
  "$plain path";
  "Puts the reader back as far down the chapter as they had come, and from then on keeps filing how far down they are, so loading the page again does not send them to the top of a long chapter they were halfway through dividing.";
  "The place is filed under the chapter and its folder. A distance means nothing down a chapter it was not measured against, so a different chapter is left at its top.";
  "It is run once the chapter and its groups are drawn, because only then is the page as long as it was when the distance was measured. Nothing is filed before that, which keeps the first moment of the page, standing at the top, from being filed over yesterday's place.";
  "The scrolling box holds one listener and each chapter takes it over, so a chapter left behind stops filing.";
  arguments_assert(arguments, 1);
  let body = html_scroll_body_page_or_null();
  if (null_is(body)) {
    return;
  }
  let place = storage_local_get(app_chapter_group_scroll_keep, "place");
  let kept = null_not_is(place);
  if (kept && property_get_or_null_equal(place, "path", path)) {
    let scroll_top = property_get(place, "scroll_top");
    html_scroll_top_set(body, scroll_top);
  }
  function file() {
    let scroll_top = html_scroll_top_get(body);
    storage_local_set(app_chapter_group_scroll_keep, "place", {
      path,
      scroll_top,
    });
  }
  let element = html_component_element_get(body);
  property_set(element, "onscroll", file);
}
