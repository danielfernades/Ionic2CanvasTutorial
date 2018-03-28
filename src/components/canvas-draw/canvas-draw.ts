import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDrawComponent {

  @ViewChild('myCanvas') canvas : any;

  canvasElement : any;
  lastX: number;
  lastY: number;

  currentColor : String = '#e74c3c';
  avalaibleColors : any;

  brushSize : any = 10;

  constructor(public platform : Platform, public renderer : Renderer) {
    console.log('Hello CanvasDrawComponent Component');

    this.avalaibleColors = [
      '#e74c3c',
      '#2980b9',
      '#8e44ad',
      '#95a5a6'
    ];
  }

  ngAfterViewInit()
  {
    console.log(this.canvas);
    this.canvasElement = this.canvas.nativeElement;

    console.log(this.platform.width());

    this.renderer.setElementAttribute(this.canvasElement,'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement,'height', this.platform.height() + '');
  }

  changeColour(colour)
  {
    this.currentColor = colour;
  }

  changeSize(size)
  {
    this.brushSize = size;
  }

  handleStart(ev)
  {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev)
  {
    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColor;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }

  handleEnd(ev)
  {
    console.log(ev);
  }
}
