import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://alumyqmyudxmridmlsut.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsdW15cW15dWR4bXJpZG1sc3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NjgyNjgsImV4cCI6MjA0MDA0NDI2OH0.b5v-IPjBzklKQcko1vk8BUWVUaB1Huq9LSxtuI9vTN8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;