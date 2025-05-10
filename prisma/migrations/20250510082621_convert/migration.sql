-- CreateTable
CREATE TABLE `User` (
    `id_user` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tamu` (
    `ID_Undangan` VARCHAR(191) NOT NULL,
    `Nama_tamu` VARCHAR(40) NOT NULL,
    `Email` VARCHAR(40) NOT NULL,
    `No_hp` VARCHAR(15) NOT NULL,
    `Alamat` VARCHAR(255) NOT NULL,
    `Hadir` BOOLEAN NOT NULL DEFAULT false,
    `Kode_token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Tamu_Kode_token_key`(`Kode_token`),
    PRIMARY KEY (`ID_Undangan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
