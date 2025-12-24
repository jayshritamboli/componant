import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  searchValue: string = '';
  emailValue: string = '';
  passwordValue: string = '';
  ageValue: number | null = null;
  searchText: string = '';
  cityValue: string = '';

  ngOnInit(): void {}

  onSearch(ele: HTMLInputElement): void {
    this.searchValue = ele.value;
  }

  onEmail(ele: HTMLInputElement): void {
    this.emailValue = ele.value;
  }

  onSearchText(ele: HTMLInputElement): void {
    this.searchText = ele.value;
  }

    onCity(ele: HTMLInputElement): void {
    this.cityValue = ele.value;
  }

}
