import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CelebrationMariageComponent } from '../demandes/celebration-mariage/celebration-mariage.component';
import { CardDemandeComponent } from '../etat-civil/card-demande/card-demande.component';
import { InstructionComponent } from './instruction/instruction.component';
import { QuestionsComponent } from './questions/questions.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [HeroSectionComponent, CardDemandeComponent, InstructionComponent, QuestionsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
