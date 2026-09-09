import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_language_writers } from "./bible_glyph_chapters_language_writers.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_languages_write() {
  "Rebuilds every reveal language from the picture chapter list, and hands back the report each one gives.";
  arguments_assert(arguments, 0);
  ("IT EXISTS SO THAT ADDING A LANGUAGE IS AN ENTRY AND NOT AN EDIT. The two commands that keep the reveal bands level with the chapters each named both languages by hand, so a third one would have had to be remembered twice, and the half that was forgotten would have gone on reporting success while leaving that language behind. Which languages there are is now asked of ",
    fn_name("bible_glyph_chapters_language_writers"),
    " and neither caller knows how many there are.");
  ("EACH WRITER REPORTS WHICH LANGUAGE IT IS, so the reports are handed back as a list rather than filed under names invented here. Every one of them carries its own code and the name of the file it wrote, which is the same labelling a caller would otherwise be asked to add on top of an answer that already had it.");
  ("THEY RUN ONE AFTER ANOTHER AND NOT AT ONCE, because each writer reads the same chapter list and overwrites a whole file of its own. Running them together would save minutes on a command that already takes them, and would make a failure report about two languages at a moment when only one of them had been written.");
  let writers = bible_glyph_chapters_language_writers();
  let reports = [];
  for (let writer of writers) {
    let report = await writer();
    list_add(reports, report);
  }
  return reports;
}
