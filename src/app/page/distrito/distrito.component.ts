import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distrito',
  templateUrl: './distrito.component.html',
  styleUrls: ['./distrito.component.css']
})
export class DistritoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
