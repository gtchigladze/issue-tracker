import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  issueForm: FormGroup | undefined;
@Output() formCloseEdit = new EventEmitter();
suggestions: Issue[]= [];
selectOption = 'Select Option'
id: any

  constructor(private builder: FormBuilder, 
    private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required]
    });

    
   
  }

  getIssue(){
    
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
      }

    this.issueService.createIssue(this.issueForm?.value);
    this.formCloseEdit.emit();

    }


  

}

  