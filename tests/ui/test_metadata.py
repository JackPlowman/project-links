# Copyright (c) 2026 Jack Plowman
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from playwright.sync_api import Page
from requests import get

from .environment_variables import project_url


def test_title(page: Page) -> None:
    """Test the title of the website."""
    # Arrange
    page.goto(f"{project_url.rstrip('/')}/")
    # Act
    title = page.title()
    # Assert
    assert title == "Jack's Project Links"


def test_sitemap() -> None:
    """Test the sitemap of the website."""
    # Arrange
    sitemap_url = f"{project_url.rstrip('/')}/sitemap.xml"
    # Act
    response = get(sitemap_url, timeout=5)
    # Assert
    assert response.status_code == 200
    assert response.headers["Content-Type"].split(";", maxsplit=1)[0] in {
        "application/xml",
        "text/xml",
    }
    assert "<urlset" in response.text
