(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"w/Lo":function(t,e,n){"use strict";n.r(e),n.d(e,"TestportalModule",(function(){return m}));var s=n("fXoL"),r=n("ofXK"),i=n("tyNb"),o=n("yTNM"),a=n("2v4T"),l=n("0oXA"),c=function(t,e,n,s,r,i){this.id=t,this.stuid=e,this.testid=n,this.status=s,this.createddate=r,this.updateddate=i},d=n("VyX+"),u=n("E2Sg"),p=function(t,e,n,s){var r,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},h=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,s,r){var i=this;this.testportalService=t,this.examService=e,this.apiService=n,this.router=s,this.activatedRoute=r,this.data={questions:[{id:1,question:"What is Angular?",options:["Front End Framework","JavaScript Latest Version","Back End Framework","Library"],answers:["Front End Framework"],isMultiChoice:!1,isMCQ:!0},{id:2,question:"What is DJango?",options:["Back End Framework","Python Framework","PHP Framework","Library"],answers:["Back End Framework","Python Framework"],isMultiChoice:!0,isMCQ:!0},{id:3,question:"Explain what is Vue.js.",isMultiChoice:!1,isMCQ:!1},{id:4,question:"Explain what is Routing in detail.",isMultiChoice:!1,isMCQ:!1}]},this.tests=[{id:1,stdId:1,subject:"Network",title:"CCNA - 1",totalQuestions:2,totalMarks:30,totalDuration:30,quizQuestions:[1,2]},{id:2,stdId:1,subject:"Computer",title:"Angular Demo Test",totalQuestions:2,totalMarks:30,totalDuration:30,quizQuestions:[2,3]},{id:3,stdId:1,subject:"Network",title:"CCNP - 1",totalQuestions:2,totalMarks:30,totalDuration:30,quizQuestions:[3,4]},{id:4,stdId:1,subject:"Computer",title:"React Test",totalQuestions:2,totalMarks:30,totalDuration:30,quizQuestions:[1,4]}],this.submitTestModel=new d.a,this.attemptTestModel=new c,this.attempt=[],this.studentTestList=[],this.pendingtest=[],this.notattempttest=[],this.completedtest=[],this.ruleBoxFlag=!1,this.questionBoxFlag=!1,this.testInfoBoxFlag=!1,this.stuid=localStorage.getItem("UserId"),this.testModel=new l.a,this.activatedRoute.queryParams.subscribe((function(t){i.type=t.val})),this.getStudentTest()}return t.prototype.ngOnInit=function(){},t.prototype.getStudentTest=function(){var t=this;this.examService.getActiveStudentTest(this.stuid).subscribe((function(e){t.studentTestList=e,t.studentTestList.forEach((function(e){"assigned"==e.teststatus?t.pendingtest.push(e):"started"==e.teststatus?t.notattempttest.push(e):t.completedtest.push(e)}))}))},t.prototype.studentTest=function(t){this.testId=t.id,this.testModel.subject=t.subject,this.testModel.testname=t.testname,this.testModel.time=t.totalminute,this.testModel.marks=t.totalmarks,this.testInfoBoxFlag=!0},t.prototype.startStuentExam=function(){var t=this;this.testInfoBoxFlag=!1,this.ruleBoxFlag=!1,this.questionBoxFlag=!0,this.examService.getViewTest(this.testId).subscribe((function(e){t.queList=e,t.testportalService.updatePendingTest(t.testId,t.stuid).subscribe((function(t){})),t.queList.forEach((function(e){"MCQ"==e.quetype&&t.examService.getOptionValue(e.id).subscribe((function(t){e.options=t}))}))}))},t.prototype.setStatusOfTest=function(){},t.prototype.showRulesBox=function(){this.questionBoxFlag=!1,this.testInfoBoxFlag=!1,this.ruleBoxFlag=!0},t.prototype.cancelExam=function(){this.testInfoBoxFlag=!0,this.ruleBoxFlag=!1,this.questionBoxFlag=!1},t.prototype.backPendingTest=function(){this.testInfoBoxFlag=!1,this.ruleBoxFlag=!1,this.questionBoxFlag=!1},t.prototype.onItemChange=function(t,e){e.answer=t.optionlist},t.prototype.back=function(){this.router.navigate(["dashboard"])},t.prototype.studentTestSubmit=function(){var t=this;this.queList.forEach((function(e){e.studentid=localStorage.getItem("UserId"),e.testid=t.testId})),this.testportalService.saveStudentTest(this.queList).subscribe((function(e){"success"==e&&t.updateStatusOfTest()}))},t.prototype.updateStatusOfTest=function(){this.attemptTestModel.testid=this.testId,this.attemptTestModel.stuid=localStorage.getItem("UserId"),this.router.navigate(["dashboard"])},t.ctorParameters=function(){return[{type:u.a},{type:a.a},{type:o.a},{type:i.d},{type:i.a}]},t=p([Object(s.o)({selector:"app-testportal",template:'<div class="main-content">\r\n \r\n\r\n    <div class="row" *ngIf="!testInfoBoxFlag && !ruleBoxFlag && !questionBoxFlag && type==\'notattempt\'">\r\n      <div class="col-lg-3 col-md-6 col-sm-6" *ngFor="let s of notattempttest; let i = index">\r\n        <div class="card card-stats" (click)="openStdTest(s.id)">\r\n          <div class="card-body">\r\n            <div class="row">\r\n              <div class="col-5 col-md-4">\r\n                <div class="icon-big text-center icon-warning">\r\n                  <i class="fa fa-university"></i>\r\n                </div>\r\n              </div>\r\n              <div class="col-7 col-md-8">\r\n                <div class="numbers">\r\n                  <p class="card-title">{{ s.testname }}</p>\r\n                  <p class="card-category">Marks: {{ s.totalmarks }}</p>\r\n                  <p class="card-category">Minute: {{ s.totalminute }}</p>\r\n                  <p class="card-category">Not Attempted Test</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="card-footer" (click)="studentTest(s)">\r\n            <hr />\r\n            <div class="stats"><i class="fa fa-arrow-right"></i> Start Test</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style="bottom:60%;left:10%;position:absolute;height:10%;width: 70%; text-align: center;" *ngIf="notattempttest.length==0" >\r\n\r\n        <h1 style="color:gray">No Test</h1>\r\n        <a style="color:rgb(25, 25, 236);font-weight: bold;"><h5 style="font-weight: bold; text-decoration: underline;" (click)="back()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</h5></a>\r\n      </div>\r\n    </div>\r\n  \r\n \r\n  \r\n    <div class="row" *ngIf="!testInfoBoxFlag && !ruleBoxFlag && !questionBoxFlag && type==\'pending\'">\r\n      <div class="col-lg-3 col-md-6 col-sm-6" *ngFor="let s of pendingtest; let i = index">\r\n        <div class="card card-stats" (click)="openStdTest(s.id)">\r\n          <div class="card-body">\r\n            <div class="row">\r\n              <div class="col-5 col-md-4">\r\n                <div class="icon-big text-center icon-warning">\r\n                  <i class="fa fa-university"></i>\r\n                </div>\r\n              </div>\r\n              <div class="col-7 col-md-8">\r\n                <div class="numbers">\r\n                  <p class="card-title">{{ s.testname }}</p>\r\n                  <p class="card-category">Marks: {{ s.totalmarks }}</p>\r\n                  <p class="card-category">Minute: {{ s.totalminute }}</p>\r\n                  <p class="card-category">Pending Test</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="card-footer" (click)="studentTest(s)">\r\n            <hr />\r\n            <div class="stats"><i class="fa fa-arrow-right"></i> Start Test</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style="bottom:60%;left:10%;position:absolute;height:10%;width: 70%; text-align: center;" *ngIf="pendingtest.length ==0" >\r\n\r\n        <h1 style="color:gray">No Test</h1>\r\n        <a style="color:rgb(25, 25, 236);font-weight: bold;"><h5 style="font-weight: bold; text-decoration: underline;" (click)="back()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</h5></a>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n\r\n  <div *ngIf="testInfoBoxFlag" class="row">\r\n    <div class="col col-sm-12">\r\n      <div class="card text-center">\r\n        <div class="card-header">\r\n          <div class="row">\r\n            <div class="ml-md-auto">\r\n              <button type="cancel" class="btn btn-danger btn-round" (click)="backPendingTest()">\r\n                <i class="fa fa-arrow-left"></i> Back\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="card-body">\r\n          <h2>Exam Information</h2>\r\n          <h5 class="card-title">\r\n            Subject:\r\n            <span class="badge badge-danger">{{ testModel.subject }}</span>\r\n          </h5>\r\n          <h5 class="card-title">\r\n            Title:\r\n            <span class="badge badge-danger">{{ testModel.testname }}</span>\r\n          </h5>\r\n          <ul class="list-group">\r\n            <li class="\r\n                list-group-item\r\n                d-flex\r\n                justify-content-between\r\n                align-items-center\r\n              ">\r\n              Total Questions:{{ testModel.totalque }}\r\n              <h5><span class="badge badge-danger"></span></h5>\r\n            </li>\r\n            <li class="\r\n                list-group-item\r\n                d-flex\r\n                justify-content-between\r\n                align-items-center\r\n              ">\r\n              Total Marks:\r\n              <h5>\r\n                <span class="badge badge-danger">{{ testModel.marks }}</span>\r\n              </h5>\r\n            </li>\r\n            <li class="\r\n                list-group-item\r\n                d-flex\r\n                justify-content-between\r\n                align-items-center\r\n              ">\r\n              Total Duration:\r\n              <h5>\r\n                <span class="badge badge-danger">{{ testModel.time }}</span>\r\n              </h5>\r\n            </li>\r\n          </ul>\r\n          <button type="button" class="btn btn-primary" (click)="showRulesBox()">\r\n            Begin\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf="ruleBoxFlag" class="row card">\r\n    <div class="col-md-12 mr-auto ml-auto">\r\n      <div class="card-body" data-color="primary">\r\n        <h4 class="text-center">\r\n          Before You Start the Exam, Here are the Rules:\r\n        </h4>\r\n        <ol type="1">\r\n          <li>The quiz will be of half an hour duration.</li>\r\n          <li>You can attempt the quiz only once.</li>\r\n          <li>All questions are Multiple Choice Question.</li>\r\n          <li>Only one choice is correct.</li>\r\n          <li>\r\n            Every question carry different of marks.Negative marking for wrong\r\n            answers.\r\n          </li>\r\n          <li>Try answer as quickly as you can.</li>\r\n          <li>\r\n            If you press Refresh or Go Back to previous page, there will be new\r\n            question for you and the question you were on will be counted as\r\n            attempted.\r\n          </li>\r\n          <li>\r\n            You will be able to see the RESULT immediately when you submit the\r\n            answer.\r\n          </li>\r\n          <li>Click Start Test to attempt the quiz.</li>\r\n          <li>\r\n            The time will start the moment you click the Start Test button.\r\n          </li>\r\n          <li>You can resume this quiz, if interrupted due to any reason.</li>\r\n          <li>\r\n            Click on Next button to move next question. Please note that you\r\n            will not be able to go back to any of the previous question after\r\n            clicking Next button.\r\n          </li>\r\n          <li>Click on Submit Test button on completion of the quiz.</li>\r\n        </ol>\r\n        <div class="row">\r\n          <div class="col col-sm-12 text-center">\r\n            <button type="cancel" class="btn btn-round" (click)="cancelExam()">\r\n              <i class="fa fa-times" aria-hidden="true"></i> Cancel\r\n            </button>\r\n            <button type="button" class="btn btn-round btn-success" (click)="startStuentExam()">\r\n              <i class="fa fa-hourglass-start" aria-hidden="true"></i> START\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf="questionBoxFlag">\r\n    <div class="row">\r\n      <div class="col-md-10 mr-auto ml-auto">\r\n        <div *ngFor="let dt of queList; let i = index" class="jumbotron" data-color="primary" id="{{ \'que\' + i }}">\r\n          <h2 *ngIf="dt.question != undefined">{{ dt.question }}</h2>\r\n          <div *ngIf="dt.imageque != NULL">\r\n            <img src="http://31.220.59.174:3000{{dt.imageque}}">\r\n          </div>\r\n\r\n          <div *ngIf="dt.quetype == \'MCQ\'">\r\n            <div *ngFor="let op of dt.options">\r\n              <div class="row">\r\n                <div class="col col-sm-12" *ngIf="op.optionlist != undefined">\r\n                  <label><input name="radioOpt" type="radio" value="{{op.optionlist}}"\r\n                      (change)="onItemChange(op , dt)" /> {{\r\n                    op.optionlist\r\n                    }} </label>\r\n                </div>\r\n                <div class="col col-sm-12"\r\n                  *ngIf="(op.imageoption != null &&  op.optionlist == undefined )|| (op.imageoption != \'null\' &&  op.optionlist == undefined)">\r\n                  <img *ngIf="op.imageoption != null  || op.imageoption != \'null\'"\r\n                    src="http://31.220.59.174:3000{{op.imageoption}}">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf="dt.quetype != \'MCQ\'" class="row">\r\n            <div class="col col-sm-12">\r\n              <label for="ansta">Write Your Answer Here</label>\r\n              <pre></pre>\r\n              <textarea id="ansta" [(ngModel)]="dt.answer" name="ansta" rows="4" cols="100"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class="sq"></div>\r\n          <div class="lq"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="col-md-4 offset-md-5">\r\n        <button type="submit" class="btn btn-info btn-round" (click)="studentTestSubmit()">\r\n          <i class="fa fa-paper-plane" aria-hidden="true"></i> Submit Test\r\n        </button>\r\n        \x3c!-- <button type="cancel" class="btn btn-danger btn-round" (click)="closeTeacherForm()">\r\n                    <i class="fa fa-arrow-left"></i> Back</button> --\x3e\r\n        \x3c!-- <button type="submit" class="btn btn-info btn-round" routerLink="/manage/std">Add Standard</button> --\x3e\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style="bottom:60%;left:10%;position:absolute;height:10%;width: 70%; text-align: center;" >\r\n\r\n    <h1 style="color:gray">No Test</h1>\r\n    <a style="color:blue;font-weight: bold;"><h5 style="font-weight: bold; text-decoration: underline;" (click)="back()"><i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</h5></a>\r\n  </div>\r\n</div>',styles:[""]}),h("design:paramtypes",[u.a,a.a,o.a,i.d,i.a])],t)}(),g=[{path:"",children:[{path:"testportal",component:f}]}],v=n("3Pt+"),b=function(t,e,n,s){var r,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(i<3?r(o):i>3?r(e,n,o):r(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},m=function(){function t(){}return t=b([Object(s.M)({declarations:[f],imports:[r.c,i.e.forChild(g),v.c]})],t)}()}}]);