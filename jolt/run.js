(()=>{var t={257:(t,e,n)=>{const r=n(896),o=JSON.parse(r.readFileSync("./cred.json","utf8"));t.exports=o},788:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function a(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:L(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var m="suspendedStart",h="suspendedYield",y="executing",v="completed",E={};function g(){}function b(){}function D(){}var S={};p(S,s,(function(){return this}));var O=Object.getPrototypeOf,N=O&&O(O(x([])));N&&N!==n&&o.call(N,s)&&(S=N);var I=D.prototype=g.prototype=Object.create(S);function w(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(a,i,c,s){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==r(p)&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function L(e,n,r){var o=m;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var s=R(c,r);if(s){if(s===E)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:h,u.arg===E)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function R(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),E;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,E;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,E):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,E)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function x(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(o.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=D,a(I,"constructor",{value:D,configurable:!0}),a(D,"constructor",{value:b,configurable:!0}),b.displayName=p(D,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,D):(t.__proto__=D,p(t,l,"GeneratorFunction")),t.prototype=Object.create(I),t},e.awrap=function(t){return{__await:t}},w(T.prototype),p(T.prototype,u,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new T(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(I),p(I,l,"Generator"),p(I,s,(function(){return this})),p(I,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,E):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),E},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),E}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),E}},e}function c(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){c(a,r,o,i,s,"next",t)}function s(t){c(a,r,o,i,s,"throw",t)}i(void 0)}))}}var u=n(581),l=n(875),p=function(t,e,n){console.log("".concat(e,": ").concat(n)),t.status(e),t.send(n)},d=function(){var t=s(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query('\n    SELECT users.id, users.name, roles.id as roleID, roles.name as roleName, roles.index as roleIndex\n      FROM (\n          SELECT id, name, phone, email, "folk-member" as roleID FROM community\n          UNION\n          SELECT id, name, phone, email, roleID FROM incumbents\n      ) AS users\n    JOIN roles ON users.roleID=roles.id\n    WHERE phone = \''.concat(a,"' or email = '").concat(a,"';")).then((function(t){t?t.length?(n.status(200),n.send(t)):p(n,404,"User not found"):p(n,500,"Unknown error while verifying user. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=s(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.body,u.send(r).then((function(t){var e=t.status,r=t.error;n.status(e).send(r)})).catch((function(t){console.log(t),p(n,500,t)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=s(i().mark((function t(e,n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.body,u.verify(r).then((function(t){var e=t.status,r=t.error;n.status(e).send(r)})).catch((function(t){p(n,500,t)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=s(i().mark((function t(e,n,r){var o,a,c,s,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.filename,c=o.imageDataURL,s=c.split(";base64,").pop(),u=Buffer.from(s,"base64"),l.put(a,u).then((function(){n.send()})).catch((function(t){p(n,500,"Could not set user photo: ".concat(t))}));case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),y=function(){var t=s(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query("SELECT * FROM community WHERE buddy='".concat(a,"' order by name;")).then((function(t){t?(n.status(200),n.send(t)):p(n,500,"Unknown error while fetching buddy list. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),v=function(){var t=s(i().mark((function t(e,n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,r.query('SELECT assignees.*, IFNULL(incumbents.roleID, "folk-member") as roleID, IFNULL(roles.name, "FOLK Member") as roleName, IFNULL(roles.index, 9) as roleIndex FROM\n  (SELECT community.id, community.name, community.phone, community.dob, community.courseID, community.buddy as buddyID, incumbents.name as buddyName, incumbents.phone as buddyPhone FROM community\n  LEFT JOIN incumbents on incumbents.id=community.buddy\n  WHERE community.preacher=\''.concat(a,"') as assignees\n  LEFT JOIN incumbents on incumbents.id=assignees.id\n  LEFT JOIN roles on roles.id=incumbents.roleID\n  ORDER BY roleIndex, assignees.name")).then((function(t){t?(n.status(200),n.send(t)):p(n,500,"Unknown error while fetching assignees list. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),E=function(){var t=s(i().mark((function t(e,n,r){var o,a,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.body,a=o.id,c=o.roleID,s=function(t,e){return"folk-member"===e?"SELECT connect.*, incumbents.name as buddyName, incumbents.phone as buddyPhone FROM\n        (SELECT community.preacher as preacherID, community.buddy as buddyID, incumbents.name as preacherName, incumbents.phone as preacherPhone FROM community\n        LEFT JOIN incumbents ON incumbents.id=community.preacher\n        WHERE community.id='".concat(t,"' and incumbents.roleID='folk-guide') connect\n        LEFT JOIN incumbents ON incumbents.id=connect.buddyID and incumbents.roleID='buddy-coord'"):""},r.query(s(a,c)).then((function(t){t?(n.status(200),n.send(t[0]||[])):p(n,500,"Unknown error while fetching home data. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),g={"/verify-user":d,"/send-otp":f,"/verify-otp":m,"/set-user-photo":h,"/get-buddies":y,"/get-assignees":v,"/get-users":function(){var t=s(i().mark((function t(e,n,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.query('\n    SELECT users.id, users.name, users.phone, roles.id as roleID, roles.name as roleName, roles.index as roleIndex\n      FROM (\n          SELECT id, name, phone, email, "folk-member" as roleID FROM community\n          UNION\n          SELECT id, name, phone, email, roleID FROM incumbents\n      ) AS users\n    JOIN roles ON users.roleID=roles.id\n    ORDER BY roleIndex asc, users.name asc;').then((function(t){t?t.length?(n.status(200),n.send(t)):p(n,404,"No users found"):p(n,500,"Unknown error while fetching users. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),"/get-home-data":E,"/get-catchup-data":function(){var t=s(i().mark((function t(e,n,r){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.query('\n    SELECT community.id, community.phone, community.name, CASE WHEN LEAST(community.date, MIN(calendar.startDate)) < DATE_SUB(CURDATE(), INTERVAL 2 MONTH) THEN DATE_SUB(CURDATE(), INTERVAL 2 MONTH) ELSE LEAST(community.date, MIN(calendar.startDate)) END AS date FROM community JOIN participation ON participation.participantID=community.id JOIN calendar ON calendar.id=participation.eventID WHERE community.id IN (SELECT id FROM community WHERE courseID!="FEC" AND courseID!="") GROUP BY community.name;\n\n    SELECT community.id, calendar.id as eventID, community.name, community.phone, calendar.startDate AS date, sessions.name AS sessionName, sessions.code, participation.attendance FROM participation JOIN calendar ON calendar.id=participation.eventID JOIN sessions ON sessions.id=calendar.sessionID JOIN community ON community.id=participation.participantID WHERE participation.participantID IN (SELECT id FROM community WHERE courseID!="FEC" AND courseID!="" ORDER BY name) AND calendar.courseID=\'SOS\' ORDER BY participation.participantID, calendar.startDate;\n    \n    SELECT sessions.code, sessions.name, calendar.startDate AS date, calendar.startTime, calendar.endTime FROM calendar JOIN sessions ON sessions.id=calendar.sessionID WHERE calendar.startDate=(SELECT MIN(calendar.startDate) FROM calendar JOIN sessions ON sessions.id = calendar.sessionID WHERE calendar.startDate>NOW() AND sessions.type="CATCHUP") AND calendar.courseID=\'SOS\' AND sessions.type="CATCHUP" ORDER BY calendar.startTime;\n\n    SELECT calendar.id as eventID, calendar.startDate AS date, sessions.code, sessions.name FROM calendar JOIN sessions ON sessions.id = calendar.sessionID WHERE calendar.startDate > (SELECT MIN(mindate.date) AS date FROM (SELECT LEAST(community.date, MIN(calendar.startDate)) AS date FROM community JOIN participation ON participation.participantID=community.id JOIN calendar ON calendar.id=participation.eventID WHERE community.id IN (SELECT id FROM community WHERE courseID!="FEC" AND courseID!="") GROUP BY community.name) mindate) AND calendar.startDate < NOW() AND calendar.courseID=\'SOS\' ORDER BY calendar.startDate;\n  ').then((function(t){t?t.length?(n.status(200),n.send(t)):p(n,404,"No users found"):p(n,500,"Unknown error while fetching catchup data. Got undefined or null result")})).catch((function(t){p(n,500,t)}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.db=e}var e,n,r,a;return e=t,n=[{key:"call",value:(a=s(i().mark((function t(e,n){var r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.get("endpoint"),o=e.get("user"),console.log("[API] [".concat(o||"NO-USER","] ").concat(r)),r in g?g[r](e,n,this.db):p(n,400,"Endpoint ".concat(r," not found"));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})}],n&&o(e.prototype,n),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=b},875:(t,e,n)=>{var r=n(257),o="https://cdn.iskconmysore.org/content?path=folkapp/dp",a=n(938),i={head:function(t){return new Promise((function(e,n){a.head("".concat(o,"/").concat(t)).then((function(){e()})).catch((function(t){return n("Error during CDN HEAD request: ".concat(t.message))}))}))},put:function(t,e){return new Promise((function(n,i){a.put("".concat(o,"/").concat(t),e,{headers:{"Content-Type":"image/jpeg","api-key":r.cdn.apiKey}}).then((function(){n("File updated successfully")})).catch((function(t){return i("Error during CDN PUT request: ".concat(t.message))}))}))},delete:function(t){return new Promise((function(e,n){a.delete("".concat(o,"/").concat(t),{headers:{"api-key":r.cdn.apiKey}}).then((function(){e("File deleted successfully")})).catch((function(t){return n("Error during CDN DELETE request: ".concat(t.message))}))}))}};t.exports=i},992:t=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:String(n)}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.db=e}var e,r,o;return e=t,(r=[{key:"query",value:function(t){var e=this;return new Promise((function(n,r){e.db.query(t,(function(t,e){if(t)return r(t);n(e)}))}))}},{key:"close",value:function(){this.db.end()}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();t.exports=o},581:(t,e,n)=>{var r=n(257),o="https://otp.iskconmysore.org/data",a=n(938),i={send:function(t){var e=t.id,n=t.target;return new Promise((function(t,i){a.post(o,{id:e,target:n,title:"OTP from FOLK Mysore App"},{headers:{"Content-Type":"application/json","api-key":r.otp.apiKey,endpoint:"/send"}}).then((function(){t({status:200})})).catch((function(e){t({status:e.response.status,error:e.message})}))}))},verify:function(t){var e=t.otp,n=t.id;return new Promise((function(t,i){a.post(o,{otp:e,id:n},{headers:{"Content-Type":"application/json","api-key":r.otp.apiKey,endpoint:"/verify"}}).then((function(){t({status:200})})).catch((function(e){t({status:e.response.status,error:e.message})}))}))}};t.exports=i},771:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){var o;return o=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==r(o)?o:String(o))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=n(716),s=n(257),u=new(n(209))(s.telebot.botToken,{polling:!1}),l=[{table:"community",update:function(t,e){var n=e.attendance,r=e.lastAttended,o=e.regularity,a=e.status;return"UPDATE community SET attendance = ".concat(n,", lastAttended = '").concat(r,"', regularity = ").concat(o,", status = '").concat(a,"' WHERE id = '").concat(t,"';")},queries:[{query:function(t){return"\n                    SELECT COUNT(*) AS attendance FROM participation JOIN calendar ON calendar.id = participation.eventID WHERE participation.participantID = '".concat(t,"' AND participation.attendance = 1 AND calendar.courseID IS NOT NULL;\n                ")},post:function(t){return t[0].attendance}},{query:function(t){return"\n                    SELECT MAX(calendar.startDate) AS lastAttended FROM participation JOIN calendar ON calendar.id = participation.eventID WHERE participation.participantID = '".concat(t,"' AND participation.attendance = 1 AND calendar.courseID IS NOT NULL;\n                ")},post:function(t){return t[0].lastAttended}},{query:function(t){return"\n                    SELECT CAST(COUNT(*) / (SELECT COUNT(DISTINCT startDate) FROM calendar WHERE startDate BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 MONTH) AND CURDATE() AND courseID IS NOT NULL AND startDate >= (SELECT date FROM community WHERE id = '".concat(t,"')) * 100 AS SIGNED) AS regularity FROM participation JOIN calendar ON calendar.id = participation.eventID WHERE participation.participantID = '").concat(t,"' AND calendar.courseID IS NOT NULL AND calendar.startDate IN (SELECT DISTINCT startDate FROM calendar WHERE startDate BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 MONTH) AND CURDATE() AND courseID IS NOT NULL) AND participation.attendance = 1;\n                ")},post:function(t){return t[0].regularity}},{query:function(t){return"\n                    SELECT date, snooze from community where id='".concat(t,"';\n                ")},post:function(t){return t[0]}}],derivatives:[{name:"status",compute:function(t){var e=t.attendance,n=t.regularity,r=t.date,o=t.snooze,a=c().diff(c(r,"YYYY-MM-DD"),"days");return o>=c().format("YYYY-MM-DD")?"snooze":a<=7&&0==e?"new":n>=75?"regular":n>0?"irregular":"inactive"}}]}],p={compute:function t(e,n,r){var o=l.filter((function(t){return t.table==e}))[0];r?n.query(o.queries.map((function(t){return t.query(r).trim()})).join(" ")).then((function(t){var e={};t.forEach((function(t){e=a(a({},t[0]),e)})),o.derivatives.forEach((function(t){e[t.name]=t.compute(e)})),n.query(o.update(r,e)).catch((function(t){console.log("[STATS ERROR] ".concat(t)),u.sendMessage(s.telebot.apiChatID,"[STATS ERROR] ".concat(t))}))})).catch((function(t){console.log("[STATS ERROR] ".concat(t)),u.sendMessage(s.telebot.apiChatID,"[STATS ERROR] ".concat(t))})):n.query("SELECT id FROM ".concat(e)).then((function(r){r.forEach((function(r){t(e,n,r.id)})),console.log("[SYNC] Stat updation will complete shortly!")})).catch((function(t){console.log("[STATS ERROR] ".concat(t)),u.sendMessage(s.telebot.apiChatID,"[STATS ERROR] ".concat(t))}))}};t.exports=p},949:(t,e,n)=>{var r=n(938),o=n(257),a=n(771),i=new(n(209))(o.telebot.botToken,{polling:!1}),c=["Community","Courses","Sessions","Calendar","Participation"],s={community:["id","date","name","phone","email","preacher","buddy","courseID","category","source","dob","snooze","comments","yearOfJoining","skills","institution","tShirtSize","native","isStudent","course","company","designation"],participation:["participantID","eventID","caller","phone","response","time","attendance","remarks","name"],calendar:["id","startDate","endDate","startTime","endTime","name","courseID","speaker","venue","cost","type","sessionID","felicitation","hidden","remarks"],incumbents:["id","name","phone","email","roleID"],courses:["id","name","level"],sessions:["courseID","name","message","id","type","code","index","canvaLink","videoLink"]},u=["comments","remarks","skills","remarks","message"],l=[{id:"PVPD",name:"Pavana Prana Dasa",phone:"6364903722",email:"pvpd@iskconmysore.org",roleID:"app-admin"},{id:"PVPD",name:"Pavana Prana Dasa",phone:"6364903722",email:"pvpd@iskconmysore.org",roleID:"folk-guide"},{id:"SKKD",name:"Sanaka Kumara Dasa",phone:"6364903726",email:"skkd@iskconmysore.org",roleID:"folk-guide"},{id:"KSD",name:"Karunya Sagar Dasa",phone:"9880544450",email:"ksd@iskconmysore.org",roleID:"folk-guide"}];Array.prototype.insert=function(t,e){return"INSERT INTO ".concat(t," (").concat(this.map((function(t){return"`".concat(t,"`")})).join(", "),") VALUES (").concat(this.map((function(t){return n=e[t],r=t,"boolean"==typeof n||n||(n=null),-1!=u.indexOf(r)&&n&&(n=Buffer.from(n).toString("base64")),null==n?"NULL":"string"==typeof n?'"'.concat(n.replace(/"/g,"'"),'"'):"boolean"==typeof n?n?1:0:n;var n,r})).join(", "),")")};t.exports=function(t){console.log("[SYNC]","sync started"),r.post("https://sheets.iskconmysore.org",{url:"https://docs.google.com/spreadsheets/d/186h3EpvZSvCD8Mcn7NU9TN70BGz_BZtKlSXGHVH_laU/edit#",sheets:c}).then((function(e){console.log("[SYNC]","received sheet data");var n=e.data;t.query("\n\n      BEGIN;\n\n      ".concat([].concat(c).reverse().map((function(t){return"DELETE FROM ".concat(t.toLowerCase())})).join("; "),";\n\n      DELETE FROM incumbents;\n\n      ").concat(c.map((function(t){return t=t.toLowerCase(),n[t].map((function(e){return s[t].insert(t,e)})).join("; ")})).join("; "),";\n\n      ").concat(n.community.filter((function(t){return"Buddy Coordinator"==t.buddyName})).concat(l).map((function(t){var e=t.id,n=t.name,r=t.phone,o=t.email;return s.incumbents.insert("incumbents",{id:e,name:n,phone:r,email:o,roleID:t.roleID||"buddy-coord"})})).join("; "),";\n      \n      COMMIT;\n    ").trim()).then((function(e){console.log("[SYNC]","sync complete, updating stats.."),a.compute("community",t)})).catch((function(t){var e=t&&t.response&&t.response.data?t.response.data:t&&t.response?t.response:t;i.sendMessage(o.telebot.apiChatID,"[SYNC ERROR]\n".concat(e)),console.log("[SYNC] ".concat(e))}))})).catch((function(t){console.log("[SYNC] ".concat(t))}))}},393:(t,e,n)=>{var r=n(716),o=n(938),a=n(257),i=new(n(209))(a.telebot.botToken,{polling:!1});t.exports=function(t){t.query("SELECT name, phone, preacher, dob FROM community WHERE dob LIKE '%".concat(r().format("-MM-DD"),"'")).then((function(t){t.length?(console.log("[WISH]","".concat(t.length," wishes today..")),t.forEach((function(t){var e=t.name,n=t.phone,r=t.preacher,c=e.split(" ")[0],s="SKKD"==r?"Sanaka Kumar Dasa":"Pavana Prana Dasa";o.post("https://wame.iskconmysore.org",{template:"folk_wish",phone:n,values:[c,s]},{headers:{"api-key":a.wame.apiKey}}).then((function(){console.log("[WISH]","Wish sent to ".concat(e," (").concat(n,")")),i.sendMessage(a.telebot.wishChatID,"Below wish is sent to ".concat(e," (").concat(n,")\n\n").concat("Hare Krishna Chi. {{1}} !! 🌟🎉\n\nWishing you a very happy Krishna Conscious birthday!! 🎂 May Their Lordships Sri Sri Krishna Balaram shower upon you Their choicest blessings ✨\n\nMake this day special by visiting our temple 🛕 and having a divine darshan of the Lord. 🙏\n\nWith heartfelt wishes,\n{{2}}".replace("{{1}}",c).replace("{{2}}",s)))})).catch((function(t){console.log("[WISH]","Wish error: ".concat(t)),i.sendMessage(a.telebot.wishChatID,"Wish error: ".concat(t))}))}))):(console.log("[WISH]","No birthdays today!"),i.sendMessage(a.telebot.wishChatID,"No birthdays today!"))})).catch((function(t){console.log("[WISH] Wish error: ".concat(t)),i.sendMessage(a.telebot.wishChatID,"Wish error: ".concat(t))}))}},938:t=>{"use strict";t.exports=require("axios")},252:t=>{"use strict";t.exports=require("express")},716:t=>{"use strict";t.exports=require("moment")},874:t=>{"use strict";t.exports=require("mysql")},703:t=>{"use strict";t.exports=require("node-cron")},209:t=>{"use strict";t.exports=require("node-telegram-bot-api")},896:t=>{"use strict";t.exports=require("fs")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(()=>{var t=n(716),e=console.log;console.log=function(){for(var n=(new Date).toISOString(),r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];e.apply(console,["[".concat(t(n).format("YY-MMM-DD HH:mm"),"]")].concat(o))};var r=n(252),o=n(703),a=r();a.use(r.json({limit:"10mb"}));var i=n(788),c=n(992),s=n(257),u=n(949),l=n(393);s.mysql.connectionLimit=100,s.mysql.multipleStatements=!0;var p=new c(n(874).createPool(s.mysql)),d=new i(p);if(a.get("/api",(function(t,e){e.status(200).send()})),a.post("/api",d.call.bind(d)),a.listen(3005,(function(){console.log("App listening at http://localhost:".concat(3005))})),s.cron.sync){var f=t().add(1,"minute").format("mm");console.log("Sync minute - ".concat(f)),o.schedule("".concat(f," * * * *"),(function(){u(p)}))}s.cron.wish&&o.schedule("0 4 * * *",(function(){l(p)}))})()})();