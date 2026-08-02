import { js_shadowing_assign } from "../../js/js_shadowing_assign.mjs";
export const example = {
  fn: js_shadowing_assign.name,
  args: ["dictionary"],
  kind: "transform",
  title: "The hiding was the bug, so end it by writing the outer binding",
  note: [
    "A cache that never fills. ",
    { code: "let dictionary = null" },
    " sits outside the function so the file is read once, and the ",
    { code: "if" },
    " exists for no other reason than to fill it — but the line that does the work says ",
    { code: "let" },
    ", so it makes a second ",
    { code: "dictionary" },
    " that lives until the closing brace and is thrown away there. The lookup underneath reads the outer one, which is still ",
    { code: "null" },
    ", and the function throws on every call it will ever receive.",
    " This is the case that separates the two ways of ending a hiding. ",
    { fn: js_shadowing_assign.name },
    " takes the word ",
    { code: "let" },
    " off, so the line writes the binding the lookup is already reading. Renaming the inner one instead would leave the lookup reading ",
    { code: "null" },
    " exactly as before — correct by the rename's own promise, since it preserves behaviour, and the behaviour here is the bug.",
    " Which one a file wants is decided by what the lines below were reaching for, and that is why neither is automatic.",
  ],
  before: `let dictionary = null;
export async function definition(number) {
  if (equal(dictionary, null)) {
    let file_path = json_path();
    let dictionary = await file_read_json(file_path);
  }
  let entry = dictionary["G" + number];
  return entry;
}`,
  after: `let dictionary = null;
export async function definition(number) {
  if (equal(dictionary, null)) {
    let file_path = json_path();
    dictionary = await file_read_json(file_path);
  }
  let entry = dictionary["G" + number];
  return entry;
}`,
};
