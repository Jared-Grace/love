import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { file_exists } from "./file_exists.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { subtract } from "./subtract.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_exists_not_assert } from "./file_exists_not_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function audio_wav_tail_slow_echo_write(
  path_wav,
  seconds_cut,
  seconds_fade_start,
) {
  arguments_assert(arguments, 3);
  ("$plain path_wav");
  ("$plain seconds_cut");
  ("$plain seconds_fade_start");
  ("Writes a copy of a song's wav whose ending is let down more slowly: the song plays as it is up to seconds_cut, then the sound from there on is played at half speed without changing its pitch, echoed, and padded so the echo has room, and the whole fades out over a second and a half from seconds_fade_start. The copy goes next to the song, named after it with ' slow echo tail' before the ending.");
  ("★ FOR A RECORDING WHOSE OWN FADE COMES TOO SOON. Told 2026-10-22 of Psalm 118:1-9 song 1, 'if possible wait to fade out until later': the fade is in the recording, so no cut can move it, and an echo alone after it adds only about half a second. Played at half speed, what is already fading takes twice as long to fall silent, so cut it where the fade begins.");
  ("★ IT DECIDES FOR ITSELF WHAT FFMPEG MAY DO, as $fn ",
    fn_name("audio_wav_tail_echo_write"),
    " does, and for the same reason: the program, every option, every filter and the name of what is written are spelled here; what comes in is one file to read and two numbers.");
  ("THE SPEED AND THE ECHO ARE FIXED: half speed, then delays 120 240 360 480 milliseconds falling 0.35 0.25 0.17 0.1, joined to the song with a crossfade of a twentieth of a second. Change them here, once, rather than making them arguments.");
  ("THE NUMBERS ARE PLAIN DIGITS WITH AT MOST ONE POINT, checked before anything runs, because they are joined into the filter text where a colon, a comma, a semicolon or a bracket is structure.");
  ("THE FILE IS A WHOLE PATH ENDING IN .wav, THAT EXISTS, READ AS A WAV FROM DISK ONLY, AND WHAT IS WRITTEN MUST NOT EXIST YET.");
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
  let path_out = text_combine_multiple([without, " slow echo tail.wav"]);
  await file_exists_not_assert(path_out);
  let filter_text = text_combine_multiple([
    "[0:a]asplit[o][t];[o]atrim=end=",
    seconds_cut,
    "[a];[t]atrim=start=",
    seconds_tail,
    ",asetpts=PTS-STARTPTS,atempo=0.5,apad=pad_dur=2,aecho=1:0.9:120|240|360|480:0.35|0.25|0.17|0.1[b];[a][b]acrossfade=d=0.05,afade=t=out:st=",
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
