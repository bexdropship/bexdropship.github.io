import{j as e,G as Q,T as S,P as r,h as Y,B as T,n as A,r as c,t as Z,H as ee,I as te,C as ne,J as re,w as oe,y as ae,z as se,S as ie,K as le,A as ce,W as de}from"./index-BVww4E_S.js";import{T as _,a as u,b as ue,c as pe,s as xe,d as he,e as fe,f as ge,g as me}from"./search-fill-CEl463d9.js";import{O as be}from"./Select-CyHo8fu1.js";import{C as je}from"./Container-BQkNYp94.js";import{C as ye}from"./Card-SoKCYwmS.js";import{u as Te}from"./use-auth-DyOHYEnj.js";const _e={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Re(t,n,l){return t?Math.max(0,(1+t)*n-l):0}function $({query:t}){return e.jsx(_,{children:e.jsx(u,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(Q,{sx:{textAlign:"center"},children:[e.jsx(S,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(S,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',t,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}$.propTypes={query:r.string};const Ce=Y(T)(({theme:t,ownerState:n})=>{const l=t.palette.mode==="light",s=n.variant==="filled",i=n.variant==="outlined",a=n.variant==="soft",p={...n.color==="default"&&{...s&&{color:l?t.palette.common.white:t.palette.grey[800],backgroundColor:t.palette.text.primary},...i&&{backgroundColor:"transparent",color:t.palette.text.primary,border:`2px solid ${t.palette.text.primary}`},...a&&{color:t.palette.text.secondary,backgroundColor:A(t.palette.grey[500],.16)}}},f={...n.color!=="default"&&{...s&&{color:t.palette[n.color].contrastText,backgroundColor:t.palette[n.color].main},...i&&{backgroundColor:"transparent",color:t.palette[n.color].main,border:`2px solid ${t.palette[n.color].main}`},...a&&{color:t.palette[n.color][l?"dark":"light"],backgroundColor:A(t.palette[n.color].main,.16)}}};return{height:24,minWidth:24,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:t.spacing(0,.75),fontSize:t.typography.pxToRem(12),fontWeight:t.typography.fontWeightBold,transition:t.transitions.create("all",{duration:t.transitions.duration.shorter}),...p,...f}}),E=c.forwardRef(({children:t,color:n="default",variant:l="soft",startIcon:s,endIcon:i,sx:a,...p},f)=>{const m=Z(),g={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return e.jsxs(Ce,{ref:f,component:"span",ownerState:{color:n,variant:l},sx:{...s&&{pl:.75},...i&&{pr:.75},...a},theme:m,...p,children:[s&&e.jsxs(T,{sx:{mr:.75,...g},children:[" ",s," "]}),t,i&&e.jsxs(T,{sx:{ml:.75,...g},children:[" ",i," "]})]})});E.propTypes={children:r.node,endIcon:r.object,startIcon:r.object,sx:r.object,variant:r.oneOf(["filled","outlined","ghost","soft"]),color:r.oneOf(["default","primary","secondary","info","success","warning","error"])};const Se=E;function F({name:t,customer:n,create_date:l,amount_untaxed:s,amount_tax:i,amount_total:a,state:p,x_studio_notes:f,client_order_ref:m,handleClick:g}){const b=h=>`$${h.toFixed(2)}`;return e.jsxs(_,{hover:!0,tabIndex:-1,onClick:g,children:[e.jsx(u,{children:t}),e.jsx(u,{children:n}),e.jsx(u,{children:l}),e.jsx(u,{children:b(s)}),e.jsx(u,{children:b(i)}),e.jsx(u,{children:b(a)}),e.jsx(u,{children:e.jsx(Se,{color:p!=="draft"&&"error"||"success",children:p})}),e.jsx(u,{children:f}),e.jsx(u,{children:m})]})}F.propTypes={name:r.any,customer:r.any,create_date:r.any,amount_untaxed:r.any,amount_tax:r.any,amount_total:r.any,state:r.any,x_studio_notes:r.any,client_order_ref:r.any,handleClick:r.func};function B({order:t,orderBy:n,headLabel:l,onRequestSort:s}){const i=a=>p=>{s(p,a)};return e.jsx(ue,{children:e.jsx(_,{children:l.map(a=>e.jsx(u,{align:a.align||"left",sortDirection:n===a.id?t:!1,sx:{width:a.width,minWidth:a.minWidth},children:e.jsxs(pe,{hideSortIcon:!0,active:n===a.id,direction:n===a.id?t:"desc",onClick:i(a.id),children:[a.label,n===a.id?e.jsx(T,{sx:{..._e},children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},a.id))})})}B.propTypes={order:r.oneOf(["asc","desc"]),orderBy:r.string,headLabel:r.array,onRequestSort:r.func};function I({emptyRows:t,height:n}){return t?e.jsx(_,{sx:{...n&&{height:n*t}},children:e.jsx(u,{colSpan:9})}):null}I.propTypes={emptyRows:r.number,height:r.number};function H({filterName:t,onFilterName:n,onClickSearch:l,onHitEnter:s}){return e.jsx(ee,{sx:{height:96,display:"flex",justifyContent:"space-between",p:i=>i.spacing(0,1,0,3)},children:e.jsx(be,{value:t,onChange:n,onKeyDown:s,placeholder:"Search order...",endAdornment:e.jsx(te,{position:"end",children:e.jsx(ne,{onClick:l,edge:"end",children:e.jsx(re,{icon:xe,sx:{color:"text.disabled",width:20,height:20}})})})})})}H.propTypes={filterName:r.string,onFilterName:r.func,onClickSearch:r.func,onHitEnter:r.func};function ve(){const t=oe(),[n,l]=c.useState([]),[s,i]=c.useState(0),[a,p]=c.useState(0),[f,m]=c.useState("asc"),[g,b]=c.useState("name"),[h,L]=c.useState(""),[x,W]=c.useState(25),[z,q]=c.useState(0),v=c.useRef(n),O=c.useRef(x),P=c.useRef(s),k=c.useRef(h);c.useEffect(()=>{v.current=n,O.current=x,P.current=s,k.current=h,R(P.current,O.current,v.current,k.current)},[]);const R=(o,d,j,N)=>{console.log("Fetching Orders");const X=o+1;let C=`${ce.baseURL}/api-proxy/proxy?method=get&resource=orders&page=${X}&page_size=${d}`;N&&(C+=`&name=${N}`),console.log(C),ae.get(C,{headers:{Authorization:`Bearer ${se.get("jwt")}`}}).then(y=>{console.log(y.data.data),l([...j,...y.data.data]),q(y.data.count)}).catch(y=>{console.error("Error fetching orders:",y)})},D=(o,d)=>{d!==""&&(m(g===d&&f==="asc"?"desc":"asc"),b(d))},V=(o,d)=>{i(d);const j=x*d;j>a&&(p(j),R(d,x,n,h))},M=o=>{i(0),W(parseInt(o.target.value,10))},U=o=>{L(o.target.value)},K=o=>{o.key==="Enter"&&w()},w=o=>{i(0),R(s,x,[],h)},G=(o,d)=>{t.push(`/orders/${d}`)},J=!n.length&&!!h;return e.jsxs(je,{children:[e.jsx(ie,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:e.jsx(S,{variant:"h4",children:"Orders"})}),e.jsxs(ye,{children:[e.jsx(H,{filterName:h,onFilterName:U,onClickSearch:w,onHitEnter:K}),e.jsx(le,{children:e.jsx(he,{sx:{overflow:"unset"},children:e.jsxs(fe,{sx:{minWidth:800},children:[e.jsx(B,{order:f,orderBy:g,rowCount:n.length,onRequestSort:D,headLabel:[{id:"name",label:"Name"},{id:"customer",label:"Customer"},{id:"create_date",label:"Create Date"},{id:"amount_untaxed",label:"Amount Untaxed"},{id:"amount_tax",label:"Amount Tax"},{id:"amount_total",label:"Amount Total"},{id:"state",label:"State"},{id:"x_studio_notes",label:"Notes"},{id:"client_order_ref",label:"PO Number"}]}),e.jsxs(ge,{children:[n.slice(s*x,s*x+x).map(o=>e.jsx(F,{name:o.name,customer:o.customer_id.name,create_date:o.create_date,amount_untaxed:o.amount_untaxed,amount_tax:o.amount_tax,amount_total:o.amount_total,state:o.state,x_studio_notes:o.x_studio_notes,client_order_ref:o.client_order_ref,handleClick:d=>G(d,o.id)},o.id)),e.jsx(I,{height:77,emptyRows:Re(s,x,n.length)}),J&&e.jsx($,{query:h})]})]})})}),e.jsx(me,{page:s,component:"div",count:z,rowsPerPage:x,onPageChange:V,rowsPerPageOptions:[25],onRowsPerPageChange:M})]})]})}function $e(){return Te(),e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx("title",{children:" Order | BEX Sales "})}),e.jsx(ve,{})]})}export{$e as default};
