import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lessons_stretched(shapes) {
  arguments_assert(arguments, 1);
  ("The same lessons, each told which stretch of the course it belongs to. A lesson writing a kind of thing no lesson before it wrote begins a new stretch, and every lesson after it belongs to that stretch until the next one begins.");
  ("A stretch is what a learner is in the middle of. The course teaches a sign, works it hard, then teaches another sign and starts easy again - so a short line late in the course is not a step backwards, it is the first line of something new. Read across stretches, every hard lesson in the course looks out of place, and that reading said so about a hundred and nineteen of a hundred and fifty-eight.");
  ("The kinds are read off the lessons rather than written down anywhere, so a stretch cannot be wrong about where it starts, and adding a lesson that teaches something new makes a new stretch without anyone saying so.");
  ("A lesson that hands out no worked-out code writes no kinds, so it never begins a stretch and simply belongs to the one it sits in.");
  let stretched = [];
  let seen = [];
  let stretch = 0;
  for (let shape of shapes) {
    let kinds = property_get(shape, "kinds");
    function unseen_is(kind) {
      "this kind of thing, if no lesson before this one wrote it";
      let already = list_includes(seen, kind);
      let n = not(already);
      return n;
    }
    let fresh = list_filter(kinds, unseen_is);
    let started_is = list_empty_not_is(fresh);
    if (started_is) {
      stretch = add_1(stretch);
    }
    list_add_multiple(seen, fresh);
    list_add(stretched, {
      place: property_get(shape, "place"),
      id: property_get(shape, "id"),
      code: property_get(shape, "code"),
      operators: property_get(shape, "operators"),
      depth: property_get(shape, "depth"),
      hardest: property_get(shape, "hardest"),
      kinds,
      stretch,
      fresh,
    });
  }
  return stretched;
}
