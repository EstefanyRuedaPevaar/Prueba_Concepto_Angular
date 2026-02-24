import {AuthService, LocalizationPipe} from '@abp/ng.core';
import { Component, inject } from '@angular/core';
import {NgTemplateOutlet} from "@angular/common";
import {DynamicFormComponent, FormFieldConfig} from "@abp/ng.components/dynamic-form";

@Component({
  selector: 'app-home',
  template: `Hola`,
  imports: [],
})
export class HomeComponent {}