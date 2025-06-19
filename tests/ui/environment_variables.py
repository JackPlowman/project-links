from os import getenv

project_url = getenv("PROJECT_URL")
if not project_url:
    msg = "The environment variable 'PROJECT_URL' is not set."
    raise ValueError(msg)
