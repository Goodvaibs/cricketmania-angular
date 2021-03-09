import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../services/subheader.service';
@Component({
  selector: 'app-navigation-bar-component',
  templateUrl: './navigation-bar-component.component.html',
  styleUrls: ['./navigation-bar-component.component.scss']
})
export class NavigationBarComponentComponent implements OnInit {

  subheaderList
  constructor(private subh:SubheaderService) { }

  ngOnInit(): void {
    this.subheaderListing();
  }

  subheaderListing(){
    this.subh.getSubheaderList().subscribe(res=>{
      console.log(res);
      this.subheaderList = res
    });
  }

}
