import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DataService } from "../data.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "append-to-example",
  template: `
    <p>{{'By default dropdown panel is rendered as child element of ng-select, but you can append dropdown to any element using' | translate}}
    </p>
    <p>
      If you place ng-select inside container with fixed height and hidden
      overflow then dropdown will not be fully visible.
    </p>
    <div class="overflow-box">
      <ng-select
        [items]="people | async"
        bindLabel="company"
        placeholder="Select item"
        [(ngModel)]="selected"
      >
      </ng-select>
    </div>

    <br />
    <p>
      It can be fixed by appending dropdown to body or other parent element.
    </p>

    <div class="overflow-box">
      <ng-select
        [items]="people | async"
        bindLabel="company"
        placeholder="Select item"
        appendTo="body"
        multiple="true"
        [closeOnSelect]="false"
        [(ngModel)]="selected2"
      >
      </ng-select>
    </div>

    <br />
    <div class="scrollable-box">
      <div class="overflow-box">
        <ng-select
          [items]="people | async"
          bindLabel="company"
          placeholder="Select item"
          appendTo=".scrollable-box"
          [(ngModel)]="selected3"
        >
        </ng-select>
      </div>
    </div>
  `,
  // templateUrl: './append-to-example.component.html',
  styleUrls: ["./append-to-example.component.scss"],
  //     encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppendToExampleComponent implements OnInit {
  people: any = [];
  selected: any;
  selected2: any;
  selected3: any;

  constructor(
    private dataService: DataService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.people = this.dataService.getPeople();
  }
}
