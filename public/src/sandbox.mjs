import { marker } from "../../../love/public/src/marker.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function sandbox() {
  marker("1");
  const wn = await import("wordnetjs");
  const word = "happy";
  const synonyms = wn.synonyms(word);
  console.log(`Synonyms for "${word}":`, synonyms);
}
