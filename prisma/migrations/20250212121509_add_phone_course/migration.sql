/*
  Warnings:

  - You are about to drop the column `referre_email` on the `Referral` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referee_email]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `course` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referee_email` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Referral_referre_email_key` ON `Referral`;

-- AlterTable
ALTER TABLE `Referral` DROP COLUMN `referre_email`,
    ADD COLUMN `course` VARCHAR(191) NOT NULL,
    ADD COLUMN `referee_email` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_referee_email_key` ON `Referral`(`referee_email`);
