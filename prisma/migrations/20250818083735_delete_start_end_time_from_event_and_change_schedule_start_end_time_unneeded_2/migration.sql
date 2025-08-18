/*
  Warnings:

  - You are about to drop the column `end_at` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `start_at` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Event" DROP COLUMN "end_at",
DROP COLUMN "start_at";

-- AlterTable
ALTER TABLE "public"."Schedule" ALTER COLUMN "startAt" DROP NOT NULL,
ALTER COLUMN "endAt" DROP NOT NULL;
