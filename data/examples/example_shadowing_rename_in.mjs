import { js_shadowing_rename_in } from "../../js/js_shadowing_rename_in.mjs";
export const example = {
  fn: js_shadowing_rename_in.name,
  args: ["change", "overlay", "overlay_change"],
  kind: "transform",
  title: "End one hiding in a file that hides the same word twice",
  note: [
    "The plain rename refuses this file, and is right to: there are two inner ",
    { code: "overlay" },
    " bindings, so there is no single one to move and picking one is a judgment. ",
    { fn: js_shadowing_rename_in.name },
    " takes that judgment as its first argument — the function the binding sits in — and changes nothing else about the rename.",
    " Here ",
    { code: "change" },
    " is named, so its ",
    { code: "overlay" },
    " moves and the one ",
    { code: "remove" },
    " takes as a parameter is left standing, along with the outer binding both of them hide.",
    " Clearing the file takes a second run naming ",
    { code: "remove" },
    ", which is the point rather than a limitation: two bindings usually want two different words, and one word chosen for both would name at least one of them wrongly.",
  ],
  before: `export function f() {
  let overlay = 1;
  function change() {
    let overlay = 2;
    return overlay;
  }
  function remove(overlay) {
    return overlay;
  }
  let all = [overlay, change(), remove(3)];
  return all;
}`,
  after: `export function f() {
  let overlay = 1;
  function change() {
    let overlay_change = 2;
    return overlay_change;
  }
  function remove(overlay) {
    return overlay;
  }
  let all = [overlay, change(), remove(3)];
  return all;
}`,
};
