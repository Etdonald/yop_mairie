package com.mairie.guichet.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.LocalDateTime;

@StaticMetamodel(ValidationEtapeInstance.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class ValidationEtapeInstance_ extends com.mairie.guichet.domain.AbstractEntity_ {

	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#delaiJours
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Integer> delaiJours;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#idUtilisateurValidation
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Long> idUtilisateurValidation;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#idDemande
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Long> idDemande;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#numeroEtape
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Integer> numeroEtape;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#usernameValidation
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> usernameValidation;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#nomEtape
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> nomEtape;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#nomPrenomValidation
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> nomPrenomValidation;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#typeDemande
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> typeDemande;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#datePrevision
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, LocalDateTime> datePrevision;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#idConfig
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Long> idConfig;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#dateDebut
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, LocalDateTime> dateDebut;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#valeurExtra
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> valeurExtra;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#id
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, Long> id;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#dateFin
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, LocalDateTime> dateFin;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance
	 **/
	public static volatile EntityType<ValidationEtapeInstance> class_;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#commentaire
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> commentaire;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#statut
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> statut;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeInstance#evenementSucces
	 **/
	public static volatile SingularAttribute<ValidationEtapeInstance, String> evenementSucces;

	public static final String DELAI_JOURS = "delaiJours";
	public static final String ID_UTILISATEUR_VALIDATION = "idUtilisateurValidation";
	public static final String ID_DEMANDE = "idDemande";
	public static final String NUMERO_ETAPE = "numeroEtape";
	public static final String USERNAME_VALIDATION = "usernameValidation";
	public static final String NOM_ETAPE = "nomEtape";
	public static final String NOM_PRENOM_VALIDATION = "nomPrenomValidation";
	public static final String TYPE_DEMANDE = "typeDemande";
	public static final String DATE_PREVISION = "datePrevision";
	public static final String ID_CONFIG = "idConfig";
	public static final String DATE_DEBUT = "dateDebut";
	public static final String VALEUR_EXTRA = "valeurExtra";
	public static final String ID = "id";
	public static final String DATE_FIN = "dateFin";
	public static final String COMMENTAIRE = "commentaire";
	public static final String STATUT = "statut";
	public static final String EVENEMENT_SUCCES = "evenementSucces";

}

