import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Codelab - Lodash';

  public array1 = [1, 1, 2, 3, 3, 3, 5, 8, 8];
  public array2 = [1, 5, 3, 8, 9, 11, 7];
  public uniqResult: number[] = [];
  public intersectionResult: number[] = [];

  public unionArray1 = [{'id': 1, 'city': 'Campinas'}];
  public unionArray2 = [{'id': 2, 'city': 'Hortolandia'}, {'id': 1, 'city': 'Paulinia'}, {'id': 3, 'city': 'Sumare'}];
  public unionResult: {id: number, city: string}[] = [];
  public unionResult2: {id: number, city: string}[] = [];

  public camelCaseString: string = 'esse é um teste de camel case';
  public camelCaseStringResult: string = '';

  public meanArray = [1, 2, 5, 10, 500];
  public meanResult: number = 0;

  constructor(){
    this.title = _.toUpper(this.title);
  }

  // Uniq: Valores duplicados são removidos
  public uniq(): void {
    this.uniqResult = _.uniq(this.array1);
  }

  // Intersection: Retorna um array com valores que estão em ambos os arrays
  public intersection(): void {
    this.intersectionResult = _.intersection(this.array1, this.array2);
  }

  // UnionBy: União de 2 arrays, mas que aceita um argumento/condição
  public unionBy(): void {
    this.unionResult = _.unionBy(this.unionArray1, this.unionArray2, 'id');
    this.unionResult2 = _.unionBy(this.unionArray1, this.unionArray2);
  }

  // CamelCase: Converte string em camelCase
  public camelCase(): void {
    this.camelCaseStringResult = _.camelCase(this.camelCaseString);
  }

  // Mean: Retorna a média dos valores do array
  public mean(): void {
    this.meanResult = _.mean(this.meanArray);
  }

}
