import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { FbViewComponent } from './fb-view/fb-view.component';
import { FbFieldsComponent } from './fb-fields/fb-fields.component';
import { FbValuesComponent } from './fb-values/fb-values.component';



@NgModule({
  declarations: [FormBuilderComponent, FbViewComponent, FbFieldsComponent, FbValuesComponent],
  imports: [
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
