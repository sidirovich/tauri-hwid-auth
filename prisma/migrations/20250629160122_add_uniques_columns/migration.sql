/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Hwid` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Hwid` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hwid]` on the table `Hwid` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hwid_id_key" ON "Hwid"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hwid_code_key" ON "Hwid"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Hwid_hwid_key" ON "Hwid"("hwid");
