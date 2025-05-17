-- Membuat database ShadowCatin
CREATE DATABASE IF NOT EXISTS ShadowCatin;

-- Memberikan semua privileges ke user 'mysql' pada database ShadowCatin
GRANT ALL PRIVILEGES ON ShadowCatin.* TO 'mysql'@'%';

-- Memastikan perubahan privileges berlaku
FLUSH PRIVILEGES;