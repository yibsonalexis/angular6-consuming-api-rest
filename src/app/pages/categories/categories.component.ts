import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
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
  private currentCategory : ICategories;

  displayedColumns = ['idCategory', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private seCategories: CategoriesService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;    
    this.getCategories();
  }

  //Get all the categories
  getCategories(){
    this.seCategories.Get().subscribe((res: ICategories[]) =>{
      // console.table(res);
      this.listCategories = res;
      this.dataSource = new MatTableDataSource(res);
    });
  }

  //Method for update a category
  update(category: ICategories):any{
    console.table(category);
    this.currentCategory = category;
  }

  //Method for delete a category
  delete(category: ICategories):any{
    console.table(category);
    this.currentCategory = category;
  }

  // openDialog(category: ICategories): void {
  //   this.currentCategory = category;
  //   let dialogRef = this.dialog.open(FileNameDialogComponent, {
  //     width: '250px',
  //     data: { name: this.currentCategory.name, description: this.currentCategory.description }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
