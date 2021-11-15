(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{f3GJ:function(t,e,n){"use strict";n.r(e),n.d(e,"AttendanceModule",(function(){return k}));var a=n("fXoL"),s=n("ofXK"),r=n("lh0T"),i=n("WIKx"),d=n("ogxq"),c=n("tyNb"),l=function(t,e,n,a,s,r,i){this.id=t,this.title=e,this.date=n,this.studentId=a,this.active=s,this.createddate=r,this.updateddate=i},o=n("yTNM"),h=n("lDv5"),v=n("pdMw"),u=function(t,e,n,a){var s,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},f=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n,a,s,i){var c=this;this.activatedRoute=t,this.calendarService=e,this.apiService=n,this.router=a,this.registerService=s,this.manageService=i,this.atd=[],this.calendarModel=new r.a,this.attandanceModel=new l,this.attandanceList=[],this.studentAtte=!1,this.eventList=[],this.stdList=[],this.posts=[],this.calendarOptions={initialView:"dayGridMonth",selectable:!0,weekends:!0,editable:!0,plugins:[d.a],selectLongPressDelay:1e3,dateClick:this.handleDateClick.bind(this),events:[],eventColor:"brown"},this.prsnt=[],this.absnt=[],this.activatedRoute.queryParams.subscribe((function(t){c.stdId=t.id,c.role=t.val,c.ref_id=t.value,c.std=t.sel}))}return t.prototype.ngOnInit=function(){this.stdId?(this.studentAtte=!1,this.getStdList()):(this.studentAtte=!0,this.getStudentAttandance())},t.prototype.getStdList=function(){var t=this;this.manageService.getStdList().subscribe((function(e){t.stdList=e,t.stdList.forEach((function(e){e.id==t.stdId&&(t.stdname=e.stdname)}))}))},t.prototype.getStudent=function(){var t=this;this.registerService.getStudentList(this.stdId).subscribe((function(e){t.students=e,t.students.forEach((function(t){t.checked=!1}))}))},t.prototype.isSelected=function(t){var e={stuid:t.id,date:this.selected,title:this.attandanceModel.title};this.atd.push(e)},t.prototype.isAllSelected=function(t){var e=this;null==this.attandanceModel.title?this.apiService.showNotification("top","center","Please Select Title.","danger"):1==t?this.students.forEach((function(t){t.checked=!0;var n={stuid:t.id,date:e.selected,title:e.attandanceModel.title};e.atd.push(n)})):(this.students.forEach((function(t){t.checked=!1})),this.atd=[])},t.prototype.handleDateClick=function(t){this.stdId?(this.getStudent(),this.showModal=!0,this.selected=t.dateStr,t.title=this.attandanceModel.title):this.showModal=!1},t.prototype.hidemodal=function(){this.showModal=!1,this.atd=[]},t.prototype.addStudentAttandance=function(){var t=this;this.atd,this.calendarService.saveAttandanceList(this.atd).subscribe((function(e){t.apiService.showNotification("top","right","Attandance Added Successfully.","success"),t.showModal=!1,t.atd=[]}))},t.prototype.getStudentAttandance=function(){var t=this;this.calendarService.getAttandanceList(this.ref_id).subscribe((function(e){t.calendarOptions.events=e,t.attandanceList=e}))},t.prototype.backToStudent=function(){this.router.navigate(["/register"],{queryParams:{id:this.stdId,val:this.role}})},t.prototype.backToRegister=function(){this.router.navigate(["/register"],{queryParams:{val:"Student",qstd:this.std}})},t.ctorParameters=function(){return[{type:c.a},{type:i.a},{type:o.a},{type:c.d},{type:h.a},{type:v.a}]},t=u([Object(a.o)({selector:"app-attendance",template:'<div class="main-content">\r\n    <div class="card" *ngIf="studentAtte">\r\n        <div class="card-header">\r\n            <div class="row">\r\n                <div class="col-md-10">\r\n                    <h4 class="card-title">View Attandance</h4>\r\n                </div>\r\n                <div class="ml-md-auto">\r\n                    <button type="cancel" class="btn btn-danger btn-round" (click)="backToRegister()">\r\n                        <i class="fa fa-arrow-left"></i> Back\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row"*ngIf="studentAtte">\r\n        <div class="col-md-12">\r\n            <div class="row">\r\n                <div class="col-md-6">\r\n                    <div class="card card-calendar">\r\n                        <div class="card-content">\r\n                            <full-calendar [options]="calendarOptions" style="color:red;"></full-calendar>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="modal" id="myModal" [style.display]="showModal ? \'block\' : \'none\'">\r\n        <div class="modal-dialog modal-lg">\r\n            <div class="modal-content">\r\n                <div class="modal-header">\r\n                    <div class="row">\r\n                        <div class="col-md-3">\r\n                            <h5 class="model-title">{{stdname}}</h5>\r\n                        </div>\r\n                        <div class="col-md-5">\r\n                            <h5 class="model-title">Selected Date: {{selected}}</h5>\r\n                        </div>\r\n                        <div class="ml-md-auto">\r\n                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"\r\n                                (click)="hidemodal()">\r\n                                <i class="nc-icon nc-simple-remove"> &nbsp;</i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-body">\r\n                    <div class="instruction">\r\n                        <form class="form-horizontal" name="mainCateRegForm" #mainCateRegForm="ngForm">\r\n                            <div class="card card-plain">\r\n                                <div class="card-header">\r\n                                    <div class="row">\r\n                                        <div class="col-md-6">\r\n                                            <h4 class="card-title">Select Student</h4>\r\n                                        </div>\r\n                                        <div class="col-md-2" style="margin-top: 20px!important;">\r\n                                            <div class="form-check-radio">\r\n                                                <label class="form-check-label">\r\n                                                    <input class="form-check-input" type="radio" name="title"\r\n                                                        id="Present" value="Present"\r\n                                                        [(ngModel)]="attandanceModel.title"> Present\r\n                                                    <span class="form-check-sign"></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class="col-md-2" style="margin-top: 20px!important;">\r\n\r\n                                            <div class="form-check-radio">\r\n                                                <label class="form-check-label">\r\n                                                    <input class="form-check-input" type="radio" name="title"\r\n                                                        id="Abscent" value="Abscent"\r\n                                                        [(ngModel)]="attandanceModel.title"> Absent\r\n                                                    <span class="form-check-sign"></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="card-body">\r\n                                    <div class="table-responsive">\r\n                                        <table class="table">\r\n                                            <thead class="text-primary">\r\n                                                <th class="text-left">\r\n                                                    <div class="form-check">\r\n                                                        <label class="form-check-label">\r\n                                                            <input [disabled]="!attandanceModel.title"\r\n                                                                class="form-check-input" [(ngModel)]="isMasterSel"\r\n                                                                name="list_name" value="h1"\r\n                                                                (change)="isAllSelected(isMasterSel)" type="checkbox" />\r\n                                                            <span class="form-check-sign"></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </th>\r\n                                                <th class="text-center">#</th>\r\n                                                <th class="text-center">Name</th>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor="let s of students; let i = index">\r\n                                                    <td>\r\n                                                        <div class="form-check">\r\n                                                            <label class="form-check-label">\r\n                                                                <input class="form-check-input" [(ngModel)]="s.checked"\r\n                                                                    name="list_name" (change)="isSelected(s)"\r\n                                                                    type="checkbox" />\r\n                                                                <span class="form-check-sign"></span>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td class="text-center">{{ i + 1 }}</td>\r\n                                                    <td class="text-center">\r\n                                                        {{ s.firstname }} {{ s.middlename }} {{ s.lastname }}\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class="card-footer">\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer justify-content-center">\r\n                    <button type="button" class="btn btn-info btn-round" [disabled]="!attandanceModel.title "\r\n                        data-dismiss="modal" (click)="addStudentAttandance()">\r\n                        <i class="fa fa-paper-plane" aria-hidden="true"></i> Save\r\n                    </button>\r\n                    <button type="button" class="btn btn-secondary btn-round" data-dismiss="modal"\r\n                        (click)="hidemodal()">\r\n                        <i class="fa fa-times" aria-hidden="true"></i> Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="card" *ngIf="!studentAtte">\r\n        <div class="card-header">\r\n            <div class="row">\r\n                <div class="col-md-10">\r\n                    <h4 class="card-title">Add Attandance</h4>\r\n                </div>\r\n                <div class="ml-md-auto">\r\n                    <button type="cancel" class="btn btn-danger btn-round" (click)="backToStudent()">\r\n                        <i class="fa fa-arrow-left"></i> Back\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row" *ngIf="!studentAtte">\r\n        <div class="col-md-12">\r\n            <div class="row">\r\n                <div class="col-md-6">\r\n                    <div class="card card-calendar">\r\n                        <div class="card-content">\r\n                            <full-calendar [options]="calendarOptions"></full-calendar>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>',styles:[""]}),f("design:paramtypes",[c.a,i.a,o.a,c.d,h.a,v.a])],t)}(),m=n("3Pt+"),b=[{path:"",children:[{path:"attendance",component:p}]}],y=n("IvIE"),g=function(t,e,n,a){var s,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var d=t.length-1;d>=0;d--)(s=t[d])&&(i=(r<3?s(i):r>3?s(e,n,i):s(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},k=function(){function t(){}return t=g([Object(a.M)({declarations:[p],imports:[s.c,m.c,y.a,c.e.forChild(b)]})],t)}()}}]);