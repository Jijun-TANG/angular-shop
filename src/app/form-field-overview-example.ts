import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
})
export class FormFieldOverviewExample {
  deviceType = 'cpe';
  tags = [];
  tagList = new FormControl(null);
}
