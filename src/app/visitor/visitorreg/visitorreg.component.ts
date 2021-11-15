import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { ManageService } from 'app/manage/manage.service';
import { Std } from 'app/manage/standard/standard.model';
import { Subject } from 'app/manage/subject/subject.model';
import { RegisterService } from 'app/register/register.service';
import { VisitorService } from '../visitor.service';
import { RegisterVisitor } from './visitorreg.model';
declare var swal: any;
declare var $: any;

interface FileReaderEventTarget extends EventTarget {
  result: string
}
interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}
@Component({
  selector: 'app-visitorreg',
  templateUrl: './visitorreg.component.html',
  styleUrls: ['./visitorreg.component.css']
})
export class VisitorregComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;
  focus9;
  focus10;
  focus11;
  uid:any;
  public visitorModel: RegisterVisitor = new RegisterVisitor;
  public regVistor: RegisterVisitor[];
  public stdlist: Std[];
  public subjects: Subject[];
  selectedstd: any;
  selectedSubject: any;
  selectedSubId: any;
  stdId: any;
  constructor(
    private apiService: ApiService,
    private VisitorService: VisitorService,
    private registerService: RegisterService,
    private manageService: ManageService,
    private router: Router

  ) {
    this.getStandardList();
  }

  ngOnInit() {

    setTimeout(function () {
      $('.card.card-wizard').addClass('active');
    }, 600);
    if ($(".selectpicker").length != 0) {
      $(".selectpicker").selectpicker({
        iconBase: "nc-icon",
        tickIcon: "nc-check-2"
      });
    }
    // Code for the Validator
    const $validator = $('.card-wizard form').validate({
      rules: {
        firstname: {
          required: true,
          minlength: 3
        },
        lastname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          minlength: 3,
        }
      },

      highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
      },
      success: function (element) {
        $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
      },
      errorPlacement: function (error, element) {
        $(element).append(error);
      }
    });
    // Wizard Initialization
    $('.card-wizard').bootstrapWizard({
      'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function (tab, navigation, index) {
        var $valid = $('.card-wizard form').valid();
        if (!$valid) {
          $validator.focusInvalid();
          return false;
        }
      },


      onInit: function (tab: any, navigation: any, index: any) {

        // check number of tabs and fill the entire row
        let $total = navigation.find('li').length;
        let $wizard = navigation.closest('.card-wizard');

        let $first_li = navigation.find('li:first-child a').html();
        let $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
        $('.card-wizard .wizard-navigation').append($moving_div);

        $total = $wizard.find('.nav li').length;
        let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        let $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
          move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
        $('.moving-tab').css('transition', 'transform 0s');
      },

      onTabClick: function (tab: any, navigation: any, index: any) {

        const $valid = $('.card-wizard form').valid();

        if (!$valid) {
          return false;
        } else {
          return true;
        }
      },

      onTabShow: function (tab: any, navigation: any, index: any) {
        var $total = navigation.find('li').length;
        var $current = index + 1;

        var $wizard = navigation.closest('.card-wizard');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();
        } else {
          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        let button_text = navigation.find('li:nth-child(' + $current + ') a').html();

        setTimeout(function () {
          $('.moving-tab').html(button_text);
        }, 150);

        var checkbox = $('.footer-checkbox');

        if (index == 0) {
          $(checkbox).css({
            'opacity': '0',
            'visibility': 'hidden',
            'position': 'absolute'
          });
        } else {
          $(checkbox).css({
            'opacity': '1',
            'visibility': 'visible'
          });
        }

        $total = $wizard.find('.nav li').length;
        let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        $current = index + 1;

        // if($current == 1 || (mobile_device == true && (index % 2 == 0) )){
        //     move_distance -= 8;
        // } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))){
        //     move_distance += 8;
        // }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
      }
    });

    // Prepare the preview for profile picture
    $('#wizard-picture').change(function () {
      const input = $(this);

      if (input[0].files && input[0].files[0]) {
        const reader: any = new FileReader();

        reader.onload = function (e: FileReaderEvent) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        };
        reader.readAsDataURL(input[0].files[0]);
      }
    });

    $('[data-toggle="wizard-radio"]').click(function () {
      let wizard = $(this).closest('.card-wizard');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('[type="checkbox"]').removeAttr('checked');
      } else {
        $(this).addClass('active');
        $(this).find('[type="checkbox"]').attr('checked', 'true');
      }
    });

    $('.set-full-height').css('height', 'auto');

  }
  ngAfterViewInit() {

    $(window).resize(() => {
      $('.card-wizard').each(function () {

        const $wizard = $(this);
        const index = $wizard.bootstrapWizard('currentIndex');
        let $total = $wizard.find('.nav li').length;
        let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        let $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
          move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
        });

        $('.moving-tab').css({
          'transition': 'transform 0s'
        });
      });
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    const input = $(this);

    if (input[0].files && input[0].files[0]) {
      const reader: any = new FileReader();

      reader.onload = function (e: FileReaderEvent) {
        $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      };
      reader.readAsDataURL(input[0].files[0]);
    }
  }
  saveStudentDetail() {

  }
  Savevisitor() {
    this.visitorModel;
    this.visitorModel.stdid = this.stdId;
    this.visitorModel.subid = this.selectedSubId;
     
    this.VisitorService.saveVisitorRegister(this.visitorModel).subscribe((data: any) => {
       
      this.uid = data.insertId;
      this.apiService.showNotification('top', 'right', 'Profile Register Successfully.', 'success');
      this.router.navigate(['/visitor/visitorexam'], {
        queryParams: {
          subid: this.selectedSubId,
          stdid:this.stdId,
          uid:this.uid
        }
      })
    })
  }
  getStandardList() {
    this.manageService.getStdList().subscribe((data: any) => {
      this.stdlist = data;
    });
  }
  selectStdList(id) {
    this.stdId = id;
    this.getSubject(this.stdId);
    this.stdlist.forEach(element => {
      if (element.id == id) {
        this.selectedstd = element.stdname;
      }
    })

  }
  getSubject(id) {
    this.manageService.getSubjectList(id).subscribe((data: any) => {
      this.subjects = data;
    });
  }
  selectSubjectList(id) {
     
    this.selectedSubId = id;
    // this.stdId = id;
    this.subjects.forEach(element => {
      if (element.id == id) {
        this.selectedSubject = element.subject;
      }
    });
  }
}
