import { js_shadowing_rename } from "../../js/js_shadowing_rename.mjs";
export const example = {
  fn: js_shadowing_rename.name,
  args: ["exists", "present"],
  kind: "transform",
  title: "End a hiding without renaming what a record is called",
  note: [
    { fn: js_shadowing_rename.name },
    " gives the inner ",
    { code: "exists" },
    " a name of its own. The outer one, and every line reading it, are left exactly as they were — which is what makes ending a hiding behaviour-preserving even when the hiding was the bug.",
    " The case worth pinning is the record. ",
    { code: "{ exists, item }" },
    " is a single identifier serving as BOTH the key and the value, so a rename walking straight through it would change the key too, and a reader elsewhere asking for ",
    { code: "exists" },
    " would quietly get nothing back. So the entry is written out in full first and the key is kept.",
    " That failure is silent and the code still runs, which is why it is a case here rather than something to remember.",
  ],
  before: `export function f(items) {
  let exists = false;
  function lambda(item) {
    let exists = true;
    let record = { exists, item };
    return record;
  }
  let both = { exists, items };
  return both;
}`,
  after: `export function f(items) {
  let exists = false;
  function lambda(item) {
    let present = true;
    let record = { exists: present, item };
    return record;
  }
  let both = { exists, items };
  return both;
}`,
};
