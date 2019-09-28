CREATE DATABASE IF NOT EXISTS shs;
USE shs 
-- COMENTARIO
CREATE TABLE IF NOT EXISTS superheroes(
    Nombre VARCHAR(30),
    IdentidadSecreta VARCHAR(30),
    Sexo VARCHAR(10)
);

INSERT INTO superheroes
    (Nombre,IdentidadSecreta,Sexo)
VALUES
    ('Superman','Clark Kent','Masculino'),
    ('Hombre Araña','Peter Parker','Masculino'),
    ('Boltie',	'Libby','Femenino'),
    ('Capitán América',	'Steve Rogers',	'Masculino'),
    ('Linterna Verde',	'Hal Jordan',	'Masculino'),
    ('Mujer Maravilla',	'Diana Prince',	'Femenino'),
    ('Wolverine',	'Logan',	'Masculino'),
    ('Batichica',	'Bárbara Gordon',	'Femenino'),
    ('El Increíble Hulk',	'Bruce Banner',	'Masculino'),
    ('Mujer Invisible',	'Susan Storm de Richards',	'Femenino'),
    ('Thor',	'Donald Blake',	'Masculino'),
    ('Viuda Negra',	'Natasha Romanoff',	'Femenino'),
    ('Hombre Plancha',	'Anthony Stark',	'Masculino'),
    ('Batman',	'Bruno Díaz',	'Masculino'),
    ('Ruby Thursday',	'Thursday Rubinstein',	'Femenino');