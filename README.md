# practice-import-modules
Compare code with JavaScript require modules with import modules

This is a practice repository for learning purposes. It was run in a development
environment where the web server was not exposed to the public internet.

This reference was used as a guide https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Two folders were created:

- Folder "commonjs" to hold example with CommonJS modules
- Folder "es" to hold example with ES modules

To begin, a simple NodeJs, Express backend web server was setup in the "commonjs" folder.
This includes a public folder served statically and one dummy API route. 
The backend used "require()" and "module.exports()" syntax.
A browser html web page was added with some simple javascript to insert some sample text to the page,
then perform a fetch request adding an additional dummy JSON object to the page. The browser code used
standard script tags.

A parallel set of source files were created in the "es" folder.
The backend web server was changed to use import modules in place of require modules.
The browser html page javascript was also changed to use import modules in place of standard script.

As an npm example of a ES module, the helmet middleware was included in both.
As an npm example of a CommonJs module, the morgan logger was included in both.

A Content Security Policy (CSP) was added to see if the import modules
would cause any browser violations.

The "es" folder contains some additional modules in the "server/modules" directory.
These were some experiments to attempt loading legacy files
with module.exports format, when loaded from within an import module.

### To install

```bash
git clone git@github.com:cotarr/practice-import-modules.git
cd practice-import-modules
cd commonjs
npm install
cd ../es
npm install
```

### To start the server using require/modules.exports

```bash
# change directory to "commonjs" folder
npm start
```

### To start the server using import modules

```bash
# change directory to "es" folder
npm start
```

### To open web page in browser
```url
http://localhost:5000
```
