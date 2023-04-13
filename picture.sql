CREATE TABLE IF NOT EXISTS public."Picture"
(
    id integer NOT NULL,
    large character(100) NOT NULL,
    medium character(100) NOT NULL,
    thumbnail character(100) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public."Picture"
    OWNER to postgres;