var t,e=(t=require("react"))&&"object"==typeof t&&"default"in t?t.default:t,r=e.createContext();exports.SettingsProvider=function(t){var i=t.children,n=e.useState({setting:1}),o=n[0],s=n[1];return console.log("Settings Provider Initiated"),h(r.Provider,{value:{settings:o,setSettings:s}},i)},exports.SettingsContext=r;
//# sourceMappingURL=index.js.map
