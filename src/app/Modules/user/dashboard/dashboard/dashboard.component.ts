import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DynamicScriptLoaderServiceService } from '../../../../Core/services/dynamic-script-loader-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderServiceService,
  ) {

  }

  ngOnInit() : void {}

  ngAfterViewInit() {
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    //'jquerymin', 'metis', 'd3', 'rickshaw', 'underscore', 'moment', 'clndr', 'site', 'vmap', 'sampledata', 'world', 'bootstrap'
    this.dynamicScriptLoader.load('tabs').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
