import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';

export const routes: Routes = [
    /*esto nos hace iniciar ya desde el home q es la vista principal*/
    {path:``, component: Home },
    /*con esto vamos al home cuando estamos en otra vista*/
    {path: `home`, component: Home },
    {path: `about`, component: About },
    {path: `contact`, component: Contact },
    {path: `products`, component: Products },
];
