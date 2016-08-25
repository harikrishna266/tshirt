import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

declare const proximiio;

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  public one:any;
  public two:any;
  public three:any;
  public four:any;

  constructor(private navCtrl: NavController) {
	  setTimeout(()=>{
	  	this.proximi();
	  },2000)

  }

  proximi() {
  	alert('in');
	proximiio.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6Ijc5YTc4Y2U0OGVkNjQ5ZTY5MTMxNWY4MDI5NzdmYzZiIiwidHlwZSI6ImFwcGxpY2F0aW9uIiwiYXBwbGljYXRpb25faWQiOiI1NzJiNGRmYS00MzBmLTQ2MjctYjIxZS1kMGRjYWE3ZjViNGMifQ.ooQkGecz-t6phn-Q-MjJQDdRiNgGXgo7ZhwyBRm9heQ');
	proximiio.setDebugOutput(true, null, null);
	proximiio.setOutputTriggerCallback(function (output) {
      this.one = output;
    });

    proximiio.setInputTriggerCallback(function(enter, geofence) {
       this.two = enter;
       this.three = geofence
    });

    proximiio.setPositionChangeCallback(function(coords) {
     this.four = coords;
      
    });
	
  
	// proximiio.setGeofenceTriggerCallback(function(enter, geofence) {
	// 	console.log(geofence.area);
	// });
  }

}
