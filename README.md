# JSON Form Editor extension

Forked from [Contentful Extensions](https://github.com/contentful/extensions).

This extension is used for editing meta tags on Contentful. This extension
provides a JSON form editor based on the [JSON
Editor](https://github.com/jdorn/json-editor)) library. You can use this
extension with 'Object' field types.

The extension generates a form based on a [JSON
Schema](https://json-schema.org/) defined in _json-form-editor.js_. The
generated form allows you to create JSON objects that are valid against that
schema.

## Getting started with local development

[Check you have the requirements needed](../README.md#extensions-samples) to use
our extensions and [have the extensions SDK
installed](https://github.com/contentful/ui-extensions-sdk).

Install the dependencies needed with `npm install`.

Create the extension on Contentful:

```bash contentful-extension create --space-id <space-id> ```

Serve on _<http://localhost:3000>_ using Gulp, automatically watching and
reserving any changes:

```bash gulp watch ```

The [same constraints](../README.md#debugging-on-your-local-environment) apply
to loading unsafe scripts.

## Hosting

The hosting of a Contentful ui extension can be done in one of two ways:

- uploading files directly to Contentful
- providing Contentful with a url pointing toward an already hosted extension

We have chosen the second option. For this particular project, the extension is
hosted using GitHub Pages, which you can observe
[here](https://tictail.github.io/contentful-meta-extension/).

# Deploying

The short answer is run `npm run deploy`, so long as you have push access - you
can deploy.

What happens behind the scenes, is we build into `dist/`, then we use a node
program called `gh-pages` to deploy the project. Really all this program does is
commits everything in `dist/` to the `gh-pages` branch. It should take no longer
than a couple of minutes to deploy. If takes any longer, you can get a basic
status from the settings tab on the repository.
