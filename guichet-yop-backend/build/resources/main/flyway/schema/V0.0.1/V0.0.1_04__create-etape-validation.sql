-- Table de configuration des étapes de validation
CREATE TABLE validation_etape_config (
        id INT8 PRIMARY KEY,
        nom_etape VARCHAR(255) NOT NULL,
        numero_etape INT NOT NULL,
        delai_jours INT NOT NULL,
        type_demande VARCHAR(50) NOT NULL,
        evenement_succes VARCHAR(50) NOT NULL,
        create_at TIMESTAMP,
        create_by VARCHAR(255),
        update_at TIMESTAMP,
        update_by VARCHAR(255),
        version INT8 NOT NULL DEFAULT 0
);
CREATE SEQUENCE validation_etape_config_id_seq INCREMENT BY 50 START 1;
ALTER TABLE validation_etape_config
    ALTER COLUMN id SET DEFAULT nextval('validation_etape_config_id_seq');

-- Table d'instance des étapes de validation par demande
CREATE TABLE validation_etape_instance (
        id INT8 PRIMARY KEY,
        id_demande INT8 NOT NULL,
        id_config INT8 NOT NULL,
        type_demande VARCHAR(50) NOT NULL,
        numero_etape INT NOT NULL,
        nom_etape VARCHAR(255) NOT NULL,
        statut VARCHAR(50) CHECK (statut IN ('NON_DEMARRE', 'EN_COURS', 'REJETE', 'VALIDE', 'ANNULE', 'TERMINE')) DEFAULT 'NON_DEMARRE',
        commentaire VARCHAR(255) NOT NULL default '',
        id_utilisateur_validation INT8 NOT NULL default 0,
        username_validation VARCHAR(50) NOT NULL default '',
        nom_prenom_validation VARCHAR(50) NOT NULL default '',
        evenement_succes VARCHAR(50) NOT NULL default '',
        date_debut TIMESTAMP,
        valeur_extra VARCHAR(255) NOT NULL default '',
        date_fin TIMESTAMP,
        delai_jours INT default 1,
        date_prevision TIMESTAMP,
        create_at TIMESTAMP,
        create_by VARCHAR(255),
        update_at TIMESTAMP,
        update_by VARCHAR(255),
        version INT8 NOT NULL DEFAULT 0
);
CREATE SEQUENCE validation_etape_instance_id_seq INCREMENT BY 50 START 1;
ALTER TABLE validation_etape_instance
    ALTER COLUMN id SET DEFAULT nextval('validation_etape_instance_id_seq');

INSERT INTO public.validation_etape_config(
	nom_etape, numero_etape, delai_jours, type_demande, evenement_succes)
	VALUES ('Prise de rendez-vous', 1, 10, 'CELEBRATION_MARIAGE', '');
INSERT INTO public.validation_etape_config(
	nom_etape, numero_etape, delai_jours, type_demande, evenement_succes)
	VALUES ('Dépôt du dossier et paiement des frais', 2, 10, 'CELEBRATION_MARIAGE', '');
INSERT INTO public.validation_etape_config(
	nom_etape, numero_etape, delai_jours, type_demande, evenement_succes)
	VALUES ('Choix date de cérémonie', 3, 10, 'CELEBRATION_MARIAGE', '');
INSERT INTO public.validation_etape_config(
	nom_etape, numero_etape, delai_jours, type_demande, evenement_succes)
	VALUES ('Cérémonie et Signature digitale', 4, 10, 'CELEBRATION_MARIAGE', '');
INSERT INTO public.validation_etape_config(
	nom_etape, numero_etape, delai_jours, type_demande, evenement_succes)
	VALUES ('Acte de mariage', 5, 10, 'CELEBRATION_MARIAGE', '');
