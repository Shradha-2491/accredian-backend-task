-- CreateTable
CREATE TABLE `Referral` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `referrer` VARCHAR(191) NOT NULL,
    `referee` VARCHAR(191) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referre_email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Referral_referre_email_key`(`referre_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
