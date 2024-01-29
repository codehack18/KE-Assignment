import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { event } from 'jquery';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  parentSelector: boolean = false;

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
  

  editI: any;
  users: any = [];
  datas: any = [];

  url: string = './assets/logo.png';
  edit_index: any;


  constructor(private toster: ToastrService, private confSer: NgConfirmService) {
    this.users = [];
  };

  ngOnInit() {
    let localUser = localStorage.getItem('user');
    if (localUser != null) {
      this.users = JSON.parse(localUser);
    }
  };


  userForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    profile: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    access: new FormControl('', [Validators.required]),

  });

  openModal() {
    this.userForm.reset();
    let modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeModal() {
    let modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  addUser() {
    let obj = {
      "id": this.userForm.controls.id.value,
      "profile": this.url,
      "name": this.userForm.controls.name.value,
      "department": this.userForm.controls.department.value,
      "access": this.userForm.controls.access.value,
    }
    if (this.userForm.valid) {
      
      this.users.push(obj);
      // window.location.reload();
      this.closeModal();
      this.toster.success('User Added Successful!');
      localStorage.setItem('user', JSON.stringify(this.users));
    } else {
      this.toster.warning('Form field cannot be empty');
    }

  }

  toDelete(element: any) {
debugger
    console.log()
    this.confSer.showConfirm("Are you sure want to Delete?",
    () => {
      this.users.forEach((value: any, index: any) => {
        if (value == element)
          this.users.splice(index, 1);
      });
      localStorage.setItem('user', JSON.stringify(this.users));
      this.toster.success('User Deleted successful!')
      
    },
    () => {
      // alert("User not Deleted")
    })
    
  }

  // for image upload with golobal variable 
  fileuploads(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    console.log(event);
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
        // console.log(this.url)
      };
    }
  }

  toEdit(data: any, index: any) {
    this.editI = data;
    this.edit_index = index;
    this.userForm.controls.id.setValue(data.id);
    this.userForm.controls.name.setValue(data.name);
    this.userForm.controls.department.setValue(data.department);
    this.userForm.controls.access.setValue(data.access);
    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }

  }

  closeEdit() {
    let modelDiv = document.getElementById('editModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  updateModal() {
    this.users[this.edit_index]['id'] = this.userForm.value.id,
      this.users[this.edit_index]['name'] = this.userForm.value.name,
      this.users[this.edit_index]['department'] = this.userForm.value.department,
      this.users[this.edit_index]['access'] = this.userForm.value.access,
      this.users[this.edit_index]['profile'] = this.url

    if (this.userForm.valid) {
      this.toster.success('Updated Successful!');
      this.closeEdit();
      localStorage.setItem('user', JSON.stringify(this.users));
      
      
    } else {
      this.toster.warning('Form field cannot be empty');
    }
    
  }


  onChangeUser(event: any) {
    const id = event.target.value;
    const isChecked = event.target.checked;

    this.users = this.users.map((m: any) => {
      if (m.id == id) {
        m.select = isChecked;
        this.parentSelector = false;
        return m;
      }
      if (id == -1) {
        m.select = this.parentSelector;
        return m;
      }
      return m;
    });
    console.log(this.users);
  }

  
}

