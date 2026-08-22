import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_triangle_down } from "./emoji_triangle_down.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_triangle_up } from "./emoji_triangle_up.mjs";
import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_buttons_expand_collapse_refresh } from "./app_shared_buttons_expand_collapse_refresh.mjs";
export function app_shared_buttons_expand_collapse(
  parent,
  expand_all_lambda,
  collapse_all_lambda,
  folds_expand,
  folds_collapse,
) {
  "The pair of buttons that open everything on a page and shut everything on a page, drawn the one way they are drawn everywhere.";
  "A PAGE THAT HIDES THINGS BEHIND CLICKS OWES THE READER BOTH OF THESE. Somebody who wants to read the whole thing, or to search it with their browser's own find, cannot do either while most of it is shut - and somebody who has opened twenty things and wants the overview back cannot shut them one at a time. The search results and the songs both hide things, so what the two buttons say and which way each triangle points is said once here.";
  "The triangles point the way the page is about to move rather than the way it is now, because a button is read as the thing it will do.";
  "Each button is told which groups of cards it acts on, so it can switch itself off once it has nothing left to do there. They are LISTS of groups because a page's cards nest and the two buttons need not act on the same levels - the search results open sections and books, and shut only books.";
  "What each button DOES is still handed in rather than worked out from the groups, because opening everything is not always only folding: the search results fetch the verses inside the cards they have just opened, and copying everything is that same opening followed by a copy.";
  arguments_assert(arguments, 5);
  let down = emoji_triangle_down();
  let expand_all_text = text_combine(down, " Expand all");
  let expand = app_shared_button_wide(parent, expand_all_text, expand_all_lambda);
  let up = emoji_triangle_up();
  let collapse_all_text = text_combine(up, " Collapse all");
  let collapse = app_shared_button_wide(
    parent,
    collapse_all_text,
    collapse_all_lambda,
  );
  let pair = {
    expand: expand,
    collapse: collapse,
    folds_expand: folds_expand,
    folds_collapse: folds_collapse,
  };
  ("a group named by both buttons hears about the pair once, so a single fold does not run the same looking-again twice");
  function pair_add(folds) {
    let already = list_includes(folds.pairs, pair);
    if (already) {
      return;
    }
    list_add(folds.pairs, pair);
  }
  each(folds_expand, pair_add);
  each(folds_collapse, pair_add);
  app_shared_buttons_expand_collapse_refresh(pair);
  return pair;
}
