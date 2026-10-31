import { text_split_space } from "./text_split_space.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_split_dashes_kept } from "./text_split_dashes_kept.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_word_overlay_articles_open } from "./app_shared_bible_word_overlay_articles_open.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { each } from "./each.mjs";
export function app_shared_bible_words_on_click_overlay(top, text) {
  "The word is shown exactly as the verse spells it, punctuation and all, and the word looked up is the bare word, so a comma or a full stop the word happened to sit in front of never reaches the search";
  "A TAP OPENS A CHOICE RATHER THAN A SEARCH: the word, large, with an article about it when one is known, a Google search and the AI chat sites to ask beside it.";
  "WORDS JOINED BY A DASH ARE TWO WORDS - a-b, or two words with an em dash between them - so each half is tapped and looked up on its own. The dash is drawn between them and is not tapped, because there is no word in it to look up.";
  let split = text_split_space(text);
  function lambda(item) {
    html_span_space(top);
    let pieces = text_split_dashes_kept(item);
    function piece_draw(piece) {
      let span = html_span_text(top, piece);
      let bare = text_punctuation_apostrophe_kept_removed(piece);
      if (text_empty_is(bare)) {
        return;
      }
      async function open() {
        await app_shared_bible_word_overlay_articles_open(bare);
      }
      html_on_click(span, open);
    }
    each(pieces, piece_draw);
  }
  each(split, lambda);
}
