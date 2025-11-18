import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { galeri } from './pages/galeri/galeri';
import { oferts } from './pages/oferts/oferts';
import { NewProduct } from './pages/products/secciones/new-product/new-product';

export const routes: Routes = [
    /*esto nos hace iniciar ya desde el home q es la vista principal*/
    {path:``, component: Home },
    /*con esto vamos al home cuando estamos en otra vista*/
    {path: `home`, component: Home },
    {path: `about`, component: About },
    {path: `contact`, component: Contact },
    {path: `products`, component: Products },
    {path: `galeri`, component: galeri},
    {path: `oferts`, component: oferts},
    {path: `new-products`, component: NewProduct},
];
