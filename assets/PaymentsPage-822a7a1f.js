import{d as h,o as m,h as _,K as S,c as w,r as y,e,t as V,a as C,b as n,w as x,J as B,k as A,p as I,u as $,Q as F,E as N,g as J,F as k,i as M,n as j,A as H}from"./index-7a1b065c.js";import{P as D,u as R}from"./payment-cards-5a077937.js";import{u as O}from"./useModal-b32e5a1a.js";import{u as U}from"./useToast-e379f7bf.js";import{u as Y}from"./useForm-c9dd0d22.js";import{s as G}from"./utils-b2fc192b.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAACmElEQVR4XtWXvWtTYRSHf2hFEfELHUQHxeIoRXEodKgO1hCDtdhC8BPFQRGsKFaLGAcHJwXF5qOrLln8GBQrgqCCgv4DoqAIIjhYKBSU1uPvTXJjcs5NetLi4IEHSrnheXpv7/vmBRwj6G4ToIscI4PkJEmRtfpaPXIHS6WAhORxggxKFsdlFDukiGX62pZGkJnHgAHykPwiEsMUeU3OkuXVz5ajTjPoBZFYcpjgNU8Ym5Zi//xa94xDWQd5FhPUjA9kF+U7yXsT1IwCXspttOuO2KEkSSZiAnwM47cJ8DHJxz+ge+qGgp45xe0he8l5aLmXcd7No7qrNBRsIl+N1EsS5cAo8hq03EcO3+Um1um+EHjfSL104m9cRJpkYQM8FDCm48ISYsVedFzEBVi5lxH01gbeM1IvW2HDIg4gPDIr9/EgiguL8Gcj9pKCDYsI/4vXocU+CnwfilgSAteTaSP2oqM0GVi5j2lGdoTA7UbaCjpIM/slJ9zF3SGw10hbQQdpzsCKvWRx5N/fwXOwYi85pELgRmn8ZWBmdJDmMqzYyyg2h8BF5IsRe6ndQeK4ASv2EHaUR1gYLTVFI/bSCRsVcQhW7GUUj2sX6oQRt4IOi5jLGzyCZDWwEhm+mFq5hy7YuDRmvxfn8bwurhK4hnwzci96R7kKLfXyg2wh/ZLpbtORB8m4kXtJoBw3BC31MsVHe7jUkseCurhoKNpHJo3cy3BV1io/+eamdU/sUNROXhl5cz5J+ONypXPJx5iAxhTwlmzTHU2nctTcT8ak+R19Ry6SVdXP3sUKCofIGwmbvg4qE37/NGxn0uhxeofylRJObOXz8CUpHzP7yGp9rR65hQ1c0/pKx9AsrpBT/LmHUYv1tf/l/AEgOVkFvc0zBQAAAABJRU5ErkJggg==",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAD9ElEQVR4Xn1Wa2hVRxA+9zzuuU3V1hRKKVhfIYKtJM3Z3XOj/SGo4PuHSKFUVESKDwQR7Q//1J8tfdGKgqjUF4qCKIL6wzf6QyEk3t09SRRfoIgPVBBBpNDbmZvscXZPkg+G3DPzzexkd2Z2vZjp3wOuLg0loVBbvJ/qvuegpeVMHDB1gnK/mCbHxomaTHU+139Sv9GirzUU2Taw3Yi4euYL9RZ+30OuJ/SPlGsQJXpFSahTJmZZqNMux6tUeyb4TG8Ewh2QOpWoQ/7g8gOefU85ZS7PNgxCL6d62IBtxsdnaosb2+Jy1W+4OcTNVpeH4n3dPd6lDqJeihO9g5J9oXe6rEDok07Qb1EPO7rX1utFqI+YWuUmURS9y16l4benyMMNU0tcbo5QyE5K9rnU1I6nZQUU+r6xQVlcozaP689QHwj1gOohsb/LafdUj9WmhLw2NxJ6eyGpTt0MJ/jYTR4lhLK3uBamHisD6RVxeJUk9ciYQyZ/sYNlW1H/edLVBN//5vpEPkJ93HbeLYM7JtZIiLhcSf1gc57n30JfdfkWoEEvUufmtptfDljqpUDI+8T2pjK9t1GPTfwWtxIV8jDqK9U++8Q4/nPZr5OSro/er1iEz1WP4WOPRULuIzFet8w7E7s+OSKu11mLMv0d6uHvYkuf6n+MT5joTVaSXG02NuijzPLj2FvyUcT0esOhCEWfVcYez5b5qdps6Zic5PrlgJpssxbj2V+oHxydJIgWxidM1XFq+6Cjt2psFdE/EXrrCbXnsYW+7U2vfWq4CNyY93b1BMvTzcnjai31KSCw++CS27xwSt2UD993if0/b0b/aGpH/yhRh2gMIpcpj9pg5w80DOn1MSWu3hl9LHr/MD5DAmb9QRLoeSj0zzRwlNRWGO6YzofNVkJCDdtkH7brdmhIafFBPHGjFe1+VeFFl+tjGMUzZ9ZDFLgYu40epqO1gQXESbbBWYSciH6Gx2q4bm/4IhvYteFRgpJ6Sn2gpmcPMSRGlCTpyqdjAe5R2qJ3U27I1FZqNzMdY5SZXkq5CHhSfIJjlvqMYrWvoK6XFdcaXrxUf+PGtgCkh64TCo5GmyevUHtTtbcD9TFTcxo6uMhKQl6Aej4YJfJoYPdX/owopeqcu9ZIAj21huZRgJ9afTAgMIlcHiTwknBeGD0k/FvB3xE4rccVUZvo3hcwFCRdYxAl0OcXGtzo+12ChUqHfRs2hMn5lNMk+pnDuWxscBkdKfhbsdTFxpPCs0cnip8WH5EI+lyB38q124D3CBz/wlyYnOdSvPaejyknnlGbYtk75TSsbXyZGgmqejXoxlFahWezaBz3bjBo3AeGl6gF/wPWpZuJJ0cxgAAAAABJRU5ErkJggg==",K={class:"w-20 h-12 bg-backgroundElement rounded flex justify-center items-center align-bottom"},Q={key:0,alt:"Mastercard Logo",src:X},W={key:1,alt:"Visa Logo",src:L},Z=h({__name:"PaymentSystem",props:{type:{}},setup(c){const r=c;return(p,u)=>(m(),_("div",K,[r.type==="mastercard"?(m(),_("img",Q)):S("",!0),r.type==="visa"?(m(),_("img",W)):S("",!0)]))}}),ee={class:"min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"},se={class:"flex flex-col gap-2 flex-grow"},te={class:"flex items-center"},le={class:"text-lg font-bold"},ae={class:"flex gap-4 items-center"},oe={class:"text-[15px] font-bold mb-2 capitalize"},ne={class:"text-secondary"},de={class:"w-full sm:w-auto flex-none flex sm:block"},re=h({__name:"PaymentCardListItem",props:{card:{}},emits:["edit","remove"],setup(c,{emit:r}){const p=r,u=c,i=w(()=>u.card),l=w(()=>{const s=u.card.expirationDate;return`${s[0]}${s[1]}/${s[2]}${s[3]}`});return(s,v)=>{const o=y("VaBadge"),t=y("VaButton");return m(),_("div",ee,[e("div",se,[e("div",te,[e("div",le,V(i.value.name),1),i.value.isPrimary?(m(),C(o,{key:0,class:"ml-2",color:"danger",text:"Primary"})):S("",!0)]),e("div",ae,[n(Z,{type:i.value.paymentSystem},null,8,["type"]),e("div",null,[e("div",oe,V(i.value.paymentSystem)+" "+V(i.value.cardNumberMasked),1),e("div",ne,"Card expires at "+V(l.value),1)])])]),e("div",de,[n(t,{class:"mr-2 flex-grow",preset:"primary",onClick:v[0]||(v[0]=g=>p("edit"))},{default:x(()=>[B("Edit")]),_:1}),n(t,{icon:"mso-delete",preset:"primary","aria-label":"Remove",onClick:v[1]||(v[1]=g=>p("remove"))})])])}}}),ie={class:"flex justify-end gap-3"},q=h({__name:"PaymentCardEdit",props:{paymentCard:{},submitText:{}},emits:["save","cancel"],setup(c,{emit:r}){const{validate:p}=Y("form"),u=r,i=c,l=Object.values(D),s=A({...i.paymentCard});I(()=>i.paymentCard,o=>{s.value={...o}},{deep:!0});const v=()=>{p()&&u("save",{...s.value,cardNumberMasked:s.value.cardNumberMasked.replace(/\d{12}(.*)/g,"****$1")})};return(o,t)=>{const g=y("VaInput"),b=y("VaCheckbox"),f=y("VaSelect"),d=y("VaButton"),P=y("VaForm");return m(),C(P,{ref:"form",onSubmit:F(v,["prevent"])},{default:x(()=>[n(g,{modelValue:s.value.name,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value.name=a),rules:[a=>!!a||"Card Name field is required"],class:"mb-4",label:"Card Name"},null,8,["modelValue","rules"]),n(b,{modelValue:s.value.isPrimary,"onUpdate:modelValue":t[1]||(t[1]=a=>s.value.isPrimary=a),class:"mb-4",label:"Primary Card"},null,8,["modelValue"]),n(f,{modelValue:s.value.paymentSystem,"onUpdate:modelValue":t[2]||(t[2]=a=>s.value.paymentSystem=a),options:$(l),rules:[a=>!!a||"Payment System field is required"],class:"mb-4",label:"Payment System"},null,8,["modelValue","options","rules"]),n(g,{modelValue:s.value.cardNumberMasked,"onUpdate:modelValue":t[3]||(t[3]=a=>s.value.cardNumberMasked=a),rules:[a=>!!a||"Card Number field is required"],class:"mb-4",label:"Card Number",mask:"creditCard",placeholder:"#### #### #### ####"},null,8,["modelValue","rules"]),n(g,{modelValue:s.value.expirationDate,"onUpdate:modelValue":t[4]||(t[4]=a=>s.value.expirationDate=a),mask:{date:!0,datePattern:["m","y"]},rules:[a=>!!a||"Expiration Date field is required",a=>/^\d{4}$/.test(a)||"Expiration Date must be in MM/YY format"],class:"mb-4",label:"Expiration Date"},null,8,["modelValue","rules"]),e("div",ie,[n(d,{color:"secondary",preset:"secondary",onClick:t[5]||(t[5]=a=>u("cancel"))},{default:x(()=>[B("Cancel")]),_:1}),n(d,{onClick:v},{default:x(()=>[B(V(o.submitText),1)]),_:1})])]),_:1},8,["onSubmit"])}}}),ue=e("h3",{class:"va-h4 mb-4"},"Add payment card",-1),me=h({__name:"PaymentCardCreateModal",emits:["close"],setup(c,{emit:r}){const p=A(!1),u=r,i=R(),{init:l}=U(),s=N({id:Math.ceil(Math.random()*100)+"",name:"",isPrimary:!1,paymentSystem:D.Visa,cardNumberMasked:"",expirationDate:""}),v=o=>{p.value=!1,i.create(o),l({message:"You've successfully created a new payment card",color:"success"}),u("close")};return(o,t)=>{const g=y("VaModal");return m(),C(g,{"hide-default-actions":"","model-value":"",size:"small","close-button":"",onCancel:t[1]||(t[1]=b=>u("close"))},{default:x(()=>[ue,n(q,{"payment-card":s,"submit-text":"Add Card",onCancel:t[0]||(t[0]=b=>u("close")),onSave:v},null,8,["payment-card"])]),_:1})}}}),ce=e("h3",{class:"va-h4 mb-4"},"Add payment card",-1),pe=h({__name:"PaymentCardUpdateModal",props:{paymentCard:{}},emits:["close"],setup(c,{emit:r}){const p=A(!1),{init:u}=U(),i=c,l=r,s=R(),v=A({...i.paymentCard}),o=t=>{p.value=!1,s.update(t),u({message:"You've successfully updated a payment card",color:"success"}),l("close")};return(t,g)=>{const b=y("VaModal");return m(),C(b,{"hide-default-actions":"","model-value":"",size:"small","close-button":"",onCancel:g[1]||(g[1]=f=>l("close"))},{default:x(()=>[ce,n(q,{"payment-card":v.value,"submit-text":"Save Card",onCancel:g[0]||(g[0]=f=>l("close")),onSave:o},null,8,["payment-card"])]),_:1})}}}),ve={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},ge={class:"flex flex-col gap-2 flex-grow"},fe={class:"flex gap-4"},ye=e("div",{class:"flex flex-col gap-2 flex-grow"},[e("div",{class:"text-lg font-bold leading-relaxed"},"Important note"),e("div",{class:"text-secondary text-sm leading-tight"}," Please carefully read Product Terms before adding your new payment card ")],-1),be=h({__name:"PaymentCardList",setup(c){const r=R(),p=w(()=>r.allPaymentCards),u=w(()=>r.loading),{confirm:i}=O(),l=A(!1),s=A(),{init:v}=U();r.load();const o=async b=>{i({message:"Are you really sure you want to delete this card?",size:"small",maxWidth:"380px"}).then(f=>{f&&(r.remove(b.id),v({message:"Payment card has been deleted",color:"success"}))})},{getColor:t,colorToRgba:g}=J();return(b,f)=>{const d=y("VaSkeleton"),P=y("VaButton");return m(),_(k,null,[e("div",ve,[u.value?(m(),_(k,{key:0},M(4,a=>e("div",{key:a,class:"min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"},[e("div",ge,[n(d,{class:"",height:"1.5rem",variant:"text",width:"10rem"}),e("div",fe,[n(d,{height:"3rem",variant:"rounded",width:"5rem"}),n(d,{lines:2,variant:"text"})])])])),64)):(m(),_(k,{key:1},[(m(!0),_(k,null,M(p.value,a=>(m(),C(re,{key:a.id,card:a,onEdit:E=>s.value=a,onRemove:E=>o(a)},null,8,["card","onEdit","onRemove"]))),128)),e("div",{class:"sm:h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4",style:j({backgroundColor:$(g)($(t)("primary"),.07)})},[ye,n(P,{class:"flex-none w-full sm:w-auto",onClick:f[0]||(f[0]=a=>l.value=!0)},{default:x(()=>[B("Add card")]),_:1})],4)],64))]),l.value?(m(),C(me,{key:0,onClose:f[1]||(f[1]=a=>l.value=!1)})):S("",!0),s.value?(m(),C(pe,{key:1,"payment-card":s.value,onClose:f[2]||(f[2]=a=>s.value=void 0)},null,8,["payment-card"])):S("",!0)],64)}}}),xe={class:"min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"},_e={class:"flex flex-col gap-2 flex-grow"},Ce={class:"flex items-center"},Ve={class:"text-lg font-bold"},Ae={class:"text-secondary leading-5"},he={class:"w-full sm:w-auto flex-none flex sm:block"},ke=h({__name:"BillingAddressListItem",props:{billingAddress:{}},emits:["edit","remove"],setup(c,{emit:r}){const p=r,u=c,i=w(()=>u.billingAddress);return(l,s)=>{const v=y("VaBadge"),o=y("VaButton");return m(),_("div",xe,[e("div",_e,[e("div",Ce,[e("div",Ve,V(i.value.name),1),i.value.isPrimary?(m(),C(v,{key:0,class:"ml-2",color:"danger",text:"Primary"})):S("",!0)]),e("div",Ae,[e("div",null,V(i.value.street),1),e("div",null,V(i.value.city)+", "+V(i.value.state)+" "+V(i.value.postalCode),1),e("div",null,V(i.value.country),1)])]),e("div",he,[n(o,{class:"mr-2 flex-grow",preset:"primary",onClick:s[0]||(s[0]=t=>p("edit"))},{default:x(()=>[B("Edit")]),_:1}),n(o,{icon:"mso-delete",preset:"primary","aria-label":"Remove",onClick:s[1]||(s[1]=t=>p("remove"))})])])}}}),Se={class:"flex justify-end gap-3"},z=h({__name:"BillingAddressEdit",props:{billingAddress:{},submitText:{}},emits:["save","cancel"],setup(c,{emit:r}){const{validate:p}=Y("form"),u=r,i=c,l=A({...i.billingAddress});I(()=>i.billingAddress,v=>{l.value={...v}},{deep:!0});const s=()=>{p()&&u("save",l.value)};return(v,o)=>{const t=y("VaInput"),g=y("VaCheckbox"),b=y("VaButton"),f=y("VaForm");return m(),C(f,{ref:"form",onSubmit:F(s,["prevent"])},{default:x(()=>[n(t,{modelValue:l.value.name,"onUpdate:modelValue":o[0]||(o[0]=d=>l.value.name=d),rules:[d=>!!d||"Name field is required"],class:"mb-4",label:"Name"},null,8,["modelValue","rules"]),n(g,{modelValue:l.value.isPrimary,"onUpdate:modelValue":o[1]||(o[1]=d=>l.value.isPrimary=d),class:"mb-4",label:"Primary Address"},null,8,["modelValue"]),n(t,{modelValue:l.value.street,"onUpdate:modelValue":o[2]||(o[2]=d=>l.value.street=d),rules:[d=>!!d||"Street field is required"],class:"mb-4",label:"Street"},null,8,["modelValue","rules"]),n(t,{modelValue:l.value.city,"onUpdate:modelValue":o[3]||(o[3]=d=>l.value.city=d),rules:[d=>!!d||"City field is required"],class:"mb-4",label:"City"},null,8,["modelValue","rules"]),n(t,{modelValue:l.value.state,"onUpdate:modelValue":o[4]||(o[4]=d=>l.value.state=d),rules:[d=>!!d||"State field is required"],class:"mb-4",label:"State"},null,8,["modelValue","rules"]),n(t,{modelValue:l.value.postalCode,"onUpdate:modelValue":o[5]||(o[5]=d=>l.value.postalCode=d),rules:[d=>!!d||"Postal Code field is required"],class:"mb-4",label:"Postal Code"},null,8,["modelValue","rules"]),n(t,{modelValue:l.value.country,"onUpdate:modelValue":o[6]||(o[6]=d=>l.value.country=d),rules:[d=>!!d||"Country field is required"],class:"mb-4",label:"Country"},null,8,["modelValue","rules"]),e("div",Se,[n(b,{color:"secondary",preset:"secondary",onClick:o[7]||(o[7]=d=>u("cancel"))},{default:x(()=>[B("Cancel")]),_:1}),n(b,{onClick:s},{default:x(()=>[B(V(v.submitText),1)]),_:1})])]),_:1},8,["onSubmit"])}}}),Be=async()=>(await G(1e3),[{id:"1",name:"Home address",isPrimary:!0,street:"Ap #285-7193 Ullamcorper Avenue",city:"Amesbury",state:"HI",postalCode:"93373",country:"US"},{id:"2",name:"Office address",isPrimary:!1,street:"P.O. Box 847, 8011 Nisl St.",city:"Morgantown",state:"IN",postalCode:"46160",country:"US"},{id:"3",name:"Vacation home",isPrimary:!1,street:"883-2699 Egestas Rd.",city:"Frederick",state:"NE",postalCode:"20620",country:"US"}]),T=H({id:"billingAddresses",state:()=>({billingAddresses:[],loading:!1}),getters:{allBillingAddresses:c=>c.billingAddresses},actions:{async load(){this.loading=!0,this.billingAddresses=await Be(),this.loading=!1},create(c){this.billingAddresses.unshift(c)},update(c){const r=this.billingAddresses.findIndex(p=>p.id===c.id);r!==-1&&this.billingAddresses.splice(r,1,c)},remove(c){this.billingAddresses=this.billingAddresses.filter(r=>r.id!==c)}}}),we=e("h3",{class:"va-h4 mb-4"},"Add Billing Address",-1),Ue=h({__name:"BillingAddressCreateModal",emits:["close"],setup(c,{emit:r}){const p=A(!1),u=r,i=T(),{init:l}=U(),s=N({id:Math.ceil(Math.random()*100)+"",name:"",isPrimary:!1,street:"",city:"",state:"",postalCode:"",country:""}),v=o=>{p.value=!1,i.create(o),l({message:"You've successfully created a new Billing Address",color:"success"}),u("close")};return(o,t)=>{const g=y("VaModal");return m(),C(g,{"hide-default-actions":"","model-value":"",size:"small","close-button":"",onCancel:t[1]||(t[1]=b=>u("close"))},{default:x(()=>[we,n(z,{"billing-address":s,"submit-text":"Add Address",onCancel:t[0]||(t[0]=b=>u("close")),onSave:v},null,8,["billing-address"])]),_:1})}}}),Pe=e("h3",{class:"va-h4 mb-4"},"Add Billing Address",-1),$e=h({__name:"BillingAddressUpdateModal",props:{billingAddress:{}},emits:["close"],setup(c,{emit:r}){const p=A(!1),{init:u}=U(),i=c,l=r,s=T(),v=A({...i.billingAddress}),o=t=>{p.value=!1,s.update(t),u({message:"You've successfully updated a Billing Address",color:"success"}),l("close")};return(t,g)=>{const b=y("VaModal");return m(),C(b,{"hide-default-actions":"","model-value":"",size:"small","close-button":"",onCancel:g[1]||(g[1]=f=>l("close"))},{default:x(()=>[Pe,n(z,{"billing-address":v.value,"submit-text":"Save Address",onCancel:g[0]||(g[0]=f=>l("close")),onSave:o},null,8,["billing-address"])]),_:1})}}}),Me={class:"grid md:grid-cols-2 grid-cols-1 gap-4"},Ee={class:"flex flex-col gap-2 flex-grow"},Re={class:"flex gap-4"},Te=e("div",{class:"flex flex-col gap-2 flex-grow"},[e("div",{class:"text-lg font-bold leading-relaxed"},"Important note"),e("div",{class:"text-secondary text-sm leading-tight"}," Please ensure the provided billing address matches the information on file with your financial institution to avoid any processing delays. ")],-1),Ie=h({__name:"BillingAddressList",setup(c){const r=T(),p=w(()=>r.allBillingAddresses),u=w(()=>r.loading),{confirm:i}=O(),l=A(!1),s=A(),{init:v}=U();r.load();const o=async b=>{i({message:"Are you really sure you want to delete this address?",size:"small",maxWidth:"380px"}).then(f=>{f&&(r.remove(b.id),v({message:"Billing Address has been deleted",color:"success"}))})},{getColor:t,colorToRgba:g}=J();return(b,f)=>{const d=y("VaSkeleton"),P=y("VaButton");return m(),_(k,null,[e("div",Me,[u.value?(m(),_(k,{key:0},M(4,a=>e("div",{key:a,class:"min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-row items-center gap-6"},[e("div",Ee,[n(d,{class:"",height:"1.5rem",variant:"text",width:"10rem"}),e("div",Re,[n(d,{height:"3rem",variant:"rounded",width:"5rem"}),n(d,{lines:2,variant:"text"})])])])),64)):(m(),_(k,{key:1},[(m(!0),_(k,null,M(p.value,a=>(m(),C(ke,{key:a.id,"billing-address":a,onEdit:E=>s.value=a,onRemove:E=>o(a)},null,8,["billing-address","onEdit","onRemove"]))),128)),e("div",{class:"sm:min-h-[114px] p-4 rounded-lg border border-dashed border-primary flex flex-col sm:flex-row items-start sm:items-center gap-4",style:j({backgroundColor:$(g)($(t)("primary"),.07)})},[Te,n(P,{class:"flex-none w-full sm:w-auto",onClick:f[0]||(f[0]=a=>l.value=!0)},{default:x(()=>[B("New address")]),_:1})],4)],64))]),l.value?(m(),C(Ue,{key:0,onClose:f[1]||(f[1]=a=>l.value=!1)})):S("",!0),s.value?(m(),C($e,{key:1,"billing-address":s.value,onClose:f[2]||(f[2]=a=>s.value=void 0)},null,8,["billing-address"])):S("",!0)],64)}}}),Fe=e("h1",{class:"page-title"},"Payment methods",-1),Ne=e("div",{class:"text-2xl font-bold leading-5 mb-6"},"My cards",-1),Je=e("div",{class:"text-2xl font-bold leading-5 mb-6"},"Billing address",-1),je=e("div",{class:"space-y-2 mt-6"},[e("div",{class:"text-lg font-bold mb-2"},"Tax location"),e("div",{class:"space-y-1"},[e("div",{class:"text-sm text-gray-500"},"United States - 10% VAT"),e("div",{class:"text-sm text-primary underline"},"More info")])],-1),Ge=h({__name:"PaymentsPage",setup(c){return(r,p)=>{const u=y("VaCardContent"),i=y("VaCard");return m(),_(k,null,[Fe,n(i,{class:"mb-6"},{default:x(()=>[n(u,null,{default:x(()=>[Ne,n(be)]),_:1})]),_:1}),n(i,{class:"mb-6"},{default:x(()=>[n(u,null,{default:x(()=>[Je,n(Ie),je]),_:1})]),_:1})],64)}}});export{Ge as default};
//# sourceMappingURL=PaymentsPage-822a7a1f.js.map
