# module-startkit
Quick way to build node module

## Quick Guide
**dist** - This is where building the project put the compiled source files.
Make sure the ./index.js file require all you files and export them, before publishing the module

**examples** - This is where you build an examples that will use the module you build.
Webpack server using ./examples/index.js as the entry point

**src** - This is where your ES6 code needs to be.

### Features
- ES6
- React- Hot reload
- Webpack Dev server

### Todo:
- Add test system
