-- CreateTable
CREATE TABLE "HwidModel" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "hwid" VARCHAR(255),

    CONSTRAINT "HwidModel_pkey" PRIMARY KEY ("id")
);
