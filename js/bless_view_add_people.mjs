import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_add_people(view, people) {
  arguments_assert(arguments, 2);
  ("A view widened by some more people - the same view with those people counted as seen");
  ("too.");
  ("Uniquely, because the two lists overlap constantly: somebody the player is holding on");
  ("to is usually also somebody the player can still see, and counted twice they would be");
  ("offered twice to anything reading the view.");
  ("It goes through the view rather than round it, so whatever a view is made of stays the");
  ("view's own business. A caller reaching in to push a name onto a list would be a second");
  ("place that knows how a view is built, and there is meant to be exactly one.");
  let seen = bless_view_people(view);
  let both = list_concat_unique(seen, people);
  let view_wider = bless_view_of_people(both);
  return view_wider;
}
