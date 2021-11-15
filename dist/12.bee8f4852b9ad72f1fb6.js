(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{TLzw:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationModule",(function(){return v}));var r=e("fXoL"),i=e("ofXK"),c=e("WIKx"),a=function(t,n,e,r){var i,c=arguments.length,a=c<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(a=(c<3?i(a):c>3?i(n,e,a):i(n,e))||a);return c>3&&a&&Object.defineProperty(n,e,a),a},o=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},s=function(){function t(t){this.calenderService=t,this.eventList=[]}return t.prototype.ngOnInit=function(){this.getEventDetails()},t.prototype.getEventDetails=function(){var t=this;this.calenderService.getStdList().subscribe((function(n){t.eventList=n}))},t.ctorParameters=function(){return[{type:c.a}]},t=a([Object(r.o)({selector:"app-notification",template:'<div class="main-content">\r\n    <div class="row">\r\n        <div class="col-lg-6 col-md-12 text-center">\r\n            <div class="card  card-tasks">\r\n                <div class="card-header ">\r\n                    <h4 class="card-title">Upcoming Events</h4>\r\n                    \x3c!-- <h5 class="card-category">Backend development</h5> --\x3e\r\n                </div>\r\n                <div class="card-body ">\r\n                    <div class="table-full-width table-responsive">\r\n                        <table class="table">\r\n\r\n                            <tbody>\r\n                                <tr *ngFor="let ev of eventList,let i = index">\r\n\r\n                                    <td class="text-left">\r\n                                        {{ev.date}}\r\n                                    </td>\r\n                                    <td class="text-left">{{ev.title}}</td>\r\n                                    <td class="td-actions text-right">\r\n                                        <button type="button" rel="tooltip" title=""\r\n                                            class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"\r\n                                            data-original-title="Edit Task">\r\n                                            <i class="nc-icon nc-ruler-pencil"></i>\r\n                                        </button>\r\n                                        <button type="button" rel="tooltip" title=""\r\n                                            class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"\r\n                                            data-original-title="Remove">\r\n                                            <i class="nc-icon nc-simple-remove"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class="card-footer ">\r\n                    <hr>\r\n                    <div class="stats">\r\n                        \x3c!-- <i class="fa fa-refresh spin"></i> Updated 3 minutes ago --\x3e\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="col-lg-6 col-md-12 text-center">\r\n            <div class="card  card-tasks">\r\n                <div class="card-header ">\r\n                    <h4 class="card-title">New Horizons</h4>\r\n                    <h5 class="card-category">Backend development</h5>\r\n                </div>\r\n                <div class="card-body ">\r\n                    <div class="table-full-width table-responsive">\r\n                        \x3c!-- <table class="table">\r\n                            <tbody>\r\n                                <tr *ngFor="ev of eventList,let i of ind">\r\n                                    <td class="text-left">\r\n                                        {{ev.date}}\r\n                                    </td>\r\n                                    <td class="text-left">{{ev.title}}\r\n                                    </td>\r\n                                    <td class="td-actions text-right">\r\n                                        <button type="button" rel="tooltip" title=""\r\n                                            class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"\r\n                                            data-original-title="Edit Task">\r\n                                            <i class="nc-icon nc-ruler-pencil"></i>\r\n                                        </button>\r\n                                        <button type="button" rel="tooltip" title=""\r\n                                            class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"\r\n                                            data-original-title="Remove">\r\n                                            <i class="nc-icon nc-simple-remove"></i>\r\n                                        </button>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody> --\x3e\r\n                        \x3c!-- </table> --\x3e\r\n                    </div>\r\n                </div>\r\n                <div class="card-footer ">\r\n                    <hr>\r\n                    <div class="stats">\r\n                        <i class="fa fa-refresh spin"></i> Updated 3 minutes ago\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>',styles:[""]}),o("design:paramtypes",[c.a])],t)}(),l=e("3Pt+"),d=e("tyNb"),b=[{path:"",children:[{path:"notification",component:s}]}],f=function(t,n,e,r){var i,c=arguments.length,a=c<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,n,e,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(a=(c<3?i(a):c>3?i(n,e,a):i(n,e))||a);return c>3&&a&&Object.defineProperty(n,e,a),a},v=function(){function t(){}return t=f([Object(r.M)({declarations:[s],imports:[i.c,l.c,d.e.forChild(b)]})],t)}()}}]);