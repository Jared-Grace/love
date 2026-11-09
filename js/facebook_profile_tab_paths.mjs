import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_profile_tab_paths(profile_url) {
  "$plain profile_url";
  "The addresses of the about tabs of the facebook profile at profile_url - personal details, work, education and the rest - each as the part after facebook.com. Only addresses under the profile's own are answered, so no other person's name or link comes back.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ FOR FINDING WHERE A SECTION MOVED: on 2026-11-09 about_places showed no places on two profiles, and the tabs read Personal details, Work, Education.";
  let about = profile_url.includes("profile.php")
    ? profile_url + "&sk=about"
    : profile_url.replace(/\/+$/, "") + "/about";
  let o = await facebook_page_open(about);
  let page = o.page;
  try {
    await sleep_human_pace();
    let own = profile_url
      .replace(/^https?:\/\/[^/]+/, "")
      .replace(/[?#].*$/, "")
      .replace(/\/+$/, "");
    let v = JSON.stringify(own);
    let paths = await page.evaluate(`(function(own){
      var out = [];
      document.querySelectorAll('a[href]').forEach(function(a){
        var u; try { u = new URL(a.getAttribute('href'), location.href) } catch(e) { return }
        var p = u.pathname.replace(/\\/+$/, '');
        var sk = u.searchParams.get('sk');
        var path = p + (sk ? '?sk=' + sk : '');
        var mine = own === '/profile.php' ? (p === own && sk) : (p.indexOf(own + '/') === 0);
        if (mine && out.indexOf(path) < 0) out.push(path);
      });
      return out;
    })(${v})`);
    let r = {
      about,
      paths,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
