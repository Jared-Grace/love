import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { reply_bible_verse_references_written } from "./reply_bible_verse_references_written.mjs";
import { reply_bible_verse_wordings } from "./reply_bible_verse_wordings.mjs";
import { reply_bible_wordings_columns } from "./reply_bible_wordings_columns.mjs";
import { reply_bible_tokens_spelled } from "./reply_bible_tokens_spelled.mjs";
import { reply_bible_choices_shared } from "./reply_bible_choices_shared.mjs";
import { reply_bible_choice_function_names } from "./reply_bible_choice_function_names.mjs";
import { reply_bible_sequences_shared } from "./reply_bible_sequences_shared.mjs";
import { reply_bible_shared_functions_write } from "./reply_bible_shared_functions_write.mjs";
import { reply_bible_tokens_codes } from "./reply_bible_tokens_codes.mjs";
import { reply_bible_verse_function_write } from "./reply_bible_verse_function_write.mjs";
export async function reply_bible_verse_function_new(
  chapter_code,
  verse_number,
) {
  "$plain chapter_code";
  "$plain verse_number";
  "Writes the rule for one verse from its reference alone, out of the words of the English Bibles nobody owns: a sequence of what they all say, with a choice where they differ.";
  "A new verse can repeat a choice or a phrase from a verse already written, and that verse then has to call the shared function too. So every verse that has a rule is written again with it. Anything said twice, in the same verse or another, becomes its own function.";
  let references = await reply_bible_verse_references_written();
  function same(reference) {
    let is =
      equal(reference.chapter_code, chapter_code) &&
      equal(reference.verse_number, verse_number);
    return is;
  }
  let b = references.some(same);
  if (not(b)) {
    references.push({
      chapter_code,
      verse_number,
    });
  }
  let verses_columns = [];
  let wordings_all = [];
  for (let reference of references) {
    let wordings = await reply_bible_verse_wordings(
      reference.chapter_code,
      reference.verse_number,
    );
    if (equal(wordings.length, 0)) {
      throw new Error(
        `no Bible here has ${reference.chapter_code} ${reference.verse_number}`,
      );
    }
    wordings_all.push(...wordings);
    let finished_all = reply_bible_wordings_columns(wordings);
    verses_columns.push(finished_all);
  }
  let verses_tokens = reply_bible_tokens_spelled(verses_columns, wordings_all);
  let keys = reply_bible_choices_shared(verses_tokens);
  let names = await reply_bible_choice_function_names(keys, wordings_all);
  let shared = {
    keys,
    names,
  };
  let folded = reply_bible_sequences_shared(verses_tokens, shared);
  let shared_written = await reply_bible_shared_functions_write(
    shared,
    folded.sequences,
  );
  let verses_written = [];
  for (let index = 0; less_than(index, references.length); index++) {
    let codes = reply_bible_tokens_codes(folded.verses[index], shared);
    let f_name = await reply_bible_verse_function_write(
      references[index],
      codes,
    );
    verses_written.push(f_name);
  }
  let made = {
    verses_written,
    shared_written,
  };
  return made;
}
