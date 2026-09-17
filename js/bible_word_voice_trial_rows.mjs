import { bible_word_voice_trial_phoneme_rows } from "./bible_word_voice_trial_phoneme_rows.mjs";
import { bible_word_voice_trial_short_rows } from "./bible_word_voice_trial_short_rows.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
export async function bible_word_voice_trial_rows() {
  "Every word of the Google voice trial, grouped by language, each with the address of its recording in each voice.";
  "The recordings sit under gitignore on this machine, which the local server hands out under /love/, so they are heard on a phone without being sent anywhere or kept in git.";
  "The words are asked for again in the same way the trial asked for them, so a row's number is the number in the recording's file name.";
  let sets = [
    {
      key: "heb",
      label: "Hebrew · Genesis 1",
      chapter_code: "GEN01",
      voices: [
        ["he-IL-Wavenet-D", "WaveNet (male)", "wavenet"],
        ["he-IL-Chirp3-HD-Achird", "Chirp (male)", "chirp"],
      ],
      rtl: true,
    },
    {
      key: "gem",
      label: "Hebrew · Gemini",
      chapter_code: "GEN01",
      voices: [
        ["gemini_plain", "Plain", "plain"],
        ["gemini_told", "Told the sounds", "told"],
        ["gemini_once", "Told, once", "once"],
        ["gemini_translit", "Transliteration only", "translit"],
        ["gemini_joined", "No dots", "joined"],
        ["gemini_biblical", "Biblical", "biblical"],
      ],
      rtl: true,
    },
    {
      key: "gem_voices",
      label: "Hebrew · Gemini voices",
      chapter_code: "GEN01",
      voices: [
        ["Charon", "Charon (male)", "charon"],
        ["Puck", "Puck (male)", "puck"],
        ["Kore", "Kore (female)", "kore"],
        ["Aoede", "Aoede (female)", "aoede"],
      ],
      rtl: true,
    },
    {
      key: "gem_chosen",
      label: "Hebrew · chosen voices",
      chapter_code: "GEN01",
      voices: [
        ["Iapetus", "Iapetus (male)", "iapetus"],
        ["Achird", "Achird (male)", "achird"],
        ["Erinome", "Erinome (female)", "erinome"],
        ["Vindemiatrix", "Vindemiatrix (female)", "vindemiatrix"],
      ],
      rtl: true,
    },
    {
      key: "grc",
      label: "Greek · John 1",
      chapter_code: "JHN01",
      voices: [
        ["el-GR-Wavenet-B", "WaveNet (female)", "wavenet"],
        ["el-GR-Chirp3-HD-Achernar", "Chirp (female)", "chirp_female"],
        ["el-GR-Chirp3-HD-Achird", "Chirp (male)", "chirp"],
      ],
      rtl: false,
    },
    {
      key: "grc_fix",
      label: "Greek · new spelling",
      chapter_code: "JHN01",
      voices: [["el-GR-Wavenet-B", "WaveNet (female)", "wavenet"]],
      rtl: false,
    },
  ];
  let result = [];
  for (let s of sets) {
    let words = await bible_interlinear_chapter_word_forms_first(
      s.chapter_code,
      25,
    );
    function lambda2(w, index) {
      function lambda([name, label, pick]) {
        let r = {
          name,
          label,
          pick,
          url:
            "/love/gitignore/bible_word_voice_trial/" +
            s.key +
            "/" +
            index +
            "_" +
            name +
            ".mp3",
        };
        return r;
      }
      let r2 = {
        id: s.key + "-" + index,
        number: index + 1,
        text: w.text,
        meta: w.translit + " · " + w.gloss + " · Strong's " + w.strong,
        voices: s.voices.map(lambda),
      };
      return r2;
    }
    let rows = words.map(lambda2);
    result.push({
      key: s.key,
      label: s.label,
      rtl: s.rtl,
      rows,
    });
  }
  result.push({
    key: "test",
    label: "Short-word tests",
    rtl: false,
    rows: bible_word_voice_trial_short_rows(),
  });
  result.push({
    key: "phoneme",
    label: "Hebrew · told the sounds",
    rtl: false,
    rows: bible_word_voice_trial_phoneme_rows(),
  });
  return result;
}
