create schema assistance;

create table assistance.passenger (
  id               serial primary key,
  first_name        text not null check (char_length(first_name) < 80),
  pic              text,
  assistance       text not null,
  created_at       timestamp default now(),
  email            text,
  phone            text,
  bio              text
);

create table assistance.request (
  id               serial primary key,
  start            text not null,
  stop             text not null,
  start_time       timestamp not null,
  current_position text,
  passenger_id     integer not null references assistance.passenger(id)
);

create table assistance.staff (
  id               serial primary key,
  name             text not null,
  pic              text not null
);

CREATE FUNCTION trigger_job1() RETURNS trigger AS $$
BEGIN
  PERFORM graphile_worker.add_job(TG_ARGV[0], json_build_object(
    'schema', TG_TABLE_SCHEMA,
    'table', TG_TABLE_NAME,
    'op', TG_OP,
    'id', (CASE WHEN TG_OP = 'DELETE' THEN OLD.id ELSE NEW.id END),
    'data', to_json(NEW)
  ));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql VOLATILE;

CREATE TRIGGER send_verification_email1
  AFTER INSERT ON assistance.request
  FOR EACH ROW
  EXECUTE PROCEDURE trigger_job1('send_verification_email');
