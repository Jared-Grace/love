import { js_let_add } from "../../js/js_let_add.mjs";
export const example = {
  fn: js_let_add.name,
  args: [],
  kind: "transform",
  title: "Leave an assignment alone when the file already binds the name at its top",
  note: [
    { fn: js_let_add.name },
    " writes the word ",
    { code: "let" },
    " in front of an assignment whose name nothing has bound yet, which is what lets a function be written without saying it twice. Everything rests on how it decides the name is unbound, and that question is asked by ",
    { fn: "js_identifier_defineds" },
    ".",
    " Until 2026-08-03 that reading walked only the blocks around the identifier. The top of the file is not a block, so a variable declared there was invisible to it, and the one shape that variable is nearly always written for — a cache filled on first use — came back with a fresh ",
    { code: "let" },
    " over the line meant to fill it. The copy is dropped at the closing brace and every reader of the shared name keeps getting ",
    { code: "null" },
    ", for the life of the process.",
    " So this pins the fix rather than the feature. ",
    { code: "settings" },
    " is bound at the top and must be left alone; ",
    { code: "count" },
    " is bound nowhere and must still be given its ",
    { code: "let" },
    ", because a rule that simply stopped adding would pass the first half and lose the point of the step.",
  ],
  before: `let settings = null;
export function read(key) {
  if (settings === null) {
    settings = load();
  }
  count = 1;
  return settings[key] + count;
}`,
  after: `let settings = null;
export function read(key) {
  if (settings === null) {
    settings = load();
  }
  let count = 1;
  return settings[key] + count;
}`,
};
