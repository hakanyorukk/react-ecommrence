import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ipqsltxmirfqffylrtqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcXNsdHhtaXJmcWZmeWxydHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDQ1NjUsImV4cCI6MjAzNjk4MDU2NX0.QOziYCC6H50qSEytUU9hM8l_vCBw6-8Q2R0Z6Q4usQg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
