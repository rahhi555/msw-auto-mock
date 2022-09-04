"use strict";var Wr=Object.create;var W=Object.defineProperty;var zr=Object.getOwnPropertyDescriptor;var $r=Object.getOwnPropertyNames;var _r=Object.getPrototypeOf,Gr=Object.prototype.hasOwnProperty;var Fr=(e,r)=>()=>(e&&(r=e(e=0)),r);var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Zr=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of $r(r))!Gr.call(e,s)&&s!==t&&W(e,s,{get:()=>r[s],enumerable:!(i=zr(r,s))||i.enumerable});return e};var z=(e,r,t)=>(t=e!=null?Wr(_r(e)):{},Zr(r||!e||!e.__esModule?W(t,"default",{value:e,enumerable:!0}):t,e));var n=Fr(()=>{});var $=a(f=>{"use strict";n();f.__esModule=!0;f.OpenAPIV2=f.OpenAPIV3=void 0;var Hr;(function(e){var r;(function(t){t.GET="get",t.PUT="put",t.POST="post",t.DELETE="delete",t.OPTIONS="options",t.HEAD="head",t.PATCH="patch",t.TRACE="trace"})(r=e.HttpMethods||(e.HttpMethods={}))})(Hr=f.OpenAPIV3||(f.OpenAPIV3={}));var Jr;(function(e){var r;(function(t){t.GET="get",t.PUT="put",t.POST="post",t.DELETE="delete",t.OPTIONS="options",t.HEAD="head",t.PATCH="patch"})(r=e.HttpMethods||(e.HttpMethods={}))})(Jr=f.OpenAPIV2||(f.OpenAPIV2={}))});var F=a((ki,G)=>{n();var Br=typeof global=="object"&&global&&global.Object===Object&&global;G.exports=Br});var H=a((qi,Z)=>{n();var Kr=F(),Qr=typeof self=="object"&&self&&self.Object===Object&&self,et=Kr||Qr||Function("return this")();Z.exports=et});var A=a((Ii,J)=>{n();var rt=H(),tt=rt.Symbol;J.exports=tt});var X=a((Ei,Y)=>{n();function nt(e,r){for(var t=-1,i=e==null?0:e.length,s=Array(i);++t<i;)s[t]=r(e[t],t,e);return s}Y.exports=nt});var K=a((Ui,B)=>{n();var it=Array.isArray;B.exports=it});var te=a((Vi,re)=>{n();var Q=A(),ee=Object.prototype,st=ee.hasOwnProperty,ot=ee.toString,g=Q?Q.toStringTag:void 0;function ut(e){var r=st.call(e,g),t=e[g];try{e[g]=void 0;var i=!0}catch{}var s=ot.call(e);return i&&(r?e[g]=t:delete e[g]),s}re.exports=ut});var ie=a((Li,ne)=>{n();var at=Object.prototype,ct=at.toString;function pt(e){return ct.call(e)}ne.exports=pt});var ae=a((Di,ue)=>{n();var se=A(),ft=te(),lt=ie(),dt="[object Null]",mt="[object Undefined]",oe=se?se.toStringTag:void 0;function bt(e){return e==null?e===void 0?mt:dt:oe&&oe in Object(e)?ft(e):lt(e)}ue.exports=bt});var pe=a((Ni,ce)=>{n();function xt(e){return e!=null&&typeof e=="object"}ce.exports=xt});var le=a((Mi,fe)=>{n();var gt=ae(),Ot=pe(),ht="[object Symbol]";function At(e){return typeof e=="symbol"||Ot(e)&&gt(e)==ht}fe.exports=At});var Oe=a((Wi,ge)=>{n();var de=A(),vt=X(),yt=K(),wt=le(),jt=1/0,me=de?de.prototype:void 0,be=me?me.toString:void 0;function xe(e){if(typeof e=="string")return e;if(yt(e))return vt(e,xe)+"";if(wt(e))return be?be.call(e):"";var r=e+"";return r=="0"&&1/e==-jt?"-0":r}ge.exports=xe});var O=a((zi,he)=>{n();var Rt=Oe();function St(e){return e==null?"":Rt(e)}he.exports=St});var ve=a(($i,Ae)=>{n();function Tt(e,r,t){var i=-1,s=e.length;r<0&&(r=-r>s?0:s+r),t=t>s?s:t,t<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var p=Array(s);++i<s;)p[i]=e[i+r];return p}Ae.exports=Tt});var we=a((_i,ye)=>{n();var Pt=ve();function Ct(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Pt(e,r,t)}ye.exports=Ct});var S=a((Gi,je)=>{n();var kt="\\ud800-\\udfff",qt="\\u0300-\\u036f",It="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",Ut=qt+It+Et,Vt="\\ufe0e\\ufe0f",Lt="\\u200d",Dt=RegExp("["+Lt+kt+Ut+Vt+"]");function Nt(e){return Dt.test(e)}je.exports=Nt});var Se=a((Fi,Re)=>{n();function Mt(e){return e.split("")}Re.exports=Mt});var Ue=a((Zi,Ee)=>{n();var Te="\\ud800-\\udfff",Wt="\\u0300-\\u036f",zt="\\ufe20-\\ufe2f",$t="\\u20d0-\\u20ff",_t=Wt+zt+$t,Gt="\\ufe0e\\ufe0f",Ft="["+Te+"]",T="["+_t+"]",P="\\ud83c[\\udffb-\\udfff]",Zt="(?:"+T+"|"+P+")",Pe="[^"+Te+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",Ht="\\u200d",qe=Zt+"?",Ie="["+Gt+"]?",Jt="(?:"+Ht+"(?:"+[Pe,Ce,ke].join("|")+")"+Ie+qe+")*",Yt=Ie+qe+Jt,Xt="(?:"+[Pe+T+"?",T,Ce,ke,Ft].join("|")+")",Bt=RegExp(P+"(?="+P+")|"+Xt+Yt,"g");function Kt(e){return e.match(Bt)||[]}Ee.exports=Kt});var Le=a((Hi,Ve)=>{n();var Qt=Se(),en=S(),rn=Ue();function tn(e){return en(e)?rn(e):Qt(e)}Ve.exports=tn});var Ne=a((Ji,De)=>{n();var nn=we(),sn=S(),on=Le(),un=O();function an(e){return function(r){r=un(r);var t=sn(r)?on(r):void 0,i=t?t[0]:r.charAt(0),s=t?nn(t,1).join(""):r.slice(1);return i[e]()+s}}De.exports=an});var We=a((Yi,Me)=>{n();var cn=Ne(),pn=cn("toUpperCase");Me.exports=pn});var $e=a((Xi,ze)=>{n();var fn=O(),ln=We();function dn(e){return ln(fn(e).toLowerCase())}ze.exports=dn});var Ge=a((Bi,_e)=>{n();function mn(e,r,t,i){var s=-1,p=e==null?0:e.length;for(i&&p&&(t=e[++s]);++s<p;)t=r(t,e[s],s,e);return t}_e.exports=mn});var Ze=a((Ki,Fe)=>{n();function bn(e){return function(r){return e==null?void 0:e[r]}}Fe.exports=bn});var Je=a((Qi,He)=>{n();var xn=Ze(),gn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},On=xn(gn);He.exports=On});var Xe=a((es,Ye)=>{n();var hn=Je(),An=O(),vn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yn="\\u0300-\\u036f",wn="\\ufe20-\\ufe2f",jn="\\u20d0-\\u20ff",Rn=yn+wn+jn,Sn="["+Rn+"]",Tn=RegExp(Sn,"g");function Pn(e){return e=An(e),e&&e.replace(vn,hn).replace(Tn,"")}Ye.exports=Pn});var Ke=a((rs,Be)=>{n();var Cn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function kn(e){return e.match(Cn)||[]}Be.exports=kn});var er=a((ts,Qe)=>{n();var qn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function In(e){return qn.test(e)}Qe.exports=In});var hr=a((ns,Or)=>{n();var sr="\\ud800-\\udfff",En="\\u0300-\\u036f",Un="\\ufe20-\\ufe2f",Vn="\\u20d0-\\u20ff",Ln=En+Un+Vn,or="\\u2700-\\u27bf",ur="a-z\\xdf-\\xf6\\xf8-\\xff",Dn="\\xac\\xb1\\xd7\\xf7",Nn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mn="\\u2000-\\u206f",Wn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="A-Z\\xc0-\\xd6\\xd8-\\xde",zn="\\ufe0e\\ufe0f",cr=Dn+Nn+Mn+Wn,pr="['\u2019]",rr="["+cr+"]",$n="["+Ln+"]",fr="\\d+",_n="["+or+"]",lr="["+ur+"]",dr="[^"+sr+cr+fr+or+ur+ar+"]",Gn="\\ud83c[\\udffb-\\udfff]",Fn="(?:"+$n+"|"+Gn+")",Zn="[^"+sr+"]",mr="(?:\\ud83c[\\udde6-\\uddff]){2}",br="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ar+"]",Hn="\\u200d",tr="(?:"+lr+"|"+dr+")",Jn="(?:"+m+"|"+dr+")",nr="(?:"+pr+"(?:d|ll|m|re|s|t|ve))?",ir="(?:"+pr+"(?:D|LL|M|RE|S|T|VE))?",xr=Fn+"?",gr="["+zn+"]?",Yn="(?:"+Hn+"(?:"+[Zn,mr,br].join("|")+")"+gr+xr+")*",Xn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Kn=gr+xr+Yn,Qn="(?:"+[_n,mr,br].join("|")+")"+Kn,ei=RegExp([m+"?"+lr+"+"+nr+"(?="+[rr,m,"$"].join("|")+")",Jn+"+"+ir+"(?="+[rr,m+tr,"$"].join("|")+")",m+"?"+tr+"+"+nr,m+"+"+ir,Bn,Xn,fr,Qn].join("|"),"g");function ri(e){return e.match(ei)||[]}Or.exports=ri});var vr=a((is,Ar)=>{n();var ti=Ke(),ni=er(),ii=O(),si=hr();function oi(e,r,t){return e=ii(e),r=t?void 0:r,r===void 0?ni(e)?si(e):ti(e):e.match(r)||[]}Ar.exports=oi});var wr=a((ss,yr)=>{n();var ui=Ge(),ai=Xe(),ci=vr(),pi="['\u2019]",fi=RegExp(pi,"g");function li(e){return function(r){return ui(ci(ai(r).replace(fi,"")),e,"")}}yr.exports=li});var Rr=a((os,jr)=>{n();var di=$e(),mi=wr(),bi=mi(function(e,r,t){return r=r.toLowerCase(),e+(t?di(r):r)});jr.exports=bi});n();import wi from"cac";n();var Er=z($());import*as qr from"fs";import*as Ir from"path";import Oi from"oazapfts/lib/codegen/generate";n();import Yr from"@apidevtools/swagger-parser";import Xr from"swagger2openapi";async function _(e){let r=await Yr.bundle(e);return"openapi"in r&&r.openapi.startsWith("3")?r:(await Xr.convertObj(r,{})).openapi}n();var Tr=z(Rr());import*as v from"prettier";import*as Sr from"path";var xi={ts:"typescript",tsx:"typescript",js:"babel",jsx:"babel","js.flow":"flow",flow:"flow",gql:"graphql",graphql:"graphql",css:"postcss",scss:"postcss",less:"postcss",stylus:"postcss",markdown:"markdown",md:"markdown",json:"json"};async function C(e,r){let t=null,i="typescript";if(e){let s=Sr.extname(e).slice(1);i=xi[s],t=await v.resolveConfig(process.cwd(),{useCache:!0,editorconfig:!0})}return v.format(r,{parser:i,...t})}var Pr=e=>e.replace(/{(.+?)}/g,(r,t)=>`:${(0,Tr.default)(t)}`);n();function Cr(e){return e.map(r=>`rest.${r.verb}(\`\${baseURL}${r.path}\`, (req, res, ctx) => {
        const resultArray = [${r.responseMap.map(t=>{var i;return`[ctx.status(${parseInt(t==null?void 0:t.code)}), ctx.json(${h((i=t==null?void 0:t.responses)==null?void 0:i["application/json"])})]`})}];

          return res(...resultArray[next() % resultArray.length])
        }),
