import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="mx-auto py-16 mt-[100px]">
      <div
        class="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row"
      >
        <div class="text-center">
          <p
            class="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl py-6"
          >
            Welcome to our Home Page!
          </p>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
