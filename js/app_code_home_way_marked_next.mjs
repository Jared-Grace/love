import { arguments_assert } from "./arguments_assert.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_home_way_marked_next(
  button,
  way_marked,
  open,
  complete,
) {
  "$plain way_marked";
  "$plain open";
  "$plain complete";
  "Whether the way through the lessons has been marked once this one button has been considered - marking it where this is the first lesson the learner has not finished and can open, and leaving the mark where it is otherwise.";
  "ONLY THE FIRST SUCH BUTTON IS MARKED, which is why the answer is carried along the run rather than worked out from the button alone. A screen with two buttons wearing the mark tells a test that either of them is where to go next, and a test that follows the second one has walked past the lesson it was checking.";
  "A LESSON ALREADY FINISHED IS NEVER THE MARK even where it is the first one open, because the mark says where the learner goes next and a finished lesson is where they have been.";
  arguments_assert(arguments, 4);
  if (way_marked) {
    return way_marked;
  }
  if (complete) {
    return way_marked;
  }
  if (open) {
    html_data_set_test_happy(button);
    let marked = true;
    return marked;
  }
  return way_marked;
}
