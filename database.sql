	-- phpMyAdmin SQL Dump
	-- version 4.8.4
	-- https://www.phpmyadmin.net/
	--
	-- Hôte : 127.0.0.1:3308
	-- Généré le :  mer. 30 oct. 2019 à 11:34
	-- Version du serveur :  5.7.24
	-- Version de PHP :  7.2.14

	SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
	SET AUTOCOMMIT = 0;
	START TRANSACTION;
	SET time_zone = "+00:00";


	/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
	/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
	/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
	/*!40101 SET NAMES utf8mb4 */;

	--
	-- Base de données :  `memory_game`
	--
	CREATE DATABASE IF NOT EXISTS `memory_game` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
	USE `memory_game`;

	-- --------------------------------------------------------

	--
	-- Structure de la table `scores`
	--

	DROP TABLE IF EXISTS `scores`;
	CREATE TABLE IF NOT EXISTS `scores` (
	  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	  `started_at` date NOT NULL,
	  `finished_at` date NOT NULL,
	  `score` int(11) DEFAULT NULL,
	  `is_finished` tinyint(1) NOT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

	--
	-- Déchargement des données de la table `scores`
	--


	/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
	/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
	/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
