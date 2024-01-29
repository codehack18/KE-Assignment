import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgConfirmService } from 'ng-confirm-box';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListingComponent {

  parentSelector: boolean = false;
  tableData: any = [];
  edit_index: any;
  editIt: any;
  tableId: any;


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

  constructor(private tableSer: TableService, private toster: ToastrService, private confSer: NgConfirmService) { }

  addListForm = new FormGroup({
    // id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),

  });



  ngOnInit() {
   let localTable = localStorage.getItem('table');
    if (localTable != null) {
      this.tableData = JSON.parse(localTable);
    }
    // this.getData();
  }
  
  getData(){
    this.tableSer.getTable().subscribe(data => {
      this.tableData = data
      localStorage.setItem('table', JSON.stringify(this.tableData));
      // console.log(data)
    });

  }

  listAddModal() {
    this.addListForm.reset()
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

  addList() {

    
      let obj = {
        // "id": this.addListForm.controls.id.value,
        "name": this.addListForm.controls.name.value,
        "username": this.addListForm.controls.username.value,
        "email": this.addListForm.controls.email.value,
        "phone": this.addListForm.controls.phone.value,
        "website": this.addListForm.controls.website.value,
        "address": this.addListForm.controls.address.value,
        "company": this.addListForm.controls.company.value,
      }
      if (this.addListForm.valid) {
  
        
        this.tableData.push(obj);
        localStorage.setItem('table', JSON.stringify(this.tableData));
        this.toster.success('Added Successful!');
        this.closeModal();
        // window.location.reload();
        
      } else {
        this.toster.warning('Form field cannot be empty');
      }
        
    }

 
  editData(value: any, index: any) {
    this.editIt = value;
    this.edit_index = index;
    // this.addListForm.controls.id.setValue(value.id);
    this.addListForm.controls.name.setValue(value.name);
    this.addListForm.controls.username.setValue(value.username);
    this.addListForm.controls.email.setValue(value.email);
    this.addListForm.controls.phone.setValue(value.phone);
    this.addListForm.controls.website.setValue(value.website);
    this.addListForm.controls.address.setValue(value.address);
    this.addListForm.controls.company.setValue(value.company);

    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  updateList(){
   
      if (this.addListForm.valid) {
        // this.tableData[this.edit_index]['id'] = this.addListForm.value.id,
        this.tableData[this.edit_index]['name'] = this.addListForm.value.name,
        this.tableData[this.edit_index]['username'] = this.addListForm.value.username,
        this.tableData[this.edit_index]['email'] = this.addListForm.value.email,
        this.tableData[this.edit_index]['phone'] = this.addListForm.value.phone
        this.tableData[this.edit_index]['phone'] = this.addListForm.value.website
        this.tableData[this.edit_index]['address'] = this.addListForm.value.address
        this.tableData[this.edit_index]['phone'] = this.addListForm.value.company
        this.toster.success('Updated Successful!')
        localStorage.setItem('table', JSON.stringify(this.tableData))
        this.editClose();
  
      } else {
        this.toster.warning('Form field cannot be empty');
      }
      
  
  }

  editClose() {
    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  onChangeData(event: any) {
    const id = event.target.value;
    const isChecked = event.target.checked;

    this.tableData = this.tableData.map((d: any) => {
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
    console.log(this.tableData);
  }

  deleteItem(item) {
    this.confSer.showConfirm("Are you sure want to Delete?",
    () => {
      this.tableData.splice(item - 1, 1)
    this.tableSer.deleteList(item).subscribe((result) => {
     this.tableData = result
    })
      this.toster.success('Table Data Deleted successful!')
    },
    () =>{
      // alert("Table Data not Deleted")
      
    }
    )
    
  }

//   deleteItem(item){
//     alert("Are you sure want to Delete?")
//     this.tableData.splice(item - 1, 1)
//     this.tableSer.deleteList(item).subscribe((result) => {
//      this.tableData = result
//     })
//     this.toster.success('Table Data Deleted successful!')
  
//     // alert("Table Data not Deleted")
//     localStorage.setItem('table', JSON.stringify(this.tableData))

// }
}
