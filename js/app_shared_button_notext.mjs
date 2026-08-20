import { app_shared_button_face } from "./app_shared_button_face.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_button_notext } from "./html_button_notext.mjs";
export function app_shared_button_notext(parent, lambda) {
  "A button dressed the way every button in these apps is dressed, with nothing written on it yet.";
  "Its neighbour that takes a word is built out of this and then writes the word on. Both exist because a button whose face is one piece of writing and a button whose face is several pieces laid side by side are put together differently, and only the second can hold an arrow and a word as separate things - which is what lets the arrow move to the other side for a reader whose language runs the other way.";
  arguments_assert(arguments, 2);
  ("the dressing is asked for rather than written out, because a link that leads somewhere has to stay an anchor and wants the same face - so the face is now its own thing and this is one of the two callers of it");
  let component = html_button_notext(parent, lambda);
  app_shared_button_face(component);
  return component;
}
