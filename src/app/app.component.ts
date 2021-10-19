import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DataService } from '../in-memory-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9 Reactive-form';
 
  constructor(
    private fb: FormBuilder,
    private Service: DataService
  ) {}
  

  Disable = true ;
  UserData = [] ;

  reactiveForm() {
		this.myForm = this.fb.group({
			UserName: [""],
		});
	}

  myForm : FormGroup ;


  ngOnInit() {
   this.reactiveForm();
   this.GetData();
  }

  GetData(){
    let ReturnData : any ;
    this.Service.JsonPlaceHolder().subscribe((data)=>{
      ReturnData = data
      if( ReturnData.length > 0 ){
        ReturnData.forEach( Val => {
          this.UserData.push({
               Name : Val.name ,
               Email : Val.email ,
          })
        });
        console.log(this.UserData);
      }
 
   });
  }
  checkvalidation(){
    
    if(this.myForm.controls.UserName.value == ""){
      this.Disable = true
    }
    else if (this.myForm.controls.UserName.value != ""){
      this.Disable = false
    }
    
  }
  
  
  onSubmit() {
    let ReturnData : any ;
    this.Service.service('https://jsonplaceholder.typicode.com/posts' , {}).subscribe( 
      (data) => {
        ReturnData = data
        debugger
      }
    )
    this.myForm.patchValue({
      UserName : ""
    })
    this.Disable = true
   
  }

}
