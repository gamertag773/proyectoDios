import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./pages/about/about";
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About,Home,Contact,Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoangular');
}
