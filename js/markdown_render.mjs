import { markdown_inline } from "./markdown_inline.mjs";
import { html_div } from "./html_div.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_gray_medium } from "./app_shared_color_gray_medium.mjs";
export function markdown_render(parent, text) {
  "render a markdown NOTE into `parent` as formatted DOM, block by block: #..#### headings (bold divs, sized by level), --- horizontal rules, > blockquotes, - / * bullet lists (indented by leading spaces), ``` fenced code and | tables (monospace blocks), and paragraphs (blank-line separated). inline styling of each block goes through markdown_inline. a FOCUSED subset for the design-note reader ([[project_g_dev_routes_focused]]), not a spec-complete parser. BESPOKE (line loop / fenced-block state / arrays) — do NOT auto-canonicalize.";
  let lines = text.split("\n");
  let i = 0;
  let paragraph = [];
  function flush_paragraph() {
    if (paragraph.length > 0) {
      let div = html_div(parent);
      html_style_assign(div, { margin: "0.5em 0" });
      markdown_inline(div, paragraph.join(" "));
      paragraph = [];
    }
  }
  function mono_block(block_lines) {
    let pre = html_pre_text(parent, block_lines.join("\n"));
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
  while (i < lines.length) {
    let line = lines[i];
    let trimmed = line.trim();
    if (trimmed.slice(0, 3) === "```") {
      flush_paragraph();
      let code_lines = [];
      i = i + 1;
      while (i < lines.length && lines[i].trim().slice(0, 3) !== "```") {
        code_lines.push(lines[i]);
        i = i + 1;
      }
      i = i + 1;
      mono_block(code_lines);
      continue;
    }
    if (trimmed === "") {
      flush_paragraph();
      i = i + 1;
      continue;
    }
    if (trimmed === "---" || trimmed === "***") {
      flush_paragraph();
      html_hr(parent);
      i = i + 1;
      continue;
    }
    if (trimmed[0] === "#") {
      let level = 0;
      while (level < trimmed.length && trimmed[level] === "#") {
        level = level + 1;
      }
      flush_paragraph();
      let heading = html_div(parent);
      let sizes = ["1.5em", "1.3em", "1.15em", "1.05em"];
      let size = sizes[Math.min(level - 1, sizes.length - 1)];
      html_style_assign(heading, {
        "font-weight": "bold",
        "font-size": size,
        margin: "0.6em 0 0.2em 0",
      });
      markdown_inline(heading, trimmed.slice(level).trim());
      i = i + 1;
      continue;
    }
    if (trimmed[0] === ">") {
      flush_paragraph();
      let quote = html_div(parent);
      html_style_assign(quote, {
        "border-left": "3px solid " + app_shared_color_gray_medium(),
        "padding-left": "0.7em",
        opacity: "0.85",
        margin: "0.4em 0",
      });
      markdown_inline(quote, trimmed.slice(1).trim());
      i = i + 1;
      continue;
    }
    if (trimmed.slice(0, 2) === "- " || trimmed.slice(0, 2) === "* ") {
      flush_paragraph();
      let indent = line.length - line.trimStart().length;
      let item = html_div(parent);
      html_style_assign(item, {
        margin: "0.15em 0",
        "padding-left": 0.8 + indent * 0.2 + "em",
        "text-indent": "-0.8em",
      });
      html_span_text(item, "• ");
      markdown_inline(item, trimmed.slice(2));
      i = i + 1;
      continue;
    }
    if (trimmed[0] === "|") {
      flush_paragraph();
      let table_lines = [];
      while (i < lines.length && lines[i].trim()[0] === "|") {
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
