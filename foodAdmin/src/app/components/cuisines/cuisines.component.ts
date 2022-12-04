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



  openModal(modal: any, foodObj = null) {
    console.log('FoodObj', foodObj);
    this.initialForm();
    //this.tempImageFiles = [];
    // this.initialiseModal(fod);
    this.modalService.open(modal);
  }

  initialForm(foodObj: any = null) {
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
        imagurl: [foodObj.imageurl],
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
 
 
initialiseModal(productObj: Products | null) {
  if (productObj == null) {
    this.updation = false;
    this.productForm = this.fb.group({
      productId: [],
      productTitle: [null],
      price: [null],
      images: this.fb.array([]),
      thumbnailImage: [null],
      productDescription: [null],
      productCategory: [null],
      active: [true],
      addedOn: [],
      rating: [0]
    });
  } else {
    this.updation = true;
    this.productForm = this.fb.group({
      productId: [productObj.productId],
      productTitle: [productObj.productTitle],
      price: [productObj.price],
      images: [productObj.images],
      thumbnailImage: [productObj.thumbnailImage],
      productDescription: [productObj.productDescription],
      productCategory: [productObj.productCategory],
      active: [productObj.active],
      addedOn: [productObj.addedOn],
      rating: [productObj.rating]
    });
    this.onSelectOption(productObj.productCategory);
    this.tempImageFiles = productObj.images || [];
  }
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


