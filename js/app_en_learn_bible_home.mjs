import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate_download } from "./app_en_learn_bible_gloss_urdu_generate_download.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_url } from "./app_en_learn_bible_gloss_urdu_words_sound_url.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
import { app_en_learn_bible } from "./app_en_learn_bible.mjs";
export async function app_en_learn_bible_home(context) {
  "The reading screen for somebody learning English from the Bible: the verse in English, and under it each English word explained in the reader's own language.";
  "The explanations are about the English wording, so the words shown are the first of the passage's texts, which is the English one - that is what asking for the text rather than the original language means here.";
  "One store of explanations is reached today, the Urdu one, and the reader's language is where the second one goes: the app is named for the language being learned rather than the language being read from, so another language is another store handed in here and nothing else.";
  "★ THIS IS THE ONE SCREEN THAT HANDS IN A WAY OF HEARING THE WORD, AND IT IS THE ONE THAT NEEDS IT. A reader here already knows how their own language sounds and is being taught a language whose spelling does not say how it is spoken; a page that only shows the spelling teaches half of the word. The recordings are asked for by the word itself, so a chapter written next year needs nothing added here.";
  arguments_assert(arguments, 1);
  let download = app_en_learn_bible_gloss_urdu_generate_download;
  let sound_url_get = app_en_learn_bible_gloss_urdu_words_sound_url;
  await app_shared_gloss_bible_home_generic(
    context,
    download,
    true,
    app_en_learn_bible,
    sound_url_get,
  );
}
