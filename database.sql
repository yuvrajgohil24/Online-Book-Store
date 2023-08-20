CREATE DATABASE IF NOT EXISTS ebookstore;

USE ebookstore;

CREATE TABLE IF NOT EXISTS books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO books (title, author, description) VALUES
  ('Ramayan', 'Valmiki', 'An ancient Indian epic that narrates the life of Prince Rama.'),
  ('Bhagwat Geeta', 'Vyasa', 'A sacred Hindu scripture that is part of the Mahabharata, presenting a synthesis of various paths to spiritual growth and realization.'),
  ('Upanishads', 'Various', 'A collection of ancient Indian spiritual teachings that explore the nature of reality and self.'),
  ('Mahabharat', 'Vyasa', 'An ancient Indian epic that tells the story of the Kurukshetra War and the fates of the Kaurava and Pandava princes.'),
  ('The Rig Veda', 'Various', 'The oldest sacred text of Hinduism, containing hymns and rituals.'),
  ('The Yajur Veda', 'Various', 'One of the four Vedas, consisting of prose and verses for rituals.'),
  ('The Sam Veda', 'Various', 'The Veda of melodies and chants, used in rituals.'),
  ('The Atharva Veda', 'Various', 'A collection of hymns, spells, and incantations.');