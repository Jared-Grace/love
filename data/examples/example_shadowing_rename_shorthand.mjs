import { function_shadowing_rename } from "../../js/function_shadowing_rename.mjs";
export const example = {
  fn: function_shadowing_rename.name,
  args: ["f", "exists", "present"],
  kind: "files",
  title: "End a hiding without renaming what a record is called",
  note: [
    { fn: function_shadowing_rename.name },
    " gives the inner ",
    { code: "exists" },
    " a name of its own. The outer one, and every line reading it, stay exactly as they were — that is what makes ending a hiding behaviour-preserving even when the hiding was the bug.",
    " The case worth pinning is the record: ",
    { code: "{ exists, item }" },
    " is one identifier serving as BOTH the key and the value, so a rename that walked straight through it would change the key as well, and a reader elsewhere asking for ",
    { code: "exists" },
    " would quietly get nothing. So the entry is written out in full first and the key is kept.",
    " It fails silently or not at all, which is why it is a case here rather than a thing to remember.",
  ],
  before: [
    {
      name: "f.mjs",
      source: `export function f(items) {
  let exists = false;
  function lambda(item) {
    let exists = true;
    let record = { exists, item };
    return record;
  }
  let both = { exists, items };
  return both;
}`,
    },
  ],
  after: [
    {
      name: "f.mjs",
      source: `export function f(items) {
  let exists = false;
  function lambda(item) {
    let present = true;
    let record = {
      exists: present,
      item
    };
    return record;
  }
  let both = {
    exists,
    items
  };
  return both;
}`,
    },
  ],
};
