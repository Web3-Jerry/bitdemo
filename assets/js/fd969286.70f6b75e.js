"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7083],{2894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(4848),s=n(8453);const r={sidebar_position:2},a="Testnet",o={id:"Build/Testnet",title:"Testnet",description:"Essential Information for Users",source:"@site/docs/Build/Testnet.md",sourceDirName:"Build",slug:"/Build/Testnet",permalink:"/bitdemo/docs/Build/Testnet",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mainnet",permalink:"/bitdemo/docs/Build/Mainnet"},next:{title:"Connect a Wallet to Testnet",permalink:"/bitdemo/docs/Build/Connect a Wallet to Testnet"}},l={},c=[{value:"Essential Information for Users",id:"essential-information-for-users",level:2},{value:"Important notice for Metamask users",id:"important-notice-for-metamask-users",level:3},{value:"Chainid",id:"chainid",level:2},{value:"Native Token",id:"native-token",level:2},{value:"RPC",id:"rpc",level:2},{value:"Explorer",id:"explorer",level:2},{value:"Faucet",id:"faucet",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"testnet",children:"Testnet"}),"\n",(0,i.jsx)(t.h2,{id:"essential-information-for-users",children:"Essential Information for Users"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Bitlayer's native gas token is BTC. However, on Bitlayer, BTC has an 18-digit precision, which is different from the 8-digit precision of BTC on Bitcoin. This is done to maintain consistency with the default decimal of tokens of EVM-compatible chains."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"On the Bitlayer, there is a minimum priority fee requirement. Developers can use eth_gasPrice or eth_maxPriorityFeePerGas to estimate the gas price required for a transaction in real time."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For the Testnet, a minimum tip of 0.1 gwei is required. Usually, 0.11 gwei gasPrice for legacy transactions, 0.1 gwei maxPriorityFeePerGas (and set enough amount to maxFeePerGas) for EIP1559 transactions SHOULD BE enough."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"For Dapp developers, it's recommended that setting the maxPriorityFeePerGas by code before calling apis to send the transaction, rather then leave it empty (filled by the default strategy of wallet (e.g. Metamask) or SDK)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"important-notice-for-metamask-users",children:"Important notice for Metamask users"}),"\n",(0,i.jsx)(t.p,{children:'MetaMask automatically recommends a minimum "Priority Fee" (maxPriorityFeePerGas) of 1 gwei, which is way more than Bitlayer\'s minimum requirement. This can lead to transaction fees much higher than necessary.'}),"\n",(0,i.jsx)(t.p,{children:"Here's a screenshot of how to set the Priority Fee:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(9360).A+"",width:"2226",height:"1228"})}),"\n",(0,i.jsx)(t.h2,{id:"chainid",children:"Chainid"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"200810 \n"})}),"\n",(0,i.jsx)(t.h2,{id:"native-token",children:"Native Token"}),"\n",(0,i.jsx)(t.p,{children:"The native token used on the Bitlayer testnet is BTC."}),"\n",(0,i.jsx)(t.p,{children:"Although it is a testnet token, it functions similarly to the actual Bitcoin (BTC) cryptocurrency."}),"\n",(0,i.jsx)(t.p,{children:"It is important to note that the native token on the testnet does not hold any real-world value."}),"\n",(0,i.jsx)(t.h2,{id:"rpc",children:"RPC"}),"\n",(0,i.jsx)(t.p,{children:"The Bitlayer testnet provides the following RPC (Remote Procedure Call) endpoints for interacting with the network:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://testnet-rpc.bitlayer.org",children:"https://testnet-rpc.bitlayer.org"}),": This RPC endpoint allows developers to send requests and interact with the Bitlayer testnet programmatically. It is commonly used for deploying contracts, querying blockchain data, and executing transactions."]}),"\n",(0,i.jsx)(t.li,{children:"wss://testnet-ws.bitlayer.org: This WebSocket endpoint enables real-time communication with the Bitlayer testnet. Developers can subscribe to events and receive updates as they occur on the network."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"explorer",children:"Explorer"}),"\n",(0,i.jsx)(t.p,{children:"To explore and inspect transactions, blocks, and addresses on the Bitlayer testnet, you can utilize the following explorer:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://testnet-scan.bitlayer.org",children:"https://testnet-scan.bitlayer.org"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"faucet",children:"Faucet"}),"\n",(0,i.jsx)(t.p,{children:"For testing purposes, the Bitlayer testnet offers a faucet that dispenses test BTC tokens. The faucet provides a way for developers to obtain test tokens without the need for actual value."}),"\n",(0,i.jsx)(t.p,{children:"You can access the Bitlayer testnet faucet at:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.bitlayer.org/faucet",children:"https://www.bitlayer.org/faucet"}),": By visiting this URL, developers can request a certain amount (0.05 BTC) of test BTC tokens to use in their development and testing processes."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9360:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Metamask-df2536a6bb05ed7924c15cdab3756059.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);