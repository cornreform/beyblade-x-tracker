// Supabase Client
const SUPABASE_URL = 'https://xrdkxzdpxngdhunzwafe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZGt4emRweG5nZGh1bnp3YWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MjQ4MTYsImV4cCI6MjA2MzMwMDgxNn0.KZMuWxR9eXRrCHKYeVJb5CHj0G8h0xMU6K2xR8d6yhk';

let supabaseClient = null;

export async function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials not configured. Using localStorage only.');
    return null;
  }
  // Dynamic import to avoid loading Supabase if not needed
  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm');
  supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabaseClient;
}

export function getSupabase() {
  return supabaseClient;
}

export async function syncPersonalCollection(personalData) {
  const client = getSupabase();
  if (!client) return { success: false, reason: 'not_configured' };
  // TODO: Implement sync logic for Phase 3
  return { success: false, reason: 'not_implemented' };
}

export async function loadFromCloud() {
  const client = getSupabase();
  if (!client) return { success: false, reason: 'not_configured' };
  // TODO: Implement cloud load for Phase 3
  return { success: false, reason: 'not_implemented' };
}
