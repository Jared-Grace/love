import { list_add } from "./list_add.mjs";
export function html_element_fake() {
  "A stand-in for an element on a page: it remembers the words written into it and the things appended under it, so a little drawing program can be asked what it would have drawn where there is no browser to draw into.";
  let children = [];
  function appendChild(child) {
    list_add(children, child);
  }
  let e = {
    innerHTML: "",
    style: {},
    children,
    appendChild,
  };
  return e;
}
