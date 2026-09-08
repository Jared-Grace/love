import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { error } from "./error.mjs";
import { text_number_ordinal_spelled_underscore } from "./text_number_ordinal_spelled_underscore.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapters_chapter_add(chapter_code) {
  "Names one already written picture Bible chapter in the registry, which is the three edits a new chapter owes before anything else will look at it.";
  "A NEW CHAPTER IS INVISIBLE UNTIL IT IS NAMED HERE, and the thing that tells you so is a throw from somewhere else entirely. Writing the chapter function is the whole of the authoring, and then the command that lands its reveal bands refuses, because it walks the registry rather than the folder. The three edits that fix it are an import at the top, a numbered binding beside two hundred others, and a line in the array, and the number word has to be counted out by hand. That is a chore with exactly one right answer, which is the shape of a command rather than the shape of a decision.";
  "IT COUNTS THE BINDINGS RATHER THAN BEING TOLD THE NUMBER, so the name it writes cannot disagree with what is already there. Handing the ordinal in would let a caller skip one or repeat one, and a repeated let is a silent overwrite rather than an error.";
  "THE LOCAL HOLDING THE CHAPTER NAME MAY NOT BE CALLED fn underscore name, and that is worth saying because the first draft was. The canonicalising pass expands a literal naming a repo function into a call to that name, so a local wearing the same word turns those expansions into a string being called, and the file throws on its second line. The shadowing gate lists that word for exactly this reason.";
  "Naming a chapter that is already named changes nothing and says so, so it is safe to run twice.";
  arguments_assert(arguments, 1);
  let short_name = chapter_code.toLowerCase();
  let chapter_fn_name = "bible_glyph_chapter_" + short_name;
  let f_name = fn_name("bible_glyph_chapters");
  let f_path = text_combine_multiple(["js/", f_name, ".mjs"]);
  let before = await file_read(f_path);
  if (before.includes(chapter_fn_name)) {
    let already = {
      chapter_code,
      chapter_fn_name,
      added: false,
    };
    return already;
  }
  let bindings = subtract(before.split(" = bible_glyph_chapter_").length, 1);
  if (less_than(bindings, 1)) {
    error({
      hint: "no numbered chapter bindings were found, so the registry is not the shape this expects",
      f_path,
    });
  }
  let ordinal = text_number_ordinal_spelled_underscore(bindings + 1);
  let import_line =
    "import { " + chapter_fn_name + ' } from "./' + chapter_fn_name + '.mjs";';
  let f_name2 = fn_name("bible_glyph_chapters");
  let opener = text_combine_multiple(["export function ", f_name2, "() {"]);
  let with_import = text_replace_once(
    before,
    opener,
    import_line + "\n" + opener,
  );
  let array_opener = "  let chapters = [";
  let binding_line = "  let " + ordinal + " = " + chapter_fn_name + "();";
  let with_binding = text_replace_once(
    with_import,
    array_opener,
    binding_line + "\n" + array_opener,
  );
  let closer = "  ];\n  return chapters;";
  let with_entry = text_replace_once(
    with_binding,
    closer,
    "    " + ordinal + ",\n" + closer,
  );
  await file_overwrite(f_path, with_entry);
  let r = {
    chapter_code,
    chapter_fn_name,
    ordinal,
    added: true,
  };
  return r;
}
