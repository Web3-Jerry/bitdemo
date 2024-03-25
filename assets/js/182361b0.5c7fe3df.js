"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3696],{8461:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=s(4848),t=s(8453);const a={sidebar_position:6},l="JSON-RPC",i={id:"Build/Json-RPC",title:"JSON-RPC",description:"Bitlayer provides all json-rpc api methods listed in Ethereum.",source:"@site/docs/Build/Json-RPC.md",sourceDirName:"Build",slug:"/Build/Json-RPC",permalink:"/bitdemo/docs/Build/Json-RPC",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/bitdemo/docs/Build/Deployment"},next:{title:"Bridges",permalink:"/bitdemo/docs/Build/Bridges"}},c={},o=[{value:"eth_getTraceActionByTxHash",id:"eth_gettraceactionbytxhash",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"eth_getTraceActionByBlockNumber",id:"eth_gettraceactionbyblocknumber",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"eth_getTraceActionByBlockHash",id:"eth_gettraceactionbyblockhash",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"json-rpc",children:"JSON-RPC"}),"\n",(0,r.jsxs)(n.p,{children:["Bitlayer provides all json-rpc api methods listed in ",(0,r.jsx)(n.a,{href:"https://ethereum.org/developers/docs/apis/json-rpc#json-rpc-methods",children:"Ethereum"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Besides, it has several custom methods."}),"\n",(0,r.jsx)(n.h2,{id:"eth_gettraceactionbytxhash",children:"eth_getTraceActionByTxHash"}),"\n",(0,r.jsx)(n.p,{children:"Returns logs of internal transactions by hash of a transaction."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DATA, 32 Bytes - hash of a transaction"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Object - The filter options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"fromUser: DATA|Array, 20 Bytes - (optional) address of the sender."}),"\n",(0,r.jsx)(n.li,{children:"toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver."}),"\n",(0,r.jsx)(n.li,{children:"opCode: String - (optional) An EVM opcode for a transaction's log."}),"\n",(0,r.jsx)(n.li,{children:"minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Object - A internal transaction's log object, or null when no log was found:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"transactionHash: DATA, 32 Bytes - hash of the transaction."}),"\n",(0,r.jsx)(n.li,{children:"blockHash: DATA, 32 Bytes - hash of the block where this transaction was in. null when its pending."}),"\n",(0,r.jsx)(n.li,{children:"blockNumber: QUANTITY - block number where this transaction was in."}),"\n",(0,r.jsxs)(n.li,{children:["logs: Array - Array of log objects, which this transaction generated. The log object:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"from: DATA, 20 Bytes - address of the sender."}),"\n",(0,r.jsx)(n.li,{children:"to: DATA, 20 Bytes - address of the receiver. null when it's a contract creation transaction."}),"\n",(0,r.jsx)(n.li,{children:"value: QUANTITY - value transferred in BRC."}),"\n",(0,r.jsx)(n.li,{children:"success: QUANTITY - a boolean value indicating whether the call was successfully completed. either 1 (success) or 0 (failure)"}),"\n",(0,r.jsx)(n.li,{children:"opcode: DATA - the EVM opcode of the transaction's log."}),"\n",(0,r.jsx)(n.li,{children:"depth: QUANTITY - the length of callstack in EVM."}),"\n",(0,r.jsx)(n.li,{children:"gas: QUANTITY - gas provided by the sender."}),"\n",(0,r.jsx)(n.li,{children:"gas_used: QUANTITY - The amount of gas used by this specific transaction alone."}),"\n",(0,r.jsx)(n.li,{children:"input: DATA - the data send along with the transaction."}),"\n",(0,r.jsx)(n.li,{children:"trace_address: QUANTITY|Array - Array of call trace where each element signifies the depth of a call during execution."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByTxHash",  "params":["0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694"], "id":1}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": [\n    {\n      "transactionHash": "0xce9a42b2d2e0c0a7984d9351793129b91dc0599b9b4401082b75afcbc6abd694",\n      "blockHash": "0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3",\n      "blockNumber": 54,\n      "logs": [\n        {\n          "from": "0x2e46771cff3636a42f363826ff8a94d3a738e075",\n          "to": "0x000000000000000000000000000000000000f000",\n          "value": 0,\n          "success": true,\n          "opcode": "CALL",\n          "depth": 18446744073709551615,\n          "gas": 165629,\n          "gas_used": 162996,\n          "input": "0x6374299e0000000000000000000000009f01eb5eb4dbea8b2cecc679050819990ab68a1a000000000000000000000000000000000000000000295be96e64066972000000",\n          "trace_address": []\n        },\n        {\n          "from": "0x000000000000000000000000000000000000f000",\n          "to": "0x4b20bbf3652696b9afd27b8f88ff8b7c1f361336",\n          "value": 0,\n          "success": true,\n          "opcode": "STATICCALL",\n          "depth": 0,\n          "gas": 157800,\n          "gas_used": 2443,\n          "input": "0x00000000",\n          "output": "0x0000000000000000000000002e46771cff3636a42f363826ff8a94d3a738e075",\n          "trace_address": [\n            0\n          ]\n        },\n        {\n          "from": "0x000000000000000000000000000000000000f000",\n          "to": "0xf4340cf5f3891a3827713b33f769b501a0b5b122",\n          "value": 0,\n          "success": true,\n          "opcode": "STATICCALL",\n          "depth": 0,\n          "gas": 150040,\n          "gas_used": 2814,\n          "input": "0x0000000000000000000000000000000000000000007c13bc4b2c133c560000000000000000000000000000000000000000000000007c13bc4b2c133c5600000000000000",\n          "output": "0x0000000000000000000000000000000000000000007c13bc4b2c133c56000000",\n          "trace_address": [\n            1\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"eth_gettraceactionbyblocknumber",children:"eth_getTraceActionByBlockNumber"}),"\n",(0,r.jsx)(n.p,{children:"Returns logs of internal transactions by block number."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"QUANTITY|TAG - integer of a block number"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Object - The filter options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"fromUser: DATA|Array, 20 Bytes - (optional) address of the sender."}),"\n",(0,r.jsx)(n.li,{children:"toBlock: DATA|Array, 20 Bytes - (optional) address of the receiver."}),"\n",(0,r.jsx)(n.li,{children:"opCode: String - (optional) An EVM opcode for a transaction's log."}),"\n",(0,r.jsx)(n.li,{children:"minValue: QUANTITY|TAG - (optional) the minimal value or amount transferred in BRC."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["Same as ",(0,r.jsx)(n.a,{href:"#returns",children:"eth_getTraceActionByTxHash"})]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockNumber",  "params":["0x36"],  "id":1}\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Result see ",(0,r.jsx)(n.a,{href:"#example",children:"eth_getTraceActionByTxHash"})]}),"\n",(0,r.jsx)(n.h2,{id:"eth_gettraceactionbyblockhash",children:"eth_getTraceActionByBlockHash"}),"\n",(0,r.jsx)(n.p,{children:"Returns logs of internal transactions by block hash."}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"DATA, 32 Bytes - Hash of a block."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["Same as ",(0,r.jsx)(n.a,{href:"#returns",children:"eth_getTraceActionByTxHash"})]}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST --data \'{  "jsonrpc":"2.0",  "method":"eth_getTraceActionByBlockHash",  "params":["0x80f5779b0348102d90f5463a9a494b7454d0e1f8d8b119cf090cd90e2d6105c3"],  "id":1}\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Result see ",(0,r.jsx)(n.a,{href:"#example",children:"eth_getTraceActionByTxHash"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(6540);const t={},a=r.createContext(t);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);