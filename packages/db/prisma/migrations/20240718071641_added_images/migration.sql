/*
  Warnings:

  - You are about to drop the column `image` on the `Doctor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "meetlink" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "patientReport" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "prescription" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "image",
ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photo" TEXT NOT NULL DEFAULT '';
