(()=>{var t={257:(t,e,n)=>{const r=n(896),o=JSON.parse(r.readFileSync("./cred.json","utf8"));t.exports=o},788:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function a(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",p=s.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),s=new C(r||[]);return a(i,"_invoke",{value:T(t,n,s)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",m="suspendedYield",y="executing",v="completed",g={};function E(){}function b(){}function D(){}var w={};l(w,c,(function(){return this}));var I=Object.getPrototypeOf,N=I&&I(I(M([])));N&&N!==n&&o.call(N,c)&&(w=N);var S=D.prototype=E.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(a,i,s,c){var u=f(t[a],t,i);if("throw"!==u.type){var p=u.arg,l=p.value;return l&&"object"==r(l)&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(l).then((function(t){p.value=t,s(p)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function T(e,n,r){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=k(s,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:m,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function M(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(o.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=D,a(S,"constructor",{value:D,configurable:!0}),a(D,"constructor",{value:b,configurable:!0}),b.displayName=l(D,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,D):(t.__proto__=D,l(t,p,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},O(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new L(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(S),l(S,p,"Generator"),l(S,c,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=M,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(R),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){s(a,r,o,i,c,"next",t)}function c(t){s(a,r,o,i,c,"throw",t)}i(void 0)}))}}var u=n(581),p=n(875),l=function(t,e,n){t.status(e),t.send(n)},d=function(){var t=c(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query('\n    SELECT users.id, users.name, roles.id as roleID, roles.name as roleName, roles.index as roleIndex\n      FROM (\n          SELECT id, name, phone, email, "participant" as roleID FROM participants\n          UNION\n          SELECT id, name, phone, email, roleID FROM incumbents\n      ) AS users\n    JOIN roles ON users.roleID=roles.id\n    WHERE phone = \''.concat(a,"' or email = '").concat(a,"';")).then((function(t){t?t.length?(n.status(200),n.send(t)):l(n,404,"User not found"):l(n,500,"Unknown error while verifying user. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=c(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.body,u.send(r).then((function(t){var e=t.status,r=t.error;n.status(e).send(r)})).catch((function(t){console.log(t),l(n,500,t)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=c(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.body,u.verify(r).then((function(t){var e=t.status,r=t.error;n.status(e).send(r)})).catch((function(t){l(n,500,t)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=c(i().mark((function t(e,n,r){var o,a,s,c,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.filename,s=o.imageDataURL,c=s.split(";base64,").pop(),u=Buffer.from(c,"base64"),p.put(a,u).then((function(){n.send()})).catch((function(t){l(n,500,"Could not set user photo: ".concat(t))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),y=function(){var t=c(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query("SELECT * FROM participants WHERE buddy='".concat(a,"' order by name;")).then((function(t){t?(n.status(200),n.send(t)):l(n,500,"Unknown error while fetching buddy list. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),v=function(){var t=c(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query('SELECT assignees.*, IFNULL(incumbents.roleID, "participant") as roleID, IFNULL(roles.name, "Participant") as roleName, IFNULL(roles.index, 9) as roleIndex FROM\n  (SELECT participants.id, participants.name, participants.phone, participants.dob, participants.courseID, participants.buddy as buddyID, incumbents.name as buddyName, incumbents.phone as buddyPhone FROM participants\n  LEFT JOIN incumbents on incumbents.id=participants.buddy\n  WHERE participants.preacher=\''.concat(a,"') as assignees\n  LEFT JOIN incumbents on incumbents.id=assignees.id\n  LEFT JOIN roles on roles.id=incumbents.roleID\n  ORDER BY roleIndex, assignees.name")).then((function(t){t?(n.status(200),n.send(t)):l(n,500,"Unknown error while fetching assignees list. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),g=function(){var t=c(i().mark((function t(e,n,r){var o,a,s,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,s=o.roleID,c=function(t,e){return"participant"===e?"SELECT connect.*, incumbents.name as buddyName, incumbents.phone as buddyPhone FROM\n        (SELECT participants.preacher as preacherID, participants.buddy as buddyID, incumbents.name as preacherName, incumbents.phone as preacherPhone FROM participants\n        LEFT JOIN incumbents ON incumbents.id=participants.preacher\n        WHERE participants.id='".concat(t,"' and incumbents.roleID='folk-guide') connect\n        LEFT JOIN incumbents ON incumbents.id=connect.buddyID and incumbents.roleID='buddy-coord'"):""},r.query(c(a,s)).then((function(t){t?(n.status(200),n.send(t[0]||[])):l(n,500,"Unknown error while fetching home data. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),E={"/verify-user":d,"/send-otp":f,"/verify-otp":h,"/set-user-photo":m,"/get-buddies":y,"/get-assignees":v,"/get-users":function(){var t=c(i().mark((function t(e,n,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.query('\n    SELECT users.id, users.name, users.phone, roles.id as roleID, roles.name as roleName, roles.index as roleIndex\n      FROM (\n          SELECT id, name, phone, email, "participant" as roleID FROM participants\n          UNION\n          SELECT id, name, phone, email, roleID FROM incumbents\n      ) AS users\n    JOIN roles ON users.roleID=roles.id\n    ORDER BY roleIndex asc, users.name asc;').then((function(t){t?t.length?(n.status(200),n.send(t)):l(n,404,"No users found"):l(n,500,"Unknown error while fetching users. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),"/get-home-data":g,"/get-catchup-data":function(){var t=c(i().mark((function t(e,n,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.query('\n    SELECT participants.id, participants.phone, participants.name, CASE WHEN LEAST(participants.date, MIN(calendar.startDate)) < DATE_SUB(CURDATE(), INTERVAL 2 MONTH) THEN DATE_SUB(CURDATE(), INTERVAL 2 MONTH) ELSE LEAST(participants.date, MIN(calendar.startDate)) END AS date FROM participants JOIN participation ON participation.participantID=participants.id JOIN calendar ON calendar.id=participation.eventID WHERE participants.id IN (SELECT id FROM participants WHERE courseID!="FEC" AND courseID!="") GROUP BY participants.name;\n\n    SELECT participants.id, calendar.id as eventID, participants.name, participants.phone, calendar.startDate AS date, sessions.name AS sessionName, sessions.code, participation.attendance FROM participation JOIN calendar ON calendar.id=participation.eventID JOIN sessions ON sessions.id=calendar.sessionID JOIN participants ON participants.id=participation.participantID WHERE participation.participantID IN (SELECT id FROM participants WHERE courseID!="FEC" AND courseID!="" ORDER BY name) AND calendar.courseID=\'SOS\' ORDER BY participation.participantID, calendar.startDate;\n    \n    SELECT sessions.code, sessions.name, calendar.startDate AS date, calendar.startTime, calendar.endTime FROM calendar JOIN sessions ON sessions.id=calendar.sessionID WHERE calendar.startDate=(SELECT MIN(calendar.startDate) FROM calendar JOIN sessions ON sessions.id = calendar.sessionID WHERE calendar.startDate>NOW() AND sessions.type="CATCHUP") AND calendar.courseID=\'SOS\' AND sessions.type="CATCHUP" ORDER BY calendar.startTime;\n\n    SELECT calendar.id as eventID, calendar.startDate AS date, sessions.code, sessions.name FROM calendar JOIN sessions ON sessions.id = calendar.sessionID WHERE calendar.startDate > (SELECT MIN(mindate.date) AS date FROM (SELECT LEAST(participants.date, MIN(calendar.startDate)) AS date FROM participants JOIN participation ON participation.participantID=participants.id JOIN calendar ON calendar.id=participation.eventID WHERE participants.id IN (SELECT id FROM participants WHERE courseID!="FEC" AND courseID!="") GROUP BY participants.name) mindate) AND calendar.startDate < NOW() AND calendar.courseID=\'SOS\' ORDER BY calendar.startDate;\n  ').then((function(t){t?t.length?(n.status(200),n.send(t)):l(n,404,"No users found"):l(n,500,"Unknown error while fetching catchup data. Got undefined or null result")})).catch((function(t){l(n,500,t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.db=e}var e,n,r,a;return e=t,n=[{key:"call",value:(a=c(i().mark((function t(e,n){var r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.get("endpoint"),o=e.get("user"),console.log("[API] [".concat(o||"NO-USER","] ").concat(r)),r in E?E[r](e,n,this.db):l(n,400,"Endpoint ".concat(r," not found"));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})}],n&&o(e.prototype,n),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=b},875:(t,e,n)=>{var r=n(257),o="https://cdn.iskconmysore.org/content?path=folkapp/dp",a=n(938),i={head:function(t){return new Promise((function(e,n){a.head("".concat(o,"/").concat(t)).then((function(){e()})).catch((function(t){return n("Error during CDN HEAD request: ".concat(t.message))}))}))},put:function(t,e){return new Promise((function(n,i){a.put("".concat(o,"/").concat(t),e,{headers:{"Content-Type":"image/jpeg","api-key":r.cdn.apiKey}}).then((function(){n("File updated successfully")})).catch((function(t){return i("Error during CDN PUT request: ".concat(t.message))}))}))},delete:function(t){return new Promise((function(e,n){a.delete("".concat(o,"/").concat(t),{headers:{"api-key":r.cdn.apiKey}}).then((function(){e("File deleted successfully")})).catch((function(t){return n("Error during CDN DELETE request: ".concat(t.message))}))}))}};t.exports=i},992:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:String(n)}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.db=e}var e,r,o;return e=t,(r=[{key:"query",value:function(t){var e=this;return new Promise((function(n,r){e.db.query(t,(function(t,e){if(t)return r(t);n(e)}))}))}},{key:"close",value:function(){this.db.end()}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=o},581:(t,e,n)=>{var r=n(257),o="https://otp.iskconmysore.org/data",a=n(938),i={send:function(t){var e=t.id,n=t.target;return new Promise((function(t,i){a.post(o,{id:e,target:n,title:"OTP from FOLK Mysore App"},{headers:{"Content-Type":"application/json","api-key":r.otp.apiKey,endpoint:"/send"}}).then((function(){t({status:200})})).catch((function(e){t({status:e.response.status,error:e.message})}))}))},verify:function(t){var e=t.otp,n=t.id;return new Promise((function(t,i){a.post(o,{otp:e,id:n},{headers:{"Content-Type":"application/json","api-key":r.otp.apiKey,endpoint:"/verify"}}).then((function(){t({status:200})})).catch((function(e){t({status:e.response.status,error:e.message})}))}))}};t.exports=i},949:(t,e,n)=>{var r=n(938),o=n(257),a=new(n(209))(o.telebot.botToken,{polling:!1}),i=["Participants","Courses","Sessions","Calendar","Participation"],s={participants:["id","date","name","phone","email","preacher","buddy","courseID","category","source","dob","snooze","comments","yearOfJoining","skills","institution","tShirtSize","native","isStudent","course","company","designation"],participation:["participantID","eventID","caller","phone","response","time","attendance","remarks","name"],calendar:["id","startDate","endDate","startTime","endTime","name","courseID","speaker","venue","cost","type","sessionID","felicitation","hidden","remarks"],incumbents:["id","name","phone","email","roleID"],courses:["id","name","level"],sessions:["courseID","name","message","id","type","code","index","canvaLink","videoLink"]},c=["comments","remarks","skills","remarks","message"],u=[{id:"PVPD",name:"Pavana Prana Dasa",phone:"6364903722",email:"pvpd@iskconmysore.org",roleID:"app-admin"},{id:"PVPD",name:"Pavana Prana Dasa",phone:"6364903722",email:"pvpd@iskconmysore.org",roleID:"folk-guide"},{id:"SKKD",name:"Sanaka Kumara Dasa",phone:"6364903726",email:"skkd@iskconmysore.org",roleID:"folk-guide"},{id:"KSD",name:"Karunya Sagar Dasa",phone:"9880544450",email:"ksd@iskconmysore.org",roleID:"folk-guide"}];Array.prototype.insert=function(t,e){return"INSERT INTO ".concat(t," (").concat(this.map((function(t){return"`".concat(t,"`")})).join(", "),") VALUES (").concat(this.map((function(t){return n=e[t],r=t,"boolean"==typeof n||n||(n=null),-1!=c.indexOf(r)&&n&&(n=Buffer.from(n).toString("base64")),null==n?"NULL":"string"==typeof n?'"'.concat(n.replace(/"/g,"'"),'"'):"boolean"==typeof n?n?1:0:n;var n,r})).join(", "),")")};t.exports=function(t){console.log("[SYNC]","sync started"),r.post("https://sheets.iskconmysore.org",{url:"https://docs.google.com/spreadsheets/d/186h3EpvZSvCD8Mcn7NU9TN70BGz_BZtKlSXGHVH_laU/edit#",sheets:i}).then((function(e){console.log("[SYNC]","received sheet data");var n=e.data;t.query("\n\n      BEGIN;\n\n      ".concat([].concat(i).reverse().map((function(t){return"DELETE FROM ".concat(t.toLowerCase())})).join("; "),";\n\n      DELETE FROM incumbents;\n\n      ").concat(i.map((function(t){return t=t.toLowerCase(),n[t].map((function(e){return s[t].insert(t,e)})).join("; ")})).join("; "),";\n\n      ").concat(n.participants.filter((function(t){return"Buddy Coordinator"==t.buddyName})).concat(u).map((function(t){var e=t.id,n=t.name,r=t.phone,o=t.email;return s.incumbents.insert("incumbents",{id:e,name:n,phone:r,email:o,roleID:t.roleID||"buddy-coord"})})).join("; "),";\n      \n      COMMIT;\n    ").trim()).then((function(t){console.log("[SYNC]","sync complete")})).catch((function(t){var e=t&&t.response&&t.response.data?t.response.data:t&&t.response?t.response:t;a.sendMessage(o.telebot.apiChatID,"[SYNC ERROR]\n".concat(e)),console.log("[SYNC] ".concat(e))}))})).catch((function(t){console.log("[SYNC] ".concat(t))}))}},393:(t,e,n)=>{var r=n(716),o=n(938),a=n(257),i=new(n(209))(a.telebot.botToken,{polling:!1});t.exports=function(t){t.query("SELECT name, phone, preacher, dob FROM participants WHERE dob LIKE '%".concat(r().format("-MM-DD"),"'")).then((function(t){t.length?(console.log("[WISH]","".concat(t.length," wishes today..")),t.forEach((function(t){var e=t.name,n=t.phone,r=t.preacher,s=e.split(" ")[0],c="SKKD"==r?"Sanaka Kumar Dasa":"Pavana Prana Dasa";o.post("https://wame.iskconmysore.org",{template:"folk_wish",phone:n,values:[s,c]},{headers:{"api-key":a.wame.apiKey}}).then((function(){console.log("[WISH]","Wish sent to ".concat(e," (").concat(n,")")),i.sendMessage(a.telebot.wishChatID,"Below wish is sent to ".concat(e," (").concat(n,")\n\n").concat("Hare Krishna Chi. {{1}} !! 🌟🎉\n\nWishing you a very happy Krishna Conscious birthday!! 🎂 May Their Lordships Sri Sri Krishna Balaram shower upon you Their choicest blessings ✨\n\nMake this day special by visiting our temple 🛕 and having a divine darshan of the Lord. 🙏\n\nWith heartfelt wishes,\n{{2}}".replace("{{1}}",s).replace("{{2}}",c)))})).catch((function(t){console.log("[WISH]","Wish error: ".concat(t)),i.sendMessage(a.telebot.wishChatID,"Wish error: ".concat(t))}))}))):(console.log("[WISH]","No birthdays today!"),i.sendMessage(a.telebot.wishChatID,"No birthdays today!"))})).catch((function(t){console.log("[WISH] Wish error: ".concat(t)),i.sendMessage(a.telebot.wishChatID,"Wish error: ".concat(t))}))}},938:t=>{"use strict";t.exports=require("axios")},252:t=>{"use strict";t.exports=require("express")},716:t=>{"use strict";t.exports=require("moment")},874:t=>{"use strict";t.exports=require("mysql")},703:t=>{"use strict";t.exports=require("node-cron")},209:t=>{"use strict";t.exports=require("node-telegram-bot-api")},896:t=>{"use strict";t.exports=require("fs")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(()=>{var t=n(716),e=console.log;console.log=function(){for(var n=(new Date).toISOString(),r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e.apply(console,["[".concat(t(n).format("YY-MMM-DD HH:mm"),"]")].concat(o))};var r=n(252),o=n(703),a=r();a.use(r.json({limit:"10mb"}));var i=n(788),s=n(992),c=n(257),u=n(949),p=n(393);c.mysql.connectionLimit=100,c.mysql.multipleStatements=!0;var l=new s(n(874).createPool(c.mysql)),d=new i(l);if(a.get("/api",(function(t,e){e.status(200).send()})),a.post("/api",d.call.bind(d)),a.listen(3005,(function(){console.log("App listening at http://localhost:".concat(3005))})),c.cron.sync){var f=t().add(1,"minute").format("mm");console.log("Sync minute - ".concat(f)),o.schedule("".concat(f," * * * *"),(function(){u(l)}))}c.cron.wish&&o.schedule("0 4 * * *",(function(){p(l)}))})()})();