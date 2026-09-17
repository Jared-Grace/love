import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_shapes } from "./app_code_lessons_shapes.mjs";
import { app_code_lessons_stretched } from "./app_code_lessons_stretched.mjs";
import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { app_code_lesson_lines_solved } from "./app_code_lesson_lines_solved.mjs";
import { app_code_line_shape } from "./app_code_line_shape.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_line_kinds } from "./app_code_line_kinds.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_any } from "./list_any.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_kinds_introduced(rounds) {
  arguments_assert(arguments, 1);
  ("Every lesson that writes a kind of code no lesson before it wrote, beside how much of that lesson is about the kind it brings in: the kinds themselves, how many of the lesson's lines carry one of them, and how many lines it has. Thinnest share first.");
  ("This answers whether the course teaches what it uses. A lesson that brings in a sign and puts that sign on every line it hands out is the lesson that sign belongs to, and a learner who has worked through it has been taught it. A lesson that brings in a sign on four lines out of a hundred and twenty-seven has not taught it to anybody; the sign arrived as decoration on a lesson about something else, and every later line carrying it asks for something no lesson ever gave.");
  ("Nothing here is called out of place and no number decides anything, because the course draws its own line and draws it plainly. MEASURED 2026-09-17: twenty-nine lessons bring in a kind, and twenty-six of them carry it on every single line - lesson eleven is the whole of the plus sign, lesson ninety-nine the whole of Math.abs. Against twenty-six at all of it, the three that are not are visible without a threshold being written down anywhere, and a reader can weigh each one instead of being handed a verdict. This is the lesson of the reading next door: ",
    fn_name("app_code_lessons_order_ahead"),
    " accuses, and every one of the thirty-seven lessons it accused was sound.");
  ("The three, at that measurement, were lesson fifteen at about thirteen in a hundred, lesson seventy-two at half, and lesson seventy at about three in a hundred. The first two explain themselves once opened - fifteen teaches a subtraction whose answer goes below nothing, so the minus sign it brings in stands on the answers rather than the questions, and seventy-two teaches four named functions by setting each beside the sign it stands for, so half of what it hands out is deliberately the old form. Seventy does not explain itself: it is a lesson about which of two numbers is less, and the power sign it brings in is on four of its lines and on twelve lines in the whole course, and no lesson anywhere is about it.");
  ("A lesson that hands out no worked-out code brings in no kinds and is simply not here, which is nothing rather than none.");
  ("The share is near enough rather than exact, and the reading leans on the part of it that is exact. A lesson is asked what it can hand out, and for some lessons that comes back a slightly different size each time - lesson seventy answered a hundred and thirty-five, a hundred and thirty-two and a hundred and twenty-eight on three runs, while the four lines carrying the power sign were the same four every time. So the share moves a little and the ordering does not, and the question this is really for - does the lesson carry what it brings in on every line - is steady whatever the size, because a lesson carrying it on all of them carries it on all of however many it drew.");
  let fns = app_code_lessons_fns();
  let shapes = app_code_lessons_shapes(rounds);
  let stretched = app_code_lessons_stretched(shapes);
  let introduced = [];
  let place = 0;
  for (let fn of fns) {
    ("the stretched reading already worked out which kinds are new here, so the same walk is not made twice and cannot come out differently the second time");
    let shape = list_get(stretched, place);
    place = add_1(place);
    let fresh = property_get(shape, "fresh");
    let brings_nothing = list_empty_is(fresh);
    if (brings_nothing) {
      continue;
    }
    let lesson = app_code_lesson_fn_id_set(fn);
    let lines = app_code_lesson_lines_solved(lesson, rounds);
    let carrying = 0;
    let counted = 0;
    for (let line of lines) {
      let line_shape = app_code_line_shape(line);
      let unread = null_is(line_shape);
      if (unread) {
        continue;
      }
      counted = add_1(counted);
      let line_kinds = app_code_line_kinds(line);
      function fresh_is(kind) {
        "this kind of thing, if it is one of the ones this lesson brings in";
        let is = list_includes(fresh, kind);
        return is;
      }
      let brought = list_any(line_kinds, fresh_is);
      if (brought) {
        carrying = add_1(carrying);
      }
    }
    list_add(introduced, {
      place: property_get(shape, "place"),
      id: property_get(shape, "id"),
      fresh,
      carrying,
      lines: counted,
    });
  }
  function share_of(entry) {
    "how much of a lesson is about what it brings in, as a part of one";
    let carrying = property_get(entry, "carrying");
    let lines = property_get(entry, "lines");
    let share = divide(carrying, lines);
    return share;
  }
  list_sort_number_mapper(introduced, share_of);
  let r = {
    lessons: list_size(shapes),
    introducing: list_size(introduced),
    introduced,
  };
  return r;
}
