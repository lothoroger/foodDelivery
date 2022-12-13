import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';
import { DBService } from 'src/app/services/db.service';
import { BaseUrls } from 'src/assets/baseurls';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  public foodObservable: Observable<any[]> = new Observable();


  constructor(private http: HttpClient, private foodService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }


  foodForm: FormGroup = new FormGroup({});
  foodlist: Food[] = [];

  updation: boolean = false;
  loader: boolean = false;

  ngOnInit(): void {
    this.foodService.getFoods();
    this.foodService.foodSub.subscribe((list) => {
      if (list.length !== 0) this.foodlist = list;

    })
  }


  openModal(modal: any, food: Food | null = null) {
    this.initializeModal(food);
    this.modalService.open(modal, { size: "xl" });
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
        imageurl: [foodObj.imageurl],

      });
    }
  }

  saveCuisine() {
    if (this.updation == true) {
      this.http.put(`${BaseUrls.getUpdateUrl(BaseUrls.FOODS_GROUPURL)}/${this.foodForm.value.foodId}`, this.foodForm.value)
        .subscribe({
          next: ({ code, data, message }: any) => {
            console.log('Update Cuisine', data)
            localStorage.setItem("Cuisine update", JSON.stringify(this.foodForm.value));
          },
          error: (error) => {
            console.log(error);
            console.log('Update Cuisine error', this.foodForm.value);
          }
        })
    } else {
      console.log('Add Cuisine ', this.foodForm.value)

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
    this.modalService.dismissAll();
    this.foodService.getFoods();
  }



  deleteFood(id: any) {
    console.log('Food list delete', id)
    /*this.foodlist = this.foodlist.filter(x => x.foodId != id)
    this.http.get(`${BaseUrls.getDeleteUrl(BaseUrls.FOODS_GROUPURL)}/${id}`)
      .subscribe({
        next: (value) => {
          this.foodlist.splice(id, 1)
        },
        error: (error) => {
          console.log("Error on Delete ", error);
        }
      })
*/

    this.foodlist = this.foodlist.filter(x => x.foodId != id)
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


}
