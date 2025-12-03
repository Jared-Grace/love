import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const WordNet = (await import("wordnetjs")).default;
  const wn = new WordNet();
  const word = "happy";
  const synonyms = wn.synonyms(word);
  console.log(`Synonyms for "${word}":`, synonyms);
}
