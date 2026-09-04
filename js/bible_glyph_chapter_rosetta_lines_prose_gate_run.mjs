import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { bible_glyph_chapter_rosetta_lines_prose_lines } from "./bible_glyph_chapter_rosetta_lines_prose_lines.mjs";
import { repo_love_function_read } from "./repo_love_function_read.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapter_rosetta_lines_prose_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every written-out Rosetta band file opens with the paragraphs its writer stamps in today, the last of which is the claim that its two bands may lawfully be shown. Throws naming the chapters whose files say something else.");
  ("THE LAST PARAGRAPH IS A LICENCE CLAIM AND THAT IS WHAT THIS EXISTS FOR. These files hold two bands of somebody else's scripture, and what makes them publishable is a sentence about the terms those bands come on. The two picture-Bible language files carried such a sentence, it said the wrong thing, and it went on saying it after the writer was corrected - because nothing ever compared a file that was written to a writer that had changed.");
  ("IT COMPARES THE FILE TO THE WRITER'S OWN TEXT AND NEVER TO A COPY OF IT. Writer and gate both read the paragraphs out of one function, so improving a word of it turns every file on disk red until it is written again. A gate holding its own copy of the sentence would agree with the writer on the day it was built and quietly stop agreeing later, which is the failure it was built to catch wearing the gate's clothes.");
  ("IT COMPARES ALL FOUR AND NOT ONLY THE LICENCE ONE. Reading which paragraph is the licence would mean deciding it by its position or by its words, and both of those rot; the whole opening is written by one command, so the whole opening is what must still match.");
  ("A CHAPTER WITH NO BAND FILE AT ALL IS NOT THIS GATE'S FAULT TO REPORT, and it is already somebody's: ",
    fn_name("bible_glyph_chapter_rosetta_lines_fetched_gate_run"),
    " sends for every chapter's bands and fails on the one that will not come. Counting the absent ones here and saying so beside the verdict is enough, and it keeps two gates from naming the same repair twice.");
  ("A FILE THAT WILL NOT BE READ IS ONE NAMED CHAPTER AND NEVER THE END OF THE WALK. A band file being absent is already handled above, but a file that is present and still refuses to open is a different event - a name that moved under this run, a tree half written by somebody else's save. Waited on plainly, the first refusal carries that reader's own complaint out of this gate in place of the chapters it had gathered, so every chapter after it goes unread and nothing in the answer names anybody. Caught, it is one named chapter whose file would not open, standing beside every chapter that was still compared.");
  ("HOW MANY FILES WERE READ COMES BACK BESIDE THE VERDICT, because finding nothing wrong is also the answer on the day the chapter list moves under this or the naming stops matching what is on disk. The verdict reads the same both times; the count is what falls to nothing when the reading breaks.");
  ("IT NEEDS NO NETWORK, NO INTERLINEAR AND NO DOWNLOADED BIBLE, so it runs in a frozen copy like every other gate: the files are read out of the frozen tree by name, and what they are compared against is spelled in this repo.");
  let references = bible_glyph_chapter_references();
  let names_all = await repo_love_functions_names();
  let present = [];
  let absent = [];
  for (let reference of references) {
    let chapter_code = reference.chapter_code;
    let name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
    let known = list_includes(names_all, name);
    if (not(known)) {
      list_add(absent, chapter_code);
      continue;
    }
    list_add(present, {
      chapter_code,
      name,
    });
  }
  let writer = fn_name("bible_glyph_chapter_rosetta_lines_file_source");
  let f_name = fn_name("bible_glyph_chapter_rosetta_lines_name");
  let hint_none = text_combine_multiple([
    "not one chapter has a band file, so this gate read nothing and would have passed for that reason - either the picture Bible has no chapters listed at all, or the naming of a band file no longer matches what is on disk. The naming is ",
    f_name,
    " and the text is built by ",
    writer,
  ]);
  list_empty_not_is_assert_json(present, {
    hint: hint_none,
    absent,
  });
  let wanted = bible_glyph_chapter_rosetta_lines_prose_lines();
  let wrong = [];
  for (let band of present) {
    async function band_file_read() {
      let got = await repo_love_function_read(band.name);
      return got;
    }
    let answered = await catch_message_async(band_file_read);
    let came = property_get(answered, "ok");
    if (not(came)) {
      list_add(wrong, {
        chapter_code: band.chapter_code,
        fn: band.name,
        unread: property_get(answered, "message"),
      });
      continue;
    }
    let code = property_get(answered, "value");
    let found = function_prose_lines(code);
    let same = json_equal(found, wanted);
    if (not(same)) {
      list_add(wrong, {
        chapter_code: band.chapter_code,
        fn: band.name,
        found,
      });
    }
  }
  let rewrite = fn_name("bible_glyph_chapter_rosetta_lines_rewrite");
  let source = fn_name("bible_glyph_chapter_rosetta_lines_prose_lines");
  let hint_wrong = text_combine_multiple([
    "these band files open with paragraphs their writer no longer writes, and the last paragraph is what says whose scripture they hold and on what terms - so a file that has drifted is a file making a licence claim nobody is standing behind. The paragraphs are spelled once, in ",
    source,
    ", and the repair is to lay each named chapter's bands down again over the old ones with ",
    rewrite,
    ". Read what each file actually says first: if the writer's wording was improved this is only stale text, but if a file says something the writer never said then it was edited by hand and the words in it are the ones to look at; a chapter carrying an unread word instead of what was found is one whose file would not open at all, and the words it refused with stand beside it",
  ]);
  list_empty_is_assert_json(wrong, {
    hint: hint_wrong,
    wrong,
  });
  let read = list_size(present);
  let missing = list_size(absent);
  let r = {
    read,
    missing,
  };
  return r;
}
