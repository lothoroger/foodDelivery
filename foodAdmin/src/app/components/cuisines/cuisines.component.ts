import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';
import { DBService } from 'src/app/services/db.service';


@Component({



  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  public foodObservable: Observable<any[]> = new Observable();


  constructor(private httpClient: HttpClientModule, private foodService: DBService, private modalService: NgbModal, private fb: FormBuilder) { }

  foodlist!: Food[] | undefined;
  foodForm: FormGroup = new FormGroup({});
  //foodlist: Food[] = [];
  updation: boolean = false;
  loader: boolean = false;

  ngOnInit(): void {
    this.foodService.getFoods();
    this.foodService.foodSub.subscribe((list) => {
      if (list.length !== 0) this.foodlist = list;

    })
  }



  openModal(modal: any, foodObj: Food | null = null) {
    console.log('FoodObj', foodObj);
    //this.tempImageFiles = [];
    this.initializeModal(foodObj);
    this.modalService.open(modal);
  }

  initializeModal(foodObj: Food | null) {
    if (foodObj == null) {
      this.foodForm = this.fb.group({
        name: ["", Validators.required],
        origin: ["", Validators.required],
        price: [0, Validators.required],
        stock: [""],
        addedon: ["", Validators.required],
        imageurl: [""],
      });
    } else {
      this.foodForm = this.fb.group({
        name: [foodObj.name, Validators.required],
        origin: [foodObj.origin, Validators.required],
        price: [foodObj.price, Validators.required],
        stock: [foodObj.stock],
        addedon: [foodObj.addedon, Validators.required],
        imageurl: [foodObj.imageurl] + '.jpg',
      });


    }
  }






}
/*
  openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
    this.tempImageFiles = [...imageUrls];
    this.thumbnailImageIdx = thumbnailImageIdx;
    // this.modalService.open(modal, {
    size: "xl",
      scrollable: true
  });
}
 
openImage(url: string) {
  window.open(url, "_blank")
}
 
viewProductDetails(modal: any, productObj: Products) {
  this.productModel = productObj;
  this.modalService.open(modal, { size: 'lg' });
}
 

onSelectOption(category: Category | Event | undefined) {
  // this.productForm.patchValue({
  //   category: this.categories.find(x => x.categoryId === category.categoryId)
  // })
}
 
checkImageFileType(event: any) {
  let fileList: File[] = Object.assign([], event.target.files);
  fileList.forEach((file: any, idx: number) => {
    if (
      file.type == "image/png" ||
      file.type == "image/jpeg" ||
      file.type == "image/jpg"
    ) {
      this.tempImageFiles.push(file);
    } else {
      // this.toast.warning("Only .png/.jpeg/.jpg file format accepted!!", file.name + " will not accepted.");
    }
  });
}
 
 
removeImage(idx: number) {
  this.tempImageFiles.splice(idx, 1);
}
 
changeThumbnailImageIdx(idx: number) {
  this.productForm.patchValue({
    thumbnailImage: idx
  })
}
 
compareByCategoryId(category1: Category, category2: Category) {
  return category1 && category2 && category1.categoryId === category2.categoryId;
}
*/


