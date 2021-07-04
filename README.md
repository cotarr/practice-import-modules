# practice-import-modules
Compare code with JavaScript require modules with import modules

This is a practice repository for learning purposes. It was run in a development
environment where the web server was not exposed to the public internet.

To begin, a simple NodeJs, Express backend web server was setup including a public folder
served statically and one dummy API route. The backend used "require()" and "module.exports()" syntax.
A browser html web page was added with some simple javascript to insert some sample text to the page,
then perform a fetch request adding an additional dummy JSON object to the page. The browser code used
standard script tags.

This reference was used as a guide https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Using a parallel set of source files, the backend web server was changed to use import modules
in place of require modules.
The browser html page javascript was also changed to use import modules in place of standard script.
Below is a table showing the files side by side for both web server and browser code.


|       Require Module        |         Import Module         |
| --------------------------- | ----------------------------- |
| bin/www                     | bin/www2.mjs                  |
| server/app.js               | server/app2.mjs               |
| server/routes/api-routes.js | server/routes/api-routes2.mjs |


|   Standard Script    |     Import Module      |
| -------------------- | -----------------------|
| index.html           | index2.html            |
| main.js              | main2.mjs              |
| modules/my-module.js | modules/my-module2.mjs |

A Content Security Policy (CSP) was added to see if the import modules
would cause any browser violations.

There are some additional modules in the "server/modules" directory.
These were some experiments to attempt loading legacy files
with module.exports format, when loaded from within an import module.
This seemed to work, but I'm not sure the proper syntax for this.

### To install

```bash
git clone git@github.com:cotarr/practice-import-modules.git
cd practice-import-modules
npm install
```

### To start the server using require/modules.exports

```bash
node bin/www
```

### To start the server using import modules

```bash
node bin/www2.mjs
```

### To open web page in browser
```url
http://localhost:5000
```

### eslint notes

eslint is loaded locally to experiment with style rules related to modules (see file .eslintrc)

```
npx eslint bin/www
npx eslint bin/www2.mjs

npx eslint server/*/*.js server/*.js
npx eslint server/*/*.mjs server/*.mjs

npx eslint public/*/*.js public/*.js
npx eslint public/*/*.mjs public/*.mjs

```
