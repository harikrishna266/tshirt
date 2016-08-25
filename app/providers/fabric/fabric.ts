import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare const fabric;

@Injectable()
export class Fabric {
	public canvas;
	public canvasWidth: number;
	public canvasHeight: number;
	public rectangle;
  	
  	constructor() {}

  	didEnter() {
  		this.canvasWidth = document.getElementById("drawingArea").offsetWidth;
  		this.canvasHeight = document.getElementById("drawingArea").offsetHeight;
  		this.createMainCanvas();
  	}
  	createMainCanvas() {
  		this.canvas =  new fabric.Canvas('tcanvas',{width:this.canvasWidth,height:this.canvasHeight});
  		this.canvas.on({
  			'touch:gesture': this.touch('touch'),
  			'touch:drag': this.touch('drag'),
  			'touch:orientation': this.touch('touch:orientation')
  		})
  	}
	addRect() {
		this.canvas.selection = false;
		this.rectangle = new fabric.Rect({
		    width: 100, height: 100,
		    left: 10, top: 10,
		    fill: 'yellow',
		    angle: 30,
		    selectable: true
		  });
		this.canvas.add(this.rectangle);
	}
	addImage() {
		let imagenew =  fabric.Image.fromURL('./img/sample.jpg',(img)=>{
			img.set({
			    left: 0,
			    top: 0,
			    angle: -15
			  });
			this.canvas.add(img).renderAll().setActiveObject(img);; 
		});
	}
	touch(event) {
		console.log(event);
	}	

}

