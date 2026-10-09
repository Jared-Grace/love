export function youtube_studio_chrome_path() {
  "The chrome that youtube studio is signed in to and driven from: the one installed on this machine, not the copy puppeteer downloads for itself.";
  "★ GOOGLE REFUSES TO SIGN IN TO PUPPETEER'S OWN CHROME. Measured 2026-10-09: 'This browser or app may not be secure'. The installed chrome is the browser a person really uses, and signing in to it is ordinary; the sign-in and the uploads both start this one so the profile they share was made by the browser that reads it.";
  let r = "/usr/bin/google-chrome";
  return r;
}
