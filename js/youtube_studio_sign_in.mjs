import { youtube_studio_chrome_path } from "./youtube_studio_chrome_path.mjs";
import { youtube_studio_user_data_path } from "./youtube_studio_user_data_path.mjs";
export async function youtube_studio_sign_in() {
  "Opens youtube studio in the browser profile the uploader uses, and waits until the person has signed in and closed the window.";
  "★ THE PERSON SIGNS IN, NEVER THE PROGRAM. A password typed by a program is a password stored somewhere a program can read it; a person signing in once into a kept profile stores nothing but the browser's own session.";
  "★ THE SIGN-IN WINDOW IS PLAIN CHROME WITH NOTHING DRIVING IT. Google refuses to sign anybody in to a browser it can see is being driven - 'This browser or app may not be secure', 2026-10-09, on puppeteer's own chrome. So this window is the installed chrome started as a person would start it, and the driving only begins later, on a profile that is already signed in.";
  "★ IT KEEPS PASSWORDS IN THE PROFILE ITSELF, THE WAY THE DRIVEN BROWSER WILL. Chrome locks a profile's cookies with a key, and where it keeps that key depends on how it was started; the driven browser keeps it in the profile, so a sign-in locked with the desktop's keyring instead would be unreadable to it and the uploader would find nobody signed in.";
  "It waits for the window to be closed rather than for some sign of being signed in, because closing is the one thing a person does only when they are finished - a page that merely looks signed in can still be halfway through choosing an account.";
  let child_process = await import("node:child_process");
  let r3 = youtube_studio_chrome_path();
  let child = child_process.spawn(
    r3,
    [
      "--user-data-dir=" + youtube_studio_user_data_path(),
      "--password-store=basic",
      "--no-first-run",
      "https://studio.youtube.com",
    ],
    {
      stdio: "ignore",
    },
  );
  let code = await new Promise(function lambda(resolve) {
    let r = child.on("exit", resolve);
    return r;
  });
  let r2 = {
    closed: true,
    code,
  };
  return r2;
}
