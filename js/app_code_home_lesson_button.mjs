export function app_code_home_lesson_button(
  g,
  context,
  item,
  index,
  complete,
  complete_previous,
) {
  "$plain item";
  "$plain index";
  "$plain complete";
  "$plain complete_previous";
  "One lesson's button on the home screen - numbered, coloured by whether that lesson is finished and whether the one before it is, titled, spaced from the button above it, and opening that lesson when it is pressed.";
  "WHETHER THE LESSON BEFORE IT IS FINISHED IS HANDED IN RATHER THAN WORKED OUT HERE. It is what decides whether this button can be pressed at all, and it is carried along the run of lessons by the caller, which is the only place that knows the order they are drawn in.";
  "It hands back the button rather than nothing, because the caller marks one of them as the way through and scrolls to the one the learner just left, and both of those need the button itself.";
  arguments_assert(arguments, 6);
  let id = property_get(item, "id");
  async function on_click() {
    await app_shared_screen_go_tab(context, "lesson_id", id, app_code_examples);
  }
  let r = app_shared_button_numbered_progress(
    g,
    complete,
    complete_previous,
    index,
    on_click,
  );
  let button = property_get(r, "button");
  let gap = app_shared_spaced_gap();
  html_style_margin_top(button, gap);
  let title = property_get(r, "title");
  app_code_lesson_title_render(title, item);
  return button;
}
