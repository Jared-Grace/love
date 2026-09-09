import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { each } from "./each.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_component_text_runs(component) {
  arguments_assert(arguments, 1);
  ("what a drawn box says, in order, split into runs - each run the writing set on one element, and whether that writing is dressed as code");
  ("Only for a box drawn off-screen. It reads the children a page with no screen behind it kept for it, which a real browser element does not hand back in this shape.");
  ("A run is marked as code when the element it sits in, or any element it sits inside, was given a monospace font. That is the one thing every code tile in this repo does and the one thing no run of ordinary writing does, so it is what tells the two apart. It is read off the style the drawing actually set rather than named here, which is why a tile that changes its colour or its corners stays code and a piece of writing that is merely made bold does not become it.");
  ("The writing is taken from what was set rather than from both places it could have been set, because an element is given one or the other and never both - so reading the second when the first is empty adds the cases the first misses without counting anything twice.");
  let runs = [];
  function walk(element_found, code_above) {
    let font = element_found.style["font-family"];
    let mono = false;
    if (font) {
      mono = text_includes(font, "monospace");
    }
    let code = code_above;
    if (mono) {
      code = true;
    }
    let writing = element_found.innerHTML;
    if (not(writing)) {
      writing = element_found.textContent;
    }
    if (writing) {
      let run = {
        text: writing,
        code,
      };
      runs.push(run);
    }
    function walk_child(child) {
      walk(child, code);
    }
    each(element_found.children, walk_child);
  }
  let element = html_component_element_get(component);
  walk(element, false);
  return runs;
}
