import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_overlay_card_fixed } from "./html_overlay_card_fixed.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { bible_glyph_name_draw_html } from "./bible_glyph_name_draw_html.mjs";
import { bible_glyph_names_spoken } from "./bible_glyph_names_spoken.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { bible_glyph_group_pieces } from "./bible_glyph_group_pieces.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_glyph_piece_meaning } from "./bible_glyph_piece_meaning.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { not_equal } from "./not_equal.mjs";
import { null_is } from "./null_is.mjs";
import { bible_word_sound_url_cycling } from "./bible_word_sound_url_cycling.mjs";
import { app_shared_gloss_bible_word_sound } from "./app_shared_gloss_bible_word_sound.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_stop_propagation } from "./html_stop_propagation.mjs";
export function bible_glyph_group_overlay_open(
  names,
  lookup,
  meanings,
  original,
  sound,
  word_name,
) {
  arguments_assert(arguments, 6);
  ("$plain word_name");
  ("the word name is what the tapped word means as a name and who or what it names, found by the word's own number, or null when the word is no name or its number is not known.");
  ("THE NAME GOES ON THE PIECE THAT HAS A ROOT, never on a small joined word such as and or the, because the name is the word the number belongs to.");
  ("$plain names");
  ("$plain lookup");
  ("$plain meanings");
  ("$plain original");
  ("$plain sound");
  ("the names are the pictures of one tapped group, the lookup maps a name to its character, the meanings map a sequence to what it says, the original is the word as it was written, and the sound is how that written word is said; either of the last two is null where it is not known. All are data to draw and none runs.");
  ("PRONOUNCE SHOWS THE WORD AS IT IS SAID IN THIS VERSE WHEN THE SOUND IS KNOWN, which is what the speaker beside it plays. Only a word whose chapter was built before sounds were kept falls back to the dictionary form of its root, which can differ from the word as said - with and joined to it, or a different tense.");
  ("A NAME IS LABELLED AS A NAME AND NOT AS A DEFINITION, followed by what the name means and who or what it names, so a reader who taps Jonah learns that the name is the word for a dove and that he was a prophet. A name whose meaning nobody knows shows who or what it names and leaves the meaning out.");
  ("EACH MEANING IS LABELLED AS THE DEFINITION AND THE WRITTEN WORD AS THE WORD, so a reader who sees two lines of foreign-looking text knows which is which without being taught.");
  ("THE WRITTEN WORD COMES WITH THE SAME SPEAKER AND TURTLE THE ORIGINAL BIBLE APP PUTS BESIDE A WORD, drawn by ",
    fn_name("app_shared_gloss_bible_word_sound"),
    " with the voices from ",
    fn_name("bible_word_sound_url_cycling"),
    ", so a word is said the same way in both apps. Tapping the word itself says it too. A tap on either press is kept from closing the overlay, because the reader asked to hear the word and not to leave it.");
  ("One tapped word of the picture Bible shown large over the page, with the name of each picture and what the word means. A tap anywhere closes it.");
  ("THE MEANING IS GIVEN ONLY WHEN IT IS ASKED FOR. The page itself still tells nobody what a picture means; a reader who taps one word has asked about that word and nothing else, so this answers that one word and goes away.");
  ("THE PICTURES ARE DRAWN BIG FIRST AND THEIR NAMES UNDER THEM, because the names are how the pictures were chosen - a reader who sees that the word is a heart and a fire can read the next such word without tapping.");
  ("A group holding more than one meaning, such as a Hebrew word with and and his joined to it, gets one line per piece, each with its own pictures, so the reader sees which pictures say which part.");
  ("The card and the dimmed screen behind it are ",
    fn_name("html_overlay_card_fixed"),
    ", the same one the bible reader opens over a tapped word.");
  let card = html_overlay_card_fixed();
  let big = html_div(card);
  html_style_set(big, "fontSize", "4em");
  for (let name of names) {
    bible_glyph_name_draw_html(big, name, lookup);
  }
  let spoken = bible_glyph_names_spoken(names);
  let spoken_line = html_div_text(card, spoken);
  app_shared_text_deemphasized(spoken_line);
  let pieces = bible_glyph_group_pieces(names, meanings);
  let several = greater_than(pieces.length, 1);
  let roots = [];
  for (let piece of pieces) {
    let meaning = bible_glyph_piece_meaning(piece, meanings, several);
    if (equal(meaning, null) && not(several)) {
      continue;
    }
    let line = html_div(card);
    html_style_set(line, "marginTop", "0.75em");
    if (several) {
      let pictures = html_span(line);
      html_style_set(pictures, "fontSize", "1.5em");
      for (let name of piece.names) {
        bible_glyph_name_draw_html(pictures, name, lookup);
      }
      html_span_text_content(line, " ");
    }
    if (equal(meaning, null)) {
      let spoken_piece = bible_glyph_names_spoken(piece.names);
      let unexplained = html_span_text_content(line, spoken_piece);
      app_shared_text_deemphasized(unexplained);
      continue;
    }
    let named = null;
    if (not_equal(meaning.root, null)) {
      named = word_name;
    }
    let unnamed = null_is(named);
    let label_text = unnamed ? "Definition: " : "Name: ";
    let label = html_span_text_content(line, label_text);
    app_shared_text_deemphasized(label);
    let gloss_text = unnamed ? meaning.gloss : named.name;
    let gloss = html_span_text_content(line, gloss_text);
    html_style_set(gloss, "fontWeight", "bold");
    if (not_equal(meaning.root, null)) {
      if (null_is(original)) {
        let root = html_span_text_content(line, " " + meaning.root);
        app_shared_text_deemphasized(root);
      } else {
        roots.push(meaning.root);
      }
    }
    if (unnamed) {
      continue;
    }
    let b2 = null_is(named.means);
    let means_known = not(b2);
    if (means_known) {
      let means_line = html_div(line);
      let means_label = html_span_text_content(means_line, "Means: ");
      app_shared_text_deemphasized(means_label);
      html_span_text_content(means_line, named.means);
    }
    html_div_text(line, named.about);
  }
  let b = null_is(original);
  if (not(b)) {
    let word_line = html_div(card);
    html_style_set(word_line, "marginTop", "0.75em");
    let cycling = bible_word_sound_url_cycling();
    let play = app_shared_gloss_bible_word_sound(
      word_line,
      original,
      cycling.sound,
      cycling.slow,
    );
    let word_label = html_span_text_content(word_line, "Word: ");
    app_shared_text_deemphasized(word_label);
    let written = html_span_text_content(word_line, original);
    html_attribute_set(written, "dir", "auto");
    html_style_set(written, "fontSize", "1.5em");
    html_on_click(written, play);
    let pronounced = roots.join(" ");
    let b4 = null_is(sound);
    if (not(b4)) {
      pronounced = sound;
    }
    if (greater_than(pronounced.length, 0)) {
      let pronounce_line = html_div(word_line);
      let pronounce_label = html_span_text_content(
        pronounce_line,
        "Pronounce: ",
      );
      app_shared_text_deemphasized(pronounce_label);
      html_span_text_content(pronounce_line, pronounced);
    }
    html_on_click(word_line, html_stop_propagation);
  }
}
