import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { INews } from './news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private listNews : INews[];
  displayedColumns: string[] = ['IdNews', 'Tittle'];
  dataSource: INews[];
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.Get();
  }
Get(): void{
  this.newsService.GetAll().subscribe((res: INews[]) => {
    console.table(res);
    this.listNews = res;
    this.dataSource = this.listNews;
  })
  
}



}


