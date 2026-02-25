// Set up pg_cron scheduling via Supabase SQL editor or migration script
// Note: pg_net and pg_cron must be enabled in the Supabase Dashboard Extensions

-- Enable required extensions if not already enabled
create extension if not exists pg_net;
create extension if not exists pg_cron;

-- Remove the job if it already exists to recreate
select cron.unschedule('daily-enrollment-report');

-- Schedule the job to run every day at 8:00 AM IST (which is 2:30 AM UTC)
-- '30 2 * * *' means minute=30, hour=2 (UTC) every day
select
  cron.schedule(
    'daily-enrollment-report',
    '30 2 * * *',
    $$
    select
      net.http_post(
          url:='https://mjlwmzqsgbhqtojqdxit.supabase.co/functions/v1/daily-report',
          headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_SERVICE_ROLE_KEY"}'::jsonb
      ) as request_id;
    $$
  );

-- To view configured cron jobs:
-- select * from cron.job;

-- To view history:
-- select * from cron.job_run_details order by start_time desc limit 5;
