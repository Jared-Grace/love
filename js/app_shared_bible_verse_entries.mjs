import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { bible_verse_words_none_token } from "./bible_verse_words_none_token.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_verse_entries(
  languages_verses,
  verse_number,
  show_language_names,
) {
  "One verse row's worth of text, a piece per language being read, in the order the reader chose them.";
  "★ A LANGUAGE WITH NOTHING UNDER THIS NUMBER STILL GETS A PIECE, carrying the mark that says so. It used to be left out, and leaving it out is what a parallel reading cannot afford: two bibles side by side, one of them silent, and no way for the reader to tell a translation that has nothing here from a page that half loaded. The mark is turned into a sentence and stepped back into grey where the row is drawn, so what the reader sees is a bible saying it has nothing rather than a bible saying nothing.";
  "IT IS NOT REACHED BY A TRANSLATION THAT LACKS THE WHOLE CHAPTER. A language whose chapter would not fetch is dropped before any row is built, so a piece is only written here for a bible that has the chapter open in front of it and no words under this one number - which is the fact worth telling.";
  "THE CLIPBOARD DOES NOT COME THROUGH HERE. Copying walks the same languages itself and keeps only scripture, so the mark cannot reach what a reader pastes into a message.";
  let entries = [];
  function collect_language(entry) {
    let verses_l = property_get(entry, "verses");
    let property_name = verse_number_key();
    let verse_l = list_find_property_or_null(
      verses_l,
      property_name,
      verse_number,
    );
    let name = "";
    if (show_language_names) {
      let language = property_get(entry, "language");
      name = property_get(language, "name");
    }
    let text_l = bible_verse_words_none_token();
    let nn = null_not_is(verse_l);
    if (nn) {
      text_l = property_get(verse_l, "text");
    }
    list_add(entries, {
      name,
      text: text_l,
    });
  }
  each(languages_verses, collect_language);
  return entries;
}