`).join("  ").trimEnd()}function h(e,r){var t;if(!e)return"null";if(e.example)return JSON.stringify(e.example);if(Array.isArray(e.type))return`faker.helpers.arrayElement([${e.type.map(i=>h({...e,type:i})).join(",")}])`;if(e.enum)return`faker.helpers.arrayElement(${JSON.stringify(e.enum)})`;switch(e.type){case"string":return gi(e.format,r);case"number":return"faker.datatype.number()";case"integer":return"faker.datatype.number()";case"boolean":return"faker.datatype.boolean()";case"object":return!e.properties&&typeof e.additionalProperties=="object"?`[...new Array(5).keys()].map(_ => ({ [faker.lorem.word()]: ${h(e.additionalProperties)} })).reduce((acc, next) => Object.assign(acc, next), {})`:`{
        ${Object.entries((t=e.properties)!=null?t:{}).map(([i,s])=>`${JSON.stringify(i)}: ${h(s,i)}`).join(`,
`)}
    }`;case"array":return`[...(new Array(faker.datatype.number({ max: MAX_ARRAY_LENGTH }))).keys()].map(_ => (${h(e.items)}))`;default:return"null"}}function gi(e,r){return["date-time","date","time"].includes(e!=null?e:"")||(r==null?void 0:r.toLowerCase().endsWith("_at"))?"faker.date.past()":e==="uuid"?"faker.datatype.uuid()":["idn-email","email"].includes(e!=null?e:"")||(r==null?void 0:r.toLowerCase().endsWith("email"))?"faker.internet.email()":["hostname","idn-hostname"].includes(e!=null?e:"")?"faker.internet.domainName()":e==="ipv4"?"faker.internet.ip()":e==="ipv6"?"faker.internet.ipv6()":["uri","uri-reference","iri","iri-reference","uri-template"].includes(e!=null?e:"")||(r==null?void 0:r.toLowerCase().endsWith("url"))?"faker.internet.url()":r!=null&&r.toLowerCase().endsWith("name")?"faker.name.findName()":"faker.lorem.slug(1)"}n();var kr=(e,r,t)=>{var i;return`/**
* This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
* Feel free to commit/edit it as you need.
*/
/* eslint-disable */
/* tslint:disable */
import { setupWorker, rest } from 'msw';
import { faker } from '@faker-js/faker';

