import { reply_bible_verse_references_written } from "./reply_bible_verse_references_written.mjs";
import { reply_bible_verse_wordings } from "./reply_bible_verse_wordings.mjs";
import { reply_bible_wordings_columns } from "./reply_bible_wordings_columns.mjs";
import { reply_bible_columns_parts } from "./reply_bible_columns_parts.mjs";
import { reply_bible_parts_shared } from "./reply_bible_parts_shared.mjs";
import { reply_bible_choice_function_names } from "./reply_bible_choice_function_names.mjs";
import { reply_bible_part_code } from "./reply_bible_part_code.mjs";
import { reply_bible_shared_functions_write } from "./reply_bible_shared_functions_write.mjs";
import { reply_bible_verse_function_write } from "./reply_bible_verse_function_write.mjs";
export async function reply_bible_verse_function_new(
  chapter_code,
  verse_number,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "Writes the rule for one verse from its reference alone, out of the words of the English Bibles nobody owns: a sequence of what they all say, with a choice where they differ.";
  "A new verse can share a choice or a phrase with a verse already written, and that verse then has to call the shared function too. So every verse that has a rule is written again with it, and a choice or phrase in more than one verse becomes its own function.";
  let references = await reply_bible_verse_references_written();
  function same(reference) {
    let is =
      reference.chapter_code === chapter_code &&
      reference.verse_number === verse_number;
    return is;
  }
  if (!references.some(same)) {
    references.push({
      chapter_code,
      verse_number,
    });
  }
  let verses_parts = [];
  let wordings_all = [];
  for (let reference of references) {
    let wordings = await reply_bible_verse_wordings(
      reference.chapter_code,
      reference.verse_number,
    );
    if (wordings.length === 0) {
      throw new Error(
        `no Bible here has ${reference.chapter_code} ${reference.verse_number}`,
      );
    }
    wordings_all.push(...wordings);
    let columns = reply_bible_wordings_columns(wordings);
    verses_parts.push(reply_bible_columns_parts(columns));
  }
  let shared = reply_bible_parts_shared(verses_parts);
  shared.names = await reply_bible_choice_function_names(
    shared.choices,
    wordings_all,
  );
  function codes_get(parts) {
    let codes = parts.flatMap(function part_code(part) {
      let code = reply_bible_part_code(part, shared);
      return code;
    });
    return codes;
  }
  let verses_codes = verses_parts.map(codes_get);
  let codes_all = verses_codes.flat().join(" ");
  let shared_written = await reply_bible_shared_functions_write(
    shared,
    codes_all,
  );
  let verses_written = [];
  for (let index = 0; index < references.length; index++) {
    let f_name = await reply_bible_verse_function_write(
      references[index],
      verses_codes[index],
    );
    verses_written.push(f_name);
  }
  let made = {
    verses_written,
    shared_written,
    shared_names: shared.names,
  };
  return made;
}
