// https://github.com/jdorn/json-editor/blob/master/examples/advanced.html
// TODO: Make this configurable on Data Type level.
/*eslint quotes: [2, "double"]*/
window.CONTENTFUL_FORM_EDITOR_SCHEMA = {
  "title": "Category meta data",
  "type": "object",
  "id": "person",
  "properties": {
    "title": {
      "type": "string",
      "propertyOrder": 10
    },
    "description": {
      "type": "string",
      "format": "textarea",
      "propertyOrder": 20
    },
    "keywords": {
      "type": "string",
      "description": "A comma separated list of keywords",
      "propertyOrder": 30
    }
  }
};
