import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '@core/models/department';
import { DepartmentService } from '@core/services/department.service';
import { GuestModel } from '@core/models/guest-model';
import Swal from 'sweetalert2';
import { ContactService } from '@core/services/contact.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Input() title_button: string = ''

  formGuest!: FormGroup;

  listDepartments: Department[] = [];
  listCities: String[] = [];

  constructor(
    private fb: FormBuilder, 
    private _departmentSvc: DepartmentService,
    private _contactSvc: ContactService,
    ){

    this.formGuest = this.fb.group({
      state: ['', [Validators.maxLength(30), Validators.required]],
      city: ['', [Validators.maxLength(50), Validators.required]],
      name: ['', [Validators.maxLength(50), Validators.required]],
      email: ['', [Validators.maxLength(30), Validators.required, Validators.email]],
    })

    console.log('Lang: ', navigator.language);

  }


  ngOnInit(): void {
    this.getDepartments();
  }

  validate_number(): boolean{
    return 1 ===1;
  }

  private getDepartments(){

    try{
      this._departmentSvc.getAllDepartments().subscribe(departments => {
        
        this.formatDepartment(Object.entries(departments));
        /*console.log('👉🏻', departments);
        console.log('Object.Entries', Object.entries(departments));*/
    })
    } catch( error ){
      console.log('Error: ', error);
    }
  }

private formatDepartment(allDepartments: any[]): void{

  allDepartments.forEach(department => {

    this.listDepartments.push({
      Department: department[0],
      Cities: department[1]
    })
  })
  console.log('✅', this.listDepartments);
}

changeDepartment(department: any): void{

  department = department.target.value;

  if (department === '') {

    this.formGuest.get('city')?.reset('');
    this.listCities = [];

  } else{
    const selectedDepartment = this.listDepartments.find(item => item.Department === department)
    this.listCities = selectedDepartment?.Cities ?? [];
  }
  
  

}


  send(): void{

    if(this.formGuest.invalid) return this.formGuest.markAllAsTouched();

    const guest: GuestModel = this.formGuest.value;

    this._contactSvc.add(guest).subscribe(response => {

      response.success === true && this.sweetAlert();
      this.resetValues();
    
    })


    this.sweetAlert();

    this.resetValues();
  }

  sweetAlert(): void{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  resetValues(): void{
    this.formGuest.patchValue({ name: '' });
    this.formGuest.patchValue({ email: '' });
    this.formGuest.patchValue({ state: '' });
    this.formGuest.patchValue({ city: '' });
  }

  get departmentFiel(){
    return this.formGuest.get('state')
  }

  get cityFiel(){
    return this.formGuest.get('city')
  }

  get nameFiel(){
    return this.formGuest.get('name')
  }

  get emailFiel(){
    return this.formGuest.get('email')
  }

}
