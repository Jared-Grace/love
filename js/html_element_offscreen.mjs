import { arguments_assert } from "./arguments_assert.mjs";
import { noop } from "./noop.mjs";
export function html_element_offscreen(tag_name) {
  arguments_assert(arguments, 1);
  ("one page element that is not on a page: a tag name, a bag of styles, the children appended to it and the writing set on it, and nothing else");
  ("It exists so that code written to draw a screen can be run where there is no screen. Every html_ atom in this repo reaches for document.createElement and then only ever sets a style, appends a child, or sets the writing - so those four are the whole of what has to be imitated for the drawing to go through, and a check can then read what a person would have seen rather than guess at it from the source that would have drawn it.");
  ("READ WHAT SHIPS, NOT WHAT WRITES IT. A title in this course is assembled out of several pieces by several different makers, and a check that read the makers would be checking a guess about how they add up. Running them and reading the result is the same words the learner gets.");
  ("The methods that are not the four are present and do nothing. A missing one throws, and a throw here reads as the lesson being broken rather than as this element being thin - so the ones the drawing happens to call are answered rather than left out.");
  let children = [];
  function child_append(child) {
    children.push(child);
  }
  function nothing_get() {
    return null;
  }
  let classes = {
    add: noop,
    remove: noop,
    toggle: noop,
    contains: nothing_get,
  };
  let element = {
    tagName: tag_name,
    style: {},
    children,
    innerHTML: "",
    textContent: "",
    appendChild: child_append,
    append: child_append,
    setAttribute: noop,
    removeAttribute: noop,
    addEventListener: noop,
    removeEventListener: noop,
    classList: classes,
  };
  return element;
}
