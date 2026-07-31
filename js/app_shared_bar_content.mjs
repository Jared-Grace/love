export function app_shared_bar_content(context) {
  arguments_assert(arguments, 1);
  "the frame every screen in these apps opens with - the page emptied of the last screen, and the bar and the scrolling body under it, handed back by name";
  "six screens began with these same four lines and each named the two halves in whichever order it happened to want them, so the frame had no name of its own and reading one screen told you nothing about the next.";
  let root = html_clear_context(context);
  let bc = app_shared_bar_content_root(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  let frame = {
    root,
    bar,
    content,
  };
  return frame;
}
