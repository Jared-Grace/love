import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_document_fake_lambda } from "./html_document_fake_lambda.mjs";
import { html_element_fake } from "./html_element_fake.mjs";
import { html_element_fake_text } from "./html_element_fake_text.mjs";
export function html_draw_lambda_text(lambda$parent) {
  "The words a little drawing program puts on the page, without a page: it draws into stand-in elements and the text it wrote is read back off them.";
  "This is what keeps a drawing program as readable as the plain sentence it replaced - anything that wants the words can still have them.";
  let element = html_element_fake();
  let root = html_component_wrap(element);
  function draw() {
    lambda$parent(root);
  }
  html_document_fake_lambda(draw);
  let r = html_element_fake_text(element);
  return r;
}
