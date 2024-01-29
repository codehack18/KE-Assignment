import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent {

  parentSelector: boolean = false;
  // searchText: any;
  // @Input() id: string = 'dasboard';

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 15,
    processing: true,
    paging: true,
    scrollY: "360",
    info: true,
    searching: true,
    retrieve: true,

    language: {
      search: "_INPUT_",
      searchPlaceholder: "Search projects..."
    },
    columnDefs: [
      {
        orderable: false,
        targets: [-1]
      },
      {
        orderable: false,
        targets: [1]
      }
    ],


  };

  editIt: any
  forms: any = [];
  updatedName: any;
  edit_index: any;

  constructor(private toaster: ToastrService, private confSer: NgConfirmService) { };
  ngOnInit() {
    let localForm = localStorage.getItem('form');
    if (localForm != null) {
      this.forms = JSON.parse(localForm);
    }
  };


  addForm = new FormGroup({
    // id: new FormControl('', [Validators.required]),
    projectName: new FormControl('', [Validators.required]),
    organization: new FormControl('', [Validators.required]),
    startdate: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),

  });

  addItem() {
    let obj = {
      // "id": this.addForm.controls.id.value,
      "projectName": this.addForm.controls.projectName.value,
      "organization": this.addForm.controls.organization.value,
      "startdate": this.addForm.controls.startdate.value,
      "status": this.addForm.controls.status.value,
    }
    if (this.addForm.valid) {

      
      this.forms.push(obj);
      localStorage.setItem('form', JSON.stringify(this.forms));
      this.toaster.success('Added Successful!');
      this.closeModal();
      // window.location.reload();
  
      
    } else {
      this.toaster.warning('Form field cannot be empty');
    }
      
  }



  forDelete(element: any) {
    this.confSer.showConfirm("Are you sure want to Delete?",
    () => {
      this.forms.forEach((value: any, index: any) => {
        if (value == element)
          this.forms.splice(index, 1);
      });
      localStorage.setItem('form', JSON.stringify(this.forms));
      this.toaster.success('Data Deleted successful!')
    },
    () =>{
      // alert("Data not Deleted")
      
    }
    )
   

   
  }

  editData(value: any, index: any) {
    this.editIt = value;
    this.edit_index = index;
    // this.addForm.controls.id.setValue(value.id);
    this.addForm.controls.projectName.setValue(value.projectName);
    this.addForm.controls.organization.setValue(value.organization);
    this.addForm.controls.startdate.setValue(value.startdate);
    this.addForm.controls.status.setValue(value.status);
    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  // for update data 
  updateForm() {
    if (this.addForm.valid) {
      // this.forms[this.edit_index]['id'] = this.addForm.value.id,
      this.forms[this.edit_index]['projectName'] = this.addForm.value.projectName,
      this.forms[this.edit_index]['organization'] = this.addForm.value.organization,
      this.forms[this.edit_index]['startdate'] = this.addForm.value.startdate,
      this.forms[this.edit_index]['status'] = this.addForm.value.status
      this.toaster.success('Updated Successful!')
      localStorage.setItem('form', JSON.stringify(this.forms))
      this.editModalData();

    } else {
      this.toaster.warning('Form field cannot be empty');
    }
    
 }

  openAdd() {
    this.addForm.reset();
    let modelDiv = document.getElementById('addModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeModal() {
    let modelDiv = document.getElementById('addModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }



  editModalData() {
    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  onChangeData(event: any) {
    const id = event.target.value;
    const isChecked = event.target.checked;

    this.forms = this.forms.map((d: any) => {
      if (d.id == id) {
        d.select = isChecked;
        this.parentSelector = false;
        return d;
      }
      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }
      return d;
    });
    console.log(this.forms);
  }


}