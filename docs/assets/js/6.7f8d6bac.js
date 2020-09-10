(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(e,a,t){"use strict";t.r(a);var s=t(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",{attrs:{align:"center"}},[t("a",{attrs:{href:"https://yesoreyeram.github.io/grafana-infinity-datasource"}},[t("h1",{attrs:{align:"center"}},[e._v("Grafana Infinity Data source")])])]),t("h5",{attrs:{align:"center"}},[e._v("Infinity data source plugin for Grafana. Turn any website into your grafana datasource.")]),e._v(" "),t("p"),e._v(" "),t("p",{attrs:{align:"center"}},[t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/actions?query=workflow%3A%22Build+%26+Publish%22",target:"_blank"}},[t("img",{attrs:{src:"https://github.com/yesoreyeram/grafana-infinity-datasource/workflows/Build%20&%20Publish/badge.svg"}})]),e._v(" "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues",target:"_blank"}},[t("img",{attrs:{src:"https://img.shields.io/github/issues/yesoreyeram/grafana-infinity-datasource"}})]),e._v(" "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/blob/master/LICENSE",target:"_blank"}},[t("img",{attrs:{src:"https://img.shields.io/github/license/yesoreyeram/grafana-infinity-datasource",alt:"Grafana Infinity data source license"}})]),e._v(" "),t("a",{attrs:{href:"http://makeapullrequest.com"}},[t("img",{attrs:{src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg",alt:"PRs are welcome"}})]),e._v(" "),t("a",{attrs:{href:"https://GitHub.com/yesoreyeram/grafana-infinity-datasource/graphs/commit-activity"}},[t("img",{attrs:{src:"https://img.shields.io/badge/Maintained%3F-yes-green.svg",alt:"Grafana Infinity datasource is maintained"}})]),e._v(" "),t("a",{attrs:{href:"https://codeclimate.com/github/yesoreyeram/grafana-infinity-datasource/maintainability"}},[t("img",{attrs:{src:"https://api.codeclimate.com/v1/badges/fe316cba222e99e573dd/maintainability"}})])]),e._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92399290-faabcf80-f121-11ea-9261-b06c708e81c0.png",width:"700",height:"300"}}),t("br"),e._v(" "),t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382187-1a33ff80-f104-11ea-92ec-e5c4fa83fd3f.png",width:"500",height:"200"}})]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("ul",[t("li",[e._v("Turn any website into grafana datasource")]),e._v(" "),t("li",[e._v("Inline CSV / JSON support")]),e._v(" "),t("li",[e._v("JSON / CSV / HTML urls as a data source\n"),t("ul",[t("li",[e._v("Selecting attributes of HTML elements instead of text of the html element (Work in progress)")]),e._v(" "),t("li",[e._v("Filter the results (Work in progress). Example: Ignore-first-row, Ignore-nth-rows, Ignore-odd, Ignore-even etc.")]),e._v(" "),t("li",[e._v("Header-less CSV files support (Work in progress)")]),e._v(" "),t("li",[e._v("Custom fields support (Work in progress). Example: Sum of two fields. Joining two fields etc.")])])])]),e._v(" "),t("p",[e._v("More screenshots on how to use this plugin is available "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"json-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-url"}},[e._v("#")]),e._v(" JSON URL")]),e._v(" "),t("p",[e._v("In the below example, we are going to convert the JSON URL "),t("code",[e._v("https://jsonplaceholder.typicode.com/todos")]),e._v(" into a grafana datasource.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92381992-bf020d00-f103-11ea-936d-94f903faa5e6.png",alt:"image"}})]),e._v(" "),t("p",[e._v("The URL returns an array of objects. Each item in the array goes as a table row. Property of each object goes into column of the table. By default, the datasource will not consider any columns for display. You have to manually specify the column names and corresponding properties in the JSON object.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" As the URL returns an array of objects, root selector / row have to be blank. If the root of the document is an object and you want to select specific property of the object, you can specify the selector of the object as a root selector / row. Example given "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues/1#issue-694996991",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"json-inline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-inline"}},[e._v("#")]),e._v(" JSON Inline")]),e._v(" "),t("p",[e._v("Instead of specifying URL, you can hardcoded JSON object. For example, you can specify the json as shown in the below example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[\n  { "country": "india", "population": 420 },\n  { "country": "india", "population": 440 },\n  { "country": "usa", "population": 200 },\n  { "country": "uk", "population": 150 },\n  { "country": "china", "population": 400 }\n]\n')])])]),t("p",[e._v("You need to also specify the column names manually for display purposes.")]),e._v(" "),t("h2",{attrs:{id:"csv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://yesoreyeram.github.io/grafana-infinity-datasource/wiki/csv.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),t("OutboundLink")],1),e._v(" have more details on how to use CSV feature and latest guide.")]),e._v(" "),t("h3",{attrs:{id:"csv-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv-url"}},[e._v("#")]),e._v(" CSV URL")]),e._v(" "),t("p",[e._v("In the below example, we are going to convert the CSV URL "),t("code",[e._v("https://gist.githubusercontent.com/yesoreyeram/64a46b02f0bf87cb527d6270dd84ea47/raw/32ae9b1a4a0183dceb3596226b818c8f428193af/sample-with-quotes.csv")]),e._v(" into a grafana datasource.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382040-d8a35480-f103-11ea-8ff8-48c7ca211062.png",alt:"image"}})]),e._v(" "),t("p",[e._v("This is same as your JSON configuration. Ignore the root / rows as each line of CSV will be your rows. Though your csv file have columns, specify them as columns manually. Columns will appear in the same order you specify.")]),e._v(" "),t("h3",{attrs:{id:"csv-inline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csv-inline"}},[e._v("#")]),e._v(" CSV Inline")]),e._v(" "),t("p",[e._v("Instead of specifying URL, you can hardcoded csv values. For example, you can specify the csv in the following format")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("country,population,capital\nindia,200,mumbai\nindia,100,chennai\nchina,500,beijing\nusa,200,washington\ncanada,100,ottawa\n")])])]),t("p",[e._v("CSV data should have columns as its first line and comma delimited. You need to also specify the column names manually for display purposes.")]),e._v(" "),t("p",[e._v("Below screenshot shows the example of csv inline datasource")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92571108-9e0ff800-f27a-11ea-9fe9-9f9dcbd7125a.png",alt:"image"}})]),e._v(" "),t("h2",{attrs:{id:"html-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-url"}},[e._v("#")]),e._v(" HTML URL")]),e._v(" "),t("p",[e._v("In the below example, we are going to convert the HTML URL "),t("code",[e._v("https://grafana.com/about/team/")]),e._v(" into grafana datasource.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382094-f4a6f600-f103-11ea-8035-e1bbd9157629.png",alt:"image"}})]),e._v(" "),t("p",[e._v("Once you open the page in browser, right click and inspect the element (first element of the array you want to display). Then copy the selector as your root / rows element.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92396876-ac94cd00-f11d-11ea-850d-f1754f980fc7.png",alt:"image"}})]),e._v(" "),t("p",[e._v("Then you can select, individual properties of the row as columns of the table as shown in the example image. You can select any element with in the row context.")]),e._v(" "),t("p",[e._v("Example :")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("h4")]),e._v(" --\x3e h4 element will be selected")]),e._v(" "),t("li",[t("code",[e._v(".team__title")]),e._v(" --\x3e Element with the class "),t("code",[e._v("team__title")]),e._v(" will be selected")]),e._v(" "),t("li",[t("code",[e._v("td:nth-child(4)")]),e._v(" --\x3e 4th td element within the row context will be selected. This will be useful when you element doesn't have any id or duplicate class names.")])]),e._v(" "),t("h2",{attrs:{id:"cors-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-setup"}},[e._v("#")]),e._v(" CORS setup")]),e._v(" "),t("p",[e._v("Some URLs you might not access directly due to CORS restriction set by the websites. At that time you may need to use proxy servers or hosted services as mentioned "),t("a",{attrs:{href:"https://stackoverflow.com/a/32167044/1576253",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". Example: Use "),t("strong",[e._v("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/FIFA_World_Cup")]),e._v(" to connect with wikipedia.")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("There are multiple ways to install this plugin into your grafana instance")]),e._v(" "),t("h3",{attrs:{id:"download-and-extract-zip-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-and-extract-zip-file"}},[e._v("#")]),e._v(" Download and extract zip file")]),e._v(" "),t("p",[e._v("Download the zip file from "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),t("OutboundLink")],1),e._v(" and extract into your grafana plugin folder. Then restart Grafana.")]),e._v(" "),t("h3",{attrs:{id:"using-grafana-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-grafana-cli"}},[e._v("#")]),e._v(" Using grafana-cli")]),e._v(" "),t("p",[e._v("If you are using grafana-cli, execute the following command to install the plugin")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip plugins install yesoreyeram-infinity-datasource\n")])])]),t("h3",{attrs:{id:"using-helm-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-helm-chart"}},[e._v("#")]),e._v(" Using helm chart")]),e._v(" "),t("p",[e._v("If you use helm chart to provision grafana, use the following config to install the plugin")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("plugins:\n  - https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip;yesoreyeram-infinity-datasource\n")])])]),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("Once the plugin installed, you need to create an instance of the datasource. To create an instance follow the steps")]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("code",[e._v("http://localhost:3000/datasources")]),e._v(" and select "),t("em",[e._v("Add data source")])]),e._v(" "),t("li",[e._v("Search for "),t("strong",[e._v("Infinity")]),e._v(" plugin")]),e._v(" "),t("li",[e._v("Give some name. Any name. Sure; Your kitten names are allowed.")]),e._v(" "),t("li",[e._v("Save (and test)")])]),e._v(" "),t("h2",{attrs:{id:"license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),t("p",[e._v("Grafana Infinity datasource is licensed under the "),t("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 License"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);