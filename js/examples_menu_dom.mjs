import { examples_menu_dom_example_button } from "./examples_menu_dom_example_button.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { property_get } from "./property_get.mjs";
import { examples_groups } from "./examples_groups.mjs";
import { app_shared_text_category } from "./app_shared_text_category.mjs";
import { list_size } from "./list_size.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
import { subtract } from "./subtract.mjs";
export function examples_menu_dom(parent, examples, on_select) {
  let heading = html_element(parent, "h1");
  html_text_set(heading, "Transform examples");
  html_style_font_size(heading, "1.6rem");
  app_shared_text_body(
    parent,
    "Each example is one code transform — the same file shown before and after. They run easiest first; pick any to see it in full.",
  );
  function group_header(name) {
    let header = html_element(parent, "h2");
    html_text_set(header, name);
    app_shared_text_category(header);
    html_style_font_size(header, "1rem");
    html_style_margin(header, "1.5rem 0 0.5rem");
  }
  function tool_subheader(name) {
    "a lighter label than the tier header — clusters same-tool cards inside a tier";
    let header = html_element(parent, "h3");
    html_text_set(header, name);
    html_style_font_size(header, "0.8rem");
    html_style_set(header, "text-transform", "uppercase");
    html_style_set(header, "letter-spacing", "0.05em");
    html_font_color_set(header, "#888");
    html_bold_semi(header);
    html_style_margin(header, "0.75rem 0 0.35rem");
  }
  function family_at(index_example) {
    "family is attached to each example at build time (see the corpus reader), so the client";
    "reads a plain string here and never pulls the heavy real transforms into the bundle";
    let family = list_get_property(examples, index_example, "family");
    return family;
  }
  function render_segment(name, start, size) {
    "a tier (or the trailing Other bucket): draw its header, then its cards — and open a";
    "tool sub-header only at the FIRST card of a run of 2+ cards sharing a tool family, so";
    "clusters (rename, parameters, fold) get a label and lone tools stay clean.";
    group_header(name);
    let last = subtract(size, 1);
    let local = 0;
    while (less_than(local, size)) {
      let g = start + local;
      let family = family_at(g);
      let family_prev = "";
      if (greater_than(local, 0)) {
        let difference = subtract(g, 1);
        family_prev = family_at(difference);
      }
      let family_next = "";
      if (less_than(local, last)) {
        family_next = family_at(g + 1);
      }
      if (equal_not(family, family_prev)) {
        if (equal(family, family_next)) {
          tool_subheader(family);
        }
      }
      examples_menu_dom_example_button(g, examples, on_select, parent);
      local = local + 1;
    }
  }
  let index = 0;
  for (let group of examples_groups()) {
    let size = property_list_size(group, "examples");
    let value = property_get(group, "name");
    render_segment(value, index, size);
    index = index + size;
  }
  let count = list_size(examples);
  if (less_than(index, count)) {
    let difference2 = subtract(count, index);
    render_segment("Other", index, difference2);
  }
}
