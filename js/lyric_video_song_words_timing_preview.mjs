import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_audio_controls } from "./html_audio_controls.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_media_time_set } from "./html_media_time_set.mjs";
import { html_media_play } from "./html_media_play.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_button_list } from "./html_button_list.mjs";
import { html_button } from "./html_button.mjs";
import { html_request_animation_frame } from "./html_request_animation_frame.mjs";
import { html_media_time } from "./html_media_time.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { lyric_video_song_audio_url } from "./lyric_video_song_audio_url.mjs";
export async function lyric_video_song_words_timing_preview() {
  arguments_assert(arguments, 0);
  ("The screen for correcting when each word of a song turns red, on the sandbox app at hash lyric_video_song_words_timing: every word is a button, the song plays with the word being sung lit, and a picked word is moved earlier or later by a quarter, an eighth or a sixteenth note.");
  ("★ THE HUMAN ASKED FOR THIS AS THE WAY TO FIX TIMING WITHOUT TAPPING ALONG. The words are already placed on the melody's notes, and most are right; what is left is a handful a note out. Tapping the whole song again to mend those would re-time the words that were right as well, so here only the wrong ones are touched.");
  ("★ EVERY MOVE PLAYS THE WORD AGAIN FROM A MOMENT BEFORE IT. Whether a word now lights on time can only be heard against the singing, and a press that did not play it back would leave a person dragging the player to check every single press.");
  ("★ THE WORD IS LIT FROM EXACTLY WHERE IT IS PLACED, WITHOUT THE VIDEO'S PADDING AND FADES. The video turns a word red a little before it begins so a small mistake is forgiven; that forgiveness would hide the very mistake being looked for here. The rest of the video's rule is kept: a word stays lit until the next word in its line begins, unless the singer stops for a second or more.");
  ("THE CONTROLS STAY AT THE TOP OF THE SCREEN while the words scroll under them, because on a phone a song's words are several screens long and the buttons are needed beside whichever word was picked.");
  ("THE LIT WORD IS WORKED OUT EVERY FRAME RATHER THAN WHEN THE PLAYER SAYS ITS TIME HAS CHANGED. The player says so about four times a second, and a sixteenth note is shorter than that, so a word moved by one would look no different.");
  let root = html_body_div();
  let asked =
    "Choose a song, then tap a word to hear it. Move it earlier or later by a note; it plays again each time so you can hear whether it now turns red on time. Each move is saved straight away; render the video again to see it.";
  html_p_text(root, asked);
  let chosen = html_div(root);
  let panel = html_div(root);
  html_style_assign(panel, {
    position: "sticky",
    top: "0",
    background: "Canvas",
    "z-index": "1",
    "padding-bottom": "8px",
  });
  let audio = html_audio_controls(panel);
  let label = html_div_text(panel, "Tap a word");
  let row = html_div(panel);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "4px",
  });
  let box = html_div(root);
  let desk = {
    name: null,
    lines: [],
    words: [],
    picked: null,
    lit: null,
  };
  function word_seconds_text(entry) {
    let word_now = entry.word;
    let moved = word_now.moved_quarters;
    let said = equal(moved, undefined)
      ? ""
      : ", moved " + moved + " quarter notes";
    let text_label =
      word_now.text + " starts at " + word_now.start + " s" + said;
    return text_label;
  }
  function word_play(entry) {
    let from = subtract(entry.word.start, 1.5);
    let moment = less_than(from, 0) ? 0 : from;
    html_media_time_set(audio, moment);
    html_media_play(audio);
  }
  function word_style(entry) {
    let lit = equal(desk.lit, entry);
    let picked = equal(desk.picked, entry);
    html_style_assign(entry.button, {
      background: lit ? "#c00" : "",
      color: lit ? "white" : "",
      outline: picked ? "3px solid #08f" : "",
    });
  }
  function word_pick(entry) {
    let before = desk.picked;
    desk.picked = entry;
    if (not_equal(before, null)) {
      word_style(before);
    }
    word_style(entry);
    let text2 = word_seconds_text(entry);
    html_text_set(label, text2);
    word_play(entry);
  }
  async function word_move(quarters) {
    let entry = desk.picked;
    if (equal(entry, null)) {
      html_text_set(label, "Tap a word first");
      return;
    }
    let f_move = fn_name("lyric_video_song_word_move");
    let answered = await api_read(f_move, [
      desk.name,
      entry.line_index,
      entry.word_index,
      quarters,
    ]);
    entry.word.start = answered.start;
    entry.word.end = answered.end;
    entry.word.moved_quarters = answered.moved_quarters;
    let text3 = word_seconds_text(entry);
    html_text_set(label, text3);
    word_play(entry);
  }
  let steps = [
    {
      text: "◀ ¼",
      quarters: -1,
    },
    {
      text: "◀ ⅛",
      quarters: -0.5,
    },
    {
      text: "◀ 1/16",
      quarters: -0.25,
    },
    {
      text: "1/16 ▶",
      quarters: 0.25,
    },
    {
      text: "⅛ ▶",
      quarters: 0.5,
    },
    {
      text: "¼ ▶",
      quarters: 1,
    },
  ];
  function step_text(step) {
    let r = step.text;
    return r;
  }
  function step_press(step) {
    word_move(step.quarters);
  }
  html_button_list(row, steps, step_text, step_press);
  function again() {
    let entry = desk.picked;
    if (equal(entry, null)) {
      html_text_set(label, "Tap a word first");
      return;
    }
    word_play(entry);
  }
  html_button(row, "Play again", again);
  function word_done(index) {
    let entry = desk.words[index];
    let next_entry = desk.words[index + 1];
    if (
      equal(next_entry, undefined) ||
      not_equal(next_entry.line_index, entry.line_index)
    ) {
      let r2 = entry.word.end;
      return r2;
    }
    let gap = subtract(next_entry.word.start, entry.word.end);
    let runs_on = less_than(gap, 1);
    let done = runs_on ? next_entry.word.start : entry.word.end;
    return done;
  }
  function word_lit_at(seconds) {
    let found = null;
    for (let index = 0; less_than(index, desk.words.length); index++) {
      let entry = desk.words[index];
      let begun = less_than_equal(entry.word.start, seconds);
      let a = word_done(index);
      let over = less_than_equal(a, seconds);
      if (begun && not(over)) {
        found = entry;
      }
    }
    return found;
  }
  async function follow() {
    while (true) {
      await html_request_animation_frame();
      let seconds = html_media_time(audio);
      let lit = word_lit_at(seconds);
      if (equal(lit, desk.lit)) {
        continue;
      }
      let before = desk.lit;
      desk.lit = lit;
      if (not_equal(before, null)) {
        word_style(before);
      }
      if (not_equal(lit, null)) {
        word_style(lit);
      }
    }
  }
  async function song_show(name_song) {
    html_clear(box);
    let f_read = fn_name("lyric_video_song_document_read");
    let song = await api_read(f_read, [name_song]);
    if (null_is(song)) {
      html_div_text(box, "this song has no document yet");
      return;
    }
    desk.name = name_song;
    desk.lines = song.lines;
    desk.words = [];
    desk.picked = null;
    desk.lit = null;
    html_text_set(label, "Tap a word");
    let src = lyric_video_song_audio_url(name_song);
    html_src_set(audio, src);
    for (
      let line_index = 0;
      less_than(line_index, desk.lines.length);
      line_index++
    ) {
      let line_now = desk.lines[line_index];
      let holder = html_div(box);
      html_style_assign(holder, {
        display: "flex",
        "flex-wrap": "wrap",
        gap: "4px",
        "margin-top": "12px",
      });
      for (
        let word_index = 0;
        less_than(word_index, line_now.words.length);
        word_index++
      ) {
        let entry = {
          word: line_now.words[word_index],
          line_index,
          word_index,
          button: null,
        };
        function pressed() {
          word_pick(entry);
        }
        entry.button = html_button(holder, entry.word.text, pressed);
        desk.words.push(entry);
      }
    }
  }
  function name_text(name_song) {
    return name_song;
  }
  let f_names = fn_name("lyric_video_song_names");
  let names = await api_read(f_names, []);
  html_button_list(chosen, names, name_text, song_show);
  follow();
  return desk;
}
