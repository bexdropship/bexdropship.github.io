import{j as e,O as J,T as k,P as r,h as Y,B as _,n as E,r as c,t as Z,Q as ee,K as te,I as ne,R as re,C as ae,E as oe,F as se,S as ie,U as le,G as ce,W as de}from"./index-DzKCi557.js";import{T,a as d,b as ue,c as pe,d as he,e as xe,f as ge,g as fe,h as me}from"./search-fill-DYA922h7.js";import{O as be}from"./Select-B1sm-onA.js";import{C as je}from"./Container-1mRqyzEp.js";import{C as ye}from"./Card-ByWKekwp.js";import{u as _e}from"./use-auth-BB-nlgyt.js";const Te={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Re(t,n,l){return t?Math.max(0,(1+t)*n-l):0}function F({query:t}){return e.jsx(T,{children:e.jsx(d,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(J,{sx:{textAlign:"center"},children:[e.jsx(k,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(k,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}F.propTypes={query:r.string};const Ce=Y(_)(({theme:t,ownerState:n})=>{const l=t.palette.mode==="light",s=n.variant==="filled",i=n.variant==="outlined",o=n.variant==="soft",h={...n.color==="default"&&{...s&&{color:l?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...i&&{backgroundColor:"transparent",color:t.palette.text.primary,border:`2px solid ${t.palette.text.primary}`},...o&&{color:t.palette.text.secondary,backgroundColor:E(t.palette.grey[500],.16)}}},g={...n.color!=="default"&&{...s&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...i&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:`2px solid ${t.palette[n.color].main}`},...o&&{color:t.palette[n.color][l?"dark":"light"],backgroundColor:E(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...h,...g}}),$=c.forwardRef(({children:t,color:n="default",variant:l="soft",startIcon:s,endIcon:i,sx:o,...h},g)=>{const m=Z(),f={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return e.jsxs(Ce,{ref:g,component:"span",ownerState:{color:n,variant:l},sx:{...s&&{pl:.75},...i&&{pr:.75},...o},theme:m,...h,children:[s&&e.jsxs(_,{sx:{mr:.75,...f},children:[" ",s," "]}),t,i&&e.jsxs(_,{sx:{ml:.75,...f},children:[" ",i," "]})]})});$.propTypes={children:r.node,endIcon:r.object,startIcon:r.object,sx:r.object,variant:r.oneOf(["filled","outlined","ghost","soft"]),color:r.oneOf(["default","primary","secondary","info","success","warning","error"])};function B({name:t,customer:n,create_date:l,amount_untaxed:s,amount_tax:i,amount_total:o,state:h,x_studio_notes:g,client_order_ref:m,ship_date:f,ship_tracking_number:R,handleClick:x}){const b=p=>`$${p.toFixed(2)}`;return e.jsxs(T,{hover:!0,tabIndex:-1,onClick:x,children:[e.jsx(d,{children:t}),e.jsx(d,{children:n}),e.jsx(d,{children:l}),e.jsx(d,{children:b(s)}),e.jsx(d,{children:b(i)}),e.jsx(d,{children:b(o)}),e.jsx(d,{children:e.jsx($,{color:h!=="draft"&&"error"||"success",children:h})}),e.jsx(d,{children:g}),e.jsx(d,{children:m}),e.jsx(d,{children:f}),e.jsx(d,{children:R})]})}B.propTypes={name:r.any,customer:r.any,create_date:r.any,amount_untaxed:r.any,amount_tax:r.any,amount_total:r.any,state:r.any,x_studio_notes:r.any,client_order_ref:r.any,ship_date:r.any,ship_tracking_number:r.any,handleClick:r.func};function I({order:t,orderBy:n,headLabel:l,onRequestSort:s}){const i=o=>h=>{s(h,o)};return e.jsx(ue,{children:e.jsx(T,{children:l.map(o=>e.jsx(d,{align:o.align||"left",sortDirection:n===o.id?t:!1,sx:{width:o.width,minWidth:o.minWidth},children:e.jsxs(pe,{hideSortIcon:!0,active:n===o.id,direction:n===o.id?t:"desc",onClick:i(o.id),children:[o.label,n===o.id?e.jsx(_,{sx:{...Te},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},o.id))})})}I.propTypes={order:r.oneOf(["asc","desc"]),orderBy:r.string,headLabel:r.array,onRequestSort:r.func};function D({emptyRows:t,height:n}){return t?e.jsx(T,{sx:{...n&&{height:n*t}},children:e.jsx(d,{colSpan:9})}):null}D.propTypes={emptyRows:r.number,height:r.number};function W({filterName:t,onFilterName:n,onClickSearch:l,onHitEnter:s}){return e.jsx(ee,{sx:{height:96,display:"flex",justifyContent:"space-between",p:i=>i.spacing(0,1,0,3)},children:e.jsx(be,{value:t,onChange:n,onKeyDown:s,placeholder:"Search order...",endAdornment:e.jsx(te,{position:"end",children:e.jsx(ne,{onClick:l,edge:"end",children:e.jsx(re,{icon:he,sx:{color:"text.disabled",width:20,height:20}})})})})})}W.propTypes={filterName:r.string,onFilterName:r.func,onClickSearch:r.func,onHitEnter:r.func};function Se(){const t=ae(),[n,l]=c.useState([]),[s,i]=c.useState(0),[o,h]=c.useState(0),[g,m]=c.useState("asc"),[f,R]=c.useState("name"),[x,b]=c.useState(""),[p,H]=c.useState(25),[L,q]=c.useState(0),O=c.useRef(n),v=c.useRef(p),P=c.useRef(s),N=c.useRef(x);c.useEffect(()=>{O.current=n,v.current=p,P.current=s,N.current=x,C(P.current,v.current,O.current,N.current)},[]);const C=(a,u,j,A)=>{console.log("Fetching Orders");const X=a+1;let S=`${ce.baseURL}/api-proxy/proxy?method=get&resource=orders&page=${X}&page_size=${u}`;A&&(S+=`&name=${A}`),console.log(S),oe.get(S,{headers:{Authorization:`Bearer ${se.get("jwt")}`}}).then(y=>{console.log(y.data.data),l([...j,...y.data.data]),q(y.data.count)}).catch(y=>{console.error("Error fetching orders:",y)})},z=(a,u)=>{u!==""&&(m(f===u&&g==="asc"?"desc":"asc"),R(u))},U=(a,u)=>{i(u);const j=p*u;j>o&&(h(j),C(u,p,n,x))},V=a=>{i(0),H(parseInt(a.target.value,10))},M=a=>{b(a.target.value)},K=a=>{a.key==="Enter"&&w()},w=a=>{i(0),C(s,p,[],x)},G=(a,u)=>{t.push(`/orders/${u}`)},Q=!n.length&&!!x;return e.jsxs(je,{children:[e.jsx(ie,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(k,{variant:"h4",children:"Orders"})}),e.jsxs(ye,{children:[e.jsx(W,{filterName:x,onFilterName:M,onClickSearch:w,onHitEnter:K}),e.jsx(le,{children:e.jsx(xe,{sx:{overflow:"unset"},children:e.jsxs(ge,{sx:{minWidth:800},children:[e.jsx(I,{order:g,orderBy:f,rowCount:n.length,onRequestSort:z,headLabel:[{id:"name",label:"Name"},{id:"shipping_addresses",label:"Shipping Addresses"},{id:"create_date",label:"Create Date"},{id:"amount_untaxed",label:"Amount Untaxed"},{id:"amount_tax",label:"Amount Tax"},{id:"amount_total",label:"Amount Total"},{id:"state",label:"State"},{id:"x_studio_notes",label:"Notes"},{id:"client_order_ref",label:"PO Number"},{id:"ship_date",label:"Ship Date"},{id:"ship_tracking_number",label:"Tracking #"}]}),e.jsxs(fe,{children:[n.slice(s*p,s*p+p).map(a=>e.jsx(B,{name:a.name,customer:a.customer_id.name,create_date:a.create_date,amount_untaxed:a.amount_untaxed,amount_tax:a.amount_tax,amount_total:a.amount_total,state:a.state,x_studio_notes:a.x_studio_notes,client_order_ref:a.client_order_ref,ship_date:a.ship_date,ship_tracking_number:a.ship_tracking_number,handleClick:u=>G(u,a.id)},a.id)),e.jsx(D,{height:77,emptyRows:Re(s,p,n.length)}),Q&&e.jsx(F,{query:x})]})]})})}),e.jsx(me,{page:s,component:"div",count:L,rowsPerPage:p,onPageChange:U,rowsPerPageOptions:[25],onRowsPerPageChange:V})]})]})}function Ae(){return _e(),e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx("title",{children:" Order | BEX Dropship "})}),e.jsx(Se,{})]})}export{Ae as default};
