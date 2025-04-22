package com.mairie.guichet.domain;

import com.mairie.guichet.domain.Marie.TypeMarie;
import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.LocalDate;

@StaticMetamodel(Marie.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class Marie_ extends com.mairie.guichet.domain.AbstractEntity_ {

	
	/**
	 * @see com.mairie.guichet.domain.Marie#lieuNaissance
	 **/
	public static volatile SingularAttribute<Marie, String> lieuNaissance;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#profession
	 **/
	public static volatile SingularAttribute<Marie, String> profession;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#dateNaissance
	 **/
	public static volatile SingularAttribute<Marie, LocalDate> dateNaissance;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#mere
	 **/
	public static volatile SingularAttribute<Marie, String> mere;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#domicile
	 **/
	public static volatile SingularAttribute<Marie, String> domicile;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#telephone
	 **/
	public static volatile SingularAttribute<Marie, String> telephone;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#id
	 **/
	public static volatile SingularAttribute<Marie, Long> id;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#pere
	 **/
	public static volatile SingularAttribute<Marie, String> pere;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#type
	 **/
	public static volatile SingularAttribute<Marie, TypeMarie> type;
	
	/**
	 * @see com.mairie.guichet.domain.Marie
	 **/
	public static volatile EntityType<Marie> class_;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#nom
	 **/
	public static volatile SingularAttribute<Marie, String> nom;
	
	/**
	 * @see com.mairie.guichet.domain.Marie#prenoms
	 **/
	public static volatile SingularAttribute<Marie, String> prenoms;

	public static final String LIEU_NAISSANCE = "lieuNaissance";
	public static final String PROFESSION = "profession";
	public static final String DATE_NAISSANCE = "dateNaissance";
	public static final String MERE = "mere";
	public static final String DOMICILE = "domicile";
	public static final String TELEPHONE = "telephone";
	public static final String ID = "id";
	public static final String PERE = "pere";
	public static final String TYPE = "type";
	public static final String NOM = "nom";
	public static final String PRENOMS = "prenoms";

}

