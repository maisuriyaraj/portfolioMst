import { Component } from '@angular/core';
import { TemplateService } from '../../../services/template.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-template-preview',
  standalone: true,
  imports: [],
  templateUrl: './template-preview.component.html',
  styleUrl: './template-preview.component.scss'
})
export class TemplatePreviewComponent {
  template_id : any = "";
  constructor(
    private templateService : TemplateService,
    private tostr : ToastrService,
    private route: ActivatedRoute,
    private loader : NgxSpinnerService
  ){

  }

  ngOnInit(){
    this.route.paramMap.subscribe({
      next : (params) => {
          this.template_id = params.get('id'); // Get 'id' route parameter
          this.getTemplateDetails();
      },
      error : (error) => {
        console.log(error)
      }
    });
  }

  getTemplateDetails(){

    this.loader.show();

    const payload= {
      template_id : this.template_id
    }
    
    this.templateService.getTempatePreview(payload).then((response)=>{
      const rootElement = this.JsonToHtml(response?.data?.template_json);
      const root =  document.querySelector('.root-content') as HTMLElement;
      root.appendChild(rootElement);
      this.loader.hide();
    }).catch((error : any)=>{
      console.log(error);
      this.loader.hide();
      this.tostr.error("Something went wrong !");
    });
  }



  JsonToHtml(json:any) {
    const element = document.createElement(json.tag);

    // Add attributes
    if (json.attributes) {
      for (const [key, value] of Object.entries(json.attributes)) {
        element.setAttribute(key, value);
      }
    }

    // Add inline styles
    if (json.style) {
      element.style.cssText = json.style; // Apply styles directly
    }

    // Add content
    if (json.content) {
      element.textContent = json.content; // Use innerHTML if raw HTML is needed
    }

    // Process children recursively
    if (json.children) {
      json.children.forEach((child:any) => {
        const childElement = this.JsonToHtml(child);
        element.appendChild(childElement);
      });
    }

    return element;
  }

}
