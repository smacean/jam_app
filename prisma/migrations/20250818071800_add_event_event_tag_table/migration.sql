/*
  Warnings:

  - You are about to drop the column `eventId` on the `EventTag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."EventTag" DROP CONSTRAINT "EventTag_eventId_fkey";

-- AlterTable
ALTER TABLE "public"."EventTag" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "public"."Event_EventTag" (
    "eventId" TEXT NOT NULL,
    "eventTagId" TEXT NOT NULL,

    CONSTRAINT "Event_EventTag_pkey" PRIMARY KEY ("eventId","eventTagId")
);

-- AddForeignKey
ALTER TABLE "public"."Event_EventTag" ADD CONSTRAINT "Event_EventTag_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event_EventTag" ADD CONSTRAINT "Event_EventTag_eventTagId_fkey" FOREIGN KEY ("eventTagId") REFERENCES "public"."EventTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
