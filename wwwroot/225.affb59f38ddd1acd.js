"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[225],{32950:(D,_,s)=>{s.d(_,{F:()=>C});var u=s(22223);let C=(()=>{class m{constructor(c){this.el=c,this.fallbackSrc="assets/images/fallback-image/blank-image.svg"}onError(){const c=this.el.nativeElement;c&&(c.src=this.fallbackSrc)}}return m.\u0275fac=function(c){return new(c||m)(u.Y36(u.SBq))},m.\u0275dir=u.lG2({type:m,selectors:[["img","nzSrc",""]],hostBindings:function(c,N){1&c&&u.NdJ("error",function(){return N.onError()})},inputs:{fallbackSrc:"fallbackSrc"}}),m})()},92982:(D,_,s)=>{s.d(_,{F:()=>C});var u=s(22223);let C=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({}),m})()},3914:(D,_,s)=>{s.d(_,{G:()=>C});var u=s(22223);let C=(()=>{class m{}return m.\u0275fac=function(c){return new(c||m)},m.\u0275mod=u.oAB({type:m}),m.\u0275inj=u.cJS({}),m})()},52225:(D,_,s)=>{s.r(_),s.d(_,{CustomerModule:()=>Ze});var u=s(31531),C=s(99114),m=s(69609),p=s(11292),c=s(58016),N=s(56467),F=s(61972),b=s(39401),z=s(25580),R=s(22497),e=s(22223);let ee=(()=>{class i{constructor(){}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["customer"]],decls:1,vars:0,template:function(n,t){1&n&&e._UZ(0,"router-outlet")},dependencies:[u.lC],encapsulation:2}),i})();var T=s(77579),te=s(78372),k=s(28746),d=s(82722),j=s(18505),M=s(82004),ne=s(3144),E=s(71683);let I=(()=>{class i{constructor(n,t){this.httpClient=n,this._fuseConfirmationService=t}get(n){return this.httpClient.get("api/customers",{params:n})}getById(n){return this.httpClient.get(`api/customers/${n}`)}create(n){return this.httpClient.post("api/customers",n).pipe((0,j.b)(({})=>{(0,M.Hh)(this._fuseConfirmationService)}))}update(n,t){return this.httpClient.put(`api/customers/${n}`,t).pipe((0,j.b)(({})=>{(0,M.Hh)(this._fuseConfirmationService)}))}}return i.\u0275fac=function(n){return new(n||i)(e.LFG(ne.eN),e.LFG(E.R))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Y=s(38642),B=s(85450),g=s(30430),$=s(15614),P=s(61148),L=s(20054),Z=s(51728),q=s(430),G=s(83649),O=s(74050),V=s(3990),A=s(44755),H=s(50877),W=s(47148),K=s(90504),S=s(17406),Q=s(32950);function oe(i,l){if(1&i){const n=e.EpF();e.TgZ(0,"tr",29),e.NdJ("dblclick",function(){const o=e.CHM(n).$implicit,r=e.oxw();return e.KtG(r.onClickDetail(o.customerId))}),e.TgZ(1,"td")(2,"span",30)(3,"button",31)(4,"mat-icon"),e._uU(5," more_vert "),e.qZA(),e.TgZ(6,"mat-menu",null,32),e.ynx(8),e.TgZ(9,"button",33),e.NdJ("click",function(){const o=e.CHM(n).$implicit,r=e.oxw();return e.KtG(r.onClickDetail(o.customerId))}),e._UZ(10,"mat-icon",34),e._uU(11),e.ALo(12,"transloco"),e.qZA(),e.TgZ(13,"button",33),e.NdJ("click",function(){const o=e.CHM(n).$implicit,r=e.oxw();return e.KtG(r.onClickEdit(o.customerId))}),e.TgZ(14,"mat-icon"),e._uU(15,"edit"),e.qZA(),e._uU(16),e.ALo(17,"transloco"),e.qZA(),e.BQk(),e.qZA()()()(),e.TgZ(18,"td")(19,"div",35),e._uU(20),e.qZA()(),e.TgZ(21,"td"),e._UZ(22,"img",36),e.qZA(),e.TgZ(23,"td",37),e._uU(24),e.qZA(),e.TgZ(25,"td",37),e._uU(26),e.qZA(),e.TgZ(27,"td",37),e._uU(28),e.qZA(),e.TgZ(29,"td",37),e._uU(30),e.qZA(),e.TgZ(31,"td",37),e._uU(32),e.qZA(),e.TgZ(33,"td",37),e._uU(34),e.qZA(),e.TgZ(35,"td"),e._UZ(36,"mat-checkbox",38),e.qZA(),e.TgZ(37,"td"),e._UZ(38,"mat-checkbox",38),e.qZA(),e.TgZ(39,"td"),e._UZ(40,"mat-checkbox",38),e.qZA(),e.TgZ(41,"td"),e._uU(42),e.qZA(),e.TgZ(43,"td"),e._uU(44),e.qZA(),e.TgZ(45,"td"),e._uU(46),e.qZA()()}if(2&i){const n=l.$implicit,t=l.index,a=e.MAs(7);e.oxw();const o=e.MAs(41);e.xp6(3),e.Q6J("matMenuTriggerFor",a),e.xp6(8),e.hij(" ",e.lcZ(12,26,"view")," "),e.xp6(5),e.hij(" ",e.lcZ(17,28,"edit")," "),e.xp6(4),e.Oqu((o.nzPageIndex-1)*o.nzPageSize+t+1),e.xp6(2),e.Q6J("nzSrc","https://localhost:5001"+n.avatar),e.xp6(1),e.Q6J("matTooltip",n.fullName),e.xp6(1),e.hij(" ",n.fullName," "),e.xp6(1),e.Q6J("matTooltip",n.phoneNumber),e.xp6(1),e.hij(" ",n.phoneNumber," "),e.xp6(1),e.Q6J("matTooltip",n.email),e.xp6(1),e.hij(" ",n.email," "),e.xp6(1),e.Q6J("matTooltip",n.customerTypeName),e.xp6(1),e.hij(" ",n.customerTypeName," "),e.xp6(1),e.Q6J("matTooltip",n.companyName),e.xp6(1),e.hij(" ",n.companyName," "),e.xp6(1),e.Q6J("matTooltip",n.apartmentName),e.xp6(1),e.hij(" ",n.apartmentName," "),e.xp6(2),e.Q6J("checked",n.isOfficeCustomer)("readOnly",!0),e.xp6(2),e.Q6J("checked",n.isApartmentCustomer)("readOnly",!0),e.xp6(2),e.Q6J("checked",n.isVip)("readOnly",!0),e.xp6(2),e.hij(" ",n.faceCount," "),e.xp6(2),e.hij(" ",n.cardCount," "),e.xp6(2),e.hij(" ",n.qrCodeCount," ")}}let ie=(()=>{class i{constructor(n,t,a,o,r,h,f,v,x){this._activatedRoute=n,this._customerService=t,this._companyService=a,this._apartmentService=o,this._translocoService=r,this._biostationService=h,this._customerTypeService=f,this._tenantService=v,this._router=x,this._unsubscribeAll=new T.x,this.debounce$=new T.x,this.listData=[],this.isLoading=!1,this.filter={textSearch:null,companyId:null,apartmentId:null,customerTypeId:null,isUse:!0,isApartmentCustomer:!0,isOfficeCustomer:!0},this.companyCodes=[],this.apartmentCodes=[],this.customerTypeCodes=[]}ngOnInit(){this.getData(),this.debounce$.pipe((0,te.b)(300),(0,d.R)(this._unsubscribeAll)).subscribe(()=>{this.getData()}),this._customerTypeService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.customerTypeCodes=[...n.map(t=>({id:t.customerTypeId,name:t.typeName}))]}),this._companyService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.companyCodes=[...n.map(t=>({id:t.companyId,name:t.companyName}))]}),this._apartmentService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.apartmentCodes=[...n.map(t=>({id:t.apartmentId,name:t.apartmentCode}))]})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}getData(){this.isLoading=!0,this._customerService.get(this.filter).pipe((0,d.R)(this._unsubscribeAll),(0,k.x)(()=>this.isLoading=!1)).subscribe(({data:n})=>{this.listData=n})}onSearch(){this.debounce$.next()}onClickAdd(){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/create`)}onRefreshData(){this.filter={textSearch:null,companyId:null,apartmentId:null,customerTypeId:null,isUse:!0,isApartmentCustomer:!0,isOfficeCustomer:!0},this.getData()}onClickDetail(n){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/detail/${n}/general`)}onClickEdit(n){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/edit/${n}`)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.gz),e.Y36(I),e.Y36(Y.J),e.Y36(B.V),e.Y36(g.Vn),e.Y36($.h),e.Y36(P.a),e.Y36(L.g),e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["customer-list"]],decls:91,vars:79,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-col"],[1,"flex","justify-between","items-center","bg-card","border-b","dark:bg-transparent","px-6","sm:py-5","md:px-8","gap-8"],[1,"leading-none","text-3xl","font-extrabold","tracking-tight"],[1,"space-x-4","flex","items-center"],["mat-flat-button","",1,"w-min",3,"color","click"],[3,"svgIcon"],["transloco","add",1,"ml-2"],["mat-icon-button","",3,"matTooltip","click"],["svgIcon","heroicons_outline:arrow-path",1,"text-slate-500"],[1,"bg-card","m-6","rounded-md","shadow"],[1,"p-6","space-y-6"],[1,"flex-col","flex","sm:flex-row","sm:justify-between"],[1,"flex","flex-col","w-full","h-full","space-y-6"],[1,"flex","gap-4"],["label","search",1,"flex-1",3,"model","isDisableLength","placeholder","modelChange","keyup"],["label","master.company",1,"flex-1",3,"listData","model","modelChange"],["label","master.apartment",1,"flex-1",3,"listData","model","modelChange"],["label","master.guestGroup",1,"flex-1",3,"listData","model","modelChange"],[1,"flex","gap-4","flex-1"],["color","primary",3,"ngModel","ngModelChange"],[1,"text-md","font-medium","text-slate-600"],["color","primary",1,"text-lg","font-medium","flex-1","flex",3,"ngModel","ngModelChange"],[1,"flex-1"],[1,"border-b","w-full"],["nzShowSizeChanger","","nzBordered","true",3,"nzLoading","nzData"],["basicTable",""],["nzAlign","center","nzWidth","70px"],["class","hover:cursor-pointer",3,"dblclick",4,"ngFor","ngForOf"],[1,"hover:cursor-pointer",3,"dblclick"],[1,"flex","justify-center"],["mat-icon-button","",3,"matMenuTriggerFor"],["headerMenu",""],["mat-menu-item","",3,"click"],["svgIcon","heroicons_outline:eye"],[1,"h-full","flex","justify-center","items-center"],["nz-image","",1,"object-cover","max-h-10","w-26",3,"nzSrc"],[3,"matTooltip"],["color","primary",3,"checked","readOnly"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4),e.ALo(5,"transloco"),e.qZA(),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return t.onClickAdd()}),e._UZ(8,"mat-icon",6)(9,"label",7),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){return t.onRefreshData()}),e.ALo(11,"transloco"),e._UZ(12,"mat-icon",9),e.qZA()()()(),e.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"cm-input",15),e.NdJ("modelChange",function(o){return t.filter.textSearch=o})("keyup",function(){return t.onSearch()}),e.ALo(19,"transloco"),e.qZA(),e.TgZ(20,"cm-select",16),e.NdJ("modelChange",function(o){return t.filter.companyId=o})("modelChange",function(){return t.onSearch()}),e.qZA(),e.TgZ(21,"cm-select",17),e.NdJ("modelChange",function(o){return t.filter.apartmentId=o})("modelChange",function(){return t.onSearch()}),e.qZA(),e.TgZ(22,"cm-select",18),e.NdJ("modelChange",function(o){return t.filter.customerTypeId=o})("modelChange",function(){return t.onSearch()}),e.qZA()(),e.TgZ(23,"div",14)(24,"div",19)(25,"mat-checkbox",20),e.NdJ("ngModelChange",function(){return t.onSearch()})("ngModelChange",function(o){return t.filter.isOfficeCustomer=o}),e.TgZ(26,"span",21),e._uU(27),e.ALo(28,"transloco"),e.qZA()(),e.TgZ(29,"mat-checkbox",20),e.NdJ("ngModelChange",function(){return t.onSearch()})("ngModelChange",function(o){return t.filter.isApartmentCustomer=o}),e.TgZ(30,"span",21),e._uU(31),e.ALo(32,"transloco"),e.qZA()()(),e.TgZ(33,"mat-slide-toggle",22),e.NdJ("ngModelChange",function(o){return t.filter.isUse=o})("ngModelChange",function(){return t.onSearch()}),e._uU(34),e.ALo(35,"transloco"),e.qZA(),e._UZ(36,"div",23)(37,"div",23),e.qZA(),e._UZ(38,"div",24),e.qZA()(),e.TgZ(39,"div")(40,"nz-table",25,26)(42,"thead")(43,"tr")(44,"th"),e._uU(45),e.ALo(46,"transloco"),e.qZA(),e.TgZ(47,"th",27),e._uU(48),e.ALo(49,"transloco"),e.qZA(),e.TgZ(50,"th"),e._uU(51),e.ALo(52,"transloco"),e.qZA(),e.TgZ(53,"th"),e._uU(54),e.ALo(55,"transloco"),e.qZA(),e.TgZ(56,"th"),e._uU(57),e.ALo(58,"transloco"),e.qZA(),e.TgZ(59,"th"),e._uU(60),e.ALo(61,"transloco"),e.qZA(),e.TgZ(62,"th"),e._uU(63),e.ALo(64,"transloco"),e.qZA(),e.TgZ(65,"th"),e._uU(66),e.ALo(67,"transloco"),e.qZA(),e.TgZ(68,"th"),e._uU(69),e.ALo(70,"transloco"),e.qZA(),e.TgZ(71,"th"),e._uU(72),e.ALo(73,"transloco"),e.qZA(),e.TgZ(74,"th"),e._uU(75),e.ALo(76,"transloco"),e.qZA(),e.TgZ(77,"th"),e._uU(78),e.ALo(79,"transloco"),e.qZA(),e.TgZ(80,"th"),e._uU(81),e.ALo(82,"transloco"),e.qZA(),e.TgZ(83,"th"),e._uU(84),e.ALo(85,"transloco"),e.qZA(),e.TgZ(86,"th"),e._uU(87),e.ALo(88,"transloco"),e.qZA()()(),e.TgZ(89,"tbody"),e.YNc(90,oe,47,30,"tr",28),e.qZA()()()()()()),2&n){const a=e.MAs(41);e.xp6(4),e.hij("",e.lcZ(5,37,"nav.customers")," "),e.xp6(3),e.Q6J("color","primary"),e.xp6(1),e.Q6J("svgIcon","add"),e.xp6(2),e.s9C("matTooltip",e.lcZ(11,39,"com.refresh")),e.xp6(8),e.s9C("placeholder",e.lcZ(19,41,"plHolder.searchCustomerNamePhoneAndEmail")),e.Q6J("model",t.filter.textSearch)("isDisableLength",!0),e.xp6(2),e.Q6J("listData",t.companyCodes)("model",t.filter.companyId),e.xp6(1),e.Q6J("listData",t.apartmentCodes)("model",t.filter.apartmentId),e.xp6(1),e.Q6J("listData",t.customerTypeCodes)("model",t.filter.customerTypeId),e.xp6(3),e.Q6J("ngModel",t.filter.isOfficeCustomer),e.xp6(2),e.hij(" ",e.lcZ(28,43,"master.guestCompany")," "),e.xp6(2),e.Q6J("ngModel",t.filter.isApartmentCustomer),e.xp6(2),e.hij(" ",e.lcZ(32,45,"master.guestApartment")," "),e.xp6(2),e.Q6J("ngModel",t.filter.isUse),e.xp6(1),e.hij(" ",e.lcZ(35,47,"used")," "),e.xp6(6),e.Q6J("nzLoading",t.isLoading)("nzData",t.listData),e.xp6(5),e.Oqu(e.lcZ(46,49,"master.function")),e.xp6(3),e.Oqu(e.lcZ(49,51,"master.no")),e.xp6(3),e.Oqu(e.lcZ(52,53,"master.avatar")),e.xp6(3),e.Oqu(e.lcZ(55,55,"master.fullName")),e.xp6(3),e.Oqu(e.lcZ(58,57,"master.phoneNumber")),e.xp6(3),e.Oqu(e.lcZ(61,59,"master.email")),e.xp6(3),e.Oqu(e.lcZ(64,61,"master.guestGroup")),e.xp6(3),e.Oqu(e.lcZ(67,63,"master.company")),e.xp6(3),e.Oqu(e.lcZ(70,65,"master.apartment")),e.xp6(3),e.Oqu(e.lcZ(73,67,"master.guestCompany")),e.xp6(3),e.Oqu(e.lcZ(76,69,"master.guestApartment")),e.xp6(3),e.Oqu(e.lcZ(79,71,"master.guestVIP")),e.xp6(3),e.Oqu(e.lcZ(82,73,"master.faceQuantity")),e.xp6(3),e.Oqu(e.lcZ(85,75,"master.cardRFIDQuantity")),e.xp6(3),e.Oqu(e.lcZ(88,77,"master.qrCodeQuantity")),e.xp6(3),e.Q6J("ngForOf",a.data)}},dependencies:[p.oG,c.N8,c.Uo,c._C,c.Om,c.p0,c.$Z,c.UX,Z.lW,Z.RK,q.Hw,G.gM,b.JJ,b.On,g.KI,O.Ie,V.i,A.sg,H.Rr,W.f,K.W,S.VK,S.OP,S.p6,Q.F,g.Ot],encapsulation:2}),i})();var ae=s(92369),re=s(32202);let X=(()=>{class i{constructor(n,t,a,o,r,h,f,v,x,y,U){this._activatedRoute=n,this._uploadService=t,this._customerService=a,this._customerTypeService=o,this._companyService=r,this._apartmentService=h,this.fuseConfirmationService=f,this._notification=v,this._translocoService=x,this._tenantService=y,this._router=U,this._unsubscribeAll=new T.x,this.isLoading=!1,this.companyCodes=[],this.apartmentCodes=[],this.customerTypeCodes=[],this.req={customerId:null,fullName:null,customerCode:null,avatar:null},this.customerId=null,this.actionEnum="new",this.actionEnumCompany="view",this.actionEnumApartment="view"}ngOnInit(){this._customerTypeService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.customerTypeCodes=[...n.map(t=>({id:t.customerTypeId,name:t.typeName}))]}),this._companyService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.companyCodes=[...n.map(t=>({id:t.companyId,name:t.companyName}))]}),this._apartmentService.get({isUse:!0}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:n})=>{this.apartmentCodes=[...n.map(t=>({id:t.apartmentId,name:t.apartmentCode}))]}),this._activatedRoute.paramMap.subscribe(n=>{null!==n.get("customerId")?(this.customerId=n.get("customerId"),this.getDetail(n.get("customerId"))):this.actionEnum="new"})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}getDetail(n){this._customerService.getById(n).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:t})=>{this.req=t,this.actionEnum="edit",this.actionEnumCompany=!0===t.isOfficeCustomer?"edit":"view",this.actionEnumApartment=!0===t.isApartmentCustomer?"edit":"view"})}onSave(){if(this.isLoading=!0,!this.req.customerCode||!this.req.fullName)return this._notification.warning(this._translocoService.translate("warning"),this._translocoService.translate("message.workOrderFormInvalid"),{nzDuration:3e3}),void(this.isLoading=!1);"new"===this.actionEnum?this._customerService.create(this.req).pipe((0,d.R)(this._unsubscribeAll),(0,k.x)(()=>this.isLoading=!1)).subscribe(({success:n,data:t})=>{n&&this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/detail/${t.customerId}/general`)}):"edit"===this.actionEnum&&this._customerService.update(this.customerId,this.req).pipe((0,d.R)(this._unsubscribeAll),(0,k.x)(()=>this.isLoading=!1)).subscribe(({success:n})=>{n&&this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/detail/${this.customerId}/general`)})}onCancel(){(0,M.WD)(this.fuseConfirmationService,this._translocoService.translate("message.confirmUnSaveChange"),this._translocoService.translate("message.unsavedChangesAreYouSure")).afterClosed().subscribe(n=>{"confirmed"===n&&("new"===this.actionEnum?this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers`):"edit"===this.actionEnum&&this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/detail/${this.customerId}/general`))})}onRemoveImage(){this.req.avatar=null}onImageChange(n){const t=n.currentTarget;if(!t.files.length)return;const a=t.files.item(0);this._uploadService.upLoadFile(a).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:o})=>{this.req.avatar=o})}changeIsOfficeCustomer(n){this.actionEnumCompany=!0===n?"edit":"view"}changeIsApartmentCustomer(n){this.actionEnumApartment=!0===n?"edit":"view"}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.gz),e.Y36(ae.C),e.Y36(I),e.Y36(P.a),e.Y36(Y.J),e.Y36(B.V),e.Y36(E.R),e.Y36(re.zb),e.Y36(g.Vn),e.Y36(L.g),e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["customer-create"]],decls:68,vars:55,consts:[[1,"flex","flex-col","flex-auto","w-full"],[1,"flex","flex-col"],[1,"flex","justify-between","items-center","bg-card","border-b","dark:bg-transparent","px-6","sm:py-5","md:px-8","gap-8"],[1,"leading-none","text-3xl","font-extrabold","tracking-tight"],[1,"flex","gap-4","md:flex-row","flex-col"],["mat-flat-button","",1,"flex","items-center","justify-center","gap-2",3,"disabled","click"],["mat-flat-button","","color","primary",1,"flex","items-center","justify-center","gap-2",3,"disabled","click"],[1,"flex","flex-col","w-full","p-6"],[1,"flex","flex-col","gap-6"],[1,"flex","flex-col","space-y-5","p-6","bg-card","rounded-md","shadow","dark:bg-gray-900"],[1,"pb-4","flex","border-b"],[1,"text-xl","font-medium"],[1,"flex","gap-2","md:flex-row","flex-col"],[1,"flex-grow","flex","flex-col","gap-4"],[1,"flex","flex-2","flex-col","space-y-2.5"],[1,"font-medium"],[1,"w-40","h-40","object-cover","overflow-hidden","flex","items-center","relative"],[1,"absolute","inset-0","bg-accent-800","opacity-80","z-10"],[1,"h-full","w-full","flex","items-center","justify-center","z-20","space-x-4"],["mat-icon-button","",1,"text-white",3,"click"],["svgIcon","heroicons_outline:camera",1,"text-white"],["type","file","accept","image/*",1,"hidden",3,"change"],["fileInput",""],["svgIcon","heroicons_outline:trash",1,"text-white"],["nz-image","",1,"w-full","h-full",3,"nzSrc"],[1,"flex","gap-4"],["label","master.customerCode",1,"flex-1",3,"model","isRequired","isDisableLength","modelChange"],["label","master.fullName",1,"flex-1",3,"model","isRequired","isDisableLength","modelChange"],["label","master.phoneNumber",1,"flex-1",3,"model","isDisableLength","modelChange"],["label","master.email",1,"flex-1",3,"model","isDisableLength","modelChange"],["color","primary",1,"flex-1",3,"ngModel","ngModelChange"],["isDisableLength","true","label","master.guestGroup",1,"flex-1",3,"model","listData","modelChange"],["isDisableLength","true","label","master.company",1,"flex-1",3,"actionEnum","model","listData","modelChange"],["isDisableLength","true","label","master.apartment",1,"flex-1",3,"actionEnum","model","listData","modelChange"],[1,"flex-1"],[1,"flex"],[1,"flex-1","w-full"],["type","textarea",3,"label","isDisableLength","model","modelChange"]],template:function(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4),e.ALo(5,"transloco"),e.qZA(),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return t.onCancel()}),e._uU(8),e.ALo(9,"transloco"),e.qZA(),e.TgZ(10,"button",6),e.NdJ("click",function(){return t.onSave()}),e._uU(11),e.ALo(12,"transloco"),e.qZA()()()(),e.TgZ(13,"div",7)(14,"div",8)(15,"div",9)(16,"div",10)(17,"span",11),e._uU(18),e.ALo(19,"transloco"),e.qZA()(),e.TgZ(20,"div",12)(21,"div",13)(22,"div",4)(23,"div",14)(24,"span",15),e._uU(25),e.ALo(26,"transloco"),e.qZA(),e.TgZ(27,"div",16)(28,"div",17)(29,"div",18)(30,"button",19),e.NdJ("click",function(){e.CHM(a);const r=e.MAs(33);return e.KtG(r.click())}),e._UZ(31,"mat-icon",20),e.qZA(),e.TgZ(32,"input",21,22),e.NdJ("change",function(r){return t.onImageChange(r)}),e.qZA(),e.TgZ(34,"button",19),e.NdJ("click",function(){return t.onRemoveImage()}),e._UZ(35,"mat-icon",23),e.qZA()()(),e._UZ(36,"img",24),e.qZA()()()()(),e.TgZ(37,"div",25)(38,"cm-input",26),e.NdJ("modelChange",function(r){return t.req.customerCode=r}),e.qZA(),e.TgZ(39,"cm-input",27),e.NdJ("modelChange",function(r){return t.req.fullName=r}),e.qZA(),e.TgZ(40,"cm-input",28),e.NdJ("modelChange",function(r){return t.req.phoneNumber=r}),e.qZA(),e.TgZ(41,"cm-input",29),e.NdJ("modelChange",function(r){return t.req.email=r}),e.qZA()(),e.TgZ(42,"div",25)(43,"mat-checkbox",30),e.NdJ("ngModelChange",function(r){return t.req.isOfficeCustomer=r})("ngModelChange",function(r){return t.changeIsOfficeCustomer(r)}),e._uU(44),e.ALo(45,"transloco"),e.qZA(),e.TgZ(46,"mat-checkbox",30),e.NdJ("ngModelChange",function(r){return t.changeIsApartmentCustomer(r)})("ngModelChange",function(r){return t.req.isApartmentCustomer=r}),e._uU(47),e.ALo(48,"transloco"),e.qZA(),e.TgZ(49,"mat-checkbox",30),e.NdJ("ngModelChange",function(r){return t.req.isVip=r}),e._uU(50),e.ALo(51,"transloco"),e.qZA(),e.TgZ(52,"cm-select",31),e.NdJ("modelChange",function(r){return t.req.customerTypeId=r}),e.qZA()(),e.TgZ(53,"div",25)(54,"cm-select",32),e.NdJ("modelChange",function(r){return t.req.companyId=r}),e.qZA(),e.TgZ(55,"cm-select",33),e.NdJ("modelChange",function(r){return t.req.apartmentId=r}),e.qZA(),e._UZ(56,"div",34)(57,"div",34),e.qZA(),e.TgZ(58,"div",35)(59,"div",36)(60,"cm-input",37),e.NdJ("modelChange",function(r){return t.req.description=r}),e.qZA()()(),e.TgZ(61,"div",25)(62,"mat-checkbox",30),e.NdJ("ngModelChange",function(r){return t.req.isUse=r}),e._uU(63),e.ALo(64,"transloco"),e.qZA(),e._UZ(65,"div",34)(66,"div",34)(67,"div",34),e.qZA()()()()()}2&n&&(e.xp6(4),e.hij("",e.lcZ(5,37,"master.addCustomers")," "),e.xp6(3),e.Q6J("disabled",t.isLoading),e.xp6(1),e.Oqu(e.lcZ(9,39,"cancel")),e.xp6(2),e.Q6J("disabled",t.isLoading),e.xp6(1),e.Oqu(e.lcZ(12,41,"save")),e.xp6(7),e.Oqu(e.lcZ(19,43,"master.general")),e.xp6(7),e.Oqu(e.lcZ(26,45,"master.updateImage")),e.xp6(11),e.Q6J("nzSrc","https://localhost:5001"+t.req.avatar),e.xp6(2),e.Q6J("model",t.req.customerCode)("isRequired",!0)("isDisableLength",!0),e.xp6(1),e.Q6J("model",t.req.fullName)("isRequired",!0)("isDisableLength",!0),e.xp6(1),e.Q6J("model",t.req.phoneNumber)("isDisableLength",!0),e.xp6(1),e.Q6J("model",t.req.email)("isDisableLength",!0),e.xp6(2),e.Q6J("ngModel",t.req.isOfficeCustomer),e.xp6(1),e.Oqu(e.lcZ(45,47,"master.guestCompany")),e.xp6(2),e.Q6J("ngModel",t.req.isApartmentCustomer),e.xp6(1),e.Oqu(e.lcZ(48,49,"master.guestApartment")),e.xp6(2),e.Q6J("ngModel",t.req.isVip),e.xp6(1),e.Oqu(e.lcZ(51,51,"master.guestVIP")),e.xp6(2),e.Q6J("model",t.req.customerTypeId)("listData",t.customerTypeCodes),e.xp6(2),e.Q6J("actionEnum",t.actionEnumCompany)("model",t.req.companyId)("listData",t.companyCodes),e.xp6(1),e.Q6J("actionEnum",t.actionEnumApartment)("model",t.req.apartmentId)("listData",t.apartmentCodes),e.xp6(5),e.Q6J("label","system.desc")("isDisableLength",!0)("model",t.req.description),e.xp6(2),e.Q6J("ngModel",t.req.isUse),e.xp6(1),e.Oqu(e.lcZ(64,53,"master.using")))},dependencies:[p.oG,Z.lW,Z.RK,q.Hw,b.JJ,b.On,O.Ie,W.f,K.W,Q.F,g.Ot],encapsulation:2}),i})();var J=s(13617);function se(i,l){1&i&&(e.TgZ(0,"span",14),e._uU(1," KHACH_VIP"),e.qZA())}function le(i,l){if(1&i&&(e.TgZ(0,"a",29,30)(2,"span"),e._uU(3),e.ALo(4,"transloco"),e.qZA()()),2&i){const n=l.$implicit,t=e.MAs(1);e.Tol("cursor-pointer"),e.Q6J("routerLink",n.path)("queryParams",n.query)("active",t.isActive),e.xp6(3),e.Oqu(e.lcZ(4,6,n.name))}}let ce=(()=>{class i{constructor(n,t,a,o,r){this._activatedRoute=n,this._customerService=t,this._translocoService=a,this._tenantService=o,this._router=r,this._unsubscribeAll=new T.x,this.isLoading=!1,this.customerId=null,this.data={customerId:null,fullName:null,customerCode:null,avatar:null},this.isVisible=!1,this.initialize()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}ngOnInit(){this._activatedRoute.paramMap.subscribe(n=>{null!==n.get("customerId")&&(this.customerId=n.get("customerId"),this.getDetail(n.get("customerId")))})}initialize(){this.tabs=[{path:"general",name:this._translocoService.translate("nav.general")}]}getDetail(n){this._customerService.getById(n).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:t})=>{this.data=t})}onRouterActive(n){this.childComponent=n}routerBack(){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers`)}onClickEdit(){this._router.navigateByUrl(`${this._tenantService.currentTenantId}/customers/edit/${this.customerId}`)}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.gz),e.Y36(I),e.Y36(g.Vn),e.Y36(L.g),e.Y36(u.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["customer-detail"]],decls:43,vars:14,consts:[[1,"flex","flex-col","flex-auto","min-w-0","w-full"],[1,"flex","flex-col"],[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","gap-0","bg-card","dark:bg-transparent","mb-6","px-6","items-start","sm:pt-8","md:px-8","shadow-md"],[1,"flex","flex-col","w-full","sm:flex-row","bg-card","dark:bg-transparent","items-start","sm:items-center","justify-between","pb-5"],[1,"flex","gap-6"],[1,"w-20","h-20","object-contain","overflow-hidden","flex","items-center"],["nz-image","",3,"nzSrc"],[1,"flex","flex-col","gap-3","flex-1"],[1,"text-3xl","font-medium","tracking-tight"],[1,"flex","flex-col","sm:flex-row","space-x-3","w-full"],[1,"flex","gap-2","items-center"],["svgIcon","heroicons_outline:building-office",1,"icon-size-4"],[1,"px-2.5","justify-center","items-center","rounded","bg-slate-100"],[1,"text-slate-500","md","leading-6"],["svgIcon","heroicons_outline:home",1,"icon-size-4"],["svgIcon","heroicons_outline:user-group",1,"icon-size-4"],["class","text-slate-500 md leading-6",4,"ngIf"],[1,"flex","flex-col","gap-2","w-full","items-end","justify-end","flex-1"],[1,"flex","gap-4","md:flex-row","flex-col"],["mat-flat-button","","color","accent",1,"flex","items-center","justify-center","gap-2",3,"click"],["svgIcon","heroicons_solid:arrow-uturn-left"],["mat-flat-button","","color","primary",1,"flex","items-center","justify-center","gap-2",3,"click"],["svgIcon","heroicons_solid:pencil",1,"icon-size-5"],["mat-tab-nav-bar","",1,"flex-1","w-3/4",3,"tabPanel"],["routerLinkActive","","routerLinkActive","","class","grow-0","mat-tab-link","",3,"class","routerLink","queryParams","active",4,"ngFor","ngForOf"],["tabPanel",""],[1,"flex","flex-col","w-full","pb-6","px-6"],[3,"activate"],["routerLinkActive","","routerLinkActive","","mat-tab-link","",1,"grow-0",3,"routerLink","queryParams","active"],["rla","routerLinkActive"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",1)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),e._UZ(8,"img",7),e.qZA(),e.TgZ(9,"div",8)(10,"div",9),e._uU(11),e.qZA(),e.TgZ(12,"div",10)(13,"div",11),e._UZ(14,"mat-icon",12),e.TgZ(15,"div",13)(16,"span",14),e._uU(17),e.qZA()()(),e.TgZ(18,"div",11),e._UZ(19,"mat-icon",15),e.TgZ(20,"div",13)(21,"span",14),e._uU(22),e.qZA()()(),e.TgZ(23,"div",11),e._UZ(24,"mat-icon",16),e.TgZ(25,"div",13),e.YNc(26,se,2,0,"span",17),e.qZA()()()()(),e.TgZ(27,"div",18)(28,"div",19)(29,"button",20),e.NdJ("click",function(){return t.routerBack()}),e._UZ(30,"mat-icon",21),e._uU(31),e.ALo(32,"transloco"),e.qZA(),e.TgZ(33,"button",22),e.NdJ("click",function(){return t.onClickEdit()}),e._UZ(34,"mat-icon",23),e._uU(35),e.ALo(36,"transloco"),e.qZA()()()(),e.TgZ(37,"nav",24),e.YNc(38,le,5,8,"a",25),e.qZA(),e._UZ(39,"mat-tab-nav-panel",null,26),e.qZA(),e.TgZ(41,"div",27)(42,"router-outlet",28),e.NdJ("activate",function(o){return t.onRouterActive(o)}),e.qZA()()()()()()),2&n){const a=e.MAs(40);let o,r;e.xp6(8),e.Q6J("nzSrc","https://localhost:5001"+t.data.avatar),e.xp6(3),e.AsE(" [",t.data.customerCode,"] ",t.data.fullName," "),e.xp6(6),e.hij(" ",null!==(o=t.data.companyName)&&void 0!==o?o:"_",""),e.xp6(5),e.hij(" ",null!==(r=t.data.apartmentName)&&void 0!==r?r:"_",""),e.xp6(4),e.Q6J("ngIf",!0===t.data.isVip),e.xp6(5),e.hij(" ",e.lcZ(32,10,"master.back"),""),e.xp6(4),e.hij(" ",e.lcZ(36,12,"edit"),""),e.xp6(2),e.Q6J("tabPanel",a),e.xp6(1),e.Q6J("ngForOf",t.tabs)}},dependencies:[u.lC,u.rH,u.Od,Z.lW,q.Hw,O.Ie,A.sg,A.O5,J.BU,J.sW,J.Nj,Q.F,g.Ot],encapsulation:2}),i})();var ue=s(42198);function me(i,l){1&i&&(e.TgZ(0,"span"),e._uU(1,"_"),e.qZA())}function de(i,l){if(1&i&&(e.TgZ(0,"tr")(1,"td",27),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA()()),2&i){const n=l.$implicit,t=l.index;e.oxw();const a=e.MAs(108);let o,r;e.xp6(2),e.Oqu((a.nzPageIndex-1)*a.nzPageSize+t+1),e.xp6(2),e.Oqu(null!==(o=n.cardName)&&void 0!==o?o:"_"),e.xp6(2),e.Oqu(null!==(r=n.cardCode)&&void 0!==r?r:"_")}}function pe(i,l){if(1&i&&(e.TgZ(0,"tr")(1,"td",27),e._uU(2),e.qZA(),e.TgZ(3,"td",28),e.ynx(4),e._UZ(5,"img",29),e.BQk(),e.qZA()()),2&i){const n=l.index,t=e.oxw(),a=e.MAs(125);e.xp6(2),e.Oqu((a.nzPageIndex-1)*a.nzPageSize+n+1),e.xp6(3),e.Q6J("src","https://localhost:5001"+t.listFaceData[n],e.LSH)}}function ge(i,l){if(1&i&&(e.TgZ(0,"tr")(1,"td",27),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"qrcode",30,31),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA()()),2&i){const n=l.$implicit,t=l.index;e.oxw();const a=e.MAs(139);e.xp6(2),e.Oqu((a.nzPageIndex-1)*a.nzPageSize+t+1),e.xp6(2),e.Q6J("qrdata",n)("width",64)("errorCorrectionLevel","M"),e.xp6(3),e.Oqu(n)}}const he=[{path:"customers",component:ee,children:[{path:"",component:ie},{path:"create",component:X},{path:"edit/:customerId",component:X},{path:"detail",children:[{path:":customerId",component:ce,children:[{path:"general",component:(()=>{class i{constructor(n,t,a,o,r,h,f){this._activatedRoute=n,this._customerService=t,this._translocoService=a,this._biostationService=o,this._tenantService=r,this._router=h,this._matDialog=f,this._unsubscribeAll=new T.x,this.isLoading=!1,this.customerId=null,this.data={customerId:null,fullName:null,customerCode:null,avatar:null},this.listFaceData=[],this.listCard=[],this.listQRCodeData={qrContent:[]}}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}ngOnInit(){this._activatedRoute.parent.paramMap.subscribe(n=>{null!==n.get("customerId")&&(this.customerId=n.get("customerId"),this.getDetail(n.get("customerId")),this.getBioStationInformation(n.get("customerId")))})}getDetail(n){this._customerService.getById(n).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:t})=>{this.data=t})}getBioStationInformation(n){this._biostationService.getBiostationInformation({staffId:null,customerId:n,outsideCustomerId:null}).pipe((0,d.R)(this._unsubscribeAll)).subscribe(({data:t})=>{this.listFaceData=t.face.map(a=>`data:image/jpeg;base64,${a}`),t.card&&t.card.length&&t.card.forEach(a=>{"RFID"==a.cardTypeId&&(this.listCard.push(a.cardId),this.listCard=[...this.listCard]),"QRCODE"==a.cardTypeId&&(this.listQRCodeData.qrContent.push(a.cardId),this.listQRCodeData.qrContent=[...this.listQRCodeData.qrContent])})})}openBiostationConfig(){this._matDialog.open(ue.I,{disableClose:!1,data:{staffId:null,customerId:this.customerId,outsideCustomerId:null}}).afterClosed().subscribe(t=>{t&&this.getDetail(this.customerId)})}}return i.\u0275fac=function(n){return new(n||i)(e.Y36(u.gz),e.Y36(I),e.Y36(g.Vn),e.Y36($.h),e.Y36(L.g),e.Y36(u.F0),e.Y36(z.uw))},i.\u0275cmp=e.Xpm({type:i,selectors:[["customer-general"]],decls:153,vars:96,consts:[[1,"w-full"],[1,"bg-card","shadow","rounded-md","overflow-hidden"],[1,"px-6","py-6","space-y-6"],[1,"flex","flex-col","space-y-6","w-full","h-full"],[1,"flex","flex-col","w-full","h-full","gap-4"],[1,"text-xl","font-medium"],[1,"border-b","w-full"],[1,"flex","gap-4","md:flex-row","flex-col"],[1,"flex","flex-col","flex-1"],[1,"text-md","font-medium","text-slate-500","w-52"],[1,"font-medium","mb-2"],["color","primary",1,"flex-1",3,"checked","readOnly"],[1,"flex","flex-1"],[4,"ngIf"],[1,"flex-1"],[1,"w-full","mt-6"],[1,"flex","justify-between","items-center"],["mat-flat-button","",1,"gap-2",3,"color","click"],["svgIcon","heroicons_solid:cog-6-tooth",1,"icon-size-5"],["nzShowSizeChanger","","nzBordered","true","nzSize","small",1,"flex-1",3,"nzData","nzLoading"],["cardTable",""],["nzWidth","70px","nzAlign","center"],["nzWidth","100px"],[4,"ngFor","ngForOf"],[1,"border-r"],["faceTable",""],["qrTable",""],["nzAlign","center"],[1,"overflow-ellipsis","overflow-hidden","max-w-xs"],[1,"max-w-20","max-h-10",3,"src"],[3,"qrdata","width","errorCorrectionLevel"],["parent",""]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"div",4)(6,"span",5),e._uU(7),e.ALo(8,"transloco"),e.qZA(),e._UZ(9,"div",6),e.qZA()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"span",10),e._uU(14),e.ALo(15,"transloco"),e.qZA()(),e.TgZ(16,"span"),e._uU(17),e.qZA()(),e.TgZ(18,"div",8)(19,"div",9)(20,"span",10),e._uU(21),e.ALo(22,"transloco"),e.qZA()(),e.TgZ(23,"span"),e._uU(24),e.qZA()(),e.TgZ(25,"div",8)(26,"div",9)(27,"span",10),e._uU(28),e.ALo(29,"transloco"),e.qZA()(),e.TgZ(30,"span"),e._uU(31),e.qZA()(),e.TgZ(32,"div",8)(33,"div",9)(34,"span",10),e._uU(35),e.ALo(36,"transloco"),e.qZA()(),e.TgZ(37,"span"),e._uU(38),e.qZA()()(),e.TgZ(39,"div",7)(40,"mat-checkbox",11),e._uU(41),e.ALo(42,"transloco"),e.qZA(),e.TgZ(43,"mat-checkbox",11),e._uU(44),e.ALo(45,"transloco"),e.qZA(),e.TgZ(46,"mat-checkbox",11),e._uU(47),e.ALo(48,"transloco"),e.qZA(),e.TgZ(49,"div",8)(50,"div",9)(51,"span",10),e._uU(52),e.ALo(53,"transloco"),e.qZA()(),e.TgZ(54,"span"),e._uU(55),e.qZA()()(),e.TgZ(56,"div",7)(57,"div",8)(58,"div",9)(59,"span",10),e._uU(60),e.ALo(61,"transloco"),e.qZA()(),e.TgZ(62,"span"),e._uU(63),e.qZA()(),e.TgZ(64,"div",8)(65,"div",9)(66,"span",10),e._uU(67),e.ALo(68,"transloco"),e.qZA()(),e.TgZ(69,"span"),e._uU(70),e.qZA()(),e._UZ(71,"div",12)(72,"div",12),e.qZA(),e.TgZ(73,"div",7)(74,"div",8)(75,"div",9)(76,"span",10),e._uU(77),e.ALo(78,"transloco"),e.qZA()(),e.YNc(79,me,2,0,"span",13),e.TgZ(80,"span"),e._uU(81),e.qZA()()(),e.TgZ(82,"div",7)(83,"mat-checkbox",11),e._uU(84),e.ALo(85,"transloco"),e.qZA(),e._UZ(86,"div",14)(87,"div",14)(88,"div",14),e.qZA()()()(),e.TgZ(89,"div",15)(90,"div",1)(91,"div",2)(92,"div",3)(93,"div")(94,"div",4)(95,"div",16)(96,"span",5),e._uU(97),e.ALo(98,"transloco"),e.qZA(),e.TgZ(99,"button",17),e.NdJ("click",function(){return t.openBiostationConfig()}),e._UZ(100,"mat-icon",18),e.TgZ(101,"span"),e._uU(102),e.ALo(103,"transloco"),e.qZA()()(),e._UZ(104,"div",6),e.qZA()(),e.TgZ(105,"div",7)(106,"div",8)(107,"nz-table",19,20)(109,"thead")(110,"tr")(111,"th",21),e._uU(112),e.ALo(113,"transloco"),e.qZA(),e.TgZ(114,"th",22),e._uU(115),e.ALo(116,"transloco"),e.qZA(),e.TgZ(117,"th",22),e._uU(118),e.ALo(119,"transloco"),e.qZA()()(),e.TgZ(120,"tbody"),e.YNc(121,de,7,3,"tr",23),e.qZA()()(),e._UZ(122,"div",24),e.TgZ(123,"div",8)(124,"nz-table",19,25)(126,"thead")(127,"tr")(128,"th",21),e._uU(129),e.ALo(130,"transloco"),e.qZA(),e.TgZ(131,"th",22),e._uU(132),e.ALo(133,"transloco"),e.qZA()()(),e.TgZ(134,"tbody"),e.YNc(135,pe,6,2,"tr",23),e.qZA()()(),e._UZ(136,"div",24),e.TgZ(137,"div",8)(138,"nz-table",19,26)(140,"thead")(141,"tr")(142,"th",21),e._uU(143),e.ALo(144,"transloco"),e.qZA(),e.TgZ(145,"th",22),e._uU(146),e.ALo(147,"transloco"),e.qZA(),e.TgZ(148,"th",22),e._uU(149),e.ALo(150,"transloco"),e.qZA()()(),e.TgZ(151,"tbody"),e.YNc(152,ge,8,5,"tr",23),e.qZA()()()()()()()()()),2&n){const a=e.MAs(108),o=e.MAs(125),r=e.MAs(139);let h,f,v,x,y,U,w;e.xp6(7),e.Oqu(e.lcZ(8,50,"master.general")),e.xp6(7),e.Oqu(e.lcZ(15,52,"master.customerCode")),e.xp6(3),e.Oqu(null!==(h=t.data.customerCode)&&void 0!==h?h:"_"),e.xp6(4),e.Oqu(e.lcZ(22,54,"master.fullName")),e.xp6(3),e.Oqu(null!==(f=t.data.fullName)&&void 0!==f?f:"_"),e.xp6(4),e.Oqu(e.lcZ(29,56,"master.phoneNumber")),e.xp6(3),e.Oqu(null!==(v=t.data.phoneNumber)&&void 0!==v?v:"_"),e.xp6(4),e.Oqu(e.lcZ(36,58,"master.email")),e.xp6(3),e.Oqu(null!==(x=t.data.email)&&void 0!==x?x:"_"),e.xp6(2),e.Q6J("checked",t.data.isOfficeCustomer)("readOnly",!0),e.xp6(1),e.hij(" ",e.lcZ(42,60,"master.guestCompany")," "),e.xp6(2),e.Q6J("checked",t.data.isApartmentCustomer)("readOnly",!0),e.xp6(1),e.hij(" ",e.lcZ(45,62,"master.guestApartment")," "),e.xp6(2),e.Q6J("checked",t.data.isVip)("readOnly",!0),e.xp6(1),e.hij(" ",e.lcZ(48,64,"master.guestVIP")," "),e.xp6(5),e.Oqu(e.lcZ(53,66,"master.guestGroup")),e.xp6(3),e.Oqu(null!==(y=t.data.customerTypeName)&&void 0!==y?y:"_"),e.xp6(5),e.Oqu(e.lcZ(61,68,"master.company")),e.xp6(3),e.Oqu(null!==(U=t.data.companyName)&&void 0!==U?U:"_"),e.xp6(4),e.Oqu(e.lcZ(68,70,"master.apartment")),e.xp6(3),e.Oqu(null!==(w=t.data.apartmentName)&&void 0!==w?w:"_"),e.xp6(7),e.Oqu(e.lcZ(78,72,"system.desc")),e.xp6(2),e.Q6J("ngIf",!t.data.description),e.xp6(2),e.Oqu(t.data.description),e.xp6(2),e.Q6J("checked",t.data.isUse)("readOnly",!0),e.xp6(1),e.hij(" ",e.lcZ(85,74,"master.using")," "),e.xp6(13),e.Oqu(e.lcZ(98,76,"master.general")),e.xp6(2),e.Q6J("color","primary"),e.xp6(3),e.Oqu(e.lcZ(103,78,"vime.checkInOutSettings")),e.xp6(5),e.Q6J("nzData",t.listCard)("nzLoading",t.isLoading),e.xp6(5),e.Oqu(e.lcZ(113,80,"no")),e.xp6(3),e.Oqu(e.lcZ(116,82,"vime.cardName")),e.xp6(3),e.Oqu(e.lcZ(119,84,"vime.cardCode")),e.xp6(3),e.Q6J("ngForOf",a.data),e.xp6(3),e.Q6J("nzData",t.listFaceData)("nzLoading",t.isLoading),e.xp6(5),e.Oqu(e.lcZ(130,86,"no")),e.xp6(3),e.Oqu(e.lcZ(133,88,"vime.face")),e.xp6(3),e.Q6J("ngForOf",o.data),e.xp6(3),e.Q6J("nzData",t.listQRCodeData.qrContent)("nzLoading",t.isLoading),e.xp6(5),e.Oqu(e.lcZ(144,90,"no")),e.xp6(3),e.Oqu(e.lcZ(147,92,"vime.qrCode")),e.xp6(3),e.Oqu(e.lcZ(150,94,"content")),e.xp6(3),e.Q6J("ngForOf",r.data)}},dependencies:[p.oG,c.N8,c.Uo,c._C,c.Om,c.p0,c.$Z,c.UX,Z.lW,q.Hw,V.i,A.sg,A.O5,g.Ot],encapsulation:2}),i})(),pathMatch:"full"}]}]}]}];var fe=s(74473),_e=s(3914),Ce=s(92982);let Ze=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[{provide:z.WI,useValue:{}},{provide:z.so,useValue:{}},{provide:R.u7,useValue:R.iF}],imports:[u.Bz.forChild(he),C.lN,m.c,p.p9,c.HQ,Z.ot,q.Ps,G.AV,N.vO,F.qw,b.u5,g.y4,O.Gb,_e.G,A.ez,H.rP,fe.c,S.Tx,J.Nh,Ce.F]}),i})()}}]);