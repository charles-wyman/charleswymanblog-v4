import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { ClockComponent } from '../components/clock/clock.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PageHeaderComponent, ClockComponent],
    imports: [IonicModule, CommonModule],
    exports: [PageHeaderComponent, ClockComponent]
})
export class PagesModule {}
