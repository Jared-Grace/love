import { html_element_fake } from "./html_element_fake.mjs";
export function html_document_fake_lambda(lambda) {
  "Runs a drawing program with a stand-in for the browser's document in place, so making elements works where there is no browser.";
  "Whatever was there before is put back even when the drawing throws, because a stand-in left behind would quietly catch drawings meant for a real page.";
  let before = globalThis.document;
  let fake = {
    createElement: html_element_fake,
  };
  globalThis.document = fake;
  try {
    lambda();
  } finally {
    globalThis.document = before;
  }
}
