import{d as I,u as R,a as $,c as B,o as l,b as k,w as e,e as U,f as t,g as h,h as g,i as W,r as n,j as F,k as S,C as x,l as X,m as d,F as b,n as E,t as Z,_ as ee}from"./index-a5e7d1aa.js";import{T as te}from"./topic-fbb8b7b5.js";const oe=["2023/05/23"],ne=U("span",null,"Are you sure you want to leave this page ?",-1),se={class:"dialog-footer"},le=I({__name:"backToExamListDialog",setup(L){const N=F(),v=R(),_=$(),i=B(()=>_.dialogVisible),u=T=>{_.updateDialogStatus(T)},y=()=>{u(!1),v.updateDataIsReady(!1),v.updateExamStart(!1),N.push("/train-Eng")};return(T,a)=>{const p=n("el-button"),m=n("el-dialog");return l(),k(m,{modelValue:g(i),"onUpdate:modelValue":a[2]||(a[2]=r=>W(i)?i.value=r:null),title:"Tips",width:"fit-content",center:"","close-on-click-modal":"","close-on-press-escape":"","show-close":!1,"align-center":"","destroy-on-close":""},{footer:e(()=>[U("span",se,[t(p,{onClick:a[0]||(a[0]=r=>u(!1))},{default:e(()=>[h("Cancel")]),_:1}),t(p,{type:"primary",onClick:a[1]||(a[1]=r=>y())},{default:e(()=>[h(" Back ")]),_:1})])]),default:e(()=>[ne]),_:1},8,["modelValue"])}}}),ae={class:"mainPage"},ue={key:0,class:"date"},re={key:1,class:"skeleton"},ce=I({__name:"index",setup(L){const v=[...Object.keys(te)].sort(),_=x.QUESTION_COUNT,i=x.QUESTION_TYPE,u=R(),y=$(),T=F(),a=B(()=>y.settings.isOpenDotForNewTopic),p=S(!1);setTimeout(()=>{p.value=!0},x.RENDER_SEC);const m=S(_.TEN),r=S(i.BLANK_FILLING_QUESTION),P=c=>{u.updateExamStart(!0),u.updateTopic(c),T.push("/train-Eng/pageExam")},V=()=>{u.updateQuestionCount(m.value)},Q=()=>{u.updateQuestionType(r.value)},j=oe.reduce((c,s,C)=>(c[s]=C+1,c),{}),A=c=>!!j[c];return X(()=>{V(),Q()}),(c,s)=>{const C=n("el-option"),G=n("el-select"),w=n("el-form-item"),K=n("el-radio"),M=n("el-radio-group"),Y=n("el-form"),O=n("el-col"),D=n("el-row"),q=n("el-skeleton-item"),z=n("el-skeleton"),H=n("el-card"),J=n("el-badge");return l(),d("div",ae,[t(D,{gutter:12},{default:e(()=>[t(O,{span:24},{default:e(()=>[t(Y,{inline:!0},{default:e(()=>[t(w,{label:"Question Count : "},{default:e(()=>[t(G,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=o=>m.value=o),onChange:s[1]||(s[1]=o=>V())},{default:e(()=>[(l(!0),d(b,null,E(g(_),(o,f)=>(l(),k(C,{label:o,value:o,key:f},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(w,{label:"Question Type : "},{default:e(()=>[t(M,{modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=o=>r.value=o),onChange:s[3]||(s[3]=o=>Q())},{default:e(()=>[(l(!0),d(b,null,E(g(i),(o,f)=>(l(),k(K,{label:o,key:f},null,8,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(D,{gutter:12},{default:e(()=>[(l(!0),d(b,null,E(g(v),(o,f)=>(l(),k(O,{span:6,xs:12,sm:12,md:6,lg:6,xl:6,key:f,style:{"margin-top":"5px"}},{default:e(()=>[t(J,{value:"new",class:"item","is-dot":"",hidden:A(o)||!g(a)},{default:e(()=>[t(H,{shadow:"hover",onClick:ie=>P(o)},{default:e(()=>[p.value?(l(),d("div",ue,Z(o),1)):(l(),d("div",re,[t(z,{animated:""},{template:e(()=>[t(q,{variant:"h3",style:{width:"50%"}})]),_:1})]))]),_:2},1032,["onClick"])]),_:2},1032,["hidden"])]),_:2},1024))),128))]),_:1}),t(le)])}}});const pe=ee(ce,[["__scopeId","data-v-4d37823e"]]);export{pe as default};
