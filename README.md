In this repo:
- There is code for transforming code from a terminal
  - There is code for a terminal
- There is code for transforming code on file save
  - There is code for a watcher that transforms a file on write
- There is code for an IDE in a browser (in progress)
- There is code to test the apps from a browser
  - There is code for a server that serves static files and allows the browser to call a function
- There is code for apps that have been useful in my life:
  - An app to read the Bible
  - An app to search the Bible
  - An app to generate responses with Bible verses to messages
- There is code for a Bible video game (in progress)

---

This repo has a convention to use Visual Studio code.

---

This repo has a convention that this repo and other repos are in a foler called repos/

So instead of this repo being in a folder called "love" anywhere - the path needs to be repos/love/

Therefore the root folder in VS Code will be repos not love

---

There is a file:

repos\love\data\.vscode\tasks.json

It should be copied here:

repos\.vscode\tasks.json

That way the watcher, server, and terminal will all run when VS Code is started

---

To run the terminal: `cd love; ./scripts/p.cmd`

Then you can run this function: `love_initialize`

That will copy repos\love\data\.vscode\tasks.json to repos\.vscode\tasks.json

---

To run the Watcher: `cd love; node scripts/r.mjs w`

To run the serVer: `cd love; node scripts/r.mjs v`

---

To run a function:

`cd love; node scripts/r.mjs fn_name arg1_string arg2_string`

Or if you are inside the terminal:

`fn_name arg1_string arg2_string`

---

To create a new function:

`n fn_name` 

---

`n` is an alias for `function_new`

To see what an alias `n` is mapped to use: `u n`

`u` is an alias for `function_name_unalias`

To create a new alias `abc` for function `action_births_consequence` use: 
`a abc action_births_consequence`