import { js_declarations_record_read_collapse } from "../../../js/js_declarations_record_read_collapse.mjs";
export const example = {
  fn: js_declarations_record_read_collapse.name,
  args: [],
  kind: "transform",
  title: "Drop a record packed and unpacked in one place",
  note: [
    { fn: js_declarations_record_read_collapse.name },
    " takes out every record whose every mention is a reading of an entry it was written with, and puts the name that entry was written from where the reading stood. It is what a fold leaves behind — the piece handed its answers over as one record and the body took them apart again on the next line, so the parcel is packed and unpacked without ever being carried anywhere.",
  ],
  before: `export function f(a) {
  let left = g(a);
  let right = h(a);
  let r = { left, right };
  return k(property_get(r, "left"), property_get(r, "right"));
}`,
  after: `export function f(a) {
  let left = g(a);
  let right = h(a);
  return k(left, right);
}`,
};
