import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ICategories } from './categories.interface';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Categorias";
  listCategories: ICategories[];

  displayedColumns = ['idCategory', 'name', 'description'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private seCategories: CategoriesService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;    
    this.GetCategories();
  }

  GetCategories(){
    this.seCategories.Get().subscribe((res: ICategories[]) =>{
      console.table(res);
      this.listCategories = res;
      this.dataSource = new MatTableDataSource(res);
    });
  }

}


const ELEMENT_DATA: ICategories[] = [
  { idCategory: 1, name: 'Hydrogen', description: 'H' },
  { idCategory: 2, name: 'Helium',   description: 'He' },
  { idCategory: 3, name: 'Lithium',  description: 'Li' },
  { idCategory: 4, name: 'Beryllium',description: 'Be' },
  { idCategory: 5, name: 'Boron',    description: 'B' },
  { idCategory: 6, name: 'Carbon',    description: 'C' },
  { idCategory: 7, name: 'Nitrogen',  description: 'N' },
  { idCategory: 8, name: 'Oxygen',    description: 'O' },
  { idCategory: 9, name: 'Fluorine',  description: 'F' },
  { idCategory: 10, name: 'Neon',     description: 'Ne' },
];