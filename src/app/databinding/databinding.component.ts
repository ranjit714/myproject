import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  heading1:string="ranjo infotech private limited"
  imgPath:string="../../assets/images/aa.jpg"
  imgName:string="aa";
  userData:string='';
  isTrue: boolean= true;
  imgList:string[]=[
    "../../assets/images/aa.jpg",
    "../../assets/images/apples.jpg",
  ]
  constructor() { }

  ngOnInit(): void {
    
    }
    greet(){
      alert("wellcome student");
  }
  getRefval(val:any){
              console.log(val)
  }
  changeImg(){
    this.isTrue = !this.isTrue
    if(this.isTrue == false){
      this.imgPath="../../assets/images/apples.jpg"
      this.imgName="apples";
    } else {
      this.imgPath="../../assets/images/aa.jpg"
      this.imgName="aa";
    }
  }

}
