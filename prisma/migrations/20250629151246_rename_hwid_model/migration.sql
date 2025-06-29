/*
  Warnings:

  - You are about to drop the `HwidModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HwidModel";

-- CreateTable
CREATE TABLE "Hwid" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "hwid" VARCHAR(255),

    CONSTRAINT "Hwid_pkey" PRIMARY KEY ("id")
);
