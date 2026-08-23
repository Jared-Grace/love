import { text_index_of_try } from "./text_index_of_try.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_code_tag } from "./html_code_tag.mjs";
import { html_code_tag_close } from "./html_code_tag_close.mjs";
import { html_code_indent } from "./html_code_indent.mjs";
import { text_between } from "./text_between.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_code_app_name } from "./html_code_app_name.mjs";
import { html_code_body_own } from "./html_code_body_own.mjs";
export function html_code_parse(contents) {
  ("What ",
    fn_name("html_code"),
    " was given, worked back out of the page it wrote: the app's short name, and the body the app itself supplied.");
  ("Both are undone rather than read off, because both were changed on the way in - the name became a title, and the body was wrapped. Handing back what is literally on the page instead means the next ",
    fn_name("html_code"),
    " treats a title as a name and a wrapped body as an unwrapped one, and the page comes back wrong in two ways at once.");
  ("The body comes back as nothing when the page was not written by ",
    fn_name("html_code"),
    ". Deciding that here is what lets the caller refuse a hand-written page whose head this cannot carry through.");
  ("A page opening its body tag any other way says the same thing and is answered the same way rather than thrown over. ",
    fn_name("html_code_is"),
    " reads only the line the page starts with, so a page kept by hand that copies that line reaches here and then holds nothing in the shape this looks for - the plain body tag alone on its line. Refusing it is the wanted answer, and throwing would take the whole sweep down over one page that was never a fault.");
  let attributes_none = {};
  let title_open = html_code_tag("title", attributes_none);
  let title_close = html_code_tag_close("title");
  let title_text = text_between(contents, title_open, title_close);
  let name = html_code_app_name(title_text);
  let r = html_code_tag("body", attributes_none);
  let v2 = html_code_indent();
  let body_open = text_combine_multiple([r, "\n", v2]);
  let opened = text_index_of_try(contents, body_open);
  let opens = greater_than_equal(opened, 0);
  if (not(opens)) {
    let unwritten = {
      name,
      body: null,
    };
    return unwritten;
  }
  let right = html_code_tag_close("body");
  let body_close = text_combine("\n", right);
  let wrapped = text_between(contents, body_open, body_close);
  let body = html_code_body_own(wrapped);
  let v = {
    name,
    body,
  };
  return v;
}
