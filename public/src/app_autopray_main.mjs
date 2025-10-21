import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
export async function app_autopray_main() {
  let body = html_document_body();
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    html_p_text_multiple(parent, [verse_text, verse_reference]);
  }
  await each_object_async(v, lambda2);
}
