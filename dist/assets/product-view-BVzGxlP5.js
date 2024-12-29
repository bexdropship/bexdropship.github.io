import{a4 as oa,j as o,k as la,g as ra,h as Q,l as i,_ as k,n as m,r as p,i as ta,a as na,a5 as ia,a6 as G,b as S,f as ca,G as sa,T as w,P as d,B as da,H as pa,I as ua,C as ba,J as ga,y as fa,z as va,S as ya,K as Ca,A as xa}from"./index-BVww4E_S.js";import{T as B,a as $,b as $a,c as ha,s as ma,d as ka,e as ja,f as Ia,g as Pa}from"./search-fill-CEl463d9.js";import{O as Ra}from"./Select-CyHo8fu1.js";import{C as Ta}from"./Container-BQkNYp94.js";import{C as Sa}from"./Card-SoKCYwmS.js";const Oa=oa(o.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function za(a){return ra("MuiChip",a)}const _a=la("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),l=_a,Da=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Na=a=>{const{classes:e,disabled:c,size:r,color:n,iconColor:s,onDelete:f,clickable:g,variant:v}=a,x={root:["root",v,c&&"disabled",`size${i(r)}`,`color${i(n)}`,g&&"clickable",g&&`clickableColor${i(n)}`,f&&"deletable",f&&`deletableColor${i(n)}`,`${v}${i(n)}`],label:["label",`label${i(r)}`],avatar:["avatar",`avatar${i(r)}`,`avatarColor${i(n)}`],icon:["icon",`icon${i(r)}`,`iconColor${i(s)}`],deleteIcon:["deleteIcon",`deleteIcon${i(r)}`,`deleteIconColor${i(n)}`,`deleteIcon${i(v)}Color${i(n)}`]};return ca(x,za,e)},Ea=Q("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:c}=a,{color:r,iconColor:n,clickable:s,onDelete:f,size:g,variant:v}=c;return[{[`& .${l.avatar}`]:e.avatar},{[`& .${l.avatar}`]:e[`avatar${i(g)}`]},{[`& .${l.avatar}`]:e[`avatarColor${i(r)}`]},{[`& .${l.icon}`]:e.icon},{[`& .${l.icon}`]:e[`icon${i(g)}`]},{[`& .${l.icon}`]:e[`iconColor${i(n)}`]},{[`& .${l.deleteIcon}`]:e.deleteIcon},{[`& .${l.deleteIcon}`]:e[`deleteIcon${i(g)}`]},{[`& .${l.deleteIcon}`]:e[`deleteIconColor${i(r)}`]},{[`& .${l.deleteIcon}`]:e[`deleteIcon${i(v)}Color${i(r)}`]},e.root,e[`size${i(g)}`],e[`color${i(r)}`],s&&e.clickable,s&&r!=="default"&&e[`clickableColor${i(r)})`],f&&e.deletable,f&&r!=="default"&&e[`deletableColor${i(r)}`],e[v],e[`${v}${i(r)}`]]}})(({theme:a,ownerState:e})=>{const c=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return k({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:c,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:k({marginLeft:5,marginRight:-6},e.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},e.iconColor===e.color&&k({color:a.vars?a.vars.palette.Chip.defaultIconColor:c},e.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:k({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:m(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:m(a.palette.text.primary,.4)}},e.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},e.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[e.color].contrastTextChannel} / 0.7)`:m(a.palette[e.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[e.color].contrastText}})},e.size==="small"&&{height:24},e.color!=="default"&&{backgroundColor:(a.vars||a).palette[e.color].main,color:(a.vars||a).palette[e.color].contrastText},e.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:m(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},e.onDelete&&e.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}})},({theme:a,ownerState:e})=>k({},e.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:m(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:m(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},e.clickable&&e.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[e.color].dark}}),({theme:a,ownerState:e})=>k({},e.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},e.variant==="outlined"&&e.color!=="default"&&{color:(a.vars||a).palette[e.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.7)`:m(a.palette[e.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:m(a.palette[e.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:m(a.palette[e.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[e.color].mainChannel} / 0.7)`:m(a.palette[e.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[e.color].main}}})),La=Q("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,e)=>{const{ownerState:c}=a,{size:r}=c;return[e.label,e[`label${i(r)}`]]}})(({ownerState:a})=>k({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.size==="small"&&{paddingLeft:8,paddingRight:8}));function J(a){return a.key==="Backspace"||a.key==="Delete"}const Fa=p.forwardRef(function(e,c){const r=ta({props:e,name:"MuiChip"}),{avatar:n,className:s,clickable:f,color:g="default",component:v,deleteIcon:x,disabled:j=!1,icon:h,label:C,onClick:R,onDelete:u,onKeyDown:N,onKeyUp:E,size:U="medium",variant:L="filled",tabIndex:F,skipFocusWhenDisabled:V=!1}=r,M=na(r,Da),P=p.useRef(null),W=ia(P,c),K=b=>{b.stopPropagation(),u&&u(b)},H=b=>{b.currentTarget===b.target&&J(b)&&b.preventDefault(),N&&N(b)},q=b=>{b.currentTarget===b.target&&(u&&J(b)?u(b):b.key==="Escape"&&P.current&&P.current.blur()),E&&E(b)},O=f!==!1&&R?!0:f,T=O||u?G:v||"div",z=k({},r,{component:T,disabled:j,size:U,color:g,iconColor:p.isValidElement(h)&&h.props.color||g,onDelete:!!u,clickable:O,variant:L}),t=Na(z),y=T===G?k({component:v||"div",focusVisibleClassName:t.focusVisible},u&&{disableRipple:!0}):{};let I=null;u&&(I=x&&p.isValidElement(x)?p.cloneElement(x,{className:S(x.props.className,t.deleteIcon),onClick:K}):o.jsx(Oa,{className:S(t.deleteIcon),onClick:K}));let _=null;n&&p.isValidElement(n)&&(_=p.cloneElement(n,{className:S(t.avatar,n.props.className)}));let A=null;return h&&p.isValidElement(h)&&(A=p.cloneElement(h,{className:S(t.icon,h.props.className)})),o.jsxs(Ea,k({as:T,className:S(t.root,s),disabled:O&&j?!0:void 0,onClick:R,onKeyDown:H,onKeyUp:q,ref:W,tabIndex:V&&j?-1:F,ownerState:z},y,M,{children:[_||A,o.jsx(La,{className:S(t.label),ownerState:z,children:C}),I]}))}),Va=Fa,Ma={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Ka(a,e,c){return a?Math.max(0,(1+a)*e-c):0}function X({query:a}){return o.jsx(B,{children:o.jsx($,{align:"center",colSpan:6,sx:{py:3},children:o.jsxs(sa,{sx:{textAlign:"center"},children:[o.jsx(w,{variant:"h6",paragraph:!0,children:"Not found"}),o.jsxs(w,{variant:"body2",children:["No results found for  ",o.jsxs("strong",{children:['"',a,'"']}),".",o.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}X.propTypes={query:d.string};function Y({emptyRows:a,height:e}){return a?o.jsx(B,{sx:{...e&&{height:e*a}},children:o.jsx($,{colSpan:9})}):null}Y.propTypes={emptyRows:d.number,height:d.number};function Z({id:a,default_code:e,name:c,category:r,type:n,lst_price:s,description_sale:f,attributes:g,virtual_available:v,qty_available:x,onSelect:j}){const h=C=>`$${C.toFixed(2)}`;return o.jsxs(B,{hover:!0,tabIndex:-1,onClick:()=>j({id:a,default_code:e,name:c,category:r,type:n,lst_price:s,description_sale:f,attributes:g,virtual_available:v,qty_available:x}),children:[o.jsx($,{children:e}),o.jsx($,{children:c}),o.jsx($,{children:r}),o.jsx($,{children:n}),o.jsx($,{children:h(s)}),o.jsx($,{children:f}),o.jsx($,{children:g.map((C,R)=>o.jsx(Va,{label:C,variant:"outlined"},R))}),o.jsx($,{children:x})]})}Z.propTypes={id:d.any,default_code:d.any,name:d.any,category:d.any,type:d.any,lst_price:d.any,description_sale:d.any,attributes:d.arrayOf(d.string),virtual_available:d.any,qty_available:d.any,onSelect:d.func};function aa({order:a,orderBy:e,headLabel:c,onRequestSort:r}){const n=s=>f=>{r(f,s)};return o.jsx($a,{children:o.jsx(B,{children:c.map(s=>o.jsx($,{align:s.align||"left",sortDirection:e===s.id?a:!1,sx:{width:s.width,minWidth:s.minWidth},children:o.jsxs(ha,{hideSortIcon:!0,active:e===s.id,direction:e===s.id?a:"desc",onClick:n(s.id),children:[s.label,e===s.id?o.jsx(da,{sx:{...Ma},children:a==="desc"?"sorted descending":"sorted ascending"}):null]})},s.id))})})}aa.propTypes={order:d.oneOf(["asc","desc"]),orderBy:d.string,headLabel:d.array,onRequestSort:d.func};function ea({filterName:a,onFilterName:e,onClickSearch:c,onHitEnter:r}){return o.jsx(pa,{sx:{height:96,display:"flex",justifyContent:"space-between",p:n=>n.spacing(0,1,0,3)},children:o.jsx(Ra,{value:a,onChange:e,onKeyDown:r,placeholder:"Search product...",endAdornment:o.jsx(ua,{position:"end",children:o.jsx(ba,{onClick:c,edge:"end",children:o.jsx(ga,{icon:ma,sx:{color:"text.disabled",width:20,height:20}})})})})})}ea.propTypes={filterName:d.string,onFilterName:d.func,onClickSearch:d.func,onHitEnter:d.func};function Aa({showTitle:a,onSelect:e}){const[c,r]=p.useState([]),[n,s]=p.useState(0),[f,g]=p.useState(0),[v,x]=p.useState("asc"),[j,h]=p.useState("name"),[C,R]=p.useState(""),[u,N]=p.useState(25),[E,U]=p.useState(0),L=p.useRef(c),F=p.useRef(u),V=p.useRef(n),M=p.useRef(C);p.useEffect(()=>{L.current=c,F.current=u,V.current=n,M.current=C,P(V.current,F.current,L.current,M.current)},[]);const P=(t,y,I,_)=>{console.log("Fetching Products");const A=t+1;let b=`${xa.baseURL}/api-proxy/proxy?method=get&resource=products&page=${A}&page_size=${y}`;_&&(b+=`&name=${_}`),console.log(b),fa.get(b,{headers:{Authorization:`Bearer ${va.get("jwt")}`}}).then(D=>{console.log(D.data.data),r([...I,...D.data.data]),U(D.data.count)}).catch(D=>{console.error("Error fetching products:",D)})},W=(t,y)=>{y!==""&&(x(j===y&&v==="asc"?"desc":"asc"),h(y))},K=(t,y)=>{s(y);const I=u*y;I>f&&(g(I),P(y,u,c,C))},H=t=>{s(0),N(parseInt(t.target.value,10))},q=t=>{R(t.target.value)},O=t=>{t.key==="Enter"&&T()},T=t=>{s(0),P(n,u,[],C)},z=!c.length&&!!C;return o.jsxs(Ta,{children:[a&&o.jsx(ya,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:o.jsx(w,{variant:"h4",children:"Products"})}),o.jsxs(Sa,{children:[o.jsx(ea,{filterName:C,onFilterName:q,onClickSearch:T,onHitEnter:O}),o.jsx(Ca,{children:o.jsx(ka,{sx:{overflow:"unset"},children:o.jsxs(ja,{sx:{minWidth:800},children:[o.jsx(aa,{order:v,orderBy:j,rowCount:c.length,onRequestSort:W,headLabel:[{id:"default_code",label:"Default Code"},{id:"name",label:"Name"},{id:"category",label:"Category"},{id:"type",label:"Type"},{id:"lst_price",label:"Sale Price"},{id:"description_sale",label:"Description"},{id:"attributes",label:"Attributes"},{id:"qty_available",label:"Quantity on Hand"}]}),o.jsxs(Ia,{children:[c.slice(n*u,n*u+u).map(t=>o.jsx(Z,{id:t.id,default_code:t.default_code,name:t.name,category:t.categ_id.name,type:t.type,lst_price:t.lst_price,description_sale:t.description_sale,attributes:t.product_template_attribute_value_ids.map(y=>`${y.attribute}:${y.name}`),virtual_available:t.virtual_available,qty_available:t.qty_available,onSelect:e},t.id)),o.jsx(Y,{height:77,emptyRows:Ka(n,u,c.length)}),z&&o.jsx(X,{query:C})]})]})})}),o.jsx(Pa,{page:n,component:"div",count:E,rowsPerPage:u,onPageChange:K,rowsPerPageOptions:[25],onRowsPerPageChange:H})]})]})}Aa.propTypes={showTitle:d.bool,onSelect:d.func};export{Va as C,Aa as P};
