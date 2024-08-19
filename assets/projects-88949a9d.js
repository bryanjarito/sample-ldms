import{k as v,p as g,u as b,l as S,x as k,Y as L,C as P,Z as q,$ as A}from"./index-7a1b065c.js";import{s as h}from"./utils-b2fc192b.js";function x(e){return q()?(A(e),!0):!1}function F(e){return typeof e=="function"?e():b(e)}const R=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const T=e=>typeof e<"u",D=Object.prototype.toString,H=e=>D.call(e)==="[object Object]",J=()=>{};function w(e,t){function a(...i){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(r).catch(o)})}return a}const j=e=>e();function C(e=j){const t=v(!0);function a(){t.value=!1}function i(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:L(t),pause:a,resume:i,eventFilter:r}}function O(e){return e||P()}function M(e,t,a={}){const{eventFilter:i=j,...r}=a;return g(e,w(i,t),r)}function N(e,t,a={}){const{eventFilter:i,...r}=a,{eventFilter:o,pause:c,resume:l,isActive:p}=C(i);return{stop:M(e,t,{...r,eventFilter:o}),pause:c,resume:l,isActive:p}}function B(e,t=!0,a){O()?S(e,a):t?e():k(e)}function E(e,t,a={}){const{eventFilter:i=j,...r}=a,o=w(i,t);let c,l,p;if(r.flush==="sync"){const s=v(!1);l=()=>{},c=n=>{s.value=!0,n(),s.value=!1},p=g(e,(...n)=>{s.value||o(...n)},r)}else{const s=[],n=v(0),u=v(0);l=()=>{n.value=u.value},s.push(g(e,()=>{u.value++},{...r,flush:"sync"})),c=d=>{const _=u.value;d(),n.value+=u.value-_},s.push(g(e,(...d)=>{const _=n.value>0&&n.value===u.value;n.value=0,u.value=0,!_&&o(...d)},r)),p=()=>{s.forEach(d=>d())}}return{stop:p,ignoreUpdates:c,ignorePrevAsyncUpdates:l}}const m=[{id:0,project_name:"Vuestic",project_owner:13,team:[13,5,28,14,17,28,23,11,16,19,12,28,11],status:"in progress",creation_date:"20 Nov 2023"},{id:1,project_name:"Mood board",project_owner:28,team:[28,10,12,28,14,27,5,4,8,23,19,18,24,11,18,12,28],status:"important",creation_date:"16 Oct 2023"},{id:2,project_name:"Jenkins",project_owner:3,team:[3,21,7,19,4,4,7,24],status:"important",creation_date:"1 Oct 2023"},{id:3,project_name:"Springfield media",project_owner:17,team:[17,25,21,9,18,12,15,0,7,2,7],status:"important",creation_date:"19 Sept 2023"},{id:4,project_name:"Galileo",project_owner:7,team:[7,1,28,19,3],status:"completed",creation_date:"23 Sept 2023"},{id:5,project_name:"Website redesign",project_owner:24,team:[24,19,1,8,9],status:"completed",creation_date:"9 Sept 2023"},{id:6,project_name:"Toolset landing",project_owner:15,team:[15,16,8,6,11,21,3,20],status:"archived",creation_date:"17 Aug 2023"},{id:7,project_name:"Complete product redesign",project_owner:25,team:[25,18,24,13,5,3,4,16,25,12,18,9,22],status:"completed",creation_date:"11 Aug 2023"},{id:8,project_name:"Design team project",project_owner:17,team:[17,6,21,17,7,6,14,13,27,7,20],status:"archived",creation_date:"9 Aug 2023"},{id:9,project_name:"Regular logistics",project_owner:3,team:[3,26,8,15,21,23,18,11,22,6,20,9],status:"archived",creation_date:"2 Aug 2023"},{id:10,project_name:"Aurora Analytics",project_owner:12,team:[12,7,18,24,13,5],status:"in progress",creation_date:"10 Dec 2023"},{id:11,project_name:"Quantum Leap",project_owner:14,team:[14,17,3,21,11,20],status:"planning",creation_date:"22 Nov 2023"},{id:12,project_name:"Deep Dive Research",project_owner:8,team:[8,15,9,3,27,6],status:"important",creation_date:"15 Nov 2023"},{id:13,project_name:"Sky High Architecture",project_owner:21,team:[21,2,17,18,4],status:"completed",creation_date:"1 Nov 2023"},{id:14,project_name:"Tech Horizon",project_owner:9,team:[9,19,24,1,22],status:"in progress",creation_date:"28 Oct 2023"},{id:15,project_name:"Edge of Innovation",project_owner:16,team:[16,11,5,14,23],status:"planning",creation_date:"21 Oct 2023"},{id:16,project_name:"Crypto Ventures",project_owner:20,team:[20,7,15,26,12],status:"important",creation_date:"10 Oct 2023"},{id:17,project_name:"Blockchain Basics",project_owner:4,team:[4,8,3,22,27],status:"archived",creation_date:"5 Oct 2023"},{id:18,project_name:"Virtual Reality Exploration",project_owner:26,team:[26,2,14,20,9],status:"in progress",creation_date:"29 Sept 2023"},{id:19,project_name:"AI in Daily Life",project_owner:2,team:[2,13,24,5,11],status:"completed",creation_date:"22 Sept 2023"}],f=[{id:1,fullname:"Patrik Radkow",email:"magicpan@example.gg",username:"magicpan",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:2,fullname:"Martin Hoff",email:"niceadmin@mail.com",username:"admin",role:"admin",avatar:"😍",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:3,fullname:"Liz Macintosh",email:"ebrown@gmail.com",username:"ebrown",role:"user",avatar:"https://randomuser.me/api/portraits/men/1.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:4,fullname:"M2",email:"mrm@gmail.com",username:"mrm",role:"owner",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:5,fullname:"Kevin Smith",email:"kevin@gmail.com",username:"kevin13",role:"user",avatar:"https://randomuser.me/api/portraits/men/2.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:6,fullname:"Martin Hoff",email:"martin@gmail.com",username:"martin3",role:"user",avatar:"https://randomuser.me/api/portraits/men/3.jpg",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:7,fullname:"John Doe",email:"john@mail.com",username:"john",role:"user",avatar:"",active:!0,notes:""},{id:8,fullname:"Maksim Nedo",email:"maksim@epic.com",username:"maksim",role:"admin",avatar:"https://avatars.githubusercontent.com/u/23530004?v=4",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:9,fullname:"Dmitry Kuzmenko",email:"dd@pp.com",username:"dd",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:10,fullname:"Rayan Gosling",email:"rayan@u.ua",username:"rayan",role:"user",avatar:"",active:!0,notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:11,active:!0,fullname:"Laura Smith",email:"laura@example.gg",username:"bbb",role:"user",avatar:"",notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:12,active:!0,fullname:"Ted Mosby",email:"tedmosby@mail.com",username:"gamer777",role:"user",avatar:"😭",notes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."},{id:13,active:!0,fullname:"Forrest Schmidt Jr.",email:"Willard23@gmail.com",username:"Clementine72",role:"user",avatar:"https://randomuser.me/api/portraits/men/4.jpg",notes:"sed asperiores sed"},{id:14,active:!0,fullname:"Emilio Bruen",email:"Amya51@hotmail.com",username:"Madalyn_Brekke55",role:"user",avatar:"https://randomuser.me/api/portraits/men/5.jpg",notes:"architecto amet deleniti"},{id:15,active:!1,fullname:"Jenny Heathcote",email:"Granville_Lebsack38@yahoo.com",role:"user",username:"Vivienne98",avatar:"https://randomuser.me/api/portraits/men/6.jpg",notes:"provident ipsam recusandae"},{id:16,active:!0,fullname:"Sonya Cummerata III",email:"Toni2@yahoo.com",role:"user",username:"Norwood79",avatar:"https://randomuser.me/api/portraits/men/7.jpg",notes:"aut quaerat totam"},{id:17,active:!0,fullname:"Ruben Mitchell",email:"Lisette41@yahoo.com",role:"user",username:"Dariana_Schulist",avatar:"https://randomuser.me/api/portraits/men/8.jpg",notes:"minima harum ut"},{id:18,active:!0,fullname:"Blake Hudson I",email:"Israel88@hotmail.com",role:"user",username:"Crystal.Brakus29",avatar:"https://randomuser.me/api/portraits/men/9.jpg",notes:"sint culpa voluptatem"},{id:19,active:!0,fullname:"Alison Mueller",email:"Darien_Mayer@gmail.com",role:"user",username:"Cordie.Grant",avatar:"https://randomuser.me/api/portraits/men/10.jpg",notes:"officia autem aliquam"},{id:20,active:!1,fullname:"Miss Angelina Jenkins",email:"Cristal.Sauer@yahoo.com",role:"user",username:"Peggie.Runolfsdottir",avatar:"https://randomuser.me/api/portraits/men/11.jpg",notes:"rerum rerum rerum"},{id:21,active:!0,fullname:"Mack Boyle",email:"Shanny30@gmail.com",role:"user",username:"Phoebe67",avatar:"https://randomuser.me/api/portraits/men/12.jpg",notes:"voluptatibus et soluta"},{id:22,active:!0,fullname:"Raymond Simonis",email:"Tressie.Bruen45@gmail.com",role:"user",username:"Percy37",avatar:"https://randomuser.me/api/portraits/men/13.jpg",notes:"aut id molestiae"},{id:23,active:!0,fullname:"Janice Sporer",email:"Anastasia85@hotmail.com",role:"user",username:"Kali84",avatar:"https://randomuser.me/api/portraits/men/14.jpg",notes:"magnam eum aliquam"},{id:24,active:!0,fullname:"Francis Schowalter",email:"Tess56@gmail.com",role:"user",username:"Robyn.Kris",avatar:"https://randomuser.me/api/portraits/men/0.jpg",notes:"similique architecto in"},{id:25,active:!0,fullname:"Emilio Hoppe",email:"Bruce49@yahoo.com",role:"user",username:"Clemmie.Kutch",avatar:"https://randomuser.me/api/portraits/men/16.jpg",notes:"rerum quae dolorem"},{id:26,active:!0,fullname:"Janice Harber",email:"Jude38@hotmail.com",role:"user",username:"Neal70",avatar:"https://randomuser.me/api/portraits/men/17.jpg",notes:"iure dolor provident"},{id:27,fullname:"Evelyn Morar",email:"Laverne.Roberts@hotmail.com",role:"user",username:"Neal_Thompson84",active:!0,avatar:"https://randomuser.me/api/portraits/men/18.jpg",notes:"quae eos placeat"},{id:28,fullname:"Antoinette Schneider",email:"Ambrose_Stehr25@gmail.com",role:"user",username:"Esta.Hickle",active:!0,avatar:"https://randomuser.me/api/portraits/men/19.jpg",notes:"qui cumque unde"},{id:29,fullname:"Daniel Ebony",email:"Nyah44@hotmail.com",role:"user",username:"Jade.Kuhlman90",active:!0,avatar:"https://randomuser.me/api/portraits/men/20.jpg",notes:"exercitationem velit consectetur"}],y=(e,t)=>t==="project_owner"?e.project_owner.fullname:t==="team"?e.team.map(a=>a.fullname).join(", "):t==="creation_date"?new Date(e[t]):e[t],G=async e=>{await h(1e3);const t=m.map(i=>({...i,project_owner:f.find(r=>r.id===i.project_owner),team:f.filter(r=>i.team.includes(r.id))}));return e.sortBy&&e.sortingOrder&&t.sort((i,r)=>(i=y(i,e.sortBy),r=y(r,e.sortBy),i<r?e.sortingOrder==="asc"?-1:1:i>r?e.sortingOrder==="asc"?1:-1:0)),{data:t.slice((e.page-1)*e.perPage,e.page*e.perPage),pagination:{page:e.page,perPage:e.perPage,total:m.length}}},K=async e=>{await h(1e3);const t={...e,id:m.length+1,creation_date:new Date().toLocaleDateString("gb",{day:"numeric",month:"short",year:"numeric"})};return m.push(t),{...t,project_owner:f.find(a=>a.id===e.project_owner),team:f.filter(a=>e.team.includes(a.id))}},W=async e=>{await h(1e3);const t=m.findIndex(a=>a.id===e.id);return m[t]=e,e},z=async e=>{await h(1e3);const t=m.findIndex(a=>a.id===e.id);return m.splice(t,1),e};export{K as a,f as b,N as c,B as d,T as e,H as f,G as g,x as h,R as i,J as n,m as p,z as r,F as t,W as u,E as w};
//# sourceMappingURL=projects-88949a9d.js.map
