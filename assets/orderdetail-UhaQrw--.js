import{r as n,j as e,D as y,P as f,S as b,I as S,H as I,T as h,E as F,F as W,B as fe,O as _e,G as $,J as Ce,W as ve}from"./index-DzKCi557.js";import{P as Se,C as H}from"./product-view-D7LCw_fd.js";import{D,a as w,b as L,c as k}from"./DialogTitle-D8y7aJ7r.js";import{F as X,T as q,L as Oe}from"./LoadingButton-BM2pftg3.js";import{D as K}from"./DialogContentText-XPwpJtZV.js";import{C as Pe}from"./customer-view-CDcVt2rK.js";import{e as qe,f as Te,b as De,T as J,a as i,g as we}from"./search-fill-DYA922h7.js";import{G as T}from"./Grid-Ixt3y6sx.js";import{C as Le}from"./Container-1mRqyzEp.js";import{C as ke}from"./Card-ByWKekwp.js";import{u as Ae}from"./use-auth-BB-nlgyt.js";import"./Select-B1sm-onA.js";import"./isMuiElement-rKtmFBxw.js";function Y({onSelect:d}){const[x,c]=n.useState(!1),m=()=>{c(!0)},u=()=>{c(!1)},g=_=>{d(_),u()};return e.jsxs("div",{children:[e.jsx(y,{variant:"outlined",onClick:m,children:"Add Product"}),e.jsxs(D,{open:x,onClose:u,maxWidth:"xl",fullWidth:!0,children:[e.jsx(w,{children:"Products"}),e.jsx(L,{children:e.jsx(X,{sx:{width:"100%"},children:e.jsx(Se,{onSelect:g,style:{width:"100%"}})})}),e.jsx(k,{children:e.jsx(y,{onClick:u,color:"primary",children:"Close"})})]})]})}Y.propTypes={onSelect:f.func};function Z({handleSendOrder:d}){const[x,c]=n.useState(!1),m=()=>{c(!0)},u=()=>{c(!1)};return e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsxs(b,{direction:"column",alignItems:"center",spacing:1,children:[e.jsx(S,{onClick:m,sx:{color:"blue",backgroundColor:"#ddf","&:hover":{backgroundColor:"#bbf"}},children:e.jsx(I,{icon:"mdi:send"})}),e.jsx(h,{variant:"caption",sx:{color:"blue"},children:"Email"})]}),e.jsxs(D,{open:x,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(w,{id:"alert-dialog-title",children:"Confirm Send"}),e.jsx(L,{children:e.jsx(K,{id:"alert-dialog-description",children:"Are you sure you want to send this order?"})}),e.jsxs(k,{children:[e.jsx(y,{onClick:u,color:"primary",children:"Cancel"}),e.jsx(y,{onClick:d,color:"primary",autoFocus:!0,children:"Confirm"})]})]})]})}Z.propTypes={handleSendOrder:f.func};function ee({onSelect:d,filterParentContactOption:x}){const[c,m]=n.useState(!1),u=()=>{m(!0)},g=()=>{m(!1)},_=s=>{d(s),g()};return n.useEffect(()=>{console.log("DeliveryPopupModal Props:"),console.log("filterParentContactOption:",x)},[d,x]),e.jsxs("div",{children:[e.jsx(y,{variant:"outlined",onClick:u,children:"Set"}),e.jsxs(D,{open:c,onClose:g,maxWidth:"xl",fullWidth:!0,children:[e.jsx(w,{children:"Shipping Addresses"}),e.jsx(L,{sx:{padding:0},children:e.jsx(X,{sx:{width:"100%"},children:e.jsx(Pe,{onSelect:_,filterTypeOption:"delivery",filterParentContactOption:x,style:{width:"100%"}})})}),e.jsx(k,{children:e.jsx(y,{onClick:g,color:"primary",children:"Close"})})]})]})}ee.propTypes={onSelect:f.func,filterParentContactOption:f.number};function te({handleCancelOrder:d}){const[x,c]=n.useState(!1),m=()=>{c(!0)},u=()=>{c(!1)};return e.jsxs(b,{direction:"row",alignItems:"center",children:[e.jsxs(b,{direction:"column",alignItems:"center",spacing:1,children:[e.jsx(S,{onClick:m,sx:{color:"red",backgroundColor:"#fdd","&:hover":{backgroundColor:"#fbb"}},children:e.jsx(I,{icon:"eva:close-outline"})}),e.jsx(h,{variant:"caption",sx:{color:"red"},children:"Cancel"})]}),e.jsxs(D,{open:x,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(w,{id:"alert-dialog-title",children:"Confirm Cancellation"}),e.jsx(L,{children:e.jsx(K,{id:"alert-dialog-description",children:"Are you sure you want to cancel this order?"})}),e.jsxs(k,{children:[e.jsx(y,{onClick:u,color:"primary",children:"Cancel"}),e.jsx(y,{onClick:d,color:"primary",autoFocus:!0,children:"Confirm"})]})]})]})}te.propTypes={handleCancelOrder:f.func};function re({orderId:d}){const[x,c]=n.useState(!1),[m,u]=n.useState(""),[g,_]=n.useState(""),[s,B]=n.useState({id:0,name:"",street:"",city:"",state:"",country:"",zip:"",phone:"",mobile:"",email:""}),[j,O]=n.useState([]),[E,oe]=n.useState([]),[R,ne]=n.useState({}),[ae,U]=n.useState(0),[se,z]=n.useState(0),[le,ie]=n.useState(0),[M,N]=n.useState(""),[Q,G]=n.useState("");n.useEffect(()=>{me()},[]);const de=()=>{A(!0,!1)},ce=()=>{A(!1,!0)},ue=t=>{console.log("Fetching order totals");const r=`${$.baseURL}/api-proxy/proxy?method=post&resource=ordertotals`;console.log(r);const o={order_line:j.map(a=>({product_id:a[2].id,product_uom_qty:a[2].product_uom_qty}))};console.log("Request body",o),F.post(r,o,{headers:{Authorization:`Bearer ${W.get("jwt")}`}}).then(a=>{console.log(a.data),ne(a.data.result.product_prices),U(a.data.result.subtotal),z(a.data.result.total)}).catch(a=>{console.error("Error fetching order totals:",a)})};n.useEffect(()=>{ue();const t=j.reduce((r,l)=>r+l[2].product_uom_qty,0);ie(t)},[j]);const he=t=>{N(t.target.value)},pe=t=>{G(t.target.value)},A=(t,r)=>{c(!0),console.log("Saving Order");let l="post";t===!0&&(l="cancel");const o=`${$.baseURL}/api-proxy/proxy?method=${l}&resource=orders`;console.log(o),console.log(j);const a=j.map(p=>[p[0],p[1],{product_id:p[2].id,product_uom_qty:p[2].product_uom_qty}]),C=E.map(p=>[2,p[1],{}]),v=a.concat(C),V={order:{id:parseInt(d,10),order_line:v,x_studio_notes:M,client_order_ref:Q,...r&&{is_send:!0},...s.id&&{partner_shipping_id:s.id}}};console.log("Request body",V),F.post(o,V,{headers:{Authorization:`Bearer ${W.get("jwt")}`}}).then(p=>{console.log(p.data),c(!1),p.data.result.success===!1?alert(p.data.result.message):window.location.reload()}).catch(p=>{console.error("Error saving order:",p)})},xe=(t,r,l)=>{if(t<0||t>=j.length)return;const o=j.filter((C,v)=>v===t);o[0][0]!==0&&(console.log("Adding line to delete queue",o),oe(E.concat(o)));const a=j.filter((C,v)=>v!==t);O(a)},je=(t,r)=>{const l=j.map((o,a)=>{if(a===t){console.log("handle qty change",o);const C=["consu","service"];return o[2].qty_available<r&&!C.includes(o[2].type)?(alert("Quantity available is insufficient."),o):[o[0],o[1],{...o[2],product_uom_qty:r!==0?Number(r):0}]}return o});O(l)},P=t=>t?`$${t.toFixed(2)}`:"",me=()=>{console.log("Fetching Order Details");const t=`${$.baseURL}/api-proxy/proxy?method=get&resource=orders&order_id=${d}`;console.log(t),F.get(t,{headers:{Authorization:`Bearer ${W.get("jwt")}`}}).then(r=>{console.log(r.data.data),u(r.data.data.name),B(r.data.data.partner_shipping_id),N(r.data.data.x_studio_notes),G(r.data.data.client_order_ref?r.data.data.client_order_ref:"");const l=r.data.data.order_line.map(o=>[1,o.id,{line_id:o.id,id:o.product_id.id,name:o.name,product_uom_qty:o.product_uom_qty,attributes:o.product_id.attributes.map(a=>`${a.attribute}:${a.name}`),qty_available:o.product_id.qty_available,type:o.product_id.type}]);console.log(l),O(l),U(r.data.data.amount_untaxed),z(r.data.data.amount_total),_(r.data.data.state)}).catch(r=>{console.error("Error fetching order details:",r)})},ge=t=>{console.log("Setting order partner"),console.log(t),B({id:t.id,name:t.name,street:t.street,city:t.city,state:t.state,country:t.country,zip:t.zip,phone:t.phone,mobile:t.mobile,email:t.email})},ye=t=>{console.log("Adding order line"),console.log(t);const r=["consu","service"];t.qty_available<1&&!r.includes(t.type)?alert("Cannot add product lines with 0 qty available"):O([...j,[0,0,{id:t.id,name:`[${t.default_code}] ${t.name}`,product_uom_qty:1,attributes:t.attributes,qty_available:t.qty_available}]])},be=e.jsxs(e.Fragment,{children:[s.name&&e.jsx(b,{spacing:3,direction:"row",alignItems:"center",children:e.jsx(q,{fullWidth:!0,name:"partner_shipping_id",label:"Delivery Address",value:s.name,InputProps:{readOnly:!0,endAdornment:e.jsx(fe,{display:"flex",alignItems:"center",children:e.jsx(S,{children:e.jsx(ee,{onSelect:ge})})})}})}),s.name&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(h,{variant:"body1",fontWeight:"bold",children:"Address:"}),e.jsx(h,{variant:"body1",children:s.street}),e.jsxs(h,{variant:"body1",children:[s.city," ",s.state]}),e.jsxs(h,{variant:"body1",children:[s.country," ",s.zip]}),e.jsxs(h,{variant:"body1",children:[e.jsx("b",{children:"Phone:"})," ",s.phone]}),e.jsxs(h,{variant:"body1",children:[e.jsx("b",{children:"Mobile:"})," ",s.mobile]}),e.jsxs(h,{variant:"body1",children:[e.jsx("b",{children:"Email:"})," ",s.email]})]}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(S,{children:e.jsx(Y,{onSelect:ye})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(qe,{component:_e,children:e.jsxs(Te,{children:[e.jsx(De,{children:e.jsxs(J,{children:[e.jsx(i,{children:"Product"}),e.jsx(i,{children:"Attributes"}),e.jsx(i,{children:"Unit Price"}),e.jsx(i,{children:"Qty Available"}),e.jsx(i,{children:"Qty"}),e.jsx(i,{children:"Subtotal"}),e.jsx(i,{})]})}),e.jsx(we,{children:j.map((t,r)=>e.jsxs(J,{children:[e.jsx(i,{children:t[2].name}),e.jsx(i,{children:t[2].attributes.map((l,o)=>e.jsx(H,{label:l,variant:"outlined"},o))}),e.jsx(i,{children:P(R[t[2].id])}),e.jsx(i,{children:t[2].qty_available}),e.jsx(i,{children:e.jsx(q,{type:"number",style:{minWidth:"100px"},value:t[2].product_uom_qty!==0?t[2].product_uom_qty:"",onChange:l=>je(r,l.target.value)})}),e.jsx(i,{children:P(R[t[2].id]*t[2].product_uom_qty)}),e.jsx(i,{align:"right",children:e.jsx(S,{onClick:()=>xe(r),children:e.jsx(I,{icon:"eva:trash-2-outline"})})})]},r))})]})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsxs(h,{variant:"body1",fontWeight:"bold",children:["Total Product Qty: ",le]}),e.jsxs(h,{variant:"body1",fontWeight:"bold",children:["Subtotal: ",P(ae)]}),e.jsxs(h,{variant:"body1",fontWeight:"bold",children:["Total: ",P(se)]}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(T,{container:!0,spacing:2,children:e.jsx(T,{item:!0,xs:12,md:6,lg:6,children:e.jsx(q,{label:"Notes",value:M,multiline:!0,fullWidth:!0,rows:4,onChange:he})})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(T,{container:!0,spacing:2,children:e.jsx(T,{item:!0,xs:12,md:6,lg:6,children:e.jsx(q,{label:"PO Number",value:Q,fullWidth:!0,onChange:pe})})}),e.jsx("div",{style:{margin:"16px 0"}}),e.jsx(Oe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:A,loading:x,children:"Save"})]});return e.jsxs(Le,{children:[e.jsxs(b,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsxs(h,{variant:"h4",children:["Order: ",m,e.jsx(H,{label:g,color:g==="cancel"?"danger":"primary",variant:"outlined",style:{marginLeft:"10px"}})]}),(g==="draft"||g==="sent")&&e.jsxs(b,{direction:"row",spacing:2,children:[e.jsx(te,{handleCancelOrder:de}),e.jsx(Z,{handleSendOrder:ce})]})]}),be,e.jsx(ke,{})]})}re.propTypes={orderId:f.any};function Ve(){Ae();const{orderId:d}=Ce();return e.jsxs(e.Fragment,{children:[e.jsx(ve,{children:e.jsx("title",{children:" Order Detail | BEX Dropship "})}),e.jsx(re,{orderId:d})]})}export{Ve as default};