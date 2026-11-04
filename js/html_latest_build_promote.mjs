import { app_shared_latest_build } from "./app_shared_latest_build.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
export async function html_latest_build_promote(search) {
  "$plain search";
  "Builds only the bundle that gets sent, and puts it where the sending reads from - leaving the local one for trying things out unbuilt";
  "Its pair builds both bundles together on purpose, and that purpose is real: in the folder people work in, building only the one that ships leaves the local one for trying things out behind, and somebody then tests a phone against last week's code. That reason needs somewhere for the drift to happen, and it has one there, because the folder is still standing tomorrow.";
  "Inside a copy made to build one commit there is nowhere for it to drift to. The copy is put back to its commit before the next build and nothing is ever served out of it, so the local bundle it makes is written, hashed by nobody, read by nobody, and thrown away. Measured on the code app: the bundle that ships took thirty seconds and the one nobody reads took fifty-two, so the copy spent nearly two thirds of its building on a file whose only future was being deleted.";
  "So this is not a faster version of its pair and must not replace it. The two differ in what they leave behind, which is the whole of what the pair is for, and the choice between them is a question about the folder being built in rather than about speed.";
  "★ IT ASKS NOTHING ABOUT WHETHER THE APP IS SOUND, BECAUSE ITS ONE CALLER ALREADY HAS AND WILL AGAIN. Everything that reaches this is on its way up through the judged promote, which reads the verdict before building and walks the course afterwards, over these same pieces. It used to ask both questions here as well, and here is the one place the answer cannot be found: a commit's own copy of the record never holds that commit's verdict, because the verdict is written after the commit. Measured 2026-11-04 on the code app: a minute and a half of building, then sixty nine minutes judging a commit already judged, then a walk still going ninety minutes later, before the walk the caller was about to do anyway.";
  await app_shared_latest_build(search);
  await html_public_from_latest(search);
}
