package com.mairie.guichet.presentation.dto;

import com.mairie.guichet.domain.CelebrationMariage;

import java.time.LocalDate;

public class CelebrationMariageFilterDto {
    private LocalDate dateDebut ;
    private LocalDate dateFin ;
    private Long idUtilisateurDemande ;
    private String statut;

    public CelebrationMariageFilterDto() {
    }

    public CelebrationMariageFilterDto(CelebrationMariage celebrationMariage) {
        this.dateDebut = celebrationMariage.getCreateAt().toLocalDate() ;
        this.idUtilisateurDemande = celebrationMariage.getIdUtilisateurDemande();
        this.statut = celebrationMariage.getStatut();
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public Long getIdUtilisateurDemande() {
        return idUtilisateurDemande;
    }

    public String getStatut() {
        return statut;
    }
}
