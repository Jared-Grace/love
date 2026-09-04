import { bible_glyph_chapters_language_functions_found } from "./bible_glyph_chapters_language_functions_found.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { bible_glyph_language_credit_defects } from "./bible_glyph_language_credit_defects.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapters_language_credit_gate_run() {
  "Gate: every reveal-language function credits the translation it holds the way that translation's licence asks. Throws naming the file and what its credit block is missing.";
  "IT GUARDS A FAILURE THAT SHIPPED AND WENT UNNOTICED FOR AS LONG AS THESE FILES EXISTED. Both of them carried one sentence saying they held a public-domain bible; both were fetched from translations offered under Creative Commons Attribution Share-Alike, whose one condition is the credit. A file of somebody's scripture with no attribution in it is not a file that may be published, and it reads exactly like one that may.";
  "AND THE SECOND HALF OF THE SAME LICENCE FAILED AGAIN AFTER THE FIRST WAS FIXED. Once the credit was read off the translation the block looked finished, so nobody looked further - and the text under it had been through this app's repair without a word saying so. What is checked here is every condition separately, because the condition that is met is what hides the one that is not.";
  "IT READS THE FINISHED FILE AND NEVER THE WRITER. A gate that asked the writer what it would produce would pass while the files on disk said something else, which is the state this repo was actually in - the writer had been corrected and two files written before it still carried the old claim. What is published is what the file says.";
  "THE LANGUAGES ARE ASKED FOR RATHER THAN SEARCHED FOR HERE, and what is asked refuses an empty answer on this gate's behalf. That guard is how a gate like this dies and it was carried word for word by the gate next door, so it is spelled in one place now.";
  "IT NEEDS NO NETWORK AND NO DOWNLOADED BIBLE, so it runs in a frozen copy of the tree like every other gate. Everything it compares against is either spelled in this repo or written into the file it is reading.";
  let names = await bible_glyph_chapters_language_functions_found();
  let faulty = [];
  for (let name of names) {
    let code = await repo_love_function_read(name);
    let lines = function_prose_lines(code);
    let defects = bible_glyph_language_credit_defects(lines);
    let clean = list_empty_is(defects);
    if (not(clean)) {
      list_add(faulty, {
        name,
        defects,
      });
    }
  }
  ("THE FUNCTION THIS POINTS A READER AT IS NAMED INSIDE THE HINT AND NEVER BESIDE IT, because a failed gate's words are read back afterwards for function names and every name found is taken as an accusation.");
  let writer = fn_name("bible_glyph_chapters_language_write");
  let hint_faulty = text_combine_multiple([
    "these generated files hold somebody else's scripture and do not say what that licence asks them to say about it - the credit is read off the translation and written in by ",
    writer,
    ", so the repair is to run that again for the language named, and if it refuses for want of a downloaded copyright page then the file was written from a bible this machine no longer has and the download is the first step",
  ]);
  list_empty_is_assert_json(faulty, {
    hint: hint_faulty,
    faulty,
  });
  let r = {
    languages: list_size(names),
  };
  return r;
}
