import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_read } from "./function_read.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { text_number_spelled } from "./text_number_spelled.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_count_stated() {
  arguments_assert(arguments, 0);
  ("What the picture Bible list says out loud about how many chapters it holds, beside how many it actually holds, and whether the two are the same.");
  ("THE LIST TELLS THE READER ITS OWN SIZE IN WORDS AND WORDS DO NOT MOVE WHEN A CHAPTER IS ADDED. Everything else about a new chapter announces itself the moment somebody looks: the chapter is in the list or it is not. That one sentence can go on saying an old number forever and nothing anywhere will look wrong.");
  ("IT LOOKS AT THE SOURCE AND NOT AT THE RUNNING LIST, because the sentence is prose and prose is not a value anything can ask for. Reading the file back is the only way to hear what the file says, and this is the same reading a gate about prose already does elsewhere in the repo.");
  ("SPELLED WORDS ARE LOWERED BEFORE THEY ARE COMPARED, because a sentence begins with a capital and a spelling does not. Comparing them as written would fail on prose that is perfectly correct, which is the way a gate teaches everybody to ignore it.");
  ("Nothing said at all is answered as nothing rather than as a disagreement, because the two are different mistakes with different repairs - one is a sentence to correct and the other is a sentence to write.");
  ("The words are handed back twice, once lowered for comparing and once exactly as the sentence spells them, because whoever repairs the sentence has to find those words in the file and a lowered copy of them is not there.");
  let f_name = fn_name("bible_glyph_chapters");
  let code = await function_read(f_name);
  let lines = function_prose_lines(code);
  let regex = new RegExp("^([A-Za-z]+(?: [A-Za-z]+)*) chapters today,");
  let said = null;
  let said_written = null;
  for (let line of lines) {
    let matched = text_regex_match(line, regex);
    if (matched) {
      said_written = matched[1];
      said = text_lower_to(said_written);
    }
  }
  let chapters = bible_glyph_chapters();
  let count = list_size(chapters);
  let spelled = text_number_spelled(count);
  let agree_is = equal(said, spelled);
  let r = {
    said,
    said_written,
    spelled,
    count,
    agree_is,
  };
  return r;
}
