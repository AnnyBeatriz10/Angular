import { CepServiceService } from './cep-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cep';

  constructor(private CepServiceService: CepServiceService) {}

  consultaCep(valor: string, form: any) {
    this.CepServiceService.buscar(valor).subscribe((dados) =>
      this.populaForm({ dados, form })
    );
  }

  populaForm({ dados, form }: { dados: any; form: any; }) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
}
