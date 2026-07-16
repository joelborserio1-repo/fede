/**
 * Typed schema for the Fede Supabase database.
 *
 * Hand-authored to match supabase/migrations. When the schema changes, either
 * update this file or regenerate with:
 *   npx supabase gen types typescript --project-id <ref> --schema public > lib/database.types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      rings: {
        Row: {
          id: string;
          slug: string;
          name: string;
          cut: string;
          tagline: string | null;
          description: string | null;
          guide_price_from: number;
          currency: string;
          metals: string[];
          hero_image: string | null;
          gallery: string[];
          stone_type: string | null;
          carat_from: number | null;
          colour_grade: string | null;
          clarity_grade: string | null;
          cut_grade: string | null;
          certification: string | null;
          sort_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          cut: string;
          tagline?: string | null;
          description?: string | null;
          guide_price_from: number;
          currency?: string;
          metals?: string[];
          hero_image?: string | null;
          gallery?: string[];
          stone_type?: string | null;
          carat_from?: number | null;
          colour_grade?: string | null;
          clarity_grade?: string | null;
          cut_grade?: string | null;
          certification?: string | null;
          sort_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["rings"]["Insert"]>;
        Relationships: [];
      };
      consults: {
        Row: {
          id: string;
          name: string | null;
          email: string;
          phone: string | null;
          city: string | null;
          preferred_date: string | null;
          preferred_time: string | null;
          message: string | null;
          cal_booking_uid: string | null;
          cal_event_type: string | null;
          status: string;
          source: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email: string;
          phone?: string | null;
          city?: string | null;
          preferred_date?: string | null;
          preferred_time?: string | null;
          message?: string | null;
          cal_booking_uid?: string | null;
          cal_event_type?: string | null;
          status?: string;
          source?: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["consults"]["Insert"]>;
        Relationships: [];
      };
      subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          interest: string;
          city: string | null;
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          interest?: string;
          city?: string | null;
          message?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["subscribers"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

// Convenience aliases
export type Ring = Database["public"]["Tables"]["rings"]["Row"];
export type Consult = Database["public"]["Tables"]["consults"]["Row"];
export type ConsultInsert = Database["public"]["Tables"]["consults"]["Insert"];
export type Subscriber = Database["public"]["Tables"]["subscribers"]["Row"];
export type SubscriberInsert =
  Database["public"]["Tables"]["subscribers"]["Insert"];
