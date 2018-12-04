import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from '../components/page-header/page-header.component';


@NgModule({
    declarations: [PageHeaderComponent],
    imports: [IonicModule],
    exports: [PageHeaderComponent]
})
export class PagesModule {}
