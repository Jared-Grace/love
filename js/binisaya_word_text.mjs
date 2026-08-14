import { binisaya_sleep } from "./binisaya_sleep.mjs";
import { binisaya_word_url } from "./binisaya_word_url.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { http_generic } from "./http_generic.mjs";
export async function binisaya_word_text(word) {
  "Ask binisaya.com for one Cebuano word and hand back the page as it came, still unread.";
  "$plain word";
  "the word is a Cebuano word being looked up. It is spelled into an address and asked for; nothing here reads or writes a file, and nothing it answers with is run.";
  "this waits its turn before asking, because that is what asking politely means here - the site is one community's work on a small machine, and a sweep over a whole Bible's vocabulary must arrive as a queue rather than as a flood.";
  "It waits the time the site itself asks for rather than the shared few seconds, and it turns the shared waiting off so the two do not stand one after the other. The site states its rate in its own robots file, so waiting the shared guess here would be asking three times faster than it said - and the shared guess is for the sites that have said nothing at all.";
  let url = binisaya_word_url(word);
  await binisaya_sleep();
  let options = {
    method: "GET",
    sleep: false,
  };
  let buffer = await http_generic(url, options);
  let text = buffer_text_to(buffer);
  return text;
}
