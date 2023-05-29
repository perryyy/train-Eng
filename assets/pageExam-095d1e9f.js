import{d as R,u as q,a as D,c as Q,b as d,i as L,w as c,j as S,l as J,g as p,m as k,f as l,n as x,k as H,r as V,e as y,F as P,h as B,E as G,t as I,p as M,_ as F,o as Y,q as K}from"./index-d351734c.js";import{T as Z}from"./topic-fbb8b7b5.js";import{C as U}from"./const-3a5f763a.js";const ee=(h,o)=>{const s=[],a=[...h];for(;s.length<o&&a.length>0;){const r=Math.floor(Math.random()*a.length);s.push(a[r]),a.splice(r,1)}return s};function te(h){const o=Object.keys(h),s=oe(o),a={};for(let r=0;r<s.length;r++){const _=s[r];a[_]=h[_]}return a}function oe(h){const o=[...h];for(let s=o.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[o[s],o[a]]=[o[a],o[s]]}return o}function se(h,o){if(h.length!==o.length)return!1;for(let s=0;s<h.length;s++)if(h[s]!==o[s])return!1;return!0}const z={getRandomItemsFromArray:ee,shuffleObjectProperties:te,isObjectsEqual:se},ne=k("span",null,"Are you sure you want to leave this page ?",-1),ae={class:"dialog-footer"},W=R({__name:"backToExamListDialog",setup(h){const o=H(),s=q(),a=D(),r=Q(()=>a.dialogVisible),_=u=>{a.isChangeDialogStatus(u)},E=()=>{_(!1),s.updateExamStart(!1),o.push("/train-Eng")};return(u,f)=>{const O=p("el-button"),C=p("el-dialog");return d(),L(C,{modelValue:S(r),"onUpdate:modelValue":f[2]||(f[2]=w=>J(r)?r.value=w:null),title:"Tips",width:"fit-content",center:"","close-on-click-modal":"","close-on-press-escape":"","show-close":!1,"align-center":"","destroy-on-close":""},{footer:c(()=>[k("span",ae,[l(O,{onClick:f[0]||(f[0]=w=>_(!1))},{default:c(()=>[x("Cancel")]),_:1}),l(O,{type:"primary",onClick:f[1]||(f[1]=w=>E())},{default:c(()=>[x(" Back ")]),_:1})])]),default:c(()=>[ne]),_:1},8,["modelValue"])}}}),le={class:"fillInTheBlank"},ce=["onClick"],re={class:"card-header--text"},ue={class:"card-header--icon"},ie={key:0,class:"errMsg"},de={key:1,class:"answer"},_e={class:"correctAnswer"},pe={class:"actions"},he=R({__name:"fillInTheBlank",props:{topicArr:{type:Array,required:!0}},emits:["emitResult"],setup(h,{emit:o}){const a=h.topicArr,r=U.INPUT_MAX_LENGTH,_=V(!1),E=new SpeechSynthesisUtterance,u=V({}),f=i=>{E.text=i,speechSynthesis.speak(E)},O=q(),C=()=>{const i=a.length;let e=0,t=10;for(let g in u.value)u.value.hasOwnProperty(g)&&u.value[g].toLowerCase()===g.toLowerCase()&&e++;t=i-e,_.value=!0,O.updateExamStart(!1),o("emitResult",{"Total Count":i,Correct:e,Incorrect:t}),G({title:"Success",message:"Exam is over",type:"success",showClose:!1})},w=D(),j=i=>{w.isChangeDialogStatus(i)},T=i=>{const e=`input-${i}`,t=document.getElementById(e);t&&t.focus()};return(i,e)=>{const t=p("el-text"),m=p("VideoPlay"),g=p("el-icon"),v=p("el-input"),b=p("el-card"),$=p("el-button");return d(),y("div",le,[(d(!0),y(P,null,B(S(a),(n,N)=>(d(),y("div",{key:n.key,class:"question"},[l(b,{class:"box-card",width:"99.9%",shadow:"hover"},{header:c(()=>[k("div",{class:"card-header",onClick:A=>T(n.key)},[k("div",re,[l(t,{tag:"b"},{default:c(()=>[x(I(N+1)+" . "+I(n.value),1)]),_:2},1024)]),k("div",ue,[l(g,{onClick:A=>f(n.key)},{default:c(()=>[l(m)]),_:2},1032,["onClick"])])],8,ce)]),default:c(()=>[l(v,{id:`input-${n.key}`,modelValue:u.value[n.key],"onUpdate:modelValue":A=>u.value[n.key]=A,modelModifiers:{trim:!0},placeholder:"Please input",class:"input-with-select",clearable:"",autofocus:"",disabled:_.value,maxlength:S(r)},null,8,["id","modelValue","onUpdate:modelValue","disabled","maxlength"]),u.value[n.key]&&u.value[n.key].length>=S(r)?(d(),y("div",ie,[l(t,{type:"danger"},{default:c(()=>[x("The input text length cannot exceed "+I(S(r))+" characters.",1)]),_:1})])):M("",!0),u.value[n.key]!==n.key&&_.value?(d(),y("div",de,[x(" Answer : "),k("span",_e,I(n.key),1)])):M("",!0)]),_:2},1024)]))),128)),k("div",pe,[l($,{type:"warning",onClick:e[0]||(e[0]=n=>j(!0))},{default:c(()=>[x(" Back ")]),_:1}),l($,{type:"primary",disabled:_.value,onClick:e[1]||(e[1]=n=>C())},{default:c(()=>[x(" Submit ")]),_:1},8,["disabled"])]),l(W)])}}});const fe=F(he,[["__scopeId","data-v-907bd5fe"]]),me={class:"choice"},ve={class:"card-header"},ye={class:"card-header--text"},ge={class:"choiceItems"},be={class:"actions"},ke=R({__name:"choice",props:{topicArr:{type:Array,required:!0}},emits:["emitResult"],setup(h,{emit:o}){const s=h,a=V([]),r=s.topicArr,_=r.map(e=>e.key),E=()=>{for(let e=0;e<r.length;e++){let t=[];for(t.push(r[e].key);t.length<U.CHOICE_OPTIONS_LENGTH;){const v=Math.floor(Math.random()*_.length),b=_[v];t.includes(b)||t.push(b)}const m={};t.forEach((v,b)=>{m[`item${b+1}`]=v});const g={[r[e].value]:z.shuffleObjectProperties(m)};a.value.push(g)}},u=V({}),f=D(),O=e=>{f.isChangeDialogStatus(e)},C=V(!1),w=q(),j=()=>{const e=a.value.length;let t=0,m=10;for(const v in T)T.hasOwnProperty(v)&&u.value.hasOwnProperty(v)&&u.value[v].toString()===T[v]&&t++;m=e-t,C.value=!0,w.updateExamStart(!1),o("emitResult",{"Total Count":e,Correct:t,Incorrect:m}),G({title:"Success",message:"Exam is over",type:"success",showClose:!1})},T={};r.forEach(e=>{T[e.value]=e.key});const i=(e,t,m)=>(e&&!e.includes(m)||!e)&&T[t]===m;return Y(()=>{E()}),(e,t)=>{const m=p("el-text"),g=p("el-radio"),v=p("el-radio-group"),b=p("el-card"),$=p("el-button");return d(),y("div",me,[(d(!0),y(P,null,B(a.value,(n,N)=>(d(),y("div",{key:N,class:"question"},[l(b,{class:"box-card",width:"99.9%",shadow:"hover"},{header:c(()=>[k("div",ve,[k("div",ye,[l(m,{tag:"b"},{default:c(()=>[x(I(N+1)+" . "+I(Object.keys(n)[0]),1)]),_:2},1024)])])]),default:c(()=>[k("div",ge,[l(v,{modelValue:u.value[Object.keys(n)[0]],"onUpdate:modelValue":A=>u.value[Object.keys(n)[0]]=A},{default:c(()=>[(d(!0),y(P,null,B(n[Object.keys(n)[0]],(A,X)=>(d(),L(g,{key:X,label:A,disabled:C.value,border:C.value&&i(u.value[Object.keys(n)[0]],Object.keys(n)[0],A),name:"type"},null,8,["label","disabled","border"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),_:2},1024)]))),128)),k("div",be,[l($,{type:"warning",onClick:t[0]||(t[0]=n=>O(!0))},{default:c(()=>[x(" Back ")]),_:1}),l($,{type:"primary",disabled:C.value,onClick:t[1]||(t[1]=n=>j())},{default:c(()=>[x(" Submit ")]),_:1},8,["disabled"])]),l(W)])}}});const xe=F(ke,[["__scopeId","data-v-dc7b5b06"]]),Ce={class:"pageExam"},we={key:0},Se={key:0,class:"score"},Te={class:"card-header"},Ee={key:1},Oe={key:2},Ae=R({__name:"pageExam",setup(h){const o=q(),s=o.selectedTopic,a=o.selectedQuestionType,r=o.selectedQuestionCount,_=Z[s],E=H(),u=V(!1);let f=K([]);Y(()=>{_===void 0?(o.updateExamStart(!1),E.push("/train-Eng")):O()});const O=()=>{f=Object.keys(_).map(i=>({key:i,value:_[i]})),f=z.getRandomItemsFromArray(f,r),U.QUESTION_TYPE.CHOICE_QUESTION,u.value=!0},C=Q(()=>o.isExamStart),w=V([]),j=i=>{for(let e in i)i.hasOwnProperty(e)&&w.value.push({title:e,count:i[e]});T()},T=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(i,e)=>{const t=p("el-text"),m=p("el-card"),g=p("el-col"),v=p("el-row");return d(),y("div",Ce,[u.value?(d(),y("div",we,[S(C)?M("",!0):(d(),y("div",Se,[l(v,{gutter:4},{default:c(()=>[(d(!0),y(P,null,B(w.value,(b,$)=>(d(),L(g,{key:$,md:4,lg:4,xl:4,xs:8,sm:8},{default:c(()=>[l(m,{class:"box-card"},{header:c(()=>[k("div",Te,[l(t,{tag:"b"},{default:c(()=>[x(I(b.title),1)]),_:2},1024)])]),default:c(()=>[l(t,{size:"large"},{default:c(()=>[x(I(b.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])),S(a)===S(U).QUESTION_TYPE.CHOICE_QUESTION?(d(),y("div",Ee,[l(xe,{topicArr:S(f),onEmitResult:j},null,8,["topicArr"])])):(d(),y("div",Oe,[l(fe,{topicArr:S(f),onEmitResult:j},null,8,["topicArr"])]))])):M("",!0)])}}});const je=F(Ae,[["__scopeId","data-v-cbbc3416"]]);export{je as default};
