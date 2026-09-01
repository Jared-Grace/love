import { text_between } from "./text_between.mjs";
import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { file_read } from "./file_read.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_size } from "./text_size.mjs";
export async function bible_glyph_chapter_chain_spliced(
  f_name,
  after_text,
  before_text,
  chain,
) {
  "Puts a freshly written chain into one file, in place of whatever stood between the line that empties the answer and the line that reads it, and says whether that changed anything.";
  "IT SPLICES THE MIDDLE AND NEVER RENDERS THE WHOLE FILE. Both of the files this is used on say a great deal about themselves - both of them are the reason the picture Bible page is affordable at all - and every word of that is authored. Writing a file out from a generator would lose it. What gets replaced is exactly the run that is thirty copies of one shape.";
  "IT REPORTS WHETHER THE FILE MOVED, because a generator that agrees with what is already there and a generator that did nothing at all leave the same file behind. The run that lands a new chapter says true; running it again straight away says false, and that second answer is what proves the first one wrote everything it had.";
  arguments_assert(arguments, 4);
  let f_path = function_name_to_path_relative(f_name);
  let before = await file_read(f_path);
  let middle = text_between(before, after_text, before_text);
  let after = text_replace_once(before, middle, chain);
  await file_overwrite(f_path, after);
  let changed = equal_not(before, after);
  let r = {
    f_name,
    size_before: text_size(middle),
    size_after: text_size(chain),
    changed,
  };
  return r;
}
