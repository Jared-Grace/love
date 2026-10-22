import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_exists } from "./file_exists.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { file_exists_not_assert } from "./file_exists_not_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function audio_wav_tail_echo_write(
  path_wav,
  seconds_cut,
  seconds_fade_start,
) {
  arguments_assert(arguments, 3);
  ("$plain path_wav");
  ("$plain seconds_cut");
  ("$plain seconds_fade_start");
  ("Writes a copy of a song's wav whose ending rings out in an echo: the song plays as it is up to seconds_cut, then the sound from there on is echoed five times and padded two and a half seconds so the echo has room, and the whole fades out over a second and a half from seconds_fade_start. The copy goes next to the song, named after it with ' echo tail' before the ending.");
  ("★ IT DECIDES FOR ITSELF WHAT FFMPEG MAY DO, so no argument can make it do anything else, and that is what lets it be granted. ffmpeg on its own writes any file it is told to, so a rule for ffmpeg covers all of that. Here the program, every option, every filter and the name of what is written are spelled below; what comes in is one file to read and two numbers.");
  ("THE ECHO IS FIXED: delays 110 220 330 440 550 milliseconds, falling 0.4 0.28 0.2 0.14 0.1, joined to the song with a crossfade of a twentieth of a second. These are the values first tried on Psalm 119 Beth; change them here, once, rather than making them arguments.");
  ("THE NUMBERS ARE PLAIN DIGITS WITH AT MOST ONE POINT, checked before anything runs. They are joined into the filter text, where a colon, a comma, a semicolon or a bracket is structure - a number allowed to hold one could add a filter. Digits and one point cannot.");
  ("THE FILE IS A WHOLE PATH ENDING IN .wav, THAT EXISTS, READ AS A WAV FROM DISK ONLY, AND WHAT IS WRITTEN MUST NOT EXIST YET. Starting from the root, it cannot be read as an option; forcing the reader means a playlist renamed to end in .wav is refused rather than followed. Nothing is ever overwritten: the name is checked first, and ffmpeg is also told never to overwrite.");
  let whole = text_starts_with(path_wav, "/");
  assert_json(whole, {
    hint: "only a whole path from the root is read, so nothing handed in can be read as an option",
    path_wav,
  });
  let wav = text_ends_with(path_wav, ".wav");
  assert_json(wav, {
    hint: "only a .wav file is read",
    path_wav,
  });
  let exists = await file_exists(path_wav);
  assert_json(exists, {
    hint: "there is no file at this path",
    path_wav,
  });
  let numbers = [seconds_cut, seconds_fade_start];
  for (let n of numbers) {
    let plain = /^[0-9]+(\.[0-9]+)?$/.test(n);
    assert_json(plain, {
      hint: "each number must be plain digits with at most one point, so it cannot add anything to the filters",
      n,
    });
  }
  let left = number_from_text(seconds_cut);
  let seconds_tail = subtract(left, 0.05).toFixed(3);
  let without = text_suffix_without(path_wav, ".wav");
  let path_out = text_combine_multiple([without, " echo tail.wav"]);
  await file_exists_not_assert(path_out);
  let filter_text = text_combine_multiple([
    "[0:a]asplit[o][t];[o]atrim=end=",
    seconds_cut,
    "[a];[t]atrim=start=",
    seconds_tail,
    ",asetpts=PTS-STARTPTS,apad=pad_dur=2.5,aecho=1:0.9:110|220|330|440|550:0.4|0.28|0.2|0.14|0.1[b];[a][b]acrossfade=d=0.05,afade=t=out:st=",
    seconds_fade_start,
    ":d=1.5",
  ]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-n",
    "-protocol_whitelist",
    "file",
    "-f",
    "wav",
    "-i",
    path_wav,
    "-filter_complex",
    filter_text,
    path_out,
  ];
  await ffmpeg_words_run(command_words);
  let r = {
    path_out,
  };
  return r;
}
