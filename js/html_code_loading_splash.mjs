export function html_code_loading_splash() {
  "the static loading splash baked into every app's HTML body so a refresh paints a dark spinner INSTANTLY (before the bundle even downloads) instead of a white flash. self-contained: inline styles plus one keyframe, no external CSS or JS. carries the id app-loading so the shared boot can drop it once the app has loaded. matches the runtime dark overlay so the dark-to-dark handoff is seamless — that overlay lives on the document element (surviving body clears) and takes over the moment scripts boot; this only covers the gap before that";
  let keyframes =
    "<style>@keyframes app_loading_spin{to{transform:rotate(360deg)}}</style>";
  let open =
    '<div id="app-loading" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.5rem;z-index:1000">';
  let ring =
    '<div style="width:8rem;height:8rem;border:0.75rem solid rgba(140,180,255,0.2);border-top-color:#bcd6ff;border-radius:50%;box-shadow:0 0 1.5rem rgba(140,180,255,0.6);animation:app_loading_spin 1.2s linear infinite"></div>';
  let message =
    '<p style="color:white;font-size:1.5rem;font-family:sans-serif;text-align:center;text-shadow:0 0.05em 0.15em rgba(0,0,0,0.8);margin:0">One moment, please 🙏</p>';
  let close = "</div>";
  let v = keyframes + open + ring + message + close;
  return v;
}
