import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
"https://agsfacuitdbjrlthotrv.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc2ZhY3VpdGRianJsdGhvdHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyMTExMTMsImV4cCI6MjAwMTc4NzExM30.pqHLZrrIzMQgM-BSsCaIzcodSgfaYtvIDmwxDYENRYE"
)