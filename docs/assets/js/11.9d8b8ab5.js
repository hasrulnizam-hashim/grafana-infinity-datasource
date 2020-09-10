(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"json-url"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#json-url"}},[e._v("#")]),e._v(" JSON URL")]),e._v(" "),o("p",[e._v("In the below example, we are going to convert the JSON URL "),o("code",[e._v("https://jsonplaceholder.typicode.com/todos")]),e._v(" into a grafana datasource.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92381992-bf020d00-f103-11ea-936d-94f903faa5e6.png",alt:"image"}})]),e._v(" "),o("p",[e._v("The URL returns an array of objects. Each item in the array goes as a table row. Property of each object goes into column of the table. By default, the datasource will not consider any columns for display. You have to manually specify the column names and corresponding properties in the JSON object.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" As the URL returns an array of objects, root selector / row have to be blank. If the root of the document is an object and you want to select specific property of the object, you can specify the selector of the object as a root selector / row. Example given "),o("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues/1#issue-694996991",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"json-inline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#json-inline"}},[e._v("#")]),e._v(" JSON Inline")]),e._v(" "),o("p",[e._v("Instead of specifying URL, you can hardcoded JSON object. For example, you can specify the json as shown in the below example")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('[\n  { "country": "india", "population": 420 },\n  { "country": "india", "population": 440 },\n  { "country": "usa", "population": 200 },\n  { "country": "uk", "population": 150 },\n  { "country": "china", "population": 400 }\n]\n')])])]),o("p",[e._v("You need to also specify the column names manually for display purposes.")])])}),[],!1,null,null,null);t.default=n.exports}}]);