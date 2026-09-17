import { html_hash_name_second_set } from "./html_hash_name_second_set.mjs";
import { html_hash_name_second_or_empty } from "./html_hash_name_second_or_empty.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_color_page_dark } from "./app_shared_color_page_dark.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_button } from "./html_button.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_value_get } from "./html_value_get.mjs";
export async function app_original_bible_word_voice_trial_preview() {
  "The screen for judging which Google voice says a single Hebrew or Greek Bible word better, on the sandbox app at hash bible_word_voice_trial: play both recordings of a word, pick the better one or call them the same, and write what was heard.";
  "PICKS AND COMMENTS ARE KEPT ON THIS MACHINE THROUGH THE API, so whoever reads the review back reads the file rather than asking for it to be copied out of a phone.";
  "A COMMENT IS SENT A MOMENT AFTER TYPING STOPS AND NOT ON EVERY KEY, and it is sent together with the pick, because the stored record for a word is always the whole of what its row shows.";
  let root = html_body_div();
  html_style_assign(root, {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "12px 16px 48px",
    fontFamily: "system-ui, sans-serif",
  });
  html_p_text(
    root,
    "Play both voices for a word, pick the better one, and write what you hear - a wrong stress, a clipped ending, a vowel that isn't there. Everything saves by itself.",
  );
  let tabs = html_div(root);
  html_style_assign(tabs, {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    margin: "8px 0",
  });
  let tally = html_p_text(root, "");
  html_style_assign(tally, {
    fontSize: "0.85rem",
    color: app_shared_color_gray_dark(),
  });
  let list = html_div(root);
  let f_name = fn_name("bible_word_voice_trial_rows");
  let sets = await api_read(f_name, []);
  let f_name2 = fn_name("bible_word_voice_trial_reviews");
  let reviews = await api_read(f_name2, []);
  let timers = {};
  function review_of(id) {
    let r2 = {
      pick: "",
      note: "",
      ...reviews[id],
    };
    return r2;
  }
  function tally_render() {
    function lambda5(s) {
      function lambda(row) {
        let r3 = review_of(row.id).pick;
        return r3;
      }
      function lambda2(p) {
        let neq = not_equal(p, "");
        return neq;
      }
      let picks = s.rows.map(lambda).filter(lambda2);
      let count = function lambda4(k) {
        function lambda3(p) {
          let eq = equal(p, k);
          return eq;
        }
        let r4 = picks.filter(lambda3).length;
        return r4;
      };
      function lambda12(voice) {
        let r10 = voice.label + " " + count(voice.pick);
        return r10;
      }
      let counted = s.rows[0].voices.map(lambda12).join(" · ");
      let r5 =
        s.label +
        ": " +
        counted +
        " · same " +
        count("same") +
        " · " +
        picks.length +
        "/" +
        s.rows.length;
      return r5;
    }
    function lambda13(s) {
      let judged = greater_than(s.rows[0].voices.length, 1);
      return judged;
    }
    let lines = sets.filter(lambda13).map(lambda5);
    let text2 = lines.join("   |   ");
    html_text_set(tally, text2);
  }
  async function save(id, saved) {
    let r = review_of(id);
    html_text_set(saved, "saving…");
    let f_name3 = fn_name("bible_word_voice_trial_review_set");
    await api_read(f_name3, [id, r.pick, r.note]);
    html_text_set(saved, "saved");
  }
  function set_render(s) {
    html_clear(list);
    for (let row of s.rows) {
      let card = html_div(list);
      let right = app_shared_color_gray_light();
      html_style_assign(card, {
        borderTop: text_combine("1px solid ", right),
        padding: "12px 0",
        display: "grid",
        gap: "6px",
      });
      let head = html_div(card);
      html_style_assign(head, {
        display: "flex",
        gap: "12px",
        alignItems: "baseline",
        flexWrap: "wrap",
      });
      let text3 = String(row.number);
      let number = html_span_text(head, text3);
      html_style_assign(number, {
        color: app_shared_color_gray_dark(),
        fontSize: "0.8rem",
        minWidth: "1.5rem",
      });
      let word = html_span_text(head, row.text);
      html_style_assign(word, {
        fontSize: "2rem",
        lineHeight: "1.2",
        fontFamily: "'SBL Hebrew', 'Gentium Plus', 'Noto Serif', serif",
      });
      if (s.rtl) {
        html_attribute_set(word, "dir", "rtl");
      }
      let meta = html_span_text(head, row.meta);
      html_style_assign(meta, {
        color: app_shared_color_gray_dark(),
        fontSize: "0.85rem",
      });
      let controls = html_div(card);
      html_style_assign(controls, {
        display: "flex",
        gap: "6px",
        flexWrap: "wrap",
        alignItems: "center",
      });
      for (let voice of row.voices) {
        async function lambda6() {
          let r6 = await html_sound_url_play(voice.url);
          return r6;
        }
        html_button(controls, "▶ " + voice.label, lambda6);
      }
      let saved = html_span_text(card, "");
      function lambda11(voice) {
        let r9 = [voice.pick, voice.label + " best"];
        return r9;
      }
      let judged = greater_than(row.voices.length, 1);
      let picks = judged ? [...row.voices.map(lambda11), ["same", "Same"]] : [];
      let pick_buttons = [];
      function picks_render() {
        let current = review_of(row.id).pick;
        for (let [k, b] of pick_buttons) {
          let on = equal(current, k);
          html_style_assign(b, {
            background: on ? app_shared_color_page_dark() : "",
            color: on ? app_shared_color_white() : "",
          });
        }
      }
      for (let [k, label] of picks) {
        function lambda7() {
          let r = review_of(row.id);
          r.pick = equal(r.pick, k) ? "" : k;
          reviews[row.id] = r;
          picks_render();
          tally_render();
          save(row.id, saved);
        }
        let b = html_button(controls, label, lambda7);
        pick_buttons.push([k, b]);
      }
      picks_render();
      let box = html_textarea(card);
      html_attribute_set(box, "placeholder", "Comment on this pair");
      html_attribute_set(box, "rows", "2");
      html_style_assign(box, {
        width: "100%",
        boxSizing: "border-box",
        font: "inherit",
        fontSize: "0.9rem",
        padding: "6px 8px",
      });
      html_value_set(box, review_of(row.id).note);
      function lambda9() {
        let r = review_of(row.id);
        r.note = html_value_get(box);
        reviews[row.id] = r;
        html_text_set(saved, "…");
        clearTimeout(timers[row.id]);
        function lambda8() {
          let r7 = save(row.id, saved);
          return r7;
        }
        timers[row.id] = setTimeout(lambda8, 800);
      }
      html_on_input(box, lambda9);
      html_style_assign(saved, {
        color: app_shared_color_gray_dark(),
        fontSize: "0.75rem",
        minHeight: "1em",
      });
    }
  }
  for (let s of sets) {
    function lambda10() {
      html_hash_name_second_set(s.key);
      let r8 = set_render(s);
      return r8;
    }
    html_button(tabs, s.label, lambda10);
  }
  html_p_text(
    root,
    "Both Hebrew voices are male. Google has only a female WaveNet voice for Greek, so Greek also has a female Chirp voice to compare it with fairly.",
  );
  tally_render();
  let asked = html_hash_name_second_or_empty();
  function lambda14(s) {
    let eq = equal(s.key, asked);
    return eq;
  }
  let found = sets.filter(lambda14);
  let opened = greater_than(found.length, 0) ? found[0] : sets[0];
  set_render(opened);
}
