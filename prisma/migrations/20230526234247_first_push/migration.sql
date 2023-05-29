-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Morning" (
    "id" TEXT NOT NULL,
    "quoteOfDay" TEXT NOT NULL,
    "thoughtOfDay" TEXT NOT NULL,
    "affirmations" TEXT[],
    "gratitudeStatements" TEXT[],
    "morningChecklist" TEXT[],
    "journalEntryId" TEXT NOT NULL,

    CONSTRAINT "Morning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evening" (
    "id" TEXT NOT NULL,
    "greatThings" TEXT[],
    "thingsCouldBeBetter" TEXT[],
    "feelings" TEXT[],
    "nightChecklist" TEXT[],
    "journalEntryId" TEXT NOT NULL,

    CONSTRAINT "Evening_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "supabase_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Morning_journalEntryId_key" ON "Morning"("journalEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "Evening_journalEntryId_key" ON "Evening"("journalEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "User_supabase_id_key" ON "User"("supabase_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Morning" ADD CONSTRAINT "Morning_journalEntryId_fkey" FOREIGN KEY ("journalEntryId") REFERENCES "JournalEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evening" ADD CONSTRAINT "Evening_journalEntryId_fkey" FOREIGN KEY ("journalEntryId") REFERENCES "JournalEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
