import { list_add } from "./list_add.mjs";
export function html_element_fake() {
  "A stand-in for an element on a page: it remembers the words written into it and the things appended under it, so a little drawing program can be asked what it would have drawn where there is no browser to draw into.";
  "It answers to everything a drawing program asks of an element, not only to the two things that are read back off it afterwards. It began as those two and could draw three of a hundred and thirty-eight screens this repo has; the other hundred and thirty-five stopped on a class being added or a listener being hung, neither of which anybody wanted the answer to. A stand-in that only survives the simplest drawing can only check the simplest drawing.";
  "Everything added answers the way an element with nothing in it answers: no child matches a search, no attribute is set, and every measurement is zero. That is the safe direction. A method here that handed back a plausible-looking wrong shape would let a screen pass in the quiet and break on the phone, which is the one outcome that would leave this worse than nothing.";
  let children = [];
  function appendChild(child) {
    list_add(children, child);
    return child;
  }
  function insertBefore(child) {
    list_add(children, child);
    return child;
  }
  function removeChild(child) {
    return child;
  }
  let e = {
    innerHTML: "",
    textContent: "",
    value: "",
    style: {},
    dataset: {},
    children,
    classList: {
      add: function class_word_add() {},
      remove: function class_word_remove() {},
      toggle: function class_word_toggle() {},
      contains: function class_word_held_is() {
        return false;
      },
    },
    appendChild,
    insertBefore,
    removeChild,
    remove: function element_drop() {},
    setAttribute: function attribute_set() {},
    getAttribute: function attribute_get() {
      return null;
    },
    addEventListener: function listener_add() {},
    removeEventListener: function listener_remove() {},
    querySelector: function one_find() {
      return null;
    },
    querySelectorAll: function every_find() {
      let r = [];
      return r;
    },
    focus: function focus_take() {},
    blur: function focus_drop() {},
    scrollIntoView: function scroll_onto() {},
    getBoundingClientRect: function box_measure() {
      let box = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
      };
      return box;
    },
  };
  return e;
}
