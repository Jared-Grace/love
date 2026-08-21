export function app_shared_buttons_expand_collapse(
  parent,
  expand_all_lambda,
  collapse_all_lambda,
) {
  "The pair of buttons that open everything on a page and shut everything on a page, drawn the one way they are drawn everywhere.";
  "A PAGE THAT HIDES THINGS BEHIND CLICKS OWES THE READER BOTH OF THESE. Somebody who wants to read the whole thing, or to search it with their browser's own find, cannot do either while most of it is shut - and somebody who has opened twenty things and wants the overview back cannot shut them one at a time. The search results and the songs both hide things, so what the two buttons say and which way each triangle points is said once here.";
  "The triangles point the way the page is about to move rather than the way it is now, because a button is read as the thing it will do.";
  arguments_assert(arguments, 3);
  let down = emoji_triangle_down();
  let expand_all_text = text_combine(down, " Expand all");
  app_shared_button_wide(parent, expand_all_text, expand_all_lambda);
  let up = emoji_triangle_up();
  let collapse_all_text = text_combine(up, " Collapse all");
  app_shared_button_wide(parent, collapse_all_text, collapse_all_lambda);
}
