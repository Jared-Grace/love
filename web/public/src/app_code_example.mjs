import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_example(context) {
  let root = html_clear_context(context);let lesson = app_code_lesson_current(context);
  let above = property_get(lesson, "above");
  above(root);
  let c = app_code_container_light_blue(root);
  app_code_example_answer_gap(c);
  let another = app_code_lesson_text_example_another(lesson);
  let example_count = property_get(lesson, "example_count");
  const plural = example_count >= 2;
  const root_word = "example";
  let is_a = null;
  if (plural) {
    is_a = "are some " + root_word + "s:";
  } else {
    is_a = "is an " + root_word + ":";
  }
  let combined = text_combine("Here ", is_a);
  html_div_text(c, combined);
  let refresh = app_code_batch_item_get(c, lesson, on_batch_item, noop, false);
  function on_batch_item(container, bs) {
    function lambda2(b) {
      let ex = property_get(b, "example");
      ex(container);
    }
    each(bs, lambda2);
  }
  async function example_another() {
    await app_shared_screen_set(context, app_code_quiz);
  }
  app_code_next(
    context,
    root,
    "see " + another,
    "please show me " + another,
    refresh,
    example_another,
  );
  let value_initial = app_code_lesson_first_id();
  let id = property_get(lesson, "id");
  let ne = equal_not(id, value_initial);
  if (ne) {
    async function previous() {
      function lambda(value) {
        let list = app_code_lessons();
        let value_new = list_property_previous_value(list, "id", value);
        return value_new;
      }
      storage_local_transform_context(
        context,
        "lesson_id",
        value_initial,
        lambda,
      );
      await app_shared_screen_set(context, app_code_home);
    }
    app_code_go_back(
      root,
      "to the previous lesson",
      "take me back to the previous lesson",
      previous,
    );
  }
  return;
}
