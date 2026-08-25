import { function_param_delete } from "../../../js/function_param_delete.mjs";
export const example = {
  fn: function_param_delete.name,
  args: ["verse_line", "chapter"],
  kind: "files",
  title: "Delete one parameter, and the argument every caller was passing",
  note: [
    { fn: function_param_delete.name },
    " drops the named parameter from the definition and then drops the argument at that same position from every call, in every file. The position is read once, off the definition, and reused for all of them — so what a caller passes stays lined up with what the function takes. Deleting the parameter alone would leave every call one argument long, still parsing, still looking right, and wrong in a way that waits until somebody runs it.",
  ],
  before: [
    {
      name: "verse_line.mjs",
      source: `export function verse_line(book, chapter, verse) {
  let r = text_combine([book, verse]);
  return r;
}`,
    },
    {
      name: "verse_lines.mjs",
      source: `export function verse_lines(book) {
  let r = verse_line(book, 1, 2);
  return r;
}`,
    },
  ],
  after: [
    {
      name: "verse_line.mjs",
      source: `export function verse_line(book, verse) {
  let r = text_combine([book, verse]);
  return r;
}`,
    },
    {
      name: "verse_lines.mjs",
      source: `export function verse_lines(book) {
  let r = verse_line(book, 2);
  return r;
}`,
    },
  ],
};
