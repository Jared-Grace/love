import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
import { sleep } from "./sleep.mjs";
export async function app_autopray_main() {
  let body = html_document_body();
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    html_clear(body);
    html_p_text_multiple(body, [verse_text, verse_reference]);
    await sleep(10);
  }
  await each_object_async(v, lambda2);
}
