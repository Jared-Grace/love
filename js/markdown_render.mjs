import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { math_min } from "./math_min.mjs";
import { markdown_inline } from "./markdown_inline.mjs";
import { html_div } from "./html_div.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
export function markdown_render(parent, text) {
  ("render a markdown NOTE into `parent` as formatted DOM, block by block: #..#### headings (bold divs, sized by level), --- horizontal rules, > blockquotes, - / * bullet lists (indented by leading spaces), ``` fenced code and | tables (monospace blocks), and paragraphs (blank-line separated). inline styling of each block goes through ",
    fn_name("markdown_inline"),
    ". a FOCUSED subset for the design-note reader ([[project_g_dev_routes_focused]]), not a spec-complete parser. BESPOKE (line loop / fenced-block state / arrays) — do NOT auto-canonicalize.");
  let lines = text.split("\n");
  let i = 0;
  let paragraph = [];
  function flush_paragraph() {
    if (greater_than(paragraph.length, 0)) {
      let div = html_div(parent);
      html_style_assign(div, {
        margin: "0.5em 0",
      });
      let text2 = paragraph.join(" ");
      markdown_inline(div, text2);
      paragraph = [];
    }
  }
  function mono_block(block_lines) {
    let text3 = block_lines.join("\n");
    let pre = html_pre_text(parent, text3);
    html_style_assign(pre, {
      "font-family": "monospace",
      "font-size": "0.82em",
      background: "rgba(0, 0, 0, 0.06)",
      padding: "0.5em 0.7em",
      "border-radius": "0.3em",
      overflow: "auto",
      margin: "0.5em 0",
      "white-space": "pre",
    });
  }
  while (less_than(i, lines.length)) {
    let line = lines[i];
    let trimmed = line.trim();
    let left = trimmed.slice(0, 3);
    if (equal(left, "```")) {
      flush_paragraph();
      let code_lines = [];
      i = i + 1;
      let left2 = lines[i].trim().slice(0, 3);
      while (less_than(i, lines.length) && not_equal(left2, "```")) {
        code_lines.push(lines[i]);
        i = i + 1;
      }
      i = i + 1;
      mono_block(code_lines);
      continue;
    }
    if (equal(trimmed, "")) {
      flush_paragraph();
      i = i + 1;
      continue;
    }
    if (equal(trimmed, "---") || equal(trimmed, "***")) {
      flush_paragraph();
      html_hr(parent);
      i = i + 1;
      continue;
    }
    if (equal(trimmed[0], "#")) {
      let level = 0;
      while (less_than(level, trimmed.length) && equal(trimmed[level], "#")) {
        level = level + 1;
      }
      flush_paragraph();
      let heading = html_div(parent);
      let sizes = ["1.5em", "1.3em", "1.15em", "1.05em"];
      let a = subtract(level, 1);
      let b = subtract(sizes.length, 1);
      let size = sizes[math_min(a, b)];
      html_style_assign(heading, {
        "font-weight": "bold",
        "font-size": size,
        margin: "0.6em 0 0.2em 0",
      });
      let text4 = trimmed.slice(level).trim();
      markdown_inline(heading, text4);
      i = i + 1;
      continue;
    }
    if (equal(trimmed[0], ">")) {
      flush_paragraph();
      let quote = html_div(parent);
      html_style_assign(quote, {
        "border-left": "3px solid " + app_shared_color_gray_medium(),
        "padding-left": "0.7em",
        opacity: "0.85",
        margin: "0.4em 0",
      });
      let text5 = trimmed.slice(1).trim();
      markdown_inline(quote, text5);
      i = i + 1;
      continue;
    }
    let left3 = trimmed.slice(0, 2);
    let left4 = trimmed.slice(0, 2);
    if (equal(left3, "- ") || equal(left4, "* ")) {
      flush_paragraph();
      let indent = subtract(line.length, line.trimStart().length);
      let item = html_div(parent);
      html_style_assign(item, {
        margin: "0.15em 0",
        "padding-left": 0.8 + multiply(indent, 0.2) + "em",
        "text-indent": "-0.8em",
      });
      html_span_text(item, "• ");
      let text6 = trimmed.slice(2);
      markdown_inline(item, text6);
      i = i + 1;
      continue;
    }
    if (equal(trimmed[0], "|")) {
      flush_paragraph();
      let table_lines = [];
      while (less_than(i, lines.length) && equal(lines[i].trim()[0], "|")) {
        table_lines.push(lines[i]);
        i = i + 1;
      }
      mono_block(table_lines);
      continue;
    }
    paragraph.push(trimmed);
    i = i + 1;
  }
  flush_paragraph();
}
