import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'schueler-detail',
  templateUrl: './schueler-detail.component.html',
  styleUrls: ['./schueler-detail.component.css']
})
export class SchuelerDetailComponent implements OnInit{

  @Input() schueler: any;

  id: any;
  subscription: Subscription;


  constructor( private route: ActivatedRoute) {
    //this.id = this.route.snapshot.params['id'];
    //console.log(this.route);
   }

  ngOnInit(): void {
    this.subscription = 
    this.route.params.subscribe(
      (param) => {
        this.id = param['id'];    
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
