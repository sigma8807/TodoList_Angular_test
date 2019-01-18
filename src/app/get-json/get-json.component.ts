import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../get-json.service';
import { TodoItems } from '../todoItem';
@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styleUrls: ['./get-json.component.scss']
})
export class GetJsonComponent implements OnInit {

  constructor(private getJsonService: GetJsonService) { }
  data: TodoItems[];
  ngOnInit() {
  }

  showConfig() {
    this.getJsonService.getdata()
      .subscribe(Data => this.data = Data);
  }
}
