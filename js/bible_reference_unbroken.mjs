import { arguments_assert } from "./arguments_assert.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
export function bible_reference_unbroken(reference) {
  "$plain reference";
  "A Bible reference as it is shown on a screen, held together on one line - Psalm 2, 1 John 3:16 - so the book name never ends one line and its number starts the next (human 2026-11-24: book and chapter number joined by an unbroken space, as one shared piece everywhere). Only for what is drawn: a copied or parsed reference keeps its plain spaces, since a pasted unbroken space reads as a stray mark in some apps and no longer matches a typed reference.";
  arguments_assert(arguments, 1);
  let nb = text_space_nb();
  let unbroken = text_replace_space_to(reference, nb);
  return unbroken;
}
