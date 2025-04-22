import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TableModule} from "primeng/table";
import { CommonModule } from '@angular/common';
import {VoirPlusInfosComponent} from "../voir-plus-infos/voir-plus-infos.component";
import {Demande} from "../../../models/demande";
import {Button} from "primeng/button";

@Component({
  selector: 'app-vos-demandes',
  standalone: true,
	imports: [
		TableModule,
		CommonModule,
		VoirPlusInfosComponent,
		Button
	],
  templateUrl: './vos-demandes.component.html',
  styleUrl: './vos-demandes.component.scss'
})
export class VosDemandesComponent implements OnInit{
	@Input() demande: Demande;
	visibleInfos: boolean = false;
	selectedDemande: Demande;
	@ViewChild('dt1') dt1: any;
	libelleStatut : any={
		EN_COURS: "En cours",
		NON_DEMARRE: "Non demarré",
		TERMINE: "Terminé",
		REJETE: "Rejeté",
		VALIDE: "Validé",
	};
	getIcon(statut: string): string {
		switch (statut) {
			case 'EN_ATTENTE':
				return 'pi pi-clock';
			case 'EN_COURS':
				return 'pi pi-spinner';
			case 'TERMINE':
				return 'pi pi-check-circle';
			case 'REJETEE':
				return 'pi pi-times-circle';
			default:
				return 'pi pi-question-circle';
		}
	};




	demandes!: any[];
	ngOnInit() {
		this.demandes = [
			{
				date: '15/04/2025',
				typeDemande: "Célébration de mariage",
				numeroDemande: "20250418-CM-001",
				statut: "TERMINE",
				id: 1,
				etapes: [
					{
						id:"1", numero:"1" , nom:"Reception de la demande", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"15/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"2", numero:2 , nom:"Prise de RDV", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"16/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"3", numero:3 , nom:"Reception du dossier", responsable: "Demandeur",dateDebut: "16/04/2025",dateDecision:"18/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"4", numero:4 , nom:"Validation du dossier", responsable: "Demandeur",dateDebut: "18/04/2025",dateDecision:"20/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"5", numero:5 , nom:"Célébration du mariage", responsable: "Demandeur",dateDebut: "20/04/2025",dateDecision:"22/04/2025", statut:"TERMINE",commentaire:""
					}
				],
				details: {},
				libelle: "Célébration de mariage de M. KONE et Mlle SANA",
				idStatut: "1",
				idTypeDemande: "celebration_mariage",
				libelleTypeDemande: "Célébration de mariage"
			},
			{
				date: '08/04/2025',
				typeDemande: "Célébration de mariage",
				numeroDemande: "20250418-CM-001",
				statut: "EN_COURS",
				id: 2,
				etapes: [
					{
						id:"1", numero:"1" , nom:"Envoi de la demande", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"15/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"2", numero:2 , nom:"Prise de RDV", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"16/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"3", numero:3 , nom:"Reception du dossier", responsable: "Demandeur",dateDebut: "16/04/2025",dateDecision:"18/04/2025", statut:"EN_COURS",commentaire:""
					},
					{
						id:"4", numero:4 , nom:"Validation du dossier", responsable: "Demandeur",dateDebut: "18/04/2025",dateDecision:"20/04/2025", statut:"NON_DEMARRE",commentaire:""
					},
					{
						id:"5", numero:5 , nom:"Célébration du mariage", responsable: "Demandeur",dateDebut: "20/04/2025",dateDecision:"22/04/2025", statut:"NON_DEMARRE",commentaire:""
					}
				],
				details: {},
				libelle: "Célébration de mariage de M. ETTIEN et Mlle ANE",
				idStatut: "1",
				idTypeDemande: "celebration_mariage",
				libelleTypeDemande: "Célébration de mariage"
			},
			{
				date: '06/04/2025',
				typeDemande: "Célébration de mariage",
				numeroDemande: "20250418-CM-001",
				statut: "REJETE",
				id: 3,
				etapes: [
					{
						id:"1", numero:"1" , nom:"Reception de la demande", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"15/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"2", numero:2 , nom:"Prise de RDV", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"16/04/2025", statut:"REJETE",commentaire:"Date demandée indisponible."
					},
					{
						id:"3", numero:3 , nom:"Reception du dossier", responsable: "Demandeur",dateDebut: "16/04/2025",dateDecision:"18/04/2025", statut:"REJETE",commentaire:""
					},
					{
						id:"4", numero:4 , nom:"Validation du dossier", responsable: "Demandeur",dateDebut: "18/04/2025",dateDecision:"20/04/2025", statut:"REJETE",commentaire:""
					},
					{
						id:"5", numero:5 , nom:"Célébration du mariage", responsable: "Demandeur",dateDebut: "20/04/2025",dateDecision:"22/04/2025", statut:"REJETE",commentaire:""
					}
				],
				details: {},
				libelle: "Célébration de mariage de M. AKE et Mlle ADOU",
				idStatut: "1",
				idTypeDemande: "celebration_mariage",
				libelleTypeDemande: "Célébration de mariage"
			},
			{
				date: '28/03/2025',
				typeDemande: "Célébration de mariage",
				numeroDemande: "20250418-CM-001",
				statut: "REJETE",
				id: 4,
				etapes: [
					{
						id:"1", numero:"1" , nom:"Reception de la demande", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"15/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"2", numero:2 , nom:"Prise de RDV", responsable: "Mairie",dateDebut: "15/04/2025",dateDecision:"16/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"3", numero:3 , nom:"Reception du dossier", responsable: "Demandeur",dateDebut: "16/04/2025",dateDecision:"18/04/2025", statut:"TERMINE",commentaire:""
					},
					{
						id:"4", numero:4 , nom:"Validation du dossier", responsable: "Demandeur",dateDebut: "18/04/2025",dateDecision:"20/04/2025", statut:"REJETE",commentaire:"Extrait de naissance expiré"
					},
					{
						id:"5", numero:5 , nom:"Célébration du mariage", responsable: "Demandeur",dateDebut: "20/04/2025",dateDecision:"22/04/2025", statut:"REJETE",commentaire:""
					}
				],
				details: {},
				libelle: "Célébration de mariage de M. YEO et Mlle BOUA",
				idStatut: "1",
				idTypeDemande: "celebration_mariage",
				libelleTypeDemande: "Célébration de mariage"
			}
		]
	}

	onHideModalPourPlusInfos(updatedVisible: boolean): void {
		this.visibleInfos = updatedVisible;
	}

	ouvrirPopupPourPlusInfos(demande: any): void {
		this.selectedDemande = demande as Demande;
		this.visibleInfos = true;
	}

	telechargerFichier(demande: any) {
		window.location.href=""
	}
}
