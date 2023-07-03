import{d as F,l as q,a as z,b as a,e as _,f as c,w as r,m as S,h as v,k as H,n as V,i as m,_ as N,C as M,r as $,u as L,F as U,g as j,p as d,q as E,t as A,o as D,s as G,c as W,j as X,E as Y}from"./index-4e6d09f3.js";import{T as J}from"./topic-3eca521c.js";const K={class:"actions"},Z=F({__name:"actions",props:{isTestFinished:{type:Boolean,default:!1,required:!0}},emits:["handleSubmit","handleRestart"],setup(I,{emit:p}){const g=q(I,"isTestFinished"),f=z();function y(u){f.updateDialogStatus(u)}return(u,t)=>{const b=m("el-button");return a(),_("div",K,[c(b,{type:"warning",onClick:t[0]||(t[0]=T=>y(!0))},{default:r(()=>[S(" Back ")]),_:1}),c(b,{type:"primary",disabled:v(g),onClick:t[1]||(t[1]=T=>u.$emit("handleSubmit"))},{default:r(()=>[S(" Submit ")]),_:1},8,["disabled"]),v(g)?(a(),H(b,{key:0,type:"success",onClick:t[2]||(t[2]=T=>u.$emit("handleRestart"))},{default:r(()=>[S(" Restart ")]),_:1})):V("",!0)])}}});const Q=N(Z,[["__scopeId","data-v-6ac3059c"]]),ee={class:"fillInTheBlank"},te=["onClick"],se={class:"card-header--text"},oe={class:"card-header--icon"},ne={key:0,class:"errMsg"},ae={key:1,class:"answer"},ce={class:"correctAnswer"},le=F({__name:"fillInTheBlank",props:{topicArr:{type:Array,required:!0}},emits:["emitResult","restart"],setup(I,{emit:p}){const g=q(I,"topicArr"),f=M.INPUT_MAX_LENGTH,y=$(!1),u=new SpeechSynthesisUtterance,t=$({}),b=e=>{u.text=d.replaceUnderscoreWithSpace(e),speechSynthesis.speak(u)},T=L(),x=()=>{const e=g.value.length;let s=0;for(let h in t.value)if(t.value.hasOwnProperty(h)){const k=t.value[h];typeof k=="string"&&l(k,h)&&s++}const o=d.calculateExamResults(e,s);y.value=!0,p("emitResult",o)},w=e=>{const s=`input-${e}`,o=document.getElementById(s);o&&o.focus()},O=()=>{d.openFullScreenLoading(),p("restart"),T.updateExamStart(!0),y.value=!1,t.value={},d.scrollToTop()},l=(e,s)=>{const o=d.removeAllSpaces(e),h=d.removeUnderscoreAndNormalize(s);return o===h};return(e,s)=>{const o=m("el-text"),h=m("VideoPlay"),k=m("el-icon"),i=m("el-input"),C=m("el-card");return a(),_("div",ee,[(a(!0),_(U,null,j(v(g),(n,P)=>(a(),_("div",{key:n.key,class:"question"},[c(C,{class:"box-card",width:"99.9%",shadow:"hover"},{header:r(()=>[E("div",{class:"card-header",onClick:B=>w(n.key)},[E("div",se,[c(o,{tag:"b"},{default:r(()=>[S(A(P+1)+" . "+A(n.value),1)]),_:2},1024)]),E("div",oe,[c(k,{onClick:B=>b(n.key)},{default:r(()=>[c(h)]),_:2},1032,["onClick"])])],8,te)]),default:r(()=>[c(i,{id:`input-${n.key}`,modelValue:t.value[n.key],"onUpdate:modelValue":B=>t.value[n.key]=B,modelModifiers:{trim:!0},placeholder:"Please input",class:"input-with-select",clearable:"",autofocus:"",disabled:y.value,maxlength:v(f)},null,8,["id","modelValue","onUpdate:modelValue","disabled","maxlength"]),t.value[n.key]&&t.value[n.key].length>=v(f)?(a(),_("div",ne,[c(o,{type:"danger"},{default:r(()=>[S("The input text length cannot exceed "+A(v(f))+" characters.",1)]),_:1})])):V("",!0),!l(t.value[n.key],n.key)&&y.value?(a(),_("div",ae,[S(" Answer : "),E("span",ce,A(v(d).replaceUnderscoreWithSpace(n.key)),1)])):V("",!0)]),_:2},1024)]))),128)),c(Q,{isTestFinished:y.value,onHandleSubmit:x,onHandleRestart:O},null,8,["isTestFinished"])])}}});const re=N(le,[["__scopeId","data-v-e021036d"]]),ue={class:"choice"},ie={class:"card-header"},de={class:"card-header--text"},_e={class:"choiceItems"},pe=F({__name:"choice",props:{topicArr:{type:Array,required:!0}},emits:["emitResult","restart"],setup(I,{emit:p}){const R=I,g=$([]),f=q(R,"topicArr").value,y=()=>{const l=f.map(e=>e.key);for(let e=0;e<f.length;e++){let s=[];for(s.push(f[e].key);s.length<M.CHOICE_OPTIONS_LENGTH;){const k=Math.floor(Math.random()*l.length),i=l[k];s.includes(i)||s.push(i)}const o={};s.forEach((k,i)=>{o[`item${i+1}`]=k});const h={[f[e].value]:d.shuffleObjectProperties(o)};g.value.push(h)}},u=$({}),t=$(!1),b=L(),T=()=>{const l=g.value.length;let e=0;for(const o in x)x.hasOwnProperty(o)&&u.value.hasOwnProperty(o)&&u.value[o].toString()===d.replaceUnderscoreWithSpace(x[o])&&e++;const s=d.calculateExamResults(l,e);t.value=!0,p("emitResult",s)},x={};f.forEach(l=>{x[l.value]=l.key});const w=(l,e,s)=>(l&&l.toString()!==d.replaceUnderscoreWithSpace(s)||!l)&&x[e]===s,O=()=>{d.openFullScreenLoading(),p("restart"),b.updateExamStart(!0),t.value=!1,u.value={},d.scrollToTop()};return D(()=>{y()}),(l,e)=>{const s=m("el-text"),o=m("el-radio"),h=m("el-radio-group"),k=m("el-card");return a(),_("div",ue,[(a(!0),_(U,null,j(g.value,(i,C)=>(a(),_("div",{key:C,class:"question"},[c(k,{class:"box-card",width:"99.9%",shadow:"hover"},{header:r(()=>[E("div",ie,[E("div",de,[c(s,{tag:"b"},{default:r(()=>[S(A(C+1)+" . "+A(Object.keys(i)[0]),1)]),_:2},1024)])])]),default:r(()=>[E("div",_e,[c(h,{modelValue:u.value[Object.keys(i)[0]],"onUpdate:modelValue":n=>u.value[Object.keys(i)[0]]=n},{default:r(()=>[(a(!0),_(U,null,j(i[Object.keys(i)[0]],(n,P)=>(a(),H(o,{key:P,label:v(d).replaceUnderscoreWithSpace(n),disabled:t.value,border:t.value&&w(u.value[Object.keys(i)[0]],Object.keys(i)[0],n),name:"type"},null,8,["label","disabled","border"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]))),128)),c(Q,{isTestFinished:t.value,onHandleSubmit:T,onHandleRestart:O},null,8,["isTestFinished"])])}}});const he=N(pe,[["__scopeId","data-v-10a1760b"]]),ve={class:"pageExam"},me={key:0},fe={key:0,class:"score"},ye={class:"card-header"},ke={key:1},ge={key:2},be=F({__name:"pageExam",setup(I){const p=L(),R=p.selectedTopic,g=p.selectedQuestionType,f=p.selectedQuestionCount,y=J[R],u=X();let t=G([]);D(()=>{y===void 0?(p.updateExamStart(!1),u.push("/train-Eng")):b()});const b=()=>{t=Object.keys(y).map(e=>({key:e,value:y[e]})),t=d.getRandomItemsFromArray(t,f),p.updateDataIsReady(!0)},T=W(()=>p.isExamStart),x=W(()=>p.dataIsReady),w=$([]),O=e=>{p.updateExamStart(!1);for(let s in e)e.hasOwnProperty(s)&&w.value.push({title:s,count:e[s]});d.scrollToTop(),Y({title:"Success",message:"Exam is over",type:"success",showClose:!1})},l=()=>{w.value=[]};return(e,s)=>{const o=m("el-text"),h=m("el-card"),k=m("el-col"),i=m("el-row");return a(),_("div",ve,[v(x)?(a(),_("div",me,[v(T)?V("",!0):(a(),_("div",fe,[c(i,{gutter:4},{default:r(()=>[(a(!0),_(U,null,j(w.value,(C,n)=>(a(),H(k,{key:n,md:4,lg:4,xl:4,xs:8,sm:8},{default:r(()=>[c(h,{class:"box-card"},{header:r(()=>[E("div",ye,[c(o,{tag:"b"},{default:r(()=>[S(A(C.title),1)]),_:2},1024)])]),default:r(()=>[c(o,{size:"large"},{default:r(()=>[S(A(C.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])),v(g)===v(M).QUESTION_TYPE.CHOICE_QUESTION?(a(),_("div",ke,[c(he,{topicArr:v(t),onRestart:l,onEmitResult:O},null,8,["topicArr"])])):(a(),_("div",ge,[c(re,{topicArr:v(t),onRestart:l,onEmitResult:O},null,8,["topicArr"])]))])):V("",!0)])}}});const Te=N(be,[["__scopeId","data-v-22f1619f"]]);export{Te as default};