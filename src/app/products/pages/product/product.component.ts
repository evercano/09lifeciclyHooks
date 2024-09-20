import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public isProductVisible = false;
  public currentPrice: number = 10;

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log({changes});
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  public incresePrice () :void{
    this.currentPrice++;
  }

}
