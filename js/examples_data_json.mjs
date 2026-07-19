import { examples_corpus_read } from "./examples_corpus_read.mjs";
// The example corpus as a JSON string, for the client app to fetch and render.
// The corpus itself is node-only (readdir + dynamic import), so it is serialized
// at build time into a browser-loadable data file.
export async function examples_data_json() {
  let examples = await examples_corpus_read();
  let r = JSON.stringify(examples);
  return r;
}
