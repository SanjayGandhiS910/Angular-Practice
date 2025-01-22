import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users1Component } from './users1/users1.component';
import { User2Module } from '../user2/user2.module';



@NgModule({
  declarations: [ Users1Component],
  imports: [
    CommonModule, User2Module
  ],
  exports: [ Users1Component, User2Module]
})
export class User1Module { }
