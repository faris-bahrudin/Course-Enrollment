import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'trg-maybe-list',
  templateUrl: './maybe-list.page.html',
})
export class MaybeListPage implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ng OnInit is working');
  }

}
