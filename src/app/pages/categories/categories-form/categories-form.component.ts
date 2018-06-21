import { Component, OnInit } from '@angular/core';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ICategories } from '../categories.interface';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {


  // private frmCategories: FormGroup;
  private frmCategories: FormGroup;

  constructor(
    private fb: FormBuilder,
    private seCategories: CategoriesService,
    private router : Router
  ) {
    this.CreateForm();
  }

  ngOnInit() {
  }

  CreateForm(): void {
    this.frmCategories = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ])
    });
  }

  //Method for 
  save() {
    console.log(this.frmCategories.value);
    let categories: ICategories = Object.assign({}, this.frmCategories.value);
    this.seCategories.create(categories).subscribe((res) => {
      this.saveSucces();
    },
      (error) => {
        console.error(error);
      }
    )
  }
  saveSucces(): any {
    this.router.navigate(["/categories"]);
  }


}
