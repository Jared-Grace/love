import { hebrew_cantillation_strip } from "./hebrew_cantillation_strip.mjs";
export function bible_word_form(text) {
  "$plain text";
  "One Bible word cut back to the form that gets said: its chanting marks and its punctuation taken off, and the word itself left alone.";
  "THE SAME WORD READ WITH TWO DIFFERENT CHANTS IS ONE FORM, which is what saying a single word needs - the chant belongs to the line it is sung in, not to the word.";
  "A GLOSS SOMETIMES EXPLAINS TWO OR THREE WORDS TOGETHER, so the spaces between them are kept and only tidied to one; deleting them welded the phrase into a single token that no voice could say and no recorder had ever made.";
  "★ EVERY PLACE THAT NAMES A CLIP AND EVERY PLACE THAT ASKS FOR ONE HAS TO CUT THE WORD THE SAME WAY, or the reader asks storage for a file nobody recorded and hears nothing at all, with no error to say why. That is the whole reason this is one function rather than a line copied twice.";
  let stripped = hebrew_cantillation_strip(text);
  let unpunctuated = stripped.replace(/[.,;·:?!]/g, "");
  let form = unpunctuated.replace(/\s+/g, " ").trim();
  return form;
}
