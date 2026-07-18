import { html_code_element } from "./html_code_element.mjs";
import { app_shared_color_green } from "./app_shared_color_green.mjs";
import { app_shared_color_keyword } from "./app_shared_color_keyword.mjs";
import { app_shared_color_literal } from "./app_shared_color_literal.mjs";
import { app_shared_color_punctuation } from "./app_shared_color_punctuation.mjs";
export function examples_style() {
  let green = app_shared_color_green();
  let keyword = app_shared_color_keyword();
  let literal = app_shared_color_literal();
  let punctuation = app_shared_color_punctuation();
  let css = `
    body { font-family: system-ui, sans-serif; max-width: 62rem; margin: 0 auto; padding: 2rem; color: #1a1a1a; background: #fafafa; }
    h1 { font-size: 1.6rem; }
    .example { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.25rem; margin: 1.5rem 0; }
    .example h2 { font-size: 1.15rem; margin: 0 0 .35rem; }
    .note { color: #555; margin: 0 0 .75rem; line-height: 1.5; }
    .command code, .function-name code { background: #f0f0f0; padding: .3rem .5rem; border-radius: 4px; font-family: ui-monospace, monospace; font-size: .9rem; }
    .function-name { margin: 0 0 .4rem; }
    .function-name::before { content: "function"; font-size: .7rem; text-transform: uppercase; letter-spacing: .05em; color: #888; font-weight: 600; margin-right: .5rem; }
    .io { display: flex; flex-direction: column; gap: .6rem; margin-top: .75rem; }
    .io-col { min-width: 0; }
    .io-label { font-size: .7rem; text-transform: uppercase; letter-spacing: .05em; color: #888; font-weight: 600; margin-bottom: .3rem; }
    pre { background: #f6f8fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: .75rem; overflow-x: auto; font-family: ui-monospace, monospace; font-size: .82rem; margin: 0; }
    .arrow { color: ${green}; }
    .arrow svg { display: block; width: 2.6rem; height: 2.6rem; margin: 0 auto; }
    .t-kw { color: ${keyword}; }
    .t-str { color: ${literal}; }
    .t-num { color: ${literal}; }
    .t-punct { color: ${punctuation}; }
    .rejection pre.call { border-left: 3px solid #d33; }
    .expect { color: #d33; font-weight: 600; margin-top: .5rem; }
  `;
  let r = html_code_element("style", {}, css);
  return r;
}
