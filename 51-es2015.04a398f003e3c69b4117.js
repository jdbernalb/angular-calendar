(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Vpa8:function(l,n,e){"use strict";e.d(n,"a",function(){return a});var u=e("8Y7J");class a{constructor(){this.locale="en",this.viewChange=new u.s,this.viewDateChange=new u.s}}},WG5H:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");const a=e("j1vE").a;class t{}var c=e("5VhP"),i=e("pMnS"),o=e("SVse"),v=e("gLGe"),r=e("kx+m"),w=e("J5kl"),b=e("/om3"),s=e("3hes"),g=e("1xDM"),h=e("5oHc"),d=e("e096"),m=e("5dod"),D=e("9thp"),p=e("rIZ9"),C=e("Vpa8");class f{constructor(){this.view="month",this.viewDate=new Date,this.events=[]}}var M=u.Kb({encapsulation:2,styles:[],data:{}});function y(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,1,"span",[["class","cal-day-badge"]],null,null,null,null,null)),(l()(),u.gc(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.day.badgeTotal)})}function k(l){return u.ic(0,[(l()(),u.gc(-1,null,["\n  "])),(l()(),u.Mb(1,0,null,null,8,"div",[["class","cal-cell-top"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n    "])),(l()(),u.Bb(16777216,null,null,1,null,y)),u.Lb(4,16384,null,0,o.n,[u.gb,u.bb],{ngIf:[0,"ngIf"]},null),(l()(),u.gc(-1,null,["\n    "])),(l()(),u.Mb(6,0,null,null,2,"span",[["class","cal-day-number"]],null,null,null,null,null)),(l()(),u.gc(7,null,["",""])),u.cc(8,3),(l()(),u.gc(-1,null,["\n  "])),(l()(),u.gc(-1,null,["\n  "])),(l()(),u.Mb(11,0,null,null,1,"small",[["style","margin: 5px"]],null,null,null,null,null)),(l()(),u.gc(12,null,["There are "," events on this day"])),(l()(),u.gc(-1,null,["\n"]))],function(l,n){l(n,4,0,n.context.day.badgeTotal>0)},function(l,n){var e=u.hc(n,7,0,l(n,8,0,u.Yb(n.parent,0),n.context.day.date,"monthViewDayNumber",n.context.locale));l(n,7,0,e),l(n,12,0,n.context.day.events.length)})}function W(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,2,"mwl-calendar-month-view",[],null,null,null,v.b,v.a)),u.Lb(1,770048,null,0,r.a,[u.j,w.a,u.E,b.a],{viewDate:[0,"viewDate"],events:[1,"events"],cellTemplate:[2,"cellTemplate"]},null),(l()(),u.gc(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,1,0,e.viewDate,e.events,u.Yb(n.parent,11))},null)}function L(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,2,"mwl-calendar-week-view",[],null,null,null,s.b,s.a)),u.Lb(1,770048,null,0,g.a,[u.j,w.a,u.E,b.a],{viewDate:[0,"viewDate"],events:[1,"events"]},null),(l()(),u.gc(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,1,0,e.viewDate,e.events)},null)}function x(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,2,"mwl-calendar-day-view",[],null,null,null,h.b,h.a)),u.Lb(1,770048,null,0,d.a,[u.j,w.a,u.E,b.a],{viewDate:[0,"viewDate"],events:[1,"events"]},null),(l()(),u.gc(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,1,0,e.viewDate,e.events)},null)}function S(l){return u.ic(2,[u.ac(0,m.a,[D.a,u.E]),(l()(),u.Mb(1,0,null,null,2,"mwl-demo-utils-calendar-header",[],null,[[null,"viewChange"],[null,"viewDateChange"]],function(l,n,e){var u=!0,a=l.component;"viewChange"===n&&(u=!1!==(a.view=e)&&u);"viewDateChange"===n&&(u=!1!==(a.viewDate=e)&&u);return u},p.b,p.a)),u.Lb(2,49152,null,0,C.a,[],{view:[0,"view"],viewDate:[1,"viewDate"]},{viewChange:"viewChange",viewDateChange:"viewDateChange"}),(l()(),u.gc(-1,null,["\n"])),(l()(),u.gc(-1,null,["\n\n"])),(l()(),u.Mb(5,0,null,null,4,"div",[["class","alert alert-info"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n  For details on how to customise any of the templates, please see\n  "])),(l()(),u.Mb(7,0,null,null,1,"a",[["href","https://github.com/mattlewis92/angular-calendar#how-do-i-use-a-custom-template"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["this guide"])),(l()(),u.gc(-1,null,["\n"])),(l()(),u.gc(-1,null,["\n\n"])),(l()(),u.Bb(0,[["customCellTemplate",2]],null,0,null,k)),(l()(),u.gc(-1,null,["\n\n"])),(l()(),u.Mb(13,0,null,null,11,"div",[],null,null,null,null,null)),u.Lb(14,16384,null,0,o.r,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),u.gc(-1,null,["\n  "])),(l()(),u.Bb(16777216,null,null,1,null,W)),u.Lb(17,278528,null,0,o.s,[u.gb,u.bb,o.r],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.gc(-1,null,["\n  "])),(l()(),u.Bb(16777216,null,null,1,null,L)),u.Lb(20,278528,null,0,o.s,[u.gb,u.bb,o.r],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.gc(-1,null,["\n  "])),(l()(),u.Bb(16777216,null,null,1,null,x)),u.Lb(23,278528,null,0,o.s,[u.gb,u.bb,o.r],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),u.gc(-1,null,["\n"])),(l()(),u.gc(-1,null,["\n"]))],function(l,n){var e=n.component;l(n,2,0,e.view,e.viewDate),l(n,14,0,e.view);l(n,17,0,"month");l(n,20,0,"week");l(n,23,0,"day")},null)}var V=u.Ib("mwl-demo-component",f,function(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,1,"mwl-demo-component",[],null,null,null,S,M)),u.Lb(1,49152,null,0,f,[],null,null)],null,null)},{},{},[]),Y=e("s7LF"),j=e("LjNj"),T=e("hYcs"),B=e("QBGs"),E=e("4uqC"),I=e("yotz"),J=e("cyy6"),N=e("SNsX"),G=e("Nrjh"),P=e("dBcC"),F=e("iInd");e.d(n,"DemoModuleNgFactory",function(){return q});var q=u.Jb(t,[],function(l){return u.Vb([u.Wb(512,u.m,u.tb,[[8,[c.a,i.a,V]],[3,u.m],u.I]),u.Wb(4608,o.p,o.o,[u.E,[2,o.M]]),u.Wb(4608,Y.k,Y.k,[]),u.Wb(5120,b.a,a,[]),u.Wb(4608,j.a,j.a,[]),u.Wb(4608,D.a,D.a,[b.a]),u.Wb(4608,w.a,w.a,[b.a]),u.Wb(1073742336,o.c,o.c,[]),u.Wb(1073742336,T.a,T.a,[]),u.Wb(1073742336,B.a,B.a,[]),u.Wb(1073742336,E.a,E.a,[]),u.Wb(1073742336,I.b,I.b,[]),u.Wb(1073742336,J.a,J.a,[]),u.Wb(1073742336,N.a,N.a,[]),u.Wb(1073742336,G.a,G.a,[]),u.Wb(1073742336,Y.j,Y.j,[]),u.Wb(1073742336,Y.c,Y.c,[]),u.Wb(1073742336,P.a,P.a,[]),u.Wb(1073742336,F.o,F.o,[[2,F.t],[2,F.m]]),u.Wb(1073742336,t,t,[]),u.Wb(1024,F.k,function(){return[[{path:"",component:f}]]},[])])})},dBcC:function(l,n,e){"use strict";e.d(n,"a",function(){return u});class u{}},rIZ9:function(l,n,e){"use strict";e.d(n,"a",function(){return w}),e.d(n,"b",function(){return b});var u=e("8Y7J"),a=e("5dod"),t=e("9thp"),c=e("5qES"),i=e("/om3"),o=e("Pn2z"),v=e("SSGA"),r=e("Vpa8"),w=u.Kb({encapsulation:2,styles:[],data:{}});function b(l){return u.ic(0,[u.ac(0,a.a,[t.a,u.E]),(l()(),u.gc(-1,null,["\n    "])),(l()(),u.Mb(2,0,null,null,41,"div",[["class","row text-center"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.Mb(4,0,null,null,16,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n        "])),(l()(),u.Mb(6,0,null,null,13,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(8,0,null,null,2,"div",[["class","btn btn-primary"],["mwlCalendarPreviousView",""]],null,[[null,"viewDateChange"],[null,"click"]],function(l,n,e){var a=!0,t=l.component;"click"===n&&(a=!1!==u.Yb(l,9).onClick()&&a);"viewDateChange"===n&&(a=!1!==(t.viewDate=e)&&a);"viewDateChange"===n&&(a=!1!==t.viewDateChange.next(t.viewDate)&&a);return a},null,null)),u.Lb(9,16384,null,0,c.a,[i.a],{view:[0,"view"],viewDate:[1,"viewDate"]},{viewDateChange:"viewDateChange"}),(l()(),u.gc(-1,null,["\n            Previous\n          "])),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(12,0,null,null,2,"div",[["class","btn btn-outline-secondary"],["mwlCalendarToday",""]],null,[[null,"viewDateChange"],[null,"click"]],function(l,n,e){var a=!0,t=l.component;"click"===n&&(a=!1!==u.Yb(l,13).onClick()&&a);"viewDateChange"===n&&(a=!1!==(t.viewDate=e)&&a);"viewDateChange"===n&&(a=!1!==t.viewDateChange.next(t.viewDate)&&a);return a},null,null)),u.Lb(13,16384,null,0,o.a,[i.a],{viewDate:[0,"viewDate"]},{viewDateChange:"viewDateChange"}),(l()(),u.gc(-1,null,["\n            Today\n          "])),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(16,0,null,null,2,"div",[["class","btn btn-primary"],["mwlCalendarNextView",""]],null,[[null,"viewDateChange"],[null,"click"]],function(l,n,e){var a=!0,t=l.component;"click"===n&&(a=!1!==u.Yb(l,17).onClick()&&a);"viewDateChange"===n&&(a=!1!==(t.viewDate=e)&&a);"viewDateChange"===n&&(a=!1!==t.viewDateChange.next(t.viewDate)&&a);return a},null,null)),u.Lb(17,16384,null,0,v.a,[i.a],{view:[0,"view"],viewDate:[1,"viewDate"]},{viewDateChange:"viewDateChange"}),(l()(),u.gc(-1,null,["\n            Next\n          "])),(l()(),u.gc(-1,null,["\n        "])),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.Mb(22,0,null,null,5,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n        "])),(l()(),u.Mb(24,0,null,null,2,"h3",[],null,null,null,null,null)),(l()(),u.gc(25,null,["",""])),u.cc(26,3),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.Mb(29,0,null,null,13,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n        "])),(l()(),u.Mb(31,0,null,null,10,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(33,0,null,null,1,"div",[["class","btn btn-primary"]],[[2,"active",null]],[[null,"click"]],function(l,n,e){var u=!0,a=l.component;"click"===n&&(u=!1!==a.viewChange.emit("month")&&u);return u},null,null)),(l()(),u.gc(-1,null,["\n            Month\n          "])),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(36,0,null,null,1,"div",[["class","btn btn-primary"]],[[2,"active",null]],[[null,"click"]],function(l,n,e){var u=!0,a=l.component;"click"===n&&(u=!1!==a.viewChange.emit("week")&&u);return u},null,null)),(l()(),u.gc(-1,null,["\n            Week\n          "])),(l()(),u.gc(-1,null,["\n          "])),(l()(),u.Mb(39,0,null,null,1,"div",[["class","btn btn-primary"]],[[2,"active",null]],[[null,"click"]],function(l,n,e){var u=!0,a=l.component;"click"===n&&(u=!1!==a.viewChange.emit("day")&&u);return u},null,null)),(l()(),u.gc(-1,null,["\n            Day\n          "])),(l()(),u.gc(-1,null,["\n        "])),(l()(),u.gc(-1,null,["\n      "])),(l()(),u.gc(-1,null,["\n    "])),(l()(),u.gc(-1,null,["\n    "])),(l()(),u.Mb(45,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.gc(-1,null,["\n  "]))],function(l,n){var e=n.component;l(n,9,0,e.view,e.viewDate),l(n,13,0,e.viewDate),l(n,17,0,e.view,e.viewDate)},function(l,n){var e=n.component,a=u.hc(n,25,0,l(n,26,0,u.Yb(n,0),e.viewDate,e.view+"ViewTitle",e.locale));l(n,25,0,a),l(n,33,0,"month"===e.view),l(n,36,0,"week"===e.view),l(n,39,0,"day"===e.view)})}u.Ib("mwl-demo-utils-calendar-header",r.a,function(l){return u.ic(0,[(l()(),u.Mb(0,0,null,null,1,"mwl-demo-utils-calendar-header",[],null,null,null,b,w)),u.Lb(1,49152,null,0,r.a,[],null,null)],null,null)},{view:"view",viewDate:"viewDate",locale:"locale"},{viewChange:"viewChange",viewDateChange:"viewDateChange"},[])}}]);