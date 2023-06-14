import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userId!: number;

  // Aquí puedes agregar la lógica para obtener los detalles del usuario según el ID proporcionado.
}
