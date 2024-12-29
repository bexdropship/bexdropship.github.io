import{r as d,j as e,x as _,P as w,w as fe,S as A,C as P,T as l,G as be,D as _e,A as k,y as W,z as F,W as ve}from"./index-BVww4E_S.js";import{P as Ce,C as Se}from"./product-view-BVzGxlP5.js";import{D as $,a as D,b as R,c as z,G as T}from"./Grid-BNECg4BB.js";import{F as U,T as v,L as Pe}from"./LoadingButton-BpYE0Dd_.js";import{C as G}from"./customer-view-CR0glwt-.js";import{d as Te,e as we,b as qe,T as V,a as u,f as Oe}from"./search-fill-CEl463d9.js";import{C as Ae}from"./Container-BQkNYp94.js";import{C as ke}from"./Card-SoKCYwmS.js";import{u as We}from"./use-auth-DyOHYEnj.js";import"./Select-CyHo8fu1.js";import"./isMuiElement-usN_V-3S.js";function K({onSelect:m}){const[j,y]=d.useState(!1),n=()=>{y(!0)},p=()=>{y(!1)},i=g=>{m(g),p()};return e.jsxs("div",{children:[e.jsx(_,{variant:"outlined",onClick:n,children:"Add Product"}),e.jsxs($,{open:j,onClose:p,maxWidth:"xl",fullWidth:!0,children:[e.jsx(D,{children:"Products"}),e.jsx(R,{children:e.jsx(U,{sx:{width:"100%"},children:e.jsx(Ce,{onSelect:i,style:{width:"100%"}})})}),e.jsx(z,{children:e.jsx(_,{onClick:p,color:"primary",children:"Close"})})]})]})}K.propTypes={onSelect:w.func};function H({onSelect:m}){const[j,y]=d.useState(!1),n=()=>{y(!0)},p=()=>{y(!1)},i=g=>{m(g),p()};return e.jsxs("div",{children:[e.jsx(_,{variant:"outlined",onClick:n,children:"Set"}),e.jsxs($,{open:j,onClose:p,maxWidth:"xl",fullWidth:!0,children:[e.jsx(D,{children:"Customers"}),e.jsx(R,{sx:{padding:0},children:e.jsx(U,{sx:{width:"100%"},children:e.jsx(G,{onSelect:i,style:{width:"100%"}})})}),e.jsx(z,{children:e.jsx(_,{onClick:p,color:"primary",children:"Close"})})]})]})}H.propTypes={onSelect:w.func};function X({onSelect:m,filterParentContactOption:j}){const[y,n]=d.useState(!1),p=()=>{n(!0)},i=()=>{n(!1)},g=h=>{m(h),i()};return d.useEffect(()=>{console.log("DeliveryPopupModal Props:"),console.log("filterParentContactOption:",j)},[m,j]),e.jsxs("div",{children:[e.jsx(_,{variant:"outlined",onClick:p,children:"Set"}),e.jsxs($,{open:y,onClose:i,maxWidth:"xl",fullWidth:!0,children:[e.jsx(D,{children:"Delivery Address"}),e.jsx(R,{sx:{padding:0},children:e.jsx(U,{sx:{width:"100%"},children:e.jsx(G,{onSelect:g,filterTypeOption:"delivery",filterParentContactOption:j,style:{width:"100%"}})})}),e.jsx(z,{children:e.jsx(_,{onClick:i,color:"primary",children:"Close"})})]})]})}X.propTypes={onSelect:w.func,filterParentContactOption:w.number};function Fe(){const m=fe(),[j,y]=d.useState(!1),[n,p]=d.useState({id:0,name:"",street:"",city:"",state:"",country:"",zip:"",phone:"",mobile:"",email:""}),[i,g]=d.useState({id:0,name:"",street:"",city:"",state:"",country:"",zip:"",phone:"",mobile:"",email:""}),[h,q]=d.useState([]),[L,J]=d.useState({}),[Y,Z]=d.useState(0),[ee,te]=d.useState(0),[re,ne]=d.useState(0),[E,oe]=d.useState(""),[B,se]=d.useState(""),[N,ae]=d.useState(""),I=new FileReader,M=d.useRef(null);function le(t,o=","){let s=t.slice(0,t.indexOf(`
`)).split(o);return s=s.map(a=>a.replace(`
`,"").replace("\r","")),t.slice(t.indexOf(`
`)+1).split(`
`).map(a=>{const f=a.split(o).map(x=>x.replace(`
`,"").replace("\r",""));return s.reduce((x,b,S)=>(x[b]=f[S],x),{})})}const ie=()=>{M.current.click()},de=async t=>{const o=t.target.files[0];ae(o.name),I.onload=async s=>{const r=le(s.target.result);r.pop(),console.log(r);const c=[],a=r.map(f=>{const O=`${k.baseURL}/api-proxy/proxy?method=get&resource=products&exact_match=true&name=${f.sku}`;return console.log(O),W.get(O,{headers:{Authorization:`Bearer ${F.get("jwt")}`}}).then(x=>{if(console.log(x.data.data),Array.isArray(x.data.data)&&x.data.data.length===0)alert(`There appears to be an issue with your CSV file. Please review and correct it. Product ${f.sku} not found.`);else{const b=x.data.data[0];b.category=b.categ_id.name,b.attributes=b.product_template_attribute_value_ids.map(S=>`${S.attribute}:${S.name}`),b.product_uom_qty=Number(f.qty),c.push(b)}}).catch(x=>{console.error("Error fetching products:",x)})});await Promise.all(a),console.log(`Total products fetched: ${c.length}`),c.length===r.length&&(console.log("Setting products"),console.log(c),c.forEach(f=>{Q(f,f.product_uom_qty)})),t.target.value=null},I.readAsText(o)},ce=(t,o)=>{console.log("Fetching order totals");const s=`${k.baseURL}/api-proxy/proxy?method=post&resource=ordertotals`;console.log(s);const r=h.map(a=>({product_id:a.id,product_uom_qty:a.product_uom_qty})),c={partner_id:n.id,order_line:r};console.log("Request body",c),W.post(s,c,{headers:{Authorization:`Bearer ${F.get("jwt")}`}}).then(a=>{console.log(a.data),J(a.data.result.product_prices),Z(a.data.result.subtotal),te(a.data.result.total)}).catch(a=>{console.error("Error fetching order totals:",a)})};d.useEffect(()=>{ce();const t=h.reduce((o,s)=>o+s.product_uom_qty,0);ne(t)},[n,h]);const ue=(t,o,s)=>{if(t<0||t>=h.length)return;const r=h.filter((c,a)=>a!==t);q(r)},he=(t,o)=>{const s=h.map((r,c)=>{if(c===t){console.log(r),console.log(o);const a=["consu","service"];return r.qty_available<o&&!a.includes(r.type)?(alert("Quantity available is insufficient."),r):{...r,product_uom_qty:o!==0?Number(o):0}}return r});q(s)},C=t=>t?`$${t.toFixed(2)}`:"",pe=t=>{console.log("Setting order partner"),console.log(t),p({id:t.id,name:t.name,street:t.street,city:t.city,state:t.state,country:t.country,zip:t.zip,phone:t.phone,mobile:t.mobile,email:t.email}),g({id:0,name:"",street:"",city:"",state:"",country:"",zip:"",phone:"",mobile:"",email:""})},xe=t=>{console.log("Setting order partner"),console.log(t),g({id:t.id,name:t.name,street:t.street,city:t.city,state:t.state,country:t.country,zip:t.zip,phone:t.phone,mobile:t.mobile,email:t.email})},Q=(t,o)=>{console.log("Adding order line"),console.log(t);let s=!1;h.forEach(c=>{c.id===t.id&&(s=!0)});const r=["consu","service"];t.qty_available<1&&!r.includes(t.type)?alert(`Cannot add product lines with 0 qty available: SKU ${t.default_code}`):s?alert(`Product has already been added: SKU ${t.default_code}`):q(c=>[...c,{id:t.id,name:t.name,default_code:t.default_code,category:t.category,type:t.type,lst_price:t.lst_price,invoice_policy:t.invoice_policy,description_sale:t.description_sale,attributes:t.attributes,sale_ok:t.sale_ok,purchase_ok:t.purchase_ok,sales_count:t.sales_count,product_uom_qty:o||1,qty_available:t.qty_available}])},ye=t=>{oe(t.target.value)},je=t=>{se(t.target.value)},me=()=>{y(!0),console.log("Creating an order");const t=`${k.baseURL}/api-proxy/proxy?method=post&resource=orders`;console.log(t),console.log(h);const o=h.map(r=>({product_id:r.id,product_uom_qty:r.product_uom_qty}));console.log(o);const s={order:{partner_id:n.id,order_line:o,x_studio_notes:E,client_order_ref:B,...i.id&&{partner_shipping_id:i.id}}};console.log("Request body",s),W.post(t,s,{headers:{Authorization:`Bearer ${F.get("jwt")}`}}).then(r=>{console.log(r.data),y(!1),m.push(`/orders/${r.data.result.sale_order_id}`)}).catch(r=>{console.error("Error fetching customers:",r)})},ge=e.jsxs(e.Fragment,{children:[e.jsx(A,{spacing:3,direction:"row",alignItems:"center",children:e.jsx(v,{fullWidth:!0,name:"partner_id",label:"Customer",value:n.name,InputProps:{readOnly:!0,endAdornment:e.jsx(P,{children:e.jsx(H,{onSelect:pe})})}})}),n.name&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(l,{variant:"body1",fontWeight:"bold",children:"Address:"}),e.jsx(l,{variant:"body1",children:n.street}),e.jsxs(l,{variant:"body1",children:[n.city," ",n.state]}),e.jsxs(l,{variant:"body1",children:[n.country," ",n.zip]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Phone:"})," ",n.phone]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Mobile:"})," ",n.mobile]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Email:"})," ",n.email]})]}),e.jsx("div",{style:{margin:"16px 0"}}),n.name&&e.jsx(A,{spacing:3,direction:"row",alignItems:"center",children:e.jsx(v,{fullWidth:!0,name:"partner_shipping_id",label:"Delivery Address",value:i.name,InputProps:{readOnly:!0,endAdornment:e.jsx(P,{children:e.jsx(X,{onSelect:xe,filterParentContactOption:n.id})})}})}),i.name&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(l,{variant:"body1",fontWeight:"bold",children:"Address:"}),e.jsx(l,{variant:"body1",children:i.street}),e.jsxs(l,{variant:"body1",children:[i.city," ",n.state]}),e.jsxs(l,{variant:"body1",children:[i.country," ",n.zip]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Phone:"})," ",i.phone]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Mobile:"})," ",i.mobile]}),e.jsxs(l,{variant:"body1",children:[e.jsx("b",{children:"Email:"})," ",i.email]})]}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(P,{children:e.jsx(K,{onSelect:Q})}),e.jsx("input",{type:"file",accept:".csv",onChange:de,ref:M,style:{display:"none"}}),e.jsx(_,{variant:"contained",color:"primary",onClick:ie,children:"Upload CSV"}),N&&e.jsxs(l,{variant:"body1",style:{marginTop:"10px"},children:["Selected file: ",N]}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(Te,{component:be,children:e.jsxs(we,{children:[e.jsx(qe,{children:e.jsxs(V,{children:[e.jsx(u,{children:"Product"}),e.jsx(u,{children:"Attributes"}),e.jsx(u,{children:"Unit Price"}),e.jsx(u,{children:"Qty Available"}),e.jsx(u,{children:"Qty"}),e.jsx(u,{children:"Subtotal"}),e.jsx(u,{})]})}),e.jsx(Oe,{children:h.map((t,o)=>e.jsxs(V,{children:[e.jsxs(u,{children:["[",t.default_code,"] ",t.name]}),e.jsx(u,{children:t.attributes.map((s,r)=>e.jsx(Se,{label:s,variant:"outlined"},r))}),e.jsx(u,{children:C(L[t.id])}),e.jsx(u,{children:t.qty_available}),e.jsx(u,{children:e.jsx(v,{type:"number",style:{minWidth:"100px"},value:t.product_uom_qty!==0?t.product_uom_qty:"",onChange:s=>he(o,s.target.value)})}),e.jsx(u,{children:C(L[t.id]*t.product_uom_qty)}),e.jsx(u,{align:"right",children:e.jsx(P,{onClick:()=>ue(o),children:e.jsx(_e,{icon:"eva:trash-2-outline"})})})]},o))})]})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsxs(l,{variant:"body1",fontWeight:"bold",children:["Total Product Qty: ",re]}),e.jsxs(l,{variant:"body1",fontWeight:"bold",children:["Subtotal: ",C(Y)]}),e.jsxs(l,{variant:"body1",fontWeight:"bold",children:["Total: ",C(ee)]}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(T,{container:!0,spacing:2,children:e.jsx(T,{item:!0,xs:12,md:6,lg:6,children:e.jsx(v,{label:"Notes",value:E,multiline:!0,fullWidth:!0,rows:4,onChange:ye})})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(T,{container:!0,spacing:2,children:e.jsx(T,{item:!0,xs:12,md:6,lg:6,children:e.jsx(v,{label:"PO Number",value:B,fullWidth:!0,onChange:je})})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(Pe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:me,loading:j,children:"Create"})]});return e.jsxs(Ae,{children:[e.jsx(A,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(l,{variant:"h4",children:"New Order"})}),ge,e.jsx(ke,{})]})}function Qe(){return We(),e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" New Order | BEX Sales "})}),e.jsx(Fe,{})]})}export{Qe as default};
