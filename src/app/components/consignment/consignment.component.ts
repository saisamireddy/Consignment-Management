import { Component } from '@angular/core';
import { ConsignmentService } from '../../consignment.service';
import { consignmentModel } from '../../consignmentModel';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent {
  consignments:consignmentModel[]=[];
constructor(private _consignmentService:ConsignmentService){
}
ngOnInit(){
  this._consignmentService.getConsignments().subscribe(data=>{
    this.consignments=data;
    console.log(this.consignments);
console.log("this sai")

  });
}
} 
