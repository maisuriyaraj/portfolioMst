import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TemplateService } from '../../../services/template.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  templateList : any = [];

  constructor(private route : Router,private loader : NgxSpinnerService,private dialog: MatDialog ,private templateService : TemplateService ,private toastr: ToastrService){}

  addTemplateForm = new FormGroup({
    template_name : new FormControl('', [Validators.required]),
    template_tags : new FormControl('', [Validators.required]),
  })

  ngOnInit(){
    this.getPortfolioTemplates();
  }

 get getTemplateForm (){
  return this.addTemplateForm.controls
 }

  openAddTemplateModal(content:any){
    this.dialog.open(content,{width : '60%'});
  }

  getPortfolioTemplates(){
    this.loader.show();
    this.templateService.getAllTemplates().then((response)=>{
      console.log(response);
      this.templateList = response.data || [];
      this.loader.hide();
    }).catch((error)=>{
      console.log(error);
      this.loader.hide();
      this.toastr.error("Something went wrong !");
    })
  }


  onSubmit(data:any){
    if(this.addTemplateForm.invalid){
      this.addTemplateForm.markAllAsTouched();
      return ;
    }

    this.loader.show();
    const payload ={
      "template_name" : this.getTemplateForm.template_name.value ,
      "template_tags" : this.getTemplateForm.template_tags.value
    }

    this.templateService.createTemplate(payload).then((response)=>{
      if (response?.success) {
        this.dialog.closeAll();
        this.toastr.success(response.message);
        this.loader.hide();
      }
    }).catch((error)=>{
      this.loader.hide();
        this.toastr.error(error.message);
    })
    
  }

  previewTemplate (template_id:any){
    this.route.navigate([`template/preview/${template_id}`]);
  }
}
