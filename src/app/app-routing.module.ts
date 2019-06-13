import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestBoxComponent } from './test-box/test-box.component';

const routes: Routes = [
  {path: "test", component: TestBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
