import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { examples_page_html } from "./examples_page_html.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
export async function examples_page_write() {
  let examples = await examples_corpus_read();
  let html = examples_page_html(examples);
  let out = folder_public_join("examples.html");
  await file_overwrite(out, html);
  return out;
}
