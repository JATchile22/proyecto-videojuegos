CREATE DATABASE IF NOT EXISTS consulta_videojuegos;
USE consulta_videojuegos;

CREATE TABLE demo_categorias (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80) NOT NULL
);

CREATE TABLE demo_productos (
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    categoria_id INT NOT NULL,
    CONSTRAINT fk_demo_categoria
    FOREIGN KEY (categoria_id)
    REFERENCES demo_categorias (categoria_id)
);

INSERT INTO demo_categorias (nombre) VALUES 
('Acción y Aventura'), 
('RPG'), 
('Indie'),
('Survival'),
('Horror'),
('Shooter'),
('Cartas');

INSERT INTO demo_productos (nombre, descripcion, precio, categoria_id) VALUES
('Hollow Knight', 'Explora un vasto reino subterráneo de insectos y héroes', 8300, 3),
('Terraria', 'Juego de aventura, exploración y construcción en sandbox 2D', 5750, 3),
('Elden Ring', 'Juegazo de rol y acción en mundo abierto de FromSoftware', 45499, 2),
('Cyberpunk 2077', 'RPG de mundo abierto futurista en Night City', 39999, 2),
('God of War Ragnarök', 'Segunda parte de Kratos y Atreus en la mitología nórdica', 42000, 1),
('Marvel s Spider-Man', 'Acción y balanceo por todo Nueva York', 42000, 1),
('God of War', 'Aventura épica de Kratos y Atreus en la mitología nórdica', 35000, 1),
('RUST', 'Juego shooter y Supervivencia, donde deberas defenderte a disparos y farmear demasiado...', 22799, 4),
('ARK:Survival Evolved', 'Juego de supervivencia en un mundo repleto de dinosaurios y criatura extintas, ¡No dejes que te coman!', 8300, 4),
('Outlast', 'Sobrevive en un juego en primera persona de terror, donde te adentraras como periodista a un manicomio abandonado, lleno de brstias que aparentemente son humanos...', 8300, 5),
('Five Nights at Freddy s', 'Adentrate como guardia nocturno en una pizzeria llena de animatronicos malditos, sera capaz de durar 5 noches con vida?', 2400, 5),
('Call of Duty®: Black Ops III', 'Soldados cibernéticos combaten conspiraciones globales en un futuro oscuro con frenético multijugador y zombis clásicos.', 57000, 6),
('Call of Duty®: Modern Warfare® 4', 'Corea del Norte invade el Sur mientras Price, fugitivo, caza una amenaza global en sombras.', 62900, 6),
('UNO', 'El juego de cartas más famoso por separar amigos, pero es divertidisimo, entra a jugar y mantén a tus amigos', 6400, 7),
('Balatro', 'Un adictivo juego roguelike donde combinas manos de póker con comodines mágicos para multiplicar puntos.', 8300, 7);



-- Consulta INNER JOIN de prueba (la misma que usará el backend)
SELECT
    p.producto_id,
    p.nombre,
    p.descripcion,
    p.precio,
    c.nombre AS categoria
FROM demo_productos AS p
INNER JOIN demo_categorias AS c
    ON p.categoria_id = c.categoria_id
ORDER BY p.nombre;