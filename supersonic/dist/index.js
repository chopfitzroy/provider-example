var e,t=(e=require("react"))&&"object"==typeof e&&"default"in e?e.default:e,r=t.createContext();exports.SettingsProvider=function(e){var n=e.children,i=t.useState({setting:1}),o=i[0],s=i[1];return console.log("Settings Provider Initiated"),t.createElement(r.Provider,{value:{settings:o,setSettings:s}},n)},exports.SettingsContext=r;
//# sourceMappingURL=index.js.map
