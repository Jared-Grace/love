import { each_async } from "./each_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { property_exists } from "./property_exists.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { html_p } from "./html_p.mjs";
import { app_reply_buttons_refresh } from "./app_reply_buttons_refresh.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { html_disable } from "./html_disable.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span } from "./html_span.mjs";
import { app_reply_love } from "./app_reply_love.mjs";
import { each } from "./each.mjs";
import { double } from "./double.mjs";
import { list_map } from "./list_map.mjs";
import { range_1 } from "./range_1.mjs";
import { html_button } from "./html_button.mjs";
import { list_empty } from "./list_empty.mjs";
import { html_on_keydown_body } from "./html_on_keydown_body.mjs";
import { text_take_less_1 } from "./text_take_less_1.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { list_skip } from "./list_skip.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_reply_main_old(context) {
  let r = await app_reply_initialize(context);
  let books = property_get(r, "books");
  let choices = property_get(r, "choices");
  let languages = property_get(r, "languages");
  let skipped = list_skip(languages, 2);
  let root = property_get(r, "root");
  let original = property_get(r, "original");
  let en = property_get(r, "en");
  let encouragement = property_get(r, "encouragement");
  let verses_list = null;
  let copied = [];
  let languages_chosens = [];
  let buttons = null;
  let preview = null;
  let chosens = [];
  let typed = "";
  async function verse_random_reset_1() {
    await reset();
    await verse_random_add();
  }
  function verse_random_reset_n(n) {
    let v2 = async function inner() {
      await reset();
      await each_range_async(n, verse_random_add);
    };
    return v2;
  }
  async function verse_random_add() {
    let reference = list_random_item(encouragement);
    let verses = await ebible_references_parse_lines([en], [reference]);
    let translations = [];
    let v = {
      verses,
      reference,
      translations,
    };
    list_add(verses_list, v);
    await app_reply_main_verse_add([v], original);
  }
  function lambda6(event) {
    let key = property_get(event, "key");
    let result = null;
    if (equal(key, "Backspace")) {
      result = text_take_less_1(typed);
    } else {
      result = key;
    }
    typed = result;
    buttons_refresh();
  }
  html_on_keydown_body(lambda6);
  async function reset() {
    verses_list_reset();
    list_empty(copied);
    list_empty(chosens);
    list_empty(languages_chosens);
    typed = "";
    buttons_refresh();
    await preview_refresh();
    languages_reset();
  }
  let component4 = html_button(root, "❤️", love);
  function lambda14() {
    list_empty(copied);
    list_empty(chosens);
    buttons_refresh();
    preview_refresh();
  }
  let component3 = html_button(root, "Clear", lambda14);
  html_button(root, "Reset 1", verse_random_reset_1);
  let rg = range_1(5);
  let mapped = list_map(rg, double);
  function lambda13(v) {
    let f = verse_random_reset_n(v);
    html_button(root, text_combine("Reset ", v), f);
  }
  each(mapped, lambda13);
  function verses_list_reset() {
    verses_list = [];
  }
  async function love() {
    await verse_random_reset_n(3)();
    await app_reply_love(languages, language_choose);
  }
  let component2 = html_button(root, "Copy", preview_refresh);
  let component_languages = html_span(root);
  languages_reset();
  function languages_reset() {
    html_clear(component_languages);
    function lambda5(language) {
      let name = property_get(language, "name");
      let language_button = null;
      async function lambda7() {
        html_disable(language_button);
        await language_choose(language);
      }
      language_button = html_button(component_languages, name, lambda7);
    }
    each(languages, lambda5);
  }
  async function language_choose(language) {
    let bible_folder = property_get(language, "bible_folder");
    let language_code = property_get(language, "language_code");
    let v = await app_reply_main_verse_add(verses_list, bible_folder);
    list_add_first(languages_chosens, language_code);
    await preview_refresh();
  }
  let typed_get = function lambda15() {
    return typed;
  };
  let buttons_refresh = app_reply_buttons_refresh(typed_get, chosens, buttons);
  function lambda(choice) {
    let response = property_get(choice, "response");
    let text = property_get(choice, "text");
    let component = html_button(root, text, lambda3);
    async function lambda3() {
      list_add(copied, response);
      await preview_refresh();
      list_add(chosens, component);
      typed = "";
      buttons_refresh();
    }
    return component;
  }
  buttons = list_map(choices, lambda);
  preview = html_p(root);
  buttons_refresh();
  async function preview_refresh() {
    let concated = concated_get();
    let joined = await list_join_newline_2_copy(concated);
    html_clear(preview);
    html_p_text_multiple(preview, concated);
    html_text_set(preview, joined);
  }
  function concated_get() {
    if (false) {
      function lambda9(item) {}
      each(list, lambda9);
      let chapter_code = property_get(verse, "chapter_code");
      let book_code = ebible_chapter_code_to_book(chapter_code);
      let chapter_name = ebible_chapter_code_to_name(chapter_code);
      let book_name = ebible_book_code_to_name(books, book_code);
      let verse_number = property_get(verse, "verse_number");
      let reference2 = text_combine_multiple([
        book_name,
        " ",
        chapter_name,
        ":",
        verse_number,
      ]);
    }
    let other = [];
    function lambda11(v) {
      let reference = property_get(v, "reference");
      list_add(other, reference);
      let original_translation = null;
      let exists = property_exists(v, "translations");
      if (exists) {
        let translations2 = property_get(v, "translations");
        let v3 = list_last_remaining(translations2);
        let remaining = property_get(v3, "remaining");
        let last = property_get(v3, "last");
        original_translation = last;
        if (remaining !== null) {
          each(remaining, verses_add);
        }
      }
      verses_add(v);
      if (original_translation !== null) {
        verses_add(original_translation);
      }
    }
    each(verses_list, lambda11);
    let ne = list_empty_not_is(languages_chosens);
    if (ne) {
      list_add(other, languages_chosens);
    }
    let v22 = prayer_blessing_expand();
    let concated = list_concat_multiple([copied, [v22], other]);
    return concated;
    function verses_add(v) {
      let verses3 = property_get(v, "verses");
      let verse_texts = list_map_property(verses3, "text");
      list_add_multiple(other, verse_texts);
    }
  }
  async function app_reply_main_verse_add(verses_list, bible_folder) {
    async function lambda12(v_item) {
      let verses2 = property_get(v_item, "verses");
      let reference = property_get(v_item, "reference");
      async function lambda8(verse) {
        let chapter_code = property_get(verse, "chapter_code");
        let verse_number = property_get(verse, "verse_number");
        let d = await ebible_verse_browser(
          bible_folder,
          chapter_code,
          verse_number,
        );
        return d;
      }
      let verses = await list_map_unordered_async(verses2, lambda8);
      let v = {
        verses,
        reference,
      };
      let translations3 = property_get(v_item, "translations");
      list_add_first(translations3, v);
    }
    await each_async(verses_list, lambda12);
  }
}
