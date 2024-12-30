import{r as u,j as e,S as d,I as F,H as T,T as v,D as C,P as D,C as _,E as y,F as j,G as b,J as E,W as I}from"./index-DzKCi557.js";import{D as k,a as B,b as P,c as $}from"./DialogTitle-D8y7aJ7r.js";import{D as L}from"./DialogContentText-XPwpJtZV.js";import{F as R,T as o,L as U}from"./LoadingButton-BM2pftg3.js";import{C as N}from"./Container-1mRqyzEp.js";import{C as M}from"./Card-ByWKekwp.js";import{u as O}from"./use-auth-BB-nlgyt.js";import"./Select-B1sm-onA.js";import"./isMuiElement-rKtmFBxw.js";function q({handleArchiveCustomer:i}){const[g,m]=u.useState(!1),h=()=>{m(!0)},p=()=>{m(!1)};return e.jsxs(d,{direction:"row",alignItems:"center",children:[e.jsxs(d,{direction:"column",alignItems:"center",spacing:1,children:[e.jsx(F,{onClick:h,sx:{color:"red",backgroundColor:"#fdd","&:hover":{backgroundColor:"#fbb"}},children:e.jsx(T,{icon:"eva:close-outline"})}),e.jsx(v,{variant:"caption",sx:{color:"red"},children:"Archive"})]}),e.jsxs(k,{open:g,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(B,{id:"alert-dialog-title",children:"Confirm Archive"}),e.jsx(P,{children:e.jsx(L,{id:"alert-dialog-description",children:"Are you sure you want to archive this address?"})}),e.jsxs($,{children:[e.jsx(C,{onClick:p,color:"primary",children:"Cancel"}),e.jsx(C,{onClick:i,color:"primary",autoFocus:!0,children:"Confirm"})]})]})]})}q.propTypes={handleArchiveCustomer:D.func};function S({partnerId:i}){const g=_(),[m,h]=u.useState(!1),[p,A]=u.useState(""),[t,x]=u.useState({name:"",ext_dropship_partner_id:"",street:"",street2:"",city:"",state:"",zip:"",country:"",email:"",phone:"",mobile:"",company_name:""});u.useEffect(()=>{w()},[]);const a=l=>{const{name:s,value:r}=l.target;x(n=>({...n,[s]:r}))},W=()=>{f(!0)},f=l=>{h(!0),console.log("Saving Customer");const r=`${b.baseURL}/api-proxy/proxy?method=post&resource=customers`;console.log(r);const n={partner:{id:parseInt(i,10),name:t.name,street:t.street,street2:t.street2,city:t.city,state:t.state,zip:t.zip,country:t.country,email:t.email,phone:t.phone,mobile:t.mobile}};l===!0&&(n.partner.active=!1),console.log("Request body",n),y.post(r,n,{headers:{Authorization:`Bearer ${j.get("jwt")}`}}).then(c=>{console.log(c.data),h(!1),c.data.result.success===!1?alert(c.data.result.message):window.location.reload()}).catch(c=>{console.error("Error saving customer:",c)})},w=()=>{console.log("Fetching Customer Details");const l=`${b.baseURL}/api-proxy/proxy?method=get&resource=customers&partner_id=${i}`;console.log(l),y.get(l,{headers:{Authorization:`Bearer ${j.get("jwt")}`}}).then(s=>{console.log(s.data.data),s.data.data.length===0&&g.push("/customers"),A(s.data.data.name);const{data:r}=s.data;x(n=>({...n,name:r.name||"",street:r.street||"",street2:r.street2||"",city:r.city||"",state:r.state_id.code||"",zip:r.zip||"",country:r.country_id.code||"",email:r.email||"",phone:r.phone||"",mobile:r.mobile||"",company_name:r.company_name||""}))}).catch(s=>{console.error("Error fetching order details:",s)})},z=e.jsx(R,{sx:{width:"100%"},children:e.jsxs(d,{spacing:3,children:[e.jsx(o,{label:"Name",name:"name",value:t.name,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Street",name:"street",value:t.street,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Street2",name:"street2",value:t.street2,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"City",name:"city",value:t.city,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"State",name:"state",value:t.state,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Zip",name:"zip",value:t.zip,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Country",name:"country",value:t.country,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Email",name:"email",type:"email",value:t.email,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Phone",name:"phone",value:t.phone,onChange:a,fullWidth:!0,required:!0}),e.jsx(o,{label:"Mobile",name:"mobile",value:t.mobile,onChange:a,fullWidth:!0,required:!0}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(U,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:f,loading:m,children:"Save"})]})});return e.jsxs(N,{children:[e.jsxs(d,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(v,{variant:"h4",children:["Shipping Address: ",p]}),e.jsx(d,{direction:"row",spacing:2,children:e.jsx(q,{handleArchiveCustomer:W})})]}),z,e.jsx(M,{})]})}S.propTypes={partnerId:D.any};function ee(){O();const{partnerId:i}=E();return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:" Shipping Address Detail | BEX Dropship "})}),e.jsx(S,{partnerId:i})]})}export{ee as default};
