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
    if (plain.length > 0) {
      html_span_text(container, plain);
      plain = "";
    }
  }
  while (i < n) {
    let two = text.slice(i, i + 2);
    let ch = text[i];
    if (two === "**") {
      let end = text.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        let bold = html_span_text(container, text.slice(i + 2, end));
        html_bold(bold);
        i = end + 2;
        continue;
      }
    }
    if (two === "[[") {
      let end = text.indexOf("]]", i + 2);
      if (end !== -1) {
        flush();
        let wiki = html_span_text(container, text.slice(i + 2, end));
        html_style_assign(wiki, { color: "#1a3aa0" });
        i = end + 2;
        continue;
      }
    }
    if (ch === "`") {
      let end = text.indexOf("`", i + 1);
      if (end !== -1) {
        flush();
        let code = html_span_code_dark(container);
        code.textContent = text.slice(i + 1, end);
        i = end + 1;
        continue;
      }
    }
    if (ch === "[") {
      let close = text.indexOf("]", i + 1);
      if (close !== -1 && text[close + 1] === "(") {
        let paren = text.indexOf(")", close + 2);
        if (paren !== -1) {
          flush();
          html_a_href_text(
            container,
            text.slice(close + 2, paren),
            text.slice(i + 1, close),
          );
          i = paren + 1;
          continue;
        }
      }
    }
    if (ch === "*") {
      let end = text.indexOf("*", i + 1);
      if (end !== -1) {
        flush();
        html_em_text(container, text.slice(i + 1, end));
        i = end + 1;
        continue;
      }
    }
    plain = plain + ch;
    i = i + 1;
  }
  flush();
}
