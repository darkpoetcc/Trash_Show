import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-cva',
  templateUrl: './my-cva.component.html',
  styleUrls: ['./my-cva.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MyCvaComponent,
    multi: true
  }],
})
export class MyCvaComponent implements ControlValueAccessor {


  public value;
  private onChange;
  public isDisabled;

  onChangeText(val: string) {
    this.value = val;
    this.onChange(val);
  }
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnTouched(fn: any): void { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  constructor() { }

}
