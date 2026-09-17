import { bible_word_voice_trial_phoneme_tried } from "./bible_word_voice_trial_phoneme_tried.mjs";
export function bible_word_voice_trial_phoneme_rows() {
  "The rows of the voice trial screen for the phoneme trial: one Hebrew word, sent to a voice each way it was tried, to hear whether spelling out its sounds changes what is said.";
  "Each has one voice and nothing to choose between, so the screen shows them to be heard and written about, not picked over.";
  "A Gemini voice is labelled as one, because its name is a person's name that says nothing of which kind of voice it is.";
  function lambda([key, voice, input, text, meta], index) {
    let label = voice.model_name ? voice.name + " · Gemini" : voice.name;
    let r = {
      id: "phoneme-" + key,
      number: index + 1,
      text,
      meta,
      voices: [
        {
          name: voice.name,
          label,
          pick: "wavenet",
          url: "/love/gitignore/bible_word_voice_trial/phoneme/" + key + ".mp3",
        },
      ],
    };
    return r;
  }
  let rows = bible_word_voice_trial_phoneme_tried().map(lambda);
  return rows;
}
