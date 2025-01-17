import{r as c,j as e,S as m,I as $,H as k,T as A,D as q,P as w,C as P,E as f,F as C,M as p,G as j,J as L,W as U}from"./index-C5RrPjBj.js";import{D as M,a as N,b as O,c as G}from"./DialogTitle-CCz_wh_q.js";import{D as H}from"./DialogContentText-FF8TREHv.js";import{F as J,T as i,L as V}from"./LoadingButton-CYORpM6l.js";import{S as D}from"./Select-BWOg1Xzt.js";import{C as X}from"./Container-QRn5wRjS.js";import{C as Z}from"./Card-e_-knblo.js";import{u as K}from"./use-auth-C5CSH23r.js";import"./isMuiElement-gIiEoBX9.js";function W({handleArchiveCustomer:u}){const[g,l]=c.useState(!1),x=()=>{l(!0)},h=()=>{l(!1)};return e.jsxs(m,{direction:"row",alignItems:"center",children:[e.jsxs(m,{direction:"column",alignItems:"center",spacing:1,children:[e.jsx($,{onClick:x,sx:{color:"red",backgroundColor:"#fdd","&:hover":{backgroundColor:"#fbb"}},children:e.jsx(k,{icon:"eva:close-outline"})}),e.jsx(A,{variant:"caption",sx:{color:"red"},children:"Archive"})]}),e.jsxs(M,{open:g,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(N,{id:"alert-dialog-title",children:"Confirm Archive"}),e.jsx(O,{children:e.jsx(H,{id:"alert-dialog-description",children:"Are you sure you want to archive this address?"})}),e.jsxs(G,{children:[e.jsx(q,{onClick:h,color:"primary",children:"Cancel"}),e.jsx(q,{onClick:u,color:"primary",autoFocus:!0,children:"Confirm"})]})]})]})}W.propTypes={handleArchiveCustomer:w.func};function z({partnerId:u}){const g=P(),[l,x]=c.useState([]),[h,b]=c.useState(!1),[E,_]=c.useState(""),[t,y]=c.useState({name:"",ext_dropship_partner_id:"",street:"",street2:"",city:"",state:"",zip:"",country:"",email:"",phone:"",mobile:"",company_name:""}),v=c.useRef(l);c.useEffect(()=>{v.current=l,F(v.current),B()},[]);const F=o=>{console.log("Fetching Countries and States");const a=`${j.baseURL}/api-proxy/proxy?method=get&resource=countrystate`;console.log(a),f.get(a,{headers:{Authorization:`Bearer ${C.get("jwt")}`}}).then(r=>{console.log(r.data.data),x([...o,...r.data.data])}).catch(r=>{console.error("Error fetching countries/states:",r)})},I=()=>{const o=l.find(a=>a.code===t.country);return o&&o.state_ids?o.state_ids.map(a=>e.jsx(p,{value:a.code,children:a.name},a.code)):null},s=o=>{const{name:a,value:r}=o.target;y(n=>({...n,[a]:r})),a==="country"&&y(n=>({...n,state:""}))},T=()=>{S(!0)},S=o=>{b(!0),console.log("Saving Customer");const r=`${j.baseURL}/api-proxy/proxy?method=post&resource=customers`;console.log(r);const n={partner:{id:parseInt(u,10),name:t.name,street:t.street,street2:t.street2,city:t.city,state:t.state,zip:t.zip,country:t.country,email:t.email,phone:t.phone,mobile:t.mobile}};o===!0&&(n.partner.active=!1),console.log("Request body",n),f.post(r,n,{headers:{Authorization:`Bearer ${C.get("jwt")}`}}).then(d=>{console.log(d.data),b(!1),d.data.result.success===!1?alert(d.data.result.message):window.location.reload()}).catch(d=>{console.error("Error saving customer:",d)})},B=()=>{console.log("Fetching Customer Details");const o=`${j.baseURL}/api-proxy/proxy?method=get&resource=customers&partner_id=${u}`;console.log(o),f.get(o,{headers:{Authorization:`Bearer ${C.get("jwt")}`}}).then(a=>{console.log(a.data.data),a.data.data.length===0&&g.push("/customers"),_(a.data.data.name);const{data:r}=a.data;y(n=>({...n,name:r.name||"",street:r.street||"",street2:r.street2||"",city:r.city||"",state:r.state_id.code||"",zip:r.zip||"",country:r.country_id.code||"",email:r.email||"",phone:r.phone||"",mobile:r.mobile||"",company_name:r.company_name||""}))}).catch(a=>{console.error("Error fetching order details:",a)})},R=e.jsx(J,{sx:{width:"100%"},children:e.jsxs(m,{spacing:3,children:[e.jsx(i,{label:"Name",name:"name",value:t.name,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"Street",name:"street",value:t.street,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"Street2",name:"street2",value:t.street2,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"City",name:"city",value:t.city,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"Zip",name:"zip",value:t.zip,onChange:s,fullWidth:!0,required:!0}),e.jsxs(D,{name:"country",value:t.country,onChange:s,fullWidth:!0,displayEmpty:!0,required:!0,children:[e.jsx(p,{value:"",disabled:!0,children:"Select a Country"}),l.map(o=>e.jsx(p,{value:o.code,children:o.name},o.code))]}),t.country&&e.jsxs(D,{name:"state",value:t.state,onChange:s,fullWidth:!0,displayEmpty:!0,required:!0,children:[e.jsx(p,{value:"",disabled:!0,children:"Select a State/Province"}),I()]}),e.jsx(i,{label:"Email",name:"email",type:"email",value:t.email,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"Phone",name:"phone",value:t.phone,onChange:s,fullWidth:!0,required:!0}),e.jsx(i,{label:"Mobile",name:"mobile",value:t.mobile,onChange:s,fullWidth:!0,required:!0}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(V,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:S,loading:h,children:"Save"})]})});return e.jsxs(X,{children:[e.jsxs(m,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(A,{variant:"h4",children:["Shipping Address: ",E]}),e.jsx(m,{direction:"row",spacing:2,children:e.jsx(W,{handleArchiveCustomer:T})})]}),R,e.jsx(Z,{})]})}z.propTypes={partnerId:w.any};function ie(){K();const{partnerId:u}=L();return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsx("title",{children:" Shipping Address Detail | BEX Dropship "})}),e.jsx(z,{partnerId:u})]})}export{ie as default};
