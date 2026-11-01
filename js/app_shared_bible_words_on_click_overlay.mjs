import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_split_dashes_kept } from "./text_split_dashes_kept.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_word_strong_url_or_null } from "./bible_word_strong_url_or_null.mjs";
import { app_shared_bible_word_overlay_articles_open } from "./app_shared_bible_word_overlay_articles_open.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_words_on_click_overlay(
  top,
  text,
  chapter_code,
  verse_number,
) {
  arguments_assert(arguments, 4);
  ("$plain chapter_code");
  ("$plain verse_number");
  ("the code and number say which verse the text is, or the code is null where the caller does not know; both are data handed on to find a tapped word's Strong's number.");
  ("A TAPPED HEBREW OR GREEK WORD IS LOOKED UP BY ITS VERSE before the card opens, by ",
    fn_name("bible_word_strong_url_or_null"),
    ", so the card can offer the word on BibleHub; any other word, or a verse not known, answers null and the card opens as before.");
  ("A MAQAF JOINS TWO HEBREW WORDS THE WAY A DASH JOINS TWO ENGLISH ONES, so each half is tapped alone - the interlinear numbers them as two words.");
  ("The word is shown exactly as the verse spells it, punctuation and all, and the word looked up is the bare word, so a comma or a full stop the word happened to sit in front of never reaches the search");
  ("A TAP OPENS A CHOICE RATHER THAN A SEARCH: the word, large, with an article about it when one is known, a Google search and the AI chat sites to ask beside it.");
  ("WORDS JOINED BY A DASH ARE TWO WORDS - a-b, or two words with an em dash between them - so each half is tapped and looked up on its own. The dash is drawn between them and is not tapped, because there is no word in it to look up.");
  ("EVERY TAP KNOWS ITS VERSE: the bare words are gathered in order and the tapped one's place among them is handed on, so a word inside a name of several words - Valley of Succoth - can offer that name's article.");
  let split = text_split_space(text);
  let words = [];
  function lambda(item) {
    html_span_space(top);
    let pieces = text_split_dashes_kept(item);
    function piece_draw(piece) {
      let span = html_span_text(top, piece);
      let bare = text_punctuation_apostrophe_kept_removed(piece);
      if (text_empty_is(bare)) {
        return;
      }
      let index = words.length;
      words.push(bare);
      async function open() {
        let strong_url = await bible_word_strong_url_or_null(
          chapter_code,
          verse_number,
          bare,
        );
        await app_shared_bible_word_overlay_articles_open(
          bare,
          strong_url,
          words,
          index,
        );
      }
      html_on_click(span, open);
    }
    each(pieces, piece_draw);
  }
  each(split, lambda);
}
