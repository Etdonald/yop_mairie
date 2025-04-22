package com.mairie.guichet.repository;

import com.mairie.guichet.domain.ValidationEtapeInstance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ValidationEtapeInstanceRepository extends JpaRepository<ValidationEtapeInstance, Long> {

    List<ValidationEtapeInstance> findByTypeDemandeAndIdDemande(String typeDemande, Long idDemande);
}
