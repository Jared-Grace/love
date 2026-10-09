import { html_style_set } from "./html_style_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { json_to } from "./json_to.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { ebible_offline_chapter_codes_name } from "./ebible_offline_chapter_codes_name.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_kept_any_get } from "./ebible_offline_kept_any_get.mjs";
import { ebible_chapter_codes_canonical_browser } from "./ebible_chapter_codes_canonical_browser.mjs";
import { indexeddb_keys_backend } from "./indexeddb_keys_backend.mjs";
import { ebible_offline_database } from "./ebible_offline_database.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { global_get } from "./global_get.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { ebible_index_flat } from "./ebible_index_flat.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { ebible_offline_download } from "./ebible_offline_download.mjs";
import { dev_trace_add } from "./dev_trace_add.mjs";
import { dev_trace_send } from "./dev_trace_send.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export async function bible_offline_check_preview() {
  "A screen on the sandbox app, at hash bible_offline_check, that checks with one button whether the bible on this device reads with no internet, and sends what it found to the computer.";
  "It reads what is saved first, before anything is fetched, so the answer is about the copy already on the phone; then it reads the chapters a reader would turn to with the internet cut off inside the page, by making every fetch fail, so no wifi switch and no page reload is needed.";
  "Where chapters are missing it saves the bible again and reads once more, so one press answers both whether the old save was whole and whether a fresh one is.";
  ("The report is written into the device trace and sent the way the trace is sent: to the local server on /dev/, to storage on /latest/, where ",
    fn_name("dev_trace_report_download"),
    " takes it down.");
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_p_text(
    root,
    "Checks whether the bible on this phone works with no internet.",
  );
  let status = html_p_text(root, "");
  let shown = html_element(root, "pre");
  html_style_set(shown, "white-space", "pre-wrap");
  html_style_set(shown, "font-size", "0.75em");
  let report = {};
  function show(step) {
    html_text_content_set(status, step);
    let text = json_to(report);
    html_text_content_set(shown, text);
  }
  async function time_limit(lambda, ms) {
    let timer = null;
    let late = new Promise(function on_late(resolve, reject) {
      function fire() {
        reject(new Error("no answer after " + ms + " ms"));
      }
      timer = setTimeout(fire, ms);
    });
    try {
      let v = lambda();
      let r = await Promise.race([v, late]);
      return r;
    } finally {
      clearTimeout(timer);
    }
  }
  async function attempt(lambda) {
    let r0 = await attempt_within(lambda, 15000);
    return r0;
  }
  async function attempt_within(lambda, limit_ms) {
    let started = date_now_milliseconds();
    try {
      let value = await time_limit(lambda, limit_ms);
      let size = Array.isArray(value)
        ? value.length
        : equal(value, null)
          ? null
          : typeof value;
      let left = date_now_milliseconds();
      let r2 = {
        ok: true,
        ms: subtract(left, started),
        size,
      };
      return r2;
    } catch (e) {
      let left2 = date_now_milliseconds();
      let r3 = {
        ok: false,
        ms: subtract(left2, started),
        error: String(e && e.message ? e.message : e),
      };
      return r3;
    }
  }
  async function environment() {
    let estimate = null;
    let persisted = null;
    try {
      estimate = await navigator.storage.estimate();
      estimate = {
        usage: estimate.usage,
        quota: estimate.quota,
      };
    } catch (e) {
      estimate = String(e);
    }
    try {
      persisted = await navigator.storage.persisted();
    } catch (e) {
      persisted = String(e);
    }
    let controller = navigator.serviceWorker
      ? navigator.serviceWorker.controller
      : null;
    let r4 = {
      agent: navigator.userAgent,
      where: location.href,
      online: navigator.onLine,
      estimate,
      persisted,
      service_worker: controller ? controller.scriptURL : null,
    };
    return r4;
  }
  async function canonical_codes() {
    let name = ebible_offline_chapter_codes_name();
    async function kept_get() {
      let r5 = await ebible_offline_kept_any_get(name);
      return r5;
    }
    let kept = await catch_null_async(kept_get);
    if (not_equal(kept, null)) {
      return kept;
    }
    let fetched = await catch_null_async(
      ebible_chapter_codes_canonical_browser,
    );
    return fetched;
  }
  async function saved_state(folders, codes) {
    async function keys_get() {
      let store = ebible_offline_store();
      let r6 = await indexeddb_keys_backend(ebible_offline_database, store);
      return r6;
    }
    let keys = await catch_null_async(keys_get);
    if (equal(keys, null)) {
      let r7 = {
        keys_error: true,
      };
      return r7;
    }
    let state = {
      keys_total: keys.length,
      by_folder: {},
    };
    let held = new Set(keys);
    for (let folder of folders) {
      function mine(k) {
        let r8 = String(k).startsWith(folder + "/");
        return r8;
      }
      let count = keys.filter(mine).length;
      function absent(c) {
        let b = held.has(folder + "/" + c);
        let n = not(b);
        return n;
      }
      let missing = equal(codes, null) ? null : codes.filter(absent);
      state.by_folder[folder] = {
        keys: count,
        missing_count: equal(missing, null) ? null : missing.length,
        missing_first: equal(missing, null) ? null : missing.slice(0, 40),
      };
    }
    return state;
  }
  function caches_clear() {
    let g = global_get();
    for (let f of [
      ebible_verses_browser,
      ebible_chapter_codes_browser,
      ebible_index_flat,
      ebible_version_books_browser,
    ]) {
      delete g[f.name];
    }
  }
  function sample_codes(codes) {
    let wanted = [
      "GEN01",
      "EXO01",
      "COL01",
      "COL02",
      "COL03",
      "COL04",
      "REV22",
    ];
    if (equal(codes, null)) {
      return wanted;
    }
    function colossians(c) {
      let r9 = String(c).startsWith("COL");
      return r9;
    }
    let col = codes.filter(colossians);
    let picked = [
      codes[0],
      codes[50],
      ...col,
      codes[subtract(codes.length, 1)],
    ];
    function given(c) {
      let neq = not_equal(c, undefined);
      return neq;
    }
    let v2 = picked.filter(given);
    let r10 = Array.from(new Set(v2));
    return r10;
  }
  async function offline_reads(folders, codes) {
    let fetch_real = window.fetch;
    let blocked = 0;
    window.fetch = async function fetch_refused() {
      blocked++;
      throw new TypeError("Failed to fetch (offline in check)");
    };
    Object.defineProperty(navigator, "onLine", {
      get: function off() {
        return false;
      },
      configurable: true,
    });
    caches_clear();
    let reads = {};
    try {
      for (let folder of folders) {
        let one = {};
        async function books() {
          let r11 = await ebible_version_books_browser(folder);
          return r11;
        }
        one.books = await attempt(books);
        async function codes_read() {
          let r12 = await ebible_chapter_codes_browser(folder);
          return r12;
        }
        one.codes = await attempt(codes_read);
        async function index() {
          let r13 = await ebible_index_flat(folder);
          return r13;
        }
        one.index = await attempt(index);
        for (let code of sample_codes(codes)) {
          async function verses() {
            let r14 = await ebible_verses_browser(folder, code);
            return r14;
          }
          one[code] = await attempt(verses);
        }
        reads[folder] = one;
      }
    } finally {
      window.fetch = fetch_real;
      delete navigator.onLine;
      caches_clear();
    }
    reads.fetches_blocked = blocked;
    return reads;
  }
  function failed_any(reads) {
    for (let folder of object_property_names(reads)) {
      let one = reads[folder];
      if (not_equal(typeof one, "object")) {
        continue;
      }
      for (let key of object_property_names(one)) {
        if (equal(one[key].ok, false)) {
          return true;
        }
      }
    }
    return false;
  }
  async function run() {
    report = {
      started: date_now_milliseconds(),
    };
    show("Reading this phone...");
    report.environment = await environment();
    let english = ebible_folder_english();
    let saved = ebible_offline_folders_get();
    report.saved_folders = saved;
    let folders = Array.from(new Set([...saved, english]));
    let codes = await canonical_codes();
    report.canonical_count = equal(codes, null) ? null : codes.length;
    report.saved_before = await saved_state(folders, codes);
    show("Reading chapters with internet cut off...");
    report.offline_before = await offline_reads(folders, codes);
    function gap(f) {
      let neq2 = not_equal(f.missing_count, 0);
      return neq2;
    }
    let missing = Object.values(report.saved_before.by_folder || {}).some(gap);
    if (missing || failed_any(report.offline_before)) {
      for (let folder of folders) {
        show("Saving " + folder + " again...");
        let last = null;
        async function save() {
          function progress(p) {
            last = p;
            html_text_content_set(
              status,
              "Saving " + folder + ": " + json_to(p),
            );
          }
          let r15 = await ebible_offline_download(folder, progress);
          return r15;
        }
        report["save_" + folder] = await attempt_within(save, 600000);
        report["save_" + folder].last_progress = last;
      }
      let v3 = await canonical_codes();
      report.saved_after = await saved_state(folders, v3);
      show("Reading chapters again with internet cut off...");
      report.offline_after = await offline_reads(folders, codes);
    }
    report.finished = date_now_milliseconds();
    dev_trace_add("check", report);
    show("Sending to the computer...");
    let sent = await catch_null_async(dev_trace_send);
    report.sent = equal(sent, null) ? "failed" : "yes";
    show(
      equal(sent, null)
        ? "❌ Done, but sending failed - press again with internet on."
        : "✅ Done and sent. You can close this.",
    );
  }
  app_shared_button_wide(root, "▶ Run check", run);
}
