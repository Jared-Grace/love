export function html_meta_viewport_content() {
  "interactive-widget=resizes-content makes the layout viewport shrink together with the soft keyboard, so a just-tapped input stays inside the live layout and keeps IME focus (Firefox Android otherwise resizes only the visual viewport, and the scroll-into-view race intermittently drops focus so the keyboard shows but typing does nothing)";
  let v =
    "width=device-width, initial-scale=1.0, interactive-widget=resizes-content";
  return v;
}
