(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2byBD",avatar:"Profile_avatar__mV9XR",name:"Profile_name__6kIWU",tag:"Profile_tag__dTtVx",location:"Profile_location__1K97D",stats:"Profile_stats__8kABN",label:"Profile_label__1ya4J"}},function(e,a,t){e.exports={statistics:"Statistic_statistics__21Hae",title:"Statistic_title__39E74",statlist:"Statistic_statlist__201rm",item:"Statistic_item__CO4nU",label:"Statistic_label__1xrdW",percentage:"Statistic_percentage__3wa-h"}},function(e,a,t){e.exports={online:"FriendListItem_online__2x4lf",offline:"FriendListItem_offline__H9_bi FriendListItem_online__2x4lf",item:"FriendListItem_item__2cywF",name:"FriendListItem_name__1GTi-"}},function(e,a,t){e.exports={tableTitle:"TransactionHistory_tableTitle__1NWLX",table:"TransactionHistory_table__1Q9eR",tbody:"TransactionHistory_tbody__3S8y7"}},,,function(e,a,t){e.exports={friendList:"FriendList_friendList__1FHP9"}},function(e,a,t){e.exports={row:"TransactionHistoryItem_row__26grM"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.5","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),i=t.n(c),s=(t(18),t(1)),l=t.n(s),o=function(e){var a=e.name,t=e.tag,n=e.location,c=e.avatar,i=e.stats,s=i.followers,o=i.views,m=i.likes;return r.a.createElement("div",{className:l.a.profile},r.a.createElement("div",{className:l.a.description},r.a.createElement("img",{src:c,alt:"user avatar",className:l.a.avatar}),r.a.createElement("p",{className:l.a.name},a),r.a.createElement("p",{className:l.a.tag},"@",t),r.a.createElement("p",{className:l.a.location},n)),r.a.createElement("ul",{className:l.a.stats},r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Followers "),r.a.createElement("span",{className:l.a.quantity},s)),r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Views "),r.a.createElement("span",{className:l.a.quantity},o)),r.a.createElement("li",null,r.a.createElement("span",{className:l.a.label},"Likes "),r.a.createElement("span",{className:l.a.quantity},m))))},m=o;o.defaultProps={avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D6iUSiBYhLGC_2J4Yp3CwpA1aeOH3A0UEtFCRjnyIXC-o_XR9Q&s"};var d=t(2),u=t.n(d),p=function(){var e=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"#"+e.toString(16)+a.toString(16)+t.toString(16)},f=function(e){var a=e.stats,t=e.title;return r.a.createElement("section",{className:u.a.statistics},t?r.a.createElement("h2",{className:u.a.title},t):null,r.a.createElement("ul",{className:u.a.statlist},a.map((function(e){var a=e.id,t=e.percentage,n=e.label;return r.a.createElement("li",{style:{backgroundColor:p()},className:u.a.item,key:a},r.a.createElement("span",{className:u.a.label},n),r.a.createElement("span",{className:u.a.percentage},t,"%"))}))))},b=f;f.defaultProps={stats:{label:"none",percentage:"none"}};var y=t(7),_=t.n(y),E=t(3),w=t.n(E),v=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return r.a.createElement("li",{className:w.a.item},r.a.createElement("span",{className:n?w.a.online:w.a.offline}),r.a.createElement("img",{className:"avatar",src:a,alt:"userAvatar",width:64}),r.a.createElement("p",{className:w.a.name},t))},g=v;v.defaultProps={avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D6iUSiBYhLGC_2J4Yp3CwpA1aeOH3A0UEtFCRjnyIXC-o_XR9Q&s"};var h=function(e){var a=e.friends;return r.a.createElement("ul",{className:_.a.friendList},a.map((function(e){return r.a.createElement(g,Object.assign({},e,{key:e.id}))})))},N=t(8),O=t.n(N),L=function(e){var a=e.type,t=e.amount,n=e.currency;return r.a.createElement("tr",{className:O.a.row},r.a.createElement("td",null,a),r.a.createElement("td",null,t),r.a.createElement("td",null,n))},S=t(4),x=t.n(S),P=function(e){var a=e.items;return r.a.createElement("table",{className:x.a.table},r.a.createElement("thead",null,r.a.createElement("tr",{className:x.a.tableTitle},r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Currency"))),r.a.createElement("tbody",{className:x.a.tbody},a.map((function(e){return r.a.createElement(L,Object.assign({},e,{key:e.id}))}))))};var C=function(e){var a=e.user,t=e.statistic,n=e.friends,c=e.transactions;return r.a.createElement("div",null,r.a.createElement(m,a),r.a.createElement(b,{title:"File upload",stats:t}),r.a.createElement(h,{friends:n}),r.a.createElement(P,{items:c}))},T=t(9),U=t(10),j=t(11),k=t(12);i.a.render(r.a.createElement(C,{user:T,statistic:U,friends:j,transactions:k}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.f7c45787.chunk.js.map