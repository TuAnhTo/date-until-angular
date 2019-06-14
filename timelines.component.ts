import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';


@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
 ouput = '';
 constructor(private dateService: DateService) {}
 ngOnInit() {}
 onChange(value) {
   this.ouput = this.dateService.getDiffToNow(value);
 }
}
