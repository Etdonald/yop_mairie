import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CelebrationMariageService } from '../../../services/celebration-mariage.service';
import { Marie } from '../../../models/marie';
import { Demande } from '../../../models/demande';
import { ApplicationMessageService } from '../../../services/message-service.service';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { ApplicationErreur } from '../../../models/application-erreur.model';
import {NavigationService} from "../../../services/navigation.service";


@Component({
  selector: 'app-celebration-mariage',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, CalendarModule, FormsModule],
  templateUrl: './celebration-mariage.component.html',
  styleUrls: ['./celebration-mariage.component.scss']
})
export class CelebrationMariageComponent {

  currentStep: number = 1;
  rendezVousForm: FormGroup;
  currentYear: number = new Date().getFullYear();
  date: Date | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined;

  formulaireDemande: FormGroup;
  loading: boolean;
  epoux: Marie;
  epouse: Marie;
  demande: Demande;
  applicationErreur: ApplicationErreur;
  messages: Message[];
  estSoumis: boolean = false;
  numeroDemande: string = "20250418-CM-001";


  constructor(private formbuilder: FormBuilder, private demandeMariageService:  CelebrationMariageService, private readonly applicationMessageService: ApplicationMessageService,
    private readonly messageService: MessageService, private readonly navigationService: NavigationService) {
    this.formulaireDemande = this.formbuilder.group({
      id: [null],
      nomEpoux: ['', Validators.required],
      prenomsEpoux: ['', Validators.required],
      telephoneEpoux: ['', Validators.required],
      professionEpoux: ['', Validators.required],
      dateNaissanceEpoux: ['', Validators.required],
      lieuNaissanceEpoux: ['', Validators.required],
      pereEpoux: ['', Validators.required],
      mereEpoux: ['', Validators.required],
      adresseEpoux: ['', Validators.required],
      autorisationEpoux: ['', Validators.required],

      nomEpouse: ['', Validators.required],
      prenomsEpouse: ['', Validators.required],
      telephoneEpouse: ['', Validators.required],
      professionEpouse: ['', Validators.required],
      dateNaissanceEpouse: ['', Validators.required],
      lieuNaissanceEpouse: ['', Validators.required],
      pereEpouse: ['', Validators.required],
      mereEpouse: ['', Validators.required],
      adresseEpouse: ['', Validators.required],
      autorisationEpouse: ['', Validators.required],

      dateSouhaite: ['', Validators.required]

    });
  }

  ngOnInit() {
    let today = new Date();
    let year = today.getFullYear();
    this.minDate = new Date(year, 0, 1);
    this.maxDate = new Date(year, 11, 31);
  }

  get dateControl() {
    return this.rendezVousForm.get('date');
  }

  // Gestion des étapes
  setStep(step: number): void {
    this.currentStep = step;
    console.log(this.formulaireDemande.value.epouse);

  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }


  onSubmit(): void {
    /*const form = this.formulaireDemande.value;
    this.epoux = {
      id: null,
      nom: form.nomEpoux,
      prenoms: form.prenomsEpoux,
      dateNaissances: form.dateNaissanceEpoux,
      telephone: form.telephoneEpoux,
      profession: form.professionEpoux,
      pere: form.pereEpoux,
      mere: form.mereEpoux,
      domicile: form.adresseEpoux,
      autoriserPar: form.autorisationEpoux,
      type: 'EPOUX',
      lieuNaissance: form.lieuNaissanceEpoux
    };

    this.epouse = {
      id: null,
      nom: form.nomEpoux,
      prenoms: form.prenomsEpoux,
      dateNaissances: form.dateNaissanceEpoux,
      telephone: form.telephoneEpoux,
      profession: form.professionEpoux,
      pere: form.pereEpoux,
      mere: form.mereEpoux,
      domicile: form.adresseEpoux,
      autoriserPar: form.autorisationEpouse,
      type: 'EPOUX',
      lieuNaissance: form.lieuNaissanceEpouse
    };

    this.demande = {
      id: form.id,
      epoux: this.epoux,
      epouse: this.epouse,
      dateSouhaite: form.dateSouhaite,
      dateDemande: new Date,
      isConfirme: false
    }

    this.loading = true;
    this.demandeMariageService.enregistrer(this.demande).subscribe({
      next: (response) => {
        this.loading = false;
        this.formulaireDemande.reset();
      },
      error: (error) => {
        this.loading = false;
        this.applicationErreur = error.error;
        this.messages = [{
          severity: this.applicationErreur.type.toLowerCase(),
          detail: this.applicationErreur.messageAvecCode
        }];
      },
    });*/
	// this.navigationService.goTo("/accueil", {messageSuccess: "Votre demande a été bien enregistrée. N° 433212"})
	  this.estSoumis = true;

  }

   /**
	 * Affiche le message de succès lors d'une action.
	 */
	afficherMessageSucces(message: string, summary: string = 'Succès', severity: string = 'success'): void {
		this.applicationMessageService.clear();
		this.messageService.add({
			severity: severity,
			summary: summary,
			detail: message
		});
	}
	/***
	 Gestion de l'upload du fichier
	 */
	onUpload(e: Event) {

	}

}
