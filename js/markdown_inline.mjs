import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_em_text } from "./html_em_text.mjs";
import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function markdown_inline(container, text) {
  "render one INLINE markdown string into `container` as child nodes: **bold**, *italic*, `code`, [label](url) links, [[wikilinks]] (shown as a colored name, not navigable — the notes they point at live in another repo), and the plain text between. a small left-to-right SCANNER, not a spec-complete parser — enough for the design notes. two-char markers (** and [[) are tested before their one-char cousins (* and [). BESPOKE (while loop / string scan) — do NOT auto-canonicalize.";
  let i = 0;
  let n = text.length;
  let plain = "";
  function flush() {
    if (greater_than(plain.length, 0)) {
      html_span_text(container, plain);
      plain = "";
    }
  }
  while (less_than(i, n)) {
    let two = text.slice(i, i + 2);
    let ch = text[i];
    if (equal(two, "**")) {
      let end = text.indexOf("**", i + 2);
      if (not_equal(end, -1)) {
        flush();
        let text2 = text.slice(i + 2, end);
        let bold = html_span_text(container, text2);
        html_bold(bold);
        i = end + 2;
        continue;
      }
    }
    if (equal(two, "[[")) {
      let end = text.indexOf("]]", i + 2);
      if (not_equal(end, -1)) {
        flush();
        let text3 = text.slice(i + 2, end);
        let wiki = html_span_text(container, text3);
        html_style_assign(wiki, {
          color: "#1a3aa0",
        });
        i = end + 2;
        continue;
      }
    }
    if (equal(ch, "`")) {
      let end = text.indexOf("`", i + 1);
      if (not_equal(end, -1)) {
        flush();
        let code = html_span_code_dark(container);
        code.textContent = text.slice(i + 1, end);
        i = end + 1;
        continue;
      }
    }
    if (equal(ch, "[")) {
      let close = text.indexOf("]", i + 1);
      if (not_equal(close, -1) && equal(text[close + 1], "(")) {
        let paren = text.indexOf(")", close + 2);
        if (not_equal(paren, -1)) {
          flush();
          let href = text.slice(close + 2, paren);
          let text4 = text.slice(i + 1, close);
          html_a_href_text(container, href, text4);
          i = paren + 1;
          continue;
        }
      }
    }
    if (equal(ch, "*")) {
      let end = text.indexOf("*", i + 1);
      if (not_equal(end, -1)) {
        flush();
        let text5 = text.slice(i + 1, end);
        html_em_text(container, text5);
        i = end + 1;
        continue;
      }
    }
    plain = plain + ch;
    i = i + 1;
  }
  flush();
}
