CREATE TABLE IF NOT EXISTS public."Users"
(
    id serial NOT NULL,
    name character(100) NOT NULL,
    gender character(20) NOT NULL,
    email character(100) NOT NULL,
    cell character(100) NOT NULL,
    nat character(20) NOT NULL,
    dob date NOT NULL,
    registered date NOT NULL,
    phone character(100) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public."User"
    OWNER to postgres;