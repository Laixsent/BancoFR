import { Component } from '@angular/core';
import { BancoService } from'./service/banco.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'Banco';
  bancos: string[] = ['bbvutl', 'cityutl'];
  bancoSeleccionado: string = '';
  noTarjeta: string = '';
  nip: string = '';
  monto: number | null = null; 
  mensaje: string = '';

  constructor(private bancoService: BancoService) { }

  validarSoloLetras(event: KeyboardEvent) {
    const pattern = /[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validarSoloNumeros(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
  realizarRetiro() {
    if (this.bancoSeleccionado.trim() !== '' && this.noTarjeta.trim() !== '' && this.nip.trim() !== '' && this.monto !== null) {
      this.bancoService.retirar({
        banco: this.bancoSeleccionado,
        noTarjeta: this.noTarjeta,
        nip: this.nip,
        monto: this.monto,
      });
    }
  }
  
}






