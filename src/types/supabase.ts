export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      Achievement: {
        Row: {
          description: string
          id: string
          title: string
          userId: string
        }
        Insert: {
          description: string
          id: string
          title: string
          userId: string
        }
        Update: {
          description?: string
          id?: string
          title?: string
          userId?: string
        }
      }
      Evening: {
        Row: {
          feelings: string[] | null
          greatThings: string[] | null
          id: string
          journalEntryId: string
          nightChecklist: string[] | null
          thingsCouldBeBetter: string[] | null
        }
        Insert: {
          feelings?: string[] | null
          greatThings?: string[] | null
          id: string
          journalEntryId: string
          nightChecklist?: string[] | null
          thingsCouldBeBetter?: string[] | null
        }
        Update: {
          feelings?: string[] | null
          greatThings?: string[] | null
          id?: string
          journalEntryId?: string
          nightChecklist?: string[] | null
          thingsCouldBeBetter?: string[] | null
        }
      }
      JournalEntry: {
        Row: {
          date: string
          id: string
          userId: string
        }
        Insert: {
          date: string
          id: string
          userId: string
        }
        Update: {
          date?: string
          id?: string
          userId?: string
        }
      }
      Morning: {
        Row: {
          affirmations: string[] | null
          gratitudeStatements: string[] | null
          id: string
          journalEntryId: string
          morningChecklist: string[] | null
          quoteOfDay: string
          thoughtOfDay: string
        }
        Insert: {
          affirmations?: string[] | null
          gratitudeStatements?: string[] | null
          id: string
          journalEntryId: string
          morningChecklist?: string[] | null
          quoteOfDay: string
          thoughtOfDay: string
        }
        Update: {
          affirmations?: string[] | null
          gratitudeStatements?: string[] | null
          id?: string
          journalEntryId?: string
          morningChecklist?: string[] | null
          quoteOfDay?: string
          thoughtOfDay?: string
        }
      }
      User: {
        Row: {
          email: string
          id: string
          image: string | null
          name: string
          supabase_id: string
        }
        Insert: {
          email: string
          id: string
          image?: string | null
          name: string
          supabase_id: string
        }
        Update: {
          email?: string
          id?: string
          image?: string | null
          name?: string
          supabase_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
