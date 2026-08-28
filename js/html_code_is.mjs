import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_code_doctype } from "./html_code_doctype.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { html_code_tag } from "./html_code_tag.mjs";
import { text_includes } from "./text_includes.mjs";
export function html_code_is(contents) {
  "$plain contents";
  "whether this text is a page of the kind this generates, judged from the two lines every one of them opens with";
  "WHAT THE PAGE ELEMENT SAYS IS DELIBERATELY NOT LOOKED AT. It used to be: the whole opening was built with the page element's attributes in it and the text had to start with exactly that. Those attributes are an app's own now - one that asks to be painted dark before anything arrives carries a colour there - so a built opening only ever matched the apps that ask for nothing, and this could not build the other one because it does not know which app it is holding. It cannot know: the app's name is read out of the page below, and the reading only happens once this has said yes.";
  "So it asks for the parts that are the same on every page instead. The opening line is exactly the doctype, the line under it opens a page element, and the line after that element closes is a head with nothing on it. A page somebody wrote by hand would have to match all three to be mistaken for one of these.";
  arguments_assert(arguments, 1);
  let attributes_none = {};
  let v = html_code_doctype();
  let opening = text_combine_multiple([v, "\n", "<html"]);
  let starts = text_starts_with(contents, opening);
  if (not(starts)) {
    return false;
  }
  let r = html_code_tag("head", attributes_none);
  let head = text_combine_multiple([">\n", r, "\n"]);
  let headed = text_includes(contents, head);
  return headed;
}
