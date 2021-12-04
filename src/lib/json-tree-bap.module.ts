import { NgModule } from '@angular/core';
import { JsonTreeBapComponent } from './json-tree-bap.component';
import { JsonTemplateComponent } from './json-template/json-template.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    JsonTreeBapComponent,
    JsonTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JsonTemplateComponent,
  ]
})
export class JsonTreeBapModule { }
