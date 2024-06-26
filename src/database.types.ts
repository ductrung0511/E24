export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      brands: {
        Row: {
          category: string | null
          created_at: string
          id: number
          image_url: string | null
          name: string
          products: Json[] | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          image_url?: string | null
          name: string
          products?: Json[] | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          image_url?: string | null
          name?: string
          products?: Json[] | null
        }
        Relationships: []
      }
      customer: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          inventory_id: number
          inventory_name: string
          last_time_restocked: string
          product_id: number
          quantity: number
          store_id: number
        }
        Insert: {
          inventory_id?: number
          inventory_name: string
          last_time_restocked?: string
          product_id: number
          quantity: number
          store_id: number
        }
        Update: {
          inventory_id?: number
          inventory_name?: string
          last_time_restocked?: string
          product_id?: number
          quantity?: number
          store_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_product_id_fkey1"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      order_details: {
        Row: {
          created_at: string
          order_detail_id: number
          order_id: number
          product_id: number
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          order_detail_id?: number
          order_id: number
          product_id: number
          quantity: number
          unit_price: number
        }
        Update: {
          created_at?: string
          order_detail_id?: number
          order_id?: number
          product_id?: number
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "orderDetails_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["order_id"]
          },
          {
            foreignKeyName: "orderDetails_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          customer_id: string | null
          order_id: number
          OrderStatus: string
          payment_method: string | null
          store_id: number
          table: number | null
          total_amount: number
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          order_id?: number
          OrderStatus?: string
          payment_method?: string | null
          store_id: number
          table?: number | null
          total_amount: number
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          order_id?: number
          OrderStatus?: string
          payment_method?: string | null
          store_id?: number
          table?: number | null
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          brand_name: string | null
          category: string | null
          created_at: string
          description: string | null
          id: number
          image_url: string | null
          name: string | null
          unit_price: number | null
        }
        Insert: {
          brand_name?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          unit_price?: number | null
        }
        Update: {
          brand_name?: string | null
          category?: string | null
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          unit_price?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          email: string | null
          group: string
          id: string
          name: string | null
          store_id: number | null
        }
        Insert: {
          email?: string | null
          group?: string
          id: string
          name?: string | null
          store_id?: number | null
        }
        Update: {
          email?: string | null
          group?: string
          id?: string
          name?: string | null
          store_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      stores: {
        Row: {
          address: string | null
          created_at: string
          id: number
          revenue: number | null
        }
        Insert: {
          address?: string | null
          created_at: string
          id?: number
          revenue?: number | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: number
          revenue?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_order: {
        Args: {
          customer_id: string
          store_id_param: number
          product_details: Database["public"]["CompositeTypes"]["product_detail"][]
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      product_detail: {
        product_id: number | null
        quantity: number | null
        unit_price: number | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
