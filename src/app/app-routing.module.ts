import {NgModule} from '@angular/core';
import {CertificatListComponent} from './components/certificat-list/certificat-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AideComponent} from './components/aide/aide.component';
import {RGPDComponent} from './components/rgpd/rgpd.component';
import {ResetMailComponent} from './components/reset-mail/reset-mail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: CertificatListComponent
    },
    {
        path: 'aide',
        component: AideComponent
    },
    {
        path: 'rgpd',
        component: RGPDComponent
    },
    {
        path: 'resetMail',
        component: ResetMailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
