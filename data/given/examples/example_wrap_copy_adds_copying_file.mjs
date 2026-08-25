import { function_wrap_copy } from "../../../js/function_wrap_copy.mjs";
import { clipboard_copy_value } from "../../../js/clipboard_copy_value.mjs";
export const example = {
  fn: function_wrap_copy.name,
  args: ["bible_chapter_lines"],
  kind: "files",
  title: "Wrap a function in a twin that also copies the answer",
  note: [
    { fn: function_wrap_copy.name },
    " adds a ",
    { code: "bible_chapter_lines_copy.mjs" },
    " that forwards the same arguments, hands the answer to ",
    { fn: clipboard_copy_value.name },
    ", and still returns it — so the twin can stand anywhere the original could. A wrapper rather than one command taking a function's name to run: a command handed a name runs code chosen by whoever wrote the argument and can never be approved once and left alone, while a twin's behaviour is fixed whatever its arguments say.",
  ],
  before: [
    {
      name: "bible_chapter_lines.mjs",
      source: `export async function bible_chapter_lines(bible_folder, chapter_code) {
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  return verses;
}`,
    },
  ],
  after: [
    {
      name: "bible_chapter_lines.mjs",
      source: `export async function bible_chapter_lines(bible_folder, chapter_code) {
  let verses = await bible_chapter_verses(bible_folder, chapter_code);
  return verses;
}`,
    },
    {
      name: "bible_chapter_lines_copy.mjs",
      source: `import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { bible_chapter_lines } from "./bible_chapter_lines.mjs";
export async function bible_chapter_lines_copy(bible_folder, chapter_code) {
  let r = await bible_chapter_lines(bible_folder, chapter_code);
  await clipboard_copy_value(r);
  return r;
}`,
    },
  ],
};
