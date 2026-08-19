import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
export function bless_view_blessed(blessed, view) {
  arguments_assert(arguments, 2);
  ("Everybody in sight who has already been prayed for - what the marks on the screen are");
  ("drawn from.");
  ("Worked out fresh from the record rather than remembered on the layer that draws it, so");
  ("a mark cannot come to disagree with what has been prayed. A person who was covered by a");
  ("prayer over their whole block lights up the moment they walk into view, without anybody");
  ("having gone back to write their name down.");
  ("Handed back as a view, the same shape a renderer hands in, because that is what the");
  ("drawing already knows how to read.");
  let people = bless_view_people(view);
  function person_marked(person) {
    let marked = bless_person_blessed_is(blessed, person);
    return marked;
  }
  let lit = list_filter(people, person_marked);
  let view_lit = bless_view_of_people(lit);
  return view_lit;
}
