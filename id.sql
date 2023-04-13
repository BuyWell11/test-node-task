CREATE TABLE IF NOT EXISTS public."Ids"
(
    user_id integer NOT NULL,
    name character(100) COLLATE pg_catalog."default" NOT NULL,
    value character(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Id_pkey" PRIMARY KEY (user_id)
)

ALTER TABLE public."Ids"
    OWNER to postgres;