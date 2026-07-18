import { html_code_element } from "./html_code_element.mjs";
import { app_shared_color_green } from "./app_shared_color_green.mjs";
export function examples_style() {
  let green = app_shared_color_green();
  let css = `
    body { font-family: system-ui, sans-serif; max-width: 62rem; margin: 0 auto; padding: 2rem; color: #1a1a1a; background: #fafafa; }
    h1 { font-size: 1.6rem; }
    .example { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.25rem; margin: 1.5rem 0; }
    .example h2 { font-size: 1.15rem; margin: 0 0 .35rem; }
    .note { color: #555; margin: 0 0 .75rem; line-height: 1.5; }
    .command code { background: #f0f0f0; padding: .3rem .5rem; border-radius: 4px; font-family: ui-monospace, monospace; font-size: .9rem; }
    .io { display: flex; flex-direction: column; gap: .6rem; margin-top: .75rem; }
    .io-col { min-width: 0; }
    .io-label { font-size: .7rem; text-transform: uppercase; letter-spacing: .05em; color: #888; font-weight: 600; margin-bottom: .3rem; }
    pre { background: #f6f8fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: .75rem; overflow-x: auto; font-family: ui-monospace, monospace; font-size: .82rem; margin: 0; }
    .arrow { width: 2rem; height: 2rem; border-radius: 50%; background: ${green}; color: #fff; font-size: 1.3rem; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: .1rem auto; transform: rotate(90deg); }
    .t-kw { color: #d73a49; }
    .t-str { color: #0a7d3c; }
    .t-num { color: #6f42c1; }
    .t-punct { color: #6a737d; }
    .rejection pre.call { border-left: 3px solid #d33; }
    .expect { color: #d33; font-weight: 600; margin-top: .5rem; }
  `;
  let r = html_code_element("style", {}, css);
  return r;
}
