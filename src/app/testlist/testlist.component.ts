import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { ExamService } from 'app/exam/exam.service';
import { Subject } from 'app/manage/subject/subject.model';
import { RegisterService } from 'app/register/register.service';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.css']
})
export class TestlistComponent implements OnInit {
  submittedTest: any = [];
  public subjects: any=[];
  studentId: number = 0;
  subId: any;
  selectedSub: any;
  sub: any;
  disptest: any = [];
  viewTest: boolean = false;
  clickViewTest: boolean = false;
  clickTest: boolean = false;
  questions: any = [];
  testName: any;
  selectedStd: any;
  saveresult: any = {};
  stdid: any;
  pendingtestlist:any=[];
  notattemptedtestlist:any=[];
  checkedtest:any=[];
  stuname:any='';

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private examService:ExamService
  ) {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.studentId = res.val;
      this.subId = res.val1;
      this.selectedStd = res.selstd;
      this.stdid = res.stdid;
      this.stuname = res.name;  
        
      this.getSubjectList();
    })
  }

  ngOnInit(): void {
    this.clickTest = true;
    this.getSubmittedTest();
  }
  ngAfterViewInit() {
    "use strict";
    $('#datatable').DataTable({

      "pagingType": "full_numbers",
      "lengthMenu": [
        [5, 10, 25, -1],
        [5, 10, 25, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });

    var table = $('#datatable').DataTable();

    // table.on('click', '.like', function () {
    //   alert('You clicked on Like button');
    // });
  }

  backTosubject() {
    this.clickTest = true;
    this.clickViewTest = false;
    this.viewTest = false;
  }
  backToRegister() {
    this.router.navigate(['/register'], {
      queryParams: {
        val: 'Student',
        // val1: this.selectedStd
      }
    })
  }
  getSubjectList() {
    this.registerService.getSubjectByID(this.stdid).subscribe((data: any) => {
      this.subjects = data;
      this.subjects.forEach(element=>{
        let data={
          stuid:this.studentId,
          subid:element.id
        }
        this.registerService.getTestAccordingSub(data).subscribe((res:any)=>{
            element.test = res;
            element.test.forEach(ele=>{
                this.registerService.getTotalObtainMarks(ele).subscribe((res1: any) => {
                  if(res1 ==0){
                    ele.totalobtainmarks= '-';
                  }
                  else{
                    ele.totalobtainmarks= res1[0].totalmarks;                   
                  }               
                });
              })
        })
      })

      // this.subjects.forEach(element => {
      //   this.questionService.getAllQuestion(element.id).subscribe((res: any) => {
      //     element.question = res;
      //     element.color = '3px 3px 5px 5px #ebf0ec';

      //   })
      // })
    });
  }
  getSubmittedTest() {
      this.studentId;
    this.examService.getActiveStudentTest(this.studentId).subscribe((data: any) => {
      this.submittedTest = data;
       
      this.submittedTest.forEach(element=>{
        element.stuid = this.studentId;
        this.registerService.getTotalObtainMarks(element).subscribe((res: any) => {
          element.totalobtainmarks= res;
        });  

      });
      // this.submittedTest.forEach(element => {
      //   if(element.teststatus == 'assigned'){
      //     this.pendingtestlist.push(element);
      //   }
      //   else if(element.teststatus=='started'){
      //     this.notattemptedtestlist.push(element);
      //   }
      //   else{
      //     this.completedtestlist.push(element);

      //   }
      // });
      
    });
  }
  openTestList(sub) {
    this.disptest = [];
     this.disptest = sub.test;
    this.subjects.forEach(element => {
      if (element.id == sub.id) {
        element.color = '3px 3px 5px 5px #ef8157';
      } else {
        element.color = '3px 3px 5px 5px #ebf0ec';
      }
    })
    this.clickViewTest = true;
   
    for (let i = 0; i < this.disptest.length; i++) {
      this.disptest[i].index = i + 1;
    }
    // this.submittedTest.forEach(element => {
    //   if (element.subjectId == sub.id) {
    //     this.disptest.push(element);
    //   }
    // });

  }

  cancelTest() {
    this.clickTest = true;
    this.clickViewTest = true;
    this.viewTest = false;
  }
  getTestList(data) {
       
    this.testName = data.testname;
    this.selectedSub = data.subject
    this.clickTest = false;
    this.clickViewTest = false;
    this.viewTest = true;
    this.saveresult.testid = data.testid;
    this.saveresult.subid = data.subjectId;
    this.saveresult.stdid = data.stdid;
    this.saveresult.studentid = data.stuid;
     
    this.registerService.getTestforChecking(data.testid, this.studentId).subscribe((res: any) => {
      this.questions = res;
       
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].index = i + 1;
      }
      this.questions.forEach(element => {
        element.obtainmarks = '';
        element.remark = '';
      });
    })
  }

  submitTestChecking() {
      
    this.saveresult.question = this.questions;

    this.registerService.savetestresult(this.saveresult).subscribe((res: any) => {
      this.clickTest = true;
      this.clickViewTest = true;
      this.viewTest = false;
      this.apiService.showNotification('top', 'right', 'Marks and Remrks Successfully saved.', 'success');
    })

  }
}
