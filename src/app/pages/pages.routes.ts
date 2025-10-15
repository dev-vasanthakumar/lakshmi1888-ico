import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../layout/main-layout/main-layout.component";

export const pagesRoutes: Routes = [
    {path: '', component: MainLayoutComponent,
        children: [
            {path: '', loadComponent: () => import('./home/home.component').then(c =>c.HomeComponent)},            
        ]
    },    
]