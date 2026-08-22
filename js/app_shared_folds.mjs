import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_folds() {
  "a group of cards that fold, kept together so a page can ask how many of them are open.";
  "IT EXISTS SO OPEN-EVERYTHING CAN SWITCH ITSELF OFF. A button that opens everything has nothing left to do once everything is open, and one that shuts everything has nothing to do once everything is shut - but neither could know that while the only thing kept about a card was the way to shut it. A list of setters can be told what to do and can never be asked anything.";
  "A page may keep more than one of these, because cards nest and the buttons do not act on every level. The search results shut only the book cards and leave the sections they stand in alone, so the books are one group and the sections another, and each button is told which groups it acts on.";
  "The buttons that act on a group are kept ON the group, so a card that a reader folds by hand can reach them. Otherwise the two buttons would only ever hear about the folding they did themselves, and a reader who opened every card one at a time would still be offered an open-everything button that did nothing.";
  arguments_assert(arguments, 0);
  let folds = {
    members: [],
    pairs: [],
  };
  return folds;
}
