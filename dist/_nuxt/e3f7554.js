(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{447:function(e,t,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("63c9496b",content,!0,{sourceMap:!1})},448:function(e,t,n){var r=n(24)(!1);r.push([e.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1);z-index:1}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0;z-index:-1}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),e.exports=r},453:function(e,t,n){"use strict";var r=n(2),o=(n(26),n(43),n(52),n(447),n(54)),c=n(64),l=n(36),d=n(66),v=n(81),m=n(14),h=n(0),f=n(9);t.a=Object(m.a)(o.a,c.a,d.a,Object(v.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(e){return"string"==typeof e||!1===e}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var e=this.$vuetify.application,t=e.bar,n=e.bottom,footer=e.footer,r=e.insetFooter,o=e.left,c=e.right,l=e.top;return{paddingBottom:Object(h.i)(n+footer+r),paddingLeft:Object(h.i)(o),paddingRight:Object(h.i)(c),paddingTop:Object(h.i)(t+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(f.e)("auto-height",this),0==this.timeout&&Object(f.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(h.u)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(r.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(h.u)(this)])},genWrapper:function(){var e=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:o.a.options.computed.classes.call(this),style:o.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(e.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var e=this;window.clearTimeout(this.activeTimeout);var t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((function(){e.isActive=!1}),t))}},render:function(e){return e("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},499:function(e,t,n){"use strict";n.r(t);var r=n(30),o=(n(113),n(29),n(220),n(58),n(114),n(92));Object(o.d)("eager");var c={name:"users-table",components:{ValidationObserver:o.a,ValidationProvider:o.b},data:function(){return{dialog:!1,dialogDelete:!1,search:"",headers:[{text:"Korisnik",value:"name",align:"start"},{text:"E-Mail",value:"email"},{text:"Uloga",value:"role"},{text:"Kreiran",value:"created_at"},{text:"Podešen",value:"updated_at"},{text:"Akcije",value:"actions",sortable:!1}],roles:[],roles_ids:[],roles_names:[],selected_role:"",items:[],editedIndex:-1,editedEmail:"",editedItem:{name:"",email:"",password:"",password_confirmation:"",role_id:0},defaultItem:{name:"",email:"",password:"",password_confirmation:"",role_id:3},snackbar:!1,timeout:2e3,message:"",color:""}},mounted:function(){this.getUsers(),this.getRoles()},computed:{formTitle:function(){return-1===this.editedIndex?"Dodaj Korisnika":"Uredi Korisnika"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()},selected_role:function(e,t){console.log(e);for(var i=0;i<this.roles.length;i++)this.roles[i].name===e&&(this.editedItem.role_id=this.roles[i].id)}},methods:{getRoles:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.roles=[],e.roles_names=[],e.roles_ids=[],n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=6,e.$axios.$get("/admin/roles",n).then((function(t){var n=t;console.log(n);for(var i=0;i<n.length;i++)e.roles.push(n[i]),e.roles_names.push(n[i].name),e.roles_ids.push(n[i].id)})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})))()},getUsers:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.items=[],n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=4,e.$axios.$get("/admin/users",n).then((function(t){console.log(t);for(var n=t[0],i=0;i<n.length;i++){var r=new Date(n[i].created_at),o=new Date(n[i].updated_at),c={name:n[i].name,email:n[i].email,role:n[i].role.name,created_at:r.toLocaleDateString("hr-HR"),updated_at:o.toLocaleDateString("hr-HR")};e.items.push(c)}})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$delete("/admin/users/"+e.items[e.editedIndex].email,n).then((function(t){e.message=t.message,e.color="success",e.snackbar=!0,e.getUsers(),e.getRoles()})).catch((function(t){e.message=t.message,e.color="error",e.snackbar=!0,console.log(t)}));case 3:e.items.splice(e.editedIndex,1),e.closeDelete();case 5:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$post("/admin/register",e.editedItem,n).then((function(t){console.log(t),e.message="Uspiješna registracija novog korisnika",e.color="success",e.snackbar=!0,e.editedIndex>-1?Object.assign(e.items[e.editedIndex],e.editedItem):e.items.push(e.editedItem),e.getUsers(),e.getRoles()})).catch((function(t){for(var n in console.log(t.response),e.errors=t.response.errors,console.log(e.errors),e.errors)e.errors[n][0]=e.errors[n][0].charAt(0).toUpperCase()+e.errors[n][0].slice(1);for(var r in e.errors)e.$refs.observer.errors[r].push(e.errors[r][0]);e.message="Registracija neuspješna",e.color="error",e.snackbar=!0}));case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedEmail=e.email,this.editedItem=Object.assign({},e),this.dialog=!0},update:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{Authorization:e.$auth.strategy.token.get()}},t.next=3,e.$axios.$put("/admin/users/"+e.editedEmail,e.editedItem,n).then((function(t){console.log(t),e.editedIndex>-1?Object.assign(e.items[e.editedIndex],e.editedItem):e.items.push(e.editedItem),e.message=t.message,e.color="success",e.snackbar=!0,e.getUsers(),e.getRoles()})).catch((function(t){console.log(t),e.message=t.message,e.color="error",e.snackbar=!0}));case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()}}},l=n(97),d=n(135),v=n.n(d),m=n(424),h=n(208),f=n(112),k=n(438),_=n(445),x=n(583),w=n(581),I=n(427),y=n(423),j=n(442),O=n(501),T=n(453),$=n(443),C=n(484),V=n(73),D=n(450),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"items-per-page":5,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("\n          Korisnici\n        ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Pretraži","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[e._v("\n              Novi Korisnik\n            ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[n("ValidationObserver",{ref:"observer"},[n("ValidationProvider",{attrs:{name:"Ime i prezime",rules:"required|max:100"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{counter:100,"error-messages":r,label:"Ime i Prezime",required:""},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})]}}])}),e._v(" "),n("ValidationProvider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{type:"email","error-messages":r,label:"E-mail",required:""},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})]}}])}),e._v(" "),n("ValidationProvider",{attrs:{name:"Zaporka",rules:"min:6|required|confirmed:confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{type:"password","error-messages":r,label:"Zaporka"},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})]}}])}),e._v(" "),n("ValidationProvider",{attrs:{rules:"min:6|required",name:"Potvrda zaporke",vid:"confirmation"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{type:"password","error-messages":r,label:"Potvrda zaporke"},model:{value:e.editedItem.password_confirmation,callback:function(t){e.$set(e.editedItem,"password_confirmation",t)},expression:"editedItem.password_confirmation"}})]}}])}),e._v(" "),n("ValidationProvider",{attrs:{name:"Uloga"}},[n("v-select",{attrs:{items:e.roles_names,label:"Uloga"},model:{value:e.selected_role,callback:function(t){e.selected_role=t},expression:"selected_role"}})],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                Odustani\n              ")]),e._v(" "),"Dodaj Korisnika"===e.formTitle?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                Spremi\n              ")]):e._e(),e._v(" "),"Uredi Korisnika"===e.formTitle?n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.update}},[e._v("\n                Spremi\n              ")]):e._e()],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Jeste li sigurni da želite pobristavi ovog korisnika?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Poništi")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("Potvrdi")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:e.getRoles}},[e._v("\n        Reset\n      ")])]},proxy:!0}])}),e._v(" "),n("v-snackbar",{attrs:{outlined:"","multi-line":"",color:e.color,timeout:e.timeout,"content-class":"text-center"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.message)+"\n  ")])],1)}),[],!1,null,"c203b0fe",null);t.default=component.exports;v()(component,{VBtn:m.a,VCard:h.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:k.a,VContainer:_.a,VDataTable:x.a,VDialog:w.a,VDivider:I.a,VIcon:y.a,VRow:j.a,VSelect:O.a,VSnackbar:T.a,VSpacer:$.a,VTextField:C.a,VToolbar:V.a,VToolbarTitle:D.a})}}]);