import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/primeng';     //accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            //api

import { CalendarModule } from 'primeng/primeng';
@Component({
  selector: 'my-app',
  template: `
<div class="ui-g-12 ui-md-4">
        <h3>Icon</h3>
        <p-calendar [(ngModel)]="value" [showIcon]="true"></p-calendar> <span style="margin-left:35px">{{vslue|date}}</span>
    </div>

`,
})
export class AppComponent  {

    value: Date;
}
