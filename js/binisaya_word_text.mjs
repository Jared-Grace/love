import { binisaya_word_url } from "./binisaya_word_url.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { http } from "./http.mjs";
export async function binisaya_word_text(word) {
  "Ask binisaya.com for one Cebuano word and hand back the page as it came, still unread.";
  "$plain word";
  "the word is a Cebuano word being looked up. It is spelled into an address and asked for; nothing here reads or writes a file, and nothing it answers with is run.";
  "this waits its turn before asking, because that is what asking politely means here - the site is one community's work on a small machine, and a sweep over a whole Bible's vocabulary must arrive as a queue rather than as a flood. the waiting lives in the shared asker and is on unless a caller turns it off, so this gets it by saying nothing.";
  let url = binisaya_word_url(word);
  let buffer = await http(url);
  let text = buffer_text_to(buffer);
  return text;
}