faker.seed(1);

const baseURL = '${r}';
const MAX_ARRAY_LENGTH = ${(i=t==null?void 0:t.maxArrayLength)!=null?i:20};

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
}

export const handlers = [
  ${e}
];

// This configures a Service Worker with the given request handlers.
export const startWorker = () => {
  if (typeof window === 'undefined') {
    const { setupServer } = require('msw/node');
    const server = setupServer(...handlers);
    server.listen();
  } else {
    const worker = setupWorker(...handlers);
    worker.start();
  }
}
`};async function Ur(e,r){var I,E,U,V;let{output:t}=r,i,s=await _(e),p=new Oi(s,{}),Lr=vi(s),k=(E=(I=r==null?void 0:r.includes)==null?void 0:I.split(","))!=null?E:null,q=(V=(U=r==null?void 0:r.excludes)==null?void 0:U.split(","))!=null?V:null,Dr=Lr.filter(l=>!(k&&!k.includes(l.path)||q&&q.includes(l.path))).map(l=>{let{verb:c,path:d,responses:x}=l,j=Object.entries(x).map(([L,Nr])=>{let R=p.resolve(Nr).content;if(!R)return{code:L};let Mr=Object.keys(R).reduce((D,N)=>{let M=R[N].schema;return typeof M<"u"&&(D[N]=b(M)),D},{});return{code:L,responses:Mr}});return{verb:c,path:Pr(d),responseMap:j}}),w="";r.baseUrl===!0?w=hi(s):typeof r.baseUrl=="string"&&(w=r.baseUrl),i=kr(Cr(Dr),w,r),t?qr.writeFileSync(Ir.resolve(process.cwd(),t),await C(t,i)):console.log(await C(null,i));function b(l){let c=p.resolve(l);if(c.type==="array"?(c.items=p.resolve(c.items),c.items=b(c.items)):c.type==="object"&&(!c.properties&&typeof c.additionalProperties=="object"&&"$ref"in c.additionalProperties&&(c.additionalProperties=b(p.resolve(c.additionalProperties))),c.properties&&(c.properties=Object.entries(c.properties).reduce((d,[x,j])=>(d[x]=b(j),d),{}))),c.allOf){let d=c.allOf.map(x=>b(x).properties);c.properties=Object.assign({},...d),c.type="object",delete c.allOf}return c}}function hi(e){var i;let r=(i=e.servers)==null?void 0:i.at(0),t="";return r&&(t=r.url),r!=null&&r.variables&&Object.entries(r.variables).forEach(([s,p])=>{t=t.replace(`{${s}}`,p.default)}),t}var Ai=Object.values(Er.OpenAPIV3.HttpMethods);function vi(e){return Object.entries(e.paths).flatMap(([r,t])=>t?Object.entries(t).filter(i=>Ai.includes(i[0])).map(([i,s])=>({path:r,verb:i,responses:s.responses})):[])}var Vr="0.9.0";var y=wi();y.command("<spec>","Generating msw mock definitions with random fake data.").option("-o, --output <file>","Output file path such as `./mock.js`, without it'll output to stdout.").option("-m, --max-array-length <number>","Max array length, default to 20.").option("-t, --includes <keywords>","Include the request path with given string, can be seperated with comma.").option("-e, --excludes <keywords>","Exclude the request path with given string, can be seperated with comma.").option("--base-url [baseUrl]","Use the one you specified or server url in OpenAPI description as base url.").example("msw-auto-mock ./githubapi.yaml -o mock.js").example("msw-auto-mock ./githubapi.yaml -o mock.js -t /admin,/repo -m 30").action(async(e,r)=>{await Ur(e,r).catch(console.error)});y.help();y.version(Vr);y.parse();