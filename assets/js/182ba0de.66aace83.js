"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4842],{4840:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var t=i(4848),o=i(8453);const l={sidebar_position:4},r="Compile and Run",s={id:"Build/Compile and Run",title:"Compile and Run",description:"This guide walks you through compiling and running Bitlayer.",source:"@site/docs/Build/Compile and Run.md",sourceDirName:"Build",slug:"/Build/Compile and Run",permalink:"/bitdemo/docs/Build/Compile and Run",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Build/Compile and Run.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Connect a Wallet to Testnet",permalink:"/bitdemo/docs/Build/Connect a Wallet to Testnet"},next:{title:"Deployment",permalink:"/bitdemo/docs/Build/Deployment"}},d={},a=[{value:"Download",id:"download",level:2},{value:"Install Golang",id:"install-golang",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"compile-and-run",children:"Compile and Run"}),"\n",(0,t.jsx)(n.p,{children:"This guide walks you through compiling and running Bitlayer."}),"\n",(0,t.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,t.jsx)(n.p,{children:"Download the Bitlayer source code using the following git command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/bitlayer-org/bitlayer-l2.git\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-golang",children:"Install Golang"}),"\n",(0,t.jsxs)(n.p,{children:["Before compiling Bitlayer, make sure you have Golang installed on your system. Refer to the official Golang website (",(0,t.jsx)(n.a,{href:"https://go.dev/dl/",children:"https://go.dev/dl/"}),") for download and installation instructions."]}),"\n",(0,t.jsx)(n.h2,{id:"compile",children:"Compile"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Navigate to the directory where you cloned the Bitlayer source code using:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd /path/to/bitlayer-l2\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compile Bitlayer by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"make geth\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a compiled binary in the ",(0,t.jsx)(n.code,{children:"build/bin"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"run",children:"Run"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get a list of available options and their descriptions by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./build/bin/geth --help\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://geth.ethereum.org/docs/fundamentals/command-line-options",children:"Command-line Options documentation"})," for specific usage details."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Custom Option:"})}),"\n",(0,t.jsxs)(n.p,{children:["Bitlayer offers a custom option named ",(0,t.jsx)(n.code,{children:"--traceaction"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"--traceaction value     (default: 0)\r\n    Trace internal tx call/create/suicide action, 0=no trace, 1=trace only native token > 0, 2=trace all\n"})}),"\n",(0,t.jsx)(n.p,{children:"This option allows you to enable or disable custom JSON-RPC methods for tracing internal transactions."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(6540);const o={},l=t.createContext(o);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);