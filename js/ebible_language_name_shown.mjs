import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
export function ebible_language_name_shown(language_name) {
  "What a language should be called on a screen, from the way eBible writes its name on a copyright page.";
  "eBible writes every one of them the same way - what its own speakers call it, then what English calls it in brackets. Seventy five of the two hundred and seventy two have nothing before the bracket, so left alone they reach a reader as a bracket with a space in front of it and no language in it at all.";
  "Where the whole name is a bracket, the brackets are taken off and what was inside them is the name. Where anything stands before the bracket the name is left exactly as eBible wrote it, because both halves are worth showing and neither is ours to choose between.";
  "The first and last letters are dropped rather than the text between the brackets being read out, because a few names carry a bracket inside a bracket - Bu (Bauchi State) - and reading to the first closing bracket would cut one of those in half.";
  let trimmed = text_trim(language_name);
  let opens = text_starts_with(trimmed, "(");
  let closes = text_ends_with(trimmed, ")");
  let bracketed = and(opens, closes);
  if (not(bracketed)) {
    return trimmed;
  }
  let size = text_size(trimmed);
  let last = size - 1;
  let inside = text_slice(trimmed, 1, last);
  return inside;
}
