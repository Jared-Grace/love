import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { app_shared_buttons_expand_collapse_refresh } from "./app_shared_buttons_expand_collapse_refresh.mjs";
export function app_shared_folds_refresh(folds) {
  "tell every open-everything and shut-everything button that acts on this group of cards to look again at whether it still has anything to do.";
  "It is called after every single fold, whoever did it - a button, the first draw, or a reader tapping one card's title - because those are exactly the moments the answer can change.";
  "A group with no buttons on it yet walks through here without doing anything, which is what lets the cards be drawn before the buttons or after them.";
  arguments_assert(arguments, 1);
  each(folds.pairs, app_shared_buttons_expand_collapse_refresh);
}
