import { fn_name } from "./fn_name.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
export async function reply_bible_verse_references_written() {
  ("Every verse that already has a rule, read from the function names: ",
    fn_name("reply_bible_1jn_4_8"),
    " is 1JN04 and 8.");
  let names = await repo_functions_names("love");
  let references = [];
  for (let name of names) {
    let match = name.match(/^reply_bible_([0-9a-z]{3})_(\d+)_(\d+)$/);
    if (match) {
      let book_code = match[1].toUpperCase();
      references.push({
        chapter_code: ebible_chapter_code_pad(book_code, match[2]),
        verse_number: match[3],
      });
    }
  }
  return references;
}
