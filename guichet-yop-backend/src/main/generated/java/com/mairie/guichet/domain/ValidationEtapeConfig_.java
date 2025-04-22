package com.mairie.guichet.domain;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(ValidationEtapeConfig.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class ValidationEtapeConfig_ extends com.mairie.guichet.domain.AbstractEntity_ {

	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#delaiJours
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, Integer> delaiJours;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#numeroEtape
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, Integer> numeroEtape;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#id
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, Long> id;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#nomEtape
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, String> nomEtape;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig
	 **/
	public static volatile EntityType<ValidationEtapeConfig> class_;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#typeDemande
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, String> typeDemande;
	
	/**
	 * @see com.mairie.guichet.domain.ValidationEtapeConfig#evenementSucces
	 **/
	public static volatile SingularAttribute<ValidationEtapeConfig, String> evenementSucces;

	public static final String DELAI_JOURS = "delaiJours";
	public static final String NUMERO_ETAPE = "numeroEtape";
	public static final String ID = "id";
	public static final String NOM_ETAPE = "nomEtape";
	public static final String TYPE_DEMANDE = "typeDemande";
	public static final String EVENEMENT_SUCCES = "evenementSucces";

}

