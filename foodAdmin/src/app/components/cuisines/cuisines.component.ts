import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { Toast } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';
import { DBService } from 'src/app/services/db.service';
import { BaseUrls } from 'src/assets/baseurls';


@Component({



  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {


  foodSub: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  foodRetrievedBool: boolean = false;



  constructor(private http: HttpClient, private foodService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }

  foodlist!: Food[] | undefined;
  foodForm: FormGroup = new FormGroup({});
  updation: boolean = false;
  loader: boolean = false;

  ngOnInit(): void {
    this.foodService.getFoods();
    this.foodService.foodSub.subscribe((list) => {
      if (list.length !== 0) this.foodlist = list;

    })
  }



  openModal(modal: any, foodObj: Food | null = null) {

    this.initializeModal(foodObj);

    this.modalService.open(modal);
  }

  initializeModal(foodObj: Food | null) {
    if (foodObj == null) {
      this.updation = false;
      this.foodForm = this.fb.group({
        name: ["", Validators.required],
        origin: ["", Validators.required],
        price: [0, Validators.required],
        stock: [""],
        addedon: ["", Validators.required],
        imageurl: [""],
      });
    } else {
      this.updation = true;
      this.foodForm = this.fb.group({
        foodId: [foodObj.foodId],
        name: [foodObj.name, Validators.required],
        origin: [foodObj.origin, Validators.required],
        price: [foodObj.price, Validators.required],
        stock: [foodObj.stock],
        addedon: [foodObj.addedon, Validators.required],
        imageurl: [foodObj.imageurl] + '.jpg',
      });


    }
  }

  deleteFood(id: any) {
    this.http.get(`${BaseUrls.getDeleteUrl(BaseUrls.FOODS_GROUPURL)}/${id}`)
      .subscribe({
        next: (value) => {
          this.foodlist?.splice(id, 1);
        },
        error: (error) => {
          console.log(error);
        }
      })

  }



  saveFood() {

    if (this.updation == true) {

      this.http.put(`${BaseUrls.getUpdateUrl(BaseUrls.FOODS_GROUPURL)}/${this.foodForm.value.foodId}`, this.foodForm.value)
        .subscribe({
          next: ({ code, data, message }: any) => {
            console.log('Update Food', data)
            localStorage.setItem("food", JSON.stringify(this.foodForm.value));
          },
          error: (error) => {
            console.log(error);
            console.log('Update Food error', this.foodForm.value);
          }
        })



    } else {

      this.http.post(`${BaseUrls.getAddUrl(BaseUrls.FOODS_GROUPURL)}`, this.foodForm.value)
        .subscribe({
          next: ({ code, message, data }: any) => {
            console.log("Adding Food ", this.foodForm.value);
            localStorage.setItem("Data", JSON.stringify(data));
          },
          error: (error) => {
            console.log("Error ", error);

          }

        })

    }

  }



}







