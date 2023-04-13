CREATE TABLE IF NOT EXISTS public."Login"
(
    id integer NOT NULL,
    uuid character(100) NOT NULL,
    username character(100) NOT NULL,
    password character(100) NOT NULL,
    salt character(100) NOT NULL,
    md5 character(100) NOT NULL,
    sha1 character(100) NOT NULL,
    sha256 character(100) NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public."Login"
    OWNER to postgres;